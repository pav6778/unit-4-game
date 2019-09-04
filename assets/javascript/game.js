class character {
  constructor(name, hp, counterAttack, attack) {
    this.name = name;
    this.hp = hp;
    this.counterAttack = counterAttack;
    this.attack = attack;
  }
  hitFunction(enemy) {
    if (this.hp > 0 && enemy.hp > 0) {
      enemy.hp = enemy.hp - this.attack;
      this.attack = this.attack + attvalue;
      if(enemy.hp > 0) {
        this.hp = this.hp - enemy.counterAttack;
      }
    }
  }
}

let attvalue,
  kenobi = new character("Obi-wan_Kenobi", 120, 15, 8),
  lukeSkywalker = new character("Luke_Skywalker", 100, 5, 15),
  darthMaul = new character("Darth_Maul", 180, 25, 3),
  darthSidious = new character("Darth_Sidious", 150, 20, 8),
  enemyList = [],
  defender,
  player,
  enemyChosen = false,
  playerChosen = false,
  charName = [
    kenobi.name,
    lukeSkywalker.name,
    darthMaul.name,
    darthSidious.name
  ];
let removeDef = function() {
  $("#" + defender.name + "n").remove();
  $("#" + defender.name + "enemy").remove();
  $("#" + defender.name + "hp").remove();
};

let reset = function() {
  playerChosen = false;
  enemyChosen = false;
  defender = {};
  player = {};
  enemyList = [];
  kenobi = new character("Obi-wan_Kenobi", 120, 15, 8);
  lukeSkywalker = new character("Luke_Skywalker", 100, 5, 15);
  darthMaul = new character("Darth_Maul", 180, 25, 3);
  darthSidious = new character("Darth_Sidious", 150, 20, 8);
  $(".playertopdiv").remove();
  $(".selected-player").remove();
  $(".playerbottomdiv").remove();
  $(".defendertopdiv").remove();
  $(".selected-defender").remove();
  $(".defenderbottomdiv").remove();
  $(".enemytopdiv").remove();
  $(".enemybtn").remove();
  $(".enemybottomdiv").remove();
  $("#wrap2").html(
    '<p id="yourattack" class="text-warning"></p>' +
      '<p id="enemyattack" class="text-warning"></p>'
  );

  setChars();
  setPlayer();
};
var setChars = function() {
  for (var i = 0; i < charName.length; i++) {
    // Display name
    var chartopdiv = $("<div>");
    chartopdiv.attr("id", charName[i] + "span");
    chartopdiv.addClass("topdiv col-2");
    $("#charnames").append(chartopdiv);
    $("#" + kenobi.name + "span").text("Obi-wan Kenobi");
    $("#" + lukeSkywalker.name + "span").text("Luke Skywalker");
    $("#" + darthMaul.name + "span").text("Darth Maul");
    $("#" + darthSidious.name + "span").text("Darth Sidious");
    // button
    var characterCLass = $("<button>");
    characterCLass.addClass("characters col-2");
    characterCLass.attr("id", charName[i]);
    characterCLass.attr("value", charName[i]);
    $("#charbtn").append(characterCLass);
    // Display HP
    var charbottomdiv = $("<div>");
    charbottomdiv.attr("id", charName[i] + "div");
    charbottomdiv.addClass("bottomdiv col-2");
    $("#charhp").append(charbottomdiv);
    $("#" + kenobi.name + "div").text(kenobi.hp);
    $("#" + lukeSkywalker.name + "div").text(lukeSkywalker.hp);
    $("#" + darthMaul.name + "div").text(darthMaul.hp);
    $("#" + darthSidious.name + "div").text(darthSidious.hp);
  }
};
var setPlayer = function() {
  $(".characters").on("click", function() {
    if ($(this).val() === "Obi-wan_Kenobi" && playerChosen === false) {
      player = kenobi;
      attvalue = 8;
      // Display name
      var playertopdiv = $("<div>");
      playertopdiv.addClass("playertopdiv col-2");
      $("#playername").append(playertopdiv);
      $(".playertopdiv").text("Obi-wan Kenobi");
      // Player button
      var playerBtn = $("<button>");
      playerBtn.addClass("selected-player col-2");
      playerBtn.attr("id", player.name);
      playerBtn.attr("value", "Obi-wan_Kenobi");
      $("#playerbtn").append(playerBtn);
      enemyList.push(lukeSkywalker.name, darthMaul.name, darthSidious.name);
      // Display HP
      var playerbottomdiv = $("<div>");
      playerbottomdiv.addClass("playerbottomdiv col-2");
      $("#playerhp").append(playerbottomdiv);
      $(".playerbottomdiv").text(player.hp);
      // Display Enemy list
      for (var i = 0; i < enemyList.length; i++) {
        //Display Enemy Name
        var enemytopdiv = $("<div>");
        enemytopdiv.attr("id", enemyList[i] + "n");
        enemytopdiv.addClass("enemytopdiv col-2");
        $("#enemynames").append(enemytopdiv);
        $("#" + lukeSkywalker.name + "n").text("Luke Skywalker");
        $("#" + darthMaul.name + "n").text("Darth Maul");
        $("#" + darthSidious.name + "n").text("Darth Sidious");
        // Display Enemy
        var enemybtn = $("<button>");
        enemybtn.addClass("enemybtn col-2");
        enemybtn.attr("id", enemyList[i] + "enemy");
        enemybtn.attr("value", enemyList[i]);
        $("#enemybtn").append(enemybtn);
        // Display Enemy Hp
        var enemybottomdiv = $("<div>");
        enemybottomdiv.attr("id", enemyList[i] + "hp");
        enemybottomdiv.addClass("enemybottomdiv col-2");
        $("#enemyhp").append(enemybottomdiv);
        $("#" + lukeSkywalker.name + "hp").text(lukeSkywalker.hp);
        $("#" + darthMaul.name + "hp").text(darthMaul.hp);
        $("#" + darthSidious.name + "hp").text(darthSidious.hp);
      }
      playerChosen = true;
      $(".selected-player").attr("disabled", true);
    }
    if ($(this).val() === "Luke_Skywalker" && playerChosen === false) {
      player = lukeSkywalker;
      attvalue = 15
      // Display name
      var playertopdiv = $("<div>");
      playertopdiv.addClass("playertopdiv col-2");
      $("#playername").append(playertopdiv);
      $(".playertopdiv").text("Luke Skywalker");
      // Player button
      var playerBtn = $("<button>");
      playerBtn.addClass("selected-player col-2");
      playerBtn.attr("id", player.name);
      playerBtn.attr("value", "Luke_Skywalker");
      $("#playerbtn").append(playerBtn);
      enemyList.push(kenobi.name, darthMaul.name, darthSidious.name);
      // Display HP
      var playerbottomdiv = $("<div>");
      playerbottomdiv.addClass("playerbottomdiv col-2");
      $("#playerhp").append(playerbottomdiv);
      $(".playerbottomdiv").text(player.hp);
      for (var i = 0; i < enemyList.length; i++) {
        //Display Enemy Name
        var enemytopdiv = $("<div>");
        enemytopdiv.attr("id", enemyList[i] + "n");
        enemytopdiv.addClass("enemytopdiv col-2");
        $("#enemynames").append(enemytopdiv);
        $("#" + kenobi.name + "n").text("Obi-wan Kenobi");
        $("#" + darthMaul.name + "n").text("Darth Maul");
        $("#" + darthSidious.name + "n").text("Darth Sidious");
        // Display Enemy
        var enemybtn = $("<button>");
        enemybtn.addClass("enemybtn col-2");
        enemybtn.attr("id", enemyList[i] + "enemy");
        enemybtn.attr("value", enemyList[i]);
        $("#enemybtn").append(enemybtn);
        // Display Enemy Hp
        var enemybottomdiv = $("<div>");
        enemybottomdiv.attr("id", enemyList[i] + "hp");
        enemybottomdiv.addClass("enemybottomdiv col-2");
        $("#enemyhp").append(enemybottomdiv);
        $("#" + kenobi.name + "hp").text(kenobi.hp);
        $("#" + darthMaul.name + "hp").text(darthMaul.hp);
        $("#" + darthSidious.name + "hp").text(darthSidious.hp);
      }
      playerChosen = true;
      $(".selected-player").attr("disabled", true);
    }
    if ($(this).val() === "Darth_Maul" && playerChosen === false) {
      player = darthMaul;
      attvalue = 3;
      // Display name
      var playertopdiv = $("<div>");
      playertopdiv.addClass("playertopdiv col-2");
      $("#playername").append(playertopdiv);
      $(".playertopdiv").text("Darth Maul");
      // Player button
      var playerBtn = $("<button>");
      playerBtn.addClass("selected-player col-2");
      playerBtn.attr("id", player.name);
      playerBtn.attr("value", "Darth_Maul");
      $("#playerbtn").append(playerBtn);
      enemyList.push(kenobi.name, lukeSkywalker.name, darthSidious.name);
      // Display HP
      var playerbottomdiv = $("<div>");
      playerbottomdiv.addClass("playerbottomdiv col-2");
      $("#playerhp").append(playerbottomdiv);
      $(".playerbottomdiv").text(player.hp);
      for (var i = 0; i < enemyList.length; i++) {
        //Display Enemy Name
        var enemytopdiv = $("<div>");
        enemytopdiv.attr("id", enemyList[i] + "n");
        enemytopdiv.addClass("enemytopdiv col-2");
        $("#enemynames").append(enemytopdiv);
        $("#" + kenobi.name + "n").text("Obi-wan Kenobi");
        $("#" + lukeSkywalker.name + "n").text("Luke Skywalker");
        $("#" + darthSidious.name + "n").text("Darth Sidious");
        // Display Enemy
        var enemybtn = $("<button>");
        enemybtn.addClass("enemybtn col-2");
        enemybtn.attr("id", enemyList[i] + "enemy");
        enemybtn.attr("value", enemyList[i]);
        $("#enemybtn").append(enemybtn);
        // Display Enemy Hp
        var enemybottomdiv = $("<div>");
        enemybottomdiv.attr("id", enemyList[i] + "hp");
        enemybottomdiv.addClass("enemybottomdiv col-2");
        $("#enemyhp").append(enemybottomdiv);
        $("#" + kenobi.name + "hp").text(kenobi.hp);
        $("#" + lukeSkywalker.name + "hp").text(lukeSkywalker.hp);
        $("#" + darthSidious.name + "hp").text(darthSidious.hp);
      }
      playerChosen = true;
      $(".selected-player").attr("disabled", true);
    }
    if ($(this).val() === "Darth_Sidious" && playerChosen === false) {
      player = darthSidious;
      attvalue = 8;
      // Display name
      var playertopdiv = $("<div>");
      playertopdiv.addClass("playertopdiv col-2");
      $("#playername").append(playertopdiv);
      $(".playertopdiv").text("Darth Sidious");
      // Player button
      var playerBtn = $("<button>");
      playerBtn.addClass("selected-player col-2");
      playerBtn.attr("id", player.name);
      playerBtn.attr("value", "Darth_Sidious");
      $("#playerbtn").append(playerBtn);
      enemyList.push(kenobi.name, darthMaul.name, lukeSkywalker.name);
      // Display HP
      var playerbottomdiv = $("<div>");
      playerbottomdiv.addClass("playerbottomdiv col-2");
      $("#playerhp").append(playerbottomdiv);
      $(".playerbottomdiv").text(player.hp);
      for (var i = 0; i < enemyList.length; i++) {
        //Display Enemy Name
        var enemytopdiv = $("<div>");
        enemytopdiv.attr("id", enemyList[i] + "n");
        enemytopdiv.addClass("enemytopdiv col-2");
        $("#enemynames").append(enemytopdiv);
        $("#" + kenobi.name + "n").text("Obi-wan Kenobi");
        $("#" + darthMaul.name + "n").text("Darth Maul");
        $("#" + lukeSkywalker.name + "n").text("Luke Skywalker");
        // Display Enemy button
        var enemybtn = $("<button>");
        enemybtn.addClass("enemybtn col-2");
        enemybtn.attr("id", enemyList[i] + "enemy");
        enemybtn.attr("value", enemyList[i]);
        $("#enemybtn").append(enemybtn);
        // Display Enemy Hp
        var enemybottomdiv = $("<div>");
        enemybottomdiv.attr("id", enemyList[i] + "hp");
        enemybottomdiv.addClass("enemybottomdiv col-2");
        $("#enemyhp").append(enemybottomdiv);
        $("#" + kenobi.name + "hp").text(kenobi.hp);
        $("#" + darthMaul.name + "hp").text(darthMaul.hp);
        $("#" + lukeSkywalker.name + "hp").text(lukeSkywalker.hp);
      }
      playerChosen = true;
      $(".selected-player").attr("disabled", true);
    }
    $("button").remove(".characters");
    $("div").remove(".topdiv");
    $("div").remove(".bottomdiv");
    setEnemyList();
  });
};
var setEnemyList = function() {
  $(".enemybtn").on("click", function() {
    if (playerChosen == true && enemyChosen == false) {
      if (
        $(this).val() === "Obi-wan_Kenobi" &&
        playerChosen === true &&
        enemyChosen == false
      ) {
        enemyChosen = true;
        defender = kenobi;
        // Display defender name
        var defendertopdiv = $("<div>");
        defendertopdiv.addClass("defendertopdiv col-2");
        defendertopdiv.attr("id", defender.name + "top");
        $("#defendername").append(defendertopdiv);
        $(".defendertopdiv").text("Obi-wan Kenobi");
        // Defemder button
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender col-2");
        defenderBtn.attr("id", defender.name + "btn");
        defenderBtn.attr("value", "Obi-wan_Kenobi");
        $("#defenderbtn").append(defenderBtn);
        // Display defender HP
        var defenderbottomdiv = $("<div>");
        defenderbottomdiv.addClass("defenderbottomdiv col-2");
        defenderbottomdiv.attr("id", defender.name + "bottom");
        $("#defenderhp").append(defenderbottomdiv);
        $(".defenderbottomdiv").text(defender.hp);
        removeDef();
      }
      if (
        $(this).val() === "Luke_Skywalker" &&
        playerChosen === true &&
        enemyChosen == false
      ) {
        enemyChosen = true;
        defender = lukeSkywalker;
        // Display defender name
        var defendertopdiv = $("<div>");
        defendertopdiv.addClass("defendertopdiv col-2");
        defendertopdiv.attr("id", defender.name + "top");
        $("#defendername").append(defendertopdiv);
        $(".defendertopdiv").text("Luke Skywalker");
        // Defemder button
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender col-2");
        defenderBtn.attr("id", defender.name + "btn");
        defenderBtn.attr("value", "Luke_Skywalker");
        $("#defenderbtn").append(defenderBtn);
        // Display defender HP
        var defenderbottomdiv = $("<div>");
        defenderbottomdiv.addClass("defenderbottomdiv col-2");
        defenderbottomdiv.attr("id", defender.name + "bottom");
        $("#defenderhp").append(defenderbottomdiv);
        $(".defenderbottomdiv").text(defender.hp);
        removeDef();
      }
      if (
        $(this).val() === "Darth_Maul" &&
        playerChosen === true &&
        enemyChosen == false
      ) {
        enemyChosen = true;
        defender = darthMaul;
        // Display defender name
        var defendertopdiv = $("<div>");
        defendertopdiv.addClass("defendertopdiv col-2");
        defendertopdiv.attr("id", defender.name + "top");
        $("#defendername").append(defendertopdiv);
        $(".defendertopdiv").text("Darth Maul");
        // Defemder button
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender col-2");
        defenderBtn.attr("id", defender.name + "btn");
        defenderBtn.attr("value", "Darth_Maul");
        $("#defenderbtn").append(defenderBtn);
        // Display defender HP
        var defenderbottomdiv = $("<div>");
        defenderbottomdiv.addClass("defenderbottomdiv col-2");
        defenderbottomdiv.attr("id", defender.name + "bottom");
        $("#defenderhp").append(defenderbottomdiv);
        $(".defenderbottomdiv").text(defender.hp);
        removeDef();
      }
      if (
        $(this).val() === "Darth_Sidious" &&
        playerChosen === true &&
        enemyChosen == false
      ) {
        enemyChosen = true;
        defender = darthSidious;
        // Display defender name
        var defendertopdiv = $("<div>");
        defendertopdiv.addClass("defendertopdiv col-2");
        defendertopdiv.attr("id", defender.name + "top");
        $("#defendername").append(defendertopdiv);
        $(".defendertopdiv").text("Darth Sidious");
        // Defender button
        var defenderBtn = $("<button>");
        defenderBtn.addClass("selected-defender col-2");
        defenderBtn.attr("id", defender.name + "btn");
        defenderBtn.attr("value", "Darth_Sidious");
        $("#defenderbtn").append(defenderBtn);
        // Display defender HP
        var defenderbottomdiv = $("<div>");
        defenderbottomdiv.addClass("defenderbottomdiv col-2");
        defenderbottomdiv.attr("id", defender.name + "bottom");
        $("#defenderhp").append(defenderbottomdiv);
        $(".defenderbottomdiv").text(defender.hp);
        removeDef();
      }
    }
  });
};

var fight = function() {
  $("#attack").on("click", function() {
    if (playerChosen === true && enemyChosen === true) {
      if (player.name === "Obi-wan_Kenobi") {
        
        $("#yourattack").text(
          "You attacked " + defender.name + " for " + player.attack + " damage."
        );
        $("#enemyattack").text(
          defender.name +
            " attacked you back for " +
            defender.counterAttack +
            " damage."
        );
      }
      if (player.name === "Luke_Skywalker") {
        
        $("#yourattack").text(
          "You attacked " + defender.name + " for " + player.attack + " damage."
        );
        $("#enemyattack").text(
          defender.name +
            " attacked you back for " +
            defender.counterAttack +
            " damage."
        );
      }
      if (player.name === "Darth_Maul") {
        
        $("#yourattack").text(
          "You attacked " + defender.name + " for " + player.attack + " damage."
        );
        $("#enemyattack").text(
          defender.name +
            " attacked you back for " +
            defender.counterAttack +
            " damage."
        );
      }
      if (player.name === "Darth_Sidious") {
        
        $("#yourattack").text(
          "You attacked " + defender.name + " for " + player.attack + " damage."
        );
        $("#enemyattack").text(
          defender.name +
            " attacked you back for " +
            defender.counterAttack +
            " damage."
        );
      }
      player.hitFunction(defender);
      results();
      $(".playerbottomdiv").text(player.hp);
      $(".defenderbottomdiv").text(defender.hp);
    }
  });
};
var results = function() {
  if (defender.hp <= 0) {
    for (var j = 0; j < enemyList.length; j++) {
      if (enemyList[j] === defender.name) {
        enemyList = enemyList.filter(enemy => enemy !== defender.name);
      }
    }
    $("#" + defender.name + "top").remove();
    $("#" + defender.name + "btn").remove();
    $("#" + defender.name + "bottom").remove();
    $("#yourattack").text(
      "You have defeated " +
        defender.name +
        ", you can choose to fight another enemy."
    );
    $("#enemyattack").text("")
    if (enemyList.length == 0) {
      $("#wrap2").html("<div id='text'></div>" + "<div id='resetit'></div>");
      $("#text").text("Well done! You have defeated your enemies!");
      var resetbtn = $("<button>");
      resetbtn.attr("id", "reset");
      resetbtn.addClass("btn btn-info py-0 px-2 my-2");
      $("#resetit").append(resetbtn);
      resetbtn.text("Reset");
      $("#reset").on("click", function() {
        reset();
      });
    }
    defender = false;
    enemyChosen = false;
  }
  if (player.hp <= 0) {
    $("#yourattack").text(
      "You have been defeated, GAME OVER!!!"
    );
    var resetbtn = $("<button>");
    resetbtn.attr("id", "reset");
    resetbtn.addClass("btn btn-info py-0 px-2 my-2");
    $("#enemyattack").text("");
    $("#enemyattack").append(resetbtn);
    resetbtn.text("Reset");
    $("#reset").on("click", function() {
      reset();
    });
  }
};
setChars();
setPlayer();
setEnemyList();
fight();
