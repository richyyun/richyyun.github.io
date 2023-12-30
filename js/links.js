const classes = ["email","linkedin","github"];
const urls = ["mailto: richyjyun@gmail.com", "https://www.linkedin.com/in/richy-yun/", "https://github.com/richyyun"];

for (cl=0; cl<classes.length; cl++){
    const elems = document.getElementsByClassName(classes[cl]);
    link(elems, urls[cl]);
}

function link(elems, url){
    if (elems.length == 1){
        elems.href = url;
        elems.target="_blank";
        elems.rel="noopener noreferrer";
    }
    else{
        for (i=0; i<elems.length; i++){
            elems[i].href = url;
            elems[i].target="_blank";
            elems[i].rel="noopener noreferrer";
        }
    }
}
