$(function() {
    $(".search-box .search-cat").hover(function() {
        $(this).children('.search-select').show();
    }, function() {
        $(this).children('.search-select').hide();
    });
    var sWidth = $("#slider .pics").width(); //获取焦点图的宽度（显示面积）
    var len = $("#slider ul li").length; //获取焦点图个数
    var index = 0;
    var picTimer;

    //上一页按钮点击事件
    $("#slider .pre").click(function() {
        index -= 1;
        if(index == -1) {index = len - 1;}
        showPics(index);
    });

    //下一页按钮点击事件
    $("#slider .next").click(function() {
        index += 1;
        if(index == len) {index = 0;}
        showPics(index);
    });

    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
    $("#slider ul").css("width",sWidth * (len));

    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    // $("#slider").hover(function() {
    //     clearInterval(picTimer);
    // },function() {
    //     picTimer = setInterval(function() {
    //         showPics(index);
    //         index++;
    //         if(index == len) {index = 0;}
    //     },3000); //此4000代表自动播放的间隔，单位：毫秒
    // }).trigger("mouseleave");

    //显示图片函数，根据接收的index值显示相应的内容
    function showPics(index) { //普通切换
        var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
        $("#slider ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
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
    //原网站畅言参数 使用时请替换
    // var appid = 'cyrkbhh7l';
    // var conf = 'prod_4093e6e3dd3fd905a0302ff0ad607fbc';
    //临时畅言参数
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