---
layout: doc
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

- Webアプリケーションの要件定義~運用
- フロントエンドアーキテクチャの再構築
- 大規模アクセスに対応できるAPI開発


---

## 技術スタック

<div style="display: grid; gap: 15px; grid-col; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">

<div>

|言語|業務経験|
|---|---|
|<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />|7年|
|<img alt="Go" src="https://img.shields.io/badge/golang-00ADD8?&style=flat-square&lastic&logo=go&logoColor=white" />|3年|
|<img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white" />|3年|
|<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />|2年|
|<img alt="Ruby" src="https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=Ruby&logoColor=white" />|1年|
|<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=Java&logoColor=white" />|1年|


</div>

<div>

|フレームワーク|業務経験|
|---|---|
|<img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />|5年|
|<img alt="Gin" src="https://img.shields.io/badge/Gin-1.x-00C397?style=flat-square&logo=go&logoColor=white" />|3年|
|<img alt="Vue" src="https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white" />|2年|
|<img alt="Ruby-on-Rails" src="https://img.shields.io/badge/-Rails-CC0000?style=flat-square&logo=Ruby-on-Rails&logoColor=white" />|1年|
|<img alt="Django" src="https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=Django&logoColor=white" />|2年|
|<img alt="Flask" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white" />|2年|
|<img alt="Flask" src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" />|2年|


</div>
</div>

---

## 職務経歴詳細

:::details 2022/04〜現在      コンシューマーゲームのサーバサイド開発全般(業務委託) {open}


コンシューマーゲームのサーバサイド開発全般。  
管理者・デバッグ・運用支援ツールの開発全般。  
プロダクト運用支援。  

- **プロジェクト規模：**
  - 4~5人チームでのアジャイル開発
- **使用技術：**
  - ゲーム1(途中から参画)
    - Go 1.16, Gin, Protocol Buffers(gRPC, Twirp), GoogleCloud(Spanner, Cloud Build, GKE, Redis, MySQL 5.7.26), AWS(s3), HTML&CSS, JavaScript, jQuery, Datatables, Node, React, Docker, Vagrant, Fluentd, Memcached
  - ゲーム2(新規開発)
    - Go 1.22, Gin, Protocol Buffers(gRPC, Twirp, connect-web), GoogleCloud(Spanner, Cloud Build, GKE, Redis, MySQL 5.7.26), AWS(s3), Vue3, TypeScript, Element Plus, Pinia, Docker, Vagrant, Fluentd, Memcached
- **役割：**
  - ゲーム1
    - Backend API の新規作成・改修・バグ修正
    - 管理者ツールの機能追加・改修・バグ修正
    - Spanner 負荷対策(Index設計、クエリ調整、トランザクション分散)
    - Redis キャッシュ設計
    - Twitch プラットフォーム連携対応(Backend API対応、Twitch Extension対応)
    - KPI設計・実装(Fluent)
    - コードレビュー対応
  - ゲーム2
    - Backend API の新規作成・改修・バグ修正
    - 管理者ツールのフロントエンド最新技術化・バックエンドとの通信方法にProtocol Buffersを使いSchemaの管理を統一。
    - 管理者ツールの機能追加・改修・バグ修正(フロントエンド開発・機能追加のリード)
    - Spanner 負荷対策(Index設計、クエリ調整、トランザクション分散)
    - 負荷試験の実施・結果対応
    - KPI設計・実装(Fluent)
    - コードレビュー対応
- **その他：**
  - ゲームレベルのDBデータのテーブル設計・Index設計・チューニング
  - 管理者ツールの技術移行
  - APIの高負荷対応
  - APIの処理負荷対応
:::


:::details 2023/11〜現在      ナレッジ参照のAIチャットアプリ開発(業務委託: 副業) {open}

RAGを使った生成AITeamsBotの開発。  


- **プロジェクト規模：**
  - 2~5人チームでのアジャイル開発
- **使用技術：**
  - PoCフェーズ
    - PoC版
      - Python 3.11, AWS(sam, Lambda, API Gateway, s3, Kendra, Bedrock), Copilot Studio(旧Power Virtual Agents)
    - α版
      - Python 3.11, FastAPI, AWS(WAF, SSM, App Runner, ECS, Code Commit, s3, Kendra, Bedrock), Terraform, Docker
    - β版
      - Python 3.11, FastAPI, LangChain, AWS(WAF, SSM, App Runner, ECS, Code Commit, s3, Kendra, Bedrock, DynamoDB, Lambda, Cloud Watch Event), Terraform, Docker
  - プロダクト化版フェーズ
    - Python 3.11, FastAPI, LangChain, TypeScript, Node, BotFramework, AWS(WAF, SSM, App Runner, ECS, s3, Kendra, Bedrock, DynamoDB, Lambda, Cloud Watch Event), Azure(Bot Service, App Service), GitHub, Terraform, Docker, k6
- **役割：**
  - PoCフェーズ
    - ノーコードツールを利用してのTeamsボット開発・運用(β版にて移行)
    - 開発環境移行(ノーコードツールからAzure Bot Frameworkを利用しての開発へ)
    - DynamoDBのテーブル設計
    - Backend API設計
    - シンプルなRAGの実装
    - Teamsボット側の表示方法の改良
    - 運用環境効率化に伴うアーキテクチャ・インフラ設計・インフラのTerraform化(AWS, Azure)
    - 署名付きURLのサポート(s3)
    - データ集計ツールの開発・運用
    - 技術検証・調査・技術選定
  - プロダクト化版フェーズ
    - Backendの負荷試験・負荷を考慮した対応(API, App Runner, Bedrock)
      - APIの並列処理対応
      - インフラのスペック増加、並列処理用対応
      - クロスリージョン推論対応
    - Teamsボットの複数展開対応(マルチテナント対応, ブランチ制御対応)
    - ログのフォーマット化
    - RAGの精度改善検証
      - モデルのアップデート検証(Claude のモデルアップデート対応)
      - ライブラリの最新化
      - LangChain パラメータ調整
      - モデルに合わせたテンプレート調整
      - RAGAS実装サポート・精度改善検証対応
        - 4値を利用して評価・検証(Answer Relevency, Context Recall, Context Precision, Faithfulness)
    - RAGのデータソース追加対応(SharePoint, Zendesk)
    - メンバー増員に伴うドキュメント化(開発ノウハウ、運用ルールの明文化)
    - メンバー増員に伴うエンジニアのマネジメント・支援(コードレビュー, ヘルプ対応)
    - Code Coommit から GitHub へ移行
    - CIの用意
- **その他：**
  - RAGという単語が出始めた時からの試行錯誤の開発
  - 技術選定
  - Teamsボット開発ノウハウがない中での開発
  - AIチャットとしての回答精度改善対応
  - 目標値に向けた負荷試験実施・対応
  - AWS, Azureを利用したマルチクラウド開発
:::

:::details 2023/09〜2024/08      防災気象Webアプリケーション開発・運用(業務委託: 副業) {close}

リアルタイム被害予測ウェブサイトの・アプリの機能追加・運用支援。  
新規プロダクトの企画支援。  
受託開発支援。  

- **プロジェクト規模：**
  - 3人チームでのアジャイル開発
- **使用技術：**
  - HTML&CSS, JavaScript, Lambda, S3
- **役割：**
  - 機能追加(コーディング)、GitHub の利用推進、ドキュメントの用意
  - 新規プロダクト企画案・レビュー
  - アプリの保守対応
  - 新規プロダクト開発(コーディング)
- **その他：**
  - メンテナンスなしプロダクトでの新機能追加・保守対応支援
:::


## 意欲・興味

- ユーザの体験がよくなるように意識したプロダクト開発に携わりたいと考えています
- 業務改善・効率化でのユーザ体験をよくするプロダクト開発にも携わりたいと考えています
- 新しい技術に対して積極的に検証できる環境を望んでいます
- 新しい技術に対して積極的に学習し、スキルアップ等を進めています
