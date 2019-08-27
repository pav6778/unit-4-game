
let charObj = {
    kenobi : {
        healthPoints : 120,
        attack : 6,
        counterAttack: 6,
    },
    lukeSkywalker : {
        healthPoints: 100,
        attack: 5,
        counterAttack: 5,
    },
    darthMaul : {
        healthPoints: 180,
        attack: 25,
        counterAttack: 25,
    },
    darthSidious : {
        healthPoints: 150,
        attack: 20,
        counterAttack: 20,
    }
}

var enemyList = [];
let defender;
var player;
var enemyChosen = false;
var playerChosen = false;


var charName = Object.keys(charObj)




// create divs give them a class of characters and id that is somehow related to their object name.
//when a class is clicked, player id is picked and set as chosen player. while the rest go to an enemylist. when moved to enemy list, chars disappear from first divs created and reappear under other div class name enemies with the same ids. when clicked on class enemies, a new div and a new class of defender is given to second chosen player. Now we can perform some math with attack button. add event listener to attack button. when attack button is clicked, first player attacks and his attack increments by itself while taking away second player health by same number as attack of first player. each time the button is clicked, the health is taken away from both players, second player attacks at constant number, first player attacks at increased number until either of them get down to 0 hp. when chosen player dies a loss is added, on the other hand, if chosen enemy dies then a win added and for both outcomes, players reset to chosing first player and an enemy.  

for(var i = 0; i < charName.length; i ++ ){
    console.log(charName[i])
    var characterCLass = $("<div>");
    characterCLass.addClass("characters");
    characterCLass.attr("value", charName[i])
    $("#char").append(characterCLass);
    $(".characters").text("IMG")
}
$(".characters").on("click", function() {
    console.log($(this).val())
})

