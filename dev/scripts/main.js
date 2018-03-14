const app = {};

app.events = function () {
    $('a').smoothScroll();
    // $.scrollify({
    //     section: ".snap",
    //     sectionName: "snap",
    //     interstitialSection: "",
    //     easing: "easeOutExpo",
    //     scrollSpeed: 1100,
    //     offset: 0,
    //     scrollbars: true,
    //     standardScrollElements: "",
    //     setHeights: true,
    //     overflowScroll: true,
    //     updateHash: true,
    //     touchScroll: true,
    //     before: function () { },
    //     after: function () { },
    //     afterResize: function () { },
    //     afterRender: function () { }
    // });
};

app.init = function () {
    app.events();
};

$(function () {
    app.init();
});

