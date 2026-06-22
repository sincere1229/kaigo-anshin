import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'あかりがえらんだサービス | やさしい介護ナビ',
  description: '介護サポーターあかりが厳選した、宅配食・見守り・介護サービス・グッズ一覧。',
}

const SERVICES = [
  {
    category: '宅配食・介護食', emoji: '🍱',
    color: '#c0305a', bgColor: '#fff0f5', borderColor: '#fcc0d0',
    akariComment: '食事の準備が大変な方に。栄養管理もプロにお任せできます。',
    items: [
      { name: 'メディカルフードサービス', badge: '管理栄養士監修', badgeColor: '#c0305a',
        desc: '塩分・カロリー制限食も対応。管理栄養士監修の宅配食。', point: '✓ 制限食も豊富なメニュー',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6AU69E+4GYQ+5YJRM', beacon: 'https://www10.a8.net/0.gif?a8mat=4B5LK2+6AU69E+4GYQ+5YJRM' },
      { name: '食楽膳', badge: '嚥下対応', badgeColor: '#c0305a',
        desc: '嚥下障害がある方向けのやわらか冷凍惣菜。飲み込みにくい方に。', point: '✓ やわらか食・ムース食対応',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6A8QNM+5VTA+5YJRM', beacon: 'https://www11.a8.net/0.gif?a8mat=4B5LK2+6A8QNM+5VTA+5YJRM' },
      { name: 'メディミール', badge: '宅配', badgeColor: '#c0305a',
        desc: '介護食・やわらか食の宅配サービス。', point: '✓ 定期便で毎日の食事をサポート',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6F07HU+4ICQ+5YZ76', beacon: 'https://www12.a8.net/0.gif?a8mat=4B5LK2+6F07HU+4ICQ+5YZ76' },
      { name: '健康直球便', badge: '宅配弁当', badgeColor: '#c0305a',
        desc: 'バランスの取れた宅配弁当。高齢者向けメニュー充実。', point: '✓ 栄養バランスのとれた食事',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6GSIB6+5E7E+5ZEMQ', beacon: 'https://www10.a8.net/0.gif?a8mat=4B5LK2+6GSIB6+5E7E+5ZEMQ' },
    ],
  },
  {
    category: '見守り・安心', emoji: '👁',
    color: '#1a6b8a', bgColor: '#f0f8ff', borderColor: '#a0d0f0',
    akariComment: '離れて暮らす親御さんの様子が心配な方に。スマホで確認できます。',
    items: [
      { name: 'MANOMA（親の見守りセット）', badge: 'ソニー製', badgeColor: '#1a6b8a',
        desc: 'ソニーの見守りサービス。緊急ボタン・カメラ・センサーで安心を提供。', point: '✓ 離れた親をスマホで見守れる',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6DTCAA+59J2+639IQ', beacon: 'https://www10.a8.net/0.gif?a8mat=4B5LK2+6DTCAA+59J2+639IQ' },
    ],
  },
  {
    category: '介護サービス・グッズ', emoji: '🤲',
    color: '#1a6b3c', bgColor: '#f0faf5', borderColor: '#a0d8b8',
    akariComment: 'プロの力を借りることで、介護する側の負担が大きく減ります。',
    items: [
      { name: 'イチロウ', badge: '介護保険外', badgeColor: '#1a6b3c',
        desc: '入浴・外出などの介護保険外サービスをプロに依頼できます。', point: '✓ 24時間365日対応',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+5URGXE+54PG+5YJRM', beacon: 'https://www10.a8.net/0.gif?a8mat=4B5LK2+5URGXE+54PG+5YJRM' },
      { name: 'KIZIK（履きやすい靴）', badge: 'グッズ', badgeColor: '#1a6b3c',
        desc: 'かがまずに履ける介護向けシューズ。転倒予防に最適。', point: '✓ 転倒リスクを軽減',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6G72PE+5W4O+5YRHE', beacon: 'https://www12.a8.net/0.gif?a8mat=4B5LK2+6G72PE+5W4O+5YRHE' },
    ],
  },
]

export default function RecommendPage() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 60px' }}>
      <div style={{ background: 'linear-gradient(160deg, #fff0f5, #fce8ef)', padding: '24px 16px 20px' }}>
        <Link href="/" style={{ fontSize: 12, color: '#e05080', textDecoration: 'none', display: 'block', marginBottom: 12 }}>
          ← やさしい介護ナビ
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #f8a0c0', position: 'relative' }}>
            <Image src="/images/characters/akari-smile.png" alt="あかり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#e05080', fontWeight: 700, margin: '0 0 2px' }}>あかりがえらんだサービス</p>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: '#3a1020', margin: 0, lineHeight: 1.3 }}>信頼できる介護サービス一覧</h1>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', marginTop: 14, boxShadow: '0 1px 6px rgba(224,80,128,0.1)' }}>
          <p style={{ fontSize: 13, color: '#7a2040', lineHeight: 1.6, margin: 0 }}>
            私が実際に調べて、安心してご紹介できるサービスだけを集めました。
          </p>
        </div>
        <p style={{ fontSize: 10, color: '#d0a0b0', margin: '10px 0 0' }}>※ 本ページはアフィリエイト広告を含みます</p>
      </div>

      <div style={{ padding: '20px 16px 0' }}>
        {SERVICES.map((sec, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>{sec.emoji}</span>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: '#3a1020', margin: 0 }}>{sec.category}</h2>
            </div>
            <div style={{ background: sec.bgColor, border: `1px solid ${sec.borderColor}`, borderRadius: '0 12px 12px 12px', padding: '10px 12px', marginBottom: 10, marginLeft: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                <Image src="/images/characters/akari-care.png" alt="あかり" fill style={{ objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: 12, color: sec.color, lineHeight: 1.5, margin: 0 }}>{sec.akariComment}</p>
            </div>
            {sec.items.map((item, j) => (
              <div key={j}>
                <a href={item.url} target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display: 'block', background: '#fff', border: `1.5px solid ${sec.borderColor}`, borderRadius: 14, padding: '14px 16px', marginBottom: 10, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', flex: 1 }}>{item.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, background: sec.bgColor, color: item.badgeColor, borderRadius: 6, padding: '3px 8px', flexShrink: 0, marginLeft: 8, border: `1px solid ${sec.borderColor}` }}>{item.badge}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: '0 0 8px' }}>{item.desc}</p>
                  <p style={{ fontSize: 12, color: sec.color, fontWeight: 600, margin: '0 0 10px' }}>{item.point}</p>
                  <div style={{ background: sec.color, color: '#fff', borderRadius: 8, padding: '9px', textAlign: 'center', fontSize: 13, fontWeight: 700 }}>
                    詳しく見てみる →
                  </div>
                </a>
                <img src={item.beacon} width={1} height={1} alt="" style={{ border: 0 }} />
              </div>
            ))}
          </div>
        ))}

        <div style={{ background: 'linear-gradient(135deg, #fff0f5, #fce8ef)', border: '1px solid #fcc0d0', borderRadius: 14, padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#3a1020', marginBottom: 4 }}>あなたに合ったサービスを診断で絞り込む</p>
          <p style={{ fontSize: 12, color: '#c05070', marginBottom: 12 }}>状況別の無料診断で最適なサービスが見つかります</p>
          <Link href="/" style={{ display: 'inline-block', background: '#c0305a', color: '#fff', borderRadius: 8, padding: '10px 24px', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            診断を受けてみる →
          </Link>
        </div>
      </div>
    </main>
  )
}
