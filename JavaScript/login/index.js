const h1=document.querySelector('h1')
const input=document.querySelector('input')
const loginBtn=document.querySelector('.login')
const logoutBtn=document.querySelector('.logout')

loginBtn.onclick=()=>{
    if(input.value){
        h1.textContent=input.value
        localStorage.setItem('token',input.value)
    }else{
        alert('Please enter your name')
    }
}

logoutBtn.onclick=()=>{
    localStorage.clear()
    location.reload()
}