document.addEventListener("DOMContentLoaded", () => {
  const quizData = [

    {
      question: "Question 01",
      choice: [
        "これは、ユーザーまたはグループベースのアクセスを許可するデバイスを有効にする。",
        "RADIUSサーバーを利用して、逆 Telnetセッションへのユーザーアクセスを許可する。",
        "ユーザーがリモートサーバーのネットワークにアクセスした時間を記録する",
        "ユーザーが実行できる CLIコマンドを制限する。",
        "デバイスへのアクセスを許可する前に、ユーザーを確認する。"
      ],
      answer: {
        認証: [
          "これは、ユーザーまたはグループベースのアクセスを許可するデバイスを有効にする。",
          "デバイスへのアクセスを許可する前に、ユーザーを確認する。"
        ],
        認可: [
          "RADIUSサーバーを利用して、逆 Telnetセッションへのユーザーアクセスを許可する。",
          "ユーザーが実行できる CLIコマンドを制限する。"
        ]
      },
      placeholders: [],
      grouplimits: { 認証: 2, 認可: 2 }
    },

    {
      question: "Question 02",
      choice: [
        "アクセスポイント",
        "仮想インターフェース",
        "ダイナミックインターフェース",
        "サービスインターフェース",
        "wireless LAN controller"
      ],
      answer: [
        "wireless LAN controller",
        "ダイナミックインターフェース",
        "仮想インターフェース",
        "アクセスポイント",
        "サービスインターフェース"
      ],
      placeholders: [
        "アクセスポイントを管理する",
        "Wi-Fiデバイスに優先ネットワークへの接続を提供する",
        "帯域外管理するために使用する",
        "ゲスト認証に使用される",
        "無線クライアント通信のために WLAN適用される"
      ],
      grouplimits: null
    },

    {
      question: "Question 03",
      choice: [
        "ユーザーを識別します",
        "ユーザーに関連付けられたパスワードを検証します",
        "ユーザーが利用できるサービスを制限する",
        "ユーザーが実行できるアクションを制御する",
        "ネットワーク管理者に分析情報を提供する",
        "ユーザーのアクティビティを記録する"
      ],
      answer: {
        認証: [
          "ユーザーを識別します",
          "ユーザーに関連付けられたパスワードを検証します"
        ],
        認可: [
          "ユーザーが利用できるサービスを制限する",
          "ユーザーが実行できるアクションを制御する"
        ],
        アカウンティング: [
          "ネットワーク管理者に分析情報を提供する",
          "ユーザーのアクティビティを記録する"
        ]
      },
      placeholders: [],
      grouplimits: { 認証: 2, 認可: 2, アカウンティング: 2 }
    },

    {
      question: "Question 04",
      choice: [
        "IPv4アドレスと同様に公開ルーティング可能",
        "1対1のコミュニケーションを可能にする",
        "すべてのIPv6デバイスに必要",
        "ネクストホップアドレスとして機能する"
      ],
      answer: {
        "グローバルユニキャスト": [
          "IPv4アドレスと同様に公開ルーティング可能",
          "1対1のコミュニケーションを可能にする"
        ],
        "リンクローカル": [
          "すべてのIPv6デバイスに必要",
          "ネクストホップアドレスとして機能する"
        ]
      },
      placeholders: [],
      grouplimits: { グローバルユニキャスト: 2, リンクローカル: 2 }
    },

    {
      question: "Question 05",
      choice: [
        "172.28.228.144/18",
        "172.28.228.144/21",
        "172.28.228.144/23",
        "172.28.228.144/25",
        "172.28.228.144/29"
      ],
      answer: [
        "172.28.228.144/23",
        "172.28.228.144/21",
        "172.28.228.144/25",
        "172.28.228.144/29",
        "172.28.228.144/18"
      ],
      placeholders: [
        "172.28.228.1 - 172.28.229.254",
        "172.28.224.1 - 172.28.231.254",
        "172.28.228.129 - 172.28.228.254",
        "172.28.228.145 - 172.28.228.150",
        "172.28.192.1 - 172.28.255.254"
      ],
      grouplimits: null
    },

    {
      question: "Question 06",
      choice: [
        "オープンAPIをサポート",
        "バックグラウンドのデバイス構成を調整します",
        "集中ソフトウェア管理をサポート",
        "デバイスごとの管理に依存する",
        "個別のソフトウェア管理を使用する",
        "カスタムおよび非標準構成に高い柔軟性を提供"
      ],
      answer: {
        "Cisco DNA センター": [
          "オープンAPIをサポート",
          "集中ソフトウェア管理をサポート",
          "バックグラウンドのデバイス構成を調整します"
        ],
        "従来のデバイス管理": [
          "デバイスごとの管理に依存する",
          "個別のソフトウェア管理を使用する",
          "カスタムおよび非標準構成に高い柔軟性を提供"
        ]
      },
      placeholders: [],
      grouplimits: { "Cisco DNA センター": 3, "従来のデバイス管理": 3 }
    },

    {
      question: "Question 07",
      choice: [
        "CLI テンプレートを使用して複数デバイスに一貫した構成を適用する",
        "クラウド上のソフトウェア更新を監視する",
        "NetFlowを使用してネットワーク全体の潜在的な脅威を分析し、そのトラフィックに対して適切なアクションを実行します",
        "SSHターミナル経由で変更を実装する",
        "デバイスごとにデバイス構成を管理する",
        "セキュリティはファイアウォール、VPN、IPSで境界付近を管理する"
      ],
      answer: {
        "CiscoDNAセンターデバイスマネジメント": [
          "CLI テンプレートを使用して複数デバイスに一貫した構成を適用する",
          "クラウド上のソフトウェア更新を監視する",
          "NetFlowを使用してネットワーク全体の潜在的な脅威を分析し、そのトラフィックに対して適切なアクションを実行します"
        ],
        "従来のデバイスマネジメント": [
          "SSHターミナル経由で変更を実装する",
          "デバイスごとにデバイス構成を管理する",
          "セキュリティはファイアウォール、VPN、IPSで境界付近を管理する"
        ]
      },
      placeholders: [],
      grouplimits: { CiscoDNAセンターデバイスマネジメント: 3, 従来のデバイスマネジメント: 3 }
    },

    {
      question: "Question 08",
      choice: [
        "172.16.2.0/24",
        "192.168.1.0/24",
        "192.168.2.0/24",
        "207.165.200.244/30",
        "207.165.200.248/30"
      ],
      // ※ここは「プロトコル→ネットワーク」の当てはめで、資料はRIPが2つある形式。
      // 置き方は運用側の仕様に合わせて調整してOK（ここでは一旦あなたの形を維持）。
      answer: [
        "207.165.200.244/30",
        "192.168.2.0/24",
        "192.168.1.0/24",
        "172.16.2.0/24"
      ],
      placeholders: [
        "static",
        "EIGRP",
        "OSPF",
        "RIP"
      ],
      grouplimits: null
    },

    {
      question: "Question 09",
      choice: [
        "コントローラーを利用してネットワーク管理を処理する",
        "ネットワークの一元管理された新機能を提供する",
        "各デバイスで個別に変更を実装する",
        "メンテナンスコストが高くなる"
      ],
      answer: {
        "コントロールベースネットワーキング": [
          "コントローラーを利用してネットワーク管理を処理する",
          "ネットワークの一元管理された新機能を提供する"
        ],
        "従来のネットワーキング": [
          "各デバイスで個別に変更を実装する",
          "メンテナンスコストが高くなる"
        ]
      },
      placeholders: [],
      grouplimits: { コントロールベースネットワーキング: 2, 従来のネットワーキング: 2 }
    },

    {
      question: "Question 10",
      choice: [
        "起動時にIOSイメージをロードする際の信頼性を提供する",
        "TCP ポート20と21を使用する",
        "TCPを使用する",
        "ユーザー認証を必要としない",
        "ポート69を使用する",
        "UDPを使用する"
      ],
      answer: {
        "FTP": [
          "起動時にIOSイメージをロードする際の信頼性を提供する",
          "TCP ポート20と21を使用する",
          "TCPを使用する"
        ],
        "TFTP": [
          "ユーザー認証を必要としない",
          "ポート69を使用する",
          "UDPを使用する"
        ]
      },
      placeholders: [],
      grouplimits: { FTP: 3, TFTP: 3 }
    },

    {
      question: "Question 11",
      choice: [
        "複数のデバイスにわたって一貫した構成を展開します。",
        "Southbound API は構成を適用するために使用されます。",
        "分散制御プレーンが必要",
        "分散管理プレーンが必要"
      ],
      answer: {
        "コントロールベースネットワーキング": [
          "複数のデバイスにわたって一貫した構成を展開します。",
          "Southbound API は構成を適用するために使用されます。"
        ],
        "従来のネットワーキング": [
          "分散制御プレーンが必要",
          "分散管理プレーンが必要"
        ]
      },
      placeholders: [],
      grouplimits: { "コントロールベースネットワーキング": 2, "従来のネットワーキング": 2 }
    },

    {
      question: "Question 12",
      choice: [
        "システム間のデータ共有をサポート",
        "RESTベースの要件をサポート",
        "SDNコントローラーとデータプレーン間の通信",
        "ネットワーク仮想化プロトコルをサポート"
      ],
      answer: {
        "ノースバウンド API": [
          "システム間のデータ共有をサポート",
          "RESTベースの要件をサポート"
        ],
        "サウスバウンド API": [
          "SDNコントローラーとデータプレーン間の通信",
          "ネットワーク仮想化プロトコルをサポート"
        ]
      },
      placeholders: [],
      grouplimits: { "ノースバウンド API": 2, "サウスバウンド API": 2 }
    },

    {
      question: "Question 13",
      choice: [
        "1.1.1.1",
        "10.10.13.126",
        "10.10.13.129",
        "10.10.13.150",
        "10.10.13.209",
        "209.165.200.30"
      ],
      answer: [
        "10.10.13.126",
        "10.10.13.129",
        "10.10.13.150",
        "10.10.13.209",
        "209.165.200.30",
        "1.1.1.1"
      ],
      placeholders: [
        "Router2",
        "Router3",
        "Router4",
        "Router5",
        "Internet cloud",
        "MPLS cloud"
      ],
      grouplimits: null
    },

    {
      question: "Question 14",
      choice: [
        "172.16.3.128",
        "172.16.3.64",
        "172.16.2.128",
        "172.16.3.192",
        "172.16.4.0"
      ],
      answer: [
        "172.16.4.0",
        "172.16.2.128",
        "172.16.3.64",
        "172.16.3.128",
        "172.16.3.192"
      ],
      placeholders: [
        "255.255.254.0",
        "255.255.255.128",
        "255.255.255.224",
        "255.255.255.240",
        "255.255.255.248"
      ],
      grouplimits: null
    },

    {
      question: "Question 15",
      choice: [
        "configure terminal",
        "enable",
        "enable secret $hf!@4fs8",
        "exit",
        "line vty 0 4",
        "service password-encryption"
      ],
      answer: [
        "enable",
        "configure terminal",
        "enable secret $hf!@4fs8",
        "line vty 0 4"
      ],
      placeholders: ["1", "2", "3", "4"],
      grouplimits: null
    },

    {
      question: "Question 16",
      choice: [
        "ユーザーがリモート サーバー上のネットワークにアクセスした時間の長さを記録します。",
        "TACACS+ を使用して、ネットワーク管理者が入力した設定コマンドを記録します。",
        "RADIUS サーバーを活用して、ユーザーにリバースTelnet セッションへのアクセスを許可します。",
        "ユーザーが実行できる CLI コマンドを制限します。"
      ],
      answer: {
        "アカウンティング": [
          "ユーザーがリモート サーバー上のネットワークにアクセスした時間の長さを記録します。",
          "TACACS+ を使用して、ネットワーク管理者が入力した設定コマンドを記録します。"
        ],
        "認可": [
          "RADIUS サーバーを活用して、ユーザーにリバースTelnet セッションへのアクセスを許可します。",
          "ユーザーが実行できる CLI コマンドを制限します。"
        ]
      },
      placeholders: [],
      grouplimits: { アカウンティング: 2, 認可: 2 }
    },

    {
      question: "Question 17",
      choice: ["802.1X", "WPA+WPA2", "Passthrough", "Web policy"],
      answer: {
        "レイヤー2セキュリティ": ["802.1X", "WPA+WPA2"],
        "レイヤー3セキュリティ": ["Passthrough", "Web policy"]
      },
      placeholders: [],
      grouplimits: { "レイヤー2セキュリティ": 2, "レイヤー3セキュリティ": 2 }
    },

    {
      question: "Question 18",
      choice: [
        "リモートデバイス通信に SSHを使用する",
        "基本的な構成要素には YAMLを使用する",
        "構成プッシュジョブには TCPポート10002を使用します",
        "基本的な構成要素に Ruby を使用",
        "通信にはTCP 8140を使用する",
        "基本的な構成要素はマニフェストに保存されます"
      ],
      answer: {
        "Ansible": [
          "リモートデバイス通信に SSHを使用する",
          "基本的な構成要素には YAMLを使用する"
        ],
        "Chef": [
          "構成プッシュジョブには TCPポート10002を使用します",
          "基本的な構成要素に Ruby を使用"
        ],
        "Puppet": [
          "通信にはTCP 8140を使用する",
          "基本的な構成要素はマニフェストに保存されます"
        ]
      },
      placeholders: [],
      grouplimits: { Ansible: 2, Chef: 2, Puppet: 2 }
    },

    {
      question: "Question 19",
      choice: [
        "ログセッション統計",
        "レコードのユーザーコマンド",
        "ルーターへのアクセスを保護します",
        "ユーザーの資格情報を検証します",
        "ユーザーのアクセス権限を制限する",
        "ユーザーが有効モードに変更できるようにする"
      ],
      answer: {
        "アカウンティング": ["ログセッション統計", "レコードのユーザーコマンド"],
        "認証": ["ルーターへのアクセスを保護します", "ユーザーの資格情報を検証します"],
        "認可": ["ユーザーのアクセス権限を制限する", "ユーザーが有効モードに変更できるようにする"]
      },
      placeholders: [],
      grouplimits: { アカウンティング: 2, 認証: 2, 認可: 2 }
    },

    {
      question: "Question 20",
      choice: [
        "単一のデバイスがコアとディストリビューション層を処理する",
        "他の選択肢よりもコストが高い",
        "小規模ネットワーク設計に最適",
        "ネットワークの可用性を向上",
        "別々のデバイスがコア層とディストリビューション層を処理する"
      ],
      answer: {
        "コラプストコア": [
          "単一のデバイスがコアとディストリビューション層を処理する",
          "他の選択肢よりもコストが高い",
          "小規模ネットワーク設計に最適"
        ],
        "3層モデル": [
          "別々のデバイスがコア層とディストリビューション層を処理する",
          "ネットワークの可用性を向上"
        ]
      },
      placeholders: [],
      grouplimits: { コラプストコア: 3, "3層モデル": 2 }
    },

    {
      question: "Question 21",
      choice: [
        "迅速な弾力性",
        "オンデマンドセルフサービス",
        "リソースプーリング",
        "測定されたサービス",
        "広範なネットワークアクセス"
      ],
      answer: [
        "測定されたサービス",
        "リソースプーリング",
        "オンデマンドセルフサービス",
        "広範なネットワークアクセス",
        "迅速な弾力性"
      ],
      placeholders: [
        "プロバイダーは、使用量に応じて消費者に請求できます",
        "プロバイダーは、共有コンピューティングリソースからCPU、メモリ、ディスクを複数の顧客に割り当てます",
        "消費者はサービスの使用を開始または停止するタイミングを選択できます",
        "サービスは、さまざまな種類のデバイスとネットワークから利用できます",
        "リソースプールは需要に応じて迅速に拡張できます"
      ],
      grouplimits: null
    },

    {
      question: "Question 22",
      choice: [
        "各接続の継続時間を記録する",
        "ユーザーアクセスレポートをサポートする",
        "TACACS+経由でユーザー検証を実行する",
        "それはあなたが誰であるかを証明する"
      ],
      answer: {
        "アカウンティング": [
          "各接続の継続時間を記録する",
          "ユーザーアクセスレポートをサポートする"
        ],
        "認証": [
          "TACACS+経由でユーザー検証を実行する",
          "それはあなたが誰であるかを証明する"
        ]
      },
      placeholders: [],
      grouplimits: { アカウンティング: 2, 認証: 2 }
    },

    {
      question: "Question 23",
      choice: [
        "一元管理された場所からリソースをプロビジョニングする",
        "ネットワークを API経由でアプリケーションと統合出来る",
        "ネットワークの動作と構成をより適切に制御できる",
        "このタイプには分散管理プレーンが必要です。",
        "新しいデバイスは物理インフラストラクチャを使用して構成される"
      ],
      answer: {
        "従来のネットワーキング": [
          "このタイプには分散管理プレーンが必要です。",
          "一元管理された場所からリソースをプロビジョニングする"
        ],
        "コントロールベースネットワーキング": [
          "新しいデバイスは物理インフラストラクチャを使用して構成される",
          "ネットワークを API経由でアプリケーションと統合出来る",
          "ネットワークの動作と構成をより適切に制御できる"
        ]
      },
      placeholders: [],
      grouplimits: { コントロールベースネットワーキング: 3, 従来のネットワーキング: 2 }
    },

    {
      question: "Question 24",
      choice: [
        "シーケンス番号を使用",
        "確認パケットに依存",
        "データの整合性を確保",
        "リアルタイムアプリケーションをサポート",
        "トランスポート層でコネクションレス",
        "最小限のエラーチェック"
      ],
      answer: {
        "TCP": ["シーケンス番号を使用", "確認パケットに依存", "データの整合性を確保"],
        "UDP": ["リアルタイムアプリケーションをサポート", "トランスポート層でコネクションレス", "最小限のエラーチェック"]
      },
      placeholders: [],
      grouplimits: { TCP: 3, UDP: 3 }
    },

    {
      question: "Question 25",
      choice: [
        "特定の順序でデータを送信",
        "確立された接続が必要",
        "ウェブブラウジングをサポート",
        "ライブストリーミングに適している",
        "再送信はサポートされていない",
        "パケット損失を許容する"
      ],
      answer: {
        "TCP": ["特定の順序でデータを送信", "確立された接続が必要", "ウェブブラウジングをサポート"],
        "UDP": ["ライブストリーミングに適している", "再送信はサポートされていない", "パケット損失を許容する"]
      },
      placeholders: [],
      grouplimits: { TCP: 3, UDP: 3 }
    },

    {
      question: "Question 26",
      choice: [
        "ダイナミック RF機能",
        "簡単な展開プロセス",
        "簡単なアップグレードプロセス",
        "最適化されたユーザーパフォーマンス"
      ],
      answer: [
        "ダイナミック RF機能",
        "簡単な展開プロセス",
        "簡単なアップグレードプロセス",
        "最適化されたユーザーパフォーマンス"
      ],
      placeholders: [
        "アクセスポイントは信号強度を自動的に調整します",
        "コントローラーイメージはアクセスポイントに自動的に共有されます",
        "コントローラーはユーザーとVLANの集中管理を提供します",
        "コントローラーユーザーは全体を通してマーチマイトにロードバランシングします"
      ],
      grouplimits: null
    },

    {
      question: "Question 27",
      choice: [
        "簡単に棟梁でき、安全な情報を取得できる",
        "シールド付きとシールドなしのツイストペアで構成されている",
        "長距離で減衰が増加",
        "取り扱い時に損傷しやすい"
      ],
      answer: {
        "銅線コッパー": [
          "簡単に棟梁でき、安全な情報を取得できる",
          "シールド付きとシールドなしのツイストペアで構成されている"
        ],
        "マルチモードファイバー": [
          "長距離で減衰が増加",
          "取り扱い時に損傷しやすい"
        ]
      },
      placeholders: [],
      grouplimits: { 銅線コッパー: 2, マルチモードファイバー: 2 }
    },

    {
      question: "Question 28",
      choice: [
        "fe80:1e60:1f59:01b8:ece8:e962:4364:7",
        "ff00:45fc:709a:d439:62cb:cdad:0a15:12",
        "fc00:302d:1b26:dbe7:cc8b:17ac:be9f:3",
        "2000:6a4f:74f8:f7b6:cb1a:934c:36ee:1"
      ],
      answer: [
        "2000:6a4f:74f8:f7b6:cb1a:934c:36ee:1",
        "fe80:1e60:1f59:01b8:ece8:e962:4364:7",
        "fc00:302d:1b26:dbe7:cc8b:17ac:be9f:3",
        "ff00:45fc:709a:d439:62cb:cdad:0a15:12"
      ],
      placeholders: ["Global Unicast", "Link-Local Unicast", "Unique Local", "Multicast"],
      grouplimits: null
    },

    {
      question: "Question 29",
      choice: [
        "DHCPスヌーピング",
        "ダイナミック ARPインスペクション",
        "IPソースガード",
        "ストームコントロール"
      ],
      answer: [
        "IPソースガード",
        "ダイナミック ARPインスペクション",
        "ストームコントロール",
        "DHCPスヌーピング"
      ],
      placeholders: [
        "IP設定を偽装する不正サーバー",
        "キャッシュポイズニング",
        "フラッド攻撃",
        "ネットワーク上の不正クライアント"
      ],
      grouplimits: null
    },

    {
      question: "Question 30",
      choice: [
        "3ハンドシェイクを使用",
        "ウェブブラウジングに最適",
        "信頼性の高い接続を提供",
        "より高速なデータ転送",
        "ストリーミングや VoIPに使用",
        "コネクションレスプロトコル"
      ],
      answer: {
        "TCP": ["3ハンドシェイクを使用", "ウェブブラウジングに最適", "信頼性の高い接続を提供"],
        "UDP": ["より高速なデータ転送", "ストリーミングや VoIPに使用", "コネクションレスプロトコル"]
      },
      placeholders: [],
      grouplimits: { TCP: 3, UDP: 3 }
    },

    {
      question: "Question 31",
      choice: ["/29", "/28", "40", "90", "25", "/27", "110"],
      answer: {
        "サブネットプレフィックス": ["/29", "/28", "/27"],
        "Administrative Distance": ["90", "110"],
        "メトリック/コスト": ["40", "25"]
      },
      placeholders: [],
      grouplimits: {
        "サブネットプレフィックス": 3,
        "Administrative Distance": 2,
        "メトリック/コスト": 2
      }
    }

  ];


  /* --- Random Mode & Initialization Logic --- */
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get("mode");
  const qParam = urlParams.get("q");

  let questionOrder = [];
  let currentStep = 0; // The current step in the sequence (0 to total-1)

  // Initialize Order
  if (mode === "random") {
    // 既存のランダム順序があれば取得、なければ新規作成
    const storedOrder = localStorage.getItem("quizRandomOrder");
    if (storedOrder) {
      questionOrder = JSON.parse(storedOrder);
    } else {
      questionOrder = [...Array(quizData.length).keys()];
      // Shuffle
      for (let i = questionOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionOrder[i], questionOrder[j]] = [questionOrder[j], questionOrder[i]];
      }
      localStorage.setItem("quizRandomOrder", JSON.stringify(questionOrder));
    }
    // Limit to 10 questions for random mode
    questionOrder = questionOrder.slice(0, 10);
  } else if (mode === "retry") {
    // Retry mode: Load from localStorage
    const retryOrder = localStorage.getItem("quizRetryOrder");
    if (retryOrder) {
      questionOrder = JSON.parse(retryOrder);
    } else {
      // Fallback if empty
      questionOrder = [];
    }
    // Limit to 10 questions for random mode
    questionOrder = questionOrder.slice(0, 10);
  } else if (mode === "retry") {
    const retryOrder = localStorage.getItem("quizRetryOrder");
    if (retryOrder) {
      questionOrder = JSON.parse(retryOrder);
    } else {
      questionOrder = [];
    }
  } else {
    // Normal mode: 0, 1, 2...
    questionOrder = [...Array(quizData.length).keys()];
  }

  // Initialize Current Step
  if (qParam !== null && !isNaN(parseInt(qParam))) {
    // qParam is the direct index in quizData. We need to find which step corresponds to this index.
    // However, usually qParam implies direct access. 
    // If in random mode, direct access might break flow, but let's assume qParam overrides.
    // For simplicity, if qParam is set, we might just jump to that step if found, or just force direct index.
    // Let's rely on internal counter mostly. 
    // If qParam is present, we try to match it.
    const targetIndex = parseInt(qParam);
    const foundStep = questionOrder.indexOf(targetIndex);
    if (foundStep !== -1) {
      currentStep = foundStep;
    } else {
      currentStep = 0; // Fallback
    }
  } else {
    // Try to restore last step from storage if we want? 
    // Current app doesn't seem to persist "page number" across reloads strictly for index.html 
    // except via URL. Let's start at 0.
    currentStep = 0;
  }

  let currentQuestionIndex = questionOrder[currentStep];
  let userAnswers = [];
  let quizContainer = document.getElementById("quiz-container");
  const checkButton = document.getElementById("check-answer");

  const nextButton = document.createElement("button");
  nextButton.textContent = "次の問題へ";
  nextButton.id = "next-button";
  nextButton.style.display = "none";
  nextButton.addEventListener("click", () => {
    goToNextQuestion();
  });

  const nexttButton = document.getElementById("nextt-button");
  nexttButton.addEventListener("click", () => {
    goToNextQuestion();
  });

  function goToNextQuestion() {
    // Check if answered
    let userAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];
    const questionObj = quizData[currentQuestionIndex];

    // Check if we already have an answer for this SPECIFIC question instance (by index comparison)
    // Since userAnswers array might contain answers from previous order, we need to be careful.
    // However, our logic pushes to userAnswers on "Check". 
    // If we skip, we haven't pushed.
    // BUT, if we go back and forward, we might have answered. 
    // Checking if the Last entry matches current question is one way, but naive.
    // Better: Check if we have an answer record for this questionIndex in the current session.
    // For simplicity: If we are proceeding and haven't clicked Check, we assume incorrect.

    // Actually, checking "Check Button" visibility is a decent proxy. 
    // If Check Button is visible, it means we haven't answered yet.
    if (document.getElementById("check-answer").style.display !== "none") {
      // Mark as Incorrect (Empty Answer)
      const incorrectData = {
        question: questionObj.question,
        questionIndex: currentQuestionIndex,
        userAnswer: [], // Empty
        correctAnswer: questionObj.answer
      };
      userAnswers.push(incorrectData);
      localStorage.setItem("quizAnswers", JSON.stringify(userAnswers));
    }

    currentStep++;
    if (currentStep >= questionOrder.length) {
      // Finish
      // userAnswers is already updated above or previously
      if (mode === "random") {
        localStorage.removeItem("quizRandomOrder");
      }
      if (mode === "retry") {
        localStorage.removeItem("quizRetryOrder");
      }
      window.location.href = "result.html";
      return;
    }
    currentQuestionIndex = questionOrder[currentStep];
    loadQuestion();
  }

  checkButton.insertAdjacentElement("afterend", nextButton);

  const showAnswerButton = document.getElementById("show-answer");

  showAnswerButton.addEventListener("click", () => {
    const questionObj = quizData[currentQuestionIndex];
    const correctAnswer = questionObj.answer;

    let message = "正解：\n";

    if (questionObj.grouplimits) {
      // グループ形式の問題
      for (let groupName in correctAnswer) {
        const items = correctAnswer[groupName];
        message += `【${groupName}】\n${items.join("\n")}\n\n`;
      }
    } else {
      // 通常の順序問題
      for (let i = 0; i < correctAnswer.length; i++) {
        message += `${questionObj.placeholders[i]} → ${correctAnswer[i]}\n`;
      }
    }

    alert(message.trim());
  });


  function loadQuestion() {
    const previousQuestionElem = document.querySelector("h2");
    if (previousQuestionElem) previousQuestionElem.remove();

    const previousResultMessage = document.querySelector(".incorrect-message");
    if (previousResultMessage) previousResultMessage.remove();

    quizContainer.innerHTML = "";
    nextButton.style.display = "none";
    checkButton.style.display = "block";
    checkButton.disabled = false;
    userAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];

    if (currentStep >= questionOrder.length) {
      localStorage.setItem("quizAnswers", JSON.stringify(userAnswers));
      if (mode === "random") {
        localStorage.removeItem("quizRandomOrder");
      }
      window.location.href = "result.html";
      return;
    }

    const questionObj = quizData[currentQuestionIndex];

    const questionElem = document.createElement("h2");
    // Update Header with Progress
    const headerTitle = document.querySelector("h1");
    if (headerTitle) {
      if (mode === "random") {
        headerTitle.textContent = `ドラッグアンドドロップ練習 (${currentStep + 1} / ${questionOrder.length})`;
      } else if (mode === "retry") {
        headerTitle.textContent = `復習モード (${currentStep + 1} / ${questionOrder.length})`;
      } else {
        headerTitle.textContent = `ドラッグアンドドロップ練習 (Q${currentQuestionIndex + 1})`;
      }
    }

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");

    const shuffledChoices = [...questionObj.choice].sort(() => Math.random() - 0.5);
    shuffledChoices.forEach((choice, index) => {
      const choiceElem = document.createElement("div");
      choiceElem.classList.add("draggable");
      choiceElem.draggable = true;
      choiceElem.dataset.index = index;
      choiceElem.textContent = choice;

      choiceElem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.dataset.index);
        event.target.classList.add("dragging");
      });

      // --- Touch Event Support ---
      choiceElem.addEventListener("touchstart", handleTouchStart, { passive: false });
      choiceElem.addEventListener("touchmove", handleTouchMove, { passive: false });
      choiceElem.addEventListener("touchend", handleTouchEnd, { passive: false });

      choiceElem.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
      });

      answerContainer.appendChild(choiceElem);
    });

    quizContainer.appendChild(answerContainer);

    const dropZoneContainer = document.createElement("div");
    dropZoneContainer.classList.add("drop-zone-container");

    if (questionObj.grouplimits) {
      Object.keys(questionObj.grouplimits).forEach(group => {
        const groupContainer = document.createElement("div");
        groupContainer.classList.add("group-container");
        groupContainer.dataset.group = group;

        const groupTitle = document.createElement("h3");
        groupTitle.textContent = group;
        groupContainer.appendChild(groupTitle);

        for (let i = 0; i < questionObj.grouplimits[group]; i++) {
          const dropZone = document.createElement("div");
          dropZone.classList.add("drop-zone");
          dropZone.dataset.group = group;

          dropZone.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropZone.classList.add("drag-over");
          });

          dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("drag-over");
          });

          dropZone.addEventListener("drop", (event) => {
            event.preventDefault();
            const draggedIndex = event.dataTransfer.getData("text/plain");
            const draggedElem = document.querySelector(`.draggable[data-index='${draggedIndex}']`);

            if (dropZone.querySelector(".draggable") === null) {
              dropZone.appendChild(draggedElem);
            }

            dropZone.classList.remove("drag-over");
          });

          groupContainer.appendChild(dropZone);
        }

        dropZoneContainer.appendChild(groupContainer);
      });
    } else {
      for (let i = 0; i < questionObj.answer.length; i++) {
        const dropZone = document.createElement("div");
        dropZone.classList.add("drop-zone");
        dropZone.dataset.position = i;

        const placeholder = document.createElement("span");
        placeholder.textContent = questionObj.placeholders[i];
        placeholder.classList.add("placeholder");
        dropZone.appendChild(placeholder);

        dropZone.addEventListener("dragover", (event) => {
          event.preventDefault();
          dropZone.classList.add("drag-over");
        });

        dropZone.addEventListener("dragleave", () => {
          dropZone.classList.remove("drag-over");
        });

        dropZone.addEventListener("drop", (event) => {
          event.preventDefault();
          const draggedIndex = event.dataTransfer.getData("text/plain");
          const draggedElem = document.querySelector(`.draggable[data-index='${draggedIndex}']`);

          if (dropZone.querySelector(".draggable") === null) {
            dropZone.appendChild(draggedElem);
          }
          dropZone.classList.remove("drag-over");
        });

        dropZoneContainer.appendChild(dropZone);
      }
    }

    quizContainer.appendChild(dropZoneContainer);
  }

  checkButton.addEventListener("click", () => {
    const questionObj = quizData[currentQuestionIndex];
    const dropZones = document.querySelectorAll(".drop-zone");
    const resultMessage = document.createElement("p");
    resultMessage.classList.add("incorrect-message");

    const userAnswerData = {
      question: questionObj.question,
      questionIndex: currentQuestionIndex, // Store index for retry mode
      userAnswer: [],
      correctAnswer: questionObj.answer
    };

    let isCorrect = false;

    if (questionObj.grouplimits) {
      const correctGroups = questionObj.answer;
      const userGroupAnswers = {};

      isCorrect = Object.keys(correctGroups).every(group => {
        const groupZones = document.querySelectorAll(`.drop-zone[data-group='${group}']`);
        const selectedGroupAnswers = Array.from(groupZones).map(zone =>
          zone.querySelector(".draggable") ? zone.querySelector(".draggable").textContent.trim() : null
        );

        userGroupAnswers[group] = selectedGroupAnswers;

        if (selectedGroupAnswers.includes(null) || selectedGroupAnswers.length !== correctGroups[group].length) {
          return false;
        }

        return JSON.stringify([...selectedGroupAnswers].sort()) === JSON.stringify([...correctGroups[group]].sort());
      });

      userAnswerData.userAnswer = userGroupAnswers;

      dropZones.forEach(zone => {
        const draggable = zone.querySelector(".draggable");
        if (draggable) {
          const group = zone.dataset.group;
          const correctGroupAnswers = correctGroups[group];
          if (!correctGroupAnswers.includes(draggable.textContent.trim())) {
            draggable.style.color = "red";
          } else {
            draggable.style.color = "green";
          }
        }
      });

    } else {
      const selectedOrder = Array.from(dropZones).map(zone =>
        zone.querySelector(".draggable") ? zone.querySelector(".draggable").textContent.trim() : null
      );

      userAnswerData.userAnswer = selectedOrder;

      if (
        selectedOrder.length === questionObj.answer.length &&
        !selectedOrder.includes(null) &&
        JSON.stringify(selectedOrder) === JSON.stringify(questionObj.answer)
      ) {
        isCorrect = true;
      }

      dropZones.forEach((zone, index) => {
        const draggable = zone.querySelector(".draggable");
        if (draggable) {
          if (draggable.textContent.trim() !== questionObj.answer[index]) {
            draggable.style.color = "red";
          } else {
            draggable.style.color = "green";
          }
        }
      });
    }

    resultMessage.textContent = isCorrect ? "正解" : "不正解";
    resultMessage.style.color = isCorrect ? "green" : "red";
    quizContainer.after(resultMessage);

    checkButton.style.display = "none";
    nextButton.style.display = "block";
    showAnswerButton.style.display = "inline-block";

    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];
    storedAnswers.push(userAnswerData);
    localStorage.setItem("quizAnswers", JSON.stringify(storedAnswers));
  });


  const resetButton = document.getElementById("reset-button");

  resetButton.addEventListener("click", () => {
    const questionObj = quizData[currentQuestionIndex];

    // すべてのdrop-zoneからdraggable要素を削除
    document.querySelectorAll(".drop-zone").forEach(zone => {
      const draggable = zone.querySelector(".draggable");
      if (draggable) {
        draggable.remove();
      }
    });

    // answer-containerを再描画
    const answerContainer = document.querySelector(".answer-container");
    answerContainer.innerHTML = "";

    const shuffledChoices = [...questionObj.choice].sort(() => Math.random() - 0.5);
    shuffledChoices.forEach((choice, index) => {
      const choiceElem = document.createElement("div");
      choiceElem.classList.add("draggable");
      choiceElem.draggable = true;
      choiceElem.dataset.index = index;
      choiceElem.textContent = choice;

      choiceElem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.dataset.index);
        event.target.classList.add("dragging");
      });

      choiceElem.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
      });

      answerContainer.appendChild(choiceElem);
    });

    // 正誤メッセージを削除
    const allResults = document.querySelectorAll(".incorrect-message").forEach(msg => msg.remove());

    checkButton.style.display = "block";
    checkButton.disabled = false;

    // 選択肢の色を戻す
    document.querySelectorAll(".draggable").forEach(elem => {
      elem.style.color = "";
    });

    // 必要なら「次の問題」ボタンを隠す
    nextButton.style.display = "none";

    if (allResults.length > 1) {
      for (let i = 0; i < allResults.length - 1; i++) {
        allResults[i].remove();  // 最後以外を削除
      }
    }

    checkButton.style.display = "block";
    checkButton.disabled = false;
    nextButton.style.display = "none";
    showAnswerButton.style.display = "none";
  });

  const prevButton = document.getElementById("prev-button");

  prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      currentQuestionIndex = questionOrder[currentStep];
      loadQuestion();
    }
  });




  loadQuestion();

  // --- Helper Functions for Touch Events ---
  let initialX = null;
  let initialY = null;
  let originalPosition = {};
  let draggedElement = null;

  function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    initialX = touch.clientX;
    initialY = touch.clientY;
    draggedElement = e.target;

    // Remember original style to restore if dropped invalidly
    originalPosition = {
      parent: draggedElement.parentNode,
      nextSibling: draggedElement.nextSibling,
      cssText: draggedElement.style.cssText
    };

    draggedElement.classList.add("dragging");
    // Make it float
    draggedElement.style.position = "fixed";
    draggedElement.style.zIndex = "1000";
    draggedElement.style.width = "200px"; // Fixed width for dragging looks better
    draggedElement.style.left = (touch.clientX - 100) + "px"; // Center horizontally
    draggedElement.style.top = (touch.clientY - 25) + "px"; // Center vertically
  }

  function handleTouchMove(e) {
    if (!draggedElement) return;
    e.preventDefault();
    const touch = e.touches[0];
    draggedElement.style.left = (touch.clientX - 100) + "px";
    draggedElement.style.top = (touch.clientY - 25) + "px";
  }

  function handleTouchEnd(e) {
    if (!draggedElement) return;
    e.preventDefault();

    draggedElement.style.display = "none"; // Hide to find element below
    const touch = e.changedTouches[0];
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    draggedElement.style.display = "flex"; // Show again

    const dropZone = elemBelow ? elemBelow.closest(".drop-zone") : null;

    if (dropZone && !dropZone.querySelector(".draggable")) {
      // Valid Drop
      resetDragStyles(draggedElement);
      dropZone.appendChild(draggedElement);
      draggedElement.classList.remove("dragging");
    } else {
      // Invalid Drop - Return to original place (or answer container if not already there)
      resetDragStyles(draggedElement);

      // If it was already in a drop zone, maybe we want to keep it there? 
      // Or if it was in answer-container. 
      // Simplest behavior: Return to available pool (answer-container) or revert.
      // Current implementation: Revert to original parent.
      if (originalPosition.parent) {
        originalPosition.parent.insertBefore(draggedElement, originalPosition.nextSibling);
      }
      draggedElement.classList.remove("dragging");
    }

    draggedElement = null;
  }

  function resetDragStyles(elem) {
    elem.style.position = "";
    elem.style.zIndex = "";
    elem.style.width = "";
    elem.style.left = "";
    elem.style.top = "";
  }
});