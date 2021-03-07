var gameover_positivo = function(game){
}

gameover_positivo.prototype = {
  	create: function(){

		this.game.sound.stopAll(); 
		var gameoverpositivo = this.game.add.sprite(0,0,"gameoverpositivo");
		this.game.input.onDown.add(score, this);

		
        var audiofuochi = this.game.sound.add('audiofuochi', 1, true);

        audiofuochi.play();
        audiofuochi.loop = true;

		function score () {
			this.game.sound.stopAll(); 
			
		var music = this.game.sound.add('menuaudio', 1, true);

		music.play();
        music.loop = true;
			gameoverpositivo.destroy();   
			var gameoverpositivo2 = this.game.add.sprite(0,0,"gameoverpositivo2");
			var bottoneindietro2 = this.game.add.button(432, 568,"bottoneindietro2", this.refresh, this);
			scritta_punteggio = this.game.add.text(512, 400, punteggio, {
				fontFamily: '50px Arial', 
				fill: "#a98342",
				fontSize: 50,		
				})
			scritta_punteggio.anchor.setTo(0.5, 0.5);
			}
	  	},

	refresh: function() {
		this.game.state.start('boot');
		this.game.sound.stopAll(); 
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
		}
}