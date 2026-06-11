import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '介護離職リスク診断 | やさしい介護ナビ',
  description: '10問・約3分。仕事と介護の両立は可能か？介護離職のリスクと使える制度がわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="roshoku"
      title="介護離職リスク診断"
      subtitle="10問・約3分 | 仕事を続けられるか判定します"
      questionsCsvPath="/data/csv/questions_roshoku.csv"
      resultsCsvPath="/data/csv/result_templates_roshoku.csv"
      nextDiagnoses={[
        { name: '介護タイプ診断', href: '/diagnosis/kaigo-type' },
        { name: '施設選び適性診断', href: '/diagnosis/shisetsu' },
        { name: '在宅介護の限界チェック', href: '/diagnosis/genkai' },
        { name: '介護費用シミュレーション', href: '/diagnosis/cost' },
      ]}
      recommendServices={[
        {
                "name": "イチロウ",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+5URGXE+54PG+5YJRM",
                "description": "仕事を続けるために。プロに任せることで介護時間を圧縮できます。",
                "forWho": "仕事と介護を両立したい方",
                "notFor": "",
                "badge": "介護サービス"
        },
        {
                "name": "MANOMA",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+6DTCAA+59J2+639IQ",
                "description": "仕事中も親を見守れる安心感。緊急時はアラートが届きます。",
                "forWho": "仕事中も安心したい方",
                "notFor": "",
                "badge": "見守り"
        }
]}
    />
  )
}
