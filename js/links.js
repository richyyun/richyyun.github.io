var email = document.getElementsByClassName("email");
link(email);

function link(elems){
    if (elems.length == 1){
        elems.href = "mailto: richyjyun@gmail.com";
        elems.target="_blank";
        elems.rel="noopener noreferrer";
    }
    else{
        for (i=0; i<elems.length; i++){
            elems[i].href = "mailto: richyjyun@gmail.com";
            elems[i].target="_blank";
            elems[i].rel="noopener noreferrer";
        }
    }
}
