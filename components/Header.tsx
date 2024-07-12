import getMenuBySlug from '@/lib/queries/getMenuBySlug'
import getSettings from '@/lib/queries/getSettings'
import Link from 'next/link'

/**
 * Header component.
 */
export default async function Header() {
  const settings = await getSettings()
  const menu = await getMenuBySlug('header')

  return (
    <header>
      <div>
        <Link href="/">
          <h1
            className="mb-0"
            dangerouslySetInnerHTML={{
              __html: settings?.title || 'Next.js WordPress'
            }}
          />
        </Link>
        <p
          dangerouslySetInnerHTML={{
            __html: settings?.description || `It&apos;s Headless WordPress`
          }}
        />
      </div>
      <nav className="flex justify-between gap-4">
        {!!menu &&
          menu.menuItems.edges.map((item) => (
            <Link key={item.node.databaseId} href={item.node.uri}>
              {item.node.label}
            </Link>
          ))}
      </nav>
    </header>
  )
}
