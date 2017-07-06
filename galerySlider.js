
var passedVehicule;
var hasChosen=0;
var fabiaPath ="./dist/images/Galery/fabia/";
var octaviaPath ="./dist/images/Galery/octavia/";
var superbPath ="./dist/images/Galery/superb/";
var galimages = [];
var currentGaleryImage;
var selectedIndex = 0;

let $ = require('jquery');
$(document).ready(function()
{
    skodaPulse();
    $('#dropleft').droppable(
    {
        drop: function( event, ui ) 
        {
            movetoleft();
        }
    });
    $('#dropright').droppable(
    {
        drop: function( event, ui ) 
        {
            movetoright();
        }
    });
    passedVehicule = localStorage.getItem("vehicule");
    $('#backButton').mouseenter(function()
		{
			$(this).css("background-color","white")
		}	
	)
	$('#backButton').mouseleave(function()
		{
			$(this).css("background-color","lightgrey")
		}	
	)
	$('#backButton').click(function()
		{
			parent.history.back();
		}	
	)
    $('#skodaLogo').mouseenter(function()
		{
			$(this).css("background-color","white")
		}	
	)
	$('#skodaLogo').mouseleave(function()
		{
			$(this).css("background-color","lightgrey")
		}	
	)
	$('#skodaLogo').click(function()
		{
			window.location.href = "features.html";
		}	
	)
    $("#galeryList li").each(function() { galimages.push($(this).find('img')) });

    if(passedVehicule == "fabia")
    {
        fillFabia();
    }
    else if(passedVehicule == "octavia")
    {
        fillOctavia();
    }
    else
    {
        fillSuperb();
    }

    $('.galeryItem').click(function()
    {
        if(hasChosen != 1)
        {
            hasChosen = 1;
            currentGaleryImage=$(this);
            var element = $('#galeryList').detach();
            $('.galeryMask').append(element);
            $('#galeryList').animate({top:'150%'},600);
            currentGaleryImage.css({position: 'absolute'});
            currentGaleryImage.animate({top:'-125%',left :'20%','width' :'60%','height': '60%'},500);
            for (var i = 0, len = galimages.length; i < len; i++) {
                if(galimages[i].attr('id')==currentGaleryImage.attr('id'))
                {
                    selectedIndex=i;
                }
            }
        }
        currentGaleryImage.draggable();
    });
});

function movetoleft()
{
    galimages[selectedIndex].animate({left :'-100%'},600);
    if (selectedIndex==galimages.length-1)
    {
        selectedIndex=0;
    }
    else
    {
        selectedIndex++;
    }
    galimages[selectedIndex].css({position: 'absolute'});
    galimages[selectedIndex].css({top:'-125%',left :'200%'});
    galimages[selectedIndex].animate({left :'20%','width' :'60%','height': '60%'},600);
    galimages[selectedIndex].draggable();
    
}

function movetoright()
{
    galimages[selectedIndex].animate({left :'200%'},600);
    if (selectedIndex==0)
    {
        selectedIndex=galimages.length-1;
    }
    else
    {
        selectedIndex--;
    }
    galimages[selectedIndex].css({position: 'absolute'});
    galimages[selectedIndex].css({top:'-125%',left :'-100%'});
    galimages[selectedIndex].animate({left :'20%','width' :'60%','height': '60%'},600);
    galimages[selectedIndex].draggable();
}

function fillFabia()
{
    $('#galImage1').attr('src',fabiaPath+"0.png");
    $('#galImage2').attr('src',fabiaPath+"1.png");
    $('#galImage3').attr('src',fabiaPath+"2.png");
    $('#galImage4').attr('src',fabiaPath+"3.png");
    $('#galImage5').attr('src',fabiaPath+"4.png");
}
function fillOctavia()
{
    $('#galImage1').attr('src',octaviaPath+"0.png");
    $('#galImage2').attr('src',octaviaPath+"1.png");
    $('#galImage3').attr('src',octaviaPath+"2.png");
    $('#galImage4').attr('src',octaviaPath+"3.png");
    $('#galImage5').attr('src',octaviaPath+"4.png");
}
function fillSuperb()
{
    $('#galImage1').attr('src',superbPath+"0.png");
    $('#galImage2').attr('src',superbPath+"1.png");
    $('#galImage3').attr('src',superbPath+"2.png");
    $('#galImage4').attr('src',superbPath+"3.png");
    $('#galImage5').attr('src',superbPath+"4.png");
}

function skodaPulse()
{
    $('#skodaLogo').animate({top:'-15%'},150,function()
    {
       $('#skodaLogo').animate({top:'0%'},500,function()
       {
           setTimeout(function(){skodaPulse(); }, 1500);
       }); 
    });
    
}