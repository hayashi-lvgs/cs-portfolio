document.addEventListener("DOMContentLoaded", function () {
  //HTML が全部読み込まれて、タグ構造（DOM）が完成したタイミングで、中の処理を実行してね！という合図
  const body = document.body;
  //「body という変数に、HTML の body 要素を入れる」

  const toggleBtn = document.querySelector(".toggle-btn");
  //「toggleBtn にメニュー開閉ボタンのDOM要素を入れる」
  //toggleBtn(メニューを開いたり閉じたりする ボタンの要素。)

  const mask = document.getElementById("mask");
  //id="mask" の要素を取得



  if (toggleBtn && mask) {
    function toggleMenu() {
      body.classList.toggle("menu-open");
    }
    //Functionとは「何度も使える処理（命令）をひとまとめにした“名前付きの箱”」
    //クリックしたら toggleMenu() を“実行する”という意味。
    toggleBtn.addEventListener("click", toggleMenu);
    mask.addEventListener("click", toggleMenu);
    //ボタンを押したら開閉・マスクを押したら閉じる

  }

  // ====== ここから products のページネーション機能 ======
  const productItems = document.querySelectorAll(".product-list li");
  //.product-list の中のすべての <li>（商品）を取ってきて配列のように扱えるリストにする。

  const pageLinks = document.querySelectorAll(".pagination a");
  //.pagination の中の <a>（ページ番号リンク）をすべて取得。


  if (productItems.length && pageLinks.length) {
    //商品が1つ以上あり、ページリンクも1つ以上あるときだけ、「ページ切り替え機能を動かす」。

    function showPage(page) {
      //showPage という名前の“ページ切り替え用の関数”を作っている。
      const target = String(page);
      //page（数字）を文字列に変換して target に入れている。

      // 商品の表示/非表示・ここまだよくわからない
      productItems.forEach((li) => {
        const p = li.dataset.page || "1";
        li.style.display = p === target ? "" : "none";
      });
      

      // ページ番号の見た目
      pageLinks.forEach((link) => {
        const li = link.parentElement;
        if (link.dataset.page === target) {
          li.classList.add("is-current");
        } else {
          li.classList.remove("is-current");
        }
      });
    }

    // クリックイベント
    pageLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        showPage(this.dataset.page);
      });
    });

    // 初期表示は1ページ目
    showPage(1);
  }
});
