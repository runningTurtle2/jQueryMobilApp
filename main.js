let gameArr = [];

//Constructor for game object
let Game = function (pTitle, pGenre, pRelease, pURL){
    this.Title = pTitle;
    this.Genre = pGenre;
    this.Release = pRelease;
    this.URL = pURL;
}

gameArr.push(new Game("The Witcher 3: Wild Hunt", "Action; Open World", "5/18/2015", "https://www.youtube.com/embed/XHrskkHf958"))
gameArr.push(new Game("Stray", "Adventure", "7/19/2022", "https://www.youtube.com/embed/4uP2MyUL49s"))
gameArr.push(new Game("Red Dead Redemption 2", "Action; Open World", "10/26/2018","https://www.youtube.com/embed/HVRzx17WHVk"))
gameArr.push(new Game("Pokémon Legends: Arceus", "Adventure; Open World", "1/28/2022", "https://www.youtube.com/embed/I4RynqpahT8"))
gameArr.push(new Game("Assassin's Creed Mirage", "Action; Rogue-like", "TBA 2023", "https://www.youtube.com/embed/x55lAlFtXmw"))
gameArr.push(new Game("Diablo 4", "Action; Adventure", "6/6/2023", "https://www.youtube.com/embed/Ro26B394ZBM"))
gameArr.push(new Game("The Legend of Zelda: Tears of the Kingdom", "Action; Open World", "5/12/2023", "https://www.youtube.com/embed/uHGShqcAHlQ"))
gameArr.push(new Game("Hollow Knight: Silksong", "Action; Adventure", "TBA 2023","https://www.youtube.com/embed/JSfuFlhsxZY"))

let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();
  
// add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        gameArr.push(new MovieObject(
        document.getElementById("title").value, 
        document.getElementById("genre").value,
        document.getElementById("release").value,
        document.getElementById("URL").value,
        gameArr.length,  // set ID
        document.getElementById("URL").value));
        document.location.href = "index.html#home";
        // also add the URL value
    });

    $(document).bind("change", "#select-genre", function (event, ui) {
        selectedGenre = $('#select-genre').val();
    });
    
    
    /*form input for the 'add' page

document.addEventListener("DOMContentLoaded", function (event) {})

function formSubmitEvent() {
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let release = document.getElementById("release").value;
    let trailer = document.getElementById("trailer").value;
 }
 
 */


});
// end of add button events ********************************************************************

function createList(){}
   let myUL = document.getElementById("gameList");
   myUL.innerHTML = "";

    gameArr.forEach(function (aGame,) { 
        var myLi = document.createElement('li');
        // adding a class name
        myLi.classList.add('aGame'); 
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        myLi.setAttribute("data-parm", aGame.ID);
    myLi.innerHTML = "<span style='font-weight: bold;'>Title:</span> " + aGame.Title + "<br><span style='font-weight: bold;'>Genre:</span> " + aGame.Genre + "<br><span style='font-weight: bold;'>Release:</span> " + aGame.Release + "<br>" + 
    "<iframe width=\"560\" height=\"315\" src=\"" + aGame.URL + "\" title= \"YouTube video player\"" +
    "allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"allowfullscreen></iframe><br><br>";
    myUL.appendChild(myLi);
    console.log(myLi);
    });



   
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
