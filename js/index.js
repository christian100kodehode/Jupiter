

//Navigation Mobile Full Screen
const menuBtn=document.querySelector(".menuBtn")
const exitBtn=document.querySelector(".exit")
let t1 = gsap.timeline({paused:true});
t1.to(".mobile-menu" , { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
  ".animate-li",{
  opacity:1,
  duration:1,
  stagger:0.3,
  marginTop:0,
  ease:Power2.easeInOut,
},
">-0.5"
);

menuBtn.addEventListener("click",()=>{
  t1.play()
})
exitBtn.addEventListener("click",()=>{
  t1.reverse();
});



