var thegame = function(game){
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
};

thegame.prototype = {
  	create: function(){

        audiocannone = this.game.sound.add('audiocannone', 1, false);
        audioggg = this.game.sound.add('audioggg', 1, false);            

        this.game.world.setBounds(0, 0, 34091, 2454);

                    this.game.add.image(0, 0,'sfondo1');
                    this.game.add.image(8523, 0,'sfondo2');
                    this.game.add.image(17044, 0,'sfondo3');
                    this.game.add.image(25566, 0,'sfondo4');

                    ingressi = this.game.add.physicsGroup();
                    ingressi.create(9705, 1590.5, 'ingresso');    
                    ingressi.create(19035, 1592, 'ingresso2');                

                    ingressi.setAll('body.immovable', true);

                    diner = this.game.add.sprite(2352,1489, 'diner',0);

                    diner.animations.add('neondiner', [0,1], 5);

                    diner2 = this.game.add.sprite(29520,1489, 'diner',0);

                    diner2.animations.add('neondiner', [0,1], 5);

                    live = this.game.add.sprite(4649,1542, 'live',0);

                    live.animations.add('neonlive', [0,1], 3);

                    night = this.game.add.sprite(30185,1482, 'night',0);

                    night.animations.add('neonnight', [0,1], 2);

                    night2 = this.game.add.sprite(3020,1482, 'night',0);

                    night2.animations.add('neonnight', [0,1], 2);                    

                    terreno = this.game.add.physicsGroup();
                    terreno.create(0, 1663, 'terreno1');
                    terreno.create(25516, 1663, 'terreno1');
                    terreno.create(20079, 1663, 'terreno1');
                    terreno.create(8506, 1663, 'terreno2');
                    terreno.create(8536, 1663, 'terreno2')
                    terreno.create(10120, 2043, 'intramezzo');
                    terreno.create(19087, 2043, 'intramezzo')
                    terreno.create(10467, 1663, 'terreno2_sopra');
                    terreno.create(11154, 2378, 'terreno2_sotto');
                    terreno.create(12572, 2378, 'terreno2_sotto');
                    terreno.create(11154, 2000, 'terreno2_sotto');
                    terreno.create(12572, 2000, 'terreno2_sotto');
                    terreno.setAll('body.immovable', true);
                    terreno.setAll('body.collideWorldBounds',true);
                    
                    terreno.setAll('body.immovable', true);

                    istruzioni = this.game.add.physicsGroup();
                    istruzioni.create(350, 1350, 'istruzioni');
                    istruzioni.create(250, 1600, 'frecciasinistra');
                    istruzioni.create(285, 1600, 'frecciadestra');
                    istruzioni.create(700, 1600, 'frecciasu');
                    istruzioni.create(1100, 1500, 'spazio');                    

                    istruzioni.setAll('body.immovable', true);
                    istruzioni.setAll('body.collideWorldBounds',true);

                    scalino = this.game.add.physicsGroup();
                    scalino.create(9606, 1663, 'scalino');
                    scalino.create(9666, 1717, 'scalino');
                    scalino.create(9737, 1771, 'scalino');
                    scalino.create(9808, 1825, 'scalino');
                    scalino.create(9869, 1880, 'scalino');
                    scalino.create(9950, 1934, 'scalino');
                    scalino.create(10002, 1989, 'scalino');
                    scalino.create(10063, 2043, 'scalino');
                    scalino.create(10628, 2043, 'scalino1');
                    scalino.create(10722, 2100, 'scalino1');
                    scalino.create(10816, 2155, 'scalino1');
                    scalino.create(10890, 2211, 'scalino1');
                    scalino.create(10983, 2267, 'scalino1');
                    scalino.create(11077, 2323, 'scalino1');
                    scalino.create(11171, 2378, 'scalino1');
                    scalino.create(20069, 1663, 'scalino');
                    scalino.create(19997, 1717, 'scalino');
                    scalino.create(19906, 1771, 'scalino');
                    scalino.create(19835, 1825, 'scalino');
                    scalino.create(19764, 1880, 'scalino');
                    scalino.create(19693, 1934, 'scalino');
                    scalino.create(19622, 1989, 'scalino');
                    scalino.create(19551, 2043, 'scalino');
                    scalino.create(18993, 2043, 'scalino1');
                    scalino.create(18889, 2100, 'scalino1');
                    scalino.create(18805, 2155, 'scalino1');
                    scalino.create(18722, 2211, 'scalino1');
                    scalino.create(18629, 2267, 'scalino1');
                    scalino.create(18536, 2323, 'scalino1');
                    scalino.create(18443, 2378, 'scalino1');
                    scalino.create(11182, 1663, 'ostacolo');
                    scalino.create(18340, 1663, 'ostacolo');
                    scalino.setAll('body.immovable', true);
                    scalino.setAll('body.collideWorldBounds',true);

                    bidone = this.game.add.physicsGroup();
                    bidone.create(800, 1590, 'bidone');
                    bidone.create(2648, 1590, 'bidone');
                    bidone.create(7660, 1590, 'bidone');
                    bidone.create(22165, 1590, 'bidone');
                    bidone.create(27268, 1590, 'bidone');
                    bidone.create(29857, 1590, 'bidone');
                    bidone.create(33073, 1590, 'bidone');

                    bidone.setAll('body.immovable', true);
                    bidone.setAll('body.collideWorldBounds',true);

                    cetrionzolo = this.game.add.physicsGroup();

                    cetrionzolo.create(1482, 1300,'cetrionzolo');
                    cetrionzolo.create(3860, 1200,'cetrionzolo');
                    cetrionzolo.create(7510, 1200,'cetrionzolo');
                    cetrionzolo.create(14200, 2100,'cetrionzolo');
                    cetrionzolo.create(16860, 2100,'cetrionzolo');
                    cetrionzolo.create(20381, 1261,'cetrionzolo');
                    cetrionzolo.create(22947, 1620,'cetrionzolo');
                    cetrionzolo.create(25694, 1418,'cetrionzolo');
                    cetrionzolo.create(28273, 1400,'cetrionzolo');
                    cetrionzolo.create(29374, 1372,'cetrionzolo');

                    cetrionzolo.setAll('body.enable', true);
                    cetrionzolo.setAll('body.collideWorldBounds', true);
                    cetrionzolo.setAll('body.gravity.y', 500);
                    cetrionzolo.setAll('scale.x', 0.3);
                    cetrionzolo.setAll('scale.y', 0.3);

                    pozione_salto = this.game.add.physicsGroup();
                    pozione_salto.create(5190, 1200,'pozione_salto');
                    pozione_salto.create(20707, 1136,'pozione_salto');
                    pozione_salto.create(24045, 1136,'pozione_salto');
                    pozione_salto.create(27276, 1279,'pozione_salto');
                    pozione_salto.create(30164, 1279,'pozione_salto');

                    pozione_salto.setAll('body.enable', true);
                    pozione_salto.setAll('body.collideWorldBounds', true);
                    pozione_salto.setAll('body.gravity.y', 500);
                    pozione_salto.setAll('scale.x', 0.8);
                    pozione_salto.setAll('scale.y', 0.8);

                    pozione_viola = this.game.add.physicsGroup();
                    pozione_viola.create(4160, 900,'pozione_viola');
                    pozione_viola.create(6230, 900,'pozione_viola');
                    pozione_viola.create(8370, 900,'pozione_viola');
                    pozione_viola.create(12825, 2100,'pozione_viola');
                    pozione_viola.create(19495, 1805,'pozione_viola');
                    pozione_viola.create(22182, 902,'pozione_viola');
                    pozione_viola.create(24888, 1246,'pozione_viola');
                    pozione_viola.create(26216, 1380,'pozione_viola');
                    pozione_viola.create(29066, 1104,'pozione_viola');
                    pozione_viola.create(32705, 1288,'pozione_viola');

                    pozione_viola.setAll('body.enable', true);
                    pozione_viola.setAll('body.collideWorldBounds', true);
                    pozione_viola.setAll('body.gravity.y', 500);
                    pozione_viola.setAll('scale.x', 0.8);
                    pozione_viola.setAll('scale.y', 0.8);

                    clessidra =this.game.add.physicsGroup();
                    clessidra.create(5890, 900,'clessidra');
                    clessidra.create(7830, 900,'clessidra');
                    clessidra.create(11375, 2197,'clessidra');
                    clessidra.create(15420, 2119,'clessidra');
                    clessidra.create(21571, 1104,'clessidra');
                    clessidra.create(23646, 1410,'clessidra');
                    clessidra.create(27500, 1266,'clessidra');
                    clessidra.create(30905, 1330,'clessidra');

                    clessidra.setAll('body.enable', true);
                    clessidra.setAll('body.collideWorldBounds', true);
                    clessidra.setAll('body.gravity.y', 500);
                    clessidra.setAll('scale.x', 0.5);
                    clessidra.setAll('scale.y', 0.5);

                    cannone = this.game.add.sprite(33502,1480, 'cannone',0);
                    this.game.physics.arcade.enable(cannone);
                    cannone.body.collideWorldBounds = true;
                    cannone.body.immovable = true;
                    cannone.scale.x=0.5;
                    cannone.scale.y=0.5;
                    cannone.body.setSize(500, 500, 20, 20);

                    cannone.animations.add('azione', [0,1,2,3,4,5]);

                    bus= this.game.add.sprite(3852,1450, 'bus',0);
                    this.game.physics.arcade.enable(bus);
                    bus.body.immovable = true;
                    bus.body.collideWorldBounds = true;
                    bus.body.velocity.x=150;

                    bus2= this.game.add.sprite(8600,1450, 'bus2',0);
                    this.game.physics.arcade.enable(bus2);
                    bus2.body.immovable = true;
                    bus2.body.collideWorldBounds = true;
                    bus2.body.velocity.x=150;

                    bus3= this.game.add.sprite(26500,1450, 'bus',0);
                    this.game.physics.arcade.enable(bus3);
                    bus3.body.immovable = true;
                    bus3.body.collideWorldBounds = true;
                    bus3.body.velocity.x=150;

                    metro= this.game.add.sprite(13135,2202, 'metro',0);
                    this.game.physics.arcade.enable(metro);
                    metro.body.immovable = true;
                    metro.body.collideWorldBounds = true;
                    metro.body.velocity.x = 300;
                    metro.scale.x = 0.5;
                    metro.scale.y = 0.5;
                    metro.body.setSize(2257, 440, 0, 23);

                    rosa01 = this.game.add.physicsGroup();

                    rosa01.create(2751, 1450, 'rosa01');
                    rosa01.create(3517, 1427, 'rosa01');
                    rosa01.create(3861, 1363, 'rosa01');
                    rosa01.create(4156, 1256, 'rosa01');
                    rosa01.create(5507, 1377, 'rosa01');
                    rosa01.create(5681, 1201, 'rosa01');
                    rosa01.create(6226, 1368, 'rosa01');
                    rosa01.create(7504, 1377, 'rosa01');
                    rosa01.create(7927, 1469, 'rosa01');
                    rosa01.create(8080, 1351, 'rosa01');
                    rosa01.create(9195, 1480, 'rosa01');
                    rosa01.create(11364, 2280, 'rosa01');
                    rosa01.create(14192, 2209, 'rosa01');
                    rosa01.create(15415, 2209, 'rosa01');
                    rosa01.create(19482, 1880, 'rosa01');
                    rosa01.create(20372, 1323, 'rosa01');
                    rosa01.create(20372, 1590, 'rosa01');
                    rosa01.create(20511, 1461, 'rosa01');
                    rosa01.create(21190, 1481, 'rosa01');
                    rosa01.create(21561, 1160, 'rosa01');
                    rosa01.create(21645, 1486, 'rosa01');
                    rosa01.create(21958, 1332, 'rosa01');
                    rosa01.create(22179, 977, 'rosa01');
                    rosa01.create(22444, 1402, 'rosa01');
                    rosa01.create(24036, 1319, 'rosa01');
                    rosa01.create(25683, 1473, 'rosa01');
                    rosa01.create(27834, 1455, 'rosa01');
                    rosa01.create(28263, 1455, 'rosa01');
                    rosa01.create(29365, 1435, 'rosa01');
                    rosa01.create(29732, 1435, 'rosa01');
                    rosa01.create(30677, 1525, 'rosa01');
                    rosa01.create(30893, 1430, 'rosa01');
                    rosa01.create(31280, 1432, 'rosa01');
                    rosa01.create(32691, 1355, 'rosa01');
                    rosa01.setAll('body.immovable', true);

                    rosa02 = this.game.add.physicsGroup();
                    rosa02.create(1384, 1355, 'rosa02');
                    rosa02.create(1863, 1467, 'rosa02');
                    rosa02.create(2902, 1363, 'rosa02');
                    rosa02.create(4614, 1386, 'rosa02');
                    rosa02.create(5090, 1504, 'rosa02');
                    rosa02.create(5795, 1031, 'rosa02');
                    rosa02.create(7038, 1469, 'rosa02');
                    rosa02.create(8265, 1185, 'rosa02');
                    rosa02.create(12358, 2185, 'rosa02');
                    rosa02.create(12724, 2185, 'rosa02');
                    rosa02.create(16756, 2185, 'rosa02');
                    rosa02.create(17108, 2185, 'rosa02');
                    rosa02.create(20596, 1215, 'rosa02');
                    rosa02.create(22851, 1236, 'rosa02');
                    rosa02.create(23549, 1479, 'rosa02');
                    rosa02.create(24755, 1319, 'rosa02');
                    rosa02.create(26111, 1460, 'rosa02');
                    rosa02.create(27412, 1357, 'rosa02');
                    rosa02.create(28526, 1294, 'rosa02');
                    rosa02.create(28959, 1178, 'rosa02');
                    rosa02.create(30049, 1361, 'rosa02');
                    rosa02.create(32122, 1494, 'rosa02');
                    rosa02.setAll('body.immovable', true);

                    punk = this.game.add.sprite(2950,800, 'punk');
                    punk.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk);
                    punk.body.collideWorldBounds = true;
                    punk.body.gravity.y= 500;
                    punk.body.velocity.x=250;

                    punk2= this.game.add.sprite(5890,200, 'punk');
                    punk2.scale.x = 1.1;
                    punk2.scale.y = 1.1;
                    punk2.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk2.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk2.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk2);
                    punk2.body.collideWorldBounds = true;
                    punk2.body.gravity.y= 500;
                    punk2.body.velocity.x=250;

                    punk3= this.game.add.sprite(20700,0, 'punk');
                    punk3.scale.x = 1.1;
                    punk3.scale.y = 1.1;
                    punk3.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk3.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk3.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk3);
                    punk3.body.collideWorldBounds = true;
                    punk3.body.gravity.y= 500;
                    punk3.body.velocity.x=250;

                    punk4= this.game.add.sprite(23000,0, 'punk');
                    punk4.scale.x = 1.1;
                    punk4.scale.y = 1.1;
                    punk4.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk4.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk4.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk4);
                    punk4.body.collideWorldBounds = true;
                    punk4.body.gravity.y= 500;
                    punk4.body.velocity.x=250;

                    punk5= this.game.add.sprite(23700,0, 'punk');
                    punk5.scale.x = 1.1;
                    punk5.scale.y = 1.1;
                    punk5.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk5.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk5.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk5);
                    punk5.body.collideWorldBounds = true;
                    punk5.body.gravity.y= 500;
                    punk5.body.velocity.x=250;

                    punk6= this.game.add.sprite(4500,1500, 'punk');
                    punk6.scale.x = 1.1;
                    punk6.scale.y = 1.1;
                    punk6.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk6.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk6.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk6);
                    punk6.body.collideWorldBounds = true;
                    punk6.body.gravity.y= 500;
                    punk6.body.velocity.x=250;

                    punk7= this.game.add.sprite(8170,1500, 'punk');
                    punk7.scale.x = 1.1;
                    punk7.scale.y = 1.1;
                    punk7.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk7.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk7.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk7);
                    punk7.body.collideWorldBounds = true;
                    punk7.body.gravity.y= 500;
                    punk7.body.velocity.x=250;

                    punk8= this.game.add.sprite(11900,2000, 'punk');
                    punk8.scale.x = 1.1;
                    punk8.scale.y = 1.1;
                    punk8.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk8.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk8.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk8);
                    punk8.body.collideWorldBounds = true;
                    punk8.body.gravity.y= 500;
                    punk8.body.velocity.x=250;

                    punk9= this.game.add.sprite(28600,1000, 'punk');
                    punk9.scale.x = 1.1;
                    punk9.scale.y = 1.1;
                    punk9.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk9.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk9.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk9);
                    punk9.body.collideWorldBounds = true;
                    punk9.body.gravity.y= 500;
                    punk9.body.velocity.x=250;

                    punk10= this.game.add.sprite(30100,1000, 'punk');
                    punk10.scale.x = 1.1;
                    punk10.scale.y = 1.1;
                    punk10.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk10.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk10.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk10);
                    punk10.body.collideWorldBounds = true;
                    punk10.body.gravity.y= 500;
                    punk10.body.velocity.x=250;

                    punk11= this.game.add.sprite(31700,1000, 'punk');
                    punk11.scale.x = 1.1;
                    punk11.scale.y = 1.1;
                    punk11.animations.add('leftpunk', [3,4,5,6], 6, true);
                    punk11.animations.add('sleeppunk', [0,1,2], 2, true);
                    punk11.animations.add('rightpunk', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(punk11);
                    punk11.body.collideWorldBounds = true;
                    punk11.body.gravity.y= 500;
                    punk11.body.velocity.x=250;

                    rapper= this.game.add.sprite(1900,1357, 'rapper');
                    this.game.physics.arcade.enable(rapper);
                    rapper.body.immovable = true;
                    rapper.body.collideWorldBounds = true;
                    rapper.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper.animations.add('rightrapper', [7,8,9,10], 6, true);
                    rapper.body.velocity.x=250;

                    rapper2= this.game.add.sprite(5120,900, 'rapper');
                    this.game.physics.arcade.enable(rapper2);
                    rapper2.body.gravity.y = 500;
                    rapper2.body.collideWorldBounds = true;
                    rapper2.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper2.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper2.animations.add('rightrapper', [7,8,9,10], 6, true);
                    rapper2.body.velocity.x=250;

                    rapper3= this.game.add.sprite(8300,900, 'rapper');
                    this.game.physics.arcade.enable(rapper3);
                    rapper3.body.gravity.y = 500;
                    rapper3.body.collideWorldBounds = true;
                    rapper3.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper3.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper3.animations.add('rightrapper', [7,8,9,10], 6, true);
                    rapper3.body.velocity.x=250;

                    rapper4= this.game.add.sprite(10100,1935, 'rapper');
                    this.game.physics.arcade.enable(rapper4);
                    rapper4.body.gravity.y = 500;
                    rapper4.body.collideWorldBounds = true;
                    rapper4.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper4.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper4.animations.add('rightrapper', [7,8,9,10], 6, true);
                    rapper4.body.velocity.x=250;

                    rapper5= this.game.add.sprite(17700,2000, 'rapper');
                    rapper5.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper5.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper5.animations.add('rightrapper', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(rapper5);
                    rapper5.body.collideWorldBounds = true;
                    rapper5.body.gravity.y = 500;
                    rapper5.body.velocity.x=250;

                    rapper6= this.game.add.sprite(23330,800, 'rapper');
                    rapper6.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper6.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper6.animations.add('rightrapper', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(rapper6);
                    rapper6.body.collideWorldBounds = true;
                    rapper6.body.gravity.y = 500;
                    rapper6.body.velocity.x=250;

                    rapper7= this.game.add.sprite(24900,800, 'rapper');
                    rapper7.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper7.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper7.animations.add('rightrapper', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(rapper7);
                    rapper7.body.collideWorldBounds = true;
                    rapper7.body.gravity.y = 500;
                    rapper7.body.velocity.x=250;

                    rapper8= this.game.add.sprite(27500,800, 'rapper');
                    rapper8.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper8.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper8.animations.add('rightrapper', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(rapper8);
                    rapper8.body.collideWorldBounds = true;
                    rapper8.body.gravity.y = 500;
                    rapper8.body.velocity.x=250;

                    rapper9= this.game.add.sprite(28500,800, 'rapper');
                    rapper9.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper9.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper9.animations.add('rightrapper', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(rapper9);
                    rapper9.body.collideWorldBounds = true;
                    rapper9.body.gravity.y = 500;
                    rapper9.body.velocity.x=250;

                    rapper10= this.game.add.sprite(29500,800, 'rapper');
                    rapper10.animations.add('leftrapper', [3,4,5,6], 6, true);
                    rapper10.animations.add('sleeprapper', [0,1,2], 2, true);
                    rapper10.animations.add('rightrapper', [7,8,9,10], 6, true);
                    this.game.physics.arcade.enable(rapper10);
                    rapper10.body.collideWorldBounds = true;
                    rapper10.body.gravity.y = 500;
                    rapper10.body.velocity.x=250;

                    bionda0= this.game.add.sprite(1400,1400, 'bionda');
                    bionda0.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda0.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda0.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda0);
                    bionda0.body.collideWorldBounds = true;
                    bionda0.body.gravity.y = 500;
                    bionda0.body.velocity.x=250;

                    bionda= this.game.add.sprite(4650,1000, 'bionda');
                    bionda.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda);
                    bionda.body.collideWorldBounds = true;
                    bionda.body.gravity.y = 500;
                    bionda.body.velocity.x=250;

                    bionda2= this.game.add.sprite(7100,1000, 'bionda');
                    bionda2.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda2.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda2.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda2);
                    bionda2.body.collideWorldBounds = true;
                    bionda2.body.gravity.y = 500;
                    bionda2.body.velocity.x=250;

                    bionda3= this.game.add.sprite(9500,1000, 'bionda');
                    bionda3.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda3.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda3.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda3);
                    bionda3.body.collideWorldBounds = true;
                    bionda3.body.gravity.y = 500;
                    bionda3.body.velocity.x=250;

                    bionda4= this.game.add.sprite(6300,1500, 'bionda');
                    bionda4.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda4.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda4.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda4);
                    bionda4.body.collideWorldBounds = true;
                    bionda4.body.gravity.y = 500;
                    bionda4.body.velocity.x=250;

                    bionda5= this.game.add.sprite(19400,1000, 'bionda');
                    bionda5.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda5.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda5.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda5);
                    bionda5.body.collideWorldBounds = true;
                    bionda5.body.gravity.y = 500;
                    bionda5.body.velocity.x=250;

                    bionda6= this.game.add.sprite(21400,1000, 'bionda');
                    bionda6.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda6.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda6.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda6);
                    bionda6.body.collideWorldBounds = true;
                    bionda6.body.gravity.y = 500;
                    bionda6.body.velocity.x=250;

                    bionda7= this.game.add.sprite(22900,1000, 'bionda');
                    bionda7.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda7.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda7.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda7);
                    bionda7.body.collideWorldBounds = true;
                    bionda7.body.gravity.y = 500;
                    bionda7.body.velocity.x=250;

                    bionda8= this.game.add.sprite(26200,1000, 'bionda');
                    bionda8.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda8.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda8.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda8);
                    bionda8.body.collideWorldBounds = true;
                    bionda8.body.gravity.y = 500;
                    bionda8.body.velocity.x=250;

                    bionda9= this.game.add.sprite(29000,1000, 'bionda');
                    bionda9.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda9.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda9.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda9);
                    bionda9.body.collideWorldBounds = true;
                    bionda9.body.gravity.y = 500;
                    bionda9.body.velocity.x=250;

                    bionda10= this.game.add.sprite(31200,1000, 'bionda');
                    bionda10.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda10.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda10.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda10);
                    bionda10.body.collideWorldBounds = true;
                    bionda10.body.gravity.y = 500;
                    bionda10.body.velocity.x=250;

                    bionda11= this.game.add.sprite(30200,1000, 'bionda');
                    bionda11.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda11.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda11.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda11);
                    bionda11.body.collideWorldBounds = true;
                    bionda11.body.gravity.y = 500;
                    bionda11.body.velocity.x=250;

                    bionda12= this.game.add.sprite(25000,1200, 'bionda');
                    bionda12.animations.add('leftbionda', [3,4,5,6], 6, true);
                    bionda12.animations.add('rightbionda', [7,8,9,10], 6, true);
                    bionda12.animations.add('sleepbionda', [0,1,2], 2, true);
                    this.game.physics.arcade.enable(bionda12);
                    bionda12.body.collideWorldBounds = true;
                    bionda12.body.gravity.y = 500;
                    bionda12.body.velocity.x=250;

                    sofia = this.game.add.sprite (80, 1300, 'sofia');
                    this.game.physics.arcade.enable(sofia);
                    sofia.body.collideWorldBounds = true;
                    sofia.body.gravity.y = 500;
                    sofia.scale.x = 0.9;
                    sofia.scale.y = 0.9;
                    sofia.body.setSize(80, 111, 20, 0);

                    this.game.camera.follow(sofia);

                    sofia.animations.add('left', [3, 4, 5, 6, 7, 8], 10, true);
                    sofia.animations.add('turn', [9], 10, true);
                    sofia.animations.add('right', [10, 11, 12, 13, 14, 15], 10, true);
                    sofia.animations.add('stordita', [19, 20, 21], 3, true);

                    weapon = this.game.add.weapon(100, 'sogno1');
                    weapon.trackSprite(sofia, 80, 60);
                    weapon.bulletSpeedVariance=100;
                    weapon.bulletSpeed = 400
                    weapon.bulletAngleVariance=20;
                    weapon.bulletGravity.y=0;
                    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                    weapon.fireRate = 1000;
                    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
                    weapon.bulletLifespan = 3000;

                    weaponcannone = this.game.add.weapon(100, 'sogno2');                
                    weaponcannone.trackSprite(cannone, 200, 35);
                    weaponcannone.fireAngle = 310;
                    weaponcannone.bulletSpeed = 500
                    weaponcannone.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

                    scale = this.game.add.physicsGroup();
                    scale.create(9571, 1592, 'scala1');
                    scale.create(10568, 1956, 'scala2');
                    scale.create(18496, 1956, 'scala3');
                    scale.create(19581, 1593, 'scala4');

                    emitter = this.game.add.emitter(0, 0);
                    emitter.fixedToCamera = true;
                    emitter.width = 2048;
                    emitter.makeParticles('sogno1');
                    emitter.minParticleSpeed.set(0, 300);
                    emitter.maxParticleSpeed.set(0, 400);

                    emitter.start(false, 1500, 0);
                    emitter.on = false;

                    ggg = this.game.add.sprite(0, 0, 'ggg', 0);
                    ggg.fixedToCamera = true;
                    ggg.alpha = 0;

                    ggg.animations.add('pioggia', [0, 1, 2, 3, 4], 6, false);
                    orologio = this.game.add.sprite(800, 30, 'orologio', 0);
                    orologio.fixedToCamera = true;
                    orologio.alpha = 0;

                    orologio.scale.x = 0.2;
                    orologio.scale.y = 0.2;

                    load_cetrionzoli = this.game.add.sprite(200, 30, 'load_cetrionzoli', 0);
                    load_cetrionzoli.fixedToCamera = true;
                    load_cetrionzoli.scale.x = 0.2;
                    load_cetrionzoli.scale.y = 0.2;

                    load_pozione = this.game.add.sprite(10, 30, 'load_pozione', 0);
                    load_pozione.fixedToCamera = true;
                    load_pozione.scale.x = 0.2;
                    load_pozione.scale.y = 0.2;

                    pulsante_invio = this.game.add.sprite(380, 45, 'invio', 0);
                    pulsante_invio.fixedToCamera = true;

                    pulsante_invio.animations.add('ggghelp', [0,1]);

                    this.game.time.events.loop(1000, function() {if (posizioneinizio) {tempo -= 1000}});

                    cursors = this.game.input.keyboard.createCursorKeys();
                    jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
                    fireButton = this.game.input.keyboard.addKey (Phaser.Keyboard.SPACEBAR);
                    gggButton = this.game.input.keyboard.addKey (Phaser.Keyboard.ENTER);

                    

    },


    update: function() {

        diner.animations.play('neondiner');
        diner2.animations.play('neondiner');
        live.animations.play('neonlive');
        night.animations.play('neonnight');
        night2.animations.play('neonnight');
      
                    if (tempo >= 75000 && tempo <= 90000) {
                        orologio.frame = 0;
                    }

                    if (tempo >= 6000 && tempo < 75000) {
                        orologio.frame = 1;
                    }

                    if (tempo >= 45000 && tempo < 60000) {
                        orologio.frame = 2;
                    }

                    if (tempo >= 30000 && tempo < 45000) {
                        orologio.frame = 3;
                    }

                    if (tempo >= 15000 && tempo < 30000) {
                        orologio.frame = 4;
                    }

                    if (tempo > 0 && tempo < 15000) {
                        orologio.frame = 5;
                        this.game.camera.shake(0.003, 3000);;
                    }

                    if (tempo < 0) {
                        this.game.state.start('gameover');
                    }

                    this.game.physics.arcade.collide(sofia, pozione_salto, function(m,n) {
                        n.kill();
                        pos_salto = true;
                    });

                    if (pos_salto) {
                        this.game.time.events.add(0, function() {
                        salto_sofia = -600;
                        });
                        this.game.time.events.add(5000, function() {
                        salto_sofia = -450;
                        pos_salto = false;
                        });
                    };


                    this.game.physics.arcade.collide(sofia, cetrionzolo, function(i,l){
                        l.kill();

                        score += 1;

                        load_cetrionzoli.animations.play('load_cetrionzoli');
                        load_cetrionzoli.frame= score;

                        if (score >= 5){
                        load_cetrionzoli.frame = 5;
                        pulsante_invio.animations.play('ggghelp', 3, true)
                        }

                    });

                    this.game.physics.arcade.collide(sofia, pozione_viola, function(q,r) {
                        r.kill();

                        scoreviola += 1;
                        punteggio = punteggio + 100; 

                        load_pozione.animations.play('load_pozione');
                        load_pozione.frame= scoreviola;

                        if (scoreviola >= 5){
                        load_pozione.frame = 5;
                      }
                    });

                    this.game.physics.arcade.collide(sofia, terreno);
                    this.game.physics.arcade.collide(sofia, scalino);
                    this.game.physics.arcade.collide(sofia, rosa01);
                    this.game.physics.arcade.collide(sofia, rosa02);
                    this.game.physics.arcade.collide(sofia, bidone);
                    this.game.physics.arcade.collide(sofia, bus);
                    this.game.physics.arcade.collide(sofia, bus2);
                    this.game.physics.arcade.collide(sofia, bus3);
                    this.game.physics.arcade.collide(sofia, metro);
                    this.game.physics.arcade.overlap(sofia, rapper, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper2, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper3, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper4, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper5, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper6, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper7, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper8, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper9, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, rapper10, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda0, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda2, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda3, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda4, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda5, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda6, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda7, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda8, function() {
                        penitenza = true;
                    });

                    this.game.physics.arcade.overlap(sofia, bionda9, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda10, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda11, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, bionda12, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk2, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk3, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk4, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk5, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk6, function() {
                        penitenza = true;
                    });

                    this.game.physics.arcade.overlap(sofia, punk7, function() {
                        penitenza = true;
                    });

                    this.game.physics.arcade.overlap(sofia, punk8, function() {
                        penitenza = true;
                    });

                    this.game.physics.arcade.overlap(sofia, punk9, function() {
                        penitenza = true;
                    });

                    this.game.physics.arcade.overlap(sofia, punk10, function() {
                        penitenza = true;
                    });
                    this.game.physics.arcade.overlap(sofia, punk11, function() {
                        penitenza = true;
                    });

                    if (penitenza) {
                        this.game.time.events.add(0, function() {
                            stordito = false; 
                        })
                        this.game.time.events.add(3000, function() {
                            stordito = true; 
                            penitenza = false; 
                        })
                    }

                    if (stordito === false) {
                        sofia.animations.play('stordita');
                    }

                    if (morte) {
                        this.game.state.start('gameover');
                        morte = false;
                    };

                    this.game.physics.arcade.collide(weapon.bullets, rapper, function(){
                        rapper.immovable = true;
                        rapper.animations.play('sleeprapper');
                        rapper.body.enable = false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper, function() {
                        rapper.immovable = true;
                        rapper.animations.play('sleeprapper');
                        rapper.body.enable = false;
                    });

                    if(rapper.x<1870){
                        rapper.body.velocity.x=100;
                        rapper.animations.play('rightrapper');
                    }

                    else if(rapper.x>2100){
                        rapper.body.velocity.x=-100;
                        rapper.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper2, function(){
                        rapper2.immovable=true;
                        rapper2.animations.play('sleeprapper');
                        rapper2.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper2, function() {
                        rapper2.immovable = true;
                        rapper2.animations.play('sleeprapper');
                        rapper2.body.enable = false;
                    });

                    if(rapper2.x<5100){
                        rapper2.body.velocity.x=100;
                        rapper2.animations.play('rightrapper');
                    }

                    else if(rapper2.x>5300){
                        rapper2.body.velocity.x=-100;
                        rapper2.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper3, function(){
                        rapper3.immovable=true;
                        rapper3.animations.play('sleeprapper');
                        rapper3.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper3, function() {
                        rapper3.immovable = true;
                        rapper3.animations.play('sleeprapper');
                        rapper3.body.enable = false;
                    });

                    if(rapper3.x<8270){
                        rapper3.body.velocity.x=100;
                        rapper3.animations.play('rightrapper');
                    }

                    else if(rapper3.x>8470){
                        rapper3.body.velocity.x=-100;
                        rapper3.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper4, function(){
                        rapper4.immovable=true;
                        rapper4.animations.play('sleeprapper');
                        rapper4.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper4, function() {
                        rapper4.immovable = true;
                        rapper4.animations.play('sleeprapper');
                        rapper4.body.enable = false;
                    });

                    if(rapper4.x<10200){
                        rapper4.body.velocity.x=100;
                        rapper4.animations.play('rightrapper');
                    }

                    else if(rapper4.x>10500){
                        rapper4.body.velocity.x=-100;
                        rapper4.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper5, function(){
                        rapper5.immovable=true;
                        rapper5.animations.play('sleeprapper');
                        rapper5.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper5, function() {
                        rapper5.immovable = true;
                        rapper5.animations.play('sleeprapper');
                        rapper5.body.enable = false;
                    });

                    if(rapper5.x<17500){
                        rapper5.body.velocity.x=100;
                        rapper5.animations.play('rightrapper');
                    }

                    else if(rapper5.x>18300){
                        rapper5.body.velocity.x=-100;
                        rapper5.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper6, function(){
                        rapper6.immovable=true;
                        rapper6.animations.play('sleeprapper');
                        rapper6.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper6, function() {
                        rapper6.immovable = true;
                        rapper6.animations.play('sleeprapper');
                        rapper6.body.enable = false;
                    });

                    if(rapper6.x<23090){
                        rapper6.body.velocity.x=100;
                        rapper6.animations.play('rightrapper');
                    }

                    else if(rapper6.x>23330){
                        rapper6.body.velocity.x=-100;
                        rapper6.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper7, function(){
                        rapper7.immovable=true;
                        rapper7.animations.play('sleeprapper');
                        rapper7.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper7, function() {
                        rapper7.immovable = true;
                        rapper7.animations.play('sleeprapper');
                        rapper7.body.enable = false;
                    });

                    if(rapper7.x<24800){
                        rapper7.body.velocity.x=100;
                        rapper7.animations.play('rightrapper');
                    }

                    else if(rapper7.x>25000){
                        rapper7.body.velocity.x=-100;
                        rapper7.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper8, function(){
                        rapper8.immovable=true;
                        rapper8.animations.play('sleeprapper');
                        rapper8.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper8, function() {
                        rapper8.immovable = true;
                        rapper8.animations.play('sleeprapper');
                        rapper8.body.enable = false;
                    });

                    if(rapper8.x<27450){
                        rapper8.body.velocity.x=100;
                        rapper8.animations.play('rightrapper');
                    }

                    else if(rapper8.x>27650){
                        rapper8.body.velocity.x=-100;
                        rapper8.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper9, function(){
                        rapper9.immovable=true;
                        rapper9.animations.play('sleeprapper');
                        rapper9.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper9, function() {
                        rapper9.immovable = true;
                        rapper9.animations.play('sleeprapper');
                        rapper9.body.enable = false;
                    });

                    if(rapper9.x<28000){
                        rapper9.body.velocity.x=100;
                        rapper9.animations.play('rightrapper');
                    }

                    else if(rapper9.x>28500){
                        rapper9.body.velocity.x=-100;
                        rapper9.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, rapper10, function(){
                        rapper10.immovable=true;
                        rapper10.animations.play('sleeprapper');
                        rapper10.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, rapper10, function() {
                        rapper10.immovable = true;
                        rapper10.animations.play('sleeprapper');
                        rapper10.body.enable = false;
                    });

                    if(rapper10.x<29000){
                        rapper10.body.velocity.x=100;
                        rapper10.animations.play('rightrapper');
                    }

                    else if(rapper10.x>29600){
                        rapper10.body.velocity.x=-100;
                        rapper10.animations.play('leftrapper');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk, function(){
                        punk.immovable=true;
                        punk.animations.play('sleeppunk');
                        punk.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk, function() {
                        punk.immovable = true;
                        punk.animations.play('sleeppunk');
                        punk.body.enable = false;
                    });

                    if(punk.x<2910){
                        punk.body.velocity.x=100;
                        punk.animations.play('rightpunk');
                    }

                    else if(punk.x>3110){
                        punk.body.velocity.x=-100;
                        punk.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk2, function(){
                        punk2.immovable=true;
                        punk2.animations.play('sleeppunk');
                        punk2.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk2, function() {
                        punk2.immovable = true;
                        punk2.animations.play('sleeppunk');
                        punk2.body.enable = false;
                    });

                    if(punk2.x<5800){
                        punk2.body.velocity.x=100;
                        punk2.animations.play('rightpunk');
                    }

                    else if(punk2.x>6000){
                        punk2.body.velocity.x=-100;
                        punk2.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk3, function(){
                        punk3.immovable=true;
                        punk3.animations.play('sleeppunk');
                        punk3.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk3, function() {
                        punk3.immovable = true;
                        punk3.animations.play('sleeppunk');
                        punk3.body.enable = false;
                    });

                    if(punk3.x<20600){
                        punk3.body.velocity.x=100;
                        punk3.animations.play('rightpunk');
                    }

                    else if(punk3.x>20800){
                        punk3.body.velocity.x=-100;
                        punk3.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk4, function(){
                        punk4.immovable=true;
                        punk4.animations.play('sleeppunk');
                        punk4.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk4, function() {
                        punk4.immovable = true;
                        punk4.animations.play('sleeppunk');
                        punk4.body.enable = false;
                    });

                    if(punk4.x<22860){
                        punk4.body.velocity.x=100;
                        punk4.animations.play('rightpunk');
                    }

                    else if(punk4.x>23110){
                        punk4.body.velocity.x=-100;
                        punk4.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk5, function(){
                        punk5.immovable=true;
                        punk5.animations.play('sleeppunk');
                        punk5.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk5, function() {
                        punk5.immovable = true;
                        punk5.animations.play('sleeppunk');
                        punk5.body.enable = false;
                    });

                    if(punk5.x<23600){
                        punk5.body.velocity.x=100;
                        punk5.animations.play('rightpunk');
                    }

                    else if(punk5.x>23800){
                        punk5.body.velocity.x=-100;
                        punk5.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk6, function(){
                        punk6.immovable=true;
                        punk6.animations.play('sleeppunk');
                        punk6.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk6, function() {
                        punk6.immovable = true;
                        punk6.animations.play('sleeppunk');
                        punk6.body.enable = false;
                    });

                    if(punk6.x<4400){
                        punk6.body.velocity.x=100;
                        punk6.animations.play('rightpunk');
                    }

                    else if(punk6.x>5000){
                        punk6.body.velocity.x=-100;
                        punk6.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk7, function(){
                        punk7.immovable=true;
                        punk7.animations.play('sleeppunk');
                        punk7.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk7, function() {
                        punk7.immovable = true;
                        punk7.animations.play('sleeppunk');
                        punk7.body.enable = false;
                    });

                    if(punk7.x<7770){
                        punk7.body.velocity.x=100;
                        punk7.animations.play('rightpunk');
                    }

                    else if(punk7.x>8270){
                        punk7.body.velocity.x=-100;
                        punk7.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk8, function(){
                        punk8.immovable=true;
                        punk8.animations.play('sleeppunk');
                        punk8.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk8, function() {
                        punk8.immovable = true;
                        punk8.animations.play('sleeppunk');
                        punk8.body.enable = false;
                    });

                    if(punk8.x<11500){
                        punk8.body.velocity.x=100;
                        punk8.animations.play('rightpunk');
                    }

                    else if(punk8.x>12000){
                        punk8.body.velocity.x=-100;
                        punk8.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk9, function(){
                        punk9.immovable=true;
                        punk9.animations.play('sleeppunk');
                        punk9.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk9, function() {
                        punk9.immovable = true;
                        punk9.animations.play('sleeppunk');
                        punk9.body.enable = false;
                    });

                    if(punk9.x<28540){
                        punk9.body.velocity.x=100;
                        punk9.animations.play('rightpunk');
                    }

                    else if(punk9.x>28740){
                        punk9.body.velocity.x=-100;
                        punk9.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk10, function(){
                        punk10.immovable=true;
                        punk10.animations.play('sleeppunk');
                        punk10.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk10, function() {
                        punk10.immovable = true;
                        punk10.animations.play('sleeppunk');
                        punk10.body.enable = false;
                    });

                    if(punk10.x<30060){
                        punk10.body.velocity.x=100;
                        punk10.animations.play('rightpunk');
                    }

                    else if(punk10.x>30260){
                        punk10.body.velocity.x=-100;
                        punk10.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, punk11, function(){
                        punk11.immovable=true;
                        punk11.animations.play('sleeppunk');
                        punk11.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, punk11, function() {
                        punk11.immovable = true;
                        punk11.animations.play('sleeppunk');
                        punk11.body.enable = false;
                    });

                    if(punk11.x<31500){
                        punk11.body.velocity.x=100;
                        punk11.animations.play('rightpunk');
                    }

                    else if(punk11.x>32250){
                        punk11.body.velocity.x=-100;
                        punk11.animations.play('leftpunk');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda0, function(){
                        bionda0.immovable=true;
                        bionda0.animations.play('sleepbionda');
                        bionda0.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda0, function() {
                        bionda0.immovable = true;
                        bionda0.animations.play('sleepbionda');
                        bionda0.body.enable = false;
                    });

                    if(bionda0.x<1100){
                        bionda0.body.velocity.x=100;
                        bionda0.animations.play('rightbionda');
                    }

                    else if(bionda0.x>1500){
                        bionda0.body.velocity.x=-100;
                        bionda0.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda, function(){
                        bionda.immovable=true;
                        bionda.animations.play('sleepbionda');
                        bionda.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda, function() {
                        bionda.immovable = true;
                        bionda.animations.play('sleepbionda');
                        bionda.body.enable = false;
                    });

                    if(bionda.x<4620){
                        bionda.body.velocity.x=100;
                        bionda.animations.play('rightbionda');
                    }

                    else if(bionda.x>4820){
                        bionda.body.velocity.x=-100;
                        bionda.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda2, function(){
                        bionda2.immovable=true;
                        bionda2.animations.play('sleepbionda');
                        bionda2.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda2, function() {
                        bionda2.immovable = true;
                        bionda2.animations.play('sleepbionda');
                        bionda2.body.enable = false;
                    });

                    if(bionda2.x<7040){
                        bionda2.body.velocity.x=100;
                        bionda2.animations.play('rightbionda');
                    }

                    else if(bionda2.x>7290){
                        bionda2.body.velocity.x=-100;
                        bionda2.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda3, function(){
                        bionda3.immovable=true;
                        bionda3.animations.play('sleepbionda');
                        bionda3.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda3, function() {
                        bionda3.immovable = true;
                        bionda3.animations.play('sleepbionda');
                        bionda3.body.enable = false;
                    });

                    if(bionda3.x<9200){
                        bionda3.body.velocity.x=100;
                        bionda3.animations.play('rightbionda');
                    }

                    else if(bionda3.x>9500){
                        bionda3.body.velocity.x=-100;
                        bionda3.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda4, function(){
                        bionda4.immovable=true;
                        bionda4.animations.play('sleepbionda');
                        bionda4.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda4, function() {
                        bionda4.immovable = true;
                        bionda4.animations.play('sleepbionda');
                        bionda4.body.enable = false;
                    });

                    if(bionda4.x<6100){
                        bionda4.body.velocity.x=100;
                        bionda4.animations.play('rightbionda');
                    }

                    else if(bionda4.x>6400){
                        bionda4.body.velocity.x=-100;
                        bionda4.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda5, function(){
                        bionda5.immovable=true;
                        bionda5.animations.play('sleepbionda');
                        bionda5.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda5, function() {
                        bionda5.immovable = true;
                        bionda5.animations.play('sleepbionda');
                        bionda5.body.enable = false;
                    });

                    if(bionda5.x<19200){
                        bionda5.body.velocity.x=100;
                        bionda5.animations.play('rightbionda');
                    }

                    else if(bionda5.x>19500){
                        bionda5.body.velocity.x=-100;
                        bionda5.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda6, function(){
                        bionda6.immovable=true;
                        bionda6.animations.play('sleepbionda');
                        bionda6.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda6, function() {
                        bionda6.immovable = true;
                        bionda6.animations.play('sleepbionda');
                        bionda6.body.enable = false;
                    });

                    if(bionda6.x<20700){
                        bionda6.body.velocity.x=100;
                        bionda6.animations.play('rightbionda');
                    }

                    else if(bionda6.x>21500){
                        bionda6.body.velocity.x=-100;
                        bionda6.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda7, function(){
                        bionda7.immovable=true;
                        bionda7.animations.play('sleepbionda');
                        bionda7.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda7, function() {
                        bionda7.immovable = true;
                        bionda7.animations.play('sleepbionda');
                        bionda7.body.enable = false;
                    });

                    if(bionda7.x<22650){
                        bionda7.body.velocity.x=100;
                        bionda7.animations.play('rightbionda');
                    }

                    else if(bionda7.x>22900){
                        bionda7.body.velocity.x=-100;
                        bionda7.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda8, function(){
                        bionda8.immovable=true;
                        bionda8.animations.play('sleepbionda');
                        bionda8.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda8, function() {
                        bionda8.immovable = true;
                        bionda8.animations.play('sleepbionda');
                        bionda8.body.enable = false;
                    });

                    if(bionda8.x<26150){
                        bionda8.body.velocity.x=100;
                        bionda8.animations.play('rightbionda');
                    }

                    else if(bionda8.x>26300){
                        bionda8.body.velocity.x=-100;
                        bionda8.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda9, function(){
                        bionda9.immovable=true;
                        bionda9.animations.play('sleepbionda');
                        bionda9.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda9, function() {
                        bionda9.immovable = true;
                        bionda9.animations.play('sleepbionda');
                        bionda9.body.enable = false;
                    });

                    if(bionda9.x<28970){
                        bionda9.body.velocity.x=100;
                        bionda9.animations.play('rightbionda');
                    }

                    else if(bionda9.x>29170){
                        bionda9.body.velocity.x=-100;
                        bionda9.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda10, function(){
                        bionda10.immovable=true;
                        bionda10.animations.play('sleepbionda');
                        bionda10.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda10, function() {
                        bionda10.immovable = true;
                        bionda10.animations.play('sleepbionda');
                        bionda10.body.enable = false;
                    });

                    if(bionda10.x<30900){
                        bionda10.body.velocity.x=100;
                        bionda10.animations.play('rightbionda');
                    }

                    else if(bionda10.x>31300){
                        bionda10.body.velocity.x=-100;
                        bionda10.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda11, function(){
                        bionda11.immovable=true;
                        bionda11.animations.play('sleepbionda');
                        bionda11.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda11, function() {
                        bionda11.immovable = true;
                        bionda11.animations.play('sleepbionda');
                        bionda11.body.enable = false;
                    });

                    if(bionda11.x<30100){
                        bionda11.body.velocity.x=100;
                        bionda11.animations.play('rightbionda');
                    }

                    else if(bionda11.x>30685){
                        bionda11.body.velocity.x=-100;
                        bionda11.animations.play('leftbionda');
                    }

                    this.game.physics.arcade.collide(weapon.bullets, bionda12, function(){
                        bionda12.immovable=true;
                        bionda12.animations.play('sleepbionda');
                        bionda12.body.enable=false;
                    });

                    this.game.physics.arcade.collide(emitter, bionda12, function() {
                        bionda12.immovable = true;
                        bionda12.animations.play('sleepbionda');
                        bionda12.body.enable = false;
                    });

                    if(bionda12.x<24500){
                        bionda12.body.velocity.x=100;
                        bionda12.animations.play('rightbionda');
                    }

                    else if(bionda12.x>25500){
                        bionda12.body.velocity.x=-100;
                        bionda12.animations.play('leftbionda');
                    }


                    if(bus.x<3000){
                        bus.body.velocity.x=150;
                    }
                    else if(bus.x>3852){
                        bus.body.velocity.x=-150;

                    }

                    if(bus2.x<8400){
                        bus2.body.velocity.x=150;
                    }
                    else if(bus2.x>8800){
                        bus2.body.velocity.x=-150;

                    }

                    if(bus3.x<26400){
                        bus3.body.velocity.x=150;
                    }
                    else if(bus3.x>26850){
                        bus3.body.velocity.x=-150;

                    }

                    if(metro.x<13135){
                        metro.body.velocity.x=300;
                    }

                    else if(metro.x>15479){
                        metro.body.velocity.x=-300;

                    }

                    this.game.physics.arcade.collide(bidone, terreno);
                    this.game.physics.arcade.collide(sofia, bidone);
                    this.game.physics.arcade.collide(bus, terreno);
                    this.game.physics.arcade.collide(bus2, terreno);

                    this. game.physics.arcade.collide(clessidra, terreno);
                    this. game.physics.arcade.collide(clessidra, bidone);
                    this. game.physics.arcade.collide(clessidra, rosa01);
                    this. game.physics.arcade.collide(clessidra, rosa02);
                    this. game.physics.arcade.collide(sofia, clessidra, function(w,z){
                          z.kill();
                          tempo = tempo + 10000;
                    });

                    this. game.physics.arcade.collide(cetrionzolo, terreno);
                    this. game.physics.arcade.collide(cetrionzolo, bidone);
                    this. game.physics.arcade.collide(cetrionzolo, rosa01);
                    this. game.physics.arcade.collide(cetrionzolo, rosa02);

                    this.game.physics.arcade.collide(pozione_salto, terreno);
                    this.game.physics.arcade.collide(pozione_salto, bidone);
                    this.game.physics.arcade.collide(pozione_salto, rosa01);
                    this.game.physics.arcade.collide(pozione_salto, rosa02);

                    this.game.physics.arcade.collide(pozione_viola, terreno);
                    this.game.physics.arcade.collide(pozione_viola, bidone);
                    this.game.physics.arcade.collide(pozione_viola, rosa01);
                    this.game.physics.arcade.collide(pozione_viola, rosa02);

                    this.game.physics.arcade.collide(punk, terreno);
                    this.game.physics.arcade.collide(punk, bidone);
                    this.game.physics.arcade.collide(punk, rosa01);
                    this.game.physics.arcade.collide(punk, rosa02);

                    this.game.physics.arcade.collide(punk2, terreno);
                    this.game.physics.arcade.collide(punk2, bidone);
                    this.game.physics.arcade.collide(punk2, rosa01);
                    this.game.physics.arcade.collide(punk2, rosa02);

                    this.game.physics.arcade.collide(punk3, terreno);
                    this.game.physics.arcade.collide(punk3, bidone);
                    this.game.physics.arcade.collide(punk3, rosa01);
                    this.game.physics.arcade.collide(punk3, rosa02);

                    this.game.physics.arcade.collide(punk4, terreno);
                    this.game.physics.arcade.collide(punk4, bidone);
                    this.game.physics.arcade.collide(punk4, rosa01);
                    this.game.physics.arcade.collide(punk4, rosa02);

                    this.game.physics.arcade.collide(punk5, terreno);
                    this.game.physics.arcade.collide(punk5, bidone);
                    this.game.physics.arcade.collide(punk5, rosa01);
                    this.game.physics.arcade.collide(punk5, rosa02);

                    this.game.physics.arcade.collide(punk6, terreno);
                    this.game.physics.arcade.collide(punk6, bidone);
                    this.game.physics.arcade.collide(punk6, rosa01);
                    this.game.physics.arcade.collide(punk6, rosa02);

                    this.game.physics.arcade.collide(punk7, terreno);
                    this.game.physics.arcade.collide(punk7, bidone);
                    this.game.physics.arcade.collide(punk7, rosa01);
                    this.game.physics.arcade.collide(punk7, rosa02);

                    this.game.physics.arcade.collide(punk8, terreno);
                    this.game.physics.arcade.collide(punk8, bidone);
                    this.game.physics.arcade.collide(punk8, rosa01);
                    this.game.physics.arcade.collide(punk8, rosa02);

                    this.game.physics.arcade.collide(punk9, terreno);
                    this.game.physics.arcade.collide(punk9, bidone);
                    this.game.physics.arcade.collide(punk9, rosa01);
                    this.game.physics.arcade.collide(punk9, rosa02);

                    this.game.physics.arcade.collide(punk10, terreno);
                    this.game.physics.arcade.collide(punk10, bidone);
                    this.game.physics.arcade.collide(punk10, rosa01);
                    this.game.physics.arcade.collide(punk10, rosa02);

                    this.game.physics.arcade.collide(punk11, terreno);
                    this.game.physics.arcade.collide(punk11, bidone);
                    this.game.physics.arcade.collide(punk11, rosa01);
                    this.game.physics.arcade.collide(punk11, rosa02);

                    this.game.physics.arcade.collide(bionda0, terreno);
                    this.game.physics.arcade.collide(bionda0, bidone);
                    this.game.physics.arcade.collide(bionda0, rosa01);
                    this.game.physics.arcade.collide(bionda0, rosa02);

                    this.game.physics.arcade.collide(bionda, terreno);
                    this.game.physics.arcade.collide(bionda, bidone);
                    this.game.physics.arcade.collide(bionda, rosa01);
                    this.game.physics.arcade.collide(bionda, rosa02);

                    this.game.physics.arcade.collide(bionda2, terreno);
                    this.game.physics.arcade.collide(bionda2, bidone);
                    this.game.physics.arcade.collide(bionda2, rosa01);
                    this.game.physics.arcade.collide(bionda2, rosa02);

                    this.game.physics.arcade.collide(bionda3, terreno);
                    this.game.physics.arcade.collide(bionda3, bidone);
                    this.game.physics.arcade.collide(bionda3, rosa01);
                    this.game.physics.arcade.collide(bionda3, rosa02);

                    this.game.physics.arcade.collide(bionda4, terreno);
                    this.game.physics.arcade.collide(bionda4, bidone);
                    this.game.physics.arcade.collide(bionda4, rosa01);
                    this.game.physics.arcade.collide(bionda4, rosa02);

                    this.game.physics.arcade.collide(bionda5, terreno);
                    this.game.physics.arcade.collide(bionda5, bidone);
                    this.game.physics.arcade.collide(bionda5, rosa01);
                    this.game.physics.arcade.collide(bionda5, rosa02);

                    this.game.physics.arcade.collide(bionda6, terreno);
                    this.game.physics.arcade.collide(bionda6, bidone);
                    this.game.physics.arcade.collide(bionda6, rosa01);
                    this.game.physics.arcade.collide(bionda6, rosa02);

                    this.game.physics.arcade.collide(bionda7, terreno);
                    this.game.physics.arcade.collide(bionda7, bidone);
                    this.game.physics.arcade.collide(bionda7, rosa01);
                    this.game.physics.arcade.collide(bionda7, rosa02);

                    this.game.physics.arcade.collide(bionda8, terreno);
                    this.game.physics.arcade.collide(bionda8, bidone);
                    this.game.physics.arcade.collide(bionda8, rosa01);
                    this.game.physics.arcade.collide(bionda8, rosa02);

                    this.game.physics.arcade.collide(bionda9, terreno);
                    this.game.physics.arcade.collide(bionda9, bidone);
                    this.game.physics.arcade.collide(bionda9, rosa01);
                    this.game.physics.arcade.collide(bionda9, rosa02);

                    this.game.physics.arcade.collide(bionda10, terreno);
                    this.game.physics.arcade.collide(bionda10, bidone);
                    this.game.physics.arcade.collide(bionda10, rosa01);
                    this.game.physics.arcade.collide(bionda10, rosa02);

                    this.game.physics.arcade.collide(bionda11, terreno);
                    this.game.physics.arcade.collide(bionda11, bidone);
                    this.game.physics.arcade.collide(bionda11, rosa01);
                    this.game.physics.arcade.collide(bionda11, rosa02);

                    this.game.physics.arcade.collide(bionda12, terreno);
                    this.game.physics.arcade.collide(bionda12, bidone);
                    this.game.physics.arcade.collide(bionda12, rosa01);
                    this.game.physics.arcade.collide(bionda12, rosa02);

                    this.game.physics.arcade.collide(rapper, terreno);
                    this.game.physics.arcade.collide(rapper, bidone);
                    this.game.physics.arcade.collide(rapper, rosa01);
                    this.game.physics.arcade.collide(rapper, rosa02);

                    this.game.physics.arcade.collide(rapper2, terreno);
                    this.game.physics.arcade.collide(rapper2, bidone);
                    this.game.physics.arcade.collide(rapper2, rosa01);
                    this.game.physics.arcade.collide(rapper2, rosa02);

                    this.game.physics.arcade.collide(rapper3, terreno);
                    this.game.physics.arcade.collide(rapper3, bidone);
                    this.game.physics.arcade.collide(rapper3, rosa01);
                    this.game.physics.arcade.collide(rapper3, rosa02);

                    this.game.physics.arcade.collide(rapper4, terreno);
                    this.game.physics.arcade.collide(rapper4, bidone);
                    this.game.physics.arcade.collide(rapper4, rosa01);
                    this.game.physics.arcade.collide(rapper4, rosa02);

                    this.game.physics.arcade.collide(rapper5, terreno);
                    this.game.physics.arcade.collide(rapper5, bidone);
                    this.game.physics.arcade.collide(rapper5, rosa01);
                    this.game.physics.arcade.collide(rapper5, rosa02);

                    this.game.physics.arcade.collide(rapper6, terreno);
                    this.game.physics.arcade.collide(rapper6, bidone);
                    this.game.physics.arcade.collide(rapper6, rosa01);
                    this.game.physics.arcade.collide(rapper6, rosa02);

                    this.game.physics.arcade.collide(rapper7, terreno);
                    this.game.physics.arcade.collide(rapper7, bidone);
                    this.game.physics.arcade.collide(rapper7, rosa01);
                    this.game.physics.arcade.collide(rapper7, rosa02);

                    this.game.physics.arcade.collide(rapper8, terreno);
                    this.game.physics.arcade.collide(rapper8, bidone);
                    this.game.physics.arcade.collide(rapper8, rosa01);
                    this.game.physics.arcade.collide(rapper8, rosa02);

                    this.game.physics.arcade.collide(rapper9, terreno);
                    this.game.physics.arcade.collide(rapper9, bidone);
                    this.game.physics.arcade.collide(rapper9, rosa01);
                    this.game.physics.arcade.collide(rapper9, rosa02);

                    this.game.physics.arcade.collide(rapper10, terreno);
                    this.game.physics.arcade.collide(rapper10, bidone);
                    this.game.physics.arcade.collide(rapper10, rosa01);
                    this.game.physics.arcade.collide(rapper10, rosa02);

                    this.game.physics.arcade.collide(cannone, terreno);
                    this.game.physics.arcade.collide(sofia, cannone, function(){
                        variabile_cannone = true; 
                    });

                    


                    if (variabile_cannone && stopanimazione) {
                            cannone.animations.play('azione', 8, false, false);
                            stopanimazione = false;
                            this.game.time.events.add(1000, function () {
                                weaponcannone.fire(); 
                                audiocannone.play(); 

                            }); 
                            this.game.time.events.add(3000, function () {
                                haivinto = true; 
                            });                              
                    }

                    if (haivinto) {
                       this.game.state.start('gameover_positivo');
                       
                    }

                    sofia.body.velocity.x = 0;

                    if (cursors.left.isDown && stordito) {
                        sofia.body.velocity.x = - speed_sofia;
                        sofia.animations.play('left');
                    }

                    else if (cursors.right.isDown && stordito) {
                        sofia.body.velocity.x = speed_sofia;
                        sofia.animations.play('right');
                    }

                    else if (stordito) {
                        sofia.animations.stop();
                        sofia.frame = 9;
                    }

                    if (sofia.body.x > 2000) {
                        posizioneinizio = true; 
                        orologio.alpha = 1;
                    }

                    if (jumpButton.isDown && (sofia.body.onFloor() || sofia.body.touching.down) && stordito) {
                        sofia.body.velocity.y = salto_sofia;
                    }

                    if (fireButton.isDown && stordito){
                        weapon.fire();
                    }

                    if (sofia.body.velocity.x >= 0){
                        weapon.fireAngle = 0;
                    }

                    if (sofia.body.velocity.x<0){
                        weapon.fireAngle = 180;
                    }

                   

                    if (score >= 5 && gggButton.isDown) {
                        this.game.time.events.add(0, function() {
                            pulsante_invio.animations.stop();
                            pulsante_invio.frame = 0; 
                            ggg.alpha = 1;
                            ggg.animations.play('pioggia');
                            audioggg.play();
                            });
                            this.game.time.events.add(500, function() {
                                     emitter.on = true ;
                            });
                            this.game.time.events.add(2000, function() {
                            emitter.on = false;
                            ggg.alpha = 0;
                            score = 0;
                            load_cetrionzoli.frame = 0;
                            });

                    }


    },

}
