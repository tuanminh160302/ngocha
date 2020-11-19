window.onload = () => {
    setTimeout(() => {
        TweenMax.to('#gif', 0.4, { opacity: 0 });
        TweenMax.to('#p-loading', 0.4, { opacity: 0 });
        TweenMax.to('#p-loading-note', 0.4, { opacity: 0 });
        TweenMax.to('#gif', 0, { delay: .4, display: 'none' });
        TweenMax.to('#p-loading', 0, { delay: .4, display: 'none' });
        TweenMax.to('#p-loading-note', 0, { delay: .4, display: 'none' });



        // TweenMax.to('.music-rights', 0, { delay: 2.25, display: 'block' });
        TweenMax.to('#p-media-control', 0, { delay: 1, display: 'block' });
        TweenMax.to('.music-rights', 0.4, { delay: 2.25, opacity: 1 });
        TweenMax.to('#p-media-control', 0.4, { delay: 1, opacity: 1 });

        document.getElementById('understand').addEventListener('click',()=> {
            TweenMax.to('.container', 0, { delay: 3, webkitFilter: 'blur(0px)'});
            TweenMax.to('#circle', 0, { delay: 3, zIndex: '1000000'});
            TweenMax.to('#circle', 0, { delay: 3, zIndex: '50'});
            TweenMax.to('.preloader', 1.1, { y: '-101vh', ease: Power4.easeInOut });
            TweenMax.to('.act-noti', .3, { delay: 2.7, opacity: 0 });
            TweenMax.to('.act-noti', 0, { delay: 3, display: 'none' });
            document.getElementById('play-now').innerText = 'Bac Lam Vuon x That Bat Ngo'
            TweenMax.to('#understand', 0, { delay: .5, display: 'none'});
            TweenMax.to('#understand', .5, { opacity: 0});
            TweenMax.to('.preloader', 0, { delay: 1.1, display: 'none'});
        })

        document.getElementById('allow-music').addEventListener('click', () => {
            TweenMax.to('#circle', 0, { zIndex: '50'});

            TweenMax.to('#volume-off', 0, { display: 'none', opacity: 0});
            TweenMax.to('#volume-on', 0, { display: 'block', opacity: 1});

            TweenMax.to('.music-rights', 0, { delay: 0.4, display: 'none' });
            TweenMax.to('#p-media-control', 0, { delay: 0.4, display: 'none' });
            TweenMax.to('.music-rights', 0.4, { opacity: 0 });
            TweenMax.to('#p-media-control', 0.4, { opacity: 0 })

            TweenMax.to('.glams-container', 0, { display: 'flex'});
            setTimeout(()=> {
                document.getElementById('preloader').style.overflowY = 'auto';
            }, 4500)
            
            TweenMax.to('#glams-preloader', .0, { delay: .5, display: 'block' });
            TweenMax.to('#fb-glams', .0, { delay: 4, display: 'block' });
            TweenMax.to('#scrolldown', .0, { delay: 4, display: 'block' });
            TweenMax.to('#glams-preloader', 2, { delay: 1, opacity: 1 });
            TweenMax.to('#fb-glams', .5, { delay: 4.5, opacity: 1 });
            TweenMax.to('#scrolldown', .5, { delay: 4.5, opacity: 1 });
            TweenMax.to('#glams-preloader', .7, { delay: 3.3, y: '-40vh', ease: Power4.easeInOut});
            TweenMax.to('#glams-description', 0, { delay: 4.5, display: 'block'});
            TweenMax.to('#glams-description', .5, { delay: 4.5, opacity: 1});
            TweenMax.to('#glams-cover', 2, { delay: 4.5, opacity: 1});
            TweenMax.to('#understand', 0, { delay: 6, display: 'block'});
            TweenMax.to('#understand', .5, { delay: 6, opacity: 1});

            TweenMax.to('#pause', 0, { display: 'block', opacity: 1 });
            TweenMax.to('#play', 0, { display: 'none', opacity: 0 });

            setTimeout(() => {
                document.getElementById('music-tag-1').play();
                for (i=2; i<18; i++){
                    document.getElementById(`music-tag-${i}`).pause();
                }
            }, 000)
        })

        document.getElementById('deny-music').addEventListener('click', () => {
            TweenMax.to('#circle', 0, { zIndex: '50'});

            for (i = 1; i < 18; i++) {
                document.getElementById(`music-tag-${i}`).pause();
            }
            for (i = 1; i < 18; i++) {
                document.getElementById(`music-tag-${i}`).muted = true;
            }
            TweenMax.to('#volume-on', 0, { display: 'none', opacity: 0});
            TweenMax.to('#volume-off', 0, { display: 'block', opacity: 1});
            document.getElementById('volume-off').addEventListener('click', ()=> {
                TweenMax.to('#volume-off', .3, { opacity: 0 });
                TweenMax.to('#volume-off', 0, { delay: .3, display: 'none' });
                TweenMax.to('#volume-on', 0, { delay: .3, display: 'block' });
                TweenMax.to('#volume-on', .3, { delay: .3, opacity: 1 });
            })

            TweenMax.to('.music-rights', 0, { delay: 0.4, display: 'none' });
            TweenMax.to('#p-media-control', 0, { delay: 0.4, display: 'none' });
            TweenMax.to('.music-rights', 0.4, { opacity: 0 });
            TweenMax.to('#p-media-control', 0.4, { opacity: 0 })

            TweenMax.to('.glams-container', 0, { display: 'flex'});
            setTimeout(()=> {
                document.getElementById('preloader').style.overflowY = 'auto';
            }, 4500)

            TweenMax.to('#glams-preloader', .0, { delay: .5, display: 'block' });
            TweenMax.to('#fb-glams', .0, { delay: 4, display: 'block' });
            TweenMax.to('#scrolldown', .0, { delay: 4, display: 'block' });
            TweenMax.to('#glams-preloader', 2, { delay: 1, opacity: 1 });
            TweenMax.to('#fb-glams', .5, { delay: 4.5, opacity: 1 });
            TweenMax.to('#scrolldown', .5, { delay: 4.5, opacity: 1 });
            TweenMax.to('#glams-preloader', .7, { delay: 3.3, y: '-40vh', ease: Power4.easeInOut});
            TweenMax.to('#glams-description', 0, { delay: 4.5, display: 'block'});
            TweenMax.to('#glams-description', .5, { delay: 4.5, opacity: 1});
            TweenMax.to('#glams-cover', 2, { delay: 4.5, opacity: 1});
            TweenMax.to('#understand', 0, { delay: 6, display: 'block'});
            TweenMax.to('#understand', .5, { delay: 6, opacity: 1});

            TweenMax.to('#play', 0, { display: 'block', opacity: 1 });
            TweenMax.to('#pause', 0, { display: 'none', opacity: 0 });
        })
        // TweenMax.to('.preloader', 1.1, { y: '-101vh', ease: Power4.easeInOut});
        TweenMax.to('.act2-17', 0, { display: 'none'});
    }, 1000)
}

var actControls = 1;

document.getElementById('volume-off').addEventListener('click', ()=> {
    TweenMax.to('#volume-off', .3, { opacity: 0 });
    TweenMax.to('#volume-off', 0, { delay: .3, display: 'none' });
    TweenMax.to('#volume-on', 0, { delay: .3, display: 'block' });
    TweenMax.to('#volume-on', .3, { delay: .3, opacity: 1 });
    for (i = 1; i < 18; i++) {
        document.getElementById(`music-tag-${i}`).muted = false;
    }
})

document.getElementById('volume-on').addEventListener('click', ()=> {
    TweenMax.to('#volume-on', .3, { opacity: 0 });
    TweenMax.to('#volume-on', 0, { delay: .3, display: 'none' });
    TweenMax.to('#volume-off', 0, { delay: .3, display: 'block' });
    TweenMax.to('#volume-off', .3, { delay: .3, opacity: 1 });
    for (i = 1; i < 18; i++) {
        document.getElementById(`music-tag-${i}`).muted = true;
    }
})

document.getElementById('play').addEventListener('click', () => {
    TweenMax.to('#play', .3, { opacity: 0 });
    TweenMax.to('#play', 0, { delay: .3, display: 'none' });
    TweenMax.to('#pause', 0, { delay: .3, display: 'block' });
    TweenMax.to('#pause', .3, { delay: .3, opacity: 1 });
    document.getElementById(`music-tag-${actControls}`).play();
})

document.getElementById('pause').addEventListener('click', () => {
    TweenMax.to('#pause', .3, { opacity: 0 });
    TweenMax.to('#pause', 0, { delay: .3, display: 'none' });
    TweenMax.to('#play', 0, { delay: .3, display: 'block' });
    TweenMax.to('#play', .3, { delay: .3, opacity: 1 });
    document.getElementById(`music-tag-${actControls}`).pause();
})


document.getElementById('next-act').addEventListener('click', () => {
    document.getElementById('iframe').src = ''
    TweenMax.to('#circle', 0, { zIndex: '100000'});
    TweenMax.to('#circle', 0, { delay: 2.7, zIndex: '50'});
    TweenMax.to(`#act-${actControls}-container`, 0, { delay: .3, display: 'none'});
    TweenMax.to('.act-noti', .3, { opacity: 1 });
    TweenMax.to('.act-noti', 0, { display: 'flex' });
    TweenMax.to('.act-noti', .3, { delay: 2.7, opacity: 0 });
    TweenMax.to('.act-noti', 0, { delay: 3, display: 'none' });
    TweenMax.to('#pause', 0, { delay: .3, display: 'block', opacity: 1 });
    TweenMax.to('#play', 0, { delay: .3, display: 'none', opacity: 0 });
    document.getElementById(`music-tag-${actControls}`).pause();
    actControls += 1;
    TweenMax.to(`#act-${actControls}-container`, 0, { delay: .3, display: 'block'});
    document.getElementById(`music-tag-${actControls}`).currentTime = 0;

    if (actControls == 2) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/dTiWs67gcAs'
        TweenMax.to('#prev-act', 0, { display: 'block' });
        TweenMax.to('#prev-act', .3, { delay: .2, opacity: 1 });
        document.getElementById('act-noti-text').innerText = 'act 02. Alice in the Wonderland'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 02. Alice in the Wonderland'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Arabian Nights'
        }, 500);
    }

    else if (actControls == 3) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 03. quarrels and rumors'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 03. quarrels and rumors'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Background Music'
        }, 500);
    }

    else if (actControls == 4) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/sFX8VJe-9A4'
        document.getElementById('act-noti-text').innerText = 'act 04. one for Roxie, one for Harry'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 04. one for Roxie, one for Harry'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Poor Unfortunate Souls'
        }, 500);
    }

    else if (actControls == 5) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/XRHMPw8JQ2s'
        document.getElementById('act-noti-text').innerText = 'act 05. love is both life and death'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 05. love is both life and death'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'When He Sees Me'
        }, 500);
    }

    else if (actControls == 6) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/YXFHzRdpp9M'
        document.getElementById('act-noti-text').innerText = 'act 06. Roxie is the Witch!'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 06. Roxie is the Witch!'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Be Italian'
        }, 500);
    }

    else if (actControls == 7) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/nH84QqF-L7s'
        document.getElementById('act-noti-text').innerText = 'act 07. give him the Candy!'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 07. give him the Candy!'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = "Joke's On You"
        }, 500);
    }

    else if (actControls == 8) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 08. Layla is dead.'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 08. Layla is dead.'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Background Music'
        }, 500);
    }

    else if (actControls == 9) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 09. the second Wolf...'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 09. the second Wolf...'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Background Music'
        }, 500);
    }

    else if (actControls == 10) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/wqB_DWYpKQw'
        document.getElementById('act-noti-text').innerText = "act 10. Bonnie's memorabilia"
        setTimeout(()=> {
            document.getElementById('act-info').innerText = "act 10. Bonnie's memorabilia"
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = "How 'Bout A Dance"
        }, 500);
    }

    else if (actControls == 11) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/GU4eYLYNrWE'
        document.getElementById('act-noti-text').innerText = 'act 11. ...is auntie May.'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 11. ...is auntie May.'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'The Hearse Song'
        }, 500);
    }

    else if (actControls == 12) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 12. finding proof'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 12. finding proof'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Anyone'
        }, 500);
    }

    else if (actControls == 13) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/x5ynHFtpiM4'
        document.getElementById('act-noti-text').innerText = 'act 13. Execution Day'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 13. Execution Day'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Genius'
        }, 500);
    }

    else if (actControls == 14) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/nwym2hIDIZA'
        document.getElementById('act-noti-text').innerText = 'act 14. triumph celebration'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 14. triumph celebration'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = "I've Got a Dream"
        }, 500);
    }

    else if (actControls == 15) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 15. the end'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 15. the end... is yet to come'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Background Music'
        }, 500);
    }

    else if (actControls == 16) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/G0sgWxqO6rY'
        document.getElementById('act-noti-text').innerText = 'act 16. the cursed Wolf'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 16. the cursed Wolf'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = "How 'Bout A Dance (Reprise)"
        }, 500);
    }

    else if (actControls == 17) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/PogKs_PL2hQ'
        TweenMax.to('#next-act', 0, { delay: .2, display: 'none' });
        TweenMax.to('#next-act', 0, { delay: .2, opacity: 0 });
        document.getElementById('act-noti-text').innerText = 'act 17. at last'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 17. at last'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'Bac Lam Vuon x That Bat Ngo (reprise)'
        }, 500);
    }
})






document.getElementById('prev-act').addEventListener('click', () => {
    document.getElementById('iframe').src = ''
    TweenMax.to('#circle', 0, { zIndex: '100000'});
    TweenMax.to('#circle', 0, { delay: 2.7, zIndex: '50'});
    TweenMax.to(`#act-${actControls}-container`, 0, { delay: .3, display: 'none'});
    TweenMax.to('#pause', 0, { delay: .3, display: 'block', opacity: 1 });
    TweenMax.to('#play', 0, { delay: .3, display: 'none', opacity: 0 });
    document.getElementById(`music-tag-${actControls}`).pause();
    actControls -= 1;
    TweenMax.to(`#act-${actControls}-container`, 0, { delay: .3, display: 'block'});
    document.getElementById(`music-tag-${actControls}`).currentTime = 0;

    if (actControls == 1) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/79y0_TDVBgM'
        TweenMax.to('#prev-act', 0, { delay: .2, display: 'none' });
        TweenMax.to('#prev-act', 0, { delay: .2, opacity: 0 });
        document.getElementById('act-noti-text').innerText = "act 01. Protector's death"
        setTimeout(()=> {
            document.getElementById('act-info').innerText = "act 01. Protector's death"
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act1'
        }, 500);
    }

    if (actControls == 2) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/dTiWs67gcAs'
        document.getElementById('act-noti-text').innerText = 'act 02. Alice in the Wonderland'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 02. Alice in the Wonderland'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act2'
        }, 500);
    }

    else if (actControls == 3) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 03. quarrels and rumors'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 03. quarrels and rumors'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act3'
        }, 500);
    }

    else if (actControls == 4) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/sFX8VJe-9A4'
        document.getElementById('act-noti-text').innerText = 'act 04. one for Roxie, one for Harry'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 04. one for Roxie, one for Harry'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act4'
        }, 500);
    }

    else if (actControls == 5) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/XRHMPw8JQ2s'
        document.getElementById('act-noti-text').innerText = 'act 05. love is both life and death'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 05. love is both life and death'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act5'
        }, 500);
    }

    else if (actControls == 6) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/YXFHzRdpp9M'
        document.getElementById('act-noti-text').innerText = 'act 06. Roxie is the Witch!'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 06. Roxie is the Witch!'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act6'
        }, 500);
    }

    else if (actControls == 7) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/nH84QqF-L7s'
        document.getElementById('act-noti-text').innerText = 'act 07. give him the Candy!'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 07. give him the Candy!'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act7'
        }, 500);
    }

    else if (actControls == 8) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 08. Layla is dead.'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 08. Layla is dead.'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act8'
        }, 500);
    }

    else if (actControls == 9) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 09. the second Wolf...'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 09. the second Wolf...'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act9'
        }, 500);
    }

    else if (actControls == 10) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/wqB_DWYpKQw'
        document.getElementById('act-noti-text').innerText = "act 10. Bonnie's memorabilia"
        setTimeout(()=> {
            document.getElementById('act-info').innerText = "act 10. Bonnie's memorabilia"
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act10'
        }, 500);
    }

    else if (actControls == 11) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/GU4eYLYNrWE'
        document.getElementById('act-noti-text').innerText = 'act 11. ...is auntie May.'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 11. ...is auntie May.'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act11'
        }, 500);
    }

    else if (actControls == 12) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 12. finding proof'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 12. finding proof'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act12'
        }, 500);
    }

    else if (actControls == 13) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/x5ynHFtpiM4'
        document.getElementById('act-noti-text').innerText = 'act 13. Execution Day'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 13. Execution Day'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act13'
        }, 500);
    }

    else if (actControls == 14) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/nwym2hIDIZA'
        document.getElementById('act-noti-text').innerText = 'act 14. triumph celebration'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 14. triumph celebration'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act14'
        }, 500);
    }

    else if (actControls == 15) {
        document.getElementById('iframe').src = ''
        document.getElementById('act-noti-text').innerText = 'act 15. the end'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 15. the end... is yet to come'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act15'
        }, 500);
    }

    else if (actControls == 16) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/G0sgWxqO6rY'
        TweenMax.to('#next-act', 0, { delay: .2, display: 'block' });
        TweenMax.to('#next-act', 0, { delay: .2, opacity: 1 });
        document.getElementById('act-noti-text').innerText = 'act 16. the cursed Wolf'
        setTimeout(()=> {
            document.getElementById('act-info').innerText = 'act 16. the cursed Wolf'
        }, 500)
        for (i = 1; i < 18; i++) {
            document.getElementById(`music-tag-${i}`).pause();
        }
        document.getElementById(`music-tag-${actControls}`).play();
        setTimeout(()=> {
            document.getElementById('play-now').innerText = 'act16'
        }, 500);
    }

    TweenMax.to('.act-noti', .3, { opacity: 1 });
    TweenMax.to('.act-noti', 0, { display: 'flex' });
    TweenMax.to('.act-noti', .3, { delay: 2.7, opacity: 0 });
    TweenMax.to('.act-noti', 0, { delay: 3, display: 'none' });
})









document.getElementById('menu').addEventListener('click', () => {
    TweenMax.to('.blur-panel', 0, { zIndex: '2000' });
    TweenMax.to('.menu-container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '-30vw', ease: Power4.easeInOut, webkitFilter: 'blur(8px)' });
    TweenMax.to('#volume-on', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('#volume-off', 1.1, { x: '-30vw', ease: Power4.easeInOut });
    TweenMax.to('#act-info', 0.6, { delay: .2, opacity: 0 });
    TweenMax.to('#circle', .2, { opacity: 0 });
    TweenMax.to('#circle', 0, { delay: .2, display: 'none' });
});

document.getElementById('close').addEventListener('click', () => {
    TweenMax.to('.blur-panel', 0, { delay: 1.1, zIndex: '-1' });
    TweenMax.to('.menu-container', 1.1, { x: '30vw', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut, webkitFilter: 'blur(0px)' });
    TweenMax.to('#volume-on', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#volume-off', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('#act-info', 1.1, { delay: .5, opacity: 1 });
    TweenMax.to('#circle', .2, { delay: 1.1, opacity: 1 });
    TweenMax.to('#circle', 0, { display: 'block' });
});

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






var act1 = 1;
document.getElementById('img-next-1').addEventListener('click', () => {
    act1 += 1;
    TweenMax.to('#img-prev-1', .3, { opacity: 1 });
    TweenMax.to('#img-prev-1', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-1-img').src = `/img/act01/${act1}.jpg`;
    }, 300)
    if (act1 > 5) {
        TweenMax.to('#img-next-1', .3, { opacity: 0 });
        TweenMax.to('#img-next-1', 0, { delay: .3, display: 'none' });
    } else if (act1 == 5) {
        TweenMax.to('#img-next-1', .3, { opacity: 0 });
        TweenMax.to('#img-next-1', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-1').addEventListener('click', () => {
    act1 -= 1;
    TweenMax.to('#img-next-1', .3, { opacity: 1 });
    TweenMax.to('#img-next-1', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-1-img').src = `/img/act01/${act1}.jpg`;
    }, 300)
    if (act1 < 1) {
        TweenMax.to('#img-prev-1', .3, { opacity: 0 });
        TweenMax.to('#img-prev-1', 0, { delay: .3, display: 'none' });
    } else if (act1 == 1) {
        TweenMax.to('#img-prev-1', .3, { opacity: 0 });
        TweenMax.to('#img-prev-1', 0, { delay: .3, display: 'none' });
    }
})

var act2 = 1;
document.getElementById('img-next-2').addEventListener('click', () => {
    act2 += 1;
    TweenMax.to('#img-prev-2', .3, { opacity: 1 });
    TweenMax.to('#img-prev-2', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-2-img').src = `/img/act02/${act2}.jpg`;
    }, 300)
    if (act2 > 5) {
        TweenMax.to('#img-next-2', .3, { opacity: 0 });
        TweenMax.to('#img-next-2', 0, { delay: .3, display: 'none' });
    } else if (act2 == 5) {
        TweenMax.to('#img-next-2', .3, { opacity: 0 });
        TweenMax.to('#img-next-2', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-2').addEventListener('click', () => {
    act2 -= 1;
    TweenMax.to('#img-next-2', .3, { opacity: 1 });
    TweenMax.to('#img-next-2', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-2-img').src = `/img/act02/${act2}.jpg`;
    }, 300)
    if (act2 < 1) {
        TweenMax.to('#img-prev-2', .3, { opacity: 0 });
        TweenMax.to('#img-prev-2', 0, { delay: .3, display: 'none' });
    } else if (act2 == 1) {
        TweenMax.to('#img-prev-2', .3, { opacity: 0 });
        TweenMax.to('#img-prev-2', 0, { delay: .3, display: 'none' });
    }
})

var act3 = 1;
document.getElementById('img-next-3').addEventListener('click', () => {
    act3 += 1;
    TweenMax.to('#img-prev-3', .3, { opacity: 1 });
    TweenMax.to('#img-prev-3', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-3-img').src = `/img/act03/${act3}.jpg`;
    }, 300)
    if (act3 > 6) {
        TweenMax.to('#img-next-3', .3, { opacity: 0 });
        TweenMax.to('#img-next-3', 0, { delay: .3, display: 'none' });
    } else if (act3 == 6) {
        TweenMax.to('#img-next-3', .3, { opacity: 0 });
        TweenMax.to('#img-next-3', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-3').addEventListener('click', () => {
    act3 -= 1;
    TweenMax.to('#img-next-3', .3, { opacity: 1 });
    TweenMax.to('#img-next-3', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-3-img').src = `/img/act03/${act3}.jpg`;
    }, 300)
    if (act3 < 1) {
        TweenMax.to('#img-prev-3', .3, { opacity: 0 });
        TweenMax.to('#img-prev-3', 0, { delay: .3, display: 'none' });
    } else if (act3 == 1) {
        TweenMax.to('#img-prev-3', .3, { opacity: 0 });
        TweenMax.to('#img-prev-3', 0, { delay: .3, display: 'none' });
    }
})

var act4 = 1;
document.getElementById('img-next-4').addEventListener('click', () => {
    act4 += 1;
    TweenMax.to('#img-prev-4', .3, { opacity: 1 });
    TweenMax.to('#img-prev-4', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-4-img').src = `/img/act04/${act4}.jpg`;
    }, 300)
    if (act4 > 3) {
        TweenMax.to('#img-next-4', .3, { opacity: 0 });
        TweenMax.to('#img-next-4', 0, { delay: .3, display: 'none' });
    } else if (act4 == 3) {
        TweenMax.to('#img-next-4', .3, { opacity: 0 });
        TweenMax.to('#img-next-4', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-4').addEventListener('click', () => {
    act4 -= 1;
    TweenMax.to('#img-next-4', .3, { opacity: 1 });
    TweenMax.to('#img-next-4', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-4-img').src = `/img/act04/${act4}.jpg`;
    }, 300)
    if (act4 < 1) {
        TweenMax.to('#img-prev-4', .3, { opacity: 0 });
        TweenMax.to('#img-prev-4', 0, { delay: .3, display: 'none' });
    } else if (act4 == 1) {
        TweenMax.to('#img-prev-4', .3, { opacity: 0 });
        TweenMax.to('#img-prev-4', 0, { delay: .3, display: 'none' });
    }
})

var act5 = 1;
document.getElementById('img-next-5').addEventListener('click', () => {
    act5 += 1;
    TweenMax.to('#img-prev-5', .3, { opacity: 1 });
    TweenMax.to('#img-prev-5', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-5-img').src = `/img/act05/${act5}.jpg`;
    }, 300)
    if (act5 > 4) {
        TweenMax.to('#img-next-5', .3, { opacity: 0 });
        TweenMax.to('#img-next-5', 0, { delay: .3, display: 'none' });
    } else if (act5 == 4) {
        TweenMax.to('#img-next-5', .3, { opacity: 0 });
        TweenMax.to('#img-next-5', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-5').addEventListener('click', () => {
    act5 -= 1;
    TweenMax.to('#img-next-5', .3, { opacity: 1 });
    TweenMax.to('#img-next-5', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-5-img').src = `/img/act05/${act5}.jpg`;
    }, 300)
    if (act5 < 1) {
        TweenMax.to('#img-prev-5', .3, { opacity: 0 });
        TweenMax.to('#img-prev-5', 0, { delay: .3, display: 'none' });
    } else if (act5 == 1) {
        TweenMax.to('#img-prev-5', .3, { opacity: 0 });
        TweenMax.to('#img-prev-5', 0, { delay: .3, display: 'none' });
    }
})

var act6 = 1;
document.getElementById('img-next-6').addEventListener('click', () => {
    act6 += 1;
    TweenMax.to('#img-prev-6', .3, { opacity: 1 });
    TweenMax.to('#img-prev-6', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-6-img').src = `/img/act06/${act6}.jpg`;
    }, 300)
    if (act6 > 6) {
        TweenMax.to('#img-next-6', .3, { opacity: 0 });
        TweenMax.to('#img-next-6', 0, { delay: .3, display: 'none' });
    } else if (act6 == 6) {
        TweenMax.to('#img-next-6', .3, { opacity: 0 });
        TweenMax.to('#img-next-6', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-6').addEventListener('click', () => {
    act6 -= 1;
    TweenMax.to('#img-next-6', .3, { opacity: 1 });
    TweenMax.to('#img-next-6', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-6-img').src = `/img/act06/${act6}.jpg`;
    }, 300)
    if (act6 < 1) {
        TweenMax.to('#img-prev-6', .3, { opacity: 0 });
        TweenMax.to('#img-prev-6', 0, { delay: .3, display: 'none' });
    } else if (act6 == 1) {
        TweenMax.to('#img-prev-6', .3, { opacity: 0 });
        TweenMax.to('#img-prev-6', 0, { delay: .3, display: 'none' });
    }
})

var act7 = 1;
document.getElementById('img-next-7').addEventListener('click', () => {
    act7 += 1;
    TweenMax.to('#img-prev-7', .3, { opacity: 1 });
    TweenMax.to('#img-prev-7', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-7-img').src = `/img/act07/${act7}.jpg`;
    }, 300)
    if (act7 > 6) {
        TweenMax.to('#img-next-7', .3, { opacity: 0 });
        TweenMax.to('#img-next-7', 0, { delay: .3, display: 'none' });
    } else if (act7 == 6) {
        TweenMax.to('#img-next-7', .3, { opacity: 0 });
        TweenMax.to('#img-next-7', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-7').addEventListener('click', () => {
    act7 -= 1;
    TweenMax.to('#img-next-7', .3, { opacity: 1 });
    TweenMax.to('#img-next-7', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-7-img').src = `/img/act07/${act7}.jpg`;
    }, 300)
    if (act7 < 1) {
        TweenMax.to('#img-prev-7', .3, { opacity: 0 });
        TweenMax.to('#img-prev-7', 0, { delay: .3, display: 'none' });
    } else if (act7 == 1) {
        TweenMax.to('#img-prev-7', .3, { opacity: 0 });
        TweenMax.to('#img-prev-7', 0, { delay: .3, display: 'none' });
    }
})

// var act8 = 1;
// document.getElementById('img-next-8').addEventListener('click', () => {
//     act8 += 1;
//     TweenMax.to('#img-prev-8', .3, { opacity: 1 });
//     TweenMax.to('#img-prev-8', 0, { display: 'block' });
//     TweenMax.to('.act-img', .3, { opacity: 0 });
//     TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
//     setTimeout(() => {
//         document.getElementById('act-8-img').src = `/img/act08/${act8}.jpg`;
//     }, 300)
//     if (act8 > 1) {
//         TweenMax.to('#img-next-8', .3, { opacity: 0 });
//         TweenMax.to('#img-next-8', 0, { delay: .3, display: 'none' });
//     } else if (act8 == 1) {
//         TweenMax.to('#img-next-8', .3, { opacity: 0 });
//         TweenMax.to('#img-next-8', 0, { delay: .3, display: 'none' });
//     }
// })

// document.getElementById('img-prev-8').addEventListener('click', () => {
//     act8 -= 1;
//     TweenMax.to('#img-next-8', .3, { opacity: 1 });
//     TweenMax.to('#img-next-8', 0, { display: 'block' });
//     TweenMax.to('.act-img', .3, { opacity: 0 });
//     TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
//     setTimeout(() => {
//         document.getElementById('act-8-img').src = `/img/act08/${act8}.jpg`;
//     }, 300)
//     if (act8 < 1) {
//         TweenMax.to('#img-prev-8', .3, { opacity: 0 });
//         TweenMax.to('#img-prev-8', 0, { delay: .3, display: 'none' });
//     } else if (act8 == 1) {
//         TweenMax.to('#img-prev-8', .3, { opacity: 0 });
//         TweenMax.to('#img-prev-8', 0, { delay: .3, display: 'none' });
//     }
// })

var act9 = 1;
document.getElementById('img-next-9').addEventListener('click', () => {
    act9 += 1;
    TweenMax.to('#img-prev-9', .3, { opacity: 1 });
    TweenMax.to('#img-prev-9', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-9-img').src = `/img/act09/${act9}.jpg`;
    }, 300)
    if (act9 > 5) {
        TweenMax.to('#img-next-9', .3, { opacity: 0 });
        TweenMax.to('#img-next-9', 0, { delay: .3, display: 'none' });
    } else if (act9 == 5) {
        TweenMax.to('#img-next-9', .3, { opacity: 0 });
        TweenMax.to('#img-next-9', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-9').addEventListener('click', () => {
    act9 -= 1;
    TweenMax.to('#img-next-9', .3, { opacity: 1 });
    TweenMax.to('#img-next-9', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-9-img').src = `/img/act09/${act9}.jpg`;
    }, 300)
    if (act9 < 1) {
        TweenMax.to('#img-prev-9', .3, { opacity: 0 });
        TweenMax.to('#img-prev-9', 0, { delay: .3, display: 'none' });
    } else if (act9 == 1) {
        TweenMax.to('#img-prev-9', .3, { opacity: 0 });
        TweenMax.to('#img-prev-9', 0, { delay: .3, display: 'none' });
    }
})

var act10 = 1;
document.getElementById('img-next-10').addEventListener('click', () => {
    act10 += 1;
    TweenMax.to('#img-prev-10', .3, { opacity: 1 });
    TweenMax.to('#img-prev-10', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-10-img').src = `/img/act10/${act10}.jpg`;
    }, 300)
    if (act10 > 6) {
        TweenMax.to('#img-next-10', .3, { opacity: 0 });
        TweenMax.to('#img-next-10', 0, { delay: .3, display: 'none' });
    } else if (act10 == 6) {
        TweenMax.to('#img-next-10', .3, { opacity: 0 });
        TweenMax.to('#img-next-10', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-10').addEventListener('click', () => {
    act10 -= 1;
    TweenMax.to('#img-next-10', .3, { opacity: 1 });
    TweenMax.to('#img-next-10', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-10-img').src = `/img/act10/${act10}.jpg`;
    }, 300)
    if (act10 < 1) {
        TweenMax.to('#img-prev-10', .3, { opacity: 0 });
        TweenMax.to('#img-prev-10', 0, { delay: .3, display: 'none' });
    } else if (act10 == 1) {
        TweenMax.to('#img-prev-10', .3, { opacity: 0 });
        TweenMax.to('#img-prev-10', 0, { delay: .3, display: 'none' });
    }
})

var act11 = 1;
document.getElementById('img-next-11').addEventListener('click', () => {
    act11 += 1;
    TweenMax.to('#img-prev-11', .3, { opacity: 1 });
    TweenMax.to('#img-prev-11', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-11-img').src = `/img/act11/${act11}.jpg`;
    }, 300)
    if (act11 > 4) {
        TweenMax.to('#img-next-11', .3, { opacity: 0 });
        TweenMax.to('#img-next-11', 0, { delay: .3, display: 'none' });
    } else if (act11 == 4) {
        TweenMax.to('#img-next-11', .3, { opacity: 0 });
        TweenMax.to('#img-next-11', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-11').addEventListener('click', () => {
    act11 -= 1;
    TweenMax.to('#img-next-11', .3, { opacity: 1 });
    TweenMax.to('#img-next-11', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-11-img').src = `/img/act11/${act11}.jpg`;
    }, 300)
    if (act11 < 1) {
        TweenMax.to('#img-prev-11', .3, { opacity: 0 });
        TweenMax.to('#img-prev-11', 0, { delay: .3, display: 'none' });
    } else if (act11 == 1) {
        TweenMax.to('#img-prev-11', .3, { opacity: 0 });
        TweenMax.to('#img-prev-11', 0, { delay: .3, display: 'none' });
    }
})

var act12 = 1;
document.getElementById('img-next-12').addEventListener('click', () => {
    act12 += 1;
    TweenMax.to('#img-prev-12', .3, { opacity: 1 });
    TweenMax.to('#img-prev-12', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-12-img').src = `/img/act12/${act12}.jpg`;
    }, 300)
    if (act12 > 7) {
        TweenMax.to('#img-next-12', .3, { opacity: 0 });
        TweenMax.to('#img-next-12', 0, { delay: .3, display: 'none' });
    } else if (act12 == 7) {
        TweenMax.to('#img-next-12', .3, { opacity: 0 });
        TweenMax.to('#img-next-12', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-12').addEventListener('click', () => {
    act12 -= 1;
    TweenMax.to('#img-next-12', .3, { opacity: 1 });
    TweenMax.to('#img-next-12', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-12-img').src = `/img/act12/${act12}.jpg`;
    }, 300)
    if (act12 < 1) {
        TweenMax.to('#img-prev-12', .3, { opacity: 0 });
        TweenMax.to('#img-prev-12', 0, { delay: .3, display: 'none' });
    } else if (act12 == 1) {
        TweenMax.to('#img-prev-12', .3, { opacity: 0 });
        TweenMax.to('#img-prev-12', 0, { delay: .3, display: 'none' });
    }
})

var act13 = 1;
document.getElementById('img-next-13').addEventListener('click', () => {
    act13 += 1;
    TweenMax.to('#img-prev-13', .3, { opacity: 1 });
    TweenMax.to('#img-prev-13', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-13-img').src = `/img/act13/${act13}.jpg`;
    }, 300)
    if (act13 > 6) {
        TweenMax.to('#img-next-13', .3, { opacity: 0 });
        TweenMax.to('#img-next-13', 0, { delay: .3, display: 'none' });
    } else if (act13 == 6) {
        TweenMax.to('#img-next-13', .3, { opacity: 0 });
        TweenMax.to('#img-next-13', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-13').addEventListener('click', () => {
    act13 -= 1;
    TweenMax.to('#img-next-13', .3, { opacity: 1 });
    TweenMax.to('#img-next-13', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-13-img').src = `/img/act13/${act13}.jpg`;
    }, 300)
    if (act13 < 1) {
        TweenMax.to('#img-prev-13', .3, { opacity: 0 });
        TweenMax.to('#img-prev-13', 0, { delay: .3, display: 'none' });
    } else if (act13 == 1) {
        TweenMax.to('#img-prev-13', .3, { opacity: 0 });
        TweenMax.to('#img-prev-13', 0, { delay: .3, display: 'none' });
    }
})

var act14 = 1;
document.getElementById('img-next-14').addEventListener('click', () => {
    act14 += 1;
    TweenMax.to('#img-prev-14', .3, { opacity: 1 });
    TweenMax.to('#img-prev-14', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-14-img').src = `/img/act14/${act14}.jpg`;
    }, 300)
    if (act14 > 5) {
        TweenMax.to('#img-next-14', .3, { opacity: 0 });
        TweenMax.to('#img-next-14', 0, { delay: .3, display: 'none' });
    } else if (act14 == 5) {
        TweenMax.to('#img-next-14', .3, { opacity: 0 });
        TweenMax.to('#img-next-14', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-14').addEventListener('click', () => {
    act14 -= 1;
    TweenMax.to('#img-next-14', .3, { opacity: 1 });
    TweenMax.to('#img-next-14', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-14-img').src = `/img/act14/${act14}.jpg`;
    }, 300)
    if (act14 < 1) {
        TweenMax.to('#img-prev-14', .3, { opacity: 0 });
        TweenMax.to('#img-prev-14', 0, { delay: .3, display: 'none' });
    } else if (act14 == 1) {
        TweenMax.to('#img-prev-14', .3, { opacity: 0 });
        TweenMax.to('#img-prev-14', 0, { delay: .3, display: 'none' });
    }
})

var act15 = 1;
document.getElementById('img-next-15').addEventListener('click', () => {
    act15 += 1;
    TweenMax.to('#img-prev-15', .3, { opacity: 1 });
    TweenMax.to('#img-prev-15', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-15-img').src = `/img/act15/${act15}.jpg`;
    }, 300)
    if (act15 > 3) {
        TweenMax.to('#img-next-15', .3, { opacity: 0 });
        TweenMax.to('#img-next-15', 0, { delay: .3, display: 'none' });
    } else if (act15 == 3) {
        TweenMax.to('#img-next-15', .3, { opacity: 0 });
        TweenMax.to('#img-next-15', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-15').addEventListener('click', () => {
    act15 -= 1;
    TweenMax.to('#img-next-15', .3, { opacity: 1 });
    TweenMax.to('#img-next-15', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-15-img').src = `/img/act15/${act15}.jpg`;
    }, 300)
    if (act15 < 1) {
        TweenMax.to('#img-prev-15', .3, { opacity: 0 });
        TweenMax.to('#img-prev-15', 0, { delay: .3, display: 'none' });
    } else if (act15 == 1) {
        TweenMax.to('#img-prev-15', .3, { opacity: 0 });
        TweenMax.to('#img-prev-15', 0, { delay: .3, display: 'none' });
    }
})

var act16 = 1;
document.getElementById('img-next-16').addEventListener('click', () => {
    act16 += 1;
    TweenMax.to('#img-prev-16', .3, { opacity: 1 });
    TweenMax.to('#img-prev-16', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-16-img').src = `/img/act16/${act16}.jpg`;
    }, 300)
    if (act16 > 12) {
        TweenMax.to('#img-next-16', .3, { opacity: 0 });
        TweenMax.to('#img-next-16', 0, { delay: .3, display: 'none' });
    } else if (act16 == 12) {
        TweenMax.to('#img-next-16', .3, { opacity: 0 });
        TweenMax.to('#img-next-16', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-16').addEventListener('click', () => {
    act16 -= 1;
    TweenMax.to('#img-next-16', .3, { opacity: 1 });
    TweenMax.to('#img-next-16', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-16-img').src = `/img/act16/${act16}.jpg`;
    }, 300)
    if (act16 < 1) {
        TweenMax.to('#img-prev-16', .3, { opacity: 0 });
        TweenMax.to('#img-prev-16', 0, { delay: .3, display: 'none' });
    } else if (act16 == 1) {
        TweenMax.to('#img-prev-16', .3, { opacity: 0 });
        TweenMax.to('#img-prev-16', 0, { delay: .3, display: 'none' });
    }
})

var act17 = 1;
document.getElementById('img-next-17').addEventListener('click', () => {
    act17 += 1;
    TweenMax.to('#img-prev-17', .3, { opacity: 1 });
    TweenMax.to('#img-prev-17', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-17-img').src = `/img/act17/${act17}.jpg`;
    }, 300)
    if (act17 > 4) {
        TweenMax.to('#img-next-17', .3, { opacity: 0 });
        TweenMax.to('#img-next-17', 0, { delay: .3, display: 'none' });
    } else if (act17 == 4) {
        TweenMax.to('#img-next-17', .3, { opacity: 0 });
        TweenMax.to('#img-next-17', 0, { delay: .3, display: 'none' });
    }
})

document.getElementById('img-prev-17').addEventListener('click', () => {
    act17 -= 1;
    TweenMax.to('#img-next-17', .3, { opacity: 1 });
    TweenMax.to('#img-next-17', 0, { display: 'block' });
    TweenMax.to('.act-img', .3, { opacity: 0 });
    TweenMax.to('.act-img', .3, { delay: .7, opacity: 1 });
    setTimeout(() => {
        document.getElementById('act-17-img').src = `/img/act17/${act17}.jpg`;
    }, 300)
    if (act17 < 1) {
        TweenMax.to('#img-prev-17', .3, { opacity: 0 });
        TweenMax.to('#img-prev-17', 0, { delay: .3, display: 'none' });
    } else if (act17 == 1) {
        TweenMax.to('#img-prev-17', .3, { opacity: 0 });
        TweenMax.to('#img-prev-17', 0, { delay: .3, display: 'none' });
    }
})


for (i=0; i<17; i++) {
    document.getElementsByClassName('act-text')[i].addEventListener('mouseover', ()=> {
        TweenMax.to('#scroll-to-read', .3, { opacity: 1});
    })

    document.getElementsByClassName('act-text')[i].addEventListener('mouseout', ()=> {
        TweenMax.to('#scroll-to-read', .3, { opacity: 0});
    })
}


document.getElementById('close-vid-ac').addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('iframe-ac').src = ''
    }, 550);
    TweenMax.to('#close-vid-ac', .3, { opacity: 0 });
    TweenMax.to('#close-vid-ac', 0, { delay: .5, opacity: 1 });
    TweenMax.to('.after-credit-video', .5, { ease: Back.easeIn.config(1.7), y: '-111vh' });
    TweenMax.to('.after-credit-video', 0, { delay: .5, display: 'none' })
})

document.getElementById('after-credit').addEventListener('click', () => {
    document.getElementById('iframe-ac').src = 'https://www.youtube.com/embed/txc5sMJwBJM'
    for (i = 1; i < 18; i++) {
        document.getElementById(`music-tag-${i}`).pause();
    }
    TweenMax.to('#pause', .3, { opacity: 0});
    TweenMax.to('#pause', 0, { delay: .3, display: 'none'});
    TweenMax.to('#play', 0, { delay: .3, display: 'block'});
    TweenMax.to('#play', .3, { delay: .3, opacity: 1});
    TweenMax.to('.after-credit-video', 0, { display: 'flex' });
    TweenMax.to('.after-credit-video', .7, { ease: Power4.easeOut, y: 0 });
    TweenMax.to('#close-vid', .1, { scale: 1.5, ease: Power4.easeIn });
    TweenMax.to('#close-vid', .1, { delay: .2, scale: 1, ease: Power4.easeIn });
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

document.getElementsByClassName('youtube')[0].addEventListener('click', () => {
    for (i = 1; i < 18; i++) {
        document.getElementById(`music-tag-${i}`).pause();
    }
    TweenMax.to('#pause', .3, { opacity: 0});
    TweenMax.to('#pause', 0, { delay: .3, display: 'none'});
    TweenMax.to('#play', 0, { delay: .3, display: 'block'});
    TweenMax.to('#play', .3, { delay: .3, opacity: 1});
    TweenMax.to('.video-container', 0, { display: 'flex' });
    TweenMax.to('.video-container', .7, { ease: Power4.easeOut, y: 0 });
    TweenMax.to('#close-vid', .1, { scale: 1.5, ease: Power4.easeIn });
    TweenMax.to('#close-vid', .1, { delay: .2, scale: 1, ease: Power4.easeIn });
})

document.getElementsByClassName('youtube')[0].addEventListener('click', () => {
    if (actControls == 1) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/79y0_TDVBgM'
    }

    else if (actControls == 2) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/dTiWs67gcAs'
    }

    else if (actControls == 3) {
        document.getElementById('iframe').src = ''
    }

    else if (actControls == 4) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/sFX8VJe-9A4'
    }

    else if (actControls == 5) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/XRHMPw8JQ2s'
    }

    else if (actControls == 6) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/YXFHzRdpp9M'
    }

    else if (actControls == 7) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/nH84QqF-L7s'
    }

    else if (actControls == 8) {
        document.getElementById('iframe').src = ''
    }

    else if (actControls == 9) {
        document.getElementById('iframe').src = ''
    }

    else if (actControls == 10) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/wqB_DWYpKQw'
    }

    else if (actControls == 11) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/GU4eYLYNrWE'
    }

    else if (actControls == 12) {
        document.getElementById('iframe').src = ''
    }

    else if (actControls == 13) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/x5ynHFtpiM4'
    }

    else if (actControls == 14) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/nwym2hIDIZA'
    }

    else if (actControls == 15) {
        document.getElementById('iframe').src = ''
    }

    else if (actControls == 16) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/G0sgWxqO6rY'
    }

    else if (actControls == 17) {
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/PogKs_PL2hQ'
    }
})

for (i = 0; i < 5; i ++) {
    document.getElementsByClassName('rotate-on-hover')[i].addEventListener('mouseover', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'white' });
    })
    
    document.getElementsByClassName('rotate-on-hover')[i].addEventListener('mouseout', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
    })
}

for (i = 0; i <17; i++) {
    document.getElementsByClassName('img-next')[i].addEventListener('mouseover', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'white' });
    })
    
    document.getElementsByClassName('img-next')[i].addEventListener('mouseout', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
    })

    document.getElementsByClassName('img-prev')[i].addEventListener('mouseover', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'white' });
    })
    
    document.getElementsByClassName('img-prev')[i].addEventListener('mouseout', () => {
        TweenMax.to('#circle', .3, { backgroundColor: 'transparent' });
    })
}

document.getElementById('title').addEventListener('click', ()=> {
    TweenMax.to('.menu-container', 1.1, { x: '30vw', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('.change-site', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('.change-site', 0, { delay: 1.6, display: 'none' });
    TweenMax.to('.container', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('.container', 0, { delay: 1.6, display: 'none' });
    TweenMax.to('#menu', 0, { display: 'none' });
    setTimeout(()=> {
        document.location.href = 'index.html'
    }, 1800)
})

document.getElementById('nav-music').addEventListener('click', ()=> {
    TweenMax.to('.menu-container', 1.1, { x: '30vw', ease: Power4.easeInOut });
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut });
    TweenMax.to('.change-site', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('.change-site', 0, { delay: 1.6, display: 'none' });
    TweenMax.to('.container', .5, { delay: 1.1, opacity: 0 });
    TweenMax.to('.container', 0, { delay: 1.6, display: 'none' });
    TweenMax.to('#menu', 0, { display: 'none' });
    setTimeout(()=> {
        document.location.href = 'music.html'
    }, 1800)
})