var gameover = function(game){}

gameover.prototype = {
  	create: function(){

		this.game.sound.stopAll(); 
		var music = this.game.sound.add('menuaudio', 1, true);

		music.play();
		music.loop = true;
		var gameover = this.game.add.sprite(0,0,"gameover");
		var bottoneindietro3 = this.game.add.button(145, 226,"bottoneindietro3",this.refresh,this);
		speed_sofia = 350;
		salto_sofia = - 450;
		score = 0;
		scoreviola = 0;
		pos_salto = false;
		morte = false;
		tempo = 90000;
		variabile_cannone = false;
		haivinto = false; 
		stopanimazione = true;
		penitenza = false; 
		stordito = true; 
		punteggio = 0;
		posizioneinizio = false; 
	},

	refresh: function() {
		this.game.state.start('boot');
		this.game.sound.stopAll(); 
    }
}
