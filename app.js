const div =document.querySelector(`div`);

const input = document.querySelector(`input`)

const btn=document.querySelector(`button`)

const p= document.createElement(`p`);
div.appendChild(p)

ekle=async()=>{
const isim=input.value
    const Url=`https://api.tvmaze.com/search/shows?q=${isim}`

const res= await fetch(Url);
console.log(res);
const data=await res.json();
console.log(data);
const {name,url,summary}=data[0];


    p.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">"${name}"</h5>
      <p class="card-text">${summary}</p>
      <a href="https://www.tvmaze.com/shows/54296/camdaki-kiz" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

}

btn.onclick=()=>{

console.log(`clicked`);
console.log(isim);
  ekle()  ;
}


console.log(div);
console.log(p);
