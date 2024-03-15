/*-------------------------------------------
ロードが終わった時の処理
-------------------------------------------*/
// 1. ローディングエリアの要素を取得
const loadingAreaGrey  = document.getElementById('loading');
const loadingAreaGreen = document.getElementById('loading-screen');
const loadingText      = document.querySelector('#loading p');

// 2. ページのロード完了時のイベントリスナーを追加
window.addEventListener('load', () => {

    // 3. グレーのローディングエリアを透明にするアニメーションを追加
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],      // 不透明度を1から0に変化させます
            visibility: 'hidden', // 可視性を非表示にします
        },
        {
            duration: 2000,   // アニメーションの時間（ミリ秒）
            delay: 1200,      // アニメーションの遅延時間（ミリ秒）
            easing: 'ease',   // アニメーションのイージング関数
            fill: 'forwards', // アニメーションの終了後に状態を維持します
        },        
    );

    // 4. 緑色のローディングエリアが下から上に移動するアニメーションを追加します
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh'], // 下から上に移動します
        },
        {
            duration: 2000,   // アニメーションの時間（ミリ秒）
            delay: 800,       // アニメーションの遅延時間（ミリ秒）
            easing: 'ease',   // アニメーションのイージング関数
            fill: 'forwards', // アニメーションの終了後に状態を維持します
        },
    );

    // 5. ローディングテキストのフェードアウトアニメーションを追加します
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 // 80%
            },
            {
                opacity: 0,
                offset: 1 // 100%
            },
        ],  
        {
            duration: 1200, // アニメーションの時間（ミリ秒）
            easing: 'ease', // アニメーションのイージング関数
            fill: 'forwards', // アニメーションの終了後に状態を維持します
        }
    );
});

/* 解説
1. ローディングエリアの要素を取得します。
2. ページのロード完了時に実行されるイベントリスナーを追加します。
3. グレーのローディングエリアを透明にするアニメーションを追加します。opacity を変化させ、visibility を非表示に設定します。
4. 緑色のローディングエリアが下から上に移動するアニメーションを追加します。translate を使用して移動させます。
5. ローディングテキストのフェードアウトアニメーションを追加します。不透明度を変化させ、80%の位置から100%の位置までフェードアウトします。
*/


/*-------------------------------------------
画像にマウスオーバーした時のイベント
-------------------------------------------*/
// 1. メインの画像要素を取得します
const mainImage = document.querySelector('.gallery-image img');
// 2. サムネイルの画像要素を取得します
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

// 3. サムネイルの画像要素のそれぞれに対して、マウスオーバーイベントを追加します
thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener('mouseover', (event) => {
        // 4. マウスオーバーされたサムネイルの画像のソースをメインの画像に設定します
        mainImage.src = event.target.src;
        
        // 5. コンソールにサムネイルの画像のソースを出力します
        console.log(thumbImage.src);
        
        // 6. メインの画像をフェードインするアニメーションを500ミリ秒で実行します
        mainImage.animate({opacity: [0, 1]}, 500); 
    });
});

/* 解説
1. メインの画像要素とサムネイルの画像要素をJavaScriptで取得します。
2. サムネイルの画像要素にマウスオーバーイベントを追加するために forEach メソッドを使用します。
3. サムネイルの画像要素がマウスオーバーされた時に実行される関数を定義します。
4. マウスオーバーされたサムネイルの画像のソースをメインの画像のソースに設定します。
5. コンソールにサムネイルの画像のソースを出力します（デバッグ用）。
6. メインの画像をフェードインするアニメーションを実行します。
 */    

/*-------------------------------------------
開閉ボタンをクリックした時のイベント
-------------------------------------------*/
// 1. 開閉ボタン、メニューパネル、メニュー項目を取得
const menuOpen  = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');

// 2. メニューアニメーションのオプションを設定
const menuOptions = {
    duration: 1400,   // アニメーションの時間（ミリ秒）
    easing: 'ease',   // アニメーションのイージング関数
    fill: 'forwards', // アニメーションの終了後に状態を維持
};

// 3. メニューを開いた時のイベントリスナーを追加
menuOpen.addEventListener('click', () => {
    console.log('メニューを開く');

    // 3.1. メニューパネルを右から左にスライドさせて開きます
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

    // 3.2. メニュー項目を上から順に表示させます
    menuItems.forEach((menuItem, index) => {
        console.log(`${index}番目のリスト`);

        // 3.2.1. メニュー項目をフェードインしながら上にスライドさせます
        menuItem.animate(
            {
                opacity: [0, 1], // 不透明度を0から1に変化させます
                translate: ['2rem', 0], // 上に2rem移動させます
            },
            {
                duration: 2400,     // アニメーションの時間（ミリ秒）
                easing: 'ease',     // アニメーションのイージング関数
                delay: index * 300, // メニュー項目ごとに遅延を設定します
                fill: 'forwards',   // アニメーションの終了後に状態を維持します
            },
        );
    });
});

// 4. メニューを閉じるためのイベントリスナーを追加します
menuClose.addEventListener('click', () => {
    console.log('メニューを閉じる');

    // 4.1. メニューパネルを左から右にスライドさせて閉じます
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);

    // 4.2. メニュー項目をフェードアウトさせます
    menuItems.forEach((menuItem) => {
        menuItem.animate({opacity: [1, 0]}, menuOptions);
    });
});

/* 解説
1. 開閉ボタン、メニューパネル、メニュー項目をJavaScriptで取得します。
2. メニューアニメーションのオプションを設定します。
3. メニューを開くためのイベントリスナーを追加し、メニューパネルを右から左にスライドさせて開き、メニュー項目を上から順に表示します。
4. メニューを閉じるためのイベントリスナーを追加し、メニューパネルを左から右にスライドさせて閉じ、メニュー項目をフェードアウトさせます。
*/

/*-------------------------------------------
要素をスクロールで表示
-------------------------------------------*/
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {        
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', '0'],
                },
                {
                    duration: 2000,
                    easing: "ease",
                    fill: "forwards",
                }
            );

            //一度ふわっと表示されたら監視をやめる
            obs.unobserve(entry.target);
        }
    });
};

//監視ロボットの設定
const fadeObserver = new IntersectionObserver(animateFade);

//.fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');

fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);    
});
