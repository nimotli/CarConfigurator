var passedVehicule = localStorage.getItem("vehicule");;
var fabiaPath ="./dist/images/Galery/fabia/";
var octaviaPath ="./dist/images/Galery/octavia/";
var superbPath ="./dist/images/Galery/superb/";
passedVehicule="fabia";
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
        $('#galeryImageHolder').animate({'top':'200%'},1000)
    });
});