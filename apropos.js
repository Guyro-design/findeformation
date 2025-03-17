const solid = document.querySelector(".solid")
const close = document.querySelector('i')
console.log(close)

const mobile = document.querySelector('.mobile')

solid.addEventListener('click',()=>{
   if(mobile.style.display == "none"){
        mobile.style.display = "block"
        close.classList.remove('fa-bars')
        close.classList.add('fa-times')
        
      }else {      
      mobile.style.display = "none"
      close.classList.remove('fa-times')
      close.classList.add('fa-bars')
   }
})


