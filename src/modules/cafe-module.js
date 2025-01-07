const Cafe = (function () {
    const menuArray = [
        {
            itemName: "アートコレクション・オ・レ（カフェオ・レ／チョコレートオ・レ／いちごオ・レ）",
            itemPrice: "スーベニアマグカップ付き : 1,980yen (税込2,178yen）スーベニアマグカップなし : 1,380yen (税込1,518yen）",
            itemDescription: "お好みのオ・レに、お気に入りのアートを選んでお召し上がりください。",
            itemID: "01",
            itemType: "beverage"
        },
        {
            itemName: "オレンジオーシャン",
            itemPrice: "830yen (税込913yen）",
            itemDescription: "オレンジ色の空が広がる、オレンジオーシャンをイメージしたドリンク。夕焼けのグラデーションをまぜながら、味の変化もお楽しみください。",
            itemID: "02",
            itemType: "beverage"
        },
        {
            itemName: "カービィのうきうきマシュマロ・オ・レ",
            itemPrice: "1,480yen (税込1,628yen）",
            itemDescription: 'カフェオ・レに、カービィマシュマロを添えて。マシュマロは2種類からお選びいただけます。<br>・カービィとワープスター<br>・すやすやワドルディ',
            itemID: "03",
            itemType: "beverage"
        },
        {
            itemName: "グリーングリーンズ",
            itemPrice: "830yen (税込913yen",
            itemDescription: "青い空と緑が彩る、グリーングリーンズをモチーフにしたドリンク。りんごを模した赤いつぶつぶには、味の変化のヒミツが！",
            itemID: "04",
            itemType: "beverage"
        },
        {
            itemName: "ドクターカービィのヒミツの研究ソーダ",
            itemPrice: "1,280yen (税込1,408yen）",
            itemDescription: "ドクターカービィのヒミツの研究用キット。実験成功に向けて、ぜひカービィに手を貸してあげてください！",
            itemID: "05",
            itemType: "beverage"
        },
        {
            itemName: "トルネイド☆ミックスジュース",
            itemPrice: "980yen (税込1,078yen）",
            itemDescription: "カービィのトルネイド能力で、いろんなフルーツやかき氷をくるくる回して、たつまきこうげき！フルーティでミルキーな、とくせいミックスジュースを召し上がれ。",
            itemID: "06",
            itemType: "beverage"
        },
        {
            itemName: "クラッコのシュワシュワソーダ とどめの一撃仕立て",
            itemPrice: "980yen (税込1,078yen）",
            itemDescription: "打倒クラッコまであと少し！ストロベリーソーダでとどめの一撃を！クリア後も、気を抜かずにお召し上がりください。",
            itemID: "07",
            itemType: "beverage"
        },
        {
            itemName: "カービィカフェオリジナル ブレンドコーヒー",
            itemPrice: "550yen (税込605yen）",
            itemDescription: "コックカワサキがデデデマウンテンで見つけたコーヒー豆からカービィカフェオリジナルブレンドコーヒーを作りました。",
            itemID: "08",
            itemType: "beverage"
        },
        {
            itemName: "大ぼうけん！くるまほおばりグルメプレート",
            itemPrice: "2,480yen (税込2,728yen）",
            itemDescription: "くるまほおばりカービィが、グルメなワンプレートメニューになっちゃった！？ワープスターみたいなサンドイッチに、ローストビーフやガーリックシュリンプ。ワドルディやエフィリンも乗り込んで、大ぼうけんの準備はバッチリ！おなかをいっぱいにして、新世界をかけぬけましょう！",
            itemID: "09",
            itemType: "food"
        },
        {
            itemName: "カービィバーガー＆ミートパスタ",
            itemPrice: "スーベニアプレート付き : 2,980yen (税込3,278yen）スーベニアプレートなし : 2,080yen (税込2,288yen）",
            itemDescription: "おなじみ、まんまるフェイスのカービィバーガー。ジューシーなパティをはさんだバーガーに、温野菜をトッピングしたミートパスタを添えた、バランスよくお食事が楽しめるプレートです。",
            itemID: "10",
            itemType: "food"
        },
        {
            itemName: "ワドルディバーガー（お好み焼き）＆ミートパスタ",
            itemPrice: "スーベニアプレート付き : 2,980yen (税込3,278yen）スーベニアプレートなし : 2,080yen (税込2,288yen）",
            itemDescription: "はたらきもののワドルディが、カービィカフェ OSAKAに限定バーガーとして登場！大阪名物のお好み焼きをサンドした、食べごたえのある一品です。",
            itemID: "11",
            itemType: "food"
        },
        {
            itemName: "ワドルディのおひるねオムライス",
            itemPrice: "1,980yen (税込2,178yen）",
            itemDescription: "たっぷりの自家製ソースと、とろ～りたまごのおふとんで、すやすやとおひるねするワドルディのオムライスです。起こさないように、そ～っとお召し上がりください。",
            itemID: "12",
            itemType: "food"
        },
        {
            itemName: "低アレルゲンおほしさまカレー",
            itemPrice: "1,200yen (税込1,320yen）",
            itemDescription: "おほしさまが散りばめられた、コックカワサキ特製の甘口カレーです。特定原材料の8品目（卵・乳・小麦・そば・落花生・エビ・カニ・くるみ）を原材料に使用していないので、アレルギーのある方も楽しくお召し上がりいただけます。コックカワサキごじまんのカレーをどうぞお楽しみあれ！ ",
            itemID: "13",
            itemType: "food"
        },
        {
            itemName: "ウィスピーウッズのもりもりごちそうプレート",
            itemPrice: "2,680yen (税込2,948yen）",
            itemDescription: "アップルジンジャーソースのチキンに、星ブロックのオムレツ。ターメリックライスのワープスターにフェーブをちょこんと乗せて。ウィスピーウッズのココットの中にはポテトサラダがかくれている、楽しいごちそうプレートです。",
            itemID: "14",
            itemType: "food"
        },
        {
            itemName: "ヘンケイ！くるまほおばりケーキ",
            itemPrice: "1,980yen (税込2,178yen）",
            itemDescription: "『星のカービィ　ディスカバリー』のワドルディカフェに登場する、とっておきの一品が、なんとカービィカフェで現実のメニューに登場！フルーツやお菓子でできたステージを走るくるまほおばりカービィは、フルーツジャムを挟んだスポンジをイチゴ味のブランマンジェでコーティングしたぷにぷに仕様♪さあ、カービィといっしょに、新世界をかけめぐりましょう！",
            itemID: "15",
            itemType: "dessert"
        },
        {
            itemName: "ワドルディのさがしもの",
            itemPrice: "1,680yen (税込1,848yen）",
            itemDescription: "雲の中にすっぽり顔をうずめて、ワドルディが何かさがしています。さがしものは見つかったかな？オレンジシャーベットとクリームのハーモニーをお楽しみください。",
            itemID: "16",
            itemType: "dessert"
        },
        {
            itemName: "メタナイトが鍛錬のあいまにチョコっと食べちゃうパフェ",
            itemPrice: "680yen (税込748yen）",
            itemDescription: "剣の道を極めんとする孤高の騎士にとって、日々の鍛錬と同じくらい休息も大事。そんなメタナイトが休息中にぺろりと食べちゃうというパフェは、てっぺんにチョコアイス、さらにチョコクリームにブルーベリーソースを重ねた、ひと筋縄ではいかない一品です。",
            itemID: "17",
            itemType: "dessert"
        },
        {
            itemName: "カービィのふわふわパンケーキ",
            itemPrice: "1,680yen (税込1,848yen）",
            itemDescription: "たっぷりの厚みのふわふわパンケーキに、カービィのいちごアイスをのせました。温かいパンケーキとのコントラストをお楽しみください！",
            itemID: "18",
            itemType: "dessert"
        },
        {
            itemName: "カービィのすいこみ！たこ焼きみたいなプチケーキ",
            itemPrice: "1,680yen (税込1,848yen）",
            itemDescription: "見た目はまるでたこ焼き！だけど、食べるとふんわりあま～いプチケーキ！？メープルの香りに誘われて、カービィが食べちゃう前に召し上がれ。",
            itemID: "19",
            itemType: "dessert"
        },
        {
            itemName: "カービィがつくった！ハリキリおてつだいパフェ",
            itemPrice: "880yen (税込968yen）",
            itemDescription: "カービィお手製のあのメニューが、食べやすいサイズで登場！他のスタッフに盛りつけをおまかせいただくこともできますが、ここはやっぱり……。（注：写真はじょうずに盛りつけられた時のイメージです）",
            itemID: "20",
            itemType: "dessert"
        }
    ] 

    const contentDiv = document.querySelector("#content");

    const getItemType = (item) => item.itemType;

    const buildContent = () => {
        contentDiv.classList.add("cafe-mode"); //set cafe mode

        const menuTitleDiv = document.createElement("div"); //build menu frame
        menuTitleDiv.setAttribute("id", "menu-display");
        const menuTitle = document.createElement("h1");
        menuTitle.textContent = "Menu";
        menuTitleDiv.appendChild(menuTitle);
        contentDiv.appendChild(menuTitleDiv);
    
        const menuDiv = document.createElement("div");
        menuDiv.setAttribute("id", "menu-div");
        contentDiv.appendChild(menuDiv);

        const beverageMenuDiv = document.createElement("div"); //make beverage menu
        beverageMenuDiv.classList.add("beverages", "menu-section")
        const beverageTitle = document.createElement("h2");
        beverageTitle.textContent = "Beverages";
        beverageMenuDiv.appendChild(beverageTitle);
        menuDiv.appendChild(beverageMenuDiv);

        const foodMenuDiv = document.createElement("div"); //make food menu
        foodMenuDiv.classList.add("food", "menu-section")
        const foodTitle = document.createElement("h2");
        foodTitle.textContent = "Food";
        foodMenuDiv.appendChild(foodTitle);
        menuDiv.appendChild(foodMenuDiv);
    
        const dessertMenuDiv = document.createElement("div"); //make dessert menu
        dessertMenuDiv.classList.add("dessert", "menu-section")
        const dessertTitle = document.createElement("h2");
        dessertTitle.textContent = "Dessert";
        dessertMenuDiv.appendChild(dessertTitle);
        menuDiv.appendChild(dessertMenuDiv);

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
            newItemImage.src = `./images/cafe-images/img-menu-drinks-${item.itemID}.webp`;

            newMenuItem.appendChild(newItemTitle);
            newMenuItem.appendChild(newItemPrice);
            newMenuItem.appendChild(newItemDescription);
            newMenuItem.appendChild(newItemImage);

            switch (getItemType(item)){
                case "beverage":
                    beverageMenuDiv.appendChild(newMenuItem);
                    break;
                case "food":
                    foodMenuDiv.appendChild(newMenuItem);
                    break;
                case "dessert":
                    dessertMenuDiv.appendChild(newMenuItem);
                    break;
            }
        });
    }

    return { buildContent };
})();

export { Cafe };