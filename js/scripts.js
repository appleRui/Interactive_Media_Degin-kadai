    (function ($) {
    "use strict";

    // レスポンシブ時カテゴリーリンクを押すとメニューが閉じる
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // スクロールした時にカテゴリー名に色を足す
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

})(jQuery);
