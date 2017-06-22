$(document).ready(function()
{
//let $ = require('jquery')  ;
var superbCount = 3;
var octaviaCount = 2;
var fabiaCounter = 1;
var pos1 =$('#fabia').position();
var pos2 =$('#octavia').position();
var pos3 =$('#superb').position();

		function animateSuperb()
		{
			
			if (superbCount==1)
			{
				superbCount=2;
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/1.png');
				$('#superb').animate({'top':pos2.top +'px' ,'left':pos2.left+'px',height: '60%', width: '40%' },800,'easeInOutQuad',animateSuperb).delay( 2000);

			}
			else if (superbCount==2) 
			{
				superbCount=3;
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/2.png');
				$('#superb').animate({'top':pos3.top +'px' ,'left':pos3.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',animateSuperb).delay( 2000);	
			}
			else	
			{
				superbCount=1;
				$('#superbImg').attr('src', './dist/images/sliderPrincipale/Superb/3.png');
				$('#superb').animate({'top':pos1.top +'px' ,'left':pos1.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',animateSuperb).delay( 2000);
			}
		}

		function animateOctavia()
		{
			
			if (octaviaCount==1)
			{
				octaviaCount=2;
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/1.png');
				$('#octavia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px',height: '60%', width: '40%' },800,'easeInOutQuad',animateOctavia).delay( 2000);
			}
			else if (octaviaCount==2) 
			{
				octaviaCount=3;
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/2.png');
				$('#octavia').animate({'top':pos3.top +'px' ,'left':pos3.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',animateOctavia).delay( 2000);	
			}
			else	
			{
				octaviaCount=1;
				$('#octaviaImg').attr('src', './dist/images/sliderPrincipale/Octavia/3.png');
				$('#octavia').animate({'top':pos1.top +'px' ,'left':pos1.left+'px' ,height: '50%', width: '30%'},800,'easeInOutQuad',animateOctavia).delay( 2000);
			}
		}

		function animateFabia()
		{
			
			if (fabiaCounter==1)
			{
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/2.png');
				$('#fabia').animate({'top':pos2.top +'px' ,'left':pos2.left+'px' ,height: '60%', width: '40%'},800,'easeInOutQuad',function()
					{
						fabiaCounter=2;
						setTimeout(function(){animateFabia(); }, 2000);
					});
			}
			else if (fabiaCounter==2) 
			{
				$('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/3.png');
				$('#fabia').animate({'top':pos3.top +'px' ,'left':pos3.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						fabiaCounter=3;
						setTimeout(function(){animateFabia(); }, 2000);
					});	
			}
			else	
			{
				 $('#fabiaImg').attr('src', './dist/images/sliderPrincipale/Fabia/1.png');
				$('#fabia').animate({'top':pos1.top +'px' ,'left':pos1.left+'px',height: '50%', width: '30%' },800,'easeInOutQuad',function()
					{
						
						fabiaCounter=1;
						setTimeout(function(){animateFabia(); }, 2000);

						
					});
			}
		}
		animateFabia();
		animateOctavia();
		animateSuperb();
	}
);