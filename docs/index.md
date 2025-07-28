---
layout: doc
title: "CV of Yoshiyuki Sugiyama"
---

# 職務経歴書

## 基本情報

|key|value|
|---|---|
|氏名|杉山 嘉幸 (Sugiyama Yoshiyuki)|
|生年月日|1997/06/07|
|居住地|東京都|

---

## 各種アカウント

<p style="display: flex; gap: 8px; flex-wrap: wrap;">
  <a href="https://github.com/sugiyan97" target="_blank"><img alt="Github" src="https://img.shields.io/badge/sugiyan97-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
</p>

---

## 保有スキル

- Web アプリケーションの要件定義・設計・開発・運用(フロントエンド・バックエンド)
- 大規模アクセスに対応できる API 開発(gRPC等)
- フロントエンドのリアーキテクチャ
  - 古い技術スタックから最新の技術スタックへの移行
- バックエンドの負荷改善(k6等の利用)
- AIチャットボットの構築(RAG)
  - フルスクラッチのボット開発からノーコードツールを用いた開発まで対応
- クラウドを用いた開発(AWS, Google Cloud, Azure)
- 業務改善ツールの作成
- 非ITの方への要件提案・納品等対応
- PHR領域の知見


---

## 技術スタック

<div style="display: grid; gap: 15px; grid-col; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">

<div>

|言語|業務経験|
|---|---|
|<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />|7 年|
|<img alt="Go" src="https://img.shields.io/badge/golang-00ADD8?&style=flat-square&lastic&logo=go&logoColor=white" />|3 年|
|<img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white" />|3 年|
|<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />|2 年|
|<img alt="C#" src="https://img.shields.io/badge/C%23-239120?style=flat-square&logo=unity&logoColor=white" />|2 年|
|<img alt="Ruby" src="https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=Ruby&logoColor=white" />|1 年|
|<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=Java&logoColor=white" />|1 年|

</div>

<div>

|フレームワーク|業務経験|
|---|---|
|<img alt="Gin" src="https://img.shields.io/badge/Gin-1.x-00C397?style=flat-square&logo=go&logoColor=white" />|3 年|
|<img alt="Vue" src="https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white" />|2 年|
|<img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" />|2 年|
|<img alt="Flask" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white" />|2 年|
|<img alt="Django" src="https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=Django&logoColor=white" />|2 年|
|<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />|1 年|
|<img alt="Ruby-on-Rails" src="https://img.shields.io/badge/-Rails-CC0000?style=flat-square&logo=Ruby-on-Rails&logoColor=white" />|1 年|

</div>
</div>

---

## 職務経歴詳細

:::details 2022/04〜現在      コンシューマーゲームのサーバサイド開発全般（業務委託）{open}


コンシューマーゲームのサーバサイド開発全般。  
管理者・デバッグ・運用支援ツールの開発全般。  
プロダクト運用支援。

- **プロジェクト規模：**
  - 4〜5 人チームでのアジャイル開発
- **使用技術：**
  - 共通
    - Gin(golang), Docker, Vagrant, Protocol Buffers(gRPC, Twirp), AWS(s3), Fluentd, memcached, Node
    - GoogleCloud(Spanner, Cloud Build, GKE, Redis, MySQL 5.7.26)
  - ゲーム 1(途中から参画）
    - Go 1.16, HTML&CSS, JavaScript, jQuery, Datatables, React
  - ゲーム 2(新規開発）
    - Go 1.22, Protocol Buffers(connect-web), Vue3, TypeScript, Element Plus, Pinia
- **役割：**
  - ゲーム 1
    - Backend API の新規作成・改修・バグ修正
    - 管理者ツールの機能追加・改修・バグ修正
    - Spanner 負荷対策（Index 設計、クエリ調整、トランザクション分散）
    - Redis キャッシュ設計
    - Twitch プラットフォーム連携対応（Backend API 対応、Twitch Extension 対応）
    - KPI 設計・実装（Fluent)
    - コードレビュー対応
  - ゲーム 2
    - Backend API の新規作成・改修・バグ修正
    - 管理者ツールのフロントエンド最新技術化・バックエンドとの通信方法に Protocol Buffers を使い Schema の管理を統一
    - 管理者ツールの機能追加・改修・バグ修正（フロントエンド開発・機能追加のリード）
    - Spanner 負荷対策（Index 設計、クエリ調整、トランザクション分散）
    - 負荷試験の実施・結果対応
    - KPI 設計・実装（Fluent)
    - コードレビュー対応
- **その他：**
  - ゲームレベルの DB データのテーブル設計・Index 設計・チューニング
  - 管理者ツールの技術移行
  - API の高負荷対応
  - API の処理負荷対応
:::


:::details 2023/11〜現在      ナレッジ参照の AI チャットアプリ開発（業務委託： 副業）{open}

RAG を用いた生成 AI TeamsBot の開発。


- **プロジェクト規模：**
  - 2〜5 人チームでのアジャイル開発
- **使用技術：**
  - 共通
    - Python 3.11, AWS(S3, Kendra, Bedrock, Lambda), Docker
  - PoC フェーズ
    - PoC 版
      -  AWS(sam, API Gateway), Copilot Studio(旧 Power Virtual Agents)
    - α版
      - FastAPI, AWS(WAF, SSM, App Runner, ECS, Code Commit), Terraform
    - β版
      - FastAPI, LangChain, AWS(WAF, SSM, App Runner, ECS, Code Commit, DynamoDB, Cloud Watch Event), Terraform
  - プロダクト化版フェーズ
    - FastAPI, LangChain, TypeScript, Node, BotFramework, GitHub, Terraform, k6
    - AWS(WAF, SSM, App Runner, ECS, DynamoDB, Cloud Watch Event)
    - Azure(Bot Service, App Service)
- **役割：**
  - PoC フェーズ
    - ノーコードツールを利用しての Teams ボット開発・運用（β版にて移行）
    - 開発環境移行（ノーコードツールから Azure Bot Framework を利用しての開発へ）
    - DynamoDB のテーブル設計
    - Backend API 設計
    - シンプルな RAG の実装(AWSサービスを利用)
    - Teams ボット側の表示方法の改良
    - 運用環境効率化に伴うアーキテクチャ・インフラ設計・インフラの Terraform 化（AWS, Azure)
    - 署名付き URL のサポート（S3)
    - データ集計ツールの開発・運用
    - 技術検証・調査・技術選定
  - プロダクト化版フェーズ
    - Backend の負荷試験・負荷を考慮した対応（API, App Runner, Bedrock)
      - API の並列処理対応
      - インフラのスペック増加、並列処理用対応
      - クロスリージョン推論対応
    - Teams ボットの複数展開対応（マルチテナント対応、 ブランチ制御対応）
    - ログのフォーマット化
    - RAG の精度改善検証
      - モデルのアップデート検証（Claude のモデルアップデート対応）
      - ライブラリの最新化
      - LangChain パラメータ調整
      - モデルに合わせたテンプレート調整
      - RAGAS 実装サポート・精度改善検証対応
        - 4 値を利用して評価・検証（Answer Relevency, Context Recall, Context Precision, Faithfulness)
    - RAG のデータソース追加対応（SharePoint, Zendesk)
    - メンバー増員に伴うドキュメント化（開発ノウハウ、運用ルールの明文化）
    - メンバー増員に伴うエンジニアのマネジメント・支援（コードレビュー, ヘルプ対応）
    - Code Coommit から GitHub へ移行
    - CI の用意
- **その他：**
  - RAG という単語が出始めたときからの試行錯誤の開発
  - 技術選定
  - Teams ボット開発ノウハウがない中での開発
  - AI チャットとしての回答精度改善対応
  - 目標値に向けた負荷試験実施・対応
  - AWS, Azure を利用したマルチクラウド開発
:::

:::details 2023/09〜2024/08      防災気象 Web アプリケーション開発・運用（業務委託： 副業）{close}

リアルタイム被害予測ウェブサイトの・アプリの機能追加・運用支援。  
新規プロダクトの企画支援。  
受託開発支援。

- **プロジェクト規模：**
  - 3 人チームでのアジャイル開発
- **使用技術：**
  - HTML&CSS, JavaScript, AWS(Lambda, S3)
- **役割：**
  - 機能追加（コーディング）、GitHub の利用推進、ドキュメントの用意
  - 新規プロダクト企画案・レビュー
  - アプリの保守対応
  - 新規プロダクト開発（コーディング）
- **その他：**
  - メンテナンスなしプロダクトでの新機能追加・保守対応支援
:::

:::details 2023/01〜2023/07      医療系アプリのサーバサイド開発（業務委託： 副業）{close}

PHR(Personal Health Record)データ管理アプリ(ios, Android)のバックエンドAPIの設計書作成・機能追加・改修・デバッグ。  
同意情報管理アプリのAPI新規開発。

- **プロジェクト規模：**
  - 3~5 人チームでのアジャイル開発
- **使用技術：**
  - 共通
    - MySQL 5.7, Amazon Linux, Docker, Gin(Golang)
  - 生活習慣データの記録アプリ(既存)
    - Golang(1.17)
  - 同意情報管理アプリのAPI開発(新規)
    - Golang(1.20.3)
- **役割：**
  - 生活習慣データの記録アプリ(既存)
    - 既存APIの改修・リファクタ
    - 新規Bluetoothアプリとの連携追加対応(認証, API連携, 内部ロジックの新規開発)
    - バグ調査・修正対応(優先度, 各種デバイス連携, 他アプリとの連携)
    - 内部テスト対応(ios, Android)
    - 詳細設計書の用意(フロー図, シーケンス図)
  - 同意情報管理アプリのAPI開発(新規)
    - APIの新規作成
    - 既存処理の改修・リファクタ
    - UnitTestの導入(go-mock, .http対応)
- **その他：**
  - 運用中のBtoCアプリに対しての新機能追加
  - Bluetoothアプリ連携
  - Clean Architecuture開発(生活習慣データの記録アプリ)
  - Repository パターン開発(同意情報管理アプリのAPI開発)
:::

:::details 2022/10〜2022/11      LPからの注文受付システム開発（業務委託： 副業）{close}

LPからの注文受付システムの決済機能追加。

- **プロジェクト規模：**
  - 2 人チームでのウォーターフォール開発
- **使用技術：**
  - Python 3.8.10, DRF 4.1.1(Python), MySQL, Ubuntu(20.04), AWS(EC2, RDS)
- **役割：**
  - GMO APIを利用してクレジットカード決済機能の追加
  - SSH MaxConnections値の調整とリトライ対応
  - システムテストの実施
  - 機能リファクタの実施
  - 負荷テストの実施とテスト用スクリプトの作成
    - 同時実施要件に耐えられるように
- **その他：**
  - クレジットカード決済連携
:::


:::details 2013/08〜2022/03      PHR流通基盤の開発（業務委託）{close}

PHR(Personal Health Record)データの流通を管理する基盤の新規開発。  
途中よりリードエンジニアとして技術部分のリード作業。

- **プロジェクト規模：**
  - 3 人チームでのアジャイル開発
- **使用技術：**
  - Python 3.8, Flask 2.0.2(Python), nginx, pybael, peewee(Python), Swagger, oneM2M
  - AWS(Lightsail, RDS, EC2), Ubuntu 20.04, MySQL
- **役割：**
  - 技術調査・検証・選定
    - 特殊ライブラリ(oneM2M)
  - 設計書の作成・レビュー対応
  - API開発・コードレビュー対応
  - APIの多言語対応(日, 英)
  - UnitTestの作成(カバレッジ率: 97%)
  - デプロイ・リリース対応
- **その他：**
  - 開発の8割を担当
  - リードエンジニア作業
  - ニッチな分野の特殊ライブラリのマスター(oneM2M) 
  - 国プロとしての対応
:::

:::details 2021/01〜2021/12      メッセージ配信・最適化ソリューション開発支援（業務委託： 副業）{close}

メッセージ配信・最適化ソリューションの配信テスト支援。  
LineチャットボットのPoC開発。


- **プロジェクト規模：**
  - 10 人チームでのアジャイル開発
- **使用技術：**
  - AWS(s3, Cloud Watch, cli), Dialogflow CX(Google)
- **役割：**
  - WebアプリケーションのUI・アプリ配信(ios)テストの実施
  - ログ分析
  - マニュアルの新規作成
  - テスト仕様書の作成
  - 別プロダクトのテスト支援
  - トラブル解決のためのLineチャットボットの試作
- **その他：**
  - Dialogflow CX(NoCode)を用いたボット開発
  - Lineチャットボット連携
:::

:::details 2020/10〜2021/07      ネットワーク運用管理システム開発（社員）{close}

ネットワーク機器の運用・管理Webアプリケーションの機能追加対応。

- **プロジェクト規模：**
  - 10 人チームでのアジャイル開発
- **使用技術：**
  - Python 3.6, Django 3.0(Python), HTML&CSS, JavaScript, jQuery, Bootstrap, PostgreSQL, Ubuntu 20.04, CentOS7, 8
- **役割：**
  - Webアプリケーションの機能追加(フロントエンド, バックエンド)
  - 追加機能の要件定義・基本設計作成・レビュー対応
  - DB設計
  - Syslog通知の技術調査・検証・要件定義~総合テスト
  - 機能追加の工数だし
  - コードレビュー対応
  - 他者作業のヘルプ
- **その他：**
  - 他者作業の技術サポート
:::

:::details 2017/10〜2020/08      空調機器管理システム開発（社員, 業務委託）{close}

空調機器を用いたWebアプリケーション・業務アプリケーションの開発。  
お客さんとの直接作業。

- **プロジェクト規模：**
  - 3~10 人チームでのアジャイル開発
- **使用技術：**
  - 共通
    - HTML&CSS, JavaScript, jQuery
  - 業務Webアプリケーション1(ビル系)
    - Java(Struts, Spring), Uunit, PostgreSQL
  - 業務Webアプリケーション2(工場系)
    - Ruby(Ruby on Rails), Rspec, Sidekiq, Angular JS, PostgreSQL, Vagrant, Virtual Box, Docker
  - 業務アプリケーション1(ビル系, 薬学系)
    - C#(.NET Framework), SQLServer
  - 業務アプリケーション2(ビル系)
    - C++, VB6, VGA, PostgreSQL
- **役割：**
  - Webアプリケーションの新規開発・機能追加・バグ修正(フロントエンド, バックエンド)
  - 要件定義~総合テストの実施
  - 技術調査(Sidekiq)
  - バグ・パケット調査
  - お客さん対応
    - 納品周りのやりとり、質問・要件定義対応、納品PCの作成
- **その他：**
  - 古いシステムのC#へのリプレイス
  - 他プロダクトのフレームワークリプレイス支援
  - 顧客折衝対応
:::

## 意欲・興味

- ユーザの体験がよくなるように意識したプロダクト開発に携わりたいと考えています
- 業務改善・効率化でのユーザ体験をよくするプロダクト開発にも携わりたいと考えています
- 新しい技術に対して積極的に検証できる環境を望んでいます
- 新しい技術に対して積極的に学習し、スキルアップ等を進めています
