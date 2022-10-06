const listele =document.querySelector(`ul`);
const btn=document.querySelector(`button`);
const input=document.querySelector(`p`);

const filmName= input.innerText;


const url=`https://restcountries.com/v2/name/${filmName}`


function fetchApi(){

fetch (url).then(res=>res.json()).then(item=>{
    const li= document.createElement(`li`);
const {region,name,capital,flags:{svg}
}=li[0]
    listele.appendChild(li);
li.innerHTML=`
  <p class="card-text">${region}${name}${capital}${region}</p>

`
    console.log(listele);
})   }
   
    
   fetchApi(`turkey`);
//     console.log(item);
//     listele.innerHTML=`<div class="card" style="width: 18rem;">
//     <img class="card-img-top" src="" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">${summary}</p>
//       <a href="${url}" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`}





// btn.onclick=()=>{
//  data();   
// }


