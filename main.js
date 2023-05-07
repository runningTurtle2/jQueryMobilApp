let gameArr = [];

//Constructor for game object
let Game = function (pTitle, pGenre, pURL){
    this.Title = pTitle;
    this.Genre = pGenre;
    this.URL = pURL;
}

gameArr.push(new Game("The Witcher 3: Wild Hunt", "Open World", "https://www.youtube.com/embed/XHrskkHf958"))
gameArr.push(new Game("Stray", "Adventure", "https://www.youtube.com/embed/4uP2MyUL49s"))

let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();

// add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        gameArr.push(new MovieObject(
        document.getElementById("title").value, 
        document.getElementById("genre").value,
        document.getElementById("URL").value,
        gameArr.length,  // set ID
        document.getElementById("URL").value));
        document.location.href = "index.html#home";
        // also add the URL value
    });

    $(document).bind("change", "#select-genre", function (event, ui) {
        selectedGenre = $('#select-genre').val();
    });


});
// end of add button events ************************************************************************

function createList(){
   let myUL = document.getElementById("gameList");
   myUL.innerHTML = "";

    gameArr.forEach(function (aGame,) { 
        var myLi = document.createElement('li');
        // adding a class name
        myLi.classList.add('aGame'); 
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        myLi.setAttribute("data-parm", aGame.ID);
        myLi.innerHTML = "Title: " + aGame.Title + "<br>Genre: " + aGame.Genre + "<br>" + 
        "<iframe width=\"560\" height=\"315\" src=\"" + aGame.URL + "\" title= \"YouTube video player\"" +
        "allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"allowfullscreen></iframe>";
        myUL.appendChild(myLi);
        console.log(myLi)
    });

    /*
  // wishlist page *************************************************
  // create an array of wishlist games

  <ul id="gameList2"></ul>


    let gameArr2 = [];
      new Game("Assassin's Creed Mirage", "Action; Rogue-like", "https://www.youtube.com/embed/x55lAlFtXmw"))
      new Game("Diablo 4", "Action; Adventure", "https://www.youtube.com/embed/Ro26B394ZBM"))
      new Game("The Legend of Zelda: Tears of the Kingdom", "Action; Open World", "https://www.youtube.com/embed/uHGShqcAHlQ"))
      new Game("Hollow Knight: Silksong", "Action; Adventure", "https://www.youtube.com/embed/JSfuFlhsxZY"))

    document.addEventListener("DOMContentLoaded", function() {
      createList();


      // add button events...
    });

    function createList() {
      let myUL = document.getElementById("gameList2");
      myUL.innerHTML = "";

      gameArr2.forEach(function(aGame) { 
        var myLi = document.createElement('li');
        myLi.classList.add('aGame'); 
        myLi.setAttribute("data-parm", aGame.ID);
        myLi.innerHTML = "<span style='font-weight: bold;'>Title:</span> " + aGame.Title + "<br><span style='font-weight: bold;'>Genre:</span> " + aGame.Genre + "<br>" + 
        "<iframe width=\"560\" height=\"315\" src=\"" + aGame.URL + "\" title= \"YouTube video player\"" +
        "allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"allowfullscreen></iframe><br><br>";
        myUL.appendChild(myLi);
        console.log(myLi);
      });
    }*/



   
    /*var liList = document.getElementsByClassName("aGame");
    let newGameArr = Array.from(liList);
    newGameArr.forEach(function (element) {
        element.addEventListener('click', function () {

        var parm = this.getAttribute("data-parm");
     
        localStorage.setItem('parm', parm);
       
       
        let stringGameArr = JSON.stringify(gameArr); 
        localStorage.setItem('gameArr', stringGameArr);
        
        
        // now jump to our page that will use that one item
        document.location.href = "index.html#details";
        });
    });*/

};