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
