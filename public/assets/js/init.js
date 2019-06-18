console.log('js loaded');

$(document).ready(function () {
    $('.modal').modal();

    $('#userselection').modal('open');

    $('.sidenav').sidenav();

    $('.dropdown-trigger').dropdown();


    var mySwiper = new Swiper('.swiper-container');


    $('.swiper-slide').dblclick(function () {

        if ($(this).hasClass('liked')) {

            var food_id = $(this).attr('value');
            var path = window.location.href;

            $.ajax({
                method: "PUT",
                url: path + '/undo/' + food_id
            }).then(function (data) {
                console.log(food_id + ' unliked');
            })

            $(this).toggleClass('liked unliked');

            $('.unliked').css({
                "background-image": "",
                "background-size": "100%"
            });

        } else if ($(this).hasClass('unliked')) {

            var mealname = $(this).last().text().trim();
            console.log(mealname);
            var path = window.location.href;

            $.ajax({
                method: "PUT",
                url: path + '/' + mealname
            }).then(function (data) {
                console.log(mealname + ' liked');
            })

            $(this).toggleClass('liked unliked');

            $('.liked').css({
                "background-image": "url('../../../assets/images/heart.png')",
                "background-size": "30%"
            });
        }
    });
});