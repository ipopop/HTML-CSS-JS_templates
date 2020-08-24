const like = document.querySelector('.like')

let countLike = 0

like.addEventListener('click', () => {
  if (countLike === 0) {
    like.classList.toggle('anim-sprite')
    countLike = 1
    like.style.backgroundPosition = 'right'
  } else {
  countLike = 0
  like.style.backgroundPosition = 'left'
  }
})

like.addEventListener('animationend', () => {
  like.classList.toggle('anim-sprite')
})
