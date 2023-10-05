'use strict'

{
  // ---SP用メニューボタン
  const button = document.getElementById('menu-button');
  const overlay = document.querySelector('.overlay');

  button.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  // ---SP用オーバーレイメニュー
	const about = document.querySelector('.ol-about');
	
	about.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  // ---カルーセル
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.game-thumbnails');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  // 表示用テキスト
  const anchor = document.createElement("a");
  const links = ['games.html#game1', 'games.html#game2', 'games.html#game3'];
  const title = ['Midnight Enigma', 'Strategic Odyssey', 'カラフル・パズル・ディライト'];
  const caption = ['こんな夢を見た。腕組をして枕元に坐っていると、仰向に寝た女が、静かな声でもう死にますと云う。女は長い髪を枕に敷いて、輪郭の柔やわらかな瓜実顔をその中に横たえている。真白な頬の底に温かい血の色がほどよく差して、唇の色は無論赤い。',
'腕組をして枕元に坐っていると、仰向に寝た女が、静かな声でもう死にますと云う。女は長い髪を枕に敷いて、輪郭の柔らかな瓜実顔をその中に横たえている。真白な頬の底に温かい血の色がほどよく差して、唇の色は無論赤い。とうてい死にそうには見えない。しかし女は静かな声で、もう死にますと判然云った。',
'自分も確かにこれは死ぬなと思った。そこで、そうかね、もう死ぬのかね、と上から覗き込むようにして聞いて見た。死にますとも、と云いながら、女はぱっちりと眼を開あけた。大きな潤いのある眼で、長い睫に包まれた中は、ただ一面に真黒であった。その真黒な眸の奥に、自分の姿が鮮やかに浮かんでいる。'];

  function updateBt() {

    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }

    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function changeText() {
    let pText = document.querySelector('.games-text');

    // カルーセル移動時、タイトルと説明も変更
    pText.textContent = caption[currentIndex];
         anchor.href = links[currentIndex]; // リンク先を切り替え設定
    pText.before(anchor); // 説明pタグの直前に挿入
    anchor.classList.add('games-title'); // 生成したaタグにクラスを設定
    anchor.textContent = title[currentIndex];
  }

  function setupDots() {
    for(let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateBt();
        moveSlides();
        changeText();
      });
      dots.push(button);
      document.querySelector('.carousel-dots').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateBt();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex ++;
    updateBt();
    updateDots();
    moveSlides();
    changeText();
  });

  prev.addEventListener('click', () => {
    currentIndex --;
    updateBt();
    updateDots();
    moveSlides();
    changeText();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });

  window.addEventListener("load", (event) => {
    // 画面表示時にカルーセル1番目のテキストをjsで生成
    changeText();
  });

  // 7秒ごとに自動切換え
	// let interval_id = null;
	// window.addEventListener('DOMContentLoaded', function(){
	// 	interval_id = setInterval(() => {
	// 		if(currentIndex < slides.length - 1){
	// 			currentIndex ++;
	// 			updateDots();
	// 			moveSlides();
  //       changeText();
	// 		} else {
	// 			currentIndex = 0;
	// 			updateDots();
	// 			moveSlides();
  //       changeText();
	// 			console.log('reset');
	// 		}
	// 	}, 7000);
	// });


  // スクロールトゥイーンアニメーション
  let windowWidth = window.innerWidth; // ブラウザ幅取得

  if (768 < windowWidth) {
    gsap.fromTo(".news-ctn", {
      x: -500,
      opacity: 0,
      duration: 3,
    }, {
      scrollTrigger: {
        trigger: ".news-ctn",
        start: "top bottom-=400",
        ease: "expo",
      },
      x: 0,
      opacity: 1,
    });
  
    gsap.fromTo(".games-ctn", {
      x: 500,
      opacity: 0,
      duration: 3,
    }, {
      scrollTrigger: {
        trigger: ".games-ctn",
        start: "top bottom-=500",
        ease: "expo",
      },
      x: 0,
      opacity: 1,
    });
  
    gsap.fromTo(".links-ctn", {
      x: -500,
      opacity: 0,
      duration: 3,
    }, {
      scrollTrigger: {
        trigger: ".links-ctn",
        start: "top bottom-=300",
        ease: "expo",
      },
      x: 0,
      opacity: 1,
    });
  }


}
