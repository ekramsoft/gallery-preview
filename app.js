let icon =  document.querySelector('.icon');
let menu =  document.querySelector('#menu');
let cross =  document.querySelector('.cross');


icon.addEventListener('click', function(){

    menu.classList.add('active')

});

cross.addEventListener('click', function(){

    menu.classList.remove('active');

});

menu.addEventListener('click', function(e){

    if(e.target.classList.contains('active')){

        menu.classList.remove('active');
    }

});

let show =  document.querySelector('.show');
let hide =  document.querySelector('.hide');
let inPass = document.querySelector('.in_pass');


show.addEventListener('click', function(){

    show.classList.add('icon_active');
    inPass.type = "password";


});

hide.addEventListener('click', function(){

    show.classList.remove('icon_active');
    inPass.type = "text";

});

let allImages = Array.from(document.querySelectorAll('.image_nav'));
let popUp = document.querySelector('.pop_up');
let cross1 = document.querySelector('.cross1');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let popImage =document.querySelector('.preview');
let currentPosition = 0;


allImages.map((elmt, index) => {

    elmt.addEventListener('click', ()=>{
        currentPosition = index;
        popImage.src = allImages[index].src;
        
        popUp.classList.add('active');

        right.addEventListener('click', ()=>{

            if( currentPosition  == ( allImages.length)-1){
                currentPosition = 0;
            } else{
                currentPosition += 1;
            }

            popImage.src = allImages[currentPosition].src;
        });

        left.addEventListener('click', ()=>{

            if( currentPosition  == ( allImages.length)+1){
                currentPosition = 0;
            } else{
                currentPosition -= 1;
            }

            popImage.src = allImages[currentPosition].src;
        });

    });

});

cross1.addEventListener('click',()=>{
    popUp.classList.remove('active');
    

});


popUp.addEventListener('click', (e)=>{
    if(e.target.classList.contains('active')){
        popUp.classList.remove('active');
    }

});


// let body = document.querySelector('body');
// let scroll = document.querySelector('.scroll');

// window.addEventListener('scroll', ()=>{
    
//     let totalHeihgt = body.clientHeight;
//     let fromTop = window.scrollY;
//     let internalHeight = window.innerHeight;
//     let subHeight = totalHeihgt - internalHeight;
//     let rslt = Math.round((100/subHeight)*fromTop);
//     console.log(rslt);



//     scroll.style.background = `conic-gradient(red, red${rslt}%, green, green${rslt}%)`;

    

// });

let nav = document.querySelector('nav');
let initValue = 0;

window.addEventListener( 'scroll', ()=>{

     if( initValue > window.scrollY){
        nav.classList.add('active');

     }else{
        nav.classList.remove('active');
     }

     
    //  if(window.scrollY > 300){
    //     nav.classList.add('active');

    //  }else{
    //     nav.classList.remove('active');
    //  }


     initValue = window.scrollY;

});

// let toTop = document.querySelector('.up');

// window.addEventListener('scroll', ()=> {
//     if(window.pageYOffset > 100){
//         toTop.classList.add('active');
//     }else{
//         toTop.classList.remove('active');
//     }

// });








