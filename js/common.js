$(document).ready(function () {

    if (document.location.protocol == 'http:') {
        document.location.href = document.location.href='https://www.skchemicals.com';
    }


    //헤더 스크롤
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#header").addClass("lv02");    //스크롤내리면 헤더 텍스트 전체적으로 작아짐
        } else {
            $("#header").removeClass("lv02");
        }
    });

    // pc헤더gc_ls메뉴
    $("#header .header-menu .menu").on('mouseover focus', function () {
        $(".menu-wrap").not($(this).next(".menu-wrap")).slideUp(200);
        $(this).next(".menu-wrap").stop().slideDown(200);
        $(this).addClass("on");
        return false;
    });

    $("#header .header-menu .menu-wrap").mouseleave(function(){
        $(this).slideUp(200);
        $(this).prev(".menu").removeClass("on");
        return false;
    });

    $("#header .header-menu > li .menu-wrap .depth-area:last .depth02-area li:last a").focusout(function(){
        $("#header .header-menu .menu-wrap").slideUp(200);
        $("#header .header-menu .menu").removeClass("on");
    });

    $("#header .lang a").on('mouseover focus', function(){
        $("#header .header-menu .menu-wrap").slideUp(200);
        $("#header .header-menu .menu").removeClass("on");
    })


    //pc헤더_sk메뉴
    $("#header .sk-menu").click(function () {
        $("#header").addClass("on");  //GC_LS 메뉴 안보이게
        $("body").addClass("fix");
    });
    $("#header .sk-menu.close").click(function () {
        $("#header").removeClass("on");
        $("body").removeClass("fix");
    });
    $("#header .all-menu .gnb .depth02 li:last a").focusout(function () {
        $("#header").removeClass("on");
        $("body").removeClass("fix");
    });

    //모바일헤더_sk메뉴
    function m_nav() {
      if($(window).width() <= 1200){
        $("#header .all-menu .gnb").removeClass("pc");
        $("#header .all-menu .gnb").addClass("mobile");

      }
      if($(window).width() > 1200){
        $("#header .all-menu .gnb").addClass("pc");
        $("#header .all-menu .gnb").removeClass("mobile");
      }

    }
    $(window).resize(function(){
      m_nav();
    })
    m_nav();

    $("#header .all-menu .gnb.mobile .label").click(function () {
        $("#header .all-menu .gnb.mobile .depth02").not($(this).next()).stop().slideUp();
        $(this).next(".depth02").stop().slideToggle();
        $("#header .all-menu .gnb.mobile .label").not($(this)).removeClass("on");
        $(this).toggleClass("on");
    });

    //모바일_gc_ls_메뉴
    $("#snb .menu > li > a").click(function () {
        $(this).next(".menu-wrap").addClass("on");
        $("body").addClass("fix");
        $("#snb").addClass("active");
        $(this).next(".menu-wrap").children(".menu-list").addClass("on");
    });


    $("#snb .menu-header .close").click(function () {
        $(".menu-wrap").removeClass("on");
        $("body").removeClass("fix");
        $("#snb").removeClass("active");
        $("#snb .menu-list").removeClass("on");
    });



    $("#snb .depth01 > li > a").click(function () {
        $("#snb .depth02").not($(this).next()).stop().slideUp();
        $(this).next(".depth02").stop().slideToggle();
        $("#snb .depth01 > li > a").not($(this)).removeClass("on");
        $(this).toggleClass("on");
    });

    function menu_gcls() {
        if ($(window).width() > 1200) {
            $("#snb .menu-wrap").removeClass("on");
            $("#snb .depth01 > li > a").removeClass("on");
            $("#snb .depth02").slideUp();
        }
    };
    $(window).resize(function () {
        menu_gcls();
    });
    menu_gcls();


    //top_올리기
    $("#aside .top").click(function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 500);
        return false;
    });
    $("#aside a").on('mouseover focus', function(){
        $(this).next(".tooltip").addClass("on");
    });
    $("#aside a").on('mouseleave focusout', function(){
        $(this).next(".tooltip").removeClass("on");
    });

    //서브_비쥬얼
    // AOS.init();
    // AOS
    var myAOS = function () {

        AOS.init({
            once: true,
            duration: 1000
        });
    }
    myAOS();

    


    //서브Lnb
    $("#ctn-body .lnb .depth .hand").click(function () {
        $(this).next(".more-menu").stop().slideToggle(200);
        $(this).toggleClass("on");
    });
    $(document).click(function (e) {
        $('#ctn-body .lnb .depth')
            .not($('#ctn-body .lnb .depth').has($(e.target)))
            .children('.more-menu')
            .slideUp(200);
        $('#ctn-body .lnb .depth')
            .not($('#ctn-body .lnb .depth').has($(e.target)))
            .children('.hand')
            .removeClass("on");
    });
    $("#ctn-body .page-header .lnb .home").on('focus', function(){
        $("#ctn-body .page-header .lnb .depth01 .more-menu").slideUp(200);
    });
    $("#ctn-body .page-header .lnb .depth01 .hand").on('focus', function(){
        $("#ctn-body .page-header .lnb .depth02 .more-menu").slideUp(200);
    });
    $("#ctn-body .page-header .lnb .depth02 .hand").on('focus', function(){
        $("#ctn-body .page-header .lnb .depth01 .more-menu").slideUp(200);
    });
    $("#ctn-body .page-header .lnb .depth03 .hand").on('focus', function(){
        $("#ctn-body .page-header .lnb .depth02 .more-menu").slideUp(200);
    });

    //탭
    $(".tab-ctn").hide(); //Hide all content
    $(".tab-type02 li:first a").addClass("on") //Activate first tab
    $(".tab-ctn:first").show(); //Show first tab content
    //On Click Event
    $(".tab-type02 li a").click(function () {

        $(".tab-type02 li a").removeClass("on"); //Remove any "active" class
        $(this).addClass("on"); //Add "active" class to selected tab
        $(".tab-ctn").hide(); //Hide all tab content

        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).show(); //Fade in the active ID content
        return false;

    });


    $('.main-visual .slide-option .btn.pause').on('click', function () {
        $('.main-visual .main-slide').slick('slickPause');
    });

    $('.main-visual .slide-option .btn.play').on('click', function () {
        $('.main-visual .main-slide').slick('slickPlay');
    });

    $(".main-visual .slide-option .btn").click(function () {
        $(".main-visual .slide-option .btn").removeClass("on");
        $(this).addClass("on");
    })

    $(".main-visual .main-slide").on('afterChange', function () {
        $(".main-visual .slide-option .progress .pro-bar").addClass('pro-ani');
    });

    $(".main-visual .main-slide").on('beforeChange', function () {
        $(".main-visual .slide-option .progress .pro-bar").removeClass('pro-ani');
    });


    $(".main-visual03 .main-slide").slick({
        pauseOnFocus: false,
        pauseOnHover: false,
        autoHover: false,
        autoControls: false,
        controls: false,
        arrows: false,
        pager: false,
        dots: false,
        pause: 20000,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        touchMove: false, // 손가락 터치시 이동 여부...
        swipe: false, // swipe 여부...
        draggable: false,
        pauseOnHover: false
    });

    $(".main-visual04 .main-slide").slick({
        pauseOnFocus: false,
        pauseOnHover: false,
        autoHover: false,
        autoControls: false,
        controls: false,
        arrows: false,
        pager: false,
        dots: false,
        pause: 20000,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        touchMove: false, // 손가락 터치시 이동 여부...
        swipe: false, // swipe 여부...
        draggable: false,
        pauseOnHover: false
    });






})
// 트위터
function goTwitter(msg, Url) {
    var tUrl = encodeURIComponent(Url)
    var tMsg = encodeURIComponent(msg)
    window.open("http://twitter.com/share?url=" + tUrl + "&text=" + tMsg, "Twitter", "");
}

// 페이스북
function goFacebook(Url, title, summary) {
    var url = ""
    url += "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(Url);
    //url += "&p[title]=" + encodeURIComponent(title);
    //url += "&p[summary]=" + encodeURIComponent(summary);
    //url += "&p[images][0]=" + encodeURIComponent("http://www.skchemicals.com/images/base/common/facebook_image.jpg");

    window.open(url, "FaceBook", "menubar=no,toolbar=no,location=no,status=no,scrollbars=no,width=600,height=450,top=100,left=100,resizable=no");
}


// PDF 구현 , 이동
function setInnerpdf(i_no, i_tx) {
    document.getElementById('contentpdf').innerHTML = "<a href='javascript:setch_pdf(" + i_no + ")' class='pdf'><img src='../asset/images/common/quick-pdf.png' alt='PDF파일 다운로드'></a><div class='tooltip' id='itooltip'><p>" + i_tx + "<br>PDF 보기</p> </div>";
}

function setch_pdf(i) {
    var agent = navigator.userAgent.toLowerCase();

    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        alert('PDF 페이지 바로가기는 Chrome 및 Edge 사용을 권장합니다.\n(PDF문서 ' + i + 'page에서 확인 하세요.)')
    }

    window.open('/imgup/pdf/2020_kor.pdf#page=' + i, '_blank');
}