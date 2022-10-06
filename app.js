const listele =document.querySelector(`ul`);
const btn=document.querySelector(`button`);
const input=document.querySelector(`p`);

const filmName= input.innerText;


const url=`https://restcountries.com/v2/name/${filmName}`


 const islem = async()=>{

 await fetch (url).then(res=>res.json()).then(item=>{ 
    print (item);
    const li= document.createElement(`li`);

    listele.appendChild(li);

  
})   }
   
    
const  print=(news)=>{
    const {capital,}

}

   islem();
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


