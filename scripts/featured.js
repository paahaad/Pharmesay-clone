let slider =tns({
    container : ".my-slider",
    "slideBy" :1,
    "speed" :400,
    "nav":false,
    controlsContainer : "#controls",
    prevButton : ".previous",
    nextButton: ".next",
    responsive : {
        3000:{
            items:13,
            gutter:20
        },
        2800:{
            items:12,
            gutter:20
        },
        2500:{
            items:11,
            gutter:20
        },
        2100:{
            items:10,
            gutter:20
        },
        1900:{
            items:9,
            gutter:20
        },
        1700:{
            items:8,
            gutter:20
        },
        1400:{
            items:7,
            gutter:20
        },
        1200:{
            items:6,
            gutter:20
        },
        1000:{
            items:5,
            gutter:20
        },
        800:{
            items:4,
            gutter:20
        },
        600:{
            items:3,
            gutter:20
        },
        400:{
            items:3,
            gutter:20
        },
        200:{
            items:1,
            gutter:20
        },
    }
})