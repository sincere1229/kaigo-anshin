import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'おすすめ介護サービス・グッズ一覧 | やさしい介護ナビ',
  description: '介護ナビが厳選した宅配食・見守りサービス・介護グッズを紹介します。',
}

const SERVICES = [
  { category: '🍱 宅配食・介護食', items: [
    { name: 'メディカルフードサービス', desc: '管理栄養士監修の宅配食。塩分・カロリー制限食も対応。', badge: '介護食', url: 'https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+XXXXXX' },
    { name: '食楽膳', desc: '嚥下障害がある方向けのやわらか冷凍惣菜。飲み込みにくい方に。', badge: '嚥下対応', url: 'https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+XXXXXX' },
    { name: 'メディミール', desc: '介護食・やわらか食の宅配サービス。', badge: '宅配', url: 'https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+XXXXXX' },
    { name: '健康直球便', desc: 'バランスの取れた宅配弁当。高齢者向けメニュー充実。', badge: '宅配弁当', url: 'https://px.a8.net/svt/ejp?a8mat=6GSIB6+5E7E+5ZEMQ+XXXXXX' },
    { name: '宅配食事まとめ資料請求', desc: '複数の宅配食サービスをまとめて比較・資料請求できます。', badge: '比較', url: 'https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+XXXXXX' },
  ]},
  { category: '👁 見守り・安心', items: [
    { name: 'MANOMA（親の見守りセット）', desc: 'セコムの見守りサービス。緊急ボタン・カメラで離れた親を安心して見守れます。', badge: '見守り', url: 'https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+XXXXXX' },
  ]},
  { category: '🤲 介護サービス・グッズ', items: [
    { name: 'イチロウ', desc: '入浴・外出などの介護保険外サービスをプロに依頼できます。', badge: '介護サービス', url: 'https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+XXXXXX' },
    { name: 'KIZIK（履きやすい靴）', desc: 'かがまずに履ける介護向けシューズ。転倒予防に最適。', badge: 'グッズ', url: 'https://px.a8.net/svt/ejp?a8mat=6G72PE+5W4O+5YRHE+XXXXXX' },
    { name: '冷凍庫レンタル.com', desc: '介護食の冷凍保存に便利な冷凍庫のレンタルサービス。', badge: 'レンタル', url: 'https://px.a8.net/svt/ejp?a8mat=6FLN3M+OE2+TS3OI+XXXXXX' },
  ]},
]

export default function RecommendPage() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>おすすめ介護サービス・グッズ</h1>
      <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>※ 本ページはアフィリエイト広告を含みます</p>

      {SERVICES.map((sec, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 10 }}>{sec.category}</h2>
          {sec.items.map((item, j) => (
            <a key={j} href={item.url} target="_blank" rel="nofollow noopener noreferrer"
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{item.name}</span>
                <span style={{ fontSize: 10, background: '#f0f9ff', color: '#0284c7', borderRadius: 4, padding: '2px 6px' }}>{item.badge}</span>
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{item.desc}</p>
            </a>
          ))}
        </div>
      ))}
    </main>
  )
}
