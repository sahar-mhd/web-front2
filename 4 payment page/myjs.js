$(document).ready(function () {
    $("#inp1").keyup(function () {
        var x = $("#inp1")
        if (x.val().length > 20) {
            x.addClass("error")
        } else {
            x.removeClass("error")
        }
    });
    $("#inp2").keyup(function () {
        var x = $("#inp2")
        if (x.val().length > 20) {
            x.addClass("error")
        } else {
            x.removeClass("error")
        }
    });
    $("#inp3").keyup(function () {
        var x = $("#inp3")
        if (x.val().length > 20) {
            x.addClass("error")
        } else {
            x.removeClass("error")
        }
    });
    $("#inp4").keyup(function () {
        var x = $("#inp4")
        if (x.val().length > 20) {
            x.addClass("error")
        } else {
            x.removeClass("error")
        }
    });

    $("#p1").mouseenter(function () {
        $("#p1").addClass("error")
    });
    $("#p1").mouseleave(function () {
        $("#p1").removeClass("error")
    });
    $("#p2").mouseenter(function () {
        $("#p2").addClass("error")
    });
    $("#p2").mouseleave(function () {
        $("#p2").removeClass("error")
    });
});