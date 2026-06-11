import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '施設選び適性診断 | やさしい介護ナビ',
  description: '10問・約3分。特養・有料老人ホーム・グループホーム・サ高住の中から親に合う施設がわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="shisetsu"
      title="施設選び適性診断"
      subtitle="10問・約3分 | 親に合う施設タイプがわかります"
      questionsCsvPath="/data/csv/questions_shisetsu.csv"
      resultsCsvPath="/data/csv/result_templates_shisetsu.csv"
      nextDiagnoses={[
        { name: '介護タイプ診断', href: '/diagnosis/kaigo-type' },
        { name: '介護費用シミュレーション', href: '/diagnosis/cost' },
        { name: '在宅介護の限界チェック', href: '/diagnosis/genkai' },
        { name: '介護離職リスク診断', href: '/diagnosis/roshoku' },
      ]}
      recommendServices={[
        {
                "name": "イチロウ",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+5URGXE+54PG+5YJRM",
                "description": "施設入居前・入居後も使える介護保険外サービス。外出支援・家族の代わりに対応。",
                "forWho": "施設入居を検討中の方",
                "notFor": "",
                "badge": "介護サービス"
        },
        {
                "name": "メディミール",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+6F07HU+4ICQ+5YZ76",
                "description": "介護食・やわらか食の宅配。嚥下が心配な方向けのメニューも充実。",
                "forWho": "食事に不安がある方",
                "notFor": "",
                "badge": "介護食"
        }
]}
    />
  )
}
