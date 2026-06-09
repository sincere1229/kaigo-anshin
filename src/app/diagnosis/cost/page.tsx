import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '介護費用シミュレーション診断 | やさしい介護ナビ',
  description: '10問・約3分。収入・資産・要介護度から介護費用の目安と使える制度がわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="cost"
      title="介護費用シミュレーション診断"
      subtitle="10問・約3分 | 費用の目安と使える制度がわかります"
      questionsCsvPath="/data/csv/questions_cost.csv"
      resultsCsvPath="/data/csv/result_templates_cost.csv"
      nextDiagnoses={[
        { name: '介護タイプ診断', href: '/diagnosis/kaigo-type' },
        { name: '施設選び適性診断', href: '/diagnosis/shisetsu' },
        { name: '在宅介護の限界チェック', href: '/diagnosis/genkai' },
        { name: '介護離職リスク診断', href: '/diagnosis/roshoku' },
      ]}
    />
  )
}
