# Strategy illustrations

Generated with the built-in imagegen tool. Source: `strategy-illustrations.png`.
The shared StrategyArt component displays five regions of the atlas; Astro serves WebP.

## Final generation prompt

Use case: stylized-concept. Create ONE production illustration sprite atlas for a premium strategic consulting agency website, Brainstorming. A very wide horizontal image, exactly five equal-width square panels side by side, total aspect ratio 5:1 if possible, or widest supported. Each panel contains ONE centered isolated carefully crafted isometric 3D miniature with generous identical empty margins, no object may cross into adjacent panels. All panels use the exact same seamless flat solid navy background #233f7c (no borders, no panels visible, no gradient backdrop). Consistent pearl-white ceramic, frosted pale blue glass and restrained violet #8244ed accents, studio soft shadows, sophisticated architectural model aesthetic, tactile materials, precise geometry, no cartoon faces, no stock icons. LEFT TO RIGHT: 1 a sculptural irregular bar chart with a curved line that rises and falls, representing unpredictable sales; 2 three small ceramic abstract human forms around disconnected workflow blocks representing a team needing a system; 3 a beautifully machined square AI chip with branching translucent circuit pathways, no letters, representing artificial intelligence; 4 several translucent data sheets with tiny structured geometric marks being organized into an aligned stack representing clarity from data; 5 a sculptural ascending staircase with a violet route ribbon leading upward representing prioritized growth. Same scale, camera angle, lighting and visual weight for all five. Each subject occupies 65 percent of its cell width and 70 percent of cell height. No text, no letters, no numbers, no logos, no watermarks. Deliver high resolution image and save output file.

## Content

Original pain-point and service copy is preserved from the supplied PDF, pages 27–28. Additional checklist and journey copy summarizes the service scope, pages 4–11, and is proposed copy for user review, not a verbatim approved passage. The journey is illustrative; the starting point depends on the business diagnosis.

## Motion

GSAP entrances use transforms and opacity with one-shot ScrollTriggers. matchMedia respects live reduced-motion preference changes. registerMotion wraps setup in a context and reverts on Astro navigation. Service hover timelines only run for fine pointers; listeners are explicitly removed during cleanup. No looping illustration animation or scroll hijacking.
