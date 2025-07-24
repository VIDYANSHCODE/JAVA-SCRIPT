let response = fetch("https://isro.vercel.app/api/centres");

response
  .then((r) => {
    return r.json();
  })
  .then((data) => {
    console.log(data); // The object { centres: [...] }

    let ihtml = "";
    // Loop over the 'centres' array directly using for...of
    for (const item of data.centres) {
      console.log(item); // An individual centre object
      console.log(item.name); // The name of the centre
      ihtml += `
              <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">STATE : ${item.State}</p>
                      <p class="card-text">PLACE : ${item.Place}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div> `;
    }
    
    // Move this line OUTSIDE the loop
    cardContainer.innerHTML = ihtml;
  });