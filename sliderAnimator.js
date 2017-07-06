let $ = require('jquery');
var animationFinished=1;
var superbCount = 3;
var octaviaCount = 2;
var fabiaCounter = 1;
var pos1 =$('#fabia').position();
var pos2 =$('#octavia').position();
var pos3 =$('#superb').position();
var textPos1 =$('#superb p:first').position();
var textPos2 =$('#octavia p:first').position();
var textPos3 =$('#fabia p:first').position();
$(document).ready(function()
{
	
	autoAnimate();
	$('.vehiculeContainer').on("Swiperight",function()
	{
		alert("swipright");
	});
	$('.vehiculeContainer').on("Swipeleft",function()
	{
		alert("swipleft");
	});

	
	$('#fabiaImg').click(function()
	{
		localStorage.setItem("vehicule","fabia");
		window.location.href = "galery.html";
	})
	$('#octaviaImg').click(function()
	{
		localStorage.setItem("vehicule","octavia");
		window.location.href = "galery.html";
	})
	$('#superbImg').click(function()
	{
		localStorage.setItem("vehicule","superb");
		window.location.href = "galery.html";
	})

	
});

function autoAnimate()
{
	if(animationFinished==1)
	{
		animateFabia();
		animateOctavia();
		animateSuperb();
		animationFinished=0;
	}
	setTimeout(function(){autoAnimate(); }, 6000);
}
function animateAll()
{
	if(animationFinished==1)
	{
		animateFabia();
		animateOctavia();
		animateSuperb();	
		animationFinished=0;
	}
}
function animateToLeft()
{
	if(animationFinished==1)
	{
		animateOctaviaToLeft();
		animateSuperbToLeft();
		animateFabiaToLeft();
		animationFinished=0;
	}
}
function animateOctavia()
		{
			if (octaviaCount==1)
			{
				$('#octavia p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/2.png');
				$('#octaviaImg').animate({height: '160%', width: '180%' },800,'easeInOutQuad');
				$('#octavia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px' },800,'easeInOutQuad',function()
					{
						octaviaCount=2;
						animationFinished=1;
					});
				
			}
			else if (octaviaCount==2) 
			{
				$('#octavia p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/3.png');
				$('#octaviaImg').animate({height: '110%', width: '100%' },800,'easeInOutQuad');
				$('#octavia').animate({'top':pos3.top +'px' ,'left':pos3.left+'px' },800,'easeInOutQuad',function()
					{
						octaviaCount=3;
						animationFinished=1;
					});
					
					
			}
			else	
			{
				$('#octavia p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				
				$('#octaviaImg').animate({height: '110%', width: '100%' },800,'easeInOutQuad');
				$('#octavia').fadeOut(200,function()
					{
						$('#octavia').css({'top':pos3.top +'px' ,'left':pos1.left+'px' });
						octaviaCount=1;
						$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/1.png');
						animationFinished=1;
					}).fadeIn(600);
					
			}
			
		}

function animateSuperb()
		{
			
			if (octaviaCount==3)
			{
				
				$('#superb p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/2.png');
				$('#superbImg').animate({height: '180%', width: '220%' },800,'easeInOutQuad');
				$('#superb').animate({'top':pos2.top +'px' ,'left':pos2.left+'px'},800,'easeInOutQuad',function()
					{
						superbCount=2;
					});

			}
			else if (octaviaCount==1) 
			{
				$('#superb p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/3.png');
				$('#superbImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#superb').animate({'top':pos3.top +'px' ,'left':pos3.left+'px' },800,'easeInOutQuad',function()
					{
						superbCount=3;
					});	
			}
			else	
			{
				$('#superb p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#superbImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#superb').fadeOut(200,function()
				{
					$('#superb').css({'top':pos1.top +'px' ,'left':pos1.left+'px' });
					superbCount=1;
					$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/1.png');
				}).fadeIn(600);
			}
		}

function animateFabia()
		{
			
			if (octaviaCount==2)
			{
				$('#fabia p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/2.png');
				$('#fabiaImg').animate({height: '180%', width: '220%' },800,'easeInOutQuad');
				$('#fabia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px' },800,'easeInOutQuad',function()
					{
						fabiaCounter=2;
					});
			}
			else if (octaviaCount==3) 
			{
				$('#fabia p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/3.png');
				$('#fabiaImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#fabia').animate({'top':pos3.top +'px' ,'left':pos3.left+'px' },800,'easeInOutQuad',function()
					{
						fabiaCounter=3;
					});	
			}
			else	
			{
				$('#fabia p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				
				$('#fabiaImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#fabia').fadeOut(200,function()
					{
						$('#fabia').css({'top':pos1.top +'px' ,'left':pos1.left+'px'});
						fabiaCounter=1;
						$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/1.png');
					}).fadeIn(600);
			}
		}



function animateOctaviaToLeft()
		{
			
			if (octaviaCount==1)
			{
				$('#octavia p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				
				$('#octaviaImg').animate({height: '110%', width: '100%' },200,'easeInOutQuad');
				$('#octavia').fadeOut(200,function()
					{
						$('#octavia').css({'top':pos3.top +'px' ,'left':pos3.left+'px' });
						$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/3.png');
						octaviaCount=3;
						animationFinished=1;
					}).fadeIn(600);
				
			}
			else if (octaviaCount==2) 
			{
				$('#octavia p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/1.png');
				$('#octaviaImg').animate({height: '110%', width: '110%' },800,'easeInOutQuad');
				$('#octavia').animate({'top':pos1.top +'px' ,'left':pos1.left+'px' },800,'easeInOutQuad',function()
					{
						octaviaCount=1;
						animationFinished=1;
					});
					
					
			}
			else	
			{
				$('#octavia p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/2.png');
				$('#octaviaImg').animate({height: '160%', width: '180%' },800,'easeInOutQuad');
				$('#octavia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px' },800,'easeInOutQuad',function()
					{
						octaviaCount=2;
						animationFinished=1;
					});
					
			}
			
		}
		
function animateSuperbToLeft()
		{
			
			if (octaviaCount==3)
			{
				
				$('#superb p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				
				$('#superbImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#superb').fadeOut(200,function()
					{
						$('#superb').css({'top':pos3.top +'px' ,'left':pos3.left+'px'});
						$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/3.png');
						superbCount=3;
					}).fadeIn(600);

			}
			else if (octaviaCount==1) 
			{
				$('#superb p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/1.png');
				$('#superbImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#superb').animate({'top':pos1.top +'px' ,'left':pos1.left+'px' },800,'easeInOutQuad',function()
					{
						superbCount=1;
					});	
			}
			else	
			{
				$('#superb p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/2.png');
				$('#superbImg').animate({height: '180%', width: '220%' },800,'easeInOutQuad');
				$('#superb').animate({'top':pos2.top +'px' ,'left':pos2.left+'px' },800,'easeInOutQuad',function()
					{
						superbCount=2;
					});
			}
		}

function animateFabiaToLeft()
		{
			
			if (octaviaCount==2)
			{
				$('#fabia p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				
				$('#fabiaImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#fabia').fadeOut(200,function()
					{
						$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/3.png');
						fabiaCounter=3;
						$('#fabia').css({'top':pos3.top +'px' ,'left':pos3.left+'px' });
					}).fadeIn(600);
			}
			else if (octaviaCount==3) 
			{
				$('#fabia p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/1.png');
				$('#fabiaImg').animate({height: '130%', width: '130%' },800,'easeInOutQuad');
				$('#fabia').animate({'top':pos1.top +'px' ,'left':pos1.left+'px' },800,'easeInOutQuad',function()
					{
						fabiaCounter=1;
					});	
			}
			else	
			{
				$('#fabia p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/2.png');
				$('#fabiaImg').animate({height: '180%', width: '220%' },800,'easeInOutQuad');
				$('#fabia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px'},800,'easeInOutQuad',function()
					{
						fabiaCounter=2;
					});
			}
		}