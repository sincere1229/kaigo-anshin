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
      recommendServices={[
        {
          name: 'メディミール（健康宅食）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6F07HU+4ICQ+5ZEMP',
          description: '',
          badge: '食品宅配',
          forWho: '', notFor: '',
          imageUrl: 'https://www22.a8.net/svt/bgt?aid=260601698388&wid=001&eno=01&mid=s00000021041001005000&mc=1',
          imageWidth: 300,
          imageHeight: 47,
          impUrl: 'https://www18.a8.net/0.gif?a8mat=4B5LK2+6F07HU+4ICQ+5ZEMP',
        },
        {
          name: '健康直球便（冷凍弁当）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6GSIB6+5E7E+5YZ75',
          description: '',
          badge: '食品宅配',
          forWho: '', notFor: '',
          imageUrl: 'https://www24.a8.net/svt/bgt?aid=260601698391&wid=001&eno=01&mid=s00000025169001003000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www13.a8.net/0.gif?a8mat=4B5LK2+6GSIB6+5E7E+5YZ75',
        },
        {
          name: 'わんまいる（惣菜宅配）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6D7WOI+2SIM+6J4I9',
          description: '',
          badge: '食品宅配',
          forWho: '', notFor: '',
          imageUrl: 'https://www27.a8.net/svt/bgt?aid=260601698385&wid=001&eno=01&mid=s00000013027001097000&mc=1',
          imageWidth: 300,
          imageHeight: 206,
          impUrl: 'https://www10.a8.net/0.gif?a8mat=4B5LK2+6D7WOI+2SIM+6J4I9',
        },
        {
          name: 'あんしん相談室（宅配ごはん）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK2+6HDXWY+3RU+6Y59TD',
          description: '',
          badge: '食品宅配',
          forWho: '', notFor: '',
          imageUrl: 'https://www26.a8.net/svt/bgt?aid=260601698392&wid=001&eno=01&mid=s00000000489042015000&mc=1',
          imageWidth: 300,
          imageHeight: 38,
          impUrl: 'https://www17.a8.net/0.gif?a8mat=4B5LK2+6HDXWY+3RU+6Y59TD',
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
