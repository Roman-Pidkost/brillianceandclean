/**
 * Created by Volchak on 17.10.2017.
 */
var host = 'http://localhost:8080/';

var rate = []
var id, N, rateStars = 0;
var reviews = [];
var fr = 0
setTimeout(getReviewFromDb, 100);
$('.comment_leave_button').click(function () {
    if (validateForm()) {
        newReview.nameSender = $('#comentName').val();
        newReview.number = "" + $("#comentPhone").val();
        // newReview.surnameSender = $("#comentSName").val();
        newReview.description = $("#commentText").val();
        newReview.confirmed = false;
        newReview.rating = rateStars;

        newReview.address = $("#selectCW").val()
        console.log(newReview)


        $.ajax({
            type: "POST",
            url: host + "reviews",
            data: JSON.stringify(newReview),
            contentType: 'application/json',
            success: function () {
                $('.confirmbackGr').css({
                    display: 'block',
                    top: 0,
                    left: 0,
                    position: 'fixed',

                    width: "100vw",
                    height: '100vh'
                });
                $('.nameComment').text('Дякуємо, ' + newReview.nameSender + ', що залишили свій відгук.');
                resetForm()
                getReviewFromDb();

            },
            error: function () {
                $('.confirmbackGr').css({
                    display: 'block',
                    top: 0,
                    left: 0,
                    position: 'fixed',
                    width: "100vw",
                    height: '100vh'
                });
                $('.nameComment').text('Дякуємо, ' + newReview.nameSender + ', що залишили свій відгук.');
                $('.reviewPart>input, textarea').val('');
                console.log("error");
                resetForm()
                getReviewFromDb();
            }

        })

    }
});



function getReviewFromDb() {

    $.ajax({
        url: host + "reviews/showed",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            destroyCarousel();
            getReview(data);
            reviews = data;
            console.log(reviews);
            slickCarousel();
        },
        error: function () {
            destroyCarousel();

            reviews = [
                {
                    id: 1,
                    nameSender: 'boy1',
                    title: '4,5 some review1',
                    description: '1 some text is gsdg sdfg sdfgsdfg sdfg heresome text is heresome text is heresome text is here',
                    photo: 'boy1.png',
                    rating: 1,
                    confirmed: true,


                },
                {
                    nameSender: 'boy2',

                    title: '1 some review2',
                    description: '2.5 some text is heresome texsd gdds  hdsh dsh sdf sdf t is heresome text is heresome text is here',
                    photo: 'boy2.png',
                    rating: 2.5,


                },
                {
                    nameSender: 'boy3',
                    title: '5 some review3',
                    description: '3 some text is heresome tesd fgsadg asasd sad axt is heresome text is heresome text is here',
                    photo: 'boy3.png',
                    rating: 3,


                },
                {
                    nameSender: 'boy4',
                    title: '4.5 some review4',
                    description: '4 some text is heresome te asfgsad gasd sad asd xt is heresome text is heresome text is here',
                    photo: 'boy4.png',
                    rating: 4.3,


                }, {
                    nameSender: 'boy1',
                    title: '4,5 some review1',
                    description: '1 some text is heresomea sdgadh jf fu kgf sdr asrg asg text is heresome text is heresome text is here',
                    photo: 'boy1.png',
                    rating: 1,


                },
                {
                    nameSender: 'boy2',
                    title: '1 some review2',
                    description: '2.5 some text is heresome text is heresome text is heresome text is here',
                    photo: 'boy2.png',
                    rating: 2.5,


                },
                {
                    nameSender: 'boy3',
                    title: '5 some review3',
                    description: '3 some text is heresome text is heresome text is heresome text is here',
                    photo: 'boy3.png',
                    rating: 3,


                },
                {
                    nameSender: 'boy4',
                    title: '4.5 some review4',
                    description: '4 some text is heresome text is heresome text is heresome text is here',
                    photo: 'boy4.png',
                    rating: 4.3,


                },
                {
                    nameSender: 'boy5',
                    title: '4.5 some review5',
                    description: '5 some text is heresome text is heresome text is heresome text is here',
                    photo: 'boy5.png',
                    rating: 5,


                }
            ];
            getReview(reviews);

            slickCarousel();
        }
    });

};

function getReview(reviews) {
    var l = reviews.length;
    $("body").append('<style id="coment_photos"></style>');

    var styles = $("#coment_photos");
    for (var i = 0; i < l; i++) {
        $('.comments').append('<div class="comment reviewTop' + i + '"><div class="coment_photo" id="coment_photo_' + i + '"></div><h3>' + reviews[i].nameSender + '</h3><p class="coment_text">' + reviews[i].description + '</p><div class="stars review' + i + '"></div></div>');
        console.log(reviews[i].photo);
        styles.append('#coment_photo_' + i + '{background-image: url("' + reviews[i].photo + '");}');
        var r = reviews[i].rating;
        var fullStars = parseInt(r);
        for (var j = 0; j < 5; j++) {
            $('.review' + i).append('<div class="star star' + j + '"></div>')
            if (r % 1 != 0) {
                var J = fullStars
                $('.review' + i + '>.star:eq(' + J + ')').css({
                    backgroundImage: 'url(img/starH.png)'
                })
            }
            ;
            if (fullStars == 5) {
                $('.review' + i + ' .star').css({
                    backgroundImage: 'url(img/starF.png)'
                })
            } else if (j <= fullStars) {
                $('.review' + i + '>.star:lt(' + j + ')').css({
                    backgroundImage: 'url(img/starF.png)'
                });
            }
            ;
        }
        ;
    }
};


function encodeImageFileAsURL(element) {
    $('.comment_leave_button').hide();
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        newReview.photo = reader.result
        $('.comment_leave_button').show()
    }

    reader.readAsDataURL(file);
    newReview.photo = reader.result
    $("#photoText").text('Фото завантажено')
    $("#photoText").css({color: 'white'})
    fr = 1
};


function destroyCarousel() {
    if ($('#commentsSlider').hasClass('slick-initialized')) {
        $('#commentsSlider').slick('destroy');
    }
};

function slickCarousel() {
    $('#commentsSlider').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        cssEase: 'ease',
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 200,

                settings: {

                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },


        ]
    })
};



function validateForm() {
    if ($('#comentName').val() == '') {
        $('#comentName').css({borderColor: 'red'})
    }
    else if ($('#comentSName').val() == '') {
        $('#comentSName').css({borderColor: 'red'})
    }
    else if ($('#comentPhone').val() < 100000000 || $('#comentPhone').val() > 1000000000000) {
        $('#comentPhone').css({borderColor: 'red'})

    }
    else if ($('#selectCW').val() == null) {
        $('#selectCW').css({borderColor: 'red'})

    }
    else if ($('#commentText').val() == '') {
        $('#commentText').css({borderColor: 'red'})
    }
    else if (fr == 0) {
        $('#photoText').css({color: 'red'})

    }
    else if (!rate[0]) {
        $('#komfortT').css({color: 'red'})
    } else if (!rate[1]) {
        $('#locationRevT').css({color: 'red'})
    } else if (!rate[2]) {
        $('#serviceRevT').css({color: 'red'})
    } else if (!rate[3]) {
        $('#quallityT').css({color: 'red'})
    } else if (!rate[4]) {
        $('#totalT').css({color: 'red'})
    } else {
        return true
    }
}
function resetForm() {
    $('#form input, #form textarea, #form select').val('');
}



function closeModal() {

    $('.form').delay(100).animate({
        left: '-100%'
    }, 1000)

    $('.confirmbackGr').css({
        display: 'none'
    })
    $(".optionsDel").remove()
    resetForm()
}


$('.stRew').click(function () {
    $(".starsPart span").css({color: "white"})
    N = $(this).index() + 1
});

$('.starsReview').click(function () {
    id = $(this).attr('id');
    var $set = $('.starsReview .stRew');
    if (id == 'komfort') {
        rate[0] = N
    } else if (id == 'locationRev') {
        rate[1] = N
    } else if (id == 'serviceRev') {
        rate[2] = N
    } else if (id == 'quallity') {
        rate[3] = N
    } else if (id == 'total') {
        rate[4] = N
    }
    var S = N
    $("#" + id + " .stRew").css({
        backgroundColor: 'transparent',
        backgroundImage: 'url("img/starEg.png")',
    })

    $("#" + id + " .stRew:lt(" + S + ")").css({
        backgroundColor: '#455a64',
        backgroundImage: 'url("img/starFg.png")',
        backgroundSize: '80%'
    })
    var sum = rate.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    rateStars = sum / 5
    if (rateStars % 1 < 1 && rateStars % 1 != 0) {
        rateStars = parseInt(rateStars) + 0.5
    }

});


$("#commentText").keyup(function () {
    var count = 160 - $(this).val().length
    console.log(count);
    $('.textCount').text('   (залишилося ' + count + ' символів)')


});
$('.backButton').click(function () {
    $('.form').delay(100).animate({
        left: '-100%'
    }, 1000)
    $('.commentConfirmation').css({
        display: 'none'
    })
    $(".optionsDel").remove()
    resetForm()
})

$("#form input, #form textarea, #form select").change(function () {

    $(this).css({borderColor: 'transparent'})
});
