const abtbtn=document.getElementById('abtbtn');
const abtcon=document.getElementById('abtcon1');
const abtcls=document.getElementById('abtcls');
abtbtn.addEventListener("click",()=>{
    abtcon.style.display='flex';
});
abtcls.addEventListener('click',()=>{
    abtcon.style.display='none';
});


document.getElementById("signinbtn").disabled = true;
const logbox=document.getElementById('logbox');
const logbtn=document.getElementById('logbtn');
const logclsbtn=document.getElementById('logclsbtn');
const signbox=document.getElementById('signbox');
const signbtn=document.getElementById('signbtn');
const signclsbtn=document.getElementById('signclsbtn');
logbtn.addEventListener('click',()=>{
    logbox.style.display='block';
    signbox.style.display='none';
})
logclsbtn.addEventListener('click',()=>{
    logbox.style.display='none';
});
signbtn.addEventListener('click',()=>{
    signbox.style.display='block';
    logbox.style.display='none';
})
signclsbtn.addEventListener('click',()=>{
    signbox.style.display='none';
    document.getElementById("pass1").value=null;
    document.getElementById("pass2").value=null;
    document.getElementById('confirm').innerText='Enter a good password';
});



// const godocsbtn=document.getElementById('godocsbtn');
// godocsbtn.addEventListener('click',()=>{
//     window.location.href = '#';
// })





const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
document.getElementById('daystat').innerText = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();







function conf(){
    var pass1 = document.getElementById("pass1").value;
    console.log(pass1);
    var pass2 = document.getElementById('pass2').value;
    console.log(pass2);
    if(pass1 == pass2){
        document.getElementById('confirm').innerHTML='&check;  You are good to go';
        document.getElementById("signinbtn").disabled = false;
    }
    else{
        document.getElementById('confirm').innerText='Enter same password to confirm';
        document.getElementById("signinbtn").disabled = true;
    }
}






// const contactbtn=document.getElementById('conbtn');
// contactbtn.onclick=document.location.href='#contact';