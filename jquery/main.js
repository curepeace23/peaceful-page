$(".dark-btn").click(
    function () {
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function () {
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function () {
        // $(".kenny").addClass("reveal");
        $(".kenny").show();
        $(".reveal-btn").hide();
    }
);

$(".draggable").draggable();