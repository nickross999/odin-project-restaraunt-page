const Petit = (function () {
    const menuArray = [
        {
            itemName: "ポップスター・ブルーベリー ～銀河にねがいを～",
            itemPrice: "850yen (税込918yen）",
            itemDescription: "カービィたちが住むポップスターをイメージした一品。ひとくちごとに、ブルーベリーが濃厚に広がります。銀河にねがいをかけながら、どうぞ召し上がれ。",
            itemID: "01",
            itemType: "sweet"
        },
        {
            itemName: "カービィもむちゅう！プププ・スノーティラミスワドルディもむちゅう！プププ・スノーティラミス<オレンジ>",
            itemPrice: "1,450yen (税込1,566yen）",
            itemDescription: "カービィもワドルディも思わずとびついてしまう、おいしいティラミスが冬のよそおいになりました。ふりつもる雪の白さと濃厚な甘さをオリジナルのカップでお楽しみください。",
            itemID: "02",
            itemType: "sweet"
        },
        {
            itemName: "カービィのいちごプリン",
            itemPrice: "880yen (税込950yen）",
            itemDescription: "ピンクのカービィはフレッシュないちご味。まろやかなチーズプリンと甘ずっぱいジュレの、いちごのハーモニーを召し上がれ。",
            itemID: "03",
            itemType: "sweet"
        },
        {
            itemName: "カービィのオレンジプリン",
            itemPrice: "880yen (税込950yen）",
            itemDescription: "黄色のカービィはジューシーなオレンジ味。まろやかなチーズプリンと甘ずっぱいジュレの、オレンジのハーモニーを召し上がれ。",
            itemID: "04",
            itemType: "sweet"
        },
        {
            itemName: "カービィの青りんごプリン",
            itemPrice: "880yen (税込950yen）",
            itemDescription: "緑のカービィはさわやかな青りんご味。まろやかなチーズプリンと甘ずっぱいジュレの、青りんごのハーモニーを召し上がれ。",
            itemID: "05",
            itemType: "sweet"
        },
        {
            itemName: "カービィのライチプリン",
            itemPrice: "880yen (税込950yen）",
            itemDescription: "青のカービィはなんとライチ味。まろやかなチーズプリンと甘ずっぱいジュレの、ライチのハーモニーを召し上がれ。",
            itemID: "06",
            itemType: "sweet"
        },
        {
            itemName: "メタナイトの気高きチョコレートケーキ",
            itemPrice: "780yen (税込842yen）",
            itemDescription: "メタナイトの纏う気高さとその騎士道を、チョコレートケーキで表現しました。濃厚なチョコレートにピーカンナッツを潜ませた、ミステリアスな一品です。",
            itemID: "07",
            itemType: "sweet"
        },
        {
            itemName: "くるまほおばりケーキ PETIT",
            itemPrice: "1,100yen (税込1,188yen）",
            itemDescription: "カービィカフェでもおなじみの「くるまほおばりケーキ」がちいさくなってPETITに登場。ふわふわのスポンジをいちご味のブランマンジェでコーティングした、ぷにぷに仕様です。",
            itemID: "08",
            itemType: "sweet"
        },
        {
            itemName: "・カービィもむちゅう！プププ・ティラミス<br>ワドルディもむちゅう！プププ・ティラミス ＜オレンジ＞",
            itemPrice: "1,450yen (税込1,566yen）",
            itemDescription: "カービィもワドルディも思わずとびついてしまう、おいしいティラミスができました。ほろ苦いカカオパウダーが引き立てる濃厚な甘さをオリジナルのカップでお楽しみください。",
            itemID: "09",
            itemType: "sweet"
        },
        {
            itemName: "まるでチーズケーキのような星ブロック",
            itemPrice: "730yen (税込788yen）",
            itemDescription: "これはチーズケーキ？それともプププランドではおなじみの「星ブロック」？いずれにしても、おいしく召し上がれますので、じっくり味わいながらお確かめください。",
            itemID: "10",
            itemType: "sweet"
        },
        {
            itemName: "ピンク・ショートケーキ 〜カービィがいちごをのせました〜",
            itemPrice: "730yen (税込768yen）",
            itemDescription: "みんなだいすきショートケーキ。仕上げにいちごをのせるのはカービィの係。カービィみたいなピンクのスポンジがふわふわでおいしい、じまんのケーキです。",
            itemID: "11",
            itemType: "sweet"
        },
        {
            itemName: "むてきキャンディーのバナナタルト",
            itemPrice: "780yen (税込842yen）",
            itemDescription: "パステルカラーのメレンゲをころんとあしらったタルトはふんわりやさしいバナナあじ。食べても“むてき”にはなれませんのでご注意を！",
            itemID: "12",
            itemType: "sweet"
        },
        {
            itemName: "スターロッドのマンゴータルト",
            itemPrice: "780yen (税込842yen）",
            itemDescription: "てっぺんにきらめくのは、チョコレートでできたスターロッド。ジューシーなマンゴーをたっぷりあしらった、とってもフルーティーな一品です。",
            itemID: "13",
            itemType: "sweet"
        },
        {
            itemName: "マキシムトマトのチョコタルト",
            itemPrice: "780yen (税込842yen）",
            itemDescription: "真っ赤ないちごをたっぷり使ったチョコタルトのベースにマキシムトマトをモチーフにしたマカロンをトッピング。ひとくち食べればおいしさで元気いっぱいになれる一品です。",
            itemID: "14",
            itemType: "sweet"
        },
        {
            itemName: "カービィ・パーティー",
            itemPrice: "マスコット付き : 920yen (税込994yen）<br>マスコットなし : 640yen (税込691yen）",
            itemDescription: "はるかぜのようにさわやかなグァバとミルキーサワーのジュースに、いちごソースを添えて。思わずワープスターで駆けまわりたくなる、カービィピンクをお楽しみください。",
            itemID: "15",
            itemType: "beverage"
        },
        {
            itemName: "ワドワド・カーニバル",
            itemPrice: "マスコット付き : 920yen (税込994yen）<br>マスコットなし : 640yen (税込691yen）",
            itemDescription: "ワドルディみたいな色のオレンジジュースは、レモンソースとマンゴー味のゼリーがとってもフルーティー！おいしさに思わず「わにゃっ！」と口に出ちゃうかも。",
            itemID: "16",
            itemType: "beverage"
        },
        {
            itemName: "メタナイト・ディライト",
            itemPrice: "マスコット付き : 920yen (税込994yen）<br>マスコットなし : 640yen (税込691yen）",
            itemDescription: "甘酸っぱいグレープジュースと、ベリーソースにあやしく揺らめく星々……メタナイトが深い青と紫に込めた思いを、ぜひじっくり味わってみてください。",
            itemID: "17",
            itemType: "beverage"
        },
        {
            itemName: "デデデ de ワンダー",
            itemPrice: "マスコット付き : 920yen (税込994yen）<br>マスコットなし : 640yen (税込691yen）",
            itemDescription: "かの「自称・大王」の姿をイメージしたドリンクは、鮮やかな水色のライチジュース。色とりどりのゼリーと甘酸っぱいパイナップルソースを添えたら、これぞまさに王者の風格！？",
            itemID: "18",
            itemType: "beverage"
        },
        {
            itemName: "ワープスターみたいな食パン",
            itemPrice: "1,200yen (税込1,296yen）",
            itemDescription: "カービィをのせて空をかける「ワープスター」のような食パンが誕生しました。しっとりモチモチとした食感の生地はほんのり甘く、お食事にもおやつにも、いつもの食卓をたのしく彩ります。",
            itemID: "19",
            itemType: "other"
        },
        {
            itemName: "まるで星ブロックみたいなスコーン",
            itemPrice: "880yen (税込950yen）",
            itemDescription: "プププランドのそこかしこにある「星ブロック」みたいなスコーンが誕生しました。ほんのり甘くしっとりした口当たりのスコーンは、ティータイムをおいしく彩ります。お好みのジャムやクリームを添えて、紅茶やコーヒーといっしょにどうぞ召し上がれ。",
            itemID: "20",
            itemType: "other"
        },
        {
            itemName: "スターロッド・アップルパイ",
            itemPrice: "680yen (税込734yen）",
            itemDescription: "ポップスターに実在するとくべつなアイテム「スターロッド」がアップルパイになりました！キャラメリゼしたパイ生地の中には、りんごとカスタードクリームがたっぷりです。「ふしぎなチカラで「もう1本」もらえることがあるかも…。」",
            itemID: "21",
            itemType: "other"
        },
    ];

    const getItemType = (item) => item.itemType;

    const contentDiv = document.querySelector("#content");

    const buildContent = () => {
        contentDiv.className = "petit-mode"; //set petit mode

        const menuTitleDiv = document.createElement("div"); //build menu frame
        menuTitleDiv.setAttribute("id", "menu-display");
        const menuTitle = document.createElement("h1");
        menuTitle.textContent = "Menu";
        menuTitleDiv.appendChild(menuTitle);
        contentDiv.appendChild(menuTitleDiv);
    
        const menuDiv = document.createElement("div");
        menuDiv.setAttribute("id", "menu-div");
        contentDiv.appendChild(menuDiv);

        const sweetsMenuDiv = document.createElement("div"); //make sweets menu
        sweetsMenuDiv.classList.add("sweets", "menu-section")
        const sweetTitle = document.createElement("h2");
        sweetTitle.textContent = "Sweets";
        sweetsMenuDiv.appendChild(sweetTitle);
        menuDiv.appendChild(sweetsMenuDiv);

        const beverageMenuDiv = document.createElement("div"); //make beverage menu
        beverageMenuDiv.classList.add("beverages", "menu-section")
        const beverageTitle = document.createElement("h2");
        beverageTitle.textContent = "Beverages";
        beverageMenuDiv.appendChild(beverageTitle);
        menuDiv.appendChild(beverageMenuDiv);

        const otherMenuDiv = document.createElement("div"); //make other menu
        otherMenuDiv.classList.add("other", "menu-section")
        const otherTitle = document.createElement("h2");
        otherTitle.textContent = "Other";
        otherMenuDiv.appendChild(otherTitle);
        menuDiv.appendChild(otherMenuDiv);

        menuArray.forEach((item) => { //add each item to respective menu
            let newMenuItem = document.createElement("div");
            newMenuItem.classList.add("menu-item");

            let newItemTitle = document.createElement("h3");
            newItemTitle.classList.add("item-title");
            newItemTitle.innerHTML = item.itemName;

            let newItemPrice = document.createElement("h5");
            newItemPrice.classList.add("h5");
            newItemPrice.innerHTML = item.itemPrice;

            let newItemDescription = document.createElement("p");
            newItemDescription.classList.add("item-description");
            newItemDescription.innerHTML = item.itemDescription;

            let newItemImage = document.createElement("img");
            newItemImage.classList.add("menu-item-image");
            newItemImage.src = `./images/petit-images/img-menu-drinks-${item.itemID}.webp`;

            newMenuItem.appendChild(newItemTitle);
            newMenuItem.appendChild(newItemPrice);
            newMenuItem.appendChild(newItemDescription);
            newMenuItem.appendChild(newItemImage);

            switch (getItemType(item)){
                case "sweet":
                    sweetsMenuDiv.appendChild(newMenuItem);
                    break;
                case "beverage":
                    beverageMenuDiv.appendChild(newMenuItem);
                    break;
                case "other":
                    otherMenuDiv.appendChild(newMenuItem);
                    break;
            }
        });
    };

    return { buildContent };
})();

export { Petit };