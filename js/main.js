$(function(){
    // 스크롤바 크롬->body , ie는 ->html 
    $('.section1 .btn_down').click(function(){
        $('body,html').animate({'scrollTop':1277},1000)
    });

    $('.section2 .btn_down2').click(function(){
        $('body,html').animate({'scrollTop':2302},1000)
    });

    $('.section3 .btn_down3').click(function(){
        $('body,html').animate({'scrollTop':3302},1000)
    });
    $('.section4 .btn_down4').click(function(){
        $('body,html').animate({'scrollTop':4442},1000)
    });
    $('.section5 .btn_down5').click(function(){
        $('body,html').animate({'scrollTop':5466},1000)
    });
    $('.section6 .btn_down6').click(function(){
        $('body,html').animate({'scrollTop':6466},1000)
    });
    $('.section7 .btn_down7').click(function(){
        $('body,html').animate({'scrollTop':7474},1000)
    });
    $('.section8 .btn_down8').click(function(){
        $('body,html').animate({'scrollTop':8458},1000)
    });
    $('.section9 .btn_down9').click(function(){
        $('body,html').animate({'scrollTop':9607},1000)
    });
    $('.section10 .btn_down10').click(function(){
        $('body,html').animate({'scrollTop':10685},1000)
    });
    $('.section11 .btn_down11').click(function(){
        $('body,html').animate({'scrollTop':11827},1000)
    });

    $('.quick li').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
        let num = $(this).index();
        console.log(num)
        // switch (num){
        //     case 0:$('body,html').animate({'scrollTop':0},1000);
        //     break;
        //     case 1:$('body,html').animate({'scrollTop':1277},1000);
        //     break;
        //     case 2:$('body,html').animate({'scrollTop':2302},1000);
        //     break;
        //     case 3:$('body,html').animate({'scrollTop':3302},1000);
        //     break;
        //     case 4:$('body,html').animate({'scrollTop':4442},1000);
        //     break;
        //     case 5:$('body,html').animate({'scrollTop':5466},1000);
        //     break;
        //     case 6:$('body,html').animate({'scrollTop':6466},1000);
        //     break;
        //     case 7:$('body,html').animate({'scrollTop':7546},1000);
        //     break;
        //     case 8:$('body,html').animate({'scrollTop':8529},1000);
        //     break;
        //     case 9:$('body,html').animate({'scrollTop':9679},1000);
        //     break;
        //     case 10:$('body,html').animate({'scrollTop':10756},1000);
        //     break;
        //     case 11:$('body,html').animate({'scrollTop':11896},1000);
        //     break;
         if(num==0){
            $('body,html').animate({'scrollTop':0},1000);
        }else if(num==1){
            $('body,html').animate({'scrollTop':1277},1000);
        }else if(num==2){
            $('body,html').animate({'scrollTop':2302},1000);
        }else if(num==3){
            $('body,html').animate({'scrollTop':3302},1000);
        }else if(num==4){
            $('body,html').animate({'scrollTop':4442},1000);
        }else if(num==5){
            $('body,html').animate({'scrollTop':5466},1000);
        }else if(num==6){
            $('body,html').animate({'scrollTop':6466},1000);
        }else if(num==7){
            $('body,html').animate({'scrollTop':7474},1000);
        }else if(num==8){
            $('body,html').animate({'scrollTop':8458},1000);
        }else if(num==9){
            $('body,html').animate({'scrollTop':9607},1000);
        }else if(num==10){
            $('body,html').animate({'scrollTop':10685},1000);
        }else if(num==11){
            $('body,html').animate({'scrollTop':11827},1000);
        }
        

        
       
    })
    
//scroll 이벤트
$(window).scroll(function(){
    var num = $(document).scrollTop();
    console.log(num)
//스크롤바에 위치가 1277보다 크면 header fixed시키고 , 스크롤바에 위치가 1277보다 작으면 fixed해제 
    if(num>1277){
        $('.header').addClass('on')
    }else{
        $('.header').removeClass('on')
    }

    //section2 ani
    if(num > 800 && num < 2380){
         $('.m_case').addClass('on')}
    else if(num>0 && num<800)
        {$('.m_case').removeClass('on')}

    //section3 ani
    if(num >1800 && num< 3302){
        $('.cat').addClass('on')
        $('.phone').addClass('on')}
    else if (num>0 && num<1800){
         $('.cat').removeClass('on')
         $('.phone').removeClass('on')}

    //section4 ani    
    if(num>2900 && num<4400){
        $('.img_wrap').addClass('on')
        $('.img_wrap .img2').addClass('on')
    }else if(num>0 && num<2800){
        $('.img_wrap').removeClass('on')
        $('.img_wrap .img2').removeClass('on')
    }
    //section5 ani    
    if(num>3950 && num<5400){
        $('.img_wrap2 .img2').addClass('on')
        $('.img_wrap2 .img3').addClass('on')
    }else if(num>0 && num<3950){
        $('.img_wrap2 .img2').removeClass('on')
        $('.img_wrap2 .img3').removeClass('on')
    }
    //section6 ani    
    if(num>5010 && num<6200){
        $('.top').addClass('on')
        $('.bottom').addClass('on')
        $('.effect img').addClass('on')
        $('.effect2 img').addClass('on')
        $('.line').addClass('on')
        $('.line2').addClass('on')
    }else if(num>0 && num<5100){
        $('.top').removeClass('on')
        $('.bottom').removeClass('on')
        $('.effect img').removeClass('on')
        $('.effect2 img').removeClass('on')
        $('.line').removeClass('on')
        $('.line2').removeClass('on')
    }

     //section7 ani    
     if(num>6070 && num<7500){
        $('.hand').addClass('on')
    }else if(num>0 && num<6070){
        $('.hand').removeClass('on')
    }

    //section9 ani    
    if(num>8200 && num<9500){
        $('.left_case').addClass('on')
        $('.right_case').addClass('on')
        $('.section9_inner h2').addClass('on')
        $('.section9_inner p').addClass('on')
        $('.section9_inner .btn_down9').addClass('on')
    }else if(num>0 && num<8200){
        $('.left_case').removeClass('on')
        $('.right_case').removeClass('on')
        $('.section9_inner h2').removeClass('on')
        $('.section9_inner p').removeClass('on')
        $('.section9_inner .btn_down9').removeClass('on')
    }
     //section10 ani   
    if(num>9135 && num<11500){
        $('.mobile .case').addClass('on')
    }else if(num>0 && num<9135){
        $('.mobile .case').removeClass('on')
    }

    //section11 ani    
    if(num>10410 && num<11800){
        $('.left_case2').addClass('on')
        $('.right_case2').addClass('on')
    }else if(num>0 && num<10410){
        $('.left_case2').removeClass('on')
        $('.right_case2').removeClass('on')
    }
     //section12 ani    
     if(num>11500 && num<13000){
        $('.hh').addClass('on')
    }else if(num>0 && num<11500){
        $('.hh').removeClass('on')
    }


    if(num>=0 && num<=1276){
     $('.quick li').removeClass('on')
        $('.quick li').eq(0).addClass('on')
    }else if(num>= 1277 && num <=2301){
     $('.quick li').removeClass('on')
     $('.quick li').eq(1).addClass('on')
    }else if(num>= 2302 && num <=3301){
     $('.quick li').removeClass('on')
     $('.quick li').eq(2).addClass('on')
    }else if(num>= 3302 && num <=4441){
     $('.quick li').removeClass('on')
     $('.quick li').eq(3).addClass('on')
    }else if(num>= 4442 && num <=5465){
     $('.quick li').removeClass('on')
     $('.quick li').eq(4).addClass('on')
    }else if(num>= 5466 && num <=6465){
     $('.quick li').removeClass('on')
     $('.quick li').eq(5).addClass('on')
    }else if(num>= 6466 && num <=7473){
     $('.quick li').removeClass('on')
     $('.quick li').eq(6).addClass('on')
    }else if(num>= 7474 && num <=8457){
     $('.quick li').removeClass('on')
     $('.quick li').eq(7).addClass('on')
    }else if(num>= 8458 && num <=9606){
     $('.quick li').removeClass('on')
     $('.quick li').eq(8).addClass('on')
    }else if(num>= 9607 && num <=10684){
     $('.quick li').removeClass('on')
     $('.quick li').eq(9).addClass('on')
    }else if(num>= 10685 && num <=11532){
     $('.quick li').removeClass('on')
     $('.quick li').eq(10).addClass('on')
    }else if(num>= 11827 && num <=15000){
     $('.quick li').removeClass('on')
     $('.quick li').eq(11).addClass('on')
    }
 })

//  ---section8 슬라이더---
 $('.slick').slick({
    autoPlay:true,
    fade:true,
    speed:1500
  },5000);

// $('.color').click(function(e){
//     // 하이퍼링크 막는명령
//     e.preventDefault()
// });


// --section10 color--
$('.color .left li').click(function(){
    let num=$(this).index()
    console.log(num)
    $('.color li').removeClass('on')
    $(this).addClass('on')
    $('.case li').removeClass('on')
    $('.mobile .left li').eq(num).addClass('on')
})
$('.color .right li').click(function(){
    let num=$(this).index()
    console.log(num)
    $('.color li').removeClass('on')
    $(this).addClass('on')
    $('.case li').removeClass('on')
    $('.mobile .right li').eq(num).addClass('on')
})

})