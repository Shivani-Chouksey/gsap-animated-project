var tl=gsap.timeline({
   scrollTrigger:{
      trigger:" #first",
      start:"top top",
   pin:true,
   scrub:true
},
})

tl.to("#text",{
   top:"50%",
   opacity:1,
   ease:Power1
})
// 
tl.to("#two",{
   top:"0%",
   scale:1,
   ease:Power1,
   delay:.1
},"same")
tl.to("#content",{
   scale:1,
   ease:Power1,
   delay:.1
},"same")
tl.to("#text",{
   filter: "blur(8px)",
      ease:Power1,
      delay:-.5
   },)
tl.to("#carep",{
   width:"100%",
   ease:Power1
})
tl.to("#enterp",{
   width:"100%",
   ease:Power1
},"a")
tl.to("#limg",{
  left:"0%",
   ease:Expo.Inout,
   duration:1,
   delay:-.05
},"a")
tl.to("#first-img",{
  left:"50%",
   ease:Power0,
   delay:.01
},"a")

