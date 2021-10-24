# 芸工展 2021 本サイト

[![geikoten2021](public/images/readme.png)](https://geikousai-ncu.com/2021/)

## 開発

### 環境構築

```
$ npm i
$ npm run dev
```

### コンポーネント

1. コンポーネント内でデータ取得をしていいのは ①, ② のみ。
2. ページ内でしか使われないものは ② にベタ書きを許容(程々に)。共通化の必要が出たら ③ に切り出す。
3. /components 下は基本的にネストせず、index.ts からエクスポート(Barrel)。ただし ⑥ はネストを許容。

###### ① 　/pages

- ② コンポーネントでページのレイアウトを組む。データを流す。

###### ② 　/components/pages

- ① をセクションごとでコンポーネントに切り出したもの。完全にページに依存。
- useMediaQuery を使ってアダプティブに ③ コンポーネントを出し分けする。

###### ③ 　/components/ui

- レスポンシブスタイルは props によって制御される。(例; size: "md" | "lg")

###### ④ 　/components/basics

- プリミティブなコンポーネントのみ。
- 必ず forwardRef と ComponentProps を渡せるようにする。

###### ⑤ 　/components/vectors

- SVG アイコン等。
- 必要になったらバリアントを増やす。

###### ⑥ 　/components/layouts

- PC/SP のレイアウト。ヘッダーフッター等の構成要素もここ。

## デプロイ

### サブディレクトリ「/sub」にエクスポート

```
$ echo NEXT_PUBLIC_BASE_PATH=/sub > .env
$ npm run build
```
