$(".draggable").draggable({
    stack: ".draggable",
    stop: function (event, ui) {
        const imgRect = this.getBoundingClientRect();
        const whiteRect = document.querySelector(".right").getBoundingClientRect();

        const centerX = imgRect.left + imgRect.width / 2;

        if (centerX > whiteRect.left) {
            window.location.href = "truelove.html";
        }
    }
});

$(".dark-btn").click(function () {
    $(".container").toggleClass("dark");
    const isDark = $(".container").hasClass("dark");

    $(this).text(isDark ? "lights on" : "lights off");

    $("img[data-dark]").each(function () {
        const $img = $(this);
        const newSrc = isDark ? $img.data("dark") : $img.data("light");

        $img.fadeOut(300, function () {
            $img.attr("src", newSrc).fadeIn(300);
        });
    });
});
