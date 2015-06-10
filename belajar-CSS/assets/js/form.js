/**
 * Created by simone on 08/06/15.
 */

var Form = function(){
    return{
        //main function to initiate the module

        init:function(){
            Form.loginForm();
            Form.signupForm();
            Form.sliderUp();
            Form.profil();
            Form.imageLightbox();
            Form.lightboxGallery();
        },
        lightboxGallery : function(){

            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        },
        imageLightbox : function(){
            $('.image-popup-vertical-fit').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }

            });

            $('.image-popup-fit-width').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                }
            });

            $('.image-popup-no-margins').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });

        },
        profil : function(){
            $(".animate-profil").click(function(){
                animasi(".demo-profil",'swing');
                //return false;
            });
            function animasi(element_ID, animation){
                $('.demo-profil').removeClass('rollIn');
                $(element_ID).addClass(animation);
                var wait = window.setTimeout( function(){
                    $(element_ID).removeClass(animation)}, 1500);
            }
        },
        sliderUp :function(){
            $("#owl-demo").owlCarousel({

                navigation : true,
                slideSpeed : 300,
                paginationSpeed : 400,
                singleItem : true
            });

        },
        loginForm : function(){
            $(".animate-login").click(function(){
                animasi(".demo-login",'swing');
                //return false;
            });
            function animasi(element_ID, animation){
                $('.demo-login').removeClass('zoomIn');
                $(element_ID).addClass(animation);
                var wait = window.setTimeout( function(){
                    $(element_ID).removeClass(animation)}, 1500);
            }
        },
        signupForm : function() {
            $(".animate-signup").click(function () {
                animasi(".demo-signup", 'shake');
                //return false;
            });
            function animasi(element_ID, animation) {
                $(element_ID).addClass(animation);
                var wait = window.setTimeout(function () {
                    $(element_ID).removeClass(animation)
                }, 1500);

            }

        }
    }
}();
Form.init();


