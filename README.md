# Tech Blog with Next.js 15

個人のテックブログとQiita記事を表示するWebアプリケーションです。

## 機能

- マイクロCMSを使用したブログ記事の管理と表示
- Qiita APIを使用した個人記事の取得と表示
- レスポンシブデザイン
- ダークモード対応（DaisyUI）

## 技術スタック

- Next.js 15
- TypeScript
- TailwindCSS
- DaisyUI
- microCMS
- Qiita API

## 環境構築

1. リポジトリのクローン:
```bash
git clone <repository-url>
cd tech-blog-nextjs
```

2. 依存パッケージのインストール:
```bash
npm install
```

3. 環境変数の設定:
`.env.local`ファイルを作成し、以下の環境変数を設定:
```
MICROCMS_SERVICE_DOMAIN=your-domain
MICROCMS_API_KEY=your-api-key
QIITA_API_KEY=your-qiita-token
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. 開発サーバーの起動:
```bash
npm run dev
```

## デプロイ

Vercelを推奨します。以下の環境変数の設定が必要です:

- `MICROCMS_SERVICE_DOMAIN`
- `MICROCMS_API_KEY`
- `QIITA_API_KEY`
- `NEXT_PUBLIC_BASE_URL`

## ライセンス

MIT
