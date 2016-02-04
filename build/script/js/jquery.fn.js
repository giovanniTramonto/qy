(function($){

  /* Functions
  ----- */

  var getPageLayout = function() {
    
    return  ( Modernizr.mq('(min-width: 1921px)') ) ? 'wide_xxl' :
            ( Modernizr.mq('(min-width: 1281px)') ) ? 'wide' : 
            ( Modernizr.mq('(min-width: 981px)') )  ? 'desktop' : 
            ( Modernizr.mq('(min-width: 768px)') )  ? 'tablet' : 
            ( Modernizr.mq('(min-width: 481px)') )  ? 'mobile_l' :
                                                      'mobile' ;
  }

  /* console log */
  function log ( _display ) {
    console.log( _display );
  }
  
  var setListToggle = function () {
    
    $('.section-list__item').each(function(){
      var $this = $(this),
          $title = $this.find('h2.section-list__item--title'),
          $list = $this.find('.section-list__item--list');
      
      if( $list.length > 0 ) {
      
        $this.addClass('_has-list');
      
        $title.on('click', function(){
        
          if( getPageLayout() == 'mobile' ) {
        
            var slideComplete = function () {
              $this.toggleClass('_open');
              $list.removeAttr('style');
            }
            
            if( $this.hasClass('_open') ) {
              $list.slideUp(350, slideComplete );
            }
            else {
              $list.slideDown(300, slideComplete );
            }
        
          }
        
        });
      }
    
    });
    
    
  };
  
  var runType = function () {
  
    var $words, head;
  
    function setWriter () {
      $words = $('._write');
      head = 0;
      $words.css('visibility', 'hidden');
      writeText ();
    }
  
    function writeText () {
      
      if( head < $words.length ) {
        $words.eq(head).css('visibility', 'visible').typed({
          strings: [ $words.eq(head).text() ],
          typeSpeed: -200,
          cursorChar: "&#9612",
          callback: function () { if( head < $words.length-1 ) { $words.eq(head).next('.typed-cursor').remove(); } head++; writeText(); }
        });
      }
      
    }
    
    setTimeout( setWriter, 200 );
    
  };

  /* init */
  $(document).ready(function(){
    
    runType();
    //setListToggle();
    
  });

})(jQuery);