let $ = require('jquery');
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
	$('#fabiaImg').click(function()
	{
		localStorage.setItem("vehicule","fabia");
		window.location.href = "features.html";
	})

		function animateSuperb()
		{
			
			if (superbCount==1)
			{
				$('#superb p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/2.png');
				$('#superb').animate({'top':pos2.top +'px' ,'left':pos2.left+'px',height: '60%', width: '40%' },800,'easeInOutQuad',function()
					{
						superbCount=2;
						setTimeout(function(){animateSuperb(); }, 4000);
					});

			}
			else if (superbCount==2) 
			{
				$('#superb p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/3.png');
				$('#superb').animate({'top':pos3.top +'px' ,'left':pos3.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						superbCount=3;
						setTimeout(function(){animateSuperb(); }, 4000);
					});	
			}
			else	
			{
				$('#superb p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/1.png');
				$('#superb').animate({'top':pos1.top +'px' ,'left':pos1.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						superbCount=1;
						setTimeout(function(){animateSuperb(); }, 4000);
					});
			}
		}

		function animateOctavia()
		{
			
			if (octaviaCount==1)
			{
				$('#octavia p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/2.png');
				$('#octavia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px',height: '60%', width: '40%' },800,'easeInOutQuad',function()
					{
						octaviaCount=2;
						setTimeout(function(){animateOctavia(); }, 4000);
					});
			}
			else if (octaviaCount==2) 
			{
				$('#octavia p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/3.png');
				$('#octavia').animate({'top':pos3.top +'px' ,'left':pos3.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						octaviaCount=3;
						setTimeout(function(){animateOctavia(); }, 4000);
					});	
			}
			else	
			{
				$('#octavia p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/1.png');
				$('#octavia').animate({'top':pos1.top +'px' ,'left':pos1.left+'px' ,height: '50%', width: '30%'},800,'easeInOutQuad',function()
					{
						octaviaCount=1;
						setTimeout(function(){animateOctavia(); }, 4000);
					});
			}
		}

		function animateFabia()
		{
			
			if (fabiaCounter==1)
			{
				$('#fabia p:first').animate({'top':textPos2.top +'px' ,'left':textPos2.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/2.png');
				$('#fabia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px' ,height: '60%', width: '40%'},800,'easeInOutQuad',function()
					{
						fabiaCounter=2;
						setTimeout(function(){animateFabia(); }, 4000);
					});
			}
			else if (fabiaCounter==2) 
			{
				$('#fabia p:first').animate({'top':textPos1.top +'px' ,'left':textPos1.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/3.png');
				$('#fabia').animate({'top':pos3.top +'px' ,'left':pos3.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						fabiaCounter=3;
						setTimeout(function(){animateFabia(); }, 4000);
					});	
			}
			else	
			{
				$('#fabia p:first').animate({'top':textPos3.top +'px' ,'left':textPos3.left+'px'},800);
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/1.png');
				$('#fabia').animate({'top':pos1.top +'px' ,'left':pos1.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						
						fabiaCounter=1;
						setTimeout(function(){animateFabia(); }, 4000);
					});
			}
		}
		animateFabia();
		animateOctavia();
		animateSuperb();
	}
);