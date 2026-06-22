import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'やさしい介護ナビ | 介護の不安を無料診断で整理',
  description: '突然始まった介護で迷っている方へ。介護サポーターあかりが、5つの無料診断であなたに合った選択肢をご提案します。登録不要。',
}

const SITUATIONS = [
  { id: 'kaigo-type', emoji: '🏠', label: '在宅か施設か迷っている',         desc: '介護タイプ診断',         href: '/diagnosis/kaigo-type' },
  { id: 'shisetsu',   emoji: '🏥', label: '施設の種類・選び方を知りたい',    desc: '施設選び適性診断',       href: '/diagnosis/shisetsu' },
  { id: 'genkai',     emoji: '⚠️', label: '介護が限界かもしれない',          desc: '在宅介護の限界チェック', href: '/diagnosis/genkai' },
  { id: 'cost',       emoji: '💴', label: '介護費用・お金のことが心配',       desc: '介護費用シミュレーション', href: '/diagnosis/cost' },
  { id: 'roshoku',    emoji: '💼', label: '仕事と介護を両立できるか不安',    desc: '介護離職リスク診断',     href: '/diagnosis/roshoku' },
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
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 60px' }}>

      {/* ヒーローエリア */}
      <div style={{
        background: 'linear-gradient(160deg, #fff0f5 0%, #fce8ef 60%, #fad8e8 100%)',
        padding: '32px 20px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, color: '#e05080', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 4 }}>
            🌸 やさしい介護ナビ
          </p>
          <p style={{ fontSize: 12, color: '#c07090', margin: 0 }}>登録不要・完全無料</p>
        </div>

        {/* あかりの吹き出し */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '14px 18px', marginBottom: 20,
          boxShadow: '0 2px 12px rgba(224,80,128,0.12)', position: 'relative', textAlign: 'left',
        }}>
          <div style={{
            position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid #fff',
          }} />
          <p style={{ fontSize: 15, fontWeight: 700, color: '#6b1a30', lineHeight: 1.6, margin: '0 0 4px' }}>
            一人で抱え込まなくて大丈夫。
          </p>
          <p style={{ fontSize: 13, color: '#8b3050', lineHeight: 1.6, margin: 0 }}>
            今どんな状況か教えていただけますか？<br />
            あなたに合った情報をご案内します。
          </p>
        </div>

        {/* あかり画像 */}
        <div style={{ position: 'relative', height: 260, marginBottom: -10 }}>
          <Image
            src="/images/characters/akari-main.png"
            alt="介護サポーター あかり"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
            priority
          />
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.8)', borderRadius: 20, padding: '4px 14px', marginBottom: 24,
        }}>
          <span style={{ fontSize: 11, color: '#e05080' }}>介護サポーター</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#c0305a' }}>あかり</span>
        </div>
      </div>

      {/* 状況選択 */}
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%', overflow: 'hidden',
            flexShrink: 0, border: '2px solid #fcc0d0', position: 'relative',
          }}>
            <Image src="/images/characters/akari-smile.png" alt="あかり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ background: '#fff0f5', borderRadius: '0 12px 12px 12px', padding: '10px 14px', flex: 1 }}>
            <p style={{ fontSize: 13, color: '#7a2040', fontWeight: 600, margin: 0 }}>
              今のご状況を教えてください
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {SITUATIONS.map(s => (
            <Link key={s.id} href={s.href} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#fff', border: '1.5px solid #fcc0d0', borderRadius: 14,
              padding: '14px 16px', textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(224,80,128,0.08)',
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#3a1020', marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: '#e05080', fontWeight: 600 }}>→ {s.desc}</div>
              </div>
              <span style={{ fontSize: 18, color: '#f0a0b8', flexShrink: 0 }}>›</span>
            </Link>
          ))}
        </div>

        {/* あかりのひとこと */}
        <div style={{
          background: 'linear-gradient(135deg, #fff5f8, #ffeaf2)',
          border: '1px solid #fcc0d0', borderRadius: 14, padding: '16px',
          marginBottom: 28, display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', overflow: 'hidden',
            flexShrink: 0, border: '2px solid #f8a0c0', position: 'relative',
          }}>
            <Image src="/images/characters/akari-care.png" alt="あかり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#e05080', fontWeight: 700, margin: '0 0 4px' }}>あかりより</p>
            <p style={{ fontSize: 13, color: '#7a2040', lineHeight: 1.7, margin: 0 }}>
              介護は突然始まることが多いです。わからなくて当然。まずは診断で状況を整理しましょう。
            </p>
          </div>
        </div>

        {/* コラム */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#3a1020', margin: 0 }}>📖 介護コラム</h2>
          <Link href="/column" style={{ fontSize: 12, color: '#e05080', textDecoration: 'none' }}>一覧を見る →</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {COLUMNS.map((c, i) => (
            <Link key={i} href={`/column/${c.category}/${c.id}`}
              style={{ display: 'block', background: '#fff', border: '0.5px solid #fcc0d0', borderRadius: 10, padding: '12px 14px', textDecoration: 'none' }}>
              <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{c.title}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: '#6b1a30', borderRadius: 14, padding: '18px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#fcc0d0', marginBottom: 4 }}>あかりがえらんだ信頼できるサービス</p>
          <p style={{ fontSize: 11, color: '#c08090', marginBottom: 12 }}>宅配食・見守り・介護グッズをまとめました</p>
          <Link href="/recommend" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #e05080, #c0305a)',
            color: '#fff', borderRadius: 8, padding: '10px 24px',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>
            サービスを見てみる →
          </Link>
        </div>
      </div>
    </main>
  )
}
