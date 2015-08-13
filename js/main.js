 function scrollTo(){
  $(".portfolio-btn").click(function() {
      var offset = 20; //Offset of 20px

      $('html, body').animate({
          scrollTop: $("#portfolio").offset().top + offset
      }, 1000);
  });
  $(".resume-btn").click(function() {
      var offset = 20; //Offset of 20px

      $('html, body').animate({
          scrollTop: $("#resume-section").offset().top + offset
      }, 1000);
  });
  $(".contact-btn").click(function() {
      var offset = 20; //Offset of 20px

      $('html, body').animate({
          scrollTop: $("#contact").offset().top + offset
      }, 1000);
  });
}    
    $(document).ready(function(){
      scrollTo();
      $(".button-collapse").sideNav(
          {menuWidth:500,
          closeOnClick: true}
        );
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
        
