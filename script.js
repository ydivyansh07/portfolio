// ===============================
// Typing Animation
// ===============================

new Typed("#typing",{

    strings:[
        "Web Developer",
        "Video Editor",
        "AI Enthusiast",
        "Frontend Designer"
    ],

    typeSpeed:80,
    backSpeed:40,
    backDelay:1500,
    loop:true

});


// ===============================
// Navbar Shadow On Scroll
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(15,15,15,.8)";
        header.style.boxShadow="0 10px 40px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(255,255,255,.05)";
        header.style.boxShadow="none";

    }

});


// ===============================
// Hero Image Floating
// ===============================

const image=document.querySelector(".image-box");

let direction=1;

setInterval(()=>{

    image.style.transform=`translateY(${direction*12}px)`;

    direction*=-1;

},1800);


// ===============================
// Button Animation
// ===============================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// ===============================
// Mouse Glow Effect
// ===============================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="#7c3aed";
glow.style.filter="blur(8px)";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";
    glow.style.top=e.clientY-9+"px";

});


// ===============================
// Fade In Animation
// ===============================

const hero=document.querySelector(".hero");

hero.style.opacity="0";
hero.style.transform="translateY(50px)";
hero.style.transition="1.3s";

window.onload=()=>{

    hero.style.opacity="1";
    hero.style.transform="translateY(0px)";

};

// ===============================
// Remove Loader
// ===============================


window.addEventListener("load",()=>{


    document.querySelector(".loader").style.display="none";


});





// ===============================
// Back To Top
// ===============================


const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});



topBtn.onclick=()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};





// ===============================
// Scroll Reveal
// ===============================


const revealElements=document.querySelectorAll(
"section, .card, .project-card"
);



window.addEventListener("scroll",()=>{


revealElements.forEach((element)=>{


let position=element.getBoundingClientRect().top;


let screen=window.innerHeight;


if(position < screen-100){


element.classList.add("reveal");


setTimeout(()=>{

element.classList.add("active");

},100);


}


});


});