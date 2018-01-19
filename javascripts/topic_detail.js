$(".scroll-warp").slide({
    mainCell:".bd ul",
    autoPage:true,
    effect:"left",
    autoPlay:true,
    scroll:4,
    vis:4
});

window.changyan.api.config({
    appid: 'cyssT3c1b',
    conf: 'prod_fe5e2c8fd8fa5cc1f73fb75031da0e51'
});
// (function() {
//     //原网站畅言参数 使用时请替换
//     // var appid = 'cyrkbhh7l';
//     // var conf = 'prod_4093e6e3dd3fd905a0302ff0ad607fbc';
//     //临时畅言参数
//     var appid = 'cyssT3c1b';
//     var conf = 'prod_fe5e2c8fd8fa5cc1f73fb75031da0e51';
//     var width = window.innerWidth || document.documentElement.clientWidth;
//     if (width < 960) {
//         window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
//     } else {
//         var loadJs = function(d, a) {
//             var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
//             var b = document.createElement("script");
//             b.setAttribute("type", "text/javascript");
//             b.setAttribute("charset", "UTF-8");
//             b.setAttribute("src", d);
//             if (typeof a === "function") {
//                 if (window.attachEvent) {
//                     b.onreadystatechange = function() {
//                         var e = b.readyState;
//                         if (e === "loaded" || e === "complete") {
//                             b.onreadystatechange = null;
//                             a()
//                         }
//                     }
//                 } else {
//                     b.onload = a
//                 }
//             }
//             c.appendChild(b)
//         };
//         loadJs("http://changyan.sohu.com/upload/changyan.js", function() {
//             window.changyan.api.config({
//                 appid: appid,
//                 conf: conf
//             })
//         });
//     }
// })();