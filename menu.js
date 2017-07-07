var itemsshowing=false;
var animated = $('#menuInner');
var selectedElement=0;
$(document).ready(function()
{
    $('#selector').fadeOut(1);
    document.body.onselectstart = function() {
        return false;
    }
    hideElements();
    $('#innerdiv').click(function()
    {
        if(itemsshowing==true)
        {
            hideElements();
        }
        else
        showElements();
    });
    progressAnim(animated)
    $('#galeriediv').click(function()
    {
        selectedElement=1;
        rotate(180);
        $(this).css("z-index", 10 );
    });
    $('#interieurdiv').click(function()
    {
        selectedElement=2;
        rotate(90);
        $(this).css("z-index", 10 );
    });
    $('#exterieurdiv').click(function()
    {
        selectedElement=3;
        rotate(0);
        $(this).css("z-index", 10 );
    });
    $('#specificationdiv').click(function()
    {
        selectedElement=4;
        rotate(270);
        $(this).css("z-index", 10 );
    });
});


function rotate(Amount)
{
    $('#selector').stop();
    $('#selector').fadeOut(100);
    $('#elementdiv').css( { transition: "transform 1s",
                  transform:  "rotate(" + Amount + "deg)" } );
    setTimeout( function() 
    {
        $('#selector').fadeIn(500);
         $(element).css( { transition: "none" } ) ;
    }, 1000 );
    
}

function progressAnim(e) {
    var ang = 0;

    setInterval(function () {
        ang += 0.2;
        e.css({'transition': 'all 0.01s linear',
        'transform': 'rotate(' + ang + 'deg)'});
    }, 10);
}

function showElements()
{   
    $('#menu').stop(false,true);
    $('#galerie').stop(false,true);
    $('#interieur').stop(false,true);
    $('#exterieur').stop(false,true);
    $('#specification').stop(false,true);
    $('#menu').show("scale", 300,function()
    {
        $('#galerie').show("scale", 300,function()
        {
            $('#interieur').show("scale", 300,function()
            {
                $('#exterieur').show("scale", 300,function()
                {
                    $('#specification').show("scale", 300);
                });
            });
        });
            
    });
    itemsshowing=true;
}
function hideElements()
{
    $('#menu').stop(false,true);
    $('#galerie').stop(false,true);
    $('#interieur').stop(false,true);
    $('#exterieur').stop(false,true);
    $('#specification').stop(false,true);
    $('#selector').stop();
    $('#selector').fadeOut(100);
    $('#menu').hide("scale", 500);
    $('#galerie').hide("scale", 500);
    $('#interieur').hide("scale", 500);
    $('#exterieur').hide("scale", 500);
    $('#specification').hide("scale", 500);
    itemsshowing=false; 
}

function checkSelected()
{
    if(selectedElement==1)
    {
        //galerie selectionné
    }
    else if(selectedElement == 2)
    {
        //interieur selectionné
    }
    else if(selectedElement == 3)
    {
        //exterieur selectionné  
    }
    else if(selectedElement == 4)
    {
        //specification selectionné
    }
}