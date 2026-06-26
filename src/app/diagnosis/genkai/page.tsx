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
          name: 'イチロウ（介護保険外サービス）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+5URGXE+54PG+5ZMCH',
          description: '',
          badge: '介護',
          forWho: '', notFor: '',
          imageUrl: 'https://www24.a8.net/svt/bgt?aid=260601698354&wid=001&eno=01&mid=s00000023938001006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www14.a8.net/0.gif?a8mat=4B5LK2+5URGXE+54PG+5ZMCH',
        },
        {
          name: 'いい介護（施設検索）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+5VYC4Y+5VOK+5YZ75',
          description: '',
          badge: '介護',
          forWho: '', notFor: '',
          imageUrl: 'https://www21.a8.net/svt/bgt?aid=260601698356&wid=001&eno=01&mid=s00000027434001003000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www15.a8.net/0.gif?a8mat=4B5LK2+5VYC4Y+5VOK+5YZ75',
        },
        {
          name: 'メディカルフードサービス（宅配食）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6AU69E+4GYQ+5ZU29',
          description: '',
          badge: '食品宅配',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260601698381&wid=001&eno=01&mid=s00000020861001007000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www11.a8.net/0.gif?a8mat=4B5LK2+6AU69E+4GYQ+5ZU29',
        },
        {
          name: '相続アシスト',
          url: 'https://af.moshimo.com/af/c/click?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
          description: '相続の手間も不安も、まるごとゼロに。専門家チームによるゼロタッチ相続税申告。',
          badge: '相続',
          forWho: '', notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3982/000000093281.png',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
        },
      ]}
    />
  )
}
