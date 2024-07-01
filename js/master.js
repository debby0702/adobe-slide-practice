// 全域變數-------------------------------
const $nav = $('#Nav');
// html 把 #Grid改為 #Slide
const $slide = $('#Slide');
const $grid = $slide.find(".grid");
const $btns = $nav.find('.nav-btn');

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
const isMobile = $(window).width() <= 480;

// 抓出可是範圍寬度(高度)
// window 不是標籤，不用引號
// console.log($(window).width()<=480)
console.log(isMobile)
// console.log($(window).height())


function setGrid() {
    // 這裡要用2個or3個=
    // if (isMobile==true){
    // 但其實不用寫==true(優化)
    // if (isMobile){
    //     $grid.addClass('grid-2')
    // }else{
    //     $grid.addClass('grid-3')
    // }

    // 優化寫法(純粹減少大括號)
    if (isMobile) {
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

function setScroll() {
    $('.grid-item').scroll(function () {
        // isMobile: true
        // !isMobile:flase
        if (!isMobile) return;

        if ($(this).scrollTop() == 0) {
            // console.log(0)
            $nav.removeClass('nav-active')
        } else {
            // console.log('要套用class')
            $nav.addClass('nav-active')
        }
    })
}

function setFancybox() {
    $grid.find("a").fancybox({
        // 防按右鍵被下載
        protect: true,
        // 讓圖片循環(最後跳回第一張)
        loop: true,
        // 開啟、關閉時間
        animationDuration: 1000,
        // 轉場時間(已經打開了)
        transitionDuration: 2000,
        // 轉場效果 (滑鼠拖曳/手機/鍵盤/按鈕點擊都支援)
        transitionEffect: 'slide',
        // 全螢幕，預設false
        // fullScreen:{
        //     autoStart:true,
        // },
        // 是否鎖住鍵盤操作，預設是true
        keyboard: false,
        // 分頁顯示，預設true
        infobar: false,
        // 顯示工具列，預設true
        // toolbar:true,
        // 顯示圖片旁的關閉鈕，預設false
        smallBtn: true,
        // 是否顯示箭頭按鈕，預設true
        arrows: false,
        // 自動轉場
        slideShow: {
            autoStart: true,
            speed: 5000,
        },
        // 顯示縮圖模式，預設true
        thumbs: true,
        // 媒體自動播放
        media: {
            youtube: {
                params: {
                    autoplay: false
                }
            },
            // 除了YT，其他頻台影片也能操控
        }
    });

}

// 按nav按鈕就會移動到相對應位置
function setClickBtn() {
    $btns.click(function () {
        // alert(3);
        
        // 避免記憶體外洩(使用者電腦越跑越慢)
        // 當事者，啟用'disebled(不運作)功能'，其他鈕關閉此功能
        // (補充)關於disabled，input也是這樣做不運作的按鈕。
        $(this)
            .attr('disabled', true)
            .siblings().attr('disabled', false);
        
            // 區域變數-------------------------------
        const index = $(this).index()
        // console.log(index)

        // 滑動效果詳見css的.grid-slide
        // 全用if分開寫(浪費效能，全部都會執行一遍)
        // if(index == 0){
        //     $slide.css('transform','translate(0,0)');
        // }
        // if(index == 1){
        //     $slide.css('transform','translate(-100vw,0)');
        // }
        // if(index == 2){
        //     $slide.css('transform','translate(-200vw,0)');
        // }
        // if(index == 3){
        //     $slide.css('transform','translate(0,-100vh)');
        // }
        // if(index == 4){
        //     $slide.css('transform','translate(-100vw,-100vh)');
        // }
        // if(index == 5){
        //     $slide.css('transform','translate(-200vw,-100vh)');
        // }

        // else if 為6選1執行(節省效能)
        // if(index == 0){
        //     $slide.css('transform','translate(0,0)');
        // }else if(index == 1){
        //     $slide.css('transform','translate(-100vw,0)');
        // }else if(index == 2){
        //     $slide.css('transform','translate(-200vw,0)');
        // }else if(index == 3){
        //     $slide.css('transform','translate(0,-100vh)');
        // }else if(index == 4){
        //     $slide.css('transform','translate(-100vw,-100vh)');
        // }else if(index == 5){
        //     $slide.css('transform','translate(-200vw,-100vh)');
        // }

        // switch是最不耗效能的(要搭配break)
        switch (index) {
            // case index值:要做的事
            case 0:
                $slide.css('transform', 'translate(0,0)');
                break;
            case 1:
                $slide.css('transform', 'translate(-100vw,0)');
                break;
            case 2:
                $slide.css('transform', 'translate(-200vw,0)');
                break;
            case 3:
                $slide.css('transform', 'translate(0,-100vh)');
                break;
            case 4:
                $slide.css('transform', 'translate(-100vw,-100vh)');
                break;
            case 5:
                $slide.css('transform', 'translate(-200vw,-100vh)');
                break;
        }

    })

}

function setInit() {
    setGrid();
    $btns.eq(0).attr('disabled',true)
}

function setEvent() {
    setScroll();
    setFancybox();
    setClickBtn();
}




setInit();
setEvent();