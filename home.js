
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


var navdropflag=false;
const usernamebtn=document.getElementById('usernamebtn');
usernamebtn.addEventListener('click',()=>{
   if(navdropflag==false)
   {
    document.getElementById('navdrop').style.display='block';
    navdropflag=!navdropflag;
   }
   else{
    document.getElementById('navdrop').style.display='none';
    navdropflag=!navdropflag;
   }
})



const logoutbtn=document.getElementById('logoutbtn');
logoutbtn.addEventListener('click',()=>{
    window.open('Index.html','_self');
})