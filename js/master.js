const $nav = $('#Nav');
// html 把 #Grid改為 #Slide
const $slide= $('#Slide');
const $grid= $slide.find(".grid");

console.log($grid)

// 方法一---------------------------------
// let isMobile;
// if($(window).width()<=480){
//     isMobile=true
// }else{isMobile=false}
// console.log(isMobile)

// --------------------------------------------

// 方法二：表達式-----------------------------------
// 判斷是否是手機版(F12看console會出現true/ flase)
const isMobile = $(window).width()<=480;

// 抓出可是範圍寬度(高度)
// window 不是標籤，不用引號
// console.log($(window).width()<=480)
console.log(isMobile)
// console.log($(window).height())


function setGrid(){
    // 這裡要用2個or3個=
    // if (isMobile==true){
    // 但其實不用寫==true(優化)
    // if (isMobile){
    //     $grid.addClass('grid-2')
    // }else{
    //     $grid.addClass('grid-3')
    // }

    // 優化寫法(純粹減少大括號)
    if (isMobile){
        $grid.addClass('grid-2')
        return;
        // 停下的意思，不加做grid-3
    }
    $grid.addClass('grid-3')
}

// 使用具名函數
setGrid();


// 捲動，nav就加背景-------------------------------------------------------
// $(window).scroll(function(){
//     if(isMobile){
//         // 內容超出可視範圍的數值
//         // console.log($(window).scrollTop());
//         if($(this).scrollTop() == 0){
//             // console.log(0)
//             $nav.removeClass('nav-active')
//         }else{
//             // console.log('要套用class')
//             $nav.addClass('nav-active')
//         }
//     }
// });

function setScroll(){
    $(window).scroll(function(){
        // isMobile: true
        // !isMobile:flase
        if(!isMobile) return;
        
        
        if($(this).scrollTop() == 0){
            // console.log(0)
            $nav.removeClass('nav-active')
        }else{
            // console.log('要套用class')
            $nav.addClass('nav-active')
        }
    })
}

function setFancybox(){
    $grid.find("a").fancybox({
        // 防按右鍵被下載
        protect: true,
        // 讓圖片循環(最後跳回第一張)
        loop: true,
        // 開啟、關閉時間
        animationDuration:1000,
        // 轉場時間(已經打開了)
        transitionDuration:2000,
        // 轉場效果 (滑鼠拖曳/手機/鍵盤/按鈕點擊都支援)
        transitionEffect:'slide',
        // 全螢幕，預設false
        // fullScreen:{
        //     autoStart:true,
        // },
        // 是否鎖住鍵盤操作，預設是true
        keyboard:false,
        // 分頁顯示，預設true
        infobar:false,
        // 顯示工具列，預設true
        // toolbar:true,
        // 顯示圖片旁的關閉鈕，預設false
        smallBtn:true,
        // 是否顯示箭頭按鈕，預設true
        arrows:false,
        // 自動轉場
        slideShow:{
            autoStart:true,
            speed:5000,
        },
        // 顯示縮圖模式，預設true
        thumbs:true,
        // 媒體自動播放
        media:{
            youtube:{
                params:{
                    autoplay:false
                }
            },
            // 除了YT，其他頻台影片也能操控
        }
    });
    
}

function setInit(){
    setGrid();
}

function setEvent(){
    setScroll();
    setFancybox();
}




setInit();
setEvent();