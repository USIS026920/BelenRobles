(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: [typed_strings],
            typeSpeed: 30,
            backSpeed: 0,
            smartBackspace: false,
            loop: false,
            autoPause: false
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    $(document).ready(function(){
      let langs = ['es', 'en'];
      var selector = '#translate';
      $(selector).on('click', function(e){
        e.preventDefault();
        startLang( $(this) );
      });

      let startLang = function(el){
        var el = $(el);
        var index = el.attr('data-index');
        if(index >= langs.length){
          index = 0;
        }
        if (index == 0) {
          document.getElementById('cv').src = 'docs/cv.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=100';
          document.getElementById('alcir-link').href = './docs/Alcir.pdf';
          document.getElementById('oscar-link').href = './docs/Oscar.pdf';
          document.getElementById('cordero-link').href = './docs/Cordero.pdf';
          document.getElementById('marvin-link').href = './docs/Marvin.pdf';
          document.getElementById('yancy-link').href = './docs/Yancy.pdf';
          document.getElementById('alcir-img').src = './img/Alcir.jpg';
          document.getElementById('oscar-img').src = './img/Oscar.jpg';
          document.getElementById('cordero-img').src = './img/Cordero.jpg';
          document.getElementById('marvin-img').src = './img/Marvin.jpg';
          document.getElementById('yancy-img').src = './img/Yancy.jpg';
        } else if (index == 1) {
          document.getElementById('cv').src = 'docs/cv.en.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=100';
          document.getElementById('alcir-link').href = './docs/Alcir.en.pdf';
          document.getElementById('oscar-link').href = './docs/Oscar.en.pdf';
          document.getElementById('cordero-link').href = './docs/Cordero.en.pdf';
          document.getElementById('marvin-link').href = './docs/Marvin.en.pdf';
          document.getElementById('yancy-link').href = './docs/Yancy.en.pdf';
          document.getElementById('alcir-img').src = './img/Alcir.en.jpg';
          document.getElementById('oscar-img').src = './img/Oscar.en.jpg';
          document.getElementById('cordero-img').src = './img/Cordero.en.jpg';
          document.getElementById('marvin-img').src = './img/Marvin.en.jpg';
          document.getElementById('yancy-img').src = './img/Yancy.en.jpg';
        }
        changeIndex(el, index);
        loadLang(langs[index]);
        document.documentElement.setAttribute('lang', langs[index]);
        console.log(el.attr('data-index'));
        el.attr('data-index', index == 0 ? 1 : 0);
      };

      let changeIndex = function(el, index){
        localStorage.setItem('lang', index)
      };

      let loadLang = function(lang){
        let json;
        if (lang === 'es') {
          json = es;
          document.getElementById('translate').innerText = "Español";
        } else if (lang === 'en') {
          json = en;
          document.getElementById('translate').innerText = "English";
        }

        Object.keys(json).forEach(function(key) {
          assignText(key, json[key]);
        });

      };
      let assignText = function(key, value){
        document.querySelectorAll('[data-lang="'+key+'"]').forEach(function(element) {
          element.innerHTML = value;
        });
      };
      
    });
    
})(jQuery);

