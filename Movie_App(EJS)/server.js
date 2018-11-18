const express = require("express");
const rp = require("request-promise");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req, res) => {
  res.render('home')
})
app.get("/home", (req, res) => {
  rp(apiData())
    .then(data => {
      const movieList = data.results;
      res.render("index", { movies: movieList });
    })
    .catch(err => console.log(err));
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/movie/:id", (req, res) => {
  const { id } = req.params;
  rp(apiData())
    .then(data => {
      const movie = data.results;
      let found = false
      movie.forEach(movie => {
        if (id.includes(movie.id)){
          found = true
          res.render("movie", { movie });
        } 
      });
      if(!found) {
        res.status(400).render('err')
      }
    })
    .catch(err => console.log(err));
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.get("/searchmovie", (req, res) => {
  const { search } = req.query;
  const option = {
    url: `https://api.themoviedb.org/3/search/movie?query=${search}`,
    qs: {
      api_key: "702bbcef2ab1256c536f5e2deaf3fcd6"
    },
    json: true
  };
  rp(option)
    .then(data => {
      const result = data.results
      res.render("searchMovie", { result, search });
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`server is running on port ${port}`));

const apiData = () => {
  return {
    url: `https://api.themoviedb.org/3/movie/now_playing`,
    qs: {
      api_key: "702bbcef2ab1256c536f5e2deaf3fcd6"
    },
    json: true
  };
};
