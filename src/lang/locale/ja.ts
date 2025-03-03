// 日本語

export default {
  // main.ts
  "Open as kanban board": "カンバンボードとして開く",
  "Create new board": "カンバンボードを新規作成",
  "Archive completed cards in active board":
    "アクティブボードの完了したカードをアーカイブ",
  "Error: current file is not a Kanban board":
    "エラー: 現在のファイルはカンバンボードではありません",
  "Convert empty note to Kanban": "空のノートをカンバンに変換",
  "Error: cannot create Kanban, the current note is not empty":
    "エラー: 現在開いているノートは空であり、カンバンを作成できません",
  "New kanban board": "新規カンバンボード",
  "Untitled Kanban": "無題のカンバン",

  // KanbanView.tsx
  "Open as markdown": "マークダウンとして開く",
  "Open board settings": "ボード設定を開く",
  "Archive completed cards": "完了したカードをアーカイブ",

  // parser.ts
  Complete: "完了",
  Archive: "アーカイブ",

  // settingHelpers.ts
  "Note: No template plugins are currently enabled.":
    "ノート:  現在、テンプレートのプラグインが無効化されています",
  default: "デフォルト",
  "Search...": "検索…",

  // Settings.ts
  "These settings will take precedence over the default Kanban board settings.":
    "これらの設定はデフォルトのカンバン設定より優先されます。",
  "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.":
    "デフォルトのカンバンボード設定をセットします。この設定はボード毎の設定により上書きされます。",
  "Note template": "ノートテンプレート",
  "This template will be used when creating new notes from Kanban cards.":
    "このテンプレートはカンバンカードからノートを新規作成した際に使用されます。",
  "No template": "テンプレートがありません",
  "Note folder": "ノートフォルダ",
  "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.":
    "カンバンカードから作成されたノートはこのフォルダ内に置かれます。ブランクの場合には、この保管庫のデフォルトロケーションに置かれます。",
  "Default folder": "デフォルトフォルダ",
  "Lane width": "レーンの幅",
  "Enter a number to set the lane width in pixels.":
    "レーンの幅をピクセル単位を入力してください。",
  "Maximum number of archived cards": "アーカイブされたカードの最大数",
  "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.":
    "アーカイブされたカードはマークダウンモードで閲覧できます。この設定により指定されたアーカイブの限界数まで達した際には古いカードを削除します。この値を-1に設定するとボードのアーカイブ限界を無限にします。",
  "Display card checkbox": "カードのチェックボックスを表示",
  "When toggled, a checkbox will be displayed with each card":
    "有効化すると各カードのチェックボックスが表示されます。",
  "Reset to default": "デフォルトにリセット",
  "Date & Time": "日付と時間",
  "Date trigger": "日付トリガー",
  "When this is typed, it will trigger the date selector":
    "この設定に入力された文字列で日付セレクターをトリガーします。",
  "Time trigger": "時間トリガー",
  "When this is typed, it will trigger the time selector":
    "この設定に入力された文字列で時間セレクターをトリガーします。",
  "Date format": "日付フォーマット",
  "This format will be used when saving dates in markdown.":
    "このフォーマットはマークダウンで日付が保存される際に使用されます。",
  "For more syntax, refer to": "シンタックスについてはこちらを参照:",
  "format reference": "フォーマットリファレンス",
  "Your current syntax looks like this": "現在のシンタックスは次のように見えます",
  "Time format": "時間フォーマット",
  "Date display format": "日付表示フォーマット",
  "This format will be used when displaying dates in Kanban cards.":
    "このフォーマットはカンバンカード内にて日付の表示に使用されます。",
  "Show relative date": "相対日付を表示",
  "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'":
    "有効化するとカードの日付と今日の間の日数が表示されます。例: '3日後', '1ヶ月前'",
  "Hide card display dates": "カードに表示される日付を隠す",
  "When toggled, formatted dates will not be displayed on the card. Relative dates will still be displayed if they are enabled.":
    "有効化するとカード上のフォーマットされた日付が非表示になります。有効化された場合には相対日付は表示されままとなります。",
  "Hide dates in card titles": "カードタイトルの日付を隠す",
  "When toggled, dates will be hidden card titles. This will prevent dates from being included in the title when creating new notes.":
    "有効化するとカードタイトルの日付が非表示になります。これは新規ノートを作成した際にカードタイトルに日付が含まれるのを防ぎます。",
  "Link dates to daily notes": "デイリーノートに日付をリンク",
  "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]":
    "有効化すると日付がデイリーノートにリンクされます。 例: [[2021-04-26]]",
  "Add date and time to archived cards": "アーカイブされたカードに日付と時間を追加",
  "When toggled, the current date and time will be added to the beginning of a card when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title":
    "有効化するとカードがアーカイブされた際に現在の日付と時間がカードの最初に追記されるようになります。例: - [ ] 2021-05-14 10:00am カードタイトル",
  "Archive date/time separator": "日付・時間セパレーターをアーカイブ",
  "This will be used to separate the archived date/time from the title":
    "これはアーカイブされた日付・時間をタイトルから分離するのに使用されます。",
  "Archive date/time format": "日付・時間フォーマットをアーカイブ",
  "Kanban Plugin": "カンバンプラグイン",

  // components/Item/Item.tsx
  "Archive item": "アイテムをアーカイブ",
  "More options": "他のオプション",
  Cancel: "キャンセル",

  // components/Item/ItemContent.tsx
  today: "今日",
  yesterday: "昨日",
  tomorrow: "明日",
  "Change date": "日付を変更",
  "Change time": "時間を変更",

  // components/Item/ItemForm.tsx
  "Item title...": "アイテムタイトル…",
  "Add item": "アイテムを追加",
  "Add a card": "カードを追加",

  // components/Item/ItemMenu.ts
  "Edit card": "カードを編集",
  "New note from card": "カードからノートを新規作成",
  "Archive card": "カードをアーカイブ",
  "Delete card": "カードを削除",
  "Edit date": "日付を編集",
  "Add date": "日付を追加",
  "Remove date": "日付を削除",
  "Edit time": "時間を編集",
  "Add time": "時間を追加",
  "Remove time": "時間を削除",

  // components/Lane/LaneForm.tsx
  "Enter list title...": "リストタイトルを編集…",
  "Mark items in this list as complete": "このリストに含まれるアイテムを完了としてマークする",
  "Add list": "リストを追加",
  "Add a list": "リストを追加",

  // components/Lane/LaneHeader.tsx
  "Move list": "リストを移動",
  Close: "閉じる",

  // components/Lane/LaneMenu.tsx
  "Are you sure you want to delete this list and all its cards?":
    "このリストと含まれるすべてのカードを削除しますか？",
  "Yes, delete list": "はい、リストを削除します",
  "Are you sure you want to archive this list and all its cards?":
    "このリストと含まれるすべてのカードをアーカイブしますか？",
  "Yes, archive list": "はい、リストをアーカイブします",
  "Are you sure you want to archive all cards in this list?":
    "このリストに含まれるすべてのカードをアーカイブしますか？",
  "Yes, archive cards": "はい、カードをアーカイブします",
  "Edit list": "リストを編集",
  "Archive cards": "カードをアーカイブ",
  "Archive list": "リストをアーカイブ",
  "Delete list": "リストを削除",
};
