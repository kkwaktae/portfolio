"use strict";

window.onload = function(){
    const $introText = document.getElementById('intro-container');
    const $contentContainer = document.getElementsByClassName('content-container')[0];
    const $pager = document.getElementsByClassName('pager')[0];
    const $section = document.getElementsByTagName('section');


    setTimeout(() => { //첫 소개 문구 생성 후 위로 이동
        $introText.style.opacity = 1;
        $introText.style.transition = 'all 1s ease';
        setTimeout(()=>{
            $introText.style.transform = 'translateY(-35vh)';
            $introText.style.transition = 'all 1.2s ease';
        },1000);
    },1000);


    setTimeout(() => { // 첫 소개 문구 이동 후 컨텐츠 나타나기
        $contentContainer.style.opacity = 1;
        $contentContainer.style.transition = 'all 2.4s ease';
            setTimeout(() => { // 컨텐츠 나타난 후 페이저 보여주기
                $pager.style.opacity = 1;
                $pager.style.transition = 'all 2.4s ease';
            }, 1000);
    },3000);

    const page01Y = $section[0].offsetTop;
    const page02Y = $section[1].offsetTop;
    const page03Y = $section[2].offsetTop;
    const page04Y = $section[3].offsetTop;
    
    console.log(window.pageYOffset, page01Y, page02Y, page03Y, page04Y);

    function findPager(){
        for ( let i = 0 ; i < $pager.children.length ; i++ ) {
            // $pager.children[i].addEventListener('click', (e) => {
            //     e.target.
            // });
            console.log($pager.children[i]);
        }
    }
    findPager();

}

