const listele =document.querySelector(`ul`);
// const btn=document.querySelector(`button`);
// const input=document.querySelector(`input`);


// const countryName=input.innerText;

const url=`https://countryflagsapi.com/png/tr`

const data = async () => {await fetch(url).then(res=>res.json()).then(response=>{
    response.forEach(element => {
        
listele.innerHTML+=`<li><img src="${element.url}" alt=""> </li>`   
    });
})}

// btn.onclick=()=>{
//  data();   
// }


data();