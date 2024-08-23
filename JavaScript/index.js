const hello=document.querySelector('.hello2')
const input=document.querySelector('input')
const loginBtn=document.querySelector('button')
const logoutBtn=document.querySelector('.logout')

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (token) {
        hello.textContent = token;
    }
    input.value = ''; // Clear the input field on page load
});

loginBtn.onclick = () => {
    if (input.value) {
        localStorage.setItem('token', input.value); //Sorage
        hello.textContent = input.value;
    }
};

logoutBtn.onclick = () => {
    localStorage.clear(); //Clear the storage 
    location.reload(); // Refresh the page
};
