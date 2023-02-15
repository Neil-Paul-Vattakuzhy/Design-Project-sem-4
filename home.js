
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
document.getElementById('daystat').innerText = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();

const abtbtn=document.getElementById('abtbtn');
const abtcon=document.getElementById('abtcon1');
const abtcls=document.getElementById('abtcls');
abtbtn.addEventListener("click",()=>{
    abtcon.style.display='flex';
});
abtcls.addEventListener('click',()=>{
    abtcon.style.display='none';
});
