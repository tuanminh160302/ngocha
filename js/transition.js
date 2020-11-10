document.getElementById('h1').addEventListener('click', function () {
    console.log('worked');
    controls.autoRotateSpeed = 50;
    controls.autoRotate = true;
    setTimeout(function () {
        controls.autoRotate = false;
    }, 500)
    // camera.position.set( 4000, 4000, 0 );



    // TweenMax.to('#car-canvas', 1.1, { delay: 0.5, x: '-100%', ease: Power4.easeIn});
    // TweenMax.to('#car-canvas', 1.1, { delay: 2.5, x: '0%', ease: Power4.easeOut});
})

