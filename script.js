const images = [
"images/pic5.jpg",
 "images/pic7.jpg",
 "images/pic8.jpg"
]


//Elements 
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const image = document.querySelector('.image')

let count = 0

//btn left Event
btnLeft.addEventListener('click', function(){
  count--
  if(count < 0){
    count = images.length -1
  }
image.src = images[count]

})

//btn right event
btnRight.addEventListener('click', function(){
  count++
   if(count > images.length - 1){
  count = 0
}
  image.src = images[count]
 
 
})





// MOBILe menu toggler

document.querySelector('.menu-open').addEventListener('click',function(){

  document.querySelector('.menu-toggle').classList.toggle('show')
})

document.querySelector('.menu-close').addEventListener('click',function(){

  document.querySelector('.menu-toggle').classList.toggle('show')
})



window.addEventListener('click', function(e){
  const menu = document.querySelector('.menu-toggle')
  if(e.target === menu){
    menu.classList.remove('show')
   
   } 
  
})