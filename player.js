class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){
        var playercountref = database.ref('playerCount');
        playercountref.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
        var playerIndex ="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })

        
    }
   static  getplayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
           allplayers= data.val();
        })
        
    }
}   
