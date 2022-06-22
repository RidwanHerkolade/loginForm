let contents = document.querySelector('#login');
let content = document.querySelector('#register');
let btnOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let header = document.querySelector('h3')

header.addEventListener('click', function(){
     header.textContent = 'akolade'
})
btnOne.addEventListener('click', function(e){
     e.preventDefault();
    content.style.right = '0'
    content.style.left = '0'
  

})
btnTwo.addEventListener('click', function(e){
     e.preventDefault();
     contents.style.left = '2px'
     content.style.right = '-2500px'
     
})

