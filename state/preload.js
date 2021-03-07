var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        this.game.load.spritesheet('menu', 'img_storia/menu-08.jpg', 1024, 768);
        this.game.load.image('gameover', 'img_storia/gameover.jpg');
        this.game.load.image('gameoverpositivo', 'img_storia/gameoverpositivo.jpg');
        this.game.load.image('gameoverpositivo2', 'img_storia/gameoverpositivo2.jpg');
        this.game.load.image('storia1', 'img_storia/storia1.jpg');
        this.game.load.image('storia2', 'img_storia/storia2.jpg');
        this.game.load.image('storia3', 'img_storia/storia3.jpg');
        this.game.load.image('storia4', 'img_storia/storia4.jpg');
        this.game.load.image('storia5', 'img_storia/storia5.jpg');
        this.game.load.image('storia6', 'img_storia/storia6.png');
        this.game.load.image('storia7', 'img_storia/storia7.jpg');
        this.game.load.image('obiettivi', 'img_storia/obiettivi.png');
        this.game.load.image('crediti', 'img_storia/crediti.jpg');
        this.game.load.image('scritta1', 'img_storia/scritta1.png');
        this.game.load.image('scritta2', 'img_storia/scritta2.png');
        this.game.load.image('scritta3', 'img_storia/scritta3.png');
        this.game.load.image('scritta4', 'img_storia/scritta4.png');
        this.game.load.image('scritta5', 'img_storia/scritta5.png');
        this.game.load.image('scritta6', 'img_storia/scritta6.png');
        this.game.load.image('scritta7', 'img_storia/scritta7.png');
        this.game.load.image('bottonegioco', 'img/bottonegioca.png');
        this.game.load.image('bottonestoria', 'img/bottonestoria.png');
        this.game.load.image('bottonecrediti', 'img/bottonecrediti.png');
        this.game.load.image('bottoneindietro', 'img/pulsanteindietro.png');
        this.game.load.image('bottoneindietro2', 'img/pulsanteindietro2.png');
        this.game.load.image('bottoneindietro3', 'img/pulsanteindietro3.png');
        this.game.load.image('clessidra', 'img/clessidra.png');
        this.game.load.image('istruzioni', 'img/istruzioni.png');
        this.game.load.image('frecciadestra', 'img/frecciadestra.png');
        this.game.load.image('frecciasinistra', 'img/frecciasinistra.png');
        this.game.load.image('frecciasu', 'img/frecciasu.png');
        this.game.load.image('spazio', 'img/spazio.png');
        this.game.load.spritesheet('invio', 'img/invio.png', 34, 40);
        this.game.load.image('bus', 'img/bus.png',556, 306);
        this.game.load.image('bus2', 'img/bus.png',556, 306);
        this.game.load.image('metro', 'img/metro.png',2257, 440);
        this.game.load.image('scala1', 'img/scala1.png');
        this.game.load.image('scala2', 'img/scala2.png');
        this.game.load.image('scala3', 'img/scala3.png');
        this.game.load.image('scala4', 'img/scala4.png');

        this.game.load.spritesheet('diner', 'img/diner.png', 92, 27);
        this.game.load.spritesheet('live', 'img/live.png', 80, 62);
        this.game.load.spritesheet('night', 'img/nightclub.png', 147, 25);

        this.game.load.crossOrigin = 'anonymous';

        this.game.load.spritesheet('sofia', 'img/sofia.png', 128, 111);
        this.game.load.spritesheet('load_cetrionzoli', 'img/load_cetrionzoli.png', 982.5, 294);
        this.game.load.spritesheet('load_pozione', 'img/load_pozione.png', 982.5, 294);
        this.game.load.spritesheet('orologio', 'img/tempo-load.png', 982.5, 294);
        this.game.load.spritesheet('ggg', 'img/ggg-sprite.png',1024, 768);

        this.game.load.spritesheet('punk', 'img/punk.png',55.09,97.26);
        this.game.load.spritesheet('rapper', 'img/rapper.png',58.08,110);
        this.game.load.spritesheet('bionda', 'img/bionda.png',68.14,98);

        this.game.load.image('sfondo1', 'img/sfondo1.png');
        this.game.load.image('sfondo2', 'img/sfondo2.png');
        this.game.load.image('sfondo3', 'img/sfondo3.png');
        this.game.load.image('sfondo4', 'img/sfondo4.png');
        this.game.load.image('terreno1', 'img/terreno1.png');
        this.game.load.image('terreno2', 'img/terreno2.png');
        this.game.load.image('intramezzo', 'img/intramezzo.png');
        this.game.load.image('terreno2_sopra', 'img/terreno2_sopra.png');
        this.game.load.image('terreno2_sotto', 'img/terreno2_sotto.png');
        this.game.load.image('scalino', 'img/scalino.png');
        this.game.load.image('scalino1', 'img/scalino1.png');
        this.game.load.image('ostacolo', 'img/ostacolo.png');
        this.game.load.image('ingresso', 'img/ingresso.png');
        this.game.load.image('ingresso2', 'img/ingresso2.png');

        this.game.load.image('sogno1', 'img/sogno1.png');
        this.game.load.image('sogno2', 'img/sogno2.png');
        this.game.load.image('pozione_salto', 'img/pozione2.png');
        this.game.load.image('pozione_viola', 'img/pozione1.png');
        this.game.load.image('button', 'img/pozione2.png');
        this.game.load.image('bidone', 'img/bidone1.png');
        this.game.load.image('cetrionzolo', 'img/cetrionzolo.png');

        this.game.load.image('rosa01', 'img/rosa01.png');
        this.game.load.image('rosa02', 'img/rosa02.png');

        this.game.load.spritesheet('cannone', 'img/cannone-sprite.png', 504.33, 428);

        this.game.load.audio('menuaudio','audio/menuaudio.MP3');
        this.game.load.audio('gameaudio','audio/Jammin.MP3');
        this.game.load.audio('audiocannone','audio/cannone.MP3');
        this.game.load.audio('audiofuochi','audio/fuochi.MP3');
        this.game.load.audio('audioggg','audio/flauto.MP3');

	},
  	create: function(){
		this.game.state.start('gametitle');
	}
}