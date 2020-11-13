window.onload = () => {
    TweenMax.to('#circle', 0, { zIndex: '1000' });
    TweenMax.to('.container', 0, { webkitFilter: 'blur(0px)' });
    for (i = 1; i < 6; i++) {
        document.getElementById(`song-${i}`).pause();
    }
}

document.getElementById('menu').addEventListener('click', () => {
    TweenMax.to('.blur-panel', 0, { zIndex: '2000' });
    TweenMax.to('.blur-panel', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('.menu-container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '-30vw', ease: Power4.easeInOut, webkitFilter: 'blur(8px)' });
    TweenMax.to('#volume-on', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('#volume-off', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('#act-info', 0.6, { delay: .2, opacity: 0 });
    TweenMax.to('#circle', .2, { opacity: 0 });
    TweenMax.to('#circle', 0, { delay: .2, display: 'none' });
    TweenMax.to('#mute', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('#unmute', 1.1, { x: '-30vw', ease: Power4.easeInOut });
});

document.getElementById('close').addEventListener('click', () => {
    TweenMax.to('.blur-panel', 0, { delay: 1.1, zIndex: '-1' });
    TweenMax.to('.blur-panel', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('.menu-container', 1.1, { x: '30vw', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut, webkitFilter: 'blur(0px)' });
    TweenMax.to('#volume-on', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#volume-off', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#act-info', 1.1, { delay: .5, opacity: 1 });
    TweenMax.to('#circle', .2, { delay: 1.1, opacity: 1 });
    TweenMax.to('#circle', 0, { display: 'block' });
    TweenMax.to('#mute', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#unmute', 1.1, { x: '0', ease: Power4.easeInOut });
});

document.getElementById('mute').addEventListener('mouseover', () => {
    TweenMax.to('#circle', .3, { backgroundColor: 'white' });
})

document.getElementById('mute').addEventListener('mouseout', () => {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
})

document.getElementById('unmute').addEventListener('mouseover', () => {
    TweenMax.to('#circle', .3, { backgroundColor: 'white' });
})

document.getElementById('unmute').addEventListener('mouseout', () => {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
})

for (i = 0; i < 12; i++) {
    document.getElementsByClassName('player-img')[i].addEventListener('mouseover', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'white' });
    })

    document.getElementsByClassName('player-img')[i].addEventListener('mouseout', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
    })
}

for (i = 0; i < 6; i++) {
    document.getElementsByClassName('youtube')[i].addEventListener('mouseover', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'white' });
    })

    document.getElementsByClassName('youtube')[i].addEventListener('mouseout', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
    })

    document.getElementsByClassName('name-list')[i].addEventListener('mouseover', () => {
        TweenMax.to('#circle', .75, { backgroundColor: 'white' });
        TweenMax.to('#circle', .75, { opacity: .4 });
    })

    document.getElementsByClassName('name-list')[i].addEventListener('mouseout', () => {
        TweenMax.to('#circle', .75, { backgroundColor: 'transparent' });
        TweenMax.to('#circle', .75, { opacity: 1 });
    })
}

    document.getElementById('play-1').addEventListener('click', ()=> {
        document.getElementById('song-1').play();
        document.getElementById('song-2').pause();
        document.getElementById('song-3').pause();
        document.getElementById('song-4').pause();
        document.getElementById('song-5').pause();
        document.getElementById('song-2').currentTime = 0;
        document.getElementById('song-3').currentTime = 0;
        document.getElementById('song-4').currentTime = 0;
        document.getElementById('song-5').currentTime = 0;
        TweenMax.to('#play-1', .3, { opacity: 0});
        TweenMax.to('#play-1', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#pause-1', .3, { delay: .3, opacity: 1});

        TweenMax.to('#play-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-2', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-3', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-4', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-5', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-6', .3, { delay: .3, opacity: 1});
        TweenMax.to('#pause-2', .3, { opacity: 0});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-3', .3, { opacity: 0});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-4', .3, { opacity: 0});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-5', .3, { opacity: 0});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-6', .3, { opacity: 0});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'none'});

    })

    document.getElementById('play-2').addEventListener('click', ()=> {
        document.getElementById('song-2').play();
        document.getElementById('song-1').pause();
        document.getElementById('song-3').pause();
        document.getElementById('song-4').pause();
        document.getElementById('song-5').pause();
        document.getElementById('song-1').currentTime = 0;
        document.getElementById('song-3').currentTime = 0;
        document.getElementById('song-4').currentTime = 0;
        document.getElementById('song-5').currentTime = 0;
        TweenMax.to('#play-2', .3, { opacity: 0});
        TweenMax.to('#play-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#pause-2', .3, { delay: .3, opacity: 1});

        TweenMax.to('#play-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-1', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-3', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-4', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-5', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-6', .3, { delay: .3, opacity: 1});
        TweenMax.to('#pause-1', .3, { opacity: 0});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-3', .3, { opacity: 0});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-4', .3, { opacity: 0});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-5', .3, { opacity: 0});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-6', .3, { opacity: 0});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'none'});
    })

    document.getElementById('play-3').addEventListener('click', ()=> {
        document.getElementById('song-3').play();
        document.getElementById('song-2').pause();
        document.getElementById('song-1').pause();
        document.getElementById('song-4').pause();
        document.getElementById('song-5').pause();
        document.getElementById('song-2').currentTime = 0;
        document.getElementById('song-1').currentTime = 0;
        document.getElementById('song-4').currentTime = 0;
        document.getElementById('song-5').currentTime = 0;
        TweenMax.to('#play-3', .3, { opacity: 0});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#pause-3', .3, { delay: .3, opacity: 1});

        TweenMax.to('#play-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-2', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-1', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-4', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-5', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-6', .3, { delay: .3, opacity: 1});
        TweenMax.to('#pause-2', .3, { opacity: 0});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-1', .3, { opacity: 0});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-4', .3, { opacity: 0});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-5', .3, { opacity: 0});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-6', .3, { opacity: 0});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'none'});
    })

    document.getElementById('play-4').addEventListener('click', ()=> {
        document.getElementById('song-4').play();
        document.getElementById('song-2').pause();
        document.getElementById('song-3').pause();
        document.getElementById('song-1').pause();
        document.getElementById('song-5').pause();
        document.getElementById('song-2').currentTime = 0;
        document.getElementById('song-3').currentTime = 0;
        document.getElementById('song-1').currentTime = 0;
        document.getElementById('song-5').currentTime = 0;
        TweenMax.to('#play-4', .3, { opacity: 0});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#pause-4', .3, { delay: .3, opacity: 1});

        TweenMax.to('#play-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-2', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-3', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-1', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-5', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-6', .3, { delay: .3, opacity: 1});
        TweenMax.to('#pause-2', .3, { opacity: 0});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-3', .3, { opacity: 0});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-1', .3, { opacity: 0});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-5', .3, { opacity: 0});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-6', .3, { opacity: 0});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'none'});
    })

    document.getElementById('play-5').addEventListener('click', ()=> {
        document.getElementById('song-5').play();
        document.getElementById('song-2').pause();
        document.getElementById('song-3').pause();
        document.getElementById('song-4').pause();
        document.getElementById('song-1').pause();
        document.getElementById('song-2').currentTime = 0;
        document.getElementById('song-3').currentTime = 0;
        document.getElementById('song-4').currentTime = 0;
        document.getElementById('song-1').currentTime = 0;
        TweenMax.to('#play-5', .3, { opacity: 0});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#pause-5', .3, { delay: .3, opacity: 1});

        TweenMax.to('#play-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-2', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-3', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-4', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-1', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-6', .3, { delay: .3, opacity: 1});
        TweenMax.to('#pause-2', .3, { opacity: 0});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-3', .3, { opacity: 0});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-4', .3, { opacity: 0});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-1', .3, { opacity: 0});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-6', .3, { opacity: 0});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'none'});
    })

    document.getElementById('play-6').addEventListener('click', ()=> {
        TweenMax.to('#play-6', .3, { opacity: 0});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#pause-6', .3, { delay: .3, opacity: 1});

        TweenMax.to('#play-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-2', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-3', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-4', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-5', .3, { delay: .3, opacity: 1});
        TweenMax.to('#play-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-1', .3, { delay: .3, opacity: 1});
        TweenMax.to('#pause-2', .3, { opacity: 0});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-3', .3, { opacity: 0});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-4', .3, { opacity: 0});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-5', .3, { opacity: 0});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#pause-1', .3, { opacity: 0});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'none'});
    })

    document.getElementById('pause-1').addEventListener('click', ()=> {
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).pause();
        }
        TweenMax.to('#pause-1', .3, { opacity: 0});
        TweenMax.to('#pause-1', 0, { delay: .3, display: 'none'});
        TweenMax.to('#play-1', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-1', .3, { delay: .3, opacity: 1});
    })

    document.getElementById('pause-2').addEventListener('click', ()=> {
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).pause();
        }
        TweenMax.to('#pause-2', .3, { opacity: 0});
        TweenMax.to('#pause-2', 0, { delay: .3, display: 'none'});
        TweenMax.to('#play-2', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-2', .3, { delay: .3, opacity: 1});
    })

    document.getElementById('pause-3').addEventListener('click', ()=> {
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).pause();
        }
        TweenMax.to('#pause-3', .3, { opacity: 0});
        TweenMax.to('#pause-3', 0, { delay: .3, display: 'none'});
        TweenMax.to('#play-3', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-3', .3, { delay: .3, opacity: 1});
    })

    document.getElementById('pause-4').addEventListener('click', ()=> {
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).pause();
        }
        TweenMax.to('#pause-4', .3, { opacity: 0});
        TweenMax.to('#pause-4', 0, { delay: .3, display: 'none'});
        TweenMax.to('#play-4', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-4', .3, { delay: .3, opacity: 1});
    })

    document.getElementById('pause-5').addEventListener('click', ()=> {
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).pause();
        }
        TweenMax.to('#pause-5', .3, { opacity: 0});
        TweenMax.to('#pause-5', 0, { delay: .3, display: 'none'});
        TweenMax.to('#play-5', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-5', .3, { delay: .3, opacity: 1});
    })

    document.getElementById('pause-6').addEventListener('click', ()=> {
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).pause();
        }
        TweenMax.to('#pause-6', .3, { opacity: 0});
        TweenMax.to('#pause-6', 0, { delay: .3, display: 'none'});
        TweenMax.to('#play-6', 0, { delay: .3, display: 'block'});
        TweenMax.to('#play-6', .3, { delay: .3, opacity: 1});
    })


    document.getElementById('mute').addEventListener('click', ()=> {
        TweenMax.to('#mute', .3, { opacity: 0 });
        TweenMax.to('#mute', 0, { delay: .3, display: 'none' });
        TweenMax.to('#unmute', 0, { delay: .3, display: 'block' });
        TweenMax.to('#unmute', .3, { delay: .3, opacity: 1 });
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).muted = false;
        }
    })
    
    document.getElementById('unmute').addEventListener('click', ()=> {
        TweenMax.to('#unmute', .3, { opacity: 0 });
        TweenMax.to('#unmute', 0, { delay: .3, display: 'none' });
        TweenMax.to('#mute', 0, { delay: .3, display: 'block' });
        TweenMax.to('#mute', .3, { delay: .3, opacity: 1 });
        for (i = 1; i < 6; i++) {
            document.getElementById(`song-${i}`).muted = true;
        }
    })














document.getElementById('h1-list-1').addEventListener('mouseover', () => {
    TweenMax.to('#hr-1', .7, { scaleX: 1, ease: Power4.easeInOut });
})

document.getElementById('h1-list-1').addEventListener('mouseout', () => {
    TweenMax.to('#hr-1', .7, { scaleX: 0, ease: Power4.easeInOut });
})

document.getElementById('h1-list-2').addEventListener('mouseover', () => {
    TweenMax.to('#hr-2', .7, { scaleX: 1, ease: Power4.easeInOut });
})

document.getElementById('h1-list-2').addEventListener('mouseout', () => {
    TweenMax.to('#hr-2', .7, { scaleX: 0, ease: Power4.easeInOut });
})

document.getElementById('h1-list-3').addEventListener('mouseover', () => {
    TweenMax.to('#hr-3', .7, { scaleX: 1, ease: Power4.easeInOut });
})

document.getElementById('h1-list-3').addEventListener('mouseout', () => {
    TweenMax.to('#hr-3', .7, { scaleX: 0, ease: Power4.easeInOut });
})

document.getElementById('h1-list-4').addEventListener('mouseover', () => {
    TweenMax.to('#hr-4', .7, { scaleX: 1, ease: Power4.easeInOut });
})

document.getElementById('h1-list-4').addEventListener('mouseout', () => {
    TweenMax.to('#hr-4', .7, { scaleX: 0, ease: Power4.easeInOut });
})

document.getElementById('h1-list-5').addEventListener('mouseover', () => {
    TweenMax.to('#hr-5', .7, { scaleX: 1, ease: Power4.easeInOut });
})

document.getElementById('h1-list-5').addEventListener('mouseout', () => {
    TweenMax.to('#hr-5', .7, { scaleX: 0, ease: Power4.easeInOut });
})

document.getElementById('h1-list-6').addEventListener('mouseover', () => {
    TweenMax.to('#hr-6', .7, { scaleX: 1, ease: Power4.easeInOut });
})

document.getElementById('h1-list-6').addEventListener('mouseout', () => {
    TweenMax.to('#hr-6', .7, { scaleX: 0, ease: Power4.easeInOut });
})



document.getElementById('close-vid').addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('iframe').src = ''
    }, 550);
    TweenMax.to('#close-vid', .3, { opacity: 0 });
    TweenMax.to('#close-vid', 0, { delay: .5, opacity: 1 });
    TweenMax.to('.video-container', .5, { ease: Back.easeIn.config(1.7), y: '-111vh' });
    TweenMax.to('.video-container', 0, { delay: .5, display: 'none' })
})

document.getElementsByClassName('video-container')[0].addEventListener('click', () => {
    TweenMax.to('#close-vid', .1, { scale: 1.5, ease: Power4.easeIn });
    TweenMax.to('#close-vid', .1, { delay: .3, scale: 1, ease: Power4.easeOut });
})

document.getElementById('youtube-1').addEventListener('click', () => {
    for (i = 1; i < 6; i++) {
        document.getElementById(`song-${i}`).pause();
        document.getElementById(`song-${i}`).currentTime = 0;
    }
    TweenMax.to('.pause-list', .3, { opacity: 0});
    TweenMax.to('.pause-list', 0, { delay: .3, display: 'none'});
    TweenMax.to('.play-list', 0, { delay: .3, display: 'block'});
    TweenMax.to('.play-list', .3, { delay: .3, opacity: 1});
    setTimeout(() => {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/qO6_yCrKt-Q'
    }, 750);
    TweenMax.to('.video-container', 0, { display: 'flex' });
    TweenMax.to('.video-container', .7, { ease: Power4.easeOut, y: 0 })
})

document.getElementById('youtube-2').addEventListener('click', () => {
    for (i = 1; i < 6; i++) {
        document.getElementById(`song-${i}`).pause();
        document.getElementById(`song-${i}`).currentTime = 0;
    }
    TweenMax.to('.pause-list', .3, { opacity: 0});
    TweenMax.to('.pause-list', 0, { delay: .3, display: 'none'});
    TweenMax.to('.play-list', 0, { delay: .3, display: 'block'});
    TweenMax.to('.play-list', .3, { delay: .3, opacity: 1});
    setTimeout(() => {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/Qs88WruP5GM'
    }, 750);
    TweenMax.to('.video-container', 0, { display: 'flex' });
    TweenMax.to('.video-container', .7, { ease: Power4.easeOut, y: 0 })
})

document.getElementById('youtube-3').addEventListener('click', () => {
    for (i = 1; i < 6; i++) {
        document.getElementById(`song-${i}`).pause();
        document.getElementById(`song-${i}`).currentTime = 0;
    }
    TweenMax.to('.pause-list', .3, { opacity: 0});
    TweenMax.to('.pause-list', 0, { delay: .3, display: 'none'});
    TweenMax.to('.play-list', 0, { delay: .3, display: 'block'});
    TweenMax.to('.play-list', .3, { delay: .3, opacity: 1});
    setTimeout(() => {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/aspKZv9T_sI'
    }, 750);
    TweenMax.to('.video-container', 0, { display: 'flex' });
    TweenMax.to('.video-container', .7, { ease: Power4.easeOut, y: 0 })
})

document.getElementById('youtube-4').addEventListener('click', () => {
    for (i = 1; i < 6; i++) {
        document.getElementById(`song-${i}`).pause();
        document.getElementById(`song-${i}`).currentTime = 0;
    }
    TweenMax.to('.pause-list', .3, { opacity: 0});
    TweenMax.to('.pause-list', 0, { delay: .3, display: 'none'});
    TweenMax.to('.play-list', 0, { delay: .3, display: 'block'});
    TweenMax.to('.play-list', .3, { delay: .3, opacity: 1});
    setTimeout(() => {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/7Xs55MtObH0'
    }, 750);
    TweenMax.to('.video-container', 0, { display: 'flex' });
    TweenMax.to('.video-container', .7, { ease: Power4.easeOut, y: 0 })
})

document.getElementById('youtube-5').addEventListener('click', () => {
    for (i = 1; i < 6; i++) {
        document.getElementById(`song-${i}`).pause();
        document.getElementById(`song-${i}`).currentTime = 0;
    }
    TweenMax.to('.pause-list', .3, { opacity: 0});
    TweenMax.to('.pause-list', 0, { delay: .3, display: 'none'});
    TweenMax.to('.play-list', 0, { delay: .3, display: 'block'});
    TweenMax.to('.play-list', .3, { delay: .3, opacity: 1});
    setTimeout(() => {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/I97xWmOn62Y'
    }, 750);
    TweenMax.to('.video-container', 0, { display: 'flex' });
    TweenMax.to('.video-container', .7, { ease: Power4.easeOut, y: 0 })
})