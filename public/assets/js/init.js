console.log('js loaded');

$(document).ready(function () {
    $('.modal').modal();

    $('#userselection').modal('open');

    $('.sidenav').sidenav();

    $('.dropdown-trigger').dropdown();

    

var path = window.location.href.split('/');
var uniqueurl = path[6];
    console.log('full path: ' + path + 'uniqueurl: ' + uniqueurl);

    $('.swipe-nav').prepend('<li><a href="/dashboard/' + uniqueurl + '">Home</a></li>')


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

            var food_id = $(this).attr('value');
            var path = window.location.href;


            $.ajax({
                method: "PUT",
                url: path + '/' + food_id
            }).then(function (data) {
                console.log(food_id + ' liked');
            })

            $(this).toggleClass('liked unliked');

            $('.liked').css({
                "background-image": "url('../../../assets/images/heart.png')",
                "background-size": "30%"
            });
        }
    });
});