const abtbtn=document.getElementById('abtbtn');
const abtcon=document.getElementById('abtcon1');
const abtcls=document.getElementById('abtcls');
abtbtn.addEventListener("click",()=>{
    abtcon.style.display='flex';
});
abtcls.addEventListener('click',()=>{
    abtcon.style.display='none';
});



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
});



const godocsbtn=document.getElementById('godocsbtn');
godocsbtn.addEventListener('click',()=>{
    window.location.href = '#';
})