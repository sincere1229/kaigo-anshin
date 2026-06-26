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
          name: '介護タウン（介護転職）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+5VCWJ6+5W1C+5YZ75',
          description: '',
          badge: '介護転職',
          forWho: '', notFor: '',
          imageUrl: 'https://www22.a8.net/svt/bgt?aid=260601698355&wid=001&eno=01&mid=s00000027480001003000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www19.a8.net/0.gif?a8mat=4B5LK2+5VCWJ6+5W1C+5YZ75',
        },
        {
          name: 'かいご畑（介護求人）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+5X57CI+1W34+C5O69',
          description: '',
          badge: '介護転職',
          forWho: '', notFor: '',
          imageUrl: 'https://www29.a8.net/svt/bgt?aid=260601698358&wid=001&eno=01&mid=s00000008824002042000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www18.a8.net/0.gif?a8mat=4B5LK2+5X57CI+1W34+C5O69',
        },
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
