class Form{

    constructor(){};

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(450,0);

        var input = createInput("Name");
        input.position(450,200);

        var button = createButton("Play");
        button.position(515,300);

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(450,200);
        })


    }
}