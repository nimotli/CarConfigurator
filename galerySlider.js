var passedVehicule = localStorage.getItem("vehicule");;
var hasChosen=0;
var fabiaPath ="./dist/images/Galery/fabia/";
var octaviaPath ="./dist/images/Galery/octavia/";
var superbPath ="./dist/images/Galery/superb/";
var temp=$('#galeryList');
passedVehicule="fabia";
var currentGaleryImage;
var $first = $('li:first', '#galeryList');
var $last = $('li:last', '#galeryList');
$(document).ready(function()
{
    if(passedVehicule == "fabia")
    {
        $('#galImage1').attr('src',fabiaPath+"0.png");
        $('#galImage2').attr('src',fabiaPath+"1.png");
        $('#galImage3').attr('src',fabiaPath+"2.png");
        $('#galImage4').attr('src',fabiaPath+"3.png");
        $('#galImage5').attr('src',fabiaPath+"4.png");
    }
    else if(passedVehicule == "octavia")
    {
        $('#galImage1').attr('src',octaviaPath+"0.png");
        $('#galImage2').attr('src',octaviaPath+"1.png");
        $('#galImage3').attr('src',octaviaPath+"2.png");
        $('#galImage4').attr('src',octaviaPath+"3.png");
        $('#galImage5').attr('src',octaviaPath+"4.png");
    }
    else
    {
        $('#galImage1').attr('src',superbPath+"0.png");
        $('#galImage2').attr('src',superbPath+"1.png");
        $('#galImage3').attr('src',superbPath+"2.png");
        $('#galImage4').attr('src',superbPath+"3.png");
        $('#galImage5').attr('src',superbPath+"4.png");
    }

    $('.galeryItem').click(function()
    {
        
        hasChosen = 1;
        currentGaleryImage=$(this);
        var element = $('#galeryList').detach();
        $('.galeryMask').append(element);
        $('#galeryList').animate({'top':'150%'},600,);
        currentGaleryImage.addClass('selected');
        currentGaleryImage.css({position: 'absolute'});
        currentGaleryImage.animate({top:'-380%',left :'25%','width' :'100%','height': '150%'},500);     
    });

});

function movetoleft()
{
    var $next;
    var $selected = $(".selected");
    $selected.animate({left :'-100%'},600);
    /*$next = $selected.next('li').length ? $selected.next('li') : $first;
    $selected.removeClass("selected");
    $next.addClass('selected');
    
    $(".selected").css({top:'-380%',left :'200%','width' :'50%','height': '50%'});
    $(".selected").animate({top:'-380%',left :'25%'},600)*/
}

function movetoright()
{

}




$("#next").click(function () {
    var $next;
    var $selected = $(".selected");
    $next = $selected.next('li').length ? $selected.next('li') : $first;
    $selected.removeClass("selected");
    $next.addClass('selected');
});
