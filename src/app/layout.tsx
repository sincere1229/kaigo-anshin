import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'やさしい介護ナビ | 介護の不安を一緒に整理します',
  description: '突然始まった介護で何から手をつければいいかわからない方へ。登録不要・無料の介護診断で、あなたに合った介護スタイルや施設・費用・両立のヒントがわかります。',
  openGraph: {
    title: 'やさしい介護ナビ',
    description: '介護の不安を一緒に整理します。無料診断5種類。',
    url: 'https://kaigo-anshin.net',
    siteName: 'やさしい介護ナビ',
    locale: 'ja_JP',
    type: 'website',
  },
}

const FOOTER_LINKS = [
  { href: '/about', label: '運営者情報' },
  { href: '/privacy', label: 'プライバシーポリシー' },
  { href: '/column', label: 'コラム一覧' },
  { href: '/recommend', label: 'おすすめサービス' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style={{ background: '#fff', borderBottom: '0.5px solid #e5e7eb', padding: '12px 16px', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ fontSize: 16, fontWeight: 700, color: '#0369a1', textDecoration: 'none' }}>🌿 やさしい介護ナビ</a>
            <a href="/column" style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>コラム</a>
          </div>
        </header>
        {children}
        <footer style={{ background: '#fff', borderTop: '0.5px solid #e5e7eb', padding: '24px 16px', marginTop: 40 }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginBottom: 12, justifyContent: 'center' }}>
              {FOOTER_LINKS.map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>{l.label}</a>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: 11, color: '#9ca3af' }}>© 2025 やさしい介護ナビ · 本サイトはアフィリエイト広告を含みます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
