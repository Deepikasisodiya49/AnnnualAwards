gsap.from('.hf',{
    scrollTrigger:{
        trigger:'#hof',
        start:"top 30%",
        marker:true

    },
   stagger:.1,
    y:20,
    opacity:0,
    duration:.2,
    ease:Expo.easeInOut,
}
)
gsap.to('.r3',{
    ScrollTrigger:{
        trigger:'.r3',
        start:"top 5%",
        end:"bottom 20%",
        pin:true,
        marker:true
    },
})
gsap.utils.toArray('.r3').forEach(everyRow => {
    ScrollTrigger.create({
        trigger:everyRow,
        pin: true,
        start: "top 70px",
        end: "bottom 10%"
    })
})