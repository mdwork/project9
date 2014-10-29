$(document).ready(function(){
    /*timer*/
    function get_timer_914(string_914) {
        var date_new_914 = string_914;
        var date_t_914 = new Date(date_new_914);
        var date_914 = new Date();
        var timer_914 = date_t_914 - date_914;

        if(date_t_914 > date_914) {
            var day_914 = parseInt(timer_914/(60*60*1000*24));
            if(day_914 < 10) {
                day_914 = "0" + day_914;
            }

            day_914 = day_914.toString();
            var hour_914 = parseInt(timer_914/(60*60*1000))%24;
            if(hour_914 < 10) {
                hour_914 = "0" + hour_914;
            }

            hour_914 = hour_914.toString();
            var min_914 = parseInt(timer_914/(1000*60))%60;
            if(min_914 < 10) {
                min_914 = "0" + min_914;
            }

            min_914 = min_914.toString();
            var sec_914 = parseInt(timer_914/1000)%60;
            if(sec_914 < 10) {
                sec_914 = "0" + sec_914;
            }		sec_914 = sec_914.toString();

            timethis_914 = day_914 + " : " + hour_914 + " : " + min_914 + " : " + sec_914;
            $(".timerhello_914 p.result .result-day").text(day_914);
            $(".timerhello_914 p.result .result-hour").text(hour_914);
            $(".timerhello_914 p.result .result-minute").text(min_914);
            $(".timerhello_914 p.result .result-second").text(sec_914);
        }
        else {
            $(".timerhello_914 p.result .result-day").text("00");
            $(".timerhello_914 p.result .result-hour").text("00");
            $(".timerhello_914 p.result .result-minute").text("00");
            $(".timerhello_914 p.result .result-second").text("00");
        }
    }

    /*set timer*/
    function getfrominputs_914(){
        string_914 = "12/25/2014 00:00"; /*month, day, year*/
        get_timer_914(string_914);
        setInterval(function(){
            get_timer_914(string_914);
        },1000);}

    getfrominputs_914();

    var firstBlockAnimate = $('.box-advantages').offset().top,
        secondBlockAnimate = $('.box-steps').offset().top,
        thirdBlockAnimate = $('.box-clients').offset().top,
        arrayAnimateBlock = [firstBlockAnimate, secondBlockAnimate, thirdBlockAnimate];

    $('.main-nav a').on('click', function(e){
        e.preventDefault();

        var curClickElement = $(this).parent().index();

        $('html, body').animate({
            scrollTop: arrayAnimateBlock[curClickElement] - 154
        })
    });

    $(window).on('scroll', function(){
        var curPositionWindow = $(window).scrollTop(),
            curClickElement = $('.main-nav li');

        var numberElement;
        function scrollingNav(curBlockAnimate){
            arrayAnimateBlock.forEach(function(element, index){
                if(arrayAnimateBlock[index] == curBlockAnimate) {
                    numberElement = index;
                }
            });

            if(curPositionWindow >= curBlockAnimate -157) {
                curClickElement.eq(numberElement).children('a').addClass('active');
                curClickElement
                    .eq(numberElement)
                    .children('a')
                    .addClass('active')
                    .parent()
                    .siblings()
                    .children('a')
                    .removeClass('active');
            }
            else if(curPositionWindow < 499) {
                curClickElement.children('a').removeClass('active');
            }
        }
        scrollingNav(firstBlockAnimate);
        scrollingNav(secondBlockAnimate);
        scrollingNav(thirdBlockAnimate);
    });

    /*placeholder support for ie8*/
    (function ($) {
        $.support.placeholder = ('placeholder' in document.createElement('input'));
    })(jQuery);


    //fix for IE7 and IE8
    $(function () {
        if (!$.support.placeholder) {
            $("[placeholder]").focus(function () {
                if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            }).blur(function () {
                if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            }).blur();

            $("[placeholder]").parents("form").submit(function () {
                $(this).find('[placeholder]').each(function() {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
            });
        }
    });

    $('.feedback').click(function(e){
        var popupInputTell = $(this).siblings('.tooltip-tel').children('.tel-valid-js');
        if(popupInputTell.val().length < 6) {
            e.preventDefault();

            if(popupInputTell.val().length < 6) {
                $('.show-tooltip').css('display', 'block').animate({'opacity': '1'}, 300);
            }

            $('.tel-valid-js').blur(function(){
                if($('.tel-valid-js').val().length > 5) {
                    $('.show-tooltip').css({'display':'none', 'opacity':'0'});
                }
            });
        }
    });
});