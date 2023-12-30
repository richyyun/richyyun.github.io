var elems = document.getElementsByClassName("email");
console.log(elems.length);
if (elems.length == 1){
    elems.href = "mailto: richyjyun@gmail.com";
}
else{
    for (i=0; i<elems.length; i++){
        elems[i].href = "mailto: richyjyun@gmail.com";
    }
}
