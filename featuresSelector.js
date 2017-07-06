let $ = require('jquery');
var fabiaPath="./dist/images/vehicules/Fabia/Images_Fabia_noir/";
var octaviaPath="./dist/images/vehicules/Octavia/Images_Octavia_noir/";
var superbPath="./dist/images/vehicules/Superb/Images_Superb_noir/";
var pathToUse;
var item;
$(document).ready(function()
{
	item=localStorage.getItem("vehicule");
	
	if (item == "fabia") 
	{
		pathToUse=fabiaPath;
	}
	else if(item == "octavia")
	{
		pathToUse=octaviaPath;
	}
	else	
	{
		pathToUse=superbPath;
	}
	$('#mainImage').attr('src',pathToUse+"0.png");
	$('#img1').attr('src',pathToUse+"1.png");
	$('#img2').attr('src',pathToUse+"2.png");
	$('#img3').attr('src',pathToUse+"3.png");
	$('#img4').attr('src',pathToUse+"4.png");
	$('#img5').attr('src',pathToUse+"5.png");
	$('.node2').slideUp(10);
	

	$('.imgChoice').click(function()
	{
		stopAnimations();
		var clickedImage=$(this);
		$('.node2').slideUp(300);
		$("connection").fadeOut(500);
		$('#mainImage').fadeOut(300,function()
		{
			$('#featureText').slideUp(300);
			$('#mainImage').attr('src',clickedImage.attr('src'));
			$('#mainImage').fadeIn(300,function()
			{
				if (clickedImage.attr('id') == "img1")
				{
					animateFeatureLines(41,60);
					
					$('#featureText').html("<h1>The title of something about the trunk </h1><p>the description of that thing about the trunk </p>").slideDown(1000);
				}
				else if (clickedImage.attr('id') == "img2")
				{
					animateFeatureLines(43,50);
					
					$('#featureText').html("<h1>The title of something about the side mirror</h1><p>the description of that thing about the side mirror</p>").slideDown(1000);
				}
				else if (clickedImage.attr('id') == "img3")
				{
					animateFeatureLines(60,47);
					$('#featureText').html("<h1>The title of something about the bumper</h1><p>the description of that thing about the bumper</p>").slideDown(1000);
				}
				else if (clickedImage.attr('id') == "img4")
				{
					animateFeatureLines(53,50);
					$('#featureText').html("<h1>The title of something about the headlights</h1><p>the description of that thing about the headlights</p>").slideDown(1000);
				}
				else
				{
					animateFeatureLines(58,55);
					$('#featureText').html("<h1>The title of something about the wheels</h1><p>the description of that thing about the wheels</p>").slideDown(1000);
				}	
				
			});
		});	
	});
	
	$('#backButton').mouseenter(function()
		{
			$(this).css("background-color","white")
		}	
	);
	$('#backButton').mouseleave(function()
		{
			$(this).css("background-color","lightgrey")
		}	
	);
	$('#backButton').click(function()
		{
			parent.history.back();
		}	
	);
});


	
function stopAnimations()
{
	$('#featureText').stop();
	$('.node1').stop();
	$('.node2').stop();
	
}

function animateFeatureLines(h , w)
{
	stopAnimations();
	$('.node1').connections('remove');
	$('.node1').css({top:h+'%',left :w+'%'});
	$('.node2').slideDown(300);
	jQuery('.node1').connections({ to: '.node2'});
	$(this).fadeIn(500);
	
}


