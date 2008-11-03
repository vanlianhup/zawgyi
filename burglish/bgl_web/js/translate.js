var wordMap = {
   jp:{
			val:["許可されていません","おはようございます","インラインフレーム","インフォメーション","できませんでした","ありがとうござい","拒否されました","フロントページ","フレームワーク","バングラデシュ","しないで下さい","されていません","サブフォルダー","アルファベット","アクセスレベル","非アーカイブ","新規アイテム","受信ボックス","ミャンマー人","ヘッドライン","プライベート","テンプレート","ダウンロード","セキュリティ","スパムボット","し(てい)*ません","されています","されていない","クライアント","インストール","アップロード","アカウント ","ログアウト","リクエスト","メッセージ","ミャンマー","ポジション","ヘルスケア","フォルダ(ー)*","フィルタ(ー)*","フィールド","パラメータ","パスワード","バージョン","デフォルト","できません","セクション","されました","こんばんは","こんにちは","コンテン(ツ)*","キャンセル","ギャラリー","キーワード","カテゴリ(ー)*","オンライン","オプション","ウインドウ","いけません","ありません","アーカイブ","[え,け,せ,て,ね,へ,め,れ,っ,ん,い,き,し,ち,に,ひ,み,り]+[て,で]+","[あ,か,さ,た,な,は,ま,や,ら,わ]+れて(い)*る","[あ,か,さ,た,な,は,ま,や,ら,わ]+れて(い)*た","(ことが)*出来","(お)*問合せ(先)*","並び替え","電話番号","電子名刺","貼り付(け)*","直リンク","知られて","正しい ","見つける","見つかり","携帯電話","観覧(する)*","ログイン","レッスン","ようこそ","モバイル","もう一度","メニュー","ボーダー","プリント","ブラウザ","ファイル","によって","ニュース","なります","トピック","ところで","テキスト","テーブル","チェック","タイトル","ダース(つ)*","センター","するには","スペース","じゃぱん","さんから","されます","されない","グループ","クリック","クッキー","かどうか","カスタム","イメージ","いくつか","あなた(の)*","アドレス","アクセス","あいまい","アイテム","[え]+やすい","[え]+にくい","[え,け,せ,て,ね,へ,め,れ]+ません","[い,き,し,ち,に,ひ,み,り]+て(い)*る","[い,き,し,ち,に,ひ,み,り,え,け,せ,て,ね,へ,め,れ,っ]+下さい","(の)*ため(の)*","(する)*前に","連絡先","与える","有効化","未登録","閉じる","並び順","分か(る)*","貧しい","表示順","非表示","非常(に)*","非公開","非営利","半角 ","導入文","大き(い)+","続ける","送った","創設者","全て(の)","正常(に)*","正しく","新しい","更新日","現在(の)*","見出し","管理者","学んだ","下さい","一番上","一番下","一般的","以上[に,で]*","以下[に,で]*","ロック","リンク","リスト","ユーザ","メンバ","メール","メイン","[い,き,し,ち,に,ひ,み,り]+ません","[い,き,し,ち,に,ひ,み,り]+ました","ボタン","ベース","ページ","ビルマ","ヒット","バナー","のみ(の)*","により","にある","なさい","ないか","とする","ですか","データ","タイプ","そして","ソース","すべて","した後","しかし","させた","サイト","コピー","コード","ゲスト","くても","エリア","ウェブ","いかに","いいえ","あなた","あそこ","アウト","\d+人(の)*","[か,さ,た,な,は,ま,や,ら,わ]+れた","[か,さ,た,な,は,ま,や,ら,わ]+ない","[い,き,し,ち,に,ひ,み,り]+ます","[あ,か,さ,た,な,は,ま,や,ら,わ]+れる","(間)*違い","(の)*為(に)*","(す)*るか","(ご)*協力","(け)*れば","連絡","良い","利益","来る","要求","様々","有効","友達","戻る","目的","名(前)*","無効","無し","又は","凡例","本文","忘れ","訪問","方法","保存","保護","保管","返事","編集","変更","別(の)*","文字","複数","部署","評価","表示","必要","発行","配信","入力","入手","日時","内容","読む","同じ","動物","投票","投稿","投機","登録","適用","適切","定義","定期","通知","追加","男性","対応","多様","他の","速報","送信","操作","挿入","選択","説明","設定","静的","成功","随時","人々","人気","進水","新規","心配","織物","状態","情報","場所","場合","上記","詳細","昇順","女性","住所","終了","受信","失敗","執筆","自動","時(間)*","氏名","使用","削除","作動","作成","作者","済み","最新","最初","最終","最後","最も","再度","合致","項目","降順","構造","更新","更に","公開","語句","後に","古い","権限","検索","結果","警告","掲載","形式","空(白)*","区域","銀行","共有","及び","技術","貴重","記述","記事","記憶","機会","期限","既に","寄与","基準","企業","関連","完了","完全","楽し","確認","確か","該当","概要","開始","介入","画像","我々","可能","下記","閲覧","英数","一覧","一致","位置","以上","宛先","宛に","悪い","より","よく","もし","メタ","メス","また","ます","への","はい","なら","なぜ","ない","とは","では","です","だけ","そこ","する","これ","この","ここ","から","オス","いる","[っ,い,き,し,ち,に,ひ,み,り]+た","[そ,あ]+れ","[そ,あ]+の","力","変","別","幅","彼","日","届","得","点","中","達","題","前","数","親","上","者","次","持","使","作","左","行","御","元","件","覚","可","化","下","右","異","を","私","へ","は","年","に","な","と","月","が","・","？","。"]
	}
    ,mm:{
			val:["ခြင့္မျပဳပါ","မဂၤလာနံနက္ခင္းပါ","အင္လိုင္းဖရိမ္","အခ်က္အလက္","မရဘူး","ေက်းဇူးတင္ပါ","အျငင္းခံရ","ဖေရာ့န္ေပ့ခ်္","ေလာက","ဘဂၤလားေဒ့ရွ္","ပါနဲ႕","လုပ္မထားပါ","ဆဗ္ဖိုလ္ဒါ","အဂၤလိပ္စာလံုးမ်ား","လုပ္ႏိုင္ခြင့္","ရိုးရိုးဖိုင္","အသစ္မ်ား","စာအ၀င္ပံုး","ျမန္မာလူမ်ိဳး","ေခါင္းစဥ္","ပရိုင္းဗိတ္","တဲန္းပလိတ္","ေဒါင္းလုပ္","စိတ္ခ်ရမႈ","စပမ္းေဘာ့တ္","မလုပ္ဘူး","ခံေနရ","မထားေသာ","ကလိုင္န္းယန္႕","အင္စေတာလ္","အပ္ပလုပ္","အေကာင့္","ေလာ့ခ္ေအာက္","ေတာင္းဆို","စာ","ျမန္မာ","အဆင့္","က်န္းမာေရး","ဖိုလ္ဒါ","ဖင္လ္တာ","ေနရာ","ပါရာမီတာ","ပတ္စေ၀ါ့","ဗားရွင္း","အလိုအေလွ်ာက္","မရပါ","အခန္း","ျပီးျပီ","မဂၤလာညခ်မ္းပါ","မဂၤလာေန႕လည္ခင္းပါ","အေၾကာင္းအရာ","ေနာက္ျပန္ဆုတ္","စုစည္းမႈ","ကီး၀ါဒ္စာလံုး","အမ်ိဳးအစား","အြန္လိုင္း","လိုသလိုျပဳျပင္ရန္","၀င္းဒိုး","မရပါ","မရွိပါ","အားလ္ခုိက္ခ္ဖိုင္","ျပီး","ခံရေသာ","ခံရခဲ့","လို႕ရ","ေမးျမန္းရန္","ျပန္စီျခင္း","ဖုန္းနံပါတ္","ကြန္ပ်ဴတာသံုးနာမည္ဇယား","ေပ့စ္","တိုက္ရိုက္အညႊန္း","သိ","မွန္ကန္ေသာ","ေတြ႕","ရွာေတြ႕","ဟန္းဖုန္း","ၾကည့္႐ႈ","ေလာ့ခ္အင္လုပ္","အေတြ႕အၾကံဳ","ၾကိဳဆိုပါသည္","မိုဘိုင္းလ္","ေနာက္တစ္ၾကိမ္","မန္းနဴး","ေဘာင္","စာရိုက္ထုတ္","ဘေရာက္ဇာ","ဖိုင္လ္","ရဲ႕သေဘာအရ","သတင္း","ျဖစ္သည္","ေတာ့ပစ္","ဒါနဲ႕စကားမစပ္","စာသား","ေတဘယ္လ္","ခ်က္ခ္","ေခါင္းစဥ္","ဒါဇင္","အလယ္","မယ္ဆိုလွ်င္","ကြက္လပ္","ဂ်ပန္","ဆီက","လုပ္ခံရ","လုပ္မရေသာ","အဖြဲ႕","ကလစ္","ကြတ္ကီး","ဟုတ္မဟုတ္","ျပဳျပင္ေျပာင္းလဲထားေသာ","ပံု","အနည္းငယ္","သင့္","လိပ္စာ","အက္ဆက္စ္","႐ႈပ္႐ႈပ္ေထြးေထြး","အိုင္တမ္","လြယ္","ရခက္","မသံုးႏိုင္ပါ","ေနေသာ","ပါ","အတြက္","မ?ခင္","ဆက္သြယ္ရန္ဖုန္း","ေပး","အသက္၀င္ေအာင္လုပ္ျခင္း","ရီဂ်စ္စတားမလုပ္ရေသး","ပိတ္","စီရီပံု","နားလည္","ဆင္းရဲေသာ","စီရီမႈ","မေဖာ္ျပ","အလြန္ပင္","ပရိုင္းဗိတ္","အက်ိဳးမဲ့","စာလံုးအေသး","စာပိုဒ္","ၾကီးမား","ဆက္လုပ္","ပို႕ခဲ့","တည္ေထာင္သူ","အားလံုး","ေကာင္းေကာင္း","မွန္မွန္ကန္ကန္","အသစ္","အပ္ပဒိတ္လုပ္ရက္","အခု","ေခါင္းစဥ္","ၾကီးၾကပ္သူ","ေလ့လာခဲ့","ေပးပါ","အေပၚဆံုး","ေအာက္ဆံုး","အသံုးမ်ားေသာ","ထက္ပို","ထက္နဲ","ေလာ့ခ္","လင့္ခ္","စာရင္း","ယူဇာ","အသင္း၀င္","အီးေမးလ္","အဓိက","မ?ပါ","ခဲ့သည္","ခလုတ္","ေဘ့စ္","စာမ်က္ႏွာ","ဗမာ","ဟစ္တ္","ဘန္နာ","သက္သက္","ရဲ႕သေဘာအရ","တြင္ရွိေသာ","ပါ","မရွိဘူးလား","လိမ့္မယ္","လား","ေဒတာ","အမ်ိဳးအစား","ေနာက္ျပီး","မူရင္း","အားလံုး","လုပ္ျပီးေနာက္","သို႕ေသာ္","ျပဳလုပ္ခံရ","ဆိုက္ဒ္","ေကာ္ပီ","ကုတ္ဒ္","ဧည့္သည္","ေသာ္လည္း","ဧရိယာ","၀က္ဘ္","ဘယ္ေလာက္ေတာင္","ဟင့္အင္း","သင္","ဟိုးေနရာ","ေအာက္တ္","ေယာက္","ခဲ့","မ?ဘူး","ေနသည္","မည္","အမွား","အတြက္","တာလဲ","ကူညီမႈ","ဆိုလွ်င္","ဆက္သြယ္","ေကာင္း","အက်ိဳးအျမတ္","လာ","ေတာင္းဆို","အမ်ိဳးမ်ိဳး","အသက္၀င္","သူငယ္ခ်င္း","ျပန္","ရည္ရြယ္ခ်က္","အမည္","အသံုးမ၀င္","မရွိ","တစ္နည္းအားျဖင့္","အညြန္း","အဓိကစာပိုဒ္","ေမ့","ေလ့လာ","နည္းလမ္း","သိမ္း","ေစာင့္ေရွာက္","သိမ္းထား","စာျပန္","ျပဳျပင္","ေျပာင္းလဲ","မတူညီ","စာလံုး","အမ်ားအျပား","ဌာန","သေဘာထား","ေဖာ္ျပ","လိုအပ္","ထုတ္","ျဖန္႕ေ၀","ေရးသား","ရယူ","အခ်ိန္","အေၾကာင္းအရာ","ဖတ္သည္","တူညီေသာ","တိရိစၧာန္","မဲေပး","ေရးပို႕","ရည္ရြယ္ခ်က္","ရီဂ်စ္စတား","လုပ္လိုက္","သင့္ေတာ္ေသာ","ဒဖိုင္းန္","အခ်ိန္မွန္","အသိေပး","ထပ္ထဲ့","အမ်ိဳးသား","အလုပ္","အမ်ိဳးမ်ိဳး","အျခား","လွ်ပ္တစ္ပ်က္","စာပို႕","အလုပ္","ထဲ့","ေရြး","ရွင္းလင္းခ်က္","ျပင္ဆင္မႈ","ပံုေသ","ေအာင္ျမင္","သင့္ေတာ္သလို","လူမ်ား","လူစိတ္၀င္စား","ေရၾကီး","အသစ္","စိတ္ပူ","ခ်ည္ထည္","အေျခအေန","အခ်က္အလက္","ေနရာ","ကိစၥမွာ","အေပၚမွ","အေသးစိတ္","တည့္တည့္စီ","အမ်ိဳးသမီး","လိပ္စာ","ျပီးဆံုး","ရရွိ","အ႐ံႈး","ေရးသား","အလိုအေလ်ာက္","အခ်ိန္","နာမည္","သံုး","ဖ်က္","အလုပ္","ျပဳလုပ္","ျပဳလုပ္သူ","ျပီးသား","အသစ္ဆံုး","ပထမဆံုး","ေနာက္ဆံုး","ေနာက္ဆံုး","အလြန္ဆံုး","ေနာက္တစ္ၾကိမ္","တူညီ","အေၾကာင္းအရာ","ေျပာင္းျပန္စီ","တည္ေဆာက္","ရီဖရွက္စ္","ထပ္ျပီး","ပတ္ဗလစ္","စာလံုး","ေနာက္မွာ","ေဟာင္းေသာ","ခြင့္","ရွာေဖြရန္","ရလာဒ္","သတိေပးခ်က္","ထည့္သြင္းေဖာ္ျပ","အမ်ိဳးအစား","ကြက္လပ္","ေဒသ","ဘဏ္","မွ်ေ၀","ႏွင့္","နည္းပညာ","အဖိုးတန္","ေဖာ္ျပ","ေဆာင္းပါး","မွတ္","အခြင့္အေရး","အခ်ိန္ကာလ","အရင္ကတည္းက","အလႉဒါန","စံ","လုပ္ငန္း","ဆက္စပ္","ျပီး","လံုး၀","ေပ်ာ္ရြင္","ျပန္သံုးသပ္","ေသခ်ာ","အက်ံဳး၀င္","မွာတမ္း","စတင္","၀င္ေရာက္","ပံု","ကၽြႏု္ပ္တို႕","ႏိုင္","ေအာက္ပါ","ၾကည့္႐ႈ","အဂၤလိပ္ဂဏန္းမ်ား","စာရင္း","ထပ္တူညီ","ေနရာ","ထက္","လိပ္စာ","ဆီသို႕","ဆိုး","ပိုျပီး","ေကာင္းစြာ","အကယ္၍","မက္တာ","အမ","ေနာက္ထပ္","သည္","သို႕","ဟုတ္ကဲ့","လွ်င္","ဘာေၾကာင့္","မရွိပါ","ဆိုသည္မွာ","မွာ","ျဖစ္သည္","သာလွ်င္","ဟိုေနရာ","လုပ္သည္","ဒီဟာ","ဤ","ဒီေနရာ","မွ","အထီး","ေန","ခဲ့သည္","ဟိုဟာ","အဲဒီ","အင္အား","ေျပာင္း","အျခား","အနံ","သူ","ရက္","ေရာက္","ရယူ","အမွတ္","ေနဆဲ","တို႕","ေခါင္းစဥ္","ေရွ႕","အေရအတြက္","မိဘ","အေပၚ","သူ","ေနာက္တစ္ခု","ေစာင့္","သံုး","ျပဳလုပ္","ဘယ္","လုပ္","お","အရင္","အေၾကာင္းအရာ","မွတ္","ရေအာင္","အျဖစ္","ေအာက္","ညာ","မတူညီ","ကို","ကၽြန္ေတာ္","သို႕","သည္","ႏွစ္","သို႕","ေသာ","ႏွင့္","လ","က"," ","?","။"]
	}
};

var spellMap = {
    jp:{
       from:{
			val:["できます","しました","ください","れます","または","ために","および"]
		}
        ,to:{
			val:["出来ます","した","下さい","れる","又は","為に","及び"]
		}
    }
};

String.prototype.translate = function (src, dest ) {
    var destData = this;
    var pak;
    var re;
    var i;

    for(  i = 0 ; i < spellMap[src].from.val.length ; i++ ){
        pak = spellMap[src].from.val[ i ];
        eval("re=/"+ pak +"/g");
        if( re.test( destData ) ) {
            destData = destData.replace( re, spellMap[src].to.val[ i ] );
        }
    };
    for(  i = 0 ; i < wordMap[src].val.length ; i++ ){
        pak = wordMap[src].val[ i ];
        eval("re=/"+ pak +"/g");
        if( re.test( destData ) ) {
            destData = destData.replace( re, wordMap[dest].val[ i ] );
        }
    };
    return String( destData );
}

;loaded.translate = true;