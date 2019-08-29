class character {
  constructor(name, hp, power) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }
}
const kenobi = new character("Obi-wan_Kenobi", 120, 20);
const lukeSkywalker = new character("Luke_Skywalker", 100, 5);
const darthMaul = new character("Darth_Maul", 180, 25);
const darthSidious = new character("Darth_Sidious", 150, 20);
console.log(kenobi.name);
console.log(lukeSkywalker);
console.log(darthMaul);
console.log(darthSidious);

var enemyList = [];
let defender;
var player;
var enemyChosen = false;
var playerChosen = false;
var charName = [
  kenobi.name,
  lukeSkywalker.name,
  darthMaul.name,
  darthSidious.name
];

// create divs give them a class of characters and id that is somehow related to their object name.
//when a class is clicked, player value is picked and set as chosen player. while the rest go to an enemylist. when moved to enemy list, chars disappear from first divs created and reappear under other div class name enemies with the same ids. when clicked on class enemies, a new div and a new class of defender is given to second chosen player. Now we can perform some math with attack button. add event listener to attack button. when attack button is clicked, first player attacks and his attack increments by itself while taking away second player health by same number as attack of first player. each time the button is clicked, the health is taken away from both players, second player attacks at constant number, first player attacks at increased number until either of them get down to 0 hp. when chosen player dies a loss is added, on the other hand, if chosen enemy dies then a win added and for both outcomes, players reset to chosing first player and an enemy.

for (var i = 0; i < charName.length; i++) {
  console.log(charName[i]);
  var characterCLass = $("<button>");
  characterCLass.addClass("characters");
  characterCLass.attr("id", charName[i]);
  characterCLass.attr("value", charName[i]);
  $("#char").append(characterCLass);
  $("#Obi-wan_Kenobi").text("Obi-wan Kenobi");
  $("#Luke_Skywalker").text("Luke Skywalker");
  $("#Darth_Maul").text("Darth Maul");
  $("#Darth_Sidious").text("Darth Sidious");
}
$(".characters").on("click", function() {
  if ($(this).val() === "Obi-wan_Kenobi" && playerChosen === false) {
    player = kenobi.name;
    var playerBtn = $("<button>");
    playerBtn.addClass("selected-player");
    playerBtn.attr("id", "Obi-wan_Kenobi");
    playerBtn.attr("value", "Obi-wan_Kenobi");
    $("#player").append(playerBtn);
    $(".selected-player").text("Obi-wan Kenobi");
    enemyList.push(lukeSkywalker.name, darthMaul.name, darthSidious.name);
    for (var i = 0; i < enemyList.length; i++) {
      console.log(enemyList[i]);
      var characterCLass = $("<button>");
      characterCLass.addClass("enemies");
      characterCLass.attr("id", enemyList[i]);
      characterCLass.attr("value", enemyList[i]);
      $("#enemies").append(characterCLass);
      setTimeout(() => {
          $("#Obi-wan_Kenobi").text("Obi-wan Kenobi");
          $("#Luke_Skywalker").text("Luke Skywalker");
          $("#Darth_Maul").text("Darth Maul");
          $("#Darth_Sidious").text("Darth Sidious");
      }, 20);
      playerChosen = true;
    }
  }
  if ($(this).val() === "Luke_Skywalker" && playerChosen === false) {
    player = lukeSkywalker.name;
    var playerBtn = $("<button>");
    playerBtn.addClass("selected-player");
    playerBtn.attr("id", "Luke_Skywalker");
    playerBtn.attr("value", "Luke_Skywalker");
    $("#player").append(playerBtn);
    $(".selected-player").text("Luke Skywalker");
    enemyList.push(kenobi.name, darthMaul.name, darthSidious.name);
    for (var i = 0; i < enemyList.length; i++) {
      console.log(enemyList[i]);
      var characterCLass = $("<button>");
      characterCLass.addClass("enemies");
      characterCLass.attr("id", enemyList[i]);
      characterCLass.attr("value", enemyList[i]);
      $("#enemies").append(characterCLass);
      setTimeout(() => {
        $("#Obi-wan_Kenobi").text("Obi-wan Kenobi");
        $("#Luke_Skywalker").text("Luke Skywalker");
        $("#Darth_Maul").text("Darth Maul");
        $("#Darth_Sidious").text("Darth Sidious");
    }, 20);
      playerChosen = true;
    }
  }

  if ($(this).val() === "Darth_Maul" && playerChosen === false) {
    player = darthMaul.name;
    var playerBtn = $("<button>");
    playerBtn.addClass("selected-player");
    playerBtn.attr("id", "Darth_Maul");
    playerBtn.attr("value", "Darth_Maul");
    $("#player").append(playerBtn);
    $(".selected-player").text("Darth Maul");
    enemyList.push(lukeSkywalker.name, kenobi.name, darthSidious.name);
    for (var i = 0; i < enemyList.length; i++) {
      console.log(enemyList[i]);
      var characterCLass = $("<button>");
      characterCLass.addClass("enemies");
      characterCLass.attr("id", enemyList[i]);
      characterCLass.attr("value", enemyList[i]);
      $("#enemies").append(characterCLass);
      setTimeout(() => {
        $("#Obi-wan_Kenobi").text("Obi-wan Kenobi");
        $("#Luke_Skywalker").text("Luke Skywalker");
        $("#Darth_Maul").text("Darth Maul");
        $("#Darth_Sidious").text("Darth Sidious");
    }, 20);
      playerChosen = true;
    }
  }
  if ($(this).val() === "Darth_Sidious" && playerChosen === false) {
    player = darthSidious.name;
    var playerBtn = $("<button>");
    playerBtn.addClass("selected-player");
    playerBtn.attr("id", "Darth_Sidious");
    playerBtn.attr("value", "Darth_Sidious");
    $("#player").append(playerBtn);
    $(".selected-player").text("Darth Sidious");
    enemyList.push(kenobi.name, darthMaul.name, lukeSkywalker.name);
    for (var i = 0; i < enemyList.length; i++) {
      console.log(enemyList[i]);
      var characterCLass = $("<button>");
      characterCLass.addClass("enemies");
      characterCLass.attr("id", enemyList[i]);
      characterCLass.attr("value", enemyList[i]);
      $("#enemies").append(characterCLass);
      setTimeout(() => {
        $("#Obi-wan_Kenobi").text("Obi-wan Kenobi");
        $("#Luke_Skywalker").text("Luke Skywalker");
        $("#Darth_Maul").text("Darth Maul");
    }, 20);
      playerChosen = true;
    }
  }
  $("button").remove(".characters");
  if(playerChosen == true) {
    $(".enemies").on("click", function() {
        if ($(this).val() === "Obi-wan_Kenobi" && playerChosen === true) {
            alert("You clicked on Obiwan kenibi!")
        }
        if ($(this).val() === "Luke_Skywalker" && playerChosen === true) {
            alert("You clicked on Luke Skywalker")
        }
        if ($(this).val() === "Darth_Maul" && playerChosen === true) {
            alert("You clicked on darth maul!")
        }
        if ($(this).val() === "Darth_Sidious" && playerChosen === true) {
            alert("you clicked on darth sidious")
        }
    })
  }
});
