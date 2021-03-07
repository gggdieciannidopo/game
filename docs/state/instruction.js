var instruction = function(game) {
}
  
instruction.prototype = {
        create: function(){
            
            obiettivi = this.game.add.sprite(0, 0, 'obiettivi');
            this.game.input.onDown.add(this.iniziogioco, this); 

            audiogioco = this.game.sound.add('gameaudio', 1, true);
            audiogioco.play();
        },
        iniziogioco: function(){
            this.game.state.start('thegame') ;
        },
        render: function() {

        },
}