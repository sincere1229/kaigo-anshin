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
      recommendServices={[
        {
                "name": "イチロウ",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+5URGXE+54PG+5YJRM",
                "description": "介護保険外のオーダーメイド介護サービス。入浴・外出・家事など24時間365日対応。",
                "forWho": "在宅介護中の方",
                "notFor": "",
                "badge": "介護サービス"
        },
        {
                "name": "MANOMA",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+6DTCAA+59J2+639IQ",
                "description": "ソニーの親の見守りセット。緊急ボタン・カメラ・センサーで安心を提供。",
                "forWho": "離れて暮らす親の見守りに",
                "notFor": "",
                "badge": "見守り"
        },
        {
                "name": "メディカルフードサービス",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK2+6AU69E+4GYQ+5YJRM",
                "description": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。",
                "forWho": "食事の準備が大変な方に",
                "notFor": "",
                "badge": "宅配食"
        }
]}
    />
  )
}
