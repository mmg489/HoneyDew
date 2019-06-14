console.log('js loaded');

var test = 
$('.swiper-slide').children('.idea').each(function () {
    console.log(this.innerHTML);
});
console.log(test);

$(document).ready(function (){
    $('.modal').modal();

    $('.sidenav').sidenav();

    $('.dropdown-trigger').dropdown();
    

    var mySwiper = new Swiper('.swiper-container');

    
    $('.swiper-slide').dblclick(function() {
        
        if ($(this).hasClass('liked')) {

            var food_id = $(this).attr('value');

            $.ajax({
                method: "PUT",
                url: "/api/foods/undo/" + food_id
            }).then(function (data) {
                console.log(food_id + ' unliked');
            })

            $(this).toggleClass('liked unliked');

            $('.unliked').css({
                "background-image": "",
                "background-size": "100%"
            });

        } else if ($(this).hasClass('unliked')){

            var food_id = $(this).attr('value');

            $.ajax({
                method: "PUT",
                url: "/api/foods/liked/" + food_id
            }).then(function (data){
                console.log(food_id + ' liked');
            })
        
            $(this).toggleClass('liked unliked');

            $('.liked').css({
                "background-image": "url('../../assets/images/heart.png')",
                "background-size": "30%"
            });
        }
    });
});