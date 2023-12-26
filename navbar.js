/*
Functions for interactive navigation bar
*/

function activate(){
    
    // Get URL 
    var url = window.location.href;

    // Apply to each "a" tag (menu items)
    $(".navbar a").each(function(){
        if(url == (this.href)){
            $(this).addClass('active');
        }
    })

}