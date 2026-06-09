import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'やさしい介護ナビ | 介護の不安を無料診断で整理',
  description: '突然始まった介護で迷っている方へ。5つの無料診断で介護タイプ・施設選び・限界チェック・費用・離職リスクがわかります。登録不要。',
}

const DIAGNOSES = [
  { id: 'kaigo-type', emoji: '🏠', title: '介護タイプ診断', desc: '在宅・施設・プロ委託、あなたに合うスタイルは？', time: '10問・約3分', href: '/diagnosis/kaigo-type', color: '#0ea5e9' },
  { id: 'shisetsu', emoji: '🏥', title: '施設選び適性診断', desc: '特養・有料・グループホーム・サ高住の違いがわかる', time: '10問・約3分', href: '/diagnosis/shisetsu', color: '#7c3aed' },
  { id: 'genkai', emoji: '⚠️', title: '在宅介護の限界チェック', desc: '今の状態を続けて大丈夫？SOSのサインを確認', time: '10問・約3分', href: '/diagnosis/genkai', color: '#dc2626' },
  { id: 'cost', emoji: '💴', title: '介護費用シミュレーション', desc: '収入・資産・要介護度から費用の目安と対策がわかる', time: '10問・約3分', href: '/diagnosis/cost', color: '#059669' },
  { id: 'roshoku', emoji: '💼', title: '介護離職リスク診断', desc: '仕事を辞めるべき？続けるべき？今の状況を判定', time: '10問・約3分', href: '/diagnosis/roshoku', color: '#d97706' },
]

const COLUMNS = [
  { id: 1, title: '突然の介護宣告。まず何をすればいい？', category: 'hajimete' },
  { id: 2, title: '要介護認定の申請方法を徹底解説', category: 'seido' },
  { id: 3, title: '介護保険でできること・できないこと', category: 'seido' },
  { id: 4, title: '在宅介護と施設介護、どちらが向いている？', category: 'kurashi' },
  { id: 5, title: '介護疲れを感じたら読む記事', category: 'mental' },
  { id: 6, title: '宅配食サービス比較【介護食対応版】', category: 'shokuji' },
]

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '24px 16px 48px' }}>
      {/* ヒーロー */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <p style={{ fontSize: 12, color: '#0284c7', fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em' }}>登録不要・完全無料</p>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#0c4a6e', lineHeight: 1.4, marginBottom: 12 }}>介護の不安を、<br />一緒に整理しましょう</h1>
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>突然始まった介護で何から手をつければいいか<br />迷っているあなたへ。診断で次の一歩が見えます。</p>
      </div>

      {/* 診断一覧 */}
      <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 12 }}>5つの無料診断</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
        {DIAGNOSES.map(d => (
          <Link key={d.id} href={d.href} style={{ display: 'flex', gap: 14, background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '14px 16px', textDecoration: 'none', alignItems: 'center' }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>{d.emoji}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', marginBottom: 3 }}>{d.title}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{d.desc}</div>
              <div style={{ fontSize: 11, color: d.color, fontWeight: 600 }}>{d.time}</div>
            </div>
            <div style={{ fontSize: 16, color: '#d1d5db', flexShrink: 0 }}>›</div>
          </Link>
        ))}
      </div>

      {/* コラム */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151' }}>介護コラム</h2>
        <Link href="/column" style={{ fontSize: 12, color: '#0284c7', textDecoration: 'none' }}>一覧を見る →</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        {COLUMNS.map(c => (
          <Link key={c.id} href={`/column/${c.category}/${c.id}`}
            style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', textDecoration: 'none' }}>
            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{c.title}</span>
          </Link>
        ))}
      </div>

      {/* おすすめ */}
      <div style={{ background: '#f0f9ff', border: '0.5px solid #bae6fd', borderRadius: 12, padding: '16px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#0369a1', marginBottom: 6 }}>おすすめサービス一覧</p>
        <p style={{ fontSize: 12, color: '#0284c7', marginBottom: 10 }}>宅食・見守り・介護グッズをまとめました</p>
        <Link href="/recommend" style={{ display: 'inline-block', background: '#0ea5e9', color: '#fff', borderRadius: 8, padding: '8px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>見てみる</Link>
      </div>
    </main>
  )
}
