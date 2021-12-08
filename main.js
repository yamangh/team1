"use strict";
function cheak(){

    var text =window.txt.value;
    var patt;
    patt=/^\d{5}/;
    var b=patt.test(text);
    if(b){
        window.h.innerhtml="<div>Valid</div>" ;
    }
    else{
        window.h.innerhtml="<div> in Valid</div>";
    }

}
// function 1
/*function cheak1(){
    var textt =window.txtt.value;
    var patt;
    patt=/\% \d\.\d/;
    var b=patt.test(textt);
    if(b){
        window.h1.innerhtml="<div>Valid</div>";
    }
    else{
        window.h1.innerhtml="<div> in Valid</div>";
    }
// function 2
}*/
/*function cheak2(){
    var texxt =window.txxt.value;
    var patt;
    patt=/\< [abc]  \D [abc]\>/;
    var b=patt.test(texxt);
    if(b){
        window.h2.innerhtml="<div>Valid</div>";
    }
    else{
        window.h2.innerhtml="<div> in Valid</div>";
    }

}*/
  
 