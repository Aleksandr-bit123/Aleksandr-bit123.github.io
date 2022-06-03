$(document).ready(function () {
    //    alert();
    //    $('.someStatisticDivP').each((i, el) => {
    //    let k = $(el).text();
    //    console.log(k);
    //    for (j = 0; j < k; j++) {
    //        setTimeout(() => {
    ////        console.log(k);      
    //            $(el).text(j);
    //        }, 5000);
    //    };
    //});
    setTimeout(() => {
        $('.btn-primary').click();
    }, 30000);


});

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $('section').each((i, el) => {
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $("nav a").each((i, el) => {
                if ($(el).hasClass("activePointMenu")) {
                    $(el).removeClass("activePointMenu");

                };
            });
            if (i < 4) {
                $('nav li:eq(' + i + ')').find('a').addClass('activePointMenu');
            } else {
                $('nav li:eq(' + (i - 1) + ')').find('a').addClass('activePointMenu');
            }
        };
    });
});

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 60 + "px"
    });
});

let options = {
    threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let elements = $('.elementWithAnimation, .elementWithAnimation1');

elements.each((i, el) => {
    observer.observe(el);
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {

            if ($(change.target).hasClass('elementWithAnimation')) {
                change.target.classList.add('elementWithAnimation_showAnimation');
                var time = 2,
                    cc = 1;
                if (cc < 2) {
                    $(change.target).each(function () {
                        var
                            i = 1,
                            num = $(this).data('num'),
                            step = Math.round(1000 * time / num),
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    cc = cc + 2;
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
            if ($(change.target).hasClass('elementWithAnimation1')) {
                change.target.classList.add('elementWithAnimation_showAnimation1');
                change.target.src = change.target.dataset.src;
                $(change.target).css('background-image', $(change.target).css('background-image').replace('_bad', ''));
            }


            //            console.log($(change.target).css('background-image'));
        }
    })
}
