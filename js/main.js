(function () {
	let $window = $(window)
	let $doc = $(document)

	$doc.ready(function() {
		let header = $('.header')
		let nav = $('.nav')
		let btn = $('.btn-menu')

		// Fixed header
	    $window.on("scroll", function() {
	    	let scrollTop = $window.scrollTop()

	        if (scrollTop > 0) {
	            header.addClass("header-fixed");
	        } else {
	            header.removeClass("header-fixed");
	        }
	    });

	    // Navigation toggler
	    $('.btn-menu').click(function(e) {
	    	e.preventDefault()
	    	nav.toggleClass('nav-open')
	    	btn.toggleClass('open')
	    })

	    // Slick slider testimonials
	    $('.slider__testimonials').slick({
     		infinite: true,
  			slidesToShow: 3,
  			slidesToScroll: 3,
  			dots: true,
  			arrows: false,
  			responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
            ]
  		});

		// Slick slider testimonials
  		$('.slider__services').slick({
     		infinite: true,
  			slidesToShow: 3,
  			slidesToScroll: 1,
  			dots: false,
  			arrows: true,
  		});

  		responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 650,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                  }
                },
            ]

  		var $slider = $('.slider__services');

		if ($slider.length) {
  		var currentSlide;
  		var slidesCount;
  		var sliderCounter = document.createElement('div');
  		sliderCounter.classList.add('slider__counter');
  
  		var updateSliderCounter = function(slick, currentIndex) {
    		currentSlide = slick.slickCurrentSlide() + 1;
    		slidesCount = slick.slideCount;
    		$(sliderCounter).text(currentSlide + '/' +slidesCount)
  		};

 		 $slider.on('init', function(event, slick) {
    		$slider.append(sliderCounter);
    		updateSliderCounter(slick);
  		});

 		 $slider.on('afterChange', function(event, slick, currentSlide) {
    		updateSliderCounter(slick, currentSlide);
  		});

  		$slider.slick();
		}
	})
}());

