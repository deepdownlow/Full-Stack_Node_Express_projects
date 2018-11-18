$(document).ready(() => {
  $("#userInput").on("keyup", e => {
    let searchTerm = e.target.value;
    let url = `https://api.themoviedb.org/3/search/person?query=${searchTerm}`;
    $.ajax({
      url: url,
      data: {
        api_key: "702bbcef2ab1256c536f5e2deaf3fcd6",
        per_page: 1
      }
    }).done(data => {
      console.log(data);
      $.each(data.results, (_, person) => {
        const { name, popularity, id, profile_path } = person
        $("#movieBox").html(`
          <div class="container">
          <div class="row mx-auto">
              <div class="col-md-6 col-sm-12">
                  <h1 class='display-1'>${name}</h1>
                  <span class='badge badge-success mb-3'><h5>Popularity: ${popularity}</h5></span>
                  <span class='badge badge-info'><h5>IMDB ID: ${id}</h5></span>
                  <div id='known-work'>
                    <h1>Known For:</h1>
                    <h6>${person.known_for[0].title}</h6>
                    <h6>${person.known_for[1].title}</h6>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12">
                  <img class='img-thumbnail img-fluid animated zoomInRight' src='http://image.tmdb.org/t/p/w780/${profile_path}' >
              </div>
              <div class="col-md-12 col-sm-12">
                  
              </div>
          </div>
          </div>
                `);
      });
    });
  });
});
