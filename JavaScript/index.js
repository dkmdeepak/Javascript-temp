const input = document.querySelector('input');
const login=document.querySelector('.login');
const logout=document.querySelector('.logout');
const h1=document.querySelector('h1');

login.onclick=()=>{
    if(input.value){
        localStorage.setItem("token",input.value)
        h1.innerText="Welcom to Project"
        console.log(JSON.stringify(localStorage.getItem('token')));
        
    }
}
logout.onclick=()=>{
    localStorage.clear();
    location.reload();
}