class Game{
    constructor(){}
    getState(){
        var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
            gameState = data.val();
        })


    }

    update(state){
        database.ref('/').update({
            gameState :state

        })

    }

   async  start(){
        if(gameState === 0){
            player = new Player();
            var playercountref = await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();

            }
            form = new Form()
            form.display();
        }

    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts Now",120,100);
        Player.getplayerInfo();
        text("All Player Data",182,195);
          if(allplayers!==undefined){
            var display_position =130
           for(var plr in allplayers){
               if(plr === "player"+player.index)
                   fill("red");
               else
                   fill("black");
               display_position+=30;
               textSize(15);
               text(allplayers[plr].name + " : " + allplayers[plr].distance,120,display_position)
               
           }
        }
    }
}