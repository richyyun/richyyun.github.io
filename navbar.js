/*
Functions for interactive navigation bar
*/

function activate(){
    
    // Get URL 
    var url = window.location.href.split("/");
    var currentPage = url[url.length - 1];

    var nav = document.getElementsByClassName(".topnav a");

    for (let i=0; i<nav.length; i++){
        var name = nav[i].href.split("/");
        name = name[name.length - 1];
        nav[i].classList.add("active");
       // if (name == "index.html" && currentPage == ""){

      //  }

    }


}