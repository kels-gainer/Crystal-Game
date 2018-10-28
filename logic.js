$(document).ready(function() {
    
    var randomNumber = Math.floor(Math.random()*101+19);
    $("#match-text").text(randomNumber);
    
    var wins = 0;
    var lose = 0;
    var totalScore = 0;

    resetCards();

    function resetCards() {
        var card1 = Math.floor(Math.random() * 11+1);
        var card2 = Math.floor(Math.random() * 11+1);
        var card3 = Math.floor(Math.random() * 11+1);
        var card4 = Math.floor(Math.random() * 11+1);
        $(".crystal1").attr("value", card1);
        $(".crystal2").attr("value", card2);
        $(".crystal3").attr("value", card3);
        $(".crystal4").attr("value", card4);

    }

    
    function resetRandom() {
        randomNumber = Math.floor(Math.random() *101+19);
        $("#match-text").text(randomNumber);
    };

    function resetTotal() {
        totalScore = 0;
        $("#total-text").text(totalScore);
        
    }

    function resetAll() {
        resetRandom();
        resetCards();
        resetTotal();
    };

    $(".crystal1").click(function() {
        var value = $(this).attr("value");
        $(".totalScore").text(totalScore += parseInt(value));
        $("#total-text").text(totalScore);
        score();
    });

    $(".crystal2").click(function() {
        var value = $(this).attr("value");
        $(".totalScore").text(totalScore += parseInt(value));
        $("#total-text").text(totalScore);
        score();
    })

    $(".crystal3").click(function() {
        var value = $(this).attr("value");
        $(".totalScore").text(totalScore += parseInt(value));
        $("#total-text").text(totalScore);
        score();
    })

    $(".crystal4").click(function() {
        var value = $(this).attr("value");
        $(".totalScore").text(totalScore += parseInt(value));
        $("#total-text").text(totalScore);
        score();
    })


    function score() {
        if(totalScore === randomNumber) {
            wins++;
            alert("You Won!");
            $("#wins-text").text(wins);
            resetAll();
        } else if (totalScore > randomNumber) {
            lose++
            alert("Better Luck Next Time")
            $("#lose-text").text(lose);
            resetAll();
            };
    };

    
});