    class Form {
    constructor(){
        this.input = createInput("Player Name")
        this.button = createButton("play")
        this.greeting = createElement('h4');

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();


    }
    display() {
        var title = createElement('h2')
        title.html("Car Racing Game ")
        title.position(450,100);

       
        this.input.position(405,260);

        
        this.button.position(450,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.updateCount(playerCount);
            player.update();

            
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(430,190);


        })

    }
}
