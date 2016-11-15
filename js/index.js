/**
 * Created by Administrator on 2016/9/25.
 */
//调用全屏方法
$(function(){
    $('#dowebok').fullpage({
        //设置每一屏幕的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
    //    loopTop:true;
    //    滚动到某一屏的时候
    //    滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，
    // anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (link,index) {
            //index 当前section的编号
            //current类加给谁 谁就做动画
            $('.section').removeClass('current');
            //让动画 延迟执行100ms
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            },100);
        }
    });
});