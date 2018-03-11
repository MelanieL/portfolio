const app = {};

app.events = function () {
    $('a').smoothScroll();
};

app.init = function () {
    app.events();
};

$(function () {
    app.init();
});

