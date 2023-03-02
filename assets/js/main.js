
const txt1 = document.getElementById('searchapi');
const btn1 = document.getElementById('btn1');
var link;

function fun() {
        link = txt1.value;
        console.log(link);

        fetch(`http://localhost:5001/`)
                .then(response => response.json())
                .then(data => {
                        const movieTitles = data.map(movie => movie.Movie);
                        // console.log(movieTitles);
                        const moviePoster = data.map(movie => movie.poster_link);
                        // console.log(moviePoster);
                        const movieRating = data.map(movie => movie.rating);
                        // console.log(movieRating);

                        var index;
                        var o = 0;
                        for (var i = 0; i < movieTitles.length; i++) {
                                if (movieTitles[i] == link) {
                                        index = i;
                                        o = 1;
                                        break;
                                }
                        }

                       if(o==1){
                        const print = `<li><img class="cardimg" src="${moviePoster[index]}"> <h2>Name:- ${movieTitles[index]}</h2><h2>Rating:- ${movieRating[index]}</h2></li>`
                        document.querySelector('.movied').innerHTML = print;
                       }
                       else{
                        console.log("not found")
                       }


                       
                })
                .catch(error => console.error(error));
}

btn1.addEventListener('click', fun);











