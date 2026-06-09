import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '介護コラム一覧 | やさしい介護ナビ',
  description: '介護の始め方・施設選び・費用・メンタルケアまで50記事以上の介護コラムを無料公開しています。',
}

const COLUMNS: { id: string; label: string; articles: { id: number; title: string }[] }[] = [
  { id: 'hajimete', label: '🌱 はじめての介護', articles: [{"id": 1, "title": "突然の介護宣告。まず何をすればいいか"}, {"id": 2, "title": "要介護認定の申請方法を徹底解説"}, {"id": 3, "title": "ケアマネジャーとは？選び方と付き合い方"}, {"id": 4, "title": "介護保険でできること・できないこと一覧"}, {"id": 5, "title": "地域包括支援センターの使い方"}, {"id": 6, "title": "介護日誌の書き方とメリット"}, {"id": 7, "title": "兄弟間の介護役割分担でもめないために"}, {"id": 8, "title": "かかりつけ医との連携方法"}, {"id": 9, "title": "介護保険の更新・区分変更の手続き"}, {"id": 10, "title": "介護経験者が語る「最初にやっておけばよかったこと」"}] },
  { id: 'shisetsu-col', label: '🏥 施設・サービス', articles: [{"id": 1, "title": "特養・有料老人ホーム・グループホームの違い"}, {"id": 2, "title": "サービス付き高齢者向け住宅（サ高住）とは"}, {"id": 3, "title": "施設見学で必ず確認すべき10のポイント"}, {"id": 4, "title": "デイサービスとデイケアの違い"}, {"id": 5, "title": "ショートステイを上手に使う方法"}, {"id": 6, "title": "訪問介護と訪問看護の違い"}, {"id": 7, "title": "介護付き有料老人ホームの選び方"}, {"id": 8, "title": "認知症の親に合う施設の選び方"}, {"id": 9, "title": "施設入居後に後悔しないためのチェックリスト"}, {"id": 10, "title": "在宅と施設、どちらが費用は安い？"}] },
  { id: 'seido', label: '💴 費用・制度', articles: [{"id": 1, "title": "介護保険の自己負担割合はいくら？"}, {"id": 2, "title": "高額介護サービス費制度の申請方法"}, {"id": 3, "title": "介護休業給付金の条件と受け取り方"}, {"id": 4, "title": "特定入所者介護サービス費（補足給付）とは"}, {"id": 5, "title": "リバースモーゲージ・リースバックの仕組みと注意点"}, {"id": 6, "title": "成年後見制度とは？使うべきケースと手続き"}, {"id": 7, "title": "介護保険の限度額と超えた場合の費用"}, {"id": 8, "title": "税控除で介護費用を取り戻す方法"}, {"id": 9, "title": "生命保険・介護保険の見直しポイント"}, {"id": 10, "title": "介護にかかる平均費用はいくら？データで見る実態"}] },
  { id: 'shokuji', label: '🍱 食事・グッズ', articles: [{"id": 1, "title": "介護食宅配サービス比較【2025年版】"}, {"id": 2, "title": "嚥下（えんげ）障害がある方の食事の工夫"}, {"id": 3, "title": "冷凍介護食の選び方と保存方法"}, {"id": 4, "title": "介護用ベッドの選び方【レンタルと購入どちらがいい？】"}, {"id": 5, "title": "見守りカメラのおすすめと設置のポイント"}, {"id": 6, "title": "介護用の履きやすい靴の選び方"}, {"id": 7, "title": "尿漏れ対策グッズの選び方と使い方"}, {"id": 8, "title": "シニア向けスマホの選び方と設定方法"}, {"id": 9, "title": "介護リフォームの費用と補助金"}, {"id": 10, "title": "エンディングノートの書き方と選び方"}] },
  { id: 'mental', label: '💚 メンタル・両立', articles: [{"id": 1, "title": "介護疲れを感じたら読む記事"}, {"id": 2, "title": "介護うつにならないための10のルール"}, {"id": 3, "title": "仕事と介護を両立する人のタイムマネジメント"}, {"id": 4, "title": "介護離職した人の体験談と後悔しないための判断基準"}, {"id": 5, "title": "親に「施設に入って」と言えない人へ"}, {"id": 6, "title": "介護中の「怒り」と上手に付き合う方法"}, {"id": 7, "title": "遠距離介護の実態と上手な乗り越え方"}, {"id": 8, "title": "介護者のための相談窓口まとめ"}, {"id": 9, "title": "認知症の親との向き合い方"}, {"id": 10, "title": "介護が終わったあとのグリーフケア"}] },
]

export default function ColumnIndex() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>介護コラム一覧</h1>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>全50記事・無料でお読みいただけます</p>

      {COLUMNS.map(cat => (
        <div key={cat.id} style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#374151', marginBottom: 10, paddingBottom: 6, borderBottom: '0.5px solid #e5e7eb' }}>{cat.label}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {cat.articles.map(a => (
              <Link key={a.id} href={`/column/${cat.id}/${a.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '11px 14px', textDecoration: 'none' }}>
                <span style={{ fontSize: 11, color: '#9ca3af', flexShrink: 0, minWidth: 20 }}>{a.id}</span>
                <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{a.title}</span>
                <span style={{ fontSize: 12, color: '#d1d5db', marginLeft: 'auto', flexShrink: 0 }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Link href="/" style={{ fontSize: 13, color: '#0284c7', textDecoration: 'none' }}>診断を受ける →</Link>
      </div>
    </main>
  )
}
