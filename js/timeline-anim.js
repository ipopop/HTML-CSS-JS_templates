// import { gsap } from "gsap";
// import ScrollMagic from 'ScrollMagic';

const allCircles = document.querySelectorAll('.circle')
const allBoxes = document.querySelectorAll('.box')

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {
  for(i = 0; i < allCircles.length; i++){
    if (allCircles[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
      let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

      let scene = new ScrollMagic.Scene({
        triggerElement: allCircles[i],
        offset: 0,
		    triggerHook: 0.4,
        reverse: true
      })
      .setTween(tween)
      .addIndicators()
      .addTo(controller)
    }
  }
})