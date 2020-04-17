
    var swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            if(index == 0){
                return '<span class="' + className + '">Log Analysis<div></div></span>';
            } else if(index == 1) {
                return '<span class="' + className + '">Continuous Monitoring<div></div></span>';
            } else if(index == 2) {
                return '<span class="' + className + '">Threat Hunting<div></div></span>';
            } else if(index == 3) {
                return '<span class="' + className + '">Incident Investigation<div></div></span>';
            } else if(index == 4) {
                return '<span class="' + className + '">Automatic Remediation<div></div></span>';
            } else if(index == 5) {
                return '<span class="' + className + '">Historical Search<div></div></span>';
            }
        },
      },
    });
 