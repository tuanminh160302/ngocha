var Scrollbar = window.Scrollbar;

var options = {
    'damping': 0.05,
    // 'alwaysShowTracks': true
}

Scrollbar.init(document.querySelector('#act-text'), options);
Scrollbar.init(document.querySelector('#momentum-scroll'), options);