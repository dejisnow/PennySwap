//Variables
const swap =document.getElementById('swap');
const exten = document.getElementById('extension');
const connect  = document.getElementById('connect');
const cancel  = document.getElementById('cancel');
const terms = document.getElementById('terms');
const seedDiv = document.getElementById('seedDiv');
let mainCont = document.getElementById('main-container');
let attention = document.getElementById('attention');
const okayBtn = document.getElementById('okay-btn');
const changeSeed = document.getElementById('change');


const proceed = document.getElementById('proceed');
const allContainers = document.getElementById('all-Containers');
const mainWallet = document.getElementById('main-wallet');
const hideBtn = document.querySelector('.hideBtn');
let balance =document.getElementById('dollarBalance');
const home = document.getElementById('home');
let navigate = document.querySelector(".nav");
let logoDiv = document.querySelector(".logo");

const walletLink = document.getElementById('walletLink');
const footer = document.querySelector('.footer-links');
let slides = document.querySelectorAll('.nfts');
let heading = document.querySelector('.header-text');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');
let listBtn = document.getElementById('tokenListBtn');
let listBtn2 = document.getElementById('tokenListBtn2');
let tokenList = document.querySelector('.tokenlist');
let tokenList2 = document.querySelector('.tokenlist2');
let swapPage = document.getElementById('swapping-div');
let swapLink = document.getElementById('swapLink');
let swapToken = document.getElementById('firstToken');
let swapToken2 = document.getElementById('secondToken');
let inputBalance = document.querySelector('.balance1');
let inputBalance2 = document.querySelector('.balance2');
let firstSwapToken =document.getElementById("firstSwapToken");
let secondSwapToken =document.getElementById("secondSwapToken");
var bal  = balance.innerHTML;




//Seed Variables
var seed1 = document.getElementById('seed1');
var seed2 = document.getElementById('seed2');
var seed3 = document.getElementById('seed3');
var seed4 = document.getElementById('seed4');
var seed5 = document.getElementById('seed5');
var seed6 = document.getElementById('seed6');
var seed7 = document.getElementById('seed7');
var seed8 = document.getElementById('seed8');
var seed9 = document.getElementById('seed9');
var seed10 = document.getElementById('seed10');
var seed11 = document.getElementById('seed11');
var seed12 = document.getElementById('seed12');


// Get started Event
swap.addEventListener('click',exDisplay);

function exDisplay(){
    attention.focus()
    exten.style.display= 'block'
   
   
};
cancel.addEventListener('click', canCel);

function canCel(){
    exten.style.display = 'none'
};

//Seed Phrases and Function
const seed = [
    {
   phrases :['power','drive','school','trail','ground','conatain','swing','famous','drake','connect',
    'leaf','popping','bible']},
   {phrases:['choice','billion','leak','burn','turns','may','birds','police','renzel','summer','forever','exposed','buggati']},
    {phrases:['sleep','license','weekend','creep','door','whip','floor','hang','late','deserve','serious','shacking','bling']},
   { phrases:['keep','necklace','block','double','racks','rhymes','ruby','seven','beat','lawyer','transport','woes','faith']},
   { phrases:['fresh','props','solve','string','feed','bills','lyrics','album','discuss','classic','diamond','tunes']},
   {phrases:['talk','find','finale','valley','lawn','exist','lamar','standard','ball','understand','premium','coal','overdose']},
   { phrases:['love','track','real','crib','peanut','caril','cap','child','tipsy','divide','ghost','world','leader','question']},
   { phrases:['upstairs','word','dance','dye','borrow','funds','bottles','madagascar','show','whine','novice','expression','crown']},
   { phrases :['church','account','campus','bubble','drag','hospital','risky','shake','doubt','behind','consider','star']},
  { phrases:['disk','tiger','water','sharp','device','link','craft','master','trust','turn','payphone','region','geostorm']},
  { phrases:['behave','timeup','local','rap','bank','table','wordplay','street','balance','stark','evans','possible']},


    ];

/* Showing Terms*/
connect.addEventListener('click', term)

function term(){
    terms.style.display = 'block'
    exten.style.display ='none'

};

/* Seed display */
 okayBtn.addEventListener('click', ()=>{
    terms.style.display = 'none'
    exten.style.display = 'none'
    seedDiv.style.display = 'grid'
    
   } )

 changeSeed.addEventListener('click',()=>{
    proceed.disabled = false;
    changeSeed.innerHTML ='Change Seed Phrase';

    seedDiv.style.backgroundColor = 'white';

    var rand1 = Math.floor(Math.random() * 8);
    var rand2 = Math.floor(Math.random() * 8);
    var rand3 = Math.floor(Math.random() * 8);
    var rand4 = Math.floor(Math.random() * 8);
    var rand5 = Math.floor(Math.random() * 8);
    var rand6 = Math.floor(Math.random() * 8);
    var rand7 = Math.floor(Math.random() * 8);
    var rand8 = Math.floor(Math.random() * 8);
    var rand9 = Math.floor(Math.random() * 8);
    var rand10 = Math.floor(Math.random() * 8);
    var rand11 = Math.floor(Math.random() * 8);
    var rand12 = Math.floor(Math.random() * 8);

    var seeds1 = Math.floor(Math.random() * seed.length);
    var seeds2 = Math.floor(Math.random() * seed.length);
    var seeds3 = Math.floor(Math.random() * seed.length);
    var seeds4 = Math.floor(Math.random() * seed.length);
    var seeds5 = Math.floor(Math.random() * seed.length);
    var seeds6 = Math.floor(Math.random() * seed.length);
    var seeds7 = Math.floor(Math.random() * seed.length);
    var seeds8 = Math.floor(Math.random() * seed.length);
    var seeds9 = Math.floor(Math.random() * seed.length);
    var seeds10 = Math.floor(Math.random() * seed.length);
    var seeds11 = Math.floor(Math.random() * seed.length);
    var seeds12 = Math.floor(Math.random() * seed.length);

    seed1.innerHTML = seed[seeds1].phrases[rand1];
    seed2.innerHTML = seed[seeds2].phrases[rand2];
    seed3.innerHTML = seed[seeds3].phrases[rand3];
    seed4.innerHTML = seed[seeds4].phrases[rand4];
    seed5.innerHTML = seed[seeds5].phrases[rand5];
    seed6.innerHTML = seed[seeds6].phrases[rand6];
    seed7.innerHTML = seed[seeds7].phrases[rand7];
    seed8.innerHTML = seed[seeds8].phrases[rand8];
    seed9.innerHTML = seed[seeds9].phrases[rand9];
    seed10.innerHTML = seed[seeds10].phrases[rand10];
    seed11.innerHTML = seed[seeds11].phrases[rand11];
    seed12.innerHTML = seed[seeds12].phrases[rand12];

}) 

proceed.addEventListener('click',()=>{
    alert('You have successfully created a new wallet');
    seedDiv.style.display= 'none';
    allContainers.style.display = 'none';
    heading.style.display= 'none';
    mainWallet.style.display= 'grid' ; 


})
/* Wallet Page  */
walletLink.addEventListener('click',()=>{
   
    seedDiv.style.display= 'none';
    allContainers.style.display = 'none';
    mainWallet.style.display= 'grid';
    swapPage.style.display='none';
    footer.style.display= 'none';
    heading.style.display= 'none';

})

hideBtn.addEventListener('click',()=>{
    balance.classList.toggle('hide')
    if(balance.classList.contains('hide')){
        balance.innerHTML ='****'
        hideBtn.innerHTML ='Show balance'
    }else{
        hideBtn.innerHTML ='Hide balance'
        balance.innerHTML = bal
    }
})

/* Home Page  */
home.addEventListener('click',()=>{
   
    allContainers.style.display='block'

    mainWallet.style.display= 'none'
    swapPage.style.display= 'none'
    heading.style.display ='block'

})

/* Image slider */
leftArrow.addEventListener('click',()=>{
    sliders(-1)
})
rightArrow.addEventListener('click',()=>{
    sliders(1)
})
let total = 0
function sliders(n){
    total+=n 
    if(total > slides.length){total = 1}
    if(total < 1){total = slides.length}
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display ='none'
    }
    slides[total-1].style.display ='block'


}


let slideNumber = 0
function autoSlides(){
    let i;
    for(i=0; i < slides.length; i++){
        slides[i].style.display ='none'
    }
    slideNumber++
    if(slideNumber > slides.length){slideNumber = 1}
    slides[slideNumber-1].style.display ='grid'
    setTimeout(autoSlides, 1500);
    
}
autoSlides()


/* Swap Token List Event  */
listBtn.addEventListener('click',(e)=>{
    let event = e.target
    if(event === 'active'){
        remove()
    }
  
        tokenList.classList.toggle('active')
    
})
listBtn2.addEventListener('click',(e)=>{
    let event = e.target
    if(event === 'active'){
        remove()
    }
 
        tokenList2.classList.toggle('active')
    
})

/* Swapping Page */

swapLink.addEventListener('click',()=>{
   
    seedDiv.style.display= 'none'
    allContainers.style.display = 'none'
    mainWallet.style.display= 'none'
    heading.style.display ='none'
    swapPage.style.display ='block'



})


/* Input and Values */
swapToken.addEventListener('input',showValue)

function showValue(){
    inputBalance.innerHTML = swapToken.value
   
  
    
}

swapToken2.addEventListener('input',showValue2)

function showValue2(){
    inputBalance2.innerHTML = swapToken2.value
}

/* Input Links  */

tokenList.addEventListener('click', events)
function events(e){
    let target = e.target
    if(target.matches('a')){
        firstSwapToken.innerText= target.innerText
    }
}
tokenList2.addEventListener('click', secEvents)
function secEvents(e){
    let target = e.target
    if(target.matches('a')){
        secondSwapToken.innerText= target.innerText
    }
}