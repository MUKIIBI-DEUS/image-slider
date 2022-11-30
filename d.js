// let button1=document.querySelector('#deus');
// button1.setAttribute('onclick',"prev()");
// let button2=document.querySelector('#deus1');
// button2.setAttribute('onclick',"prev()");

let body=document.querySelector('body');
let imag=document.querySelector('img');
let mover=document.querySelector('.mover');
let bucket=["1.jpg","2.jpg","3.jpg","4.jpg"];
let num=0;
//--------version1 -------------
// function next(){
// if(num<=2){
// num++;
// imag.src=bucket[num];
// console.log(num);
// }
// // else if(num>3){
// // }
// else{
//     confirm("are you done with pic");
// }
// }
// function prev(){
//     if(num){
//         num--;
//         imag.src=bucket[num];
//         }
// }



//--------version2 -------------



function prev(){
if(num==3){
    imag.src=bucket[2];
    num--;
    console.log("num value"+" :"+num);
    mover.style.width="66.6%";
}
else if(num==2){
    imag.src=bucket[1];
    num--;
    console.log("num value"+" :"+num);
    mover.style.width="33.3%";
}
else if(num==1){
    imag.src=bucket[0];
    num--;
    console.log("num value"+" :"+num);
    mover.style.width="10%";
}
else{
    alert("Please press the next button");
}
}
function next() {
    if(num==0){
        imag.src=bucket[1];
        num++;
        console.log(num);
        mover.style.width="33.3%";
    }
    else if(num==1){
        imag.src=bucket[2];
        num++;
        console.log(num);
        mover.style.width="66.6%";
    }
    else if(num==2){
        imag.src=bucket[3];
        num++;
        console.log(num);
        mover.style.width="100%";
    }
else{
    alert("Please press the preview button");
}    
}
