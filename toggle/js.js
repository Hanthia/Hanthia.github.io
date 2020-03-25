/*** COLOR CHANGER ***/
$("#color-toggle").on("click", function () {
    let e = this.io ^= 1;
    $("#color-palate").animate({
        right: e ? 0 : -188
    }, "slow");
});

$("#blue").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_blue.css");
});

$("#green").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style.css");
});

$("#purple").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_purple.css");
});


$("#dark").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_dark_dark.css");
});