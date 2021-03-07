var boot = function(game) {};
  
boot.prototype = {
	preload: function(){
    },
    
  	create: function(){
		this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
		this.game.state.start("preload");
		
	
	}
}