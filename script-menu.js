(function(F) {
        F.fn.menumaker = function(options) {  
          var cssmenu = F(this), settings = F.extend({
            format: "dropdown",
            sticky: false
            }, options);
            return this.each(function() {
              F(this).find(".button").on('click', function(){
                F(this).toggleClass('menu-opened');
                var mainmenu = F(this).next('ul');
                if (mainmenu.hasClass('open')) { 
                  mainmenu.slideToggle().removeClass('open');
                }
                else {
                  mainmenu.slideToggle().addClass('open');
                  if (settings.format === "dropdown") {
                    mainmenu.find('ul').show();
                  }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
              cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
              cssmenu.find('.submenu-button').on('click', function() {
                F(this).toggleClass('submenu-opened');
                if (F(this).siblings('ul').hasClass('open')) {
                  F(this).siblings('ul').removeClass('open').slideToggle();
                }
                else {
                  F(this).siblings('ul').addClass('open').slideToggle();
                }
              });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
              var mediasize = 1000;
              if (F( window ).width() > mediasize) {
                cssmenu.find('ul').show();
              }
              if (F(window).width() <= mediasize) {
                cssmenu.find('ul').hide().removeClass('open');
              }
            };
            resizeFix();
            return F(window).on('resize', resizeFix);
          });
        };
      })(jQuery);

      (function(F){
        F(document).ready(function(){
          F("#cssmenu").menumaker({
            format: "multitoggle"
          });
        });
      })(jQuery);