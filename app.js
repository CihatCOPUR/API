const div =document.querySelector(`div`);

const input = document.querySelector(`input`)

const p= document.createElement(`p`);
div.appendChild(p)

ekle=async()=>{
const name=input.value
    const url=`https://api.tvmaze.com/search/shows?q=${name}`

const res= await fetch(url);



    p.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="https://static.tvmaze.com/uploads/images/original_untouched/355/889469.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">"Camdaki Kız"</h5>
      <p class="card-text">Nalan is a beautiful young woman who earns everyone's love at first sight with her warmth. As the only child of the family enlarged hand baby, baby roses, lived in the existence of life and Nalan graduated with honors the best schools, Turkey finds's largest hotel chain, which Koroglu company as an architect at running than himself Sedat Koroglu' with marriage Eve. Although Nalan and Sedat began to walk hand in hand in this tale with hope, thinking that they are moving away from the dark secrets they have kept in their past; Soon their lives will sink into real darknes.</p>
      <a href="https://www.tvmaze.com/shows/54296/camdaki-kiz" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

}


ekle()
console.log(div);
console.log(p);
