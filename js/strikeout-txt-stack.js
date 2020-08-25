const title = document.querySelectorAll('.stack span')
const line = document.querySelectorAll('.line')

const Anim = gsap.timeline()

Anim
.from(line, {width: '0%', opacity: 0, duration: 0.7, ease: "power1.in"})
.from(title, {opacity: 0, top: gsap.utils.wrap([100, -100]), stagger: 0.1, ease: "power2.out"})
.set(line, {width: 'calc(75% - var(--font-size) + 25vw)'})