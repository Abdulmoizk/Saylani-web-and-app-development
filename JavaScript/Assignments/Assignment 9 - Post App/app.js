var card = document.getElementById("carrd");

function postingCard() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    card.innerHTML += `    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">${description.value}</p>
    </div>
  </div>
    `
}