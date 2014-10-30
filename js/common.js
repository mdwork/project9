$(document).ready(function(){
    var firstBlock = $('.box-advantages'),
        secondBlock = $('.box-steps'),
        thirdBlock = $('.box-clients'),
        arrayAnimateBlock = [firstBlock, secondBlock, thirdBlock];

    $('.main-nav a').on('click', function(e){
        e.preventDefault();

        var curClickElement = $(this).parent().index();

        $('html, body').animate({
            scrollTop: arrayAnimateBlock[curClickElement].offset().top - 154
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

            if(curPositionWindow >= curBlockAnimate.offset().top -157) {
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
        scrollingNav(firstBlock);
        scrollingNav(secondBlock);
        scrollingNav(thirdBlock);
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
        var emailBoxValid = $(e.target).siblings('.tooltip-tel'),
            emailValid = emailBoxValid.find('input'),
            toolTipBox = emailBoxValid.find('.show-tooltip');

        if(emailValid.val().length < 6) {
            e.preventDefault();

            emailValid.addClass('no-valid-email_js');
            toolTipBox.css('display','block').animate({'opacity':'1'}, 300);

            emailValid.on('keyup', function(){
                if(emailValid.val().length > 5) {
                    emailValid.removeClass('no-valid-email_js');
                    $(this).css('border-color','#D7D5CF');
                    toolTipBox.css({'display':'none', 'opacity':'0'});
                }
            });
        }

    });
});