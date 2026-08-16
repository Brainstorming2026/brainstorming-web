import { useEffect, useRef, useState } from 'react'
import { Map, MapMarker, MarkerContent, MapPopup, MapControls, useMap } from '@/components/ui/map'
import { officeLocation } from '@/data'

const FLY_IN_ZOOM_OFFSET = 4
const FLY_IN_DURATION_MS = 2800
const FLY_IN_PITCH = 50
const SETTLE_DURATION_MS = 900
const RECENTER_DURATION_MS = 1000

// Keep the office block in view: MIN_ZOOM still reads as a neighborhood,
// MAX_ZOOM stops short of losing every street label.
const MIN_ZOOM = officeLocation.zoom - 4
const MAX_ZOOM = officeLocation.zoom + 3

/** Flies the camera in from a wider, tilted shot down to the office, then levels off. */
function MapFlyIn() {
  const { map, isLoaded } = useMap()
  const hasFlown = useRef(false)

  useEffect(() => {
    if (!map || !isLoaded || hasFlown.current) return
    hasFlown.current = true

    map.flyTo({
      center: [officeLocation.longitude, officeLocation.latitude],
      zoom: officeLocation.zoom,
      pitch: FLY_IN_PITCH,
      bearing: -12,
      curve: 1.7,
      speed: 0.6,
      duration: FLY_IN_DURATION_MS,
      essential: true,
    })

    map.once('moveend', () => {
      map.easeTo({ pitch: 0, bearing: 0, duration: SETTLE_DURATION_MS })
    })
  }, [map, isLoaded])

  return null
}

function OfficeMarker() {
  return (
    <span className="group relative flex h-10 w-10 items-center justify-center transition-transform duration-200 ease-out hover:scale-110">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
      <span className="absolute h-full w-full rounded-full bg-primary/30 blur-md" />
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white shadow-[0_0_0_4px_rgba(125,68,228,0.25),0_4px_12px_rgba(0,0,0,0.35)]">
        <img
          src="/brainstorming-icon-file.png"
          alt=""
          className="h-6 w-6 object-contain"
        />
      </span>
    </span>
  )
}

/** Custom control that flies the camera back to the office when the user has panned/zoomed away. */
function RecenterControl() {
  const { map } = useMap()

  const handleClick = () => {
    map?.flyTo({
      center: [officeLocation.longitude, officeLocation.latitude],
      zoom: officeLocation.zoom,
      pitch: 0,
      bearing: 0,
      duration: RECENTER_DURATION_MS,
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Centrar en la oficina"
      className="absolute bottom-2 left-2 z-10 flex size-8 items-center justify-center rounded-md border border-primary/30 bg-dark-800/80 text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-dark-700/80"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function OfficePopup() {
  return (
    <>
      <p className="font-heading text-sm font-bold text-popover-foreground">{officeLocation.name}</p>
      <p className="mt-0.5 text-xs text-popover-foreground/70">{officeLocation.address}</p>
    </>
  )
}

function FooterMapCanvas() {
  return (
    <Map
      theme="dark"
      center={[officeLocation.longitude, officeLocation.latitude]}
      zoom={officeLocation.zoom - FLY_IN_ZOOM_OFFSET}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      className="dark h-full w-full [&_.maplibregl-ctrl-attrib]:!bg-transparent"
    >
      <MapFlyIn />

      <MapControls
        showZoom
        position="bottom-right"
        className="[&_button]:text-white [&>div]:border-primary/30 [&>div]:bg-dark-800/80 [&>div]:backdrop-blur-sm"
      />

      <RecenterControl />

      <MapMarker longitude={officeLocation.longitude} latitude={officeLocation.latitude}>
        <MarkerContent className="animate-in zoom-in-50 fade-in duration-500">
          <OfficeMarker />
        </MarkerContent>
      </MapMarker>

      <MapPopup
        longitude={officeLocation.longitude}
        latitude={officeLocation.latitude}
        offset={22}
        anchor="bottom"
        closeOnClick={false}
      >
        <OfficePopup />
      </MapPopup>
    </Map>
  )
}

function MapSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-dark-900">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60 [animation-delay:300ms]" />
      </div>
    </div>
  )
}

/** Defers mounting the map (and its fly-in entrance) until the footer scrolls into view. */
export default function FooterMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!containerRef.current || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
    )
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={containerRef} className="h-full w-full">
      {isVisible ? <FooterMapCanvas /> : <MapSkeleton />}
    </div>
  )
}
