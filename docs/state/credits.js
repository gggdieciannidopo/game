var credits = function(game) {};
  
credits.prototype = {    
  	create: function(){
        var crediti = this.game.add.sprite(0,0,"crediti");
        var bottoneindietro = this.game.add.button(154,680,"bottoneindietro",this.refresh,this);
    },
    refresh: function() {
        this.game.state.start('gametitle');
        this.game.sound.stopAll(); 
    }
}