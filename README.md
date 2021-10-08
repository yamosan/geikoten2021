# 芸工展 2021 本サイト

## 開発

### コンポーネント

###### ① /pages
② コンポーネントのレイアウトを組む。データを流す。

###### ② /components/layouts

PC/SP のレイアウト。ヘッダーフッター等の構成要素もここ。

###### ③ /components/pages

① のセクションごとのコンポーネント。useMediaQuery を使ってアダプティブに ③ コンポーネントを出し分けする。

###### ④ /components/ui

レスポンシブスタイルは props によって制御される。(例; size: "md" | "lg")

###### ⑤ /components/basics

プリミティブなコンポーネントのみ。
必ず forwardRef と ComponentProps を渡せるようにする。

###### ⑥ /components/icons

SVG 等のアイコン。
必要になったらバリアントを増やす。
