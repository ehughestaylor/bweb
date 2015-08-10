    function goToSection(){
      $('.indicator-btn').on('click', function(){
        $('.indicator-btn').children().removeClass('fa-minus active');
        $(this).children().addClass('fa-minus active');
      });
      $('.git-btn').on('click', function(){
        $('.git-slide').siblings().removeClass('active');
        $(this).children().addClass('active');
        $('.git-slide').addClass('active animated bounceInDown');
      });
      $('.contact-btn').on('click', function(){
        $('.contact-slide').siblings().removeClass('active');
        $(this).children().addClass('active');
        $('.contact-slide').addClass('active animated bounceInDown');
      });
      $('.portfolio-btn').on('click', function(){
        $('.portfolio-slide').siblings().removeClass('active');
        $(this).children().addClass('active');
        $('.portfolio-slide').addClass('active animated bounceInDown');
      });
      $('.resume-btn').on('click', function(){
        $('.resume-slide').siblings().removeClass('active');
        $(this).children().addClass('active');
        $('.resume-slide').addClass('active animated bounceInDown');
      });

    }

    $(document).ready(function(){
      $(".button-collapse").sideNav();
      $('.modal-trigger').leanModal();
      $('.button-collapse').on('mouseenter',function(){
        $('.fa-circle-thin').removeClass('fa-circle-thin').addClass('fa-circle');
      });
      $('.button-collapse').on('mouseleave',function(){
        $('.fa-circle').removeClass('fa-circle').addClass('fa-circle-thin');
      });
      $('.slider').slider({
        full_width: true,
        indicators:false
      });
      goToSection();
      
      $(".typed-statement").typed({
        strings: ["<p class='typed-words'>Programmer.</p>", "<p class='typed-words'>Data Manager.</p>", "<p class='typed-words'>Problem Solver.</p>", "<p class='typed-words'>Backend-Developer.</p>"],
        typeSpeed: 0,
            // typing speed
            typeSpeed: 0,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
      });
    });
        
