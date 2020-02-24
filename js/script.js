$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();
});




$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ wScroll/1.2 +'%)'
    });
    

    if(wScroll > $('.portfolio').offset().top - 350){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 400 * (i+1));
        });




    }

});


$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
   
   
   