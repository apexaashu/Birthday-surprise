/*=========================================
      OPERATION PUCHKU ULTIMATE
          SCRIPT.JS STEP 1
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*=================================
            ELEMENTS
=================================*/

const loader=document.getElementById("loader");

const welcome=document.getElementById("welcome");

const main=document.getElementById("mainContent");

const startBtn=document.getElementById("startButton");

const bgMusic=document.getElementById("bgMusic");

const musicToggle=document.getElementById("musicToggle");

const openMusic=document.getElementById("openMusic");

const beginJourney=document.getElementById("beginJourney");

/*=================================
        LOADER HIDE
=================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("loaderHide");

},1800);

});

/*=================================
        START JOURNEY
=================================*/

startBtn.addEventListener("click",()=>{

welcome.style.display="none";

main.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

bgMusic.play().catch(()=>{});

});

/*=================================
        PLAY MUSIC
=================================*/

function playMusic(){

bgMusic.play().catch(()=>{});

}

function pauseMusic(){

bgMusic.pause();

}

/*=================================
      MUSIC TOGGLE
=================================*/

musicToggle.addEventListener("click",()=>{

if(bgMusic.paused){

playMusic();

musicToggle.innerHTML="🔊";

}

else{

pauseMusic();

musicToggle.innerHTML="🎵";

}

});

if(openMusic){

openMusic.addEventListener("click",()=>{

playMusic();

musicToggle.innerHTML="🔊";

});

}

/*=================================
      BEGIN JOURNEY
=================================*/

if(beginJourney){

beginJourney.addEventListener("click",()=>{

const story=document.getElementById("storyIntro");

if(story){

story.scrollIntoView({
behavior:"smooth"
});

}

});

}

/*=================================
      FADE ANIMATION
=================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

document.querySelectorAll(

"section,.memoryCard,.timelineCard,.storyCard,.giftCard"

)

.forEach(item=>{

item.classList.add("fadeIn");

observer.observe(item);

});

/*=================================
      PREVENT VIDEO AUTO PLAY
=================================*/

const video=document.getElementById("birthdayVideo");

if(video){

video.pause();

}

/*=================================
        CONSOLE MESSAGE ❤️
=================================*/

console.log(

"❤️ Operation Puchku Ultimate Loaded Successfully ❤️"

);

});
/*=========================================
        SCRIPT.JS STEP 2
=========================================*/

/*============ PHOTO VIEWER ============*/

const photoViewer=document.getElementById("photoViewer");

const viewerImage=document.getElementById("viewerImage");

const closePhoto=document.getElementById("closePhoto");

const galleryImages=document.querySelectorAll(".memoryCard img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

photoViewer.style.display="flex";

viewerImage.src=img.src;

document.body.style.overflow="hidden";

});

});

closePhoto.addEventListener("click",()=>{

photoViewer.style.display="none";

document.body.style.overflow="auto";

});

photoViewer.addEventListener("click",(e)=>{

if(e.target===photoViewer){

photoViewer.style.display="none";

document.body.style.overflow="auto";

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

photoViewer.style.display="none";

document.body.style.overflow="auto";

}

});

/*=========================================
        LOVE LETTER SYSTEM
=========================================*/

document.addEventListener("DOMContentLoaded", function(){

    const openLetter =
        document.getElementById("openLetter");

    const letterPaper =
        document.getElementById("letterPaper");


    /* SAFETY CHECK */

    if(!openLetter){

        console.log(
            "❌ Open Letter button not found"
        );

        return;

    }


    if(!letterPaper){

        console.log(
            "❌ Letter paper not found"
        );

        return;

    }


    /* START CLOSED */

    letterPaper.classList.remove("show");


    let letterOpened = false;


    /* BUTTON */

    openLetter.addEventListener(
        "click",
        function(){

            letterOpened =
                !letterOpened;


            if(letterOpened){

                letterPaper.classList.add("show");

                openLetter.innerHTML =
                    "Close Letter 💌";

                letterPaper.scrollIntoView({

                    behavior:"smooth",

                    block:"center"

                });

            }

            else{

                letterPaper.classList.remove("show");

                openLetter.innerHTML =
                    "Open Letter 💌";

            }

        }
    );

});

/*=========================================
      SECRET ENVELOPE
      UMAA — MY ONLY CHOICE ❤️
=========================================*/

const secretText =
    document.getElementById("secretText");

const openSecret =
    document.getElementById("openSecret");


const secretMessages = [

    `
        Pata hai Umaa...

        <br><br>

        mujhe aap mein kya sabse zyada pasand hai?

        <br><br>

        Ye nahi ki aap kaise ho...

        <br>

        balki ye ki...

        <br><br>

        <b>
        Aap mere liye aap ho. ❤️
        </b>
    `,


    `
        ha kabhi-kabhi aapke harkaton se...

        <br><br>

        mujhe bura lagta hai
        aap par gussa aata hai
        par wo sab ek pal me hi khatam ho jata hai jab bhi me aapki aawaj sunta hun

        <br><br>

        <b>
        Mera dil aapko chahta hai, Umaa. 🫀
        </b>
    `,


    `
        Maine aapko kisi comparison mein
        nahi chuna...

        <br><br>

        Maine aapko isliye chuna...

        <br><br>

        kyunki mere dil ne
        aapko apna maana.

        <br><br>

        🫂❤️
    `,


    `
        Aur agar aapko kabhi lage...

        <br><br>

        ki aapki jagah
        koi aur le sakta hai...

        <br><br>

        toh meri taraf se
        ek baat yaad rakhna...

        <br><br>

        <b>
        Aapki jagah
        mere dil mein hai kisi aur ki nahi.
        ❤️
        </b>
    `,


    `
        Mujhe kisi aur ladki
        ki zarurat nahi hai, Umaa.

        <br><br>

        Meri nazar mein
        meri favourite girl...

        <br>

        <b>
        Aap ho. ❤️
        </b>

        <br><br>

        Aur agar mujhe
        baar-baar chunna pade...

        <br><br>

        <b>
        main har baar aapko hi chununga.
        🫀❤️
        </b>
    `,


    `
        <div class="secretFinal">

            Not because there is
            no one else...

            <br><br>

            <b>
            but because I don't want anyone else.
            </b>

            <br><br>

            <div class="secretChoice">

                Umaa...

                <br>

                You're not one of my choices...

                <br>

                <b>
                You're my choice. 🌙❤️
                </b>

            </div>


            <div class="secretSignature">

                — Yours, Shakti ❤️

            </div>

        </div>
    `

];


let secretIndex = 0;


if(secretText && openSecret){

    openSecret.addEventListener("click",()=>{

        if(secretIndex >= secretMessages.length){

            return;

        }


        /* Fade out */

        secretText.style.opacity = "0";

        secretText.style.transform =
            "translateY(12px)";


        setTimeout(()=>{

            secretText.innerHTML =
                secretMessages[secretIndex];


            secretText.style.opacity = "1";

            secretText.style.transform =
                "translateY(0)";


            secretIndex++;


            /* NEXT BUTTON */

            if(
                secretIndex <
                secretMessages.length
            ){

                openSecret.innerHTML =
                    "One More Thing... ❤️";

            }


            /* FINAL */

            else{

                openSecret.innerHTML =
                    "Secret Revealed 🌙";

                openSecret.disabled = true;

            }

        },400);

    });

}

/*=========================================
      PREMIUM ROSE - FINAL VERSION
=========================================*/

function acceptMyRose(){

    const button =
        document.getElementById("acceptRose");

    const message =
        document.getElementById("roseMessage");

    if(!button || !message){
        return;
    }

    /* Prevent double click */

    if(button.disabled){
        return;
    }

    /* Phone vibration */

    if(navigator.vibrate){
        navigator.vibrate([80, 40, 120]);
    }

    /* Button state */

    button.disabled = true;

    button.innerHTML =
        "Accepted With Love 🌹";

    button.style.transform =
        "scale(.96)";

    setTimeout(()=>{

        button.style.transform =
            "";

    },180);

    /* Show message */

    message.style.display = "block";

    message.style.opacity = "0";
    message.style.transform = "translateY(10px)";

    setTimeout(()=>{

        message.style.transition =
            "all .6s ease";

        message.style.opacity = "1";
        message.style.transform =
            "translateY(0)";

    },50);

    /* Premium floating hearts */

    for(let i = 0; i < 50; i++){

        const heart =
            document.createElement("span");

        heart.innerHTML =
            Math.random() > .5 ? "❤️" : "💕";

        heart.className =
            "premiumRoseHeart";
            heart.style.fontSize =
    (24 + Math.random() * 10) + "px";

        heart.style.left =
            (35 + Math.random() * 30) + "vw";

        heart.style.bottom =
            "80px";

        heart.style.animationDuration =
            (3.5 + Math.random() * 2) + "s";

        heart.style.animationDelay =
            (Math.random() * .5) + "s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6500);

    }

}

/*============ NEXT SECTION ============*/

const nextSection=document.getElementById("nextSection");

if(nextSection){

nextSection.addEventListener("click",()=>{

document.getElementById("loveLetter")

.scrollIntoView({

behavior:"smooth"

});

});

}

console.log("✅ Script Step 2 Loaded");
/*=========================================
      OPERATION PUCHKU ULTIMATE
        CLEAN GIFT SYSTEM
=========================================*/

const giftCards = document.querySelectorAll(".giftCard");
const giftPopup = document.getElementById("giftPopup");
const giftContent = document.getElementById("giftContent");
const closeGift = document.getElementById("closeGift");



/*=========================================
        CURRENT UNLOCKED GIFT
=========================================*/

/*
   0 = Gift 1 unlocked
   1 = Gift 2 unlocked
   ...
*/

let unlocked = 0;


/*=========================================
          OPEN GIFT FUNCTION
=========================================*/

function openGift(index){

/* Safety check */

if(index < 0 || index >= gifts.length){

return;

}


/* Locked gift ko open mat karo */

if(index > unlocked){

return;

}


/* Gift content */

giftContent.innerHTML = `

<h2>${gifts[index].title}</h2>

<div class="giftMessage">

${gifts[index].text}

</div>

`;


/* Popup show */

giftPopup.style.display = "flex";


/*
   Body ko lock kar rahe hain
   taaki background move na ho
*/

document.body.style.overflow = "hidden";


/*
   Next gift unlock
   sirf tab jab current gift
   pehli baar complete sequence me open hua
*/

if(index === unlocked && unlocked < giftCards.length - 1){

unlocked++;

unlockGift(unlocked);

saveGiftProgress();

}


/* Confetti */

confettiBurst();

}


/*=========================================
          UNLOCK NEXT GIFT
=========================================*/

function unlockGift(index){

if(!giftCards[index]){

return;

}

const card = giftCards[index];

card.classList.remove("locked");


const btn = card.querySelector(".giftBtn");

if(btn){

btn.innerHTML = "Open ❤️";

}

}


/*=========================================
          GIFT CARD CLICK
=========================================*/

giftCards.forEach((card,index)=>{

card.addEventListener("click",()=>{

openGift(index);

});

});


/*=========================================
            CLOSE POPUP
=========================================*/

function closeGiftPopup(){

giftPopup.style.display = "none";

/*
   Background scrolling
   wapas enable
*/

document.body.style.overflow = "";

}


if(closeGift){

closeGift.addEventListener("click",(event)=>{

event.stopPropagation();

closeGiftPopup();

});

}


/*=========================================
       CLICK OUTSIDE POPUP TO CLOSE
=========================================*/

if(giftPopup){

giftPopup.addEventListener("click",(event)=>{

if(event.target === giftPopup){

closeGiftPopup();

}

});

}


/*=========================================
             ESC KEY
=========================================*/

document.addEventListener("keydown",(event)=>{

if(event.key === "Escape"){

closeGiftPopup();

}

});


/*=========================================
        MOBILE SAFE CONFETTI
=========================================*/

function confettiBurst(){

    const emojis = ["🎉","✨","🎈","❤️"];

    for(let i = 0; i < 25; i++){

        const c = document.createElement("div");

        c.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        c.style.position = "fixed";
        c.style.left = Math.random() * 90 + "vw";
        c.style.top = "10vh";

        c.style.fontSize =
            (16 + Math.random() * 12) + "px";

        c.style.zIndex = "100000";
        c.style.pointerEvents = "none";

        c.style.willChange =
            "transform, opacity";

        document.body.appendChild(c);

        const distance =
            window.innerHeight * 0.8;

        const rotation =
            (Math.random() * 720 - 360);

        requestAnimationFrame(() => {

            c.style.transition =
                "transform 2.5s ease-out, opacity 2.5s ease-out";

            c.style.transform =
                `translate3d(0, ${distance}px, 0)
                 rotate(${rotation}deg)`;

            c.style.opacity = "0";

        });

        setTimeout(() => {

            c.remove();

        }, 2700);

    }

}


/*=========================================
          INITIAL GIFT STATE
=========================================*/

/*
   Sab gifts locked rahenge,
   sirf Gift 1 open rahega.
*/

giftCards.forEach((card,index)=>{

if(index === 0){

card.classList.remove("locked");

const btn=card.querySelector(".giftBtn");

if(btn){

btn.innerHTML="Open ❤️";

}

}

else{

card.classList.add("locked");

const btn=card.querySelector(".giftBtn");

if(btn){

btn.innerHTML="Locked 🔒";

}

}

});


/*=========================================
          GIFT SYSTEM READY
=========================================*/

console.log("🎁 Clean Gift System Loaded ❤️");

/*=================================
      CLOSE POPUP
=================================*/

closeGift.onclick=()=>{

giftPopup.style.display="none";

}

giftPopup.onclick=(e)=>{

if(e.target===giftPopup){

giftPopup.style.display="none";

}

};

/*=========================================
      PREMIUM GIFT EFFECT
   SPARKLES → BALLOONS → HEARTS
=========================================*/

function confettiBurst(){

    /*-------------------------------
          EFFECT CREATOR
    -------------------------------*/

    function createEffect(emoji, count, delay){

        for(let i = 0; i < count; i++){

            setTimeout(()=>{

                const item =
                    document.createElement("div");

                item.textContent = emoji;

                item.style.position = "fixed";

                item.style.left =
                    (8 + Math.random() * 84) + "vw";

                item.style.top = "-40px";

                item.style.fontSize =
                    (18 + Math.random() * 16) + "px";

                item.style.zIndex = "100000";

                item.style.pointerEvents = "none";

                item.style.willChange =
                    "transform, opacity";

                document.body.appendChild(item);

                const fallDistance =
                    window.innerHeight + 100;

                const drift =
                    (Math.random() * 160) - 80;

                const rotation =
                    (Math.random() * 540) - 270;

                const duration =
                    2800 + Math.random() * 1400;

                requestAnimationFrame(()=>{

                    item.style.transition =
                        `transform ${duration}ms ease-in,
                         opacity ${duration}ms ease-in`;

                    item.style.transform =
                        `translate3d(${drift}px,
                        ${fallDistance}px,0)
                        rotate(${rotation}deg)`;

                    item.style.opacity = "0";

                });

                setTimeout(()=>{

                    item.remove();

                }, duration + 200);

            }, delay + i * 90);

        }

    }


    /*-------------------------------
          ✨ 1. SPARKLES
    -------------------------------*/

    createEffect(
        "✨",
        14,
        0
    );


    /*-------------------------------
          🎈 2. BALLOONS
       Small gap after sparkles
    -------------------------------*/

    createEffect(
        "🎈",
        10,
        650
    );


    /*-------------------------------
          ❤️ 3. HEARTS
       Small gap after balloons
    -------------------------------*/

    createEffect(
        "❤️",
        14,
        1300
    );

}

console.log("🎁 Gift System Loaded");
/*=========================================
        SCRIPT.JS STEP 4
    CAKE • MEMORY JAR • PROMISE BOOK
=========================================*/

/*==============================
        BIRTHDAY CAKE
==============================*/

const blowBtn=document.getElementById("blowCandle");
const cutBtn=document.getElementById("cutCake");
const flame=document.querySelector(".flame");
const cakeMsg=document.getElementById("cakeMessage");

let candleBlown=false;
let cakeCut=false;

if(blowBtn){

blowBtn.addEventListener("click",()=>{

if(candleBlown) return;

candleBlown=true;

if(flame){

flame.style.display="none";

}

cakeMsg.innerHTML=

"✨ Wish complete... Happy 18th Birthday Puchku ❤️";

});

}

if(cutBtn){

cutBtn.addEventListener("click",()=>{

if(cakeCut) return;

cakeCut=true;

cakeMsg.innerHTML=

"🎂 Cake Cut Successfully ❤️";

confettiBurst();

});

}

/*==============================
        MEMORY JAR
==============================*/

const memoryBtn=document.getElementById("memoryJarBtn");

const memoryMessage=document.getElementById("memoryMessage");

const memories=[

"❤️ Aapki smile meri favourite hai.",

"🌸 Thank You meri life me aane ke liye.",

"✨ Har din aapke saath special lagta hai.",

"💖 Main hamesha aapki respect karunga.",

"🌙 Noor... hamesha khush rehna.",

"🥹 Aap meri sabse khubshurat yaadon me se ek ho.",

"💌 I am proud of you."

];

if(memoryBtn){

memoryBtn.addEventListener("click",()=>{

const random=

Math.floor(Math.random()*memories.length);

memoryMessage.innerHTML=

memories[random];

});

}

/*==============================
        PROMISE BOOK
==============================*/

const nextPromise=

document.getElementById("nextPromise");

const bookPage=

document.getElementById("bookPage");

const promises=[

"❤️ Main hamesha aapki respect karunga.",

"🌸 Main aapki baat dhyan se sununga.",

"🤝 Main har situation me aapke saath rahunga.",

"💖 Main aapki hamesha care karunga.",

"🌙 Main aapko kabhi intentionally hurt nahi karunga.",

"✨ Main har birthday aur special din ko yaad rakhunga.",

"👑 I Will Always Try To Make You Smile."

];

let page=0;

if(nextPromise){

nextPromise.addEventListener("click",()=>{

page++;

if(page>=promises.length){

page=0;

}

bookPage.innerHTML=

`<p>${promises[page]}</p>`;

});

}

/*==============================
        VIDEO READY
==============================*/

const birthdayVideo=

document.getElementById("birthdayVideo");

if(birthdayVideo){

birthdayVideo.addEventListener("play",()=>{

confettiBurst();

});

}

/*==============================
      FINISH JOURNEY
==============================*/

const finishJourney=

document.getElementById("finishJourney");

if(finishJourney){

finishJourney.addEventListener("click",()=>{

confettiBurst();

setTimeout(()=>{

alert(

"❤️ Thank You Puchku ❤️\n\nHappy 18th Birthday 🌸\n\nI Love You Forever. ❤️"

);

},600);

});

}

console.log("🎂 Cake & Final Sections Loaded");
/*=========================================
        SCRIPT.JS STEP 5 (FINAL)
=========================================*/

/*==============================
      SAVE GIFT PROGRESS
==============================*/

function saveGiftProgress(){

localStorage.setItem("giftUnlocked",unlocked);

}

function loadGiftProgress(){

const saved=parseInt(localStorage.getItem("giftUnlocked"));

if(!isNaN(saved)){

unlocked=saved;

giftCards.forEach((card,index)=>{

if(index<=unlocked){

card.classList.remove("locked");

const btn=card.querySelector(".giftBtn");

if(btn) btn.innerHTML="Open ❤️";

}

});

}

}

loadGiftProgress();

giftCards.forEach(card=>{

card.addEventListener("click",saveGiftProgress);

});

/*==============================
      AUTO FLOATING HEARTS
==============================*/

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(16+Math.random()*18)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,2500);

/*==============================
      FALLING PETALS
==============================*/

function createPetal(){

const petal=document.createElement("div");

petal.className="floatingPetal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*15)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,3500);

/*==============================
        TWINKLE STARS
==============================*/

function createStar(){

const star=document.createElement("div");

star.className="twinkleStar";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(createStar,600);



/*==============================
      FINISH JOURNEY EFFECT
==============================*/

if(finishJourney){

finishJourney.addEventListener("click",()=>{

for(let i=0;i<60;i++){

setTimeout(()=>{

createHeart();

createPetal();

},i*80);

}

});

}

/*==============================
      FINAL MESSAGE
==============================*/

console.log("❤️================================❤️");

console.log(" Operation Puchku Ultimate Final ");

console.log(" Website Loaded Successfully ");

console.log(" Happy 18th Birthday Puchku ❤️");

console.log("❤️================================❤️");
/*=========================================
        LETTER - DIRECT BUTTON SYSTEM
=========================================*/

function toggleLetter(){

    const letter = document.getElementById("letterPaper");
    const button = document.getElementById("openLetter");

    if(!letter || !button){
        return;
    }

    if(letter.classList.contains("show")){

        letter.classList.remove("show");

        button.innerHTML = "Open Letter 💌";

    }else{

        letter.classList.add("show");

        button.innerHTML = "Close Letter 💌";

        setTimeout(function(){

            letter.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        },100);

    }

}
/*=========================================
        GIFT 5 — WHY I CHOOSE YOU
=========================================*/

const gift5Reasons = [

"Kyuki tumhare saath mujhe apna sa feel hota hai. ❤️",

"Kyuki tumhari smile mere liye genuinely special hai. 🌸",

"Kyuki tum sirf meri favourite person nahi...",
"meri favourite feeling bhi ho. 💖",

"Kyuki duniya mein bahut log mil sakte hain...",
"lekin tum jaisa koi nahi. ✨",

"Kyuki tumhare hone se meri ordinary si life bhi thodi beautiful lagti hai. 🥹❤️",

"Kyuki tumhe choose karna koi decision nahi tha...",
"bas dil ne tumhe apna maan liya. ❤️",

"Simple answer? 🫂",
"Kyuki tum... tum ho.",
"aur mujhe kisi aur ki zarurat nahi. ❤️"
];

let gift5ReasonIndex = 0;

function nextGift5Reason(){

const reasonText =
document.getElementById("reasonText");

if(!reasonText) return;

if(gift5ReasonIndex < gift5Reasons.length){

reasonText.style.opacity="0";
reasonText.style.transform="translateY(10px)";

setTimeout(()=>{

reasonText.innerHTML =
gift5Reasons[gift5ReasonIndex];

reasonText.style.opacity="1";
reasonText.style.transform="translateY(0)";

gift5ReasonIndex++;

},250);

}

else{

reasonText.innerHTML =
"❤️ Bas itna hi kehna tha...<br><br>" +
"Main tumhe har baar,<br>" +
"phir se choose karunga. 🫂❤️";

}

}
/*=========================================
        GIFT 5 — PREMIUM REASONS
=========================================*/

const premiumReasons = [

    `

    Kyunki tumhare saath mujhe kuch
    prove nahi karna padta...

    <br><br>

    Main bas
    <b>khud reh sakta hoon.</b> 🫂❤️

    `,

    `

    Kyunki tumhari ek chhoti si smile bhi
    mera pura mood change kar deti hai...

    <br><br>

    Shayad tumhe iska idea bhi nahi hai.
    🌸❤️

    `,

    `

    Kyunki tumhari chhoti-chhoti baatein
    bhi mere liye important ho jaati hain...

    <br><br>

    Tumhare liye shayad normal ho,
    <br>

    par mere liye woh
    <b>special moments</b> ban jaate hain. ❤️

    `,

    `

    Kyunki tum perfect ho isliye nahi...

    <br><br>

    Balki tumhari imperfections ke saath bhi
    tum mere liye utni hi special ho.

    <br><br>

    Aur main tumhe
    <b>badalna nahi chahta.</b> ❤️

    `,

    `

    Kyunki tumhare hone se meri
    ordinary si life mein bhi
    kuch special sa feel hota hai...

    <br><br>

    Jaise sab kuch same hai...

    <br>

    bas tumhari wajah se
    thoda zyada beautiful hai. ✨❤️

    `,

    `

    Aur shayad...
    sabse important reason. 🥺

    <br><br>

    Main tumhe sirf
    <b>aaj ke liye choose nahi karta.</b>

    <br><br>

    Jab main apne future ke baare mein sochta hoon...

    <br><br>

    pata nahi kyun...

    <br>

    par us picture mein
    <b>tum hoti ho.</b> 🌙❤️

    `

];

let premiumReasonIndex = 0;


/*=========================================
        NEXT PREMIUM REASON
=========================================*/

function nextPremiumReason(){

    const reasonText =
        document.getElementById("premiumReasonText");

    const counter =
        document.getElementById("reasonCounter");

    const button =
        document.querySelector(".premiumReasonBtn");

    if(!reasonText || !counter || !button){
        return;
    }


    /*=================================
          FINAL MESSAGE
    =================================*/

    if(premiumReasonIndex >= premiumReasons.length){

        reasonText.style.opacity = "0";

        setTimeout(()=>{

            reasonText.innerHTML = `

                <div class="finalReason">

                    <div class="finalReasonHeart">
                        ❤️
                    </div>

                    <p>

                    Aur agar tum mujhse phir poochogi...

                    <br><br>

                    <b>"Why me?"</b>

                    <br><br>

                    Toh shayad main kabhi
                    ek perfect answer nahi de paunga.

                    <br><br>

                    Bas itna kahunga...

                    <br><br>

                    <strong>
                        "Kyuki tum... tum ho." ❤️
                    </strong>

                    <br><br>

                    Aur agar mujhe zindagi mein
                    tumhe dobara choose karne ka chance mile...

                    <br><br>

                    <strong>
                        Main phir tumhe hi choose karunga.
                    </strong>

                    <br>

                    <strong>
                        Har baar. 🫂❤️
                    </strong>

                    </p>

                    <div class="shaktiSignature">
                        — Tumhara Shakti ❤️
                    </div>

                </div>

            `;

            reasonText.style.opacity = "1";

            counter.innerHTML =
                "❤️ 6 / 6 ❤️";

            button.innerHTML =
                "I Would Choose You Again ❤️";

            button.disabled = true;

            button.style.opacity = ".7";

        },300);

        premiumReasonIndex++;

        return;
    }


    /*=================================
          REVEAL REASON
    =================================*/

    reasonText.style.opacity = "0";
    reasonText.style.transform =
        "translateY(15px)";


    setTimeout(()=>{

        reasonText.innerHTML =
            premiumReasons[premiumReasonIndex];

        reasonText.style.opacity = "1";
        reasonText.style.transform =
            "translateY(0)";

    },300);


    premiumReasonIndex++;


    counter.innerHTML =
        premiumReasonIndex +
        " / " +
        premiumReasons.length;


    /* Button text */

    if(
        premiumReasonIndex ===
        premiumReasons.length
    ){

        button.innerHTML =
            "One Last Reason... ❤️";

    }

}
/*=========================================
      PREMIUM SECRET MESSAGE SYSTEM
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const secretButton =
        document.getElementById("openSecret");

    const secretMessage =
        document.getElementById("secretMessage");

    if (!secretButton || !secretMessage) {

        console.log(
            "❌ Secret Message elements not found"
        );

        return;
    }

    let secretOpen = false;


    secretButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        if (!secretOpen) {

            /* OPEN */

            secretOpen = true;

            secretMessage.classList.add("secretShow");

            secretButton.innerHTML =
                "Hide My Heart ❤️";

            setTimeout(function () {

                secretMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 150);


            /* Small heart effect */

            for (let i = 0; i < 12; i++) {

                setTimeout(function () {

                    const heart =
                        document.createElement("span");

                    heart.innerHTML =
                        Math.random() > .5
                            ? "❤️"
                            : "💕";

                    heart.style.position = "fixed";

                    heart.style.left =
                        (20 + Math.random() * 60) + "vw";

                    heart.style.bottom = "80px";

                    heart.style.fontSize =
                        (18 + Math.random() * 12) + "px";

                    heart.style.zIndex = "99999";

                    heart.style.pointerEvents = "none";

                    heart.style.transition =
                        "transform 2s ease, opacity 2s ease";

                    document.body.appendChild(heart);


                    requestAnimationFrame(function () {

                        heart.style.transform =
                            `translateY(-${150 + Math.random() * 250}px)
                             translateX(${Math.random() * 100 - 50}px)
                             scale(.7)`;

                        heart.style.opacity = "0";

                    });


                    setTimeout(function () {

                        heart.remove();

                    }, 2200);

                }, i * 100);

            }

        }

        else {

            /* CLOSE */

            secretOpen = false;

            secretMessage.classList.remove("secretShow");

            secretButton.innerHTML =
                "Open My Heart ❤️";

        }

    });


    console.log(
        "💌 Premium Secret Message System Ready ❤️"
    );

});
/*=========================================
        OUR LITTLE MELODY
        PLAY / PAUSE BUTTON
=========================================*/

const playMusicBtn = document.getElementById("playMusic");
const melody = document.getElementById("bgMusic");

if(playMusicBtn && melody){

    playMusicBtn.addEventListener("click", function(){

        if(melody.paused){

            melody.play().then(()=>{

                playMusicBtn.innerHTML = "Pause Music ⏸️ ❤️";

            }).catch(()=>{

                console.log("Music play blocked");

            });

        }else{

            melody.pause();

            playMusicBtn.innerHTML = "Play Music ❤️";

        }

    });

    melody.addEventListener("ended", function(){

        playMusicBtn.innerHTML = "Play Music ❤️";

    });

}