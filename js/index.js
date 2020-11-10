window.onload = () => {
    setTimeout(() => {
        TweenMax.to('#gif', 0.4, { opacity: 0 });
        TweenMax.to('#p-loading', 0.4, { opacity: 0 });
        TweenMax.to('#gif', 0, { delay: .4, display: 'none' });
        TweenMax.to('#p-loading', 0, { delay: .4, display: 'none' });


        TweenMax.to('.music-rights', 0, { delay: 2.25, display: 'block' });
        TweenMax.to('#p-media-control', 0, { delay: 1, display: 'block' });
        TweenMax.to('.music-rights', 0.4, { delay: 2.25, opacity: 1 });
        TweenMax.to('#p-media-control', 0.4, { delay: 1, opacity: 1 });

        document.getElementById('allow-music').addEventListener('click', () => {
            TweenMax.to('.preloader', 1.1, { y: '-101vh', ease: Power4.easeInOut });

            TweenMax.to('#gif', 0, { delay: 1.1, opacity: 1 });
            TweenMax.to('#p-loading', 0, { delay: 1.1, opacity: 1 });
            TweenMax.to('#gif', 0, { delay: 1.1, display: 'block' });
            TweenMax.to('#p-loading', 0, { delay: 1.1, display: 'block' });


            TweenMax.to('.music-rights', 0, { delay: 1.1, display: 'none' });
            TweenMax.to('#p-media-control', 0, { delay: 1.1, display: 'none' });
            TweenMax.to('.music-rights', 0, { delay: 1.1, opacity: 0 });
            TweenMax.to('#p-media-control', 0, { delay: 1.1, opacity: 0 });

            setTimeout(() => {
                TweenMax.to('#mic-canvas', 1.1, { x: '0%', ease: Power4.easeOut });
            }, 1200)
            setTimeout(() => {
                controls.autoRotateSpeed = 50;
                controls.autoRotate = true;
                setTimeout(function () {
                    controls.autoRotate = false;
                }, 500)
            }, 1200)

            setTimeout(() => {
                document.getElementById('music-tag').play();
                document.getElementById('music-tag-2').pause();
                document.getElementById('music-tag-3').pause();
            }, 1400)

            TweenMax.to('#pause', 0, { display: 'block', opacity: 1 });
            TweenMax.to('#play', 0, { display: 'none', opacity: 0 });
            document.getElementById('play-now').innerText = 'Friends on the other side'
        })

        document.getElementById('deny-music').addEventListener('click', () => {
            TweenMax.to('.preloader', 1.1, { y: '-101vh', ease: Power4.easeInOut });

            TweenMax.to('#gif', 0, { delay: 1.1, opacity: 1 });
            TweenMax.to('#p-loading', 0, { delay: 1.1, opacity: 1 });
            TweenMax.to('#gif', 0, { delay: 1.1, display: 'block' });
            TweenMax.to('#p-loading', 0, { delay: 1.1, display: 'block' });


            TweenMax.to('.music-rights', 0, { delay: 1.1, display: 'none' });
            TweenMax.to('#p-media-control', 0, { delay: 1.1, display: 'none' });
            TweenMax.to('.music-rights', 0, { delay: 1.1, opacity: 0 });
            TweenMax.to('#p-media-control', 0, { delay: 1.1, opacity: 0 });

            setTimeout(() => {
                TweenMax.to('#mic-canvas', 1.1, { x: '0%', ease: Power4.easeOut });
            }, 1200)
            setTimeout(() => {
                controls.autoRotateSpeed = 50;
                controls.autoRotate = true;
                setTimeout(function () {
                    controls.autoRotate = false;
                }, 500)
            }, 1200)

            setTimeout(() => {
                document.getElementById('music-tag').pause();
            }, 1400)

            TweenMax.to('#play', 0, { display: 'block', opacity: 1 });
            TweenMax.to('#pause', 0, { display: 'none', opacity: 0 });
            document.getElementById('play-now').innerText = 'Friends on the other side'
        })

        // TweenMax.to('.preloader', 1.1, { y: '-101vh', ease: Power4.easeInOut});
    }, 1000)
}


var nextCount = 1;
document.getElementById('audio-next').addEventListener('click', () => {
    TweenMax.to('#play', .3, { opacity: 0 });
    TweenMax.to('#play', 0, { delay: .3, display: 'none' });
    TweenMax.to('#pause', 0, { delay: .3, display: 'block' });
    TweenMax.to('#pause', .3, { delay: .3, opacity: 1 });
    document.getElementById('music-tag').currentTime = 0;
    document.getElementById('music-tag-2').currentTime = 0;
    document.getElementById('music-tag-3').currentTime = 0;
    nextCount += 1;
    if (nextCount == 1) {
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Friends on the other side'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').play();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').pause();
    } else if (nextCount == 2) {
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'All that jazz'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').pause();
        document.getElementById('music-tag-2').play();
        document.getElementById('music-tag-3').pause();
    } else if (nextCount == 3) {
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Santa Fe'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').pause();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').play();
    } else if (nextCount > 3) {
        nextCount = 1;
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Friends on the other side'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').play();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').pause();
    }
    console.log(nextCount);
})

document.getElementById('audio-prev').addEventListener('click', () => {
    TweenMax.to('#play', .3, { opacity: 0 });
    TweenMax.to('#play', 0, { delay: .3, display: 'none' });
    TweenMax.to('#pause', 0, { delay: .3, display: 'block' });
    TweenMax.to('#pause', .3, { delay: .3, opacity: 1 });
    document.getElementById('music-tag').currentTime = 0;
    document.getElementById('music-tag-2').currentTime = 0;
    document.getElementById('music-tag-3').currentTime = 0;
    nextCount -= 1;
    if (nextCount == 1) {
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Friends on the other side'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').play();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').pause();
    } else if (nextCount == 2) {
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'All that jazz'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').pause();
        document.getElementById('music-tag-2').play();
        document.getElementById('music-tag-3').pause();
    } else if (nextCount == 3) {
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Santa Fe'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').pause();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').play();
    } else if (nextCount < 1) {
        nextCount = 3;
        TweenMax.to('#play-now', 0.3, { opacity: 0});
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Santa Fe'
        }, 300);
        TweenMax.to('#play-now', 0.3, { delay: 0.3, opacity: 1});
        document.getElementById('music-tag').play();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').pause();
    }
    console.log(nextCount);
})


document.getElementById('play').addEventListener('click', () => {

    if (nextCount == 1) {
        document.getElementById('music-tag').play();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').pause();
    } else if (nextCount == 2) {
        document.getElementById('music-tag').pause();
        document.getElementById('music-tag-2').play();
        document.getElementById('music-tag-3').pause();
    } else if (nextCount == 3) {
        document.getElementById('music-tag').pause();
        document.getElementById('music-tag-2').pause();
        document.getElementById('music-tag-3').play();
    } 

    TweenMax.to('#play', .3, { opacity: 0 });
    TweenMax.to('#play', 0, { delay: .3, display: 'none' });
    TweenMax.to('#pause', 0, { delay: .3, display: 'block' });
    TweenMax.to('#pause', .3, { delay: .3, opacity: 1 });
});

document.getElementById('pause').addEventListener('click', () => {
    document.getElementById('music-tag').pause();
    document.getElementById('music-tag-2').pause();
    document.getElementById('music-tag-3').pause();
    TweenMax.to('#pause', .3, { opacity: 0 });
    TweenMax.to('#pause', 0, { delay: .3, display: 'none' });
    TweenMax.to('#play', 0, { delay: .3, display: 'block' });
    TweenMax.to('#play', .3, { delay: .3, opacity: 1 });
});

document.getElementById('menu').addEventListener('click', () => {
    TweenMax.to('.menu-container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('#circle', .2, { opacity: 0 });
    TweenMax.to('#circle', 0, { delay: .2, display: 'none' });
});

document.getElementById('close').addEventListener('click', () => {
    TweenMax.to('.menu-container', 1.1, { x: '30vw', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#circle', .2, { delay: 1.1, opacity: 1 });
    TweenMax.to('#circle', 0, { display: 'block' });
});

document.getElementById('power').addEventListener('click', () => {
    controls.autoRotateSpeed = 50;
    controls.autoRotate = true;
    setTimeout(function () {
        controls.autoRotate = false;
    }, 500)
    TweenMax.to('#mic-canvas', 1.1, { delay: 0.5, x: '-100%', ease: Power4.easeIn });

    TweenMax.to('#power', 0, { display: 'none' });
    TweenMax.to('#power-2', 0, { display: 'block' });

    document.getElementById('guide-1').innerText = 'click the power button to see the mic'
    document.getElementById('guide-2').innerText = ''

    setTimeout(function () {
        TweenMax.to('.f-container', .4, { opacity: 1 });
    }, 1800)
})




document.getElementById('power-2').addEventListener('click', () => {
    TweenMax.to('#mic-canvas', 1.1, { delay: .2, x: '0%', ease: Power4.easeOut });
    setTimeout(() => {
        controls.autoRotateSpeed = 50;
        controls.autoRotate = true;
        setTimeout(function () {
            controls.autoRotate = false;
        }, 500)
    }, 400)

    TweenMax.to('#power-2', 0, { display: 'none' });
    TweenMax.to('#power', 0, { display: 'block' });

    document.getElementById('guide-1').innerText = 'click the power button to see more'
    document.getElementById('guide-2').innerText = 'drag or scroll the mic to inspect'

    TweenMax.to('.f-container', .3, { opacity: 0 });
})

document.getElementById('power').addEventListener('mouseover', () => {
    TweenMax.to('#guide-3', .5, { opacity: 1 });
})

document.getElementById('power').addEventListener('mouseout', () => {
    TweenMax.to('#guide-3', .5, { opacity: 0 });
})

document.getElementById('power-2').addEventListener('mouseover', () => {
    TweenMax.to('#guide-3', .5, { opacity: 1 });
})

document.getElementById('power-2').addEventListener('mouseout', () => {
    TweenMax.to('#guide-3', .5, { opacity: 0 });
})



document.getElementById('nav-contact').addEventListener('click', () => {
    TweenMax.to('#nav-contact', 0, { display: 'none' });
    TweenMax.to('#nav-contact-2', 0, { display: 'block' });
    TweenMax.to('.nav-contact-details', .5, { opacity: 1 });
})

document.getElementById('nav-contact-2').addEventListener('click', () => {
    TweenMax.to('#nav-contact', 0, { display: 'block' });
    TweenMax.to('#nav-contact-2', 0, { display: 'none' });
    TweenMax.to('.nav-contact-details', .5, { opacity: 0 });
})

document.getElementById('nav-theater').addEventListener('click', ()=> {
    TweenMax.to('.menu-container', 1.1, { x: '30vw', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#mic-canvas', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('#mic-canvas', 0, { delay: 1.6, display: 'none' });
    TweenMax.to('.f-container', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('.f-container', 0, { delay: 1.6, display: 'none' });
    TweenMax.to('.change-site', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('.change-site', 0, { delay: 1.6, display: 'none' });
    setTimeout(()=> {
        document.location.href = 'theater.html'
    }, 1800)
})