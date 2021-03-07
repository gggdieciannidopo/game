var gametitle = function(game){
    
}

gametitle.prototype = {
    create: function(){


        menu = this.game.add.sprite(0,0,"menu");  
        bottonegioco = this.game.add.button(715, 333,"bottonegioco",this.iniziogioco,this); 
        bottonestoria = this.game.add.button(710, 424,"bottonestoria",this.iniziostoria,this);
        bottonecrediti = this.game.add.button(688,517,"bottonecrediti",this.iniziocrediti,this);        

        var music = this.game.add.sound('menuaudio', 1, true);
        music.play();
        music.loop = true;

    },
    update: function() {
        if (bottonegioco.input.pointerOver()) {
            menu.frame= 1;
        }
        else if (bottonestoria.input.pointerOver()) {
            menu.frame= 2;
        }
        else if (bottonecrediti.input.pointerOver()) {
            menu.frame= 3;
        }
        else {
            menu.frame= 0;
        };
				
		

    },
    iniziogioco: function() {
        this.game.state.start('instruction');
        this.game.sound.stopAll(); 
    },
    iniziostoria: function() {
        this.game.state.start('story');
        //this.game.sound.stopAll(); 
    },
    iniziocrediti: function() {
        this.game.state.start('credits');
        //this.game.sound.stopAll();          
    },
    
    
}