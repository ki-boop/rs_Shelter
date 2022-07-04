let flag_burger = 0;
let burger = document.querySelector('.icon_burger');
let none = () => {nav_menu.style.display = 'none';
                  logo.style.display = 'none';}

let nav_menu = document.querySelector('.nav-menu');
let logo = document.querySelector('#logo1');
let animation_right = document.querySelector('.animation_right')
let block_shadow = document.querySelector('.overflow')
let tablet = () =>{
    if(document.documentElement.clientWidth>767) {
        nav_menu.removeAttribute('style');
        logo.style.display = 'none';
        slide_out();
    }
}
window.onresize = tablet;
let slide_in = () =>{
    flag_burger = 1;
    burger.style.transform = 'rotate(90deg)';
    nav_menu.style.display = 'flex';
    nav_menu.classList.add('animation_left');
    nav_menu.classList.remove('animation_right')
    logo.style.display = 'block';
    nav_menu.style.right = '0px'
    burger.nextElementSibling.removeEventListener("animationend",none);
    document.documentElement.style.overflow = 'hidden';
    block_shadow.style.display = 'block'
    console.log(document.documentElement.clientWidth);
    burger.style.position = 'absolute';
}
let slide_out = () =>{
    flag_burger = 0;
    burger.style.transform = 'rotate(0deg)';
    nav_menu.classList.add('animation_right');
    nav_menu.classList.remove('animation_left')
    console.log(burger.nextElementSibling);
    nav_menu.style.right = '-320px'
    burger.nextElementSibling.addEventListener("animationend",none)
    document.documentElement.style.overflow = 'auto';
    burger.style.position = 'inherit'
}

burger.childNodes[1].addEventListener('click',()=>{
    flag_burger == 0?slide_in() : slide_out();  
    
    burger.style.transition = '1s';
    burger.style.right = '20px';
})
burger.childNodes[1].addEventListener('animationend',()=>burger.removeAttribute('style'))

document.querySelector('header').addEventListener('click', (event)=>{
    console.log(document.querySelector('.subtitle'));
    if(event.target !=document.querySelector('header')){
        if( event.target !== document.querySelector('.hrefs') && 
                                                event.target !== burger.childNodes[1] &&
                                                event.target !== document.querySelector('h1') &&
                                                event.target !== document.querySelector('.logo')&&
                                                event.target !== document.querySelector('.subtitle')&&
                                                event.target !== burger.nextElementSibling) slide_out();
    }
    console.log(event.target);
})
//------------------------------------------------------------------------------------------------------------------------------//
let maxPage;
const START_PG = document.querySelector('#start');
const PREVIOUS_PG = document.querySelector('#previous');
const NEXT_PG = document.querySelector('#next');
const END_PG = document.querySelector('#end');
const ACTIVE_PG = document.querySelector('#active');
let numOfPage = 0;
const CONTEINER_CARDS = document.querySelector(".cards1")
console.log(numOfPage);
const MY_WINDOW = document.querySelector('.my-window')


START_PG.addEventListener('click', ()=>{
    fillPage(0);
    ACTIVE_PG.innerHTML = '1';
    numOfPage = 0;
    START_PG.classList.add("disabled");
    PREVIOUS_PG.classList.add("disabled");
    START_PG.classList.remove("active");
    PREVIOUS_PG.classList.remove("active");
    END_PG.classList.add("active");
    NEXT_PG.classList.add("active");
    END_PG.classList.remove("disabled");
    NEXT_PG.classList.remove("disabled");

})
PREVIOUS_PG.addEventListener('click',()=>{
    if(numOfPage>0) {
        console.log(numOfPage);
        fillPage(numOfPage-1);
        ACTIVE_PG.innerHTML = numOfPage;
        numOfPage--;
        START_PG.classList.add("active");
        PREVIOUS_PG.classList.add("active");
        START_PG.classList.remove("disabled");
        PREVIOUS_PG.classList.remove("disabled");
        END_PG.classList.add("active");
        NEXT_PG.classList.add("active");
        END_PG.classList.remove("disabled");
        NEXT_PG.classList.remove("disabled")

    }
    if(parseInt(ACTIVE_PG.innerHTML,10) === 1)
    {
        END_PG.classList.add("active");
        NEXT_PG.classList.add("active");
        END_PG.classList.remove("disabled");
        NEXT_PG.classList.remove("disabled")
        START_PG.classList.remove("active");
        PREVIOUS_PG.classList.remove("active");
        console.log(parseInt(ACTIVE_PG.innerHTML,10) == maxPage);
    }
    
})

NEXT_PG.addEventListener('click', ()=>{
    if(numOfPage<maxPage-1) {
        numOfPage++;
        
        ACTIVE_PG.innerHTML = numOfPage+1;
        fillPage(numOfPage);
        START_PG.classList.add("active");
        PREVIOUS_PG.classList.add("active");
        START_PG.classList.remove("disabled");
        PREVIOUS_PG.classList.remove("disabled");
    }
    if(parseInt(ACTIVE_PG.innerHTML,10) == maxPage)
    {
        END_PG.classList.add("disabled");
        NEXT_PG.classList.add("disabled");
        END_PG.classList.remove("active");
        NEXT_PG.classList.remove("active")
        START_PG.classList.remove("disabled");
        PREVIOUS_PG.classList.remove("disabled");
        console.log(parseInt(ACTIVE_PG.innerHTML,10) == maxPage);
    }
    
 
})

END_PG.addEventListener('click', ()=>{
    fillPage(maxPage-1);
    ACTIVE_PG.innerHTML = maxPage;
    numOfPage = parseInt(ACTIVE_PG.innerHTML,10);
    START_PG.classList.add("active");
    PREVIOUS_PG.classList.add("active");
    START_PG.classList.remove("disabled");
    PREVIOUS_PG.classList.remove("disabled");
    END_PG.classList.add("disabled");
    NEXT_PG.classList.add("disabled");
    END_PG.classList.remove("active");
    NEXT_PG.classList.remove("active");
    

    
})
let selectGroups = () =>{
    if(document.documentElement.clientWidth>1279){
        return 6;
    }
    if(document.documentElement.clientWidth>767) {
        return  8;
    }
    if(document.documentElement.clientWidth>319){
        return  16;
    }
}

maxPage = selectGroups();


let fillPage = function (num){   
    let countCard = 48/maxPage;
    let temp = countCard;
    if(num*countCard+countCard===56) temp = 0;
    CONTEINER_CARDS.innerHTML =''

    for(let i = num*countCard;i<num*countCard+temp;i++){
        let card = document.createElement("div");
        card.classList.add('card');
        card.innerHTML =`
                <div class="pet">
                  <img src="${morePets[i].img}"/>
                </div>
                <div class="cardBox">
                  <div class="title">${morePets[i].name}</div>
                  <div class="button_secondary">Learn more</div>
                </div>
              `
        CONTEINER_CARDS.appendChild(card);


        card.addEventListener('click',()=>{
            document.querySelector('.window-wrapper').style.display = 'flex';
            let current_pet;
            pets.forEach(pet => {
                if(card.innerText.split('\n')[0].toUpperCase() === pet.name.toUpperCase()) {
                    current_pet = pet;
                };
            });
            MY_WINDOW.style.display='flex';
            let cardPet = `
            <div class="wrapper-card">
              <div class="close"><img src="../../assets/icons/modal_close_button.png"></div>
              <div class="modal-content">
                <div class="img"><img src=${current_pet.img}></div>
                <div class="pet-about">
                  <div class="heading">${current_pet.name}</div>
                  <div class="subheading">${current_pet.type} - ${current_pet.breed}</div>
                  <div class="main-info">${current_pet.description}</div>
                  <div class="pet-list">
                    <ul>
                      <li><span><strong>Age:</strong> ${current_pet.age}</span></li>
                      <li><span><strong>Inoculations:</strong> ${current_pet.inoculations}</span></li>
                      <li><span><strong>Diseases:</strong> ${current_pet.diseases}</span></li>
                      <li><span><strong>Parasites:</strong> ${current_pet.parasites}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`
          
          MY_WINDOW.insertAdjacentHTML('afterend',cardPet)
          document.documentElement.style.overflow = 'hidden';
          MY_WINDOW.addEventListener('click',()=>{
            document.querySelector('.window-wrapper').style.display = 'none';
            document.documentElement.style.overflow = 'auto';
            MY_WINDOW.style.display= 'none';
            document.querySelector('.wrapper-card').remove();
          })
          const CLOSE_BTN = document.querySelector('.close')
          CLOSE_BTN.addEventListener('click',()=>{
            document.querySelector('.window-wrapper').style.display = 'none';
            document.documentElement.style.overflow = 'auto';
              MY_WINDOW.style.display= 'none';
              document.querySelector('.wrapper-card').remove();
          })

          MY_WINDOW.addEventListener('mouseover',()=>{
            CLOSE_BTN.style.opacity = '1';
          })
          MY_WINDOW.addEventListener('mouseleave',()=>{
            CLOSE_BTN.style.opacity = '0.5';
          })

          CLOSE_BTN.addEventListener('mouseover',()=>{
            CLOSE_BTN.style.opacity = '1';
            CLOSE_BTN.style.cursor = 'pointer';
          })
          CLOSE_BTN.addEventListener('mouseleave',()=>{
            document.querySelector('.close').style.opacity = '0.5';
          })
        })

        }}
    





//-------------------------------------------------------------------------------------------------------------------------------//
let Jennifer = {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
}



let  Sophia = {
    name: "Sophia",
    img: "../../assets/images/pets-sophie.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
}


let Woody ={
name: "Woody",
img: "../../assets/images/pets-woody.png",
type: "Dog",
breed: "Golden Retriever",
description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
age: "3 years 6 months",
inoculations: ["adenovirus", "distemper"],
diseases: ["right back leg mobility reduced"],
parasites: ["none"]
}
let Scarlett ={
name: "Scarlett",
img: "../../assets/images/pets-scarlet.png",
type: "Dog",
breed: "Jack Russell Terrier",
description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
age: "3 months",
inoculations: ["parainfluenza"],
diseases: ["none"],
parasites: ["none"]
}


let Katrine={
name: "Katrine",
img: "../../assets/images/pets-katrine.png",
type: "Cat",
breed: "British Shorthair",
description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
age: "6 months",
inoculations: ["panleukopenia"],
diseases: ["none"],
parasites: ["none"]
}


let Timmy ={
name: "Timmy",
img: "../../assets/images/pets-timmy.png",
type: "Cat",
breed: "British Shorthair",
description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
age: "2 years 3 months",
inoculations: ["calicivirus", "viral rhinotracheitis"],
diseases: ["kidney stones"],
parasites: ["none"]
}


let Freddie ={
name: "Freddie",
img: "../../assets/images/pets-freddie.png",
type: "Cat",
breed: "British Shorthair",
description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
age: "2 months",
inoculations: ["rabies"],
diseases: ["none"],
parasites: ["none"]
}


let Charly ={
name: "Charly",
img: "../../assets/images/pets-charly.png",
type: "Dog",
breed: "Jack Russell Terrier",
description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
age: "8 years",
inoculations: ["bordetella bronchiseptica", "leptospirosis"],
diseases: ["deafness", "blindness"],
parasites: ["lice", "fleas"]
}

let pets = [Jennifer,Sophia,Woody,Scarlett,Katrine,Timmy,Freddie,Charly]
const mix = ()=>Math.random() - 0.5;
let morePets = [];
if(maxPage == 6){
    for (let i = 0;i<6;i++ ){
        let petsMix = pets.sort(mix);
        morePets = morePets.concat(petsMix);
    }
    fillPage(0);
}
if(maxPage == 8 || maxPage == 16){
     morePets = pets;
    for(let i =0; i<6;i++){
        pets.push(pets[0]);
        pets.shift()
        morePets = morePets.concat(pets)
    }
    fillPage(0);
}
console.log(morePets);
