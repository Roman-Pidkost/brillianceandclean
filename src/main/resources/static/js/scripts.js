/**
 * Created by Volchak on 29.09.2017.
 */
//плавний скролл
var newReview = {}
$(".navbarHeaderMobile").slideToggle(1)
$('.linkMobile').click(function () {
    $(".navbarHeaderMobile").slideToggle(1)
})


$(document).ready(function () {
    $(".navbar, .navbarHeaderMobile, #navbarHeader ").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 500);
    });
    $(".service_but").on("click", "a", function (event) {
        if ($(window).width < 700) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            console.log(id)

            $('body,html').animate({
                scrollTop: top
            }, 500);
        }
    });
    $(".comments_button").on("click", "a", function (event) {

        event.preventDefault();


        $('body,html').animate({
            scrollTop: $("#form").offset().top
        }, 500);
    });


    $('.footer_logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    })

    var videoBlock = document.getElementsByClassName('header_video')[0];

    var interval = setInterval(function () {
        if (videoBlock.readyState === 4) {
            videoBlock.play();
            clearInterval(interval);
        }
    }, 300);
});

$(function (f) {
    var element = f('.burger');
    f(window).scroll(function () {
        if (f(this).scrollTop() > 50) {
            $('.burger').css({
                right: '0px',
                top: 0,
                border: '1px solid #192125'

            })
            $('.navbarHeaderMobile').css({
                right: '40px',
                top: '-16px'

            })

        } else {
            $('.burger').css({
                right: '10px',
                top: '10px',
                border: "none"
            })
            $('.navbarHeaderMobile').css({
                right: '50px',
                top: '-6px'

            })

        }

        // element['fade'+ (f(this).scrollTop() > 50 ? 'In': 'Out')](500);
    });


});
$('.form').css({
    left: '-100%'
})
//автомийки обєкти

var carWash = [
    {
        name: '\"Шипшина\"',
        addressCity: "м.Львів",
        addressStr: "вул. Стрийська 100",
        phoneMain: '+38098 05 00 128',
        phoneAdd: '+38067 71 39 211',
        phoneMainDesc: '- запис на мийку',
        phoneAddDesc: '- (поліровка, покриття, хімія)',
        servicesList: [
            '<b>Детейлінг</b><br>(поліровка кузова, хімчистка салона, нанесення захисного покриття)'
        ],
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW1/s1',
                    text: '!!!!!!!!! !!!!!!!!!!!!!!!lorem ipsum sit ame!!!!!!!!!! !!!!!!!!lorem ipsum sit ame!!!! !!!!!!!! !!!!!!lorem ipsum sit ame!!!!!! !!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['1some servisesome servise1', 'some servisesome servise2', 'some servise3ome servise3', 'some servise4some servise4', 'some servise5some servise5', 'some servise6some servise6', 'some servise7some servise7', 'some servise8some servise8', 'some servise9some servise9', 'some servise10some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'cw1s2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['2some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW1s3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['3some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName4',
                description1: {
                    name: 'CW1S4',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['4some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName5',
                description1: {
                    name: 'CW1S5',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['5some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName6',
                description1: {
                    name: 'CW1S6',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['6some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            }
        ],
        photos: 'img/location_1/',
        photosCount: 10,
        icon: 'img/location_1/icon.png',
        icon2: 'img/location_1/icon2.png'


    },
    {
        name: '\"Шипшина\"',
        addressCity: "м.Львів",
        addressStr: "вул. Луганська 10А",
        phoneMain: '+38098 29 88 635',
        phoneMainDesc: '- запис на мийку',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW2S1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'CW2S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW2S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            }

        ],

        photos: 'img/location_2/',
        photosCount: 10,
        icon: 'img/location_2/icon.png',
        icon2: 'img/location_2/icon2.png'


    },
    {
        name: '\"Око\"',
        addressCity: "м.Львів",
        addressStr: "вул. Червоної Калини 35а",
        phoneMain: '+38067 71 39 211',
        phoneMainDesc: '- запис на мийку',
        services: [

            {
                name: 'someName4',
                description1: {
                    name: 'CW3S1',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName5',
                description1: {
                    name: 'CW3S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName6',
                description1: {
                    name: 'CW3S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            }
        ],

        photos: 'img/location_3/',
        photosCount: 6,
        icon: 'img/location_3/icon.png',
        icon2: 'img/location_3/icon2.png'


    },
    {
        name: '',
        addressCity: "м.Львів",
        addressStr: "вул. Червоної Калини 35а",
        phoneMain: '+38067 80 16 574',
        phoneMainDesc: '- запис на мийку',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW2S1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'CW2S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW2S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            }

        ],

        photos: 'img/location_4/',
        photosCount: 7,
        icon: 'img/location_4/icon.png',
        icon2: 'img/location_4/icon2.png'

    },
    {
        name: '\"Шипшина\"',
        addressCity: "м.Львів",
        addressStr: "вул. Чорновола 95",
        phoneMain: '+38067 93 76 323',
        phoneMainDesc: '- запис на мийку',
        services: [
            {
                name: 'someName',
                description1: {
                    name: 'CW2S1',
                    text: '!!!!!!!!!!!!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName2',
                description1: {
                    name: 'CW2S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName3',
                description1: {
                    name: 'CW2S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            }

        ],

        photos: 'img/location_5/',
        photosCount: 10,
        icon: 'img/location_5/icon.png',
        icon2: 'img/location_5/icon2.png'


    },
    {
        name: '\"Шипшина\"',
        addressCity: "м.Львів",
        addressStr: "вул.Замарстинівська 176а",
        phoneMain: '+3898 94 41 477',
        phoneMainDesc: '- запис на мийку',
        services: [

            {
                name: 'someName4',
                description1: {
                    name: 'CW3S1',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: '3lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName5',
                description1: {
                    name: 'CW3S2',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            },
            {
                name: 'someName6',
                description1: {
                    name: 'CW3S3',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                description2: {
                    name: 'права частинка',
                    text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

                },
                Include: ['some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
            }
        ],

        photos: 'img/location_6/',
        photosCount: 10,
        icon: 'img/location_6/icon.png',
        icon2: 'img/location_6/icon2.png'


    }
];
var id;
var servicesList = [
    '<b>Ручна та безконтактна поверхнева та комплексна мийка автомобілів</b>',
    '<b>"Новинка" Експрес-мийка (поверхнева)</b> - 60 - 70 грн. <br>(мийка кузова активним шампунем, коврики, холодний віск, витирання порогів і ззовні вікон)',
    '<b>В Дощ - ЗНИЖКА 35% на повну мийку</b>',
    '<b>Миття кузова легкового Авто</b> <br>(коврики, пороги, віск, натирання резини)',
    '<b>Повна мийка легкового авто</b> <br>(коврики, пороги, віск, натирання резини, порохотяг, натирання пластмас, миття вікон)',
    '<b>Миття кузова авто 4х4</b> <br>(коврики, пороги, віск, натирання резини)',
    '<b>Повна мийка авто 4х4</b> <br>(коврики, пороги, віск, натирання резини, порохотяг, натирання пластмас, миття вікон)',
    '<b>Миття двигуна</b> <br>(за запуск відповідальності не несемо)',
    '<b>Миття кузова буса</b> <br>(коврики, пороги, віск, натирання резини)',
    '<b>Повна мийка буса</b> <br>(коврики, пороги, віск, натирання резини, порохотяг, натирання пластмас, миття вікон)'
];
var additionalServices = [
    'Натирання шкіри',
    'Відмивання дисків',
    'Твердий віск',
    'Полімер-віск',
    'Натирання ущільнювачів силіконом, заприскування замків розморожувачем'
];

var allServices = [
    {
        name: 'Поліровка кузова',
        description1: {
            name: 'CW1/s1',
            text: '!!!!!!!!! !!!!!!!!!!!!!!!lorem ipsum sit ame!!!!!!!!!! !!!!!!!!lorem ipsum sit ame!!!! !!!!!!!! !!!!!!lorem ipsum sit ame!!!!!! !!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: '!!!!!!!!!!!!!lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['1some servisesome servise1', 'some servisesome servise2', 'some servise3ome servise3', 'some servise4some servise4', 'some servise5some servise5', 'some servise6some servise6', 'some servise7some servise7', 'some servise8some servise8', 'some servise9some servise9', 'some servise10some servise10']
    },
    {
        name: 'Хімчистка салонів(парова хімчиста)',
        description1: {
            name: 'cw1s2',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['2some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Педрепродажна підготовка',
        description1: {
            name: 'CW1s3',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['3some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Твердий віск',
        description1: {
            name: 'CW1S4',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['4some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Видалення бітумних плям',
        description1: {
            name: 'CW1S5',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['5some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Полірування фар',
        description1: {
            name: 'CW1S6',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['6some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Обклейка фарм захисною плівкою(фірми LLumar)',
        description1: {
            name: 'CW1S6',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['6some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Продаж пплівки',
        description1: {
            name: 'CW1S6',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['6some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    },
    {
        name: 'Продаж ароматизаторів салону',
        description1: {
            name: 'CW1S6',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        description2: {
            name: 'права частинка',
            text: 'lorem ipsum sit ametsjdf hsald hsa d ksd kjs gkjshjs sdsk s'

        },
        Include: ['6some servise1', 'some servise2', 'some servise3', 'some servise4', 'some servise5', 'some servise6', 'some servise7', 'some servise8', 'some servise9', 'some servise10']
    }
];


var CarWashServices = carWash[0].services;
var ServiceChosen = CarWashServices[0];
buildButtons()
// createGallery()
chooseCarWash(0)
buildFooter()


// function createGallery() {
//     for (var i = 1; i <= 10; i++) {
//         $('.photos').append('<div class="photo slide' + i + '"></div>')
//     }
// }

function modifyGallery(n) {
    for (var i = 1; i <= 10; i++) {
        var photo = carWash[n].photos + i + '.png'
        $('.slide' + i).css({
            backgroundImage: "url(" + photo + ")",
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        })
    }

}

function buildFooter() {
    var l = carWash.length
    for (var i = 0; i < l; i++) {
        $(".footerLocations").append('' +
            '<div class="footer_loc">' +
            '   <h3>' + carWash[i].name + ' </h3>' +
            '   <h4>' + carWash[i].addressCity + '</h4>' +
            '<div class="footer_adress">' +
            '   <h4>' + carWash[i].addressStr + '</h4>' +
            '</div>' +
            '<div class="footer_phone">' +
            '<p>' + carWash[i].phoneMain + '</p>' +
            (carWash[i].phoneAdd ? '<p>' + carWash[i].phoneAdd + '</p>' : '') +
            '</div>' +
            '</div>')
    }
}

function buildButtons() {
    var l = carWash.length
    for (var i = 0; i < l; i++) {
        $(".locations").append('' +
            '<button onclick="chooseCarWash(' + i + ')" class="location loc' + i + ' clickable"> ' +
            '   <img src="' + carWash[i].icon + '" alt="someFile">' +
            '   <h3 class="buttonCW">' + carWash[i].name + '</h3>' +
            '   <h4 class="buttonCW">' + carWash[i].addressCity + '</h4>' +
            '   <h4 class="buttonCW">' + carWash[i].addressStr + '</h4>' +
            '</button>')
    }
}

function chooseCarWash(n) {
    modifyGallery(n)

    $('.location, .location>h3, .location>h4').css({
        background: "#ffffff",
        color: '#192125'
    })

    for (var i = 0; i < 6; i++) {
        $(".loc" + i + " >img").attr('src', carWash[i].icon)

    }
    var loc = 'loc' + n
    $("." + loc + " >img").attr('src', carWash[n].icon2)
    $('.' + loc + ', .' + loc + ' h3, ' + '.' + loc + ' h4').css({
        background: "#455a64",
        color: '#ffffff'
    })

    $('buttons').removeClass('.locationChosen');
    $('.service_but').remove()
    $('.serviceIncluded ').remove()
    // CarWashServices = carWash[n].services;
    CarWashServices = allServices;
    ServiceChosen = CarWashServices[0]

    buildServicesList()
    buildServiceDetails()
    defineServices(n)


}

function defineServices(s) {
    var l = servicesList.length;
    $('.locRight').fadeOut(1);
    $('.loc_top_right').empty();

    if (carWash[s].servicesList) {
        for (var i = 0; i < carWash[s].servicesList.length; i++) {
            $('.loc_top_right').append('<span> &#8226;' + carWash[s].servicesList[i] + '</span>').fadeIn(1000)
        }
    }
    for (var i = 0; i < l; i++) {
        $('.loc_top_right').append('<span> &#8226;' + servicesList[i] + '</span>').fadeIn(1000)
    }

    $('.loc_middle_right').empty();
    for (var i = 0; i < additionalServices.length; i++) {
        $('.loc_middle_right').append('<span> &#8226;' + additionalServices[i] + '</span>').fadeIn(1000)
    }

    $('.loc_bottom_right').empty();
    var text = '<span> ' + carWash[s].phoneMain + '  ' + carWash[s].phoneMainDesc + '</span>';
    if (carWash[s].phoneAdd) {
        text += '<span> ' + carWash[s].phoneAdd + '  ' + carWash[s].phoneAddDesc + '</span>';
    }
    $('.loc_bottom_right').append(text).fadeIn(1000)


}

function chooseService(n) {
    $('#serviceInclude,.serv_left,.serv_right ').slideUp(0)
    $('.serviceIncluded').remove()
    ServiceChosen = CarWashServices[n]
    $('#serviceInclude,.serv_left,.serv_right,.preSign ').fadeIn(1000, buildServiceDetails())
    $('.services_description').show(300)
    if ($(window).width() < 720) {
        $(".services_background").css({
            display: 'block'
        })
        // alert()
    }
}

function buildServicesList() {
    var l = CarWashServices.length
    for (var i = 0; i < l; i++) {
        $('.services_nav').append('' +
            '<button lang="some" class="service_but clickable" onclick="chooseService(' + i + ')"><a href="#backServices">' +
            '<h4>' + CarWashServices[i].name + '</h4></a>' +
            '</button>'
        );

    }
    $('.service_but a').css({
        height: $(".service_but").height(),

    });
};

function buildServiceDetails() {
    var l = ServiceChosen.Include.length
    for (var i = 0; i < l; i++) {
        $('#serviceInclude').append('<li class="serviceIncluded">' + ServiceChosen.Include[i] + '</li>')
    }

    $('.serv_left_title').text(ServiceChosen.description1.name)
    $('.serv_right_title').text(ServiceChosen.description2.name)
    $('.serv_left_text').text(ServiceChosen.description1.text)
    $('.serv_right_text').text(ServiceChosen.description2.text)
    if ($(window).width() < 720) {
        $(".service_header").text(ServiceChosen.name)
        $('.serv_left_text').text(ServiceChosen.description1.text + " " + ServiceChosen.description2.text)
    } else {
        $(".service_header").text("включає в себе:")
    }
}







$("#backServices, .services_background ").click(function () {
    $('.services_description').hide(100)
    $(".services_background").css({
        display: 'none'
    })


})

$(".burger").click(function () {
    $(".navbarHeaderMobile").slideToggle()

})

$('.comments_button').click(function () {
    $('.form').animate({
        left: 0
    })
    for (var i = 0; i < 6; i++) {
        $("#selectCW").append('<option class="optionsDel" value="' + carWash[i].addressStr + '">' + carWash[i].addressStr + '</option>')

    }

    $('.stRew').css({
        backgroundColor: 'transparent',
        backgroundImage: 'url("img/starEg.png")',
        backgroundSize: '80%'
    })

})



// $('.photos').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 4,
//     mobileFirst: false,
//     slidesToScroll: 1,
//     autoplay: true,
//     // mobileFirst:true,
//     autoplaySpeed: 1500,
//     responsive: [
//         {
//             breakpoint: 1700,
//             settings: {
//                 slidesToShow: 6,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         }, {
//             breakpoint: 1300,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 720,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });



