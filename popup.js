const imgs = document.querySelectorAll('.container .row .col-md-4 img')
const modal = document.querySelector('.modalx')
const modalImg = document.querySelector('.img-modalx')
const imgDiModal = document.querySelector('.modalx img')
const modalImgJudul = document.querySelector('.modalx h2')
const container = document.getElementsByClassName('container')[0]

imgs.forEach(function(img){
  img.addEventListener('click',function(x){
    modal.style.display = 'block'
    modalImg.classList.add('fade')
    imgDiModal.setAttribute('src', x.target.src)
    modalImgJudul.innerHTML = x.target.alt
  })
})

modal.addEventListener('click', function(x){
  if (x.target.className == 'modalx') {
    modal.style.display = 'none'
  }
})
