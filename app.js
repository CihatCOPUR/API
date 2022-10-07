

fetch(`https://restcountries.com/v3.1/all`).then(res=>res.json()).then(item=>atama(item));

const atama=(data)=>{
data.forEach((countries) => {
    const cName=countries.name.common;
    document.querySelector(`#select`).innerHTML+=`<option >${cName}</option>`
}
)

document.querySelector(`#select`).addEventListener(`change`,(event)=>{
data.filter((data)=>{
    const {capital,name,flags:{svg},currencies,languages,name:{common}}=data;

if (common===event.target.value) {

    document.querySelector(`ul`).innerHTML=`<div class="card"  style="width: 20%;background-color:none">
    <img class="card-img-top" src="${svg}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${common}</h5>
      <p class="card-text">${capital}.</p>
      <p class="card-text">${Object.values(languages)}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  
}


})
})

}