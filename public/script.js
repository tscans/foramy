console.log('script');

var outfits = [
    {
        minTemp:-150,
        maxTemp:40,
        outfit:"Winter coat, long pants, sweater, boots"
    },
    {
        minTemp:40,
        maxTemp:65,
        outfit: "long pants, short sleeve, cardigan"
    },
    {
        minTemp:65,
        maxTemp:200,
        outfit: "Nothing at all!"
    }
]

var randomDog = () =>{
    fetch('https://random.dog/woof.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        var url = myJson.url;
        if(url.includes(".mp4")){
            var html = `<video height="245" controls> <source src="${url}" type="video/mp4"/> </video>`;
        }
        else{
            var html = `<img src="${url}" style="max-height:245px;max-width:100%;"/>`;
        }
        
        document.getElementById("randomdog").innerHTML = html;
    });
}

var randomMovie = () =>{
    fetch('/favorite-movies')
    .then(function(response) {
        return response.json();
    })
    .then(function(movie) {
        console.log(movie)
        var html = `<h3>"${movie.title} (${movie.year})"</h3><p>Amy's Rating: ${movie.rating}/5</p>`;
        document.getElementById("randommovie").innerHTML = html;
    });
}

var weatherData = () =>{
    fetch('/weather').then((response)=>{
          return response.json();
    })
    .then((weather)=>{
        console.log(weather);
        var temp = weather.consolidated_weather[0].the_temp;
        console.log(temp)
        var fare = (temp*9/5)+32;
        var outfit = null;
        for(var i = 0; i < outfits.length;i++){
            if(fare <= outfits[i].maxTemp && fare >= outfits[i].minTemp){
                outfit = outfits[i];
            }
        }
        var html = `<h3>Current Temp: ${fare} degrees</h3><p>Today's recommended outfit is: ${outfit.outfit}</p>`;
        document.getElementById("temp-outfit").innerHTML = html;
    })
}



randomDog();
randomMovie();
weatherData();