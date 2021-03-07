var story = function(game) {
}
  
story.prototype = {
  	create: function(){

        storia1 = this.game.add.sprite(0, 0, 'storia1');
        scritta1 = this.game.add.sprite(0, 0, 'scritta1');
        this.game.input.onDown.add(this.storia2, this);
      },

    storia2: function(){
            storia1.destroy();
            scritta1.destroy(); 
            storia2 = this.game.add.sprite(0, 0, 'storia2');
            scritta2 = this.game.add.sprite(0, 0, 'scritta2');
            this.game.input.onDown.add(this.storia3, this); 
        },

        storia3: function(){
            storia2.destroy();
            scritta2.destroy(); 
            storia3 = this.game.add.sprite(0, 0, 'storia3');
            scritta3 = this.game.add.sprite(0, 0, 'scritta3');
            this.game.input.onDown.add(this.storia4, this); 
        },

        storia4: function(){
            storia3.destroy();
            scritta3.destroy();
            storia4 = this.game.add.sprite(0, 0, 'storia4');
            scritta4 = this.game.add.sprite(0, 0, 'scritta4');
            this.game.input.onDown.add(this.storia5, this); 
        },
        storia5: function(){
            storia4.destroy();
            scritta4.destroy();
            storia5 = this.game.add.sprite(0, 0, 'storia5');
            scritta5 = this.game.add.sprite(0, 0, 'scritta5');
            this.game.input.onDown.add(this.storia6, this); 
        },
        storia6: function(){
            storia5.destroy();
            scritta5.destroy();
            storia6 = this.game.add.sprite(0, 0, 'storia6');
            scritta6 = this.game.add.sprite(0, 0, 'scritta6');
            this.game.input.onDown.add(this.storia7, this); 
        },
        storia7: function(){
            storia6.destroy();
            scritta6.destroy();
            storia7 = this.game.add.sprite(0, 0, 'storia7');
            scritta7 = this.game.add.sprite(0, 0, 'scritta7');
            this.game.input.onDown.add(this.iniziogioco, this); 
        },
        iniziogioco: function(){
            this.game.state.start('instruction') ;
            this.game.sound.stopAll(); 
        },
}