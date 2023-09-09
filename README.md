## このリポジトリは？

zennで有料販売されている書籍『【独学ポートフォリオ開発応援】実務未経験から学べる！Rails×Next.js×AWSハンズオン解説』での開発アプリです。

## 技術スタック

### Backend

- Ruby on Rails
  - rspec
  - rubocop
- Nginx(Production)

### Frontend

- Next.js
  - eslint/prettier
  - Typescript
  - Material-UI(v5)

### Infra

- Docker
- AWS
  - ECS Fargate
- GithubAction
  - CI/CD pipeline

## 開発アプリ概要

**zennのクローンサイト**を開発していきます。

![](https://storage.googleapis.com/zenn-user-upload/0c17d65785cc-20230824.png)

### デモ動画

https://youtu.be/Oke480_LwR8

### 機能一覧

- 記事の閲覧機能
- ユーザーのサインアップ機能
- ユーザーのサインイン・サインアウト機能
- 記事エディット機能

#### 記事の閲覧機能

- 任意のユーザーが投稿した記事を閲覧することができます。
- 記事一覧ページは、ページネーションで複数ページに区切られています。
- 記事の内容はマークダウンテキストとして保存されており、記事詳細ページではこれが適切なHTMLタグに展開されて画面表示されます。

#### ユーザーのサインアップ機能

- メールアドレスとパスワードを用いて、ユーザーのサインアップを行えます。
- フォーム入力時点では仮登録状態で、メールアドレス宛に送信した認証メール内のリンクをクリックすることではじめて本登録（=サインインができる状態）が完了します。

#### ユーザーのサインイン・サインアウト機能

- 本登録が完了したユーザーのメールアドレス、パスワードでサインインを行うことができます。
- サインイン状態ではヘッダーメニューが切り替わり、サインインユーザーのみが利用できる機能への導線が表示されます。

#### 記事エディット機能

- サインインユーザーは、記事の新規登録および編集を行うことができます。
- 記事本文はマークダウンテキストで記述できます。また、プレビュー機能を活用することで、リアルタイムにHTMLに展開された状態を確認できます。
- 保存形式として、「下書き」「公開」を選択でき、「公開」保存された記事のみが、第三者が閲覧できるようになります。
