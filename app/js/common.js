$(document).ready(function () {

    //calculates screen height minus bottom panel (POPUPS)
    const rootElement = document.querySelector(".overlay");
    const viewPortH = rootElement.getBoundingClientRect().height;
    const windowH = window.innerHeight;
    const browserUiBarsH = viewPortH - windowH;
    rootElement.style.height = `calc(100vh - ${browserUiBarsH}px)`;

});

//REVIEW
$(document).ready(function () {
   //choose awards
   $(".awards__item").on("click change keyup", function () {
       let checkAward = $(".awards__row .checkbox");
       let tags = $(this).closest(".step__info").siblings().find(".tags__circle .checkbox");

       if (checkAward.is(":checked")  ) {
           tags.attr("checked", true);
       } else {
           tags.attr("checked", false);
       }

       if ($("#step-one .tags__circle .checkbox").is(":checked")) {
           $("#step-two input").removeAttr("disabled");
       } else {
           $("#step-two input").addAttr("disabled");
       }
   });

    //check for completed inputs
    $("#step-two input").on("click change keyup", function () {
        let number = $("#input__table-number").val();
        let phone = $("#input__phone").val();
        let name = $("#input__name").val();

        if(number.length != 0 && phone.length != 0 && name.length != 0) {
            $(".review__btn").removeAttr('disabled');
            $("#step-two .checkbox").attr("checked", true);
        } else {
            $(".review__btn").attr('disabled', 'disabled');
            $("#step-two .checkbox").attr("checked", false);
        }
    });

    //POPUPS
    $(".overlay").click(function () {
        $(".popup, .overlay").removeClass('active');
        $.scrollLock(false);
    });
    $(".popup").on("change keyup click", function (e) {
        e.stopPropagation();
    })
    $(document).on("change ", function () {
        if ($(".popup").height() > $(window).height()) {
            $(".overlay").addClass('height');
        } else {
            $(".overlay").removeClass('height');
        }
    });

    //positive review path
    $(".review__btn-positively").click(function () {
        $(".overlay").addClass('active');
        $(".popup__review").addClass('active');
        $.scrollLock(true);
    });
    $(".popup-link").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup__photo").addClass('active');
    });
    $(".popup__photo .btn-blue").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup__map").addClass('active');
    });
    $(".popup__map").click(function () {
        $(".popup").removeClass('active');
        $(".popup__load").addClass('active');
    });
    $('#files').on('change', function(){
        $(".popup").removeClass('active');
        $(".popup__send").addClass('active');
    });
    $(".popup__send .link").click(function () {
        $(".popup").removeClass('active');
        $(".popup__expect").addClass('active');
    });
    $(".popup__send .btn-blue").click(function () {
        $(".popup").removeClass('active');
        $(".popup__review").addClass('active');
    });

    //negative review path
    $(".review__btn-negative").click(function () {
        $(".popup__regret, .overlay").addClass('active');
        $.scrollLock(true);
    });
    $(".review-negative .btn-blue").click(function () {
        $(".popup__expect, .overlay").addClass('active');
        $.scrollLock(true);
    });
});

//HELP
$(document).ready(function () {

    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        centerPadding: '0',
    });
});
