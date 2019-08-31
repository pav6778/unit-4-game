class character {
  constructor(name, hp, counterAttack,attack) {
    this.name = name;
    this.hp = hp;
    this.counterAttack = counterAttack;
    this.attack = attack
  }
  hitFunction(enemy){
    if(this.hp > 0) {
     this.hp = this.hp - enemy.counterAttack;
     enemy.hp = enemy.hp - this.attack;
     
    console.log(this.hp)
    console.log(enemy.hp)
}
  }
}
let kenobi = new character("Obi-wan_Kenobi", 120, 20, 1);
let lukeSkywalker = new character("Luke_Skywalker", 100, 5, 2);
let darthMaul = new character("Darth_Maul", 180, 25, 3);
let darthSidious = new character("Darth_Sidious", 150, 20, 4);


let enemyList = [];
let defender;
let player;
let enemyChosen = false;
let playerChosen = false;
let charName = [
  kenobi.name,
  lukeSkywalker.name,
  darthMaul.name,
  darthSidious.name
];

// create divs give them a class of characters and id that is somehow related to their object name.
//when a class is clicked, player value is picked and set as chosen player. while the rest go to an enemylist. when moved to enemy list, chars disappear from first divs created and reappear under other div class name enemies with the same ids. when clicked on class enemies, a new div and a new class of defender is given to second chosen player. Now we can perform some math with attack button. add event listener to attack button. when attack button is clicked, first player attacks and his attack increments by itself while taking away second player health by same number as attack of first player. each time the button is clicked, the health is taken away from both players, second player attacks at constant number, first player attacks at increased number until either of them get down to 0 hp. when chosen player dies a loss is added, on the other hand, if chosen enemy dies then a win added and for both outcomes, players reset to chosing first player and an enemy.


for (var i = 0; i < charName.length; i++) {

  console.log(charName[i]);

  var chartopdiv = $("<tr>");
  chartopdiv.attr("id", charName[i] + "span")
  chartopdiv.addClass("topdiv")
  $("#char").append(chartopdiv);
  $("#Obi-wan_Kenobispan").text(kenobi.name);
  $("#Luke_Skywalkerspan").text(lukeSkywalker.name);
  $("#Darth_Maulspan").text(darthMaul.name);
  $("#Darth_Sidiousspan").text(darthSidious.name);
  var characterCLass = $("<button>");
  characterCLass.addClass("characters col-2");
  characterCLass.attr("id", charName[i]);
  characterCLass.attr("value", charName[i]);
  $("#char").append(characterCLass);
  var charbottomdiv = $("<div>");
  charbottomdiv.attr("id", charName[i] + "div")
  charbottomdiv.addClass("bottomdiv")
  $("#char").append(charbottomdiv);
  $("#Obi-wan_Kenobidiv").text(kenobi.hp);
  $("#Luke_Skywalkerdiv").text(lukeSkywalker.hp);
  $("#Darth_Mauldiv").text(darthMaul.hp);
  $("#Darth_Sidiousdiv").text(darthSidious.hp);
  
  
  
  
}
 

$(".characters").on("click", function() {

  if ($(this).val() === "Obi-wan_Kenobi" && playerChosen === false) {
      player = kenobi;
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
        $("#Luke_Skywalker").text("Luke Skywalker");
        $("#Darth_Maul").text("Darth Maul");
        $("#Darth_Sidious").text("Darth Sidious");
      }, 20);
      playerChosen = true;
    }
  }
  if ($(this).val() === "Luke_Skywalker" && playerChosen === false) {
    player = lukeSkywalker;
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
    player = darthMaul;
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
    player = darthSidious;
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

  if (playerChosen == true && enemyChosen == false) {
    $(".enemies").on("click", function() {
        if ($(this).val() === "Obi-wan_Kenobi" && playerChosen === true && enemyChosen == false) {
            enemyChosen = true;
        defender = kenobi;
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender");
        defenderBtn.attr("id", "Obi-wan_KenobiDef");
        defenderBtn.attr("value", "Obi-wan_Kenobi");
        $("#defender").append(defenderBtn);
        $(".selected-defender").text("Obi-wan_Kenobi");
        $("button").remove("#Obi-wan_Kenobi");
      }
      if ($(this).val() === "Luke_Skywalker" && playerChosen === true && enemyChosen == false) {
        enemyChosen = true;
        defender = lukeSkywalker;
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender");
        defenderBtn.attr("id", "Luke_SkywalkerDef");
        defenderBtn.attr("value", "Luke_Skywalker");
        $("#defender").append(defenderBtn);
        $(".selected-defender").text("Luke_Skywalker");
        $("button").remove("#Luke_Skywalker");
      }
      if ($(this).val() === "Darth_Maul" && playerChosen === true && enemyChosen == false) {
        enemyChosen = true;
        defender = darthMaul;
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender");
        defenderBtn.attr("id", "Darth_MaulDef");
        defenderBtn.attr("value", "Darth_Maul");
        $("#defender").append(defenderBtn);
        $(".selected-defender").text("Darth_Maul");
        $("button").remove("#Darth_Maul");
      }
      if ($(this).val() === "Darth_Sidious" && playerChosen === true && enemyChosen == false) {
        enemyChosen = true;
        defender = darthSidious;
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender");
        defenderBtn.attr("id", "Darth_SidiousDef");
        defenderBtn.attr("value", "Darth_Sidious");
        $("#defender").append(defenderBtn);
        $(".selected-defender").text("Darth Sidious");
        $("button").remove("#Darth_Sidious");
    }
            if(playerChosen === true && enemyChosen === true) {
          
                $("#attack").on("click", function(){
                   // if(player === "Darth_Sidious" && defender === "Darth_Maul") {
                    player.hitFunction(defender)

                    if(player.name === "Obi-wan_Kenobi") {
                    $("#"+player.name+"div").text(player.hp);
                    $("#"+defender.name+"div").text(defender.hp);
                    }
                    if(player.name === "Luke_Skywalker"){
                    $("#"+player.name+"div").text(player.hp);
                    $("#"+defender.name+"div").text(defender.hp);
                    }
                    if(player.name === "Darth_Maul") {
                    $("#"+player.name+"div").text(player.hp);
                    $("#"+defender.name+"div").text(defender.hp);
                    }
                    if(player.name ===  "Darth_Sidious") {
                    $("#"+player.name+"div").text(player.hp);
                    $("#"+defender.name+"div").text(defender.hp);
                    }
                  //  }
                })
            }
    });
  }
  
});
