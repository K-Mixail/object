 const myFavoriteFilm = {
    name: 'Troy',
    date: 2004,
    director: "Wolfgang",
    country: 'Mexico',
    showName: function() {
        console.log(`Название фильма: ${this.name}`)
    },
 }

 myFavoriteFilm.showName();

 myFavoriteFilm.profit = 175000000;

//  myFavoriteFilm.showName = function(){
//     console.log(this.name);
//  }

 delete myFavoriteFilm["date"];

 console.log(myFavoriteFilm);
