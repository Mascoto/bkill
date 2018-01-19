$(function() {
    $(".search-box .search-cat").hover(function() {
        $(this).children('.search-select').show();
    }, function() {
        $(this).children('.search-select').hide();
    });
    var sWidth = $("#slider .pics").width(); //��ȡ����ͼ�Ŀ�ȣ���ʾ�����
    var len = $("#slider ul li").length; //��ȡ����ͼ����
    var index = 0;
    var picTimer;

    //��һҳ��ť����¼�
    $("#slider .pre").click(function() {
        index -= 1;
        if(index == -1) {index = len - 1;}
        showPics(index);
    });

    //��һҳ��ť����¼�
    $("#slider .next").click(function() {
        index += 1;
        if(index == len) {index = 0;}
        showPics(index);
    });

    //����Ϊ���ҹ�����������liԪ�ض�����ͬһ�����󸡶�������������Ҫ�������ΧulԪ�صĿ��
    $("#slider ul").css("width",sWidth * (len));

    //��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
    // $("#slider").hover(function() {
    //     clearInterval(picTimer);
    // },function() {
    //     picTimer = setInterval(function() {
    //         showPics(index);
    //         index++;
    //         if(index == len) {index = 0;}
    //     },3000); //��4000�����Զ����ŵļ������λ������
    // }).trigger("mouseleave");

    //��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
    function showPics(index) { //��ͨ�л�
        var nowLeft = -index*sWidth; //����indexֵ����ulԪ�ص�leftֵ
        $("#slider ul").stop(true,false).animate({"left":nowLeft},300); //ͨ��animate()����ulԪ�ع������������position
    }
});




$(".tab-ctrl").each(function () {
    var _tab =  $(this).find(".tab");
    var _tabCon =  $(this).find(".tab-con");
    _tab.each(function (i) {
        var _index = i;
        $(this).hover(
            function () {
                $(this).addClass("on").siblings().removeClass('on');
                $(_tabCon[_index]).addClass('active').siblings().removeClass('active');
            }
        )
    })
});
$(".sub-titles-ctrl").each(function () {
    var _tab =  $(this).find(".st-item");
    var _tabCon =  $(this).find(".st-con");
    _tab.each(function (i) {
        var _index = i;
        $(this).click(
            function () {
                $(_tabCon[_index]).addClass('active').siblings().removeClass('active');
            }
        )
    })
});

$("#goTop .go-top").click(function () {
    $('html,body').animate({scrollTop:0},700);
})
$("#goTop .go-download").click(function () {
    var dt = $("#soft-downUrl").offset().top;
    $('html,body').animate({scrollTop:dt},700);
})

$(window).scroll(function(){
    var s = $(window).scrollTop();
    var h = $(window).height();
    var warp = $(".detail-main");
    if(!warp.get(0))return;
    var t = warp.offset().top;
    var ft = h - 480;
    if(s > (t-ft)){
        $("#goTop").fadeIn(100);
    }else{
        $("#goTop").fadeOut(100);
    }
});

$(".show-feedback").click(function () {
    $(".feedback-modal").show();
})
$(".feedback-modal .close").click(function () {
    $(".feedback-modal").hide();
});

;(function() {
    //ԭ��վ���Բ��� ʹ��ʱ���滻
    // var appid = 'cyrkbhh7l';
    // var conf = 'prod_4093e6e3dd3fd905a0302ff0ad607fbc';
    //��ʱ���Բ���
    if(!$("#SOHUCS").get(0))return;
    var appid = 'cyssT3c1b';
    var conf = 'prod_fe5e2c8fd8fa5cc1f73fb75031da0e51';
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 960) {
        window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
    } else {
        var loadJs = function(d, a) {
            var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
            var b = document.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.setAttribute("charset", "UTF-8");
            b.setAttribute("src", d);
            if (typeof a === "function") {
                if (window.attachEvent) {
                    b.onreadystatechange = function() {
                        var e = b.readyState;
                        if (e === "loaded" || e === "complete") {
                            b.onreadystatechange = null;
                            a()
                        }
                    }
                } else {
                    b.onload = a
                }
            }
            c.appendChild(b)
        };
        loadJs("http://changyan.sohu.com/upload/changyan.js", function() {
            window.changyan.api.config({
                appid: appid,
                conf: conf
            })
        });
    }
})();