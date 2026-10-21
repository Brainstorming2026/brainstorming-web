import type { ArticleImage } from '@/data/articles'

/** URL utilizable en metadatos (Open Graph, JSON-LD) de una imagen local o del CMS. */
export const imageUrl = (image: ArticleImage): string => typeof image === 'string' ? image : image.src
