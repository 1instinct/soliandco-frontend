import {fetchGraphQL} from '@/lib/functions'

/**
 * Fetch all blog posts.
 */
export default async function getSettings() {
  const query = `
    query GetSettings {
      generalSettings {
        title
        description
        url
      }
    }
  `
  const response = await fetchGraphQL(query)
  return response.data.generalSettings
}
