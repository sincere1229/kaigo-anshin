import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

const COLUMNS: Record<string, Record<number, { title: string; body: string; a8: { name: string; url: string; desc: string }[] }>> = {
  'hajimete': {
    1: { title: "突然の介護宣告。まず何をすればいいか", body: "親が入院・退院などをきっかけに介護が必要になったとき、最初にすべき5つのことを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    2: { title: "要介護認定の申請方法を徹底解説", body: "市区町村への申請から認定調査・結果通知まで、要介護認定の全プロセスをわかりやすく説明します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    3: { title: "ケアマネジャーとは？選び方と付き合い方", body: "ケアマネジャーの役割・探し方・変更方法など、介護の要となる専門家との関係づくりを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    4: { title: "介護保険でできること・できないこと一覧", body: "介護保険サービスの対象と限度額、自己負担割合をわかりやすく整理します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    5: { title: "地域包括支援センターの使い方", body: "介護の相談窓口「地域包括支援センター」の場所・サービス・使い方を解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    6: { title: "介護日誌の書き方とメリット", body: "介護の記録をつけることで得られるメリットと、続けやすい日誌の書き方を紹介します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    7: { title: "兄弟間の介護役割分担でもめないために", body: "介護をきっかけに起きやすい兄弟トラブルの原因と、事前に決めておくべきルールを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    8: { title: "かかりつけ医との連携方法", body: "介護生活で医師と上手に付き合うための情報共有・受診同行のポイントを紹介します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    9: { title: "介護保険の更新・区分変更の手続き", body: "要介護度が変わったときの区分変更申請と、定期更新の手続きを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
    10: { title: "介護経験者が語る「最初にやっておけばよかったこと」", body: "実際に介護を経験した方からよく聞く後悔と、事前にやっておくべき準備をまとめます。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}] },
  },
  'shisetsu-col': {
    1: { title: "特養・有料老人ホーム・グループホームの違い", body: "3つの主要な介護施設の費用・入居条件・サービス内容を徹底比較します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    2: { title: "サービス付き高齢者向け住宅（サ高住）とは", body: "サ高住の特徴・費用・有料老人ホームとの違いをわかりやすく解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    3: { title: "施設見学で必ず確認すべき10のポイント", body: "施設選びで失敗しないために、見学時にチェックすべき項目を具体的に紹介します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    4: { title: "デイサービスとデイケアの違い", body: "通所介護（デイサービス）と通所リハビリ（デイケア）の目的・内容・費用の違いを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    5: { title: "ショートステイを上手に使う方法", body: "短期入所介護（ショートステイ）の費用・申し込み方・介護者の休息への活用法を紹介します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    6: { title: "訪問介護と訪問看護の違い", body: "ホームヘルパーが行う訪問介護と、看護師が来る訪問看護の違いと使い分けを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    7: { title: "介護付き有料老人ホームの選び方", body: "介護付き有料老人ホームの費用・入居一時金・サービス内容の確認ポイントを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    8: { title: "認知症の親に合う施設の選び方", body: "認知症の症状別に、グループホーム・特養・有料老人ホームどれが向いているかを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    9: { title: "施設入居後に後悔しないためのチェックリスト", body: "入居前に確認しておくべき契約条件・退去条件・費用の注意点をリストで紹介します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
    10: { title: "在宅と施設、どちらが費用は安い？", body: "在宅介護と施設入居の費用を比較し、それぞれのメリット・デメリットを整理します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "メディミール（介護食）", "url": "https://px.a8.net/svt/ejp?a8mat=6F07HU+4ICQ+5YZ76+HW5RNQ", "desc": "介護食・やわらか食の宅配サービス。"}] },
  },
  'seido': {
    1: { title: "介護保険の自己負担割合はいくら？", body: "1割・2割・3割負担の判定基準と、自己負担を減らせる制度を解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    2: { title: "高額介護サービス費制度の申請方法", body: "一定額以上の介護費用が戻ってくる「高額介護サービス費」の仕組みと申請手順を解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    3: { title: "介護休業給付金の条件と受け取り方", body: "仕事と介護の両立を支援する介護休業給付金（最大93日・賃金67%）の条件と申請方法を解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    4: { title: "特定入所者介護サービス費（補足給付）とは", body: "低所得者の施設費用を軽減する「補足給付」の対象条件と申請方法を解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    5: { title: "リバースモーゲージ・リースバックの仕組みと注意点", body: "自宅を活用して介護費用を確保するリバースモーゲージとリースバックの違いとリスクを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    6: { title: "成年後見制度とは？使うべきケースと手続き", body: "認知症などで判断能力が低下した親の財産を守る成年後見制度の概要と手続きを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    7: { title: "介護保険の限度額と超えた場合の費用", body: "要介護度別の保険限度額と、限度額を超えた場合に全額自己負担になる仕組みを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    8: { title: "税控除で介護費用を取り戻す方法", body: "医療費控除・障害者控除・扶養控除など、介護で使える税の控除制度をまとめます。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    9: { title: "生命保険・介護保険の見直しポイント", body: "親の介護が始まったタイミングで見直すべき保険の種類と確認ポイントを解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
    10: { title: "介護にかかる平均費用はいくら？データで見る実態", body: "在宅・施設別の介護費用の平均額と、費用を抑えるための対策を解説します。", a8: [{"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}, {"name": "宅配食事まとめ資料請求", "url": "https://px.a8.net/svt/ejp?a8mat=6HDXWY+3RU+6Y3CDE+HW5RNQ", "desc": "複数の宅配食サービスをまとめて比較・資料請求。"}] },
  },
  'shokuji': {
    1: { title: "介護食宅配サービス比較【2025年版】", body: "ワタミの宅食・まごころケア食・メディカルフードサービスなど主要サービスを費用・メニューで比較します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    2: { title: "嚥下（えんげ）障害がある方の食事の工夫", body: "飲み込みにくい方向けのとろみ食・ムース食の作り方と市販商品を紹介します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    3: { title: "冷凍介護食の選び方と保存方法", body: "冷凍で届く介護食の選び方・解凍方法・日持ちについて解説します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    4: { title: "介護用ベッドの選び方【レンタルと購入どちらがいい？】", body: "介護用ベッドの機能・費用・レンタルと購入の比較を解説します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    5: { title: "見守りカメラのおすすめと設置のポイント", body: "離れた親を見守るためのカメラの選び方・設置場所・プライバシーへの配慮を解説します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    6: { title: "介護用の履きやすい靴の選び方", body: "足のむくみ・転倒予防に役立つ介護用シューズの特徴と選び方を紹介します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    7: { title: "尿漏れ対策グッズの選び方と使い方", body: "軽い尿漏れから重度まで、症状別に合うグッズの選び方と使い方を解説します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    8: { title: "シニア向けスマホの選び方と設定方法", body: "高齢の親が使いやすいスマホの選び方と、連絡が取りやすくなる設定のポイントを紹介します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    9: { title: "介護リフォームの費用と補助金", body: "手すり・スロープ・浴室改修など介護リフォームにかかる費用と、補助金の申請方法を解説します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
    10: { title: "エンディングノートの書き方と選び方", body: "親に書いてもらいたいエンディングノートの項目と、スムーズに話を切り出す方法を紹介します。", a8: [{"name": "メディカルフードサービス（健康宅配食）", "url": "https://px.a8.net/svt/ejp?a8mat=6AU69E+4GYQ+5YJRM+HW5RNQ", "desc": "管理栄養士監修の宅配食。塩分・カロリー制限食も対応。"}, {"name": "食楽膳（嚥下対応冷凍惣菜）", "url": "https://px.a8.net/svt/ejp?a8mat=6A8QNM+5VTA+5YJRM+HW5RNQ", "desc": "嚥下障害がある方向けのやわらか冷凍惣菜。"}] },
  },
  'mental': {
    1: { title: "介護疲れを感じたら読む記事", body: "介護疲れ・バーンアウトのサインと、今すぐできる対処法を解説します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    2: { title: "介護うつにならないための10のルール", body: "介護者がうつになりやすい理由と、自分のメンタルを守るための具体的な習慣を紹介します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    3: { title: "仕事と介護を両立する人のタイムマネジメント", body: "平日の仕事・介護・自分の時間を確保するスケジュール術を具体例で解説します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    4: { title: "介護離職した人の体験談と後悔しないための判断基準", body: "実際に介護離職した方の声と、離職前に確認すべきチェックリストを紹介します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    5: { title: "親に「施設に入って」と言えない人へ", body: "施設入居を切り出せない罪悪感の正体と、上手な伝え方を解説します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    6: { title: "介護中の「怒り」と上手に付き合う方法", body: "親への怒りや苛立ちを感じることへの罪悪感を解消し、感情と向き合う方法を解説します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    7: { title: "遠距離介護の実態と上手な乗り越え方", body: "離れた場所から介護を支える「遠距離介護」の工夫とサービス活用法を紹介します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    8: { title: "介護者のための相談窓口まとめ", body: "全国の介護者相談窓口・家族の会・オンライン相談サービスをまとめて紹介します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    9: { title: "認知症の親との向き合い方", body: "認知症の親のつらい言動に傷つかないための考え方と、コミュニケーションのコツを解説します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
    10: { title: "介護が終わったあとのグリーフケア", body: "親を看取った後の喪失感・燃え尽き感と向き合うためのグリーフケアを紹介します。", a8: [{"name": "MANOMA（親の見守りセット）", "url": "https://px.a8.net/svt/ejp?a8mat=6DTCAA+59J2+639IQ+HW5RNQ", "desc": "セコムの見守りサービス。緊急ボタン・カメラで安心。"}, {"name": "イチロウ（介護保険外サービス）", "url": "https://px.a8.net/svt/ejp?a8mat=5URGXE+54PG+5YJRM+HW5RNQ", "desc": "入浴・外出などの介護保険外サービスをプロに依頼できます。"}] },
  },
}

const CAT_LABEL: Record<string, string> = {
  hajimete: 'はじめての介護',
  'shisetsu-col': '施設・サービス',
  seido: '費用・制度',
  shokuji: '食事・グッズ',
  mental: 'メンタル・両立',
}

export async function generateStaticParams() {
  const params = []
  for (const cat of Object.keys(COLUMNS)) {
    for (const id of Object.keys(COLUMNS[cat])) {
      params.push({ category: cat, id })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; id: string }> }): Promise<Metadata> {
  const col = COLUMNS[params.category]?.[Number(params.id)]
  if (!col) return {}
  return {
    title: `${col.title} | やさしい介護ナビ`,
    description: col.body.slice(0, 80) + '...',
  }
}

export default function ColumnPage({ params }: { params: { category: string; id: string } }) {
  const col = COLUMNS[params.category]?.[Number(params.id)]
  if (!col) notFound()
  const catLabel = CAT_LABEL[params.category] || ''
  const idNum = Number(params.id)

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/column" style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>← コラム一覧</Link>
        <p style={{ fontSize: 11, color: '#0284c7', fontWeight: 600, margin: '8px 0 4px' }}>{catLabel}</p>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1.5 }}>{col.title}</h1>
      </div>

      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
        <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8 }}>{col.body}</p>
      </div>

      {col.a8.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8 }}>※ 広告・PR</p>
          {col.a8.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="nofollow noopener noreferrer"
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1f2937', marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{s.desc}</div>
            </a>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {idNum > 1 && (
          <Link href={`/column/${params.category}/${idNum - 1}`}
            style={{ flex: 1, display: 'block', textAlign: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px', fontSize: 13, color: '#374151', textDecoration: 'none' }}>← 前の記事</Link>
        )}
        {idNum < 10 && (
          <Link href={`/column/${params.category}/${idNum + 1}`}
            style={{ flex: 1, display: 'block', textAlign: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px', fontSize: 13, color: '#374151', textDecoration: 'none' }}>次の記事 →</Link>
        )}
      </div>

      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: 13, color: '#0284c7', textDecoration: 'none' }}>診断を受ける →</Link>
      </div>
    </main>
  )
}
