"use strict";

window.onload = function(){
    const $introText = document.getElementById('intro-container');
    const $contentContainer = document.getElementsByClassName('content-container')[0];
    const $pager = document.getElementsByClassName('pager')[0];
    const $pagerLi = $pager.getElementsByTagName('li');
    const $section = document.getElementsByTagName('section');

    setTimeout(() => { //intro페이지 첫 소개 문구 생성 후 위로 이동
        $introText.style.opacity = 1;
        $introText.style.transition = 'all 1s ease';
        setTimeout(()=>{
            $introText.style.transform = 'translateY(-35vh)';
            $introText.style.transition = 'all 1.2s ease';
        },700);
    },500);


    setTimeout(() => { // 첫 소개 문구 이동 후 컨텐츠 나타나기
        $contentContainer.style.opacity = 1;
        $contentContainer.style.transition = 'all 2s ease';
            setTimeout(() => { // 컨텐츠 나타난 후 페이저 보여주기
                $pager.style.opacity = 1;
                $pager.style.transition = 'all 2s ease';
            }, 500);
    },2000);

    const page01Y = $section[0].offsetTop; // 각 페이지 별 높이 값 구하기
    const page02Y = $section[1].offsetTop;
    const page03Y = $section[2].offsetTop;
    const page04Y = $section[3].offsetTop;
    const MINUS = -500;


    findPager();

    function findPager(){ //각 페이저 클릭 시 해당 페이지로 이동
        for ( let i = 0 ; i < $pager.children.length ; i++ ) {
            
            $pager.children[i].addEventListener('click', (e) => {
                if(i === 0) {
                    window.scrollTo({left: 0, top: page01Y, behavior: 'smooth'});
                }
                if(i === 1) {
                    window.scrollTo({left: 0, top: page02Y, behavior: 'smooth'});
                }
                if(i === 2) {
                    window.scrollTo({left: 0, top: page03Y, behavior: 'smooth'});
                }
                if(i === 3) {
                    window.scrollTo({left: 0, top: page04Y, behavior: 'smooth'});
                }
            });
        }
    }

    document.addEventListener('scroll', function(e){ // 스크롤 이벤트
        
        let scrT = document.documentElement.scrollTop;
        let timer;

        if (!timer) { // 쓰로틀링
            timer = setTimeout(function() {
                timer = null;
            }, 500);
        }
            

        function activePager(){ // 페이지 별 페이저 색상 변경

            if(scrT >= 0 && scrT < page02Y + MINUS) {
                for ( let i = 0 ; i < $pagerLi.length ; i++) {
                    $pagerLi[i].classList.remove('on');
                }
                $pagerLi[0].classList.add('on');
            }

            if(scrT >= page02Y + MINUS && scrT < page03Y + MINUS) {
                for ( let i = 0 ; i < $pagerLi.length ; i++) {
                    $pagerLi[i].classList.remove('on');
                }
                $pagerLi[1].classList.add('on');
            }

            if(scrT >= page03Y + MINUS && scrT < page04Y + MINUS) {
                for ( let i = 0 ; i < $pagerLi.length ; i++) {
                    $pagerLi[i].classList.remove('on');
                }
                $pagerLi[2].classList.add('on');
            }

            if(scrT >= page04Y + MINUS) {
                for ( let i = 0 ; i < $pagerLi.length ; i++) {
                    $pagerLi[i].classList.remove('on');
                }
                $pagerLi[3].classList.add('on');
            }
        }

        activePager();
    });

}