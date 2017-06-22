

$(document).ready(function()
{
	$('.imgChoice').click(function()
	{
		var clickedImage=$(this);
		$('#mainImage').fadeOut(300,function()
			{
				$('#mainImage').attr('src',clickedImage.attr('src'));
				$('#mainImage').fadeIn(300)
			});
	})
}
);