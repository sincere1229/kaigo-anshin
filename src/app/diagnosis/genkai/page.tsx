import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '在宅介護の限界チェック | やさしい介護ナビ',
  description: '10問・約3分。今の介護を続けて大丈夫？心身のSOSサインを早期発見する無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="genkai"
      title="在宅介護の限界チェック"
      subtitle="10問・約3分 | 今の状態を続けて大丈夫か確認します"
      questionsCsvPath="/data/csv/questions_genkai.csv"
      resultsCsvPath="/data/csv/result_templates_genkai.csv"
      nextDiagnoses={[
        { name: '介護タイプ診断', href: '/diagnosis/kaigo-type' },
        { name: '施設選び適性診断', href: '/diagnosis/shisetsu' },
        { name: '介護費用シミュレーション', href: '/diagnosis/cost' },
        { name: '介護離職リスク診断', href: '/diagnosis/roshoku' },
      ]}
      recommendServices={[
        {
                "name": "イチロウ",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+5URGXE+54PG+5YJRM",
                "description": "一人で抱え込まないために。介護保険外サービスでプロに任せる選択肢。",
                "forWho": "介護疲れを感じている方",
                "notFor": "",
                "badge": "介護サービス"
        },
        {
                "name": "MANOMA",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+6DTCAA+59J2+639IQ",
                "description": "見守りセンサーで自分が休んでいる間も親の状態を確認できます。",
                "forWho": "休息を確保したい方",
                "notFor": "",
                "badge": "見守り"
        }
]}
    />
  )
}
