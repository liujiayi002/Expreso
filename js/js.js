/*头部*/
function head() {
    var scrollFunc = function (e) {
        var head = document.getElementById('head');
        var marginTop = document.getElementsByClassName('margin-top')[0];
        e = e || window.event;
        if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                head.style.position='fixed';
                head.style.top='-30px';
                marginTop.style.marginTop='156px';
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                head.style.top='-200px';
                marginTop.style.marginTop='156px';
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                head.style.position='fixed';
                head.style.top='-30px';
                marginTop.style.marginTop='156px';
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                head.style.top='-200px';
                marginTop.style.marginTop='156px';
            }
        }
        var menu = document.getElementsByClassName('menu')[0];
        var oA = menu.getElementsByTagName('a');



        oA[0].onclick=function(){
        };
        oA[1].onclick=function(){
            head.style.top='-200px';
        };
        oA[2].onclick=function(){
            head.style.top='-200px';
        };
        oA[3].onclick=function(){
            head.style.top='-200px';
        };
        oA[4].onclick=function(){
            head.style.top='-200px';
        };
        oA[5].onclick=function(){
            head.style.top='-200px';
        };
        oA[6].onclick=function(){
            head.style.top='-200px';
        };


    }
//给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
//滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;


}
head();


/*图片筛选*/
function catagopy() {

    var aBtn = document.getElementById('catagopy-btn');
    var aLi = aBtn.getElementsByTagName('li');
    var imgList = document.getElementById('c-img-list');
    var img = imgList.getElementsByTagName('li');
    var wordpress = document.getElementsByClassName('wordpress');
    var joomla = document.getElementsByClassName('joomla');
    var magento = document.getElementsByClassName('magento')
    var design = document.getElementsByClassName('design');
    function aLiFunction(){
        for (i=0;i<aLi.length;i++){
            aLi[i].className='';
        }
    }
    function imgFunction(){
        for (i = 0; i < img.length; i++) {
            img[i].style.width = 0 + 'px';
        }
    }
    aLi[0].onclick=function(){
        aLiFunction();
        for (i = 0; i < img.length; i++) {
            img[i].style.width = 25 + '%';
        }
        this.className='on';
    };
    aLi[1].onclick=function () {
        aLiFunction();
        imgFunction();
        for (n = 0; n < wordpress.length; n++) {
            wordpress[n].style.width = 25 + '%';
        }
        this.className='on';
    };
    aLi[2].onclick=function () {
        aLiFunction();
        imgFunction();
        for (n = 0; n < joomla.length; n++) {
            joomla[n].style.width = 25 + '%';
        }
        this.className='on';
    };
    aLi[3].onclick=function () {
        aLiFunction();
        imgFunction();
        for(n=0;n<magento.length;n++){
            magento[n].style.width= 25 +'%';
        }
        this.className='on';
    };

    aLi[4].onclick=function () {
        aLiFunction();
        imgFunction();
        for(n=0;n<design.length;n++){
            design[n].style.width= 25 +'%';
        }
    };
}
catagopy();


/*博客轮播*/
function blog() {
    var box = document.getElementById('blog-box');
    var prev = document.getElementById('blog-prev');
    var next = document.getElementById('blog-next');

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left串，获取的是字符需要用parseInt()取整转化为数字。
        var newLeft = parseInt(box.style.left) + offset;
        box.style.left = newLeft + 'px';

        if(newLeft<-1270){
            box.style.left = -630 + 'px';
        }
        if(newLeft>-570){
            box.style.left = -1260 + 'px';
        }
    }
//点击轮播
    prev.onclick = function () {
        animate(630);
    };
    next.onclick = function () {
        animate(-630);
    };

}
blog();


/*商标轮播*/
function icon() {
    var aUl = document.getElementById('icon-ul');
    var ali = aUl.getElementsByTagName('li');

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }

    var timer = null;
    var speed = -1;
    $('icon-ul').innerHTML=$('icon-ul').innerHTML+$('icon-ul').innerHTML;
    $('icon-ul').style.width=ali[0].offsetWidth*ali.length+'px';
    function move(){
        timer=setInterval(function(){
            if($('icon-ul').offsetLeft<-$('icon-ul').offsetWidth/2){
                $('icon-ul').style.left='0';
            }else if($('icon-ul').offsetLeft>0){
                $('icon-ul').style.left=-$('icon-ul').offsetWidth/2+'px';
            }
            $('icon-ul').style.left=$('icon-ul').offsetLeft+speed+'px';
        },20);
    };

    move();
    $('icon-prev').onclick = function () {
        speed = -1;
    };
    $('icon-next').onclick = function () {
        speed = 1;
    };

    $('icon-ul').onmouseover = function () {
        clearInterval(timer);
    };
    $('icon-ul').onmouseout = function () {
        move();
    };
}
icon();



