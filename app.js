// GLOBAL VARIABLES
// =================================================================

// Pokemon Variables
var pokemon = {
    bulbasaur:
    {
        name: "Suicune",
        value: 0
    },
    charmander:
    {
        name: "Charmander",
        value: 0
    },
    squirtle:
    {
        name: "Squirtle",
        value: 0
    },
    suicune:
    {
        name: "Suicune",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore 	= 0;
var targetScore 	= 0;

// Wins and Losses
var winCount		= 0;
var lossCount		= 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the Game (and restarts the game)
var startGame = function() {

    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);

    // Set different values for each of the crystals (between 1 and 12)
    pokemon.bulbasaur.value = getRandom(1, 12);
    pokemon.squirtle.value 	= getRandom(1, 12);
    pokemon.charmander.value = getRandom(1, 12);
    pokemon.suicune.value = getRandom(1, 12);

    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    // Testing Console
    console.log("-----------------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Suicune: " + pokemon.bulbasaur.value + " | Charmander: " + pokemon.charmander.value +  " | Squirtle: " + pokemon.squirtle.value + " | Suicune: " + pokemon.suicune.value);
    console.log("-----------------------------------")
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin Function
    checkWin();

    // Testing Console
    console.log("Your Score: " + currentScore);
}


// Check if User Won or Lost and Reset the Game
var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry. You lost!");
        console.log("You Lost");

        // Add to Loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#lossCount").html(lossCount);

        // Restart the game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");

        // Add to the Win Counter
        winCount++;

        // Change Win Count HTML
        $("#winCount").html(winCount);

        // Restart the game
        startGame();
    }

}



// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#bulbasaur").click(function() {
    addValues(pokemon.bulbasaur);
});

$("#squirtle").click(function() {
    addValues(pokemon.squirtle);
});

$("#charmander").click(function() {
    addValues(pokemon.charmander);
});

$("#suicune").click(function() {
    addValues(pokemon.suicune);
});
