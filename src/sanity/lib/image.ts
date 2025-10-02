import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ 
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string 
})

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
