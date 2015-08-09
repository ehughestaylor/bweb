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
      $('.slider').slider({
        full_width: true,
        indicators:false
      });
      goToSection();
    });
        
