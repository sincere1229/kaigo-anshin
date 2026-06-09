import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '介護タイプ診断 | やさしい介護ナビ',
  description: '10問・約3分。在宅・施設・プロ委託など、あなたに合う介護スタイルがわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="kaigo-type"
      title="介護タイプ診断"
      subtitle="10問・約3分 | あなたに合う介護スタイルがわかります"
      questionsCsvPath="/data/csv/questions_kaigo-type.csv"
      resultsCsvPath="/data/csv/result_templates_kaigo-type.csv"
      nextDiagnoses={[
        { name: '施設選び適性診断', href: '/diagnosis/shisetsu' },
        { name: '在宅介護の限界チェック', href: '/diagnosis/genkai' },
        { name: '介護費用シミュレーション', href: '/diagnosis/cost' },
        { name: '介護離職リスク診断', href: '/diagnosis/roshoku' },
      ]}
    />
  )
}
