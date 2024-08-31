/***********************************************************
 * mail js
 ************************************************************/
$(function() {
    // wallpaper change
    var bgimg = ".PhotoSelectContents .picture"
    $("body").on("click", bgimg, function() {
        var wallpaperBg = $(this).attr("rel");
        $(".wallpaper").css("background-image", "url(ui_deskboard/assets/images/bg/" + wallpaperBg + ".jpg)");
    });


    $('#themeDark').on('click', function() {
        if ($('#themeDark').is(':checked')){
            $('#wrap').attr('data-theme', 'dark');
        } else {
            $('#wrap').attr('data-theme', 'glass');
        }
      });


});

/***********************************************************
 * 
 ************************************************************/
