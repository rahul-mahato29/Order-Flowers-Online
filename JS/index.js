let menuBar = document.querySelector('.fa-bars');
let navBar = document.querySelector('.navbar');

let addCart = document.querySelector('.fa-shopping-cart');
let cartList = document.querySelector('.addcart');

let User = document.querySelector('.fa-user');
let userDetail = document.querySelector('.user');



menuBar.addEventListener('click', ()=>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');

    //if cart is open then close it.
    addCart.classList.remove('active');
    cartList.classList.remove('active');

    //if UserDetail is open then close it.
    User.classList.remove('active');
    userDetail.classList.remove('active');
});



addCart.addEventListener('click', ()=>{
    addCart.classList.toggle('active');
    cartList.classList.toggle('active');

    //if menu is open then close it.
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');

    //if UserDetail is open then close it.
    User.classList.remove('active');
    userDetail.classList.remove('active');
});



User.addEventListener('click', ()=>{
    User.classList.toggle('active');
    userDetail.classList.toggle('active');

     //if cart is open then close it.
     addCart.classList.remove('active');
     cartList.classList.remove('active');

    //if menu is open then close it.
     menuBar.classList.remove('fa-times');
     navBar.classList.remove('active');
});
