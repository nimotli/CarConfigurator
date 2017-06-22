
var fabiaPath="./dist/images/vehicules/Fabia/Images_Fabia_noir/";
var octaviaPath="./dist/images/vehicules/Octavia/Images_Octavia_noir/";
var superbPath="./dist/images/vehicules/Superb/Images_Superb_noir/";
var pathToUse;
var item;
$(document).ready(function()
{
	/*item=localStorage.getItem("vehicule");
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
	}*/
	
	$('#featureText').slideUp(10);
	document.body.appendChild(createLine(64.6	, 38, 75, 38,"line1"));
	document.body.appendChild(createLine(75, 30.2, 75, 15,"line2"));
	document.body.appendChild(createLine(56, 43, 70,  43,"line3"));
	document.body.appendChild(createLine(70, 35.2, 75, 20,"line4"));
	document.body.appendChild(createLine(50, 54.5, 75, 43.5,"line5"));
	document.body.appendChild(createLine(75, 30.2, 75, 15,"line6"));
	document.body.appendChild(createLine(66, 48, 75, 43,"line7"));
	document.body.appendChild(createLine(75, 32.2, 75, 16,"line8"));
	document.body.appendChild(createLine(57, 57, 75, 45,"line9"));
	document.body.appendChild(createLine(75, 30.8, 75, 15,"line10"));
	$('#line1').fadeOut(10);
	$('#line2').fadeOut(10);
	$('#line3').fadeOut(10);
	$('#line4').fadeOut(10);
	$('#line5').fadeOut(10);
	$('#line6').fadeOut(10);
	$('#line7').fadeOut(10);
	$('#line8').fadeOut(10);
	$('#line9').fadeOut(10);
	$('#line10').fadeOut(10);

	$('.imgChoice').click(function()
	{
		var clickedImage=$(this);
		$('#featureText').slideUp(300);
		$('#line1').fadeOut(300);
		$('#line2').fadeOut(300);
		$('#line3').fadeOut(300);
		$('#line4').fadeOut(300);
		$('#line5').fadeOut(300);
		$('#line6').fadeOut(300);
		$('#line7').fadeOut(300);
		$('#line8').fadeOut(300);
		$('#line9').fadeOut(300);
		$('#line10').fadeOut(300);
		$('#mainImage').fadeOut(300,function()
			{
				
				$('#mainImage').attr('src',clickedImage.attr('src'));
				$('#mainImage').fadeIn(300,function()
				{

					if (clickedImage.attr('id') == "img1")
					{
						$('#line1').fadeIn(500,function(){$('#line2').fadeIn(500,function(){$('#featureText').
							html("<h1>The title of something about the trunk </h1><p>the description of that thing about the trunk </p>").
							slideDown(1000)});});
					}
					else if (clickedImage.attr('id') == "img2")
					{
						$('#line3').fadeIn(500,function(){$('#line4').fadeIn(500,function(){$('#featureText').
							html("<h1>The title of something about the side mirror</h1><p>the description of that thing about the side mirror</p>").
							slideDown(1000)});});
					}
					else if (clickedImage.attr('id') == "img3")
					{
						$('#line5').fadeIn(500,function(){$('#line6').fadeIn(500,function(){$('#featureText').
							html("<h1>The title of something about the bumper</h1><p>the description of that thing about the bumper</p>").
							slideDown(1000)});});
					}
					else if (clickedImage.attr('id') == "img4")
					{
						$('#line7').fadeIn(500,function(){$('#line8').fadeIn(500,function(){$('#featureText').
							html("<h1>The title of something about the headlights</h1><p>the description of that thing about the headlights</p>").
							slideDown(1000)});});
					}
					else
					{
						$('#line9').fadeIn(500,function(){$('#line10').fadeIn(500,function(){$('#featureText').
							html("<h1>The title of something about the wheels</h1><p>the description of that thing about the wheels</p>").
							slideDown(1000)});});
					}
					
				})
				
			});
	})
}
);
function createLineElement(x, y, length, angle,id) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid white; '
               + 'width: ' + length + '%; '
               + 'height: 0px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '  
               + '-ms-transform: rotate(' + angle + 'rad); '  
               + 'position: absolute; '
               + 'top: ' + y + '%; '
               + 'left: ' + x + '%; ';
    line.setAttribute('style', styles);  
    line.setAttribute('id',id)
    line.set
    return line;
}

function createLine(x1, y1, x2, y2,id) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha,id);
}


