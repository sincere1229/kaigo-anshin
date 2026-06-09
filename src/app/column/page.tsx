import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '介護コラム一覧 | やさしい介護ナビ',
  description: '介護の始め方・施設選び・費用・メンタルケアまで50記事以上の介護コラムを無料公開しています。',
}

const CATEGORIES = [
  { id: 'hajimete', label: '🌱 はじめての介護', count: 10 },
  { id: 'shisetsu-col', label: '🏥 施設・サービス', count: 10 },
  { id: 'seido', label: '💴 費用・制度', count: 10 },
  { id: 'shokuji', label: '🍱 食事・グッズ', count: 10 },
  { id: 'mental', label: '💚 メンタル・両立', count: 10 },
]

export default function ColumnIndex() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>介護コラム一覧</h1>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>全50記事・無料でお読みいただけます</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {CATEGORIES.map(c => (
          <Link key={c.id} href={`/column/${c.id}/1`}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', textDecoration: 'none' }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#1f2937' }}>{c.label}</span>
            <span style={{ fontSize: 12, color: '#9ca3af' }}>{c.count}記事 →</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
