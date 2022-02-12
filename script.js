$(document).ready(function (){

    /* --------- MAIN NEWS MOVEMENT ---------- */



    $('.buttonRight').click(function (){
        $('#hideLeft').prop('id', 'aux').css('animation', ' ');
        $('#leftUp').prop('id', 'hideLeft').css('animation', 'moveHideLeftAR 0.5s');
        $('#middle').prop('id', 'leftUp').css('animation', 'moveLeftUpAR 0.5s');
        $('#rightUp').prop('id', 'middle').css('animation', 'moveMiddleAR 0.5s');
        $('#hideRight').prop('id', 'rightUp').css('animation', 'moveRightUpAR 0.5s');
        $('#aux').prop('id', 'hideRight').css('animation', ' ');
    });
    $('.buttonLeft').click(function (){
        $('#hideLeft').prop('id', 'aux').css('animation', ' ');
        $('#hideRight').prop('id', 'hideLeft').css('animation', ' ');
        $('#rightUp').prop('id', 'hideRight').css('animation', 'moveHideRightAL 0.5s');
        $('#middle').prop('id', 'rightUp').css('animation', 'moveRightUpAL 0.5s');
        $('#leftUp').prop('id', 'middle').css('animation', 'moveMiddleAL 0.5s');
        $('#aux').prop('id', 'leftUp').css('animation', 'moveLeftUpAL 0.5s');
    });
    /* --------------------------------------------- */

    /* ----------------- PLANETS ----------------- */
    $('#generalTitle').css('display', 'inline');
    $('.box_sol').click(function () {
        $('#TheSun').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#sunTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#sunTitle').css('display', 'none');
    });


    $('.box_mercurio').click(function () {
        $('#Mercury').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#mercuryTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#mercuryTitle').css('display', 'none');
    });


    $('.box_venus').click(function () {
        $('#Venus').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#venusTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#venusTitle').css('display', 'none');
    });


    $('.box_terra').click(function () {
        $('#Earth').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#earthTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#earthTitle').css('display', 'none');
    });


    $('.box_marte').click(function () {
        $('#Mars').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#MarsTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#MarsTitle').css('display', 'none');
    });


    $('.box_jupter').click(function () {
        $('#Jupiter').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#jupiterTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#jupiterTitle').css('display', 'none');
    });


    $('.box_saturno').click(function () {
        $('#Saturn').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#saturnTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#saturnTitle').css('display', 'none');
    });


    $('.box_urano').click(function () {
        $('#Uranus').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#uranusTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#uranusTitle').css('display', 'none');
    });


    $('.box_netuno').click(function () {
        $('#Neptune').css('display', 'flex');
        $('#animation').css('display', 'none');
        $('.inner').css('opacity', '0');
    }).hover(function (){
        $('#generalTitle').css('display', 'none');
        $('#neptuneTitle').css('display', 'inline');
    }, function (){
        $('#generalTitle').css('display', 'inline');
        $('#neptuneTitle').css('display', 'none');
    });



    $('.backToPlanets').click(function (){
        $('.aboutPlanets').css('display', 'none');
        $('#animation').css('display', 'flex');
        $('.inner').css('opacity', '1');
    });
    /* --------------------------------------------- */




/*----------------- USER LOGIN -------------------*/

    if(localStorage.getItem("token")!=null) {
        let userLogin= JSON.parse(localStorage.getItem("userLogin"));

        let logado = document.querySelector("#loginuser");

        logado.innerHTML = `Hello ${userLogin.username}! <button onclick="logout()" class="btn-logout">Logout</button>`;
    }
    $('.btn-logout').click(logout);
    function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("userlogin");
        logado.innerHTML = `Sign In/<br>Sign Up`;
    }

    /* ------------ ALL NEWS ------------------------- */
    $('#card1').prop('id', 'leftUp').click(function (){
        $("main").load("News/Main-1.txt");
        $(window).scrollTop(0);
    });
    $('#card2').prop('id', 'middle').click(function (){
        $("main").load("News/Main-2.txt");
        $(window).scrollTop(0);
    });
    $('#card3').prop('id', 'rightUp').click(function (){
        $("main").load("News/Main-3.txt");
        $(window).scrollTop(0);
    });
    $('#card4').prop('id', 'hideRight').click(function (){
        $("main").load("News/Main-4.txt");
        $(window).scrollTop(0);
    });
    $('#card5').prop('id', 'hideLeft').click(function (){
        $("main").load("News/Main-5.txt");
        $(window).scrollTop(0);
    });
    $('#11').hover(function (){
        $('#T11').css('display', 'none');
        $('#D11').css('display', 'flex');
    }, function (){
        $('#T11').css('display', 'flex');
        $('#D11').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-1-1.txt");
        $(window).scrollTop(0);
    });
    $('#12').hover(function (){
        $('#T12').css('display', 'none');
        $('#D12').css('display', 'flex');
    }, function (){
        $('#T12').css('display', 'flex');
        $('#D12').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-1-2.txt");
        $(window).scrollTop(0);
    });

    $('#13').hover(function (){
        $('#T13').css('display', 'none');
        $('#D13').css('display', 'flex');
    }, function (){
        $('#T13').css('display', 'flex');
        $('#D13').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-1-3.txt");
        $(window).scrollTop(0);
    });

    $('#14').hover(function (){
        $('#T14').css('display', 'none');
        $('#D14').css('display', 'flex');
    }, function (){
        $('#T14').css('display', 'flex');
        $('#D14').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-1-4.txt");
        $(window).scrollTop(0);
    });


    $('#21').hover(function (){
        $('#T21').css('display', 'none');
        $('#D21').css('display', 'flex');
    }, function (){
        $('#T21').css('display', 'flex');
        $('#D21').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-2-1.txt");
        $(window).scrollTop(0);
    });

    $('#22').hover(function (){
        $('#T22').css('display', 'none');
        $('#D22').css('display', 'flex');
    }, function (){
        $('#T22').css('display', 'flex');
        $('#D22').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-2-2.txt");
        $(window).scrollTop(0);
    });

    $('#23').hover(function (){
        $('#T23').css('display', 'none');
        $('#D23').css('display', 'flex');
    }, function (){
        $('#T23').css('display', 'flex');
        $('#D23').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-2-3.txt");
        $(window).scrollTop(0);
    });

    $('#24').hover(function (){
        $('#T24').css('display', 'none');
        $('#D24').css('display', 'flex');
    }, function (){
        $('#T24').css('display', 'flex');
        $('#D24').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-2-4.txt");
        $(window).scrollTop(0);
    });


    $('#31').hover(function (){
        $('#T31').css('display', 'none');
        $('#D31').css('display', 'flex');
    }, function (){
        $('#T31').css('display', 'flex');
        $('#D31').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-3-1.txt");
        $(window).scrollTop(0);
    });

    $('#32').hover(function (){
        $('#T32').css('display', 'none');
        $('#D32').css('display', 'flex');
    }, function (){
        $('#T32').css('display', 'flex');
        $('#D32').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-3-2.txt");
        $(window).scrollTop(0);
    });

    $('#33').hover(function (){
        $('#T33').css('display', 'none');
        $('#D33').css('display', 'flex');
    }, function (){
        $('#T33').css('display', 'flex');
        $('#D33').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-3-3.txt");
        $(window).scrollTop(0);
    });

    $('#34').hover(function (){
        $('#T34').css('display', 'none');
        $('#D34').css('display', 'flex');
    }, function (){
        $('#T34').css('display', 'flex');
        $('#D34').css('display', 'none');
    }).click(function() {
        $("main").load("News/New-3-4.txt");
        $(window).scrollTop(0);
    });

})