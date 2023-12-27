/*
Functions for interactive navigation bar
*/

function activate(){
    
    // Get URL 
    var url = window.location.href.split("/");
    var currentPage = url[url.length - 1];

    var nav = document.getElementById('topnav').children;

    for (let i=0; i<nav.length; i++){
        var name = nav[i].href.split("/");
        name = name[name.length - 1];
        nav[i].addClass("active");
       // if (name == "index.html" && currentPage == ""){

      //  }

    }


}