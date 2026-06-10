import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

const ROADMAPS: Record<string, {
  title: string; diagnosisLabel: string; diagnosisHref: string;
  phase1Title: string; phase1: string;
  phase2Title: string; phase2: string;
  phase3Title: string; phase3: string;
}> = {
  'kaigo-zaitaku': {
    title: '在宅介護スタート90日ロードマップ',
    diagnosisLabel: '🏠 在宅介護タイプ',
    diagnosisHref: '/diagnosis/kaigo-type',
    phase1Title: '1〜30日目',
    phase1: '市区町村に要介護認定を申請する。ケアマネジャーに連絡し、ケアプランを作成してもらう。訪問介護・通所介護のサービスを1つ試す。',
    phase2Title: '31〜60日目',
    phase2: 'デイサービスの回数を増やし、自分の休息時間を確保する。緊急時の連絡先リストを家族全員で共有する。',
    phase3Title: '61〜90日目',
    phase3: '介護保険の上限額を確認し、使えていないサービスを追加する。半年後の状態変化に備え、施設見学を1件行う。',
  },
  'kaigo-pro': {
    title: 'プロ委託介護スタート90日ロードマップ',
    diagnosisLabel: '👩‍⚕️ プロ委託タイプ',
    diagnosisHref: '/diagnosis/kaigo-type',
    phase1Title: '1〜30日目',
    phase1: '地域包括支援センターに相談し、使えるサービス一覧をもらう。訪問介護・デイサービスの見学・体験を行う。',
    phase2Title: '31〜60日目',
    phase2: 'ケアマネジャーと毎月の面談体制を作る。職場に介護中であることを伝え、勤務調整の可能性を確認する。',
    phase3Title: '61〜90日目',
    phase3: 'サービスの利用状況を家族で共有する仕組みを作る（LINEグループなど）。次の段階（施設入居）の選択肢を情報収集しておく。',
  },
  'kaigo-shisetsu': {
    title: '施設入居検討90日ロードマップ',
    diagnosisLabel: '🏥 施設入居タイプ',
    diagnosisHref: '/diagnosis/kaigo-type',
    phase1Title: '1〜30日目',
    phase1: '要介護度を確認し、入居できる施設タイプを絞る。特養は申し込みだけ先に出しておく（待機期間が長いため）。',
    phase2Title: '31〜60日目',
    phase2: '有料老人ホーム・グループホーム・サ高住を各1件見学する。費用の試算を行い、家族で予算合意をとる。',
    phase3Title: '61〜90日目',
    phase3: '優先順位の高い施設に入居申し込みをする。入居後の面会頻度・持ち物・手続きを確認する。',
  },
  'kaigo-family': {
    title: '家族会議から始める90日ロードマップ',
    diagnosisLabel: '👨‍👩‍👧 家族会議タイプ',
    diagnosisHref: '/diagnosis/kaigo-type',
    phase1Title: '1〜30日目',
    phase1: '兄弟・親族全員に現状を共有する機会を作る。エンディングノートを一緒に書き始める。かかりつけ医に現在の状態を確認する。',
    phase2Title: '31〜60日目',
    phase2: '介護の役割分担（誰が主担当か・費用は誰が出すか）を決める。市区町村の介護相談窓口に一緒に行く。',
    phase3Title: '61〜90日目',
    phase3: '要介護認定の申請をする。ケアマネジャーに繋いでもらい、具体的な支援体制を組み立てる。',
  },
  'shisetsu-tokuyou': {
    title: '特養入居申し込み90日ロードマップ',
    diagnosisLabel: '🏛️ 特養検討タイプ',
    diagnosisHref: '/diagnosis/shisetsu',
    phase1Title: '1〜30日目',
    phase1: '市区町村の介護保険課で申込書をもらう。要介護3以上であることを確認する。近隣の特養リストを取得し、3施設以上に同時申し込みをする。',
    phase2Title: '31〜60日目',
    phase2: 'ショートステイ（短期入所）を試して施設の雰囲気を確認する。待機中の在宅サービス体制を整える。',
    phase3Title: '61〜90日目',
    phase3: '待機状況を定期的に確認する。待機中の費用計画を立て、高額介護サービス費の申請をしておく。',
  },
  'shisetsu-yuryou': {
    title: '有料老人ホーム選び90日ロードマップ',
    diagnosisLabel: '🏨 有料老人ホームタイプ',
    diagnosisHref: '/diagnosis/shisetsu',
    phase1Title: '1〜30日目',
    phase1: '「介護付き」「住宅型」「健康型」の違いを理解する。予算上限を決め、月額費用が合う施設をリストアップする。',
    phase2Title: '31〜60日目',
    phase2: '2〜3施設を見学する。見学時は「夜間スタッフ数」「医療連携」「退去条件」を必ず確認する。',
    phase3Title: '61〜90日目',
    phase3: '第一希望施設に入居申し込みをする。入居一時金の準備と契約内容の確認を行う。',
  },
  'shisetsu-group': {
    title: 'グループホーム入居90日ロードマップ',
    diagnosisLabel: '🏡 グループホームタイプ',
    diagnosisHref: '/diagnosis/shisetsu',
    phase1Title: '1〜30日目',
    phase1: '地域包括支援センターで近くのグループホーム一覧をもらう。要支援2以上であることを確認する。',
    phase2Title: '31〜60日目',
    phase2: '2〜3施設を見学する。「認知症ケアの方針」「スタッフとの関わり方」「日常の役割」を確認する。',
    phase3Title: '61〜90日目',
    phase3: '空き待ちの施設に申し込む。入居後の面会計画と費用計画を家族で共有する。',
  },
  'shisetsu-sahojo': {
    title: 'サ高住入居90日ロードマップ',
    diagnosisLabel: '🏘️ サ高住検討タイプ',
    diagnosisHref: '/diagnosis/shisetsu',
    phase1Title: '1〜30日目',
    phase1: '「サービス付き高齢者向け住宅」を自宅近くで検索し、2〜3件に資料請求する。',
    phase2Title: '31〜60日目',
    phase2: '見学する。「重度化したときの対応」「外部サービスの組み合わせ方」「月額の総費用」を確認する。',
    phase3Title: '61〜90日目',
    phase3: '入居契約をする。外部の訪問介護・デイサービスをケアマネジャーと組み合わせてプランを作る。',
  },
  'genkai-genki': {
    title: '余裕があるうちに整える90日ロードマップ',
    diagnosisLabel: '💪 余裕あり',
    diagnosisHref: '/diagnosis/genkai',
    phase1Title: '1〜30日目',
    phase1: '今使っているサービスを書き出し、追加できるサービスがないか確認する。週1回は「介護しない時間」を意識的に作る。',
    phase2Title: '31〜60日目',
    phase2: '緊急時の連絡体制（ケアマネ・医師・家族）を整理して一覧化する。介護保険の更新時期を確認する。',
    phase3Title: '61〜90日目',
    phase3: '半年後の状態変化に備え、施設や在宅サービス強化の選択肢を情報収集しておく。',
  },
  'genkai-chui': {
    title: '疲れが溜まったときの立て直し90日ロードマップ',
    diagnosisLabel: '⚠️ 注意段階',
    diagnosisHref: '/diagnosis/genkai',
    phase1Title: '1〜30日目',
    phase1: 'ケアマネジャーに「自分が疲弊している」と正直に伝える。デイサービスやショートステイを増やして自分の休息時間を作る。',
    phase2Title: '31〜60日目',
    phase2: '家族・兄弟に現状を共有し、役割分担を見直す。介護者向けの相談窓口（介護者の会など）に一度連絡してみる。',
    phase3Title: '61〜90日目',
    phase3: '休息が取れる体制を維持する。体調不良が続く場合は受診する。施設入居の選択肢も情報収集しておく。',
  },
  'genkai-kiken': {
    title: '今すぐ動く90日ロードマップ',
    diagnosisLabel: '🆘 危険水域',
    diagnosisHref: '/diagnosis/genkai',
    phase1Title: '1〜30日目',
    phase1: '今日中に地域包括支援センターか市区町村の相談窓口に電話する。ショートステイを手配して自分が休む期間を作る。',
    phase2Title: '31〜60日目',
    phase2: '主治医・ケアマネ・家族で「今後の方針」を話し合う。施設入居の具体的な検討を始める。',
    phase3Title: '61〜90日目',
    phase3: '持続可能な介護体制に切り替える。一人で抱え込まない仕組みを作る。',
  },
  'genkai-minaoshi': {
    title: '体制見直し90日ロードマップ',
    diagnosisLabel: '🔄 見直し段階',
    diagnosisHref: '/diagnosis/genkai',
    phase1Title: '1〜30日目',
    phase1: 'ケアマネジャーに「今の体制を続けるのが難しい」と伝える。ショートステイ・施設入居の選択肢を提示してもらう。',
    phase2Title: '31〜60日目',
    phase2: '家族全員で「今後の方針」を決める話し合いをする。施設見学を1〜2件行う。',
    phase3Title: '61〜90日目',
    phase3: '新しい体制（施設入居または在宅サービス強化）に移行する。',
  },
  'cost-antei': {
    title: '費用安定タイプの備え90日ロードマップ',
    diagnosisLabel: '✅ 費用安定',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '高額介護サービス費の申請をする（超えた分が戻ってくる）。介護保険の上限額と実際の利用額を確認する。',
    phase2Title: '31〜60日目',
    phase2: '将来の重度化に備えた費用試算を行う。特養の申し込みを先に出しておく（無料・早いほど有利）。',
    phase3Title: '61〜90日目',
    phase3: '遺言・相続の話し合いを家族で始める。FPに将来の費用計画を相談する。',
  },
  'cost-chuukan': {
    title: '費用一部見直しの90日ロードマップ',
    diagnosisLabel: '📋 一部見直し',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '市区町村の窓口で「使える給付金・補助金一覧」をもらう。高額介護サービス費・高額介護合算療養費の申請をする。',
    phase2Title: '31〜60日目',
    phase2: '兄弟・親族との費用分担について話し合う場を設ける。',
    phase3Title: '61〜90日目',
    phase3: '自治体独自の補助制度を調べて申請する。FPに無料相談して費用計画を立てる。',
  },
  'cost-kiken': {
    title: '費用リスク高の緊急対策90日ロードマップ',
    diagnosisLabel: '🚨 費用リスク高',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '今日中に地域包括支援センターに「費用の相談をしたい」と電話する。低所得者向けの特養費用軽減制度を確認する。',
    phase2Title: '31〜60日目',
    phase2: '生活保護の受給要件を社会福祉士に確認する。社会福祉協議会の生活福祉資金貸付制度も確認する。',
    phase3Title: '61〜90日目',
    phase3: '使える制度をすべて申請する。費用負担が少ない特養を最優先で申し込む。',
  },
  'cost-sisan': {
    title: '資産活用の90日ロードマップ',
    diagnosisLabel: '🏠 資産活用タイプ',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: 'FP（ファイナンシャルプランナー）に無料相談してリバースモーゲージ・リースバックの条件を確認する。',
    phase2Title: '31〜60日目',
    phase2: '相続人（兄弟など）全員と資産活用の方針について話し合う。不動産会社に査定を依頼する。',
    phase3Title: '61〜90日目',
    phase3: '方針が決まったら司法書士・税理士に相談して手続きを進める。',
  },
  'roshoku-ok': {
    title: '両立継続の90日ロードマップ',
    diagnosisLabel: '🙆 両立OK',
    diagnosisHref: '/diagnosis/roshoku',
    phase1Title: '1〜30日目',
    phase1: '勤務先の「介護支援制度一覧」を人事に確認する。フレックス・短時間勤務など使えていない制度がないか確認する。',
    phase2Title: '31〜60日目',
    phase2: '緊急時（親の急変）に職場を早退できる体制を上司と確認しておく。',
    phase3Title: '61〜90日目',
    phase3: '介護サービスを追加して「仕事ができる時間」をさらに確保する。半年後の親の状態変化に備えた計画を立てる。',
  },
  'roshoku-chui': {
    title: '離職回避のための90日ロードマップ',
    diagnosisLabel: '⚠️ 注意段階',
    diagnosisHref: '/diagnosis/roshoku',
    phase1Title: '1〜30日目',
    phase1: '今週中に上司か人事に「介護中であること」を伝える。勤務時間・テレワークの調整を相談する。',
    phase2Title: '31〜60日目',
    phase2: 'デイサービス・訪問介護を増やして介護時間を圧縮する。厚生労働省「両立支援ナビ」を確認する。',
    phase3Title: '61〜90日目',
    phase3: '介護休業制度の条件と給付金額を確認する。どうしても難しければ、離職前に「休業」で乗り越える選択肢を検討する。',
  },
  'roshoku-kiken': {
    title: '介護離職危機の90日ロードマップ',
    diagnosisLabel: '🚨 離職危険',
    diagnosisHref: '/diagnosis/roshoku',
    phase1Title: '1〜30日目',
    phase1: '今日中にハローワークか社会保険労務士に「介護休業給付金」の条件を確認する。職場に正直に状況を伝える。',
    phase2Title: '31〜60日目',
    phase2: '介護休業を取得する手続きを開始する（最大93日・賃金の67%が支給される）。ショートステイを活用して休息を確保する。',
    phase3Title: '61〜90日目',
    phase3: '休業中に介護体制を整える。復職できる体制が整い次第、職場と復帰計画を立てる。',
  },
  'roshoku-kentou': {
    title: '離職前確認の90日ロードマップ',
    diagnosisLabel: '📝 離職前確認',
    diagnosisHref: '/diagnosis/roshoku',
    phase1Title: '1〜30日目',
    phase1: '介護休業給付金の受給条件・金額をハローワークで確認する。まず「休業」で乗り越えられないか検討する。',
    phase2Title: '31〜60日目',
    phase2: '介護保険サービスを最大限活用して「自分がいなくても回る体制」を作る。',
    phase3Title: '61〜90日目',
    phase3: '体制が整ったら職場に復帰する。どうしても難しければ退職後の収支計画をFPに相談してから決断する。',
  },
}

export async function generateStaticParams() {
  return Object.keys(ROADMAPS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const r = ROADMAPS[params.slug]
  if (!r) return {}
  return { title: `${r.title} | やさしい介護ナビ`, description: `${r.diagnosisLabel}の方向け90日ロードマップ。介護の次の一歩を具体的なステップで解説します。` }
}

export default function RoadmapPage({ params }: { params: { slug: string } }) {
  const r = ROADMAPS[params.slug]
  if (!r) notFound()

  const phases = [
    { title: r.phase1Title, content: r.phase1 },
    { title: r.phase2Title, content: r.phase2 },
    { title: r.phase3Title, content: r.phase3 },
  ]

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 20 }}>
        <Link href={r.diagnosisHref} style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>← 診断に戻る</Link>
        <p style={{ fontSize: 11, color: '#0284c7', fontWeight: 600, margin: '8px 0 4px' }}>{r.diagnosisLabel}</p>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1.4 }}>{r.title}</h1>
      </div>

      {phases.map((ph, i) => (
        <div key={i} style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ background: '#0ea5e9', color: '#fff', borderRadius: 6, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937' }}>{ph.title}</span>
          </div>
          <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{ph.content}</p>
        </div>
      ))}

      <div style={{ background: '#f0f9ff', border: '0.5px solid #bae6fd', borderRadius: 12, padding: '16px', textAlign: 'center', marginTop: 8 }}>
        <p style={{ fontSize: 13, color: '#0369a1', marginBottom: 10 }}>他の診断も受けてみましょう</p>
        <Link href="/" style={{ display: 'inline-block', background: '#0ea5e9', color: '#fff', borderRadius: 8, padding: '10px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>診断トップに戻る</Link>
      </div>
    </main>
  )
}
