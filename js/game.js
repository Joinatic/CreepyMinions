var fieldDistances = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var minionOnField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var timesRun = 0;
var paths, tdSprites, home, homes, spawn, spawns, minions, towers, fieldElements, bullets, lifeText, waveText, spawnTimerWave, spawnTimerMinion, selections, rangeCircle, firetowerattack, firetowerattacks, icetowerattacks, graphics, iceTowerActive, iceTowers, upgradecircle, sell, sells, rangeCircles, towerstats, uibuttons, restartButton;
var tower = [];
var path = [];
var bullet = [];
var bulletDummy = [];
var fieldElement = [];
var lose = false;
var towerstat = [];
var money = 100;
var uibutton = {
    soundOn: null
};
var updateDelay = 0;
var startPause = 0;
var endPause = 0;
var paused = false;
var moneyText = [];
var towerPrice = [10, 15, 20, 100, 150, 200, 500, 750, 1000, 2500];
//fire , ice
var towerDamage = [1, 0, 1, 2, 0, 1, 5, 0, 2, [2, 1]];
//fire , ice
var atackspeed = [500, 1000, 1000, 250, 1000, 500, 250, 1000, 250, [200, 1000]];
var towerRange = [192, 128, 128, 192, 128, 128, 192, 128, 128, 128];
var minionBounty = [{
    money: 5,
    dark: 0,
    holy: 0,
    fire: 0,
    ice: 0
}, {
    money: 5,
    dark: 1,
    holy: 0,
    fire: 0,
    ice: 0
}, {
    money: 5,
    dark: 0,
    holy: 1,
    fire: 0,
    ice: 0
}, {
    money: 5,
    dark: 0,
    holy: 0,
    fire: 1,
    ice: 0
}, {
    money: 5,
    dark: 0,
    holy: 0,
    fire: 0,
    ice: 1
}
];
var life = 100;
var wave = 1;
var spawnDelay = 8000;
var selectedTower = 0;
var selectedLiveTower = -1;
var minion = [];
var selection = [];
var runes = {
    fire: {
        value: 0,
        text: ''
    },
    ice: {
        value: 0,
        text: ''
    },
    holy: {
        value: 0,
        text: ''
    },
    dark: {
        value: 0,
        text: ''
    }
};
var minionsAlive = false;
var field = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var spawnLock = false;
var fieldObjects = [];

var dummy = [];
var sounds = {
    upgrade: {
        t2: 0,
        t3: 0,
        t4: 0
    },
    sell: 0,
    bullet: 0,
    active: true
};

var game = new Phaser.Game(1280, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update}, true);


function drawMap() {
    var spriteId = 0;
    for (var i = 0; i < 12; i++) {
        fieldObjects[i] = [];
        for (var j = 0; j < 12; j++) {
            if (i === 0 && j === 0) {
                // corner left-upside
                spriteId = 69;
            } else if (i === 11 && j === 0) {
                // corner right-upside
                spriteId = 41;
            } else if (i === 0 && j === 11) {
                // corner left-down
                spriteId = 39;
            } else if (i === 11 && j === 11) {
                // corner right-bottom
                spriteId = 11;
            } else if (j === 11 && i !== 0 && i !== 11) {
                // edge bottom
                spriteId = 10;
            } else if (i === 0 && j !== 0 && j !== 11) {
                // edge left
                spriteId = 54;
            } else if (i === 11 && j !== 0 && j !== 11) {
                // edge right
                spriteId = 26;
            } else if (j === 0 && i !== 0 && i !== 11) {
                // edge upside
                spriteId = 55;
            } else {
                // middle
                spriteId = 40;
            }


            fieldObjects[i][j] = fieldElements.create(getCoordinate(i), getCoordinate(j), 'mapsprites', spriteId);
            fieldObjects[i][j].data.type = "ground";
            fieldObjects[i][j].inputEnabled = true;
            fieldObjects[i][j].events.onInputDown.add(onClickField, this);
        }
    }
}


function preload() {
    var style = {font: "24px Arial", fill: "#FFF", align: "center"};


    var temp = game.add.text(0, 0, "Loading...", style);
    game.load.spritesheet('mapsprites', 'assets/mapPack_spritesheet.png', 64, 64);
    game.load.spritesheet('tdsprites', 'assets/towerDefense_tilesheet.png', 64, 64);
    game.load.spritesheet('towers', 'assets/Towers.png', 64, 64);
    game.load.spritesheet('runes', 'assets/runes.png', 64, 64);
    game.load.spritesheet('menu', 'assets/menusheet.png', 50, 50);
    game.load.spritesheet('restart', 'assets/restart.png', 64, 64);
    game.load.spritesheet('explo', 'assets/explo.png', 120, 120, 21);
    game.load.spritesheet('exploice', 'assets/exploice.png', 120, 120, 21);
    game.load.audio('t2', ['sounds/t2.mp3']);
    game.load.audio('t3', ['sounds/t3.mp3']);
    game.load.audio('t4', ['sounds/t4.mp3']);
    game.load.audio('sell', ['sounds/sell.ogg']);
    game.load.audio('bullet', ['sounds/bullet.wav']);
    temp.destroy();
}
var debugtext = [];
function create() {
    this.stage.disableVisibilityChange = true;

    /** sounds **/
    sounds.upgrade.t2 = game.add.audio('t2');
    sounds.upgrade.t3 = game.add.audio('t3');
    sounds.upgrade.t4 = game.add.audio('t4');
    sounds.sell = game.add.audio('sell');


    /** end sounds **/

    dummy[0] = game.add.sprite(-128, -128, 'mapsprites', 4);
    dummy[1] = game.add.sprite(-128, -128, 'mapsprites', 113);
    dummy[2] = game.add.sprite(-128, -128, 'mapsprites', 142);
    dummy[3] = game.add.sprite(-128, -128, 'mapsprites', 156);
    dummy[4] = game.add.sprite(-128, -128, 'mapsprites', 185);
    bulletDummy[0] = game.add.sprite(-128, -128, 'tdsprites', 275);


    game.physics.startSystem(Phaser.Physics.ARCADE);


    /** set groups **/
    tdSprites = game.add.group();
    fieldElements = game.add.group();
    firetowerattacks = game.add.group();
    icetowerattacks = game.add.group();
    paths = game.add.group();
    homes = game.add.group();
    spawns = game.add.group();
    minions = game.add.group();
    towers = game.add.group();
    iceTowers = game.add.group();
    bullets = game.add.group();
    rangeCircles = game.add.group();
    selections = game.add.group();
    sells = game.add.group();
    uibuttons = game.add.group();


    //

    /** END set groups **/

    /** BUILD MAP **/

    drawMap();

    //SET HOME

    homes.enableBody = true;
    homes.inputEnabled = true;
    home = homes.create(getCoordinate(11), getCoordinate(5), 'mapsprites', 118);
    home.body.immovable = true;
    home.data.type = "home";

    //SET SPAWN

    spawns.enableBody = true;
    spawn = spawns.create(getCoordinate(0), getCoordinate(5) + 9, 'mapsprites', 107);
    spawn.inputEnabled = true;
    spawn.events.onInputDown.add(onClickField, this);
    spawn.body.immovable = true;
    spawn.data.type = "spawn";

    spawn.scale.setTo(0.9, 0.9);
    /** END BUILD MAP **/

    /** BUILD POINTS & INFORMATIONS **/

    uibutton.soundOn = uibuttons.create(1088, 24, 'menu', 25);
    uibutton.soundOn.inputEnabled = true;
    uibutton.soundOn.events.onInputDown.add(toggleSound, this);
    uibutton.soundOn.kill();

    uibutton.soundOff = uibuttons.create(1088, 24, 'menu', 5);
    uibutton.soundOff.inputEnabled = true;
    uibutton.soundOff.events.onInputDown.add(toggleSound, this);

    uibutton.restart = uibuttons.create(1128, 24, 'menu', 24);
    uibutton.restart.inputEnabled = true;
    uibutton.restart.events.onInputDown.add(restartGame, this);

    uibutton.pause = uibuttons.create(1168, 32, 'menu', 144);
    uibutton.pause.inputEnabled = true;
    uibutton.pause.events.onInputDown.add(togglePause, this);
    uibutton.pause.scale.setTo(0.8, 0.8);

    uibutton.play = uibuttons.create(1168, 32, 'menu', 147);
    uibutton.play.inputEnabled = true;
    uibutton.play.events.onInputDown.add(togglePause, this);
    uibutton.play.kill();
    uibutton.play.scale.setTo(0.8, 0.8);


    //corners
    var temp = fieldElements.create(800, 16, 'mapsprites', 194);
    temp.data.type = "infoGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(1184, 16, 'mapsprites', 166);
    temp.data.type = "infoGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(800, 400, 'mapsprites', 164);
    temp.data.type = "infoGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(1184, 400, 'mapsprites', 136);
    temp.data.type = "infoGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);

    //edges
    for (var i = 864; i < 1184; i += 64) {
        temp = fieldElements.create(i, 16, 'mapsprites', 180);
        temp.data.type = "infoGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }
    for (var i = 864; i < 1184; i += 64) {
        temp = fieldElements.create(i, 400, 'mapsprites', 150);
        temp.data.type = "infoGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }
    for (var i = 80; i < 400; i += 64) {
        temp = fieldElements.create(800, i, 'mapsprites', 179);
        temp.data.type = "infoGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }
    for (var i = 80; i < 400; i += 64) {
        temp = fieldElements.create(1184, i, 'mapsprites', 151);
        temp.data.type = "infoGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }

    //center
    for (var i = 864; i < 1184; i += 64) {
        for (var j = 80; j < 400; j += 64) {
            temp = fieldElements.create(i, j, 'mapsprites', 165);
            temp.data.type = "infoGround";
            temp.inputEnabled = true;
            temp.events.onInputDown.add(onClickField, this);
        }
    }

    //set Icons
    //Money


    /** TEXT **/
    var style = {font: "24px Arial", fill: "#FFF", align: "center"};

    // Lifes
    temp = game.add.text(896, 72, "Villagers", style);
    temp.data.type = "life";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    lifeText = game.add.text(896, 104, life, style);
    lifeText.data.type = "life";
    lifeText.inputEnabled = true;
    lifeText.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(832, 72, 'mapsprites', 118);
    temp.data.type = "life";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);

    // Wave
    temp = game.add.text(1096, 72, "Wave", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    waveText = game.add.text(1096, 104, wave, style);
    waveText.data.type = "wave";
    waveText.inputEnabled = true;
    waveText.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(1032, 72, 'mapsprites', 107);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);

    // Cash / Money
    temp = fieldElements.create(832, 168, 'mapsprites', 122);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = game.add.text(896, 168, "Crystals", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    moneyText = game.add.text(896, 200, money, style);
    moneyText.data.type = "wave";
    moneyText.inputEnabled = true;
    moneyText.events.onInputDown.add(onClickField, this);

    // holy rune
    temp = fieldElements.create(1032, 168, 'runes', 1);
    temp.scale.setTo(0.9, 0.9);
    temp.data.type = "firerune";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = game.add.text(1091, 168, "Holy-Rune", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    runes.holy.text = game.add.text(1096, 200, runes.holy.value, style);
    runes.holy.text.data.type = "wave";
    runes.holy.text.inputEnabled = true;
    runes.holy.text.events.onInputDown.add(onClickField, this);

    // fire rune
    temp = fieldElements.create(1032, 264, 'runes', 0);
    temp.scale.setTo(0.9, 0.9);
    temp.data.type = "firerune";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = game.add.text(1091, 264, "Fire-Rune", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    runes.fire.text = game.add.text(1096, 296, runes.fire.value, style);
    runes.fire.text.data.type = "wave";
    runes.fire.text.inputEnabled = true;
    runes.fire.text.events.onInputDown.add(onClickField, this);

    // dark rune
    temp = fieldElements.create(832, 264, 'runes', 2);
    temp.scale.setTo(0.9, 0.9);
    temp.data.type = "firerune";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = game.add.text(891, 264, "Dark-Rune", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    runes.dark.text = game.add.text(896, 296, runes.dark.value, style);
    runes.dark.text.data.type = "wave";
    runes.dark.text.inputEnabled = true;
    runes.dark.text.events.onInputDown.add(onClickField, this);

    // ice rune
    temp = fieldElements.create(832, 360, 'runes', 3);
    temp.scale.setTo(0.9, 0.9);
    temp.data.type = "firerune";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = game.add.text(891, 360, "Ice-Rune", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    runes.ice.text = game.add.text(896, 392, runes.ice.value, style);
    runes.ice.text.data.type = "wave";
    runes.ice.text.inputEnabled = true;
    runes.ice.text.events.onInputDown.add(onClickField, this);


    /** END BUILD POINTS & INFORMATIONS **/

    /** BUILD TOWER SELECTION **/
    //corners
    temp = fieldElements.create(800, 464, 'mapsprites', 194);
    temp.data.type = "towerGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(1184, 464, 'mapsprites', 166);
    temp.data.type = "towerGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(800, 720, 'mapsprites', 164);
    temp.data.type = "towerGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    temp = fieldElements.create(1184, 720, 'mapsprites', 136);
    temp.data.type = "towerGround";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);

    //edges
    for (var i = 864; i < 1184; i += 64) {
        temp = fieldElements.create(i, 464, 'mapsprites', 180);
        temp.data.type = "towerGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }
    for (var i = 864; i < 1184; i += 64) {
        temp = fieldElements.create(i, 720, 'mapsprites', 150);
        temp.data.type = "towerGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }
    for (var i = 528; i < 720; i += 64) {
        temp = fieldElements.create(800, i, 'mapsprites', 179);
        temp.data.type = "towerGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }
    for (var i = 528; i < 720; i += 64) {
        temp = fieldElements.create(1184, i, 'mapsprites', 151);
        temp.data.type = "towerGround";
        temp.inputEnabled = true;
        temp.events.onInputDown.add(onClickField, this);
    }

    //center
    for (var i = 864; i < 1184; i += 64) {
        for (var j = 528; j < 720; j += 64) {
            temp = fieldElements.create(i, j, 'mapsprites', 165);
            temp.data.type = "towerGround";
            temp.inputEnabled = true;
            temp.events.onInputDown.add(onClickField, this);
        }
    }

    //normal Tower
    var id = 0;

    for (var id = 0; id < 10; id++) {
        switch (id) {
            case 0:
                selection[id] = selections.create(832, 496, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "single";
                break;
            case 1:
                selection[id] = selections.create(896, 496, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "slow";
                break;
            case 2:
                selection[id] = selections.create(960, 496, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "aoe";
                break;
            case 3:
                selection[id] = selections.create(832, 560, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "single";
                break;
            case 4:
                selection[id] = selections.create(896, 560, 'towers', id);
                selection[id].data.runeCosts = {holy: 1, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "stun";
                break;
            case 5:
                selection[id] = selections.create(960, 560, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 1, fire: 0, ice: 0};
                selection[id].data.effects = "aoe";
                break;
            case 6:
                selection[id] = selections.create(832, 624, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "single";
                break;
            case 7:
                selection[id] = selections.create(896, 624, 'towers', id);
                selection[id].data.runeCosts = {holy: 5, dark: 0, fire: 0, ice: 0};
                selection[id].data.effects = "slow,\nstun";
                break;
            case 8:
                selection[id] = selections.create(960, 624, 'towers', id);
                selection[id].data.runeCosts = {holy: 0, dark: 5, fire: 0, ice: 0};
                selection[id].data.effects = "aoe";
                break;
            case 9:
                selection[id] = selections.create(928, 688, 'towers', id);
                selection[id].data.runeCosts = {holy: 10, dark: 10, fire: 10, ice: 10};
                selection[id].data.effects = "aoe,\nslow,\nstun";
                break;
        }
        selection[id].data.type = "selection";
        if (id <= 2) {
            selection[id].data.selectable = true;
        } else {
            selection[id].data.selectable = false;
            selection[id].alpha = 0.3;
            selection[id].kill();
        }

        selection[id].data.id = id;
        selection[id].data.towerPrice = towerPrice[id];
        selection[id].data.atkspeed = atackspeed[id];
        selection[id].data.damage = towerDamage[id];
        selection[id].data.range = towerRange[id];
        if (id === 9) {
            selection[id].data.dps = (1000 / atackspeed[id][0]) * towerDamage[id][0];
        } else {
            selection[id].data.dps = (1000 / atackspeed[id]) * towerDamage[id];
        }

        selection[id].inputEnabled = true;
        selection[id].events.onInputDown.add(onSelectTower, this);
    }

    //sell Tower
    sell = sells.create(864, 688, 'tdsprites', 287);
    sell.data.type = "sell";
    sell.data.id = 9;
    sell.alpha = 0.3;
    sell.data.selectable = false;
    sell.inputEnabled = true;
    sell.events.onInputDown.add(onClickField, this);
    sell.kill();


    //stats

    //dps
    temp = game.add.text(1024, 501, "DPS: ", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    towerstat[0] = game.add.text(1152, 501, selection[0].data.dps, style);
    towerstat[0].data.type = "wave";
    towerstat[0].inputEnabled = true;
    towerstat[0].events.onInputDown.add(onClickField, this);

    //effects
    temp = game.add.text(1024, 533, "Effects: ", style);
    temp.data.type = "wave";
    temp.inputEnabled = true;
    temp.events.onInputDown.add(onClickField, this);
    towerstat[1] = game.add.text(1152, 533, selection[0].data.effects, style);
    towerstat[1].data.type = "wave";
    towerstat[1].inputEnabled = true;
    towerstat[1].events.onInputDown.add(onClickField, this);


    /** END BUILD TOWER SELECTION **/

    //Initialize minions

    minions.enableBody = false;


    //Initialize Tower

    towers.enableBody = true;


    //initialize bulets

    bullets.enableBody = false;


    //set first wave spawn time
    spawnTimerWave = game.time.now + 10000;
    spawnTimerMinion = 0;
    setFieldDistances();


    // /** DEBUG **/
    // var style = {font: "24px Arial", fill: "#FFF", align: "center"};
    // for (var i = 0; i < 12; i++) {
    //     debugtext[i] = []
    //     for (var j = 0; j < 12; j++) {
    //         debugtext[i][j] = game.add.text(getCoordinate(i) + 32, getCoordinate(j) + 32, "0", style);
    //     }
    // }

}


function update() {
    resizeGame();
    if (!paused) {
        if (!lose) {
            // checkMinionsAlive();
            // waveCleared();
            game.physics.arcade.overlap(bullets, minions, hitMinion, null, this);
            game.physics.arcade.overlap(minions, homes, minionHitBase, null, this);

            if (updateDelay < game.time.now) {
                minionsAlive = false;
                minions.forEachAlive(function (minion) {
                    minionsAlive = true;

                    if ((minion.data.stuntime ) < game.time.now - 1000 && minion.data.stunned) {
                        // minion.data.stunned = false;
                        minion.data.tween.resume();
                        minion.data.stunned = false;
                    }
                    moveDatMinion(minion);

                });

                if (!minionsAlive) {
                    for (var i = 0; i < 12; i++) {
                        for (var j = 0; j < 12; j++) {
                            minionOnField[i][j] = 0;
                        }
                    }
                }

                towers.forEachAlive(function (tower) {
                    if (tower.data.lastShot < game.time.now - tower.data.atkspeed) {
                        minions.forEachAlive(function (minion) {
                            if (game.physics.arcade.distanceBetween(tower, minion) <= towerRange[tower.data.towerid]) {
                                shootCalc(tower, minion);
                            }
                        });
                    }

                });

                for (var i = 0; i < 10; i++) {
                    if (i === selectedTower) {
                        selection[i].scale.setTo(1.1, 1.1);
                    } else {
                        selection[i].scale.setTo(1, 1);
                    }
                }

                bullets.forEachAlive(function (bullet) {
                    moveBulletToTarget(bullet);
                }, this);

                if (selectedLiveTower >= 0) {
                    checkTowerAvailability();
                } else {
                    sell.alpha = 0.3;
                }
                waveCleared();
                updateDelay = game.time.now + 20;
            }

            updateText();

            // add pause time to wave spawn
            spawnTimerWave += game.time.pauseDuration;
            game.time.pauseDuration = 0;

            if (game.time.now > spawnTimerWave && !spawnLock) {
                spawnWave();
            }


            youLoose();

        }
    }
}

function restartGame() {
    minions.forEachAlive(function (minion) {
        minion.kill();
    }, this);
    bullets.forEachAlive(function (bullet) {
        bullet.kill();
    }, this);
    towers.forEachAlive(function (tower) {
        tower.kill();
    }, this);
    life = 100;
    money = 100;
    runes.dark.value = 0;
    runes.holy.value = 0;
    runes.fire.value = 0;
    runes.ice.value = 0;

    wave = 1;
    spawnDelay = 8000;
    selectedTower = 0;
    selectedLiveTower = -1;
    field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    fieldDistances = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    setFieldDistances();
    lose = false;
}


function checkTowerAvailability() {
    for (var i = 0; i < 10; i++) {
        var runesAvailable = true;
        var upGrade = true;
        switch (i) {
            case 3:
                upGrade = (tower[selectedLiveTower].data.towerid === 0);
                break;
            case 4:
                if (runes.holy.value > 0) {
                    runesAvailable = true;
                } else {
                    upGrade = (tower[selectedLiveTower].data.towerid === 1);
                    runesAvailable = false;
                }
                break;
            case 5:
                if (runes.dark.value > 0) {
                    runesAvailable = true;
                } else {
                    upGrade = (tower[selectedLiveTower].data.towerid === 2);
                    runesAvailable = false;
                }
                break;
            case 6:
                upGrade = (tower[selectedLiveTower].data.towerid === 3);
                break;
            case 7:
                if (runes.holy.value > 1) {
                    runesAvailable = true;
                } else {
                    upGrade = (tower[selectedLiveTower].data.towerid === 4);
                    runesAvailable = false;
                }
                break;
            case 8:
                if (runes.dark.value > 1) {
                    runesAvailable = true;
                } else {
                    upGrade = (tower[selectedLiveTower].data.towerid === 5);
                    runesAvailable = false;
                }
                break;
            case 9:
                if (runes.dark.value > 0 && runes.holy.value > 0 && runes.fire.value > 0 && runes.ice.value > 0) {
                    runesAvailable = true;
                } else {
                    upGrade = (tower[selectedLiveTower].data.towerid === 7 || tower[selectedLiveTower].data.towerid === 8);
                    runesAvailable = false;
                }
                break;
        }
        if (money >= towerPrice[i] && runesAvailable && upGrade) {
            selection[i].alpha = 1;
            selection[i].data.selectable = true;
        } else {
            selection[i].alpha = 0.3;
            selection[i].data.selectable = false;
        }
    }
    sell.alpha = 1;
}

function killMinion(minion, dmg) {
    if (minion.alive) {
        minionOnField[minion.data.lastPos.x][minion.data.lastPos.y] = 0;
        minionOnField[getPosition(minion.position.x)][getPosition(minion.position.y)] = 0;
        money += minion.data.worth.money;
        runes.holy.value += minion.data.worth.holy;
        runes.dark.value += minion.data.worth.dark;
        runes.fire.value += minion.data.worth.fire;
        runes.ice.value += minion.data.worth.ice;
        minion.position.x = -300;
        minion.position.y = -300;
        stopTweensFor(minion);
        minion.damage(dmg);
        minion.kill();
    }

}


function shootCalc(tower, minion) {
    if (minion.alive && tower.alive) {
        if (tower.data.towerid === 0 || tower.data.towerid === 3 || tower.data.towerid === 6) {

            if (tower.data.lastShot < game.time.now - tower.data.atkspeed) {

                shootBullet(tower, minion);
                tower.data.lastShot = game.time.now;
            }
        }
        if (tower.data.towerid === 1 || tower.data.towerid === 7 || tower.data.towerid === 9) {
            //slow
            if (minion.data.fieldsSlowed !== 5) {
                minion.data.slowed = true;
                minion.data.minionSpeed = minion.data.minionFixSpeed * 3;
                console.log("SLOWED");
                minion.data.fieldsSlowed = 2;
                shootBullet(tower, minion);

            }


        }
        if (tower.data.towerid === 2 || tower.data.towerid === 5 || tower.data.towerid === 8 || tower.data.towerid === 9) {
            //fire nova
            if (tower.data.explosionFire.data.lastShotFire < game.time.now - tower.data.atkspeed) {
                minions.forEachAlive(function (target) {
                    if (game.physics.arcade.distanceBetween(target, tower) < (tower.data.range + 32)) {

                        if (target.health - tower.data.explosionFire.data.damage <= 0) {
                            killMinion(target, tower.data.explosionFire.data.damage);
                        } else {
                            target.damage(tower.data.explosionFire.data.damage);
                        }
                    }
                });

                shootBullet(tower, minion);
                tower.data.explosionFire.data.lastShotFire = game.time.now;
            }
        }
        if (tower.data.towerid === 4 || tower.data.towerid === 7) {
            if (tower.data.explosionIce.data.lastShotIce < game.time.now - tower.data.atkspeed) {
                minions.forEachAlive(function (target) {

                    if (game.physics.arcade.distanceBetween(target, tower) < tower.data.range + 2 && (target.data.stuntime) < game.time.now - 2000) {
                        target.data.stunned = true;
                        //stun
                        target.data.stuntime = game.time.now;
                        tower.data.explosionIce.data.lastShotIce = game.time.now;
                        target.data.tween.pause();


                    }
                });
            }

        }
        if (tower.data.towerid === 9) {
            if (tower.data.explosionIce.data.lastShotIce < game.time.now - tower.data.atkspeed[1]) {

                minions.forEachAlive(function (target) {

                    if (game.physics.arcade.distanceBetween(target, tower) < tower.data.range + 2 && (target.data.stuntime) < game.time.now - 1500) {

                        target.data.stunned = true;
                        //stun
                        target.data.stuntime = game.time.now;
                        tower.data.explosionIce.data.lastShotIce = game.time.now;
                        target.data.tween.pause();
                    }
                });
            }
            if (tower.data.explosionFire.data.lastShotFire < game.time.now - tower.data.atkspeed[0]) {
                //firenova
                minions.forEachAlive(function (target) {
                    if (game.physics.arcade.distanceBetween(target, tower) < (tower.data.range + 32)) {

                        if (target.health - tower.data.damage[0] <= 0) {
                            killMinion(target, tower.data.damage[0]);
                        } else {
                            target.damage(tower.data.damage[0]);
                        }
                    }
                });

                shootBullet(tower, minion);
                tower.data.explosionFire.data.lastShotFire = game.time.now;
            }
        }
    }
}


function hitMinion(bullet, minion) {
    if (bullet.data.target === minion.data.id) {
        if (bullet.data.targetHit === 0) {

            if (minion.health - bullet.data.damage <= 0) {
                killMinion(minion, bullet.data.damage);
            } else {
                minion.damage(bullet.data.damage);
            }
            bullet.data.targetHit = game.time.now;
        } else if (game.time.now > bullet.data.targetHit + 150) {
            bullet.kill();
//                bullet.destroy();
        }
    }
}

function upgradeTower(oldTower, id, newTower) {


    tower[oldTower].texture = newTower.texture;
    tower[oldTower].data.type = 'tower';
    tower[oldTower].data.lastShot = 0;
    tower[oldTower].data.towerPrice = towerPrice[id];
    tower[oldTower].data.worth += towerPrice[id];

    if (id === 9) {
        tower[oldTower].data.atkspeed = towerDamage[id][0];
    } else {
        tower[oldTower].data.damage = towerDamage[id];
    }
    if (id === 9) {
        tower[oldTower].data.atkspeed = atackspeed[id][0];
    } else {
        tower[oldTower].data.atkspeed = atackspeed[id];
    }


    tower[oldTower].data.towerid = id;
    tower[oldTower].body.setCircle(towerRange[id]);


    money -= towerPrice[id];
    runes.dark.value -= selection[id].data.runeCosts.dark;
    runes.holy.value -= selection[id].data.runeCosts.holy;
    runes.ice.value -= selection[id].data.runeCosts.ice;
    runes.fire.value -= selection[id].data.runeCosts.fire;
    unselectLiveTower(tower[oldTower]);
    if (sounds.active) {
        if (id < 6) {
            sounds.upgrade.t2.play();
        } else if (id >= 6 && id < 9) {
            sounds.upgrade.t3.play();
        } else if (id === 9) {
            sounds.upgrade.t4.play();
        }
    }
}


function setTower(x, y, id) {

    if (!(x === 0 && y === 5) && !(x === 11 && y === 5) && (towerPrice[id] <= money) && minionOnField[x][y] === 0) {
        var testingPlacable = field;
        testingPlacable[x][y] = 1;
        var currentPath = findPath(testingPlacable, [0, 5], [11, 5]);
        var testMinionBlock = false;
        minions.forEachAlive(function(minion) {
            var currentPath = findPath(testingPlacable, [getPosition(minion.position.x), getPosition(minion.position.y)], [11, 5]);
            console.log(getCoordinate(minion.position.x));
            if (!currentPath[0]) {
                testMinionBlock=true;
            }
        });
        // console.log(currentPath);
        if (!currentPath[0] || testMinionBlock) {
            field[x][y] = 0;
        } else {

            setFieldDistances();
            field[x][y] = 1;
            tower[tower.length] = towers.create(getCoordinate(x), getCoordinate(y), 'towers', id);
            tower[tower.length - 1].data.type = 'tower';
            tower[tower.length - 1].data.lastShot = 0;
            tower[tower.length - 1].data.ID = tower.length - 1;
            tower[tower.length - 1].data.towerPrice = towerPrice[id];
            tower[tower.length - 1].data.atkspeed = atackspeed[id];
            tower[tower.length - 1].data.damage = towerDamage[id];
            tower[tower.length - 1].data.pos = {x: x, y: y};
            tower[tower.length - 1].data.towerid = id;
            tower[tower.length - 1].data.bulletSound = game.add.audio('bullet');
            tower[tower.length - 1].data.worth = towerPrice[id];
            tower[tower.length - 1].data.range = towerRange[id];
            tower[tower.length - 1].inputEnabled = true;
            tower[tower.length - 1].data.selected = false;
            tower[tower.length - 1].events.onInputDown.add(onClickField, this);
            tower[tower.length - 1].body.setCircle(towerRange[id]);


            if (id === 1 || id === 4 || id === 2 || id === 9) {
                tower[tower.length - 1].data.explosionFire = firetowerattacks.create(getCoordinate(x) - 28, getCoordinate(y) - 28, 'explo');
                tower[tower.length - 1].data.explosionFire.animations.add('shoot', [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0], atackspeed[id] / 17, false);

//                    game.debug.body(tower[tower.length - 1].data.explosion);
                tower[tower.length - 1].data.explosionFire.data.atkspeed = atackspeed[id];
                tower[tower.length - 1].data.explosionFire.data.damage = towerDamage[id];
                tower[tower.length - 1].data.explosionFire.data.lastShotIce = 0;
                tower[tower.length - 1].data.explosionFire.data.lastShotFire = 0;

                tower[tower.length - 1].data.explosionFire.kill();
//                    tower[tower.length - 1].data.explosion=firetowerattack;

                tower[tower.length - 1].data.explosionIce = icetowerattacks.create(getCoordinate(x) - 28, getCoordinate(y) - 28, 'exploice');
                tower[tower.length - 1].data.explosionIce.animations.add('shoot', [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0], atackspeed[id] / 17, false);

//                    game.debug.body(tower[tower.length - 1].data.explosion);
                tower[tower.length - 1].data.explosionIce.data.atkspeed = atackspeed[id];
                tower[tower.length - 1].data.explosionIce.data.damage = towerDamage[id];
                tower[tower.length - 1].data.explosionIce.data.lastShotIce = 0;
                tower[tower.length - 1].data.explosionIce.data.lastShotFire = 0;

                tower[tower.length - 1].data.explosionIce.kill();
//                    tower[tower.length - 1].data.explosion=firetowerattack;
            }


            var offset = (towerRange[id] - 32);
            tower[tower.length - 1].body.offset.x -= offset;
            tower[tower.length - 1].body.offset.y -= offset;
            tower[tower.length - 1].body.center.x -= offset;
            tower[tower.length - 1].body.center.y -= offset;


            money -= towerPrice[id];
        }
    }


}

function getPosition(x) {
    x -= 16;
    return Math.round(x / 64);
}

function getCoordinate(x) {
    x *= 64;
    return x + 16;
}

function onClickField(e) {
    if (selectedLiveTower >= 0 && e.data.type !== 'sell') toggleRange(tower[selectedLiveTower]);
    if (e.data.type === 'ground') {
        if (!(field[getPosition(e.position.x)][getPosition(e.position.y)] === 1) && selectedTower >= 0) {
            setTower(getPosition(e.position.x), getPosition(e.position.y), selectedTower);

        }
    } else if (e.data.type === 'spawn' && !minionsAlive) {
        spawnTimerWave = game.time.now + 200;
        selectedTower = -1;
    } else if (e.data.type === 'tower') {
        toggleRange(e);
        showOptions(e);
        selectedTower = -1;

//            game.debug.body(e);
        selectedLiveTower = e.data.ID;

    } else if (e.data.type === 'sell') {
        if (selectedLiveTower !== -1) {
            sellTower(selectedLiveTower);
            selectedTower = -1;
        }
    } else if (e.data.type === 'minion') {
        if (!paused) {
            togglePause();

        }
        showPathMinion(e);

    }
}

function showPathMinion(minion) {
    var pos = {
        x: getPosition(minion.position.x),
        y: getPosition(minion.position.y)
    };
    console.log(pos);
    var pos = {
        x: Math.floor(getPosition(minion.position.x)),
        y: Math.floor(getPosition(minion.position.y))
    };
    // console.log(pos);
    var path = [];
    path[0] = [];
    path[0][0] = pos.x;
    path[0][1] = pos.y;
    getPath(1, pos);
    function getPath(id, pos) {
        if (!(pos.x === 11 && pos.y === 5) && minion.alive) {
            var way = {
                u: 999,
                d: 999,
                l: 999,
                r: 999
            };

            var goto;

            if ((pos.x - 1) > -1) {
                way.l = fieldDistances[pos.x - 1][pos.y];
            }
            if ((pos.x + 1) < 12) {
                way.r = fieldDistances[pos.x + 1][pos.y];
            }
            if ((pos.y - 1) > -1) {
                way.u = fieldDistances[pos.x][pos.y - 1];
            }
            if ((pos.y + 1) < 12) {
                way.d = fieldDistances[pos.x][pos.y + 1];
            }

            if (way.u >= 0 && way.d >= 0 && way.l >= 0 && way.r >= 0) {
                var min = Math.min(way.u, way.d, way.r, way.l);
                if (min === way.u) {
                    goto = {
                        x: getCoordinate(pos.x),
                        y: getCoordinate(pos.y - 1)
                    };
                } else if (min === way.d) {
                    goto = {
                        x: getCoordinate(pos.x),
                        y: getCoordinate(pos.y + 1)
                    };
                } else if (min === way.r) {
                    goto = {
                        x: getCoordinate(pos.x + 1),
                        y: getCoordinate(pos.y)
                    };
                } else if (min === way.l) {
                    goto = {
                        x: getCoordinate(pos.x - 1),
                        y: getCoordinate(pos.y)
                    };
                }
                goto.x = getPosition(goto.x);
                goto.y = getPosition(goto.y);
                path[id] = [];
                path[id][0] = goto.x;
                path[id][1] = goto.y;
                id++;
                getPath(id, goto);
            }
        } else {
            return;
        }

    }

    drawPath(path);
}

function youLoose() {
    if (life <= 0) {
        lose = true;
        minions.forEachAlive(function(minion) {
           if(minion.data.tween) minion.data.tween.stop();
        });
    }
}

function showOptions(e) {
    if (e.data.towerid < 6) {
        selection[e.data.towerid + 3].revive();
        selection[e.data.towerid + 3].position.x = e.position.x - 32;
        selection[e.data.towerid + 3].position.y = e.position.y;
        sell.revive();
        sell.position.x = e.position.x + 32;
        sell.position.y = e.position.y;
    } else if (e.data.towerid === 7 || e.data.towerid === 8) {
        selection[9].revive();
        selection[9].position.x = e.position.x - 32;
        selection[9].position.y = e.position.y;
        sell.revive();
        sell.position.x = e.position.x + 32;
        sell.position.y = e.position.y;
    } else {
        sell.revive();
        sell.position.x = e.position.x + 32;
        sell.position.y = e.position.y;
    }
}

function sellTower(id) {
    money += Math.floor(tower[id].data.worth / 2);
    field[tower[id].data.pos.x][tower[id].data.pos.y] = 0;
    toggleRange(tower[id]);
    tower[id].destroy();
    if (sounds.active) {
        sounds.sell.play();
    }

}

function unselectLiveTower(e) {
    rangeCircle.destroy();
    upgradecircle.destroy();


    sell.kill();
    for (var i = 3; i < 10; i++) {
        selection[i].kill();
    }
    selectedLiveTower = -1;
    e.data.selected = false;
}

function recycleMinion() {
    var count = 0;
    var minionid = [];
    minions.forEachDead(function (minion) {
        count++;
        minionid.push(minion.data.id);
    }, this);

    if (count > 0) {
        return minionid[0];
    } else {
        return null;
    }
}

function checkMinionsAlive() {
    minionsAlive = false;
    minions.forEachAlive(function () {
        minionsAlive = true;
    });
}

function spawnMinion(id) {
    var takeThisMinion = recycleMinion();
    var x = spawn.position.x;
    var y = spawn.position.y;
    if (takeThisMinion === null) {
        takeThisMinion = minion.length;


        switch (id) {
            case 0:
                minion[takeThisMinion] = minions.create(x, y, 'mapsprites', 4);
                minion[takeThisMinion].data.minionid = 0;
                break;
            case 1:
                minion[takeThisMinion] = minions.create(x, y, 'mapsprites', 113);
                minion[takeThisMinion].data.minionid = 1;
                //rock
                break;
            case 2:
                minion[takeThisMinion] = minions.create(x, y, 'mapsprites', 142);
                minion[takeThisMinion].data.minionid = 2;
                //sleepy yellow
                break;
            case 3:
                minion[takeThisMinion] = minions.create(x, y, 'mapsprites', 156);
                minion[takeThisMinion].data.minionid = 3;
                //one eye red
                break;
            case 4:
                minion[takeThisMinion] = minions.create(x, y, 'mapsprites', 185);
                minion[takeThisMinion].data.minionid = 4;
                //blue
                break;
        }
        minion[takeThisMinion].data.revived = false;
        minion[takeThisMinion].events.onInputDown.add(onClickField, this);
        game.physics.arcade.enable(minion[takeThisMinion]);
    } else {
        minion[takeThisMinion].data.worth = minionBounty[id];
        minion[takeThisMinion].data.fixWorth = minionBounty[id];
        stopTweensFor(minion[takeThisMinion]);
        minion[takeThisMinion].texture = dummy[id].texture;
        minion[takeThisMinion].position.x = x;
        minion[takeThisMinion].position.y = y;
        minion[takeThisMinion].revive();
        minion[takeThisMinion].data.minionid = id;
        minion[takeThisMinion].data.revived = true;
    }

    minion[takeThisMinion].data.fieldsSlowed = 0;
    minion[takeThisMinion].data.id = takeThisMinion;
    minion[takeThisMinion].health = wave * 3;
    minion[takeThisMinion].data.type = 'minion';
    minion[takeThisMinion].data.fieldsSlowed = 0;
    minion[takeThisMinion].data.lastfirehit = 0;
    minion[takeThisMinion].data.minionFixSpeed = 400;
    minion[takeThisMinion].data.minionSpeed = 400;
    minion[takeThisMinion].data.movediorectioninterval = null;
    minion[takeThisMinion].data.movedirection = {x: 0, y: 0};
    minion[takeThisMinion].data.moving = false;
    minion[takeThisMinion].data.slowed = false;
    minion[takeThisMinion].data.stunned = false;
    minion[takeThisMinion].data.tween = false;
    minion[takeThisMinion].data.stuntime = 0;
    minion[takeThisMinion].inputEnabled = true;
    moveDatMinion(minion[takeThisMinion]);
}

function stopTweensFor(obj) {  // first get all of the active tweens
    console.log(obj);
    if (obj.data.tween) {
        obj.data.tween.stop();
    }
}

function moveDatMinion(minion) {
    if (!minion.data.moving) {
        minion.data.moving = true;
        if (minion.data.fieldsSlowed > 0) {
            minion.data.fieldsSlowed--;
        } else {
            minion.data.minionSpeed = minion.data.minionFixSpeed;
            minion.data.slowed = false;
        }
        var pos = {
            x: Math.floor(getPosition(minion.position.x)),
            y: Math.floor(getPosition(minion.position.y))
        };
        if (!(pos.x === 11 && pos.y === 5) && minion.alive) {
            var way = {
                u: 999,
                d: 999,
                l: 999,
                r: 999
            };
            var goto;
            if ((pos.x - 1) > -1) {
                way.l = fieldDistances[pos.x - 1][pos.y];
            }
            if ((pos.x + 1) < 12) {
                way.r = fieldDistances[pos.x + 1][pos.y];
            }
            if ((pos.y - 1) > -1) {
                way.u = fieldDistances[pos.x][pos.y - 1];
            }
            if ((pos.y + 1) < 12) {
                way.d = fieldDistances[pos.x][pos.y + 1];
            }
            if (way.u >= 0 && way.d >= 0 && way.l >= 0 && way.r >= 0) {
                var min = Math.min(way.u, way.d, way.r, way.l);
                if (min === way.u) {
                    goto = {
                        x: getCoordinate(pos.x),
                        y: getCoordinate(pos.y - 1)
                    };
                } else if (min === way.d) {
                    goto = {
                        x: getCoordinate(pos.x),
                        y: getCoordinate(pos.y + 1)
                    };
                } else if (min === way.r) {
                    goto = {
                        x: getCoordinate(pos.x + 1),
                        y: getCoordinate(pos.y)
                    };
                } else if (min === way.l) {
                    goto = {
                        x: getCoordinate(pos.x - 1),
                        y: getCoordinate(pos.y)
                    };
                }
            }
            if (!minion.data.tween) {
                minion.data.tween = game.add.tween(minion).to(goto, minion.data.minionSpeed, 'Linear', true, 0);
            } else {
                var nextTween = game.add.tween(minion).to(goto, minion.data.minionSpeed, 'Linear', true, 0);
                minion.data.tween.chain(nextTween);
                minion.data.tween = nextTween;
            }
            minion.data.tween.onComplete.add(function () {
                // minion.data.tween.stop();
                minion.data.moving = false;
                moveDatMinion(minion);
            }, this);
            minionOnField[getPosition(goto.x)][getPosition(goto.y)] = 1;
            if (minion.data.lastPos) {
                minionOnField[minion.data.lastPos.x][minion.data.lastPos.y] = 0;
            }
            minion.data.lastPos = pos;
        } else {
            stopTweensFor(minion);
        }
    }
}

function moveBulletToTarget(bullet) {
    if (minion[bullet.data.target].alive) {
        game.physics.arcade.moveToObject(bullet, minion[bullet.data.target], 500);
    } else {
        bullet.kill();
    }
}

function recycleBullet() {
    var count = 0;
    var bulletid = [];
    bullets.forEachDead(function (bullet) {
        count++;
        bulletid.push(bullet.data.id);
    }, this);
    if (count > 0) {
        return bulletid[0];
    } else {
        return null;
    }
}

function shootBullet(tower, target) {
    if (tower.data.towerid === 0 || tower.data.towerid === 3 || tower.data.towerid === 6) {
        var takeDatBullet = recycleBullet();
        if (takeDatBullet === null) {
            takeDatBullet = bullet.length;
            bullet[takeDatBullet] = bullets.create(tower.position.x, tower.position.y, 'tdsprites', 275);
        } else {
            bullet[takeDatBullet].texture = bulletDummy[0].texture;
            bullet[takeDatBullet].position.x = tower.position.x;
            bullet[takeDatBullet].position.y = tower.position.y;
            bullet[takeDatBullet].revive();
        }
        game.physics.arcade.enable(bullet[takeDatBullet]);
        bullet[takeDatBullet].data.target = target.data.id;
        bullet[takeDatBullet].data.targetHit = 0;
        bullet[takeDatBullet].data.damage = tower.data.damage;
        bullet[takeDatBullet].data.id = takeDatBullet;
        if (sounds.active) {
            tower.data.bulletSound.play();
        }
    } else if (tower.data.towerid === 1 || tower.data.towerid === 4 || tower.data.towerid === 7 || tower.data.towerid === 9) {
        tower.data.explosionIce.revive();
        tower.data.explosionIce.animations.play('shoot');
        tower.data.explosionIce.animations.currentAnim.onComplete.add(function (explo) {
            explo.kill();
        }, this);
    } else if (tower.data.towerid === 2 || tower.data.towerid === 5 || tower.data.towerid === 8) {

        tower.data.explosionFire.revive();
        tower.data.explosionFire.animations.play('shoot');
        tower.data.explosionFire.animations.currentAnim.onComplete.add(function (explo) {
            explo.kill();
        }, this);
    }
}


function minionHitBase(minion, base) {
    if (minion.alive && game.physics.arcade.distanceBetween(minion, base) <= 3) {
        minionOnField[minion.data.lastPos.x][minion.data.lastPos.y] = 0;
        minionOnField[getPosition(minion.position.x)][getPosition(minion.position.y)] = 0;
        life--;
        stopTweensFor(minion);
        minion.kill();
        minion.position.x = -64;
        minion.position.y = -64;
    }
}

function updateText() {
    var temp = money;
    if (selectedTower >= 0) {
        temp += " (-" + selection[selectedTower].data.towerPrice + ")";
        if (selectedTower === 9) {
            towerstat[0].text = selection[selectedTower].data.dps;
            towerstat[1].text = selection[selectedTower].data.effects;
        } else {
            towerstat[0].text = selection[selectedTower].data.dps;
            towerstat[1].text = selection[selectedTower].data.effects;
        }
    } else if (selectedLiveTower >= 0) {
        if (tower[selectedLiveTower].data.towerid < 6) {
            temp += " (-" + selection[tower[selectedLiveTower].data.towerid + 3].data.towerPrice + ")";
        } else if (selection[tower[selectedLiveTower].data.towerid] === 7 || selection[tower[selectedLiveTower].data.towerid] === 8) {
            temp += " (-" + selection[9].data.towerPrice + ")";
        }
        if (selection[tower[selectedLiveTower].data.towerid] === 9) {
            towerstat[0].text = selection[tower[selectedLiveTower].data.towerid].data.dps;
            towerstat[1].text = selection[tower[selectedLiveTower].data.towerid].data.effects;
        } else {
            towerstat[0].text = selection[tower[selectedLiveTower].data.towerid].data.dps;
            towerstat[1].text = selection[tower[selectedLiveTower].data.towerid].data.effects;
        }
    } else {
        towerstat[0].text = '-';
        towerstat[1].text = '-';
    }
    moneyText.setText(temp);
    temp = {dark: runes.dark.value, holy: runes.holy.value, ice: runes.ice.value, fire: runes.fire.value};
    if (selectedTower >= 0) {
        if (selection[selectedTower].data.runeCosts.dark > 0) {
            temp.dark += " (-" + selection[selectedTower].data.runeCosts.dark + ")"
        }
        if (selection[selectedTower].data.runeCosts.holy > 0) {
            temp.holy += " (-" + selection[selectedTower].data.runeCosts.holy + ")"
        }
        if (selection[selectedTower].data.runeCosts.ice > 0) {
            temp.ice += " (-" + selection[selectedTower].data.runeCosts.ice + ")"
        }
        if (selection[selectedTower].data.runeCosts.fire > 0) {
            temp.fire += " (-" + selection[selectedTower].data.runeCosts.fire + ")"
        }
    }
    if (selectedLiveTower >= 0) {
        temp = {dark: runes.dark.value, holy: runes.holy.value, ice: runes.ice.value, fire: runes.fire.value};

        if (tower[selectedLiveTower].data.towerid < 6) {
            if (selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.dark > 0) {
                temp.dark += " (-" + selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.dark + ")"
            }
            if (selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.holy > 0) {
                temp.holy += " (-" + selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.holy + ")"
            }
            if (selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.ice > 0) {
                temp.ice += " (-" + selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.ice + ")"
            }
            if (selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.fire > 0) {
                temp.fire += " (-" + selection[tower[selectedLiveTower].data.towerid + 3].data.runeCosts.fire + ")"
            }
        } else if (tower[selectedLiveTower].data.towerid === 7 || tower[selectedLiveTower].data.towerid === 8) {
            if (selection[9].data.runeCosts.dark > 0) {
                temp.dark += " (-" + selection[9].data.runeCosts.dark + ")"
            }
            if (selection[9].data.runeCosts.holy > 0) {
                temp.holy += " (-" + selection[9].data.runeCosts.holy + ")"
            }
            if (selection[9].data.runeCosts.ice > 0) {
                temp.ice += " (-" + selection[9].data.runeCosts.ice + ")"
            }
            if (selection[9].data.runeCosts.fire > 0) {
                temp.fire += " (-" + selection[9].data.runeCosts.fire + ")"
            }
        }
    }
    lifeText.setText(life);
    runes.dark.text.setText(temp.dark);
    runes.holy.text.setText(temp.holy);
    runes.ice.text.setText(temp.ice);
    runes.fire.text.setText(temp.fire);
    temp = wave;
    if (!minionsAlive) {
        temp += ' (' + Math.round(((spawnTimerWave - game.time.now) / 1000) + 0.5) + ')';
    }
    // /** DEBUG **/
    // for (var i = 0; i < 12; i++) {
    //     for (var j = 0; j < 12; j++) {
    //         debugtext[i][j].setText(minionOnField[i][j]);
    //     }
    // }
    waveText.setText(temp);
}


function spawnWave() {

    var spawnTime = 500;
    if (spawnTimerMinion < game.time.now) {
        timesRun++;
        if (timesRun > wave + 1) {
            timesRun = 0;
            spawnLock = true;
        } else {
            var rnd = Math.floor(Math.random() * 100);
            var minID = 0;
            if (rnd < 90) {
                minID = 0;
            } else if (rnd >= 90 && rnd <= 93.5) {
                minID = 1;
            }
            else if (rnd >= 93.5 && rnd <= 95) {
                minID = 2;
            } else if (rnd >= 95 && rnd <= 96.5) {
                if (wave >= 20) {
                    minID = 3;
                } else {
                    minID = 0;
                }

            } else if (rnd >= 96.5 && rnd <= 98) {
                if (wave >= 20) {
                    minID = 4;
                } else {
                    minID = 0;
                }
            } else {
                minID = 0;
            }

            spawnMinion(minID);
            spawnTimerMinion = game.time.now + spawnTime;
        }
    }
}

function waveCleared() {
    if (!minionsAlive && spawnLock) {
        wave++;
        game.time.slowMotion = 2;
        spawnLock = false;
        spawnTimerWave = game.time.now + spawnDelay;
    }
}

function toggleRange(e) {
    if (e.data.selected) {
        unselectLiveTower(e);
    } else {
        if (rangeCircle)rangeCircle.kill();
        rangeCircle = game.add.graphics(0, 0);
        upgradecircle = game.add.graphics(0, 0);
        rangeCircles.add(rangeCircle);
        rangeCircles.add(upgradecircle);
        rangeCircle.beginFill(0x000, 0.2);
        upgradecircle.beginFill(0x000, 0.6);
        rangeCircle.drawCircle(e.position.x + 32, e.position.y + 32, e.data.range * 2);
        upgradecircle.drawCircle(e.position.x + 32, e.position.y + 32, 64 * 2);
        e.data.selected = true;
    }
}

function onSelectTower(e) {
    if (selectedTower === e.data.id) {
        selectedTower = -1;
    } else if (e.data.id < 3) {
        selectedTower = e.data.id;
        if (selectedLiveTower >= 0) {
            toggleRange(tower[selectedLiveTower]);
            selectedLiveTower = -1;
        }
    } else if (e.data.selectable) {
        upgradeTower(selectedLiveTower, e.data.id, e);
        selectedTower = -1;
    }
}

function drawPath(actualPath) {
    for (var i = 0; i < path.length; i++) {
        path[i].kill();
        path[i].destroy();
    }
    path = [];
    var prev = '';
    var actual = '';
    var next = '';
    for (var i = 0; i < actualPath.length; i++) {
        var spriteid;
        if (i !== actualPath.length - 1) {
            if ((actualPath[i][0] - actualPath[i + 1][0]) > 0) {
                next = 'links';
            } else if ((actualPath[i + 1][0] - actualPath[i][0]) > 0) {
                next = 'rechts';
            } else if ((actualPath[i][1] - actualPath[i + 1][1]) > 0) {
                next = 'oben';
            } else if ((actualPath[i + 1][1] - actualPath[i][1]) > 0) {
                next = 'unten';
            }
        }
        if (i !== 0) {
            if ((actualPath[i][0] - actualPath[i - 1][0]) > 0) {
                prev = 'links';
            } else if ((actualPath[i - 1][0] - actualPath[i][0]) > 0) {
                prev = 'rechts';
            } else if ((actualPath[i][1] - actualPath[i - 1][1]) > 0) {
                prev = 'oben';
            } else if ((actualPath[i - 1][1] - actualPath[i][1]) > 0) {
                prev = 'unten';
            }
        }
        if (i === 0) {
            if (next === 'oben') {
                spriteid = 168;
            } else if (next === 'unten') {
                spriteid = 16;
            } else if (next === 'links') {
                spriteid = 2;
            } else if (next === 'rechts') {
                spriteid = 154;
            }
        } else if (i === actualPath.length - 1) {
            if (prev === 'oben') {
                spriteid = 168;
            } else if (prev === 'unten') {
                spriteid = 16;
            } else if (prev === 'links') {
                spriteid = 2;
            } else if (prev === 'rechts') {
                spriteid = 154;
            }
        } else {
            if ((prev === 'oben' && next === 'oben') || (prev === 'unten' && next === 'unten') || (prev === 'oben' && next === 'unten') || (prev === 'unten' && next === 'oben')) {
                spriteid = 144;
            } else if ((prev === 'links' && next === 'links') || (prev === 'rechts' && next === 'rechts') || (prev === 'links' && next === 'rechts') || (prev === 'rechts' && next === 'links')) {
                spriteid = 130;
            } else if ((prev === 'links' && next === 'oben') || (prev === 'oben' && next === 'links')) {
                spriteid = 129;
            } else if ((prev === 'oben' && next === 'rechts') || (prev === 'rechts' && next === 'oben')) {
                spriteid = 143;
            } else if ((prev === 'unten' && next === 'rechts') || (prev === 'rechts' && next === 'unten')) {
                spriteid = 186;
            } else if ((prev === 'unten' && next === 'links') || (prev === 'links' && next === 'unten')) {
                spriteid = 172;
            }
        }
        path[path.length] = paths.create(getCoordinate(actualPath[i][0]), getCoordinate(actualPath[i][1]), 'mapsprites', spriteid);
        path[path.length - 1].alpha = 0.2;
    }


}

function testSprite(id) {
    game.add.sprite(0, 0, 'mapsprites', id);
}

function GimmeDatRess(value) {
    runes.dark.value = value;
    runes.ice.value = value;
    runes.fire.value = value;
    runes.holy.value = value;
    money = value;
}

function setFieldDistances() {
    var starttime = new Date();
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if (field[i][j] === 1) {
                fieldDistances[i][j] = 999;
            } else {
                fieldDistances[i][j] = setDistanceOf([i, j]);
            }
        }
    }
    function setDistanceOf(point) {
        var currentPath = findPath(field, point, [11, 5]);
        return currentPath.length;
    }
}
var resizeGame = this._fitScreen = function () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.forceLandscape = false;

};

/** MENU FUNCTIONS **/
function togglePause() {
    if (paused) {
        endPause = game.time.now;
        minions.forEachAlive(function (target) {
            if (target.data.tween) target.data.tween.resume();
        });
        bullets.forEachAlive(function (bullet) {
            bullet.body.velocity = bullet.data.velocity;
        });
        game.time.now -= (endPause - startPause);
        for (var i = 0; i < path.length; i++) {
            path[i].kill();
            path[i].destroy();
        }
        paused = false;
        uibutton.play.kill();
        uibutton.pause.revive();
    } else {
        paused = true;
        startPause = game.time.now;
        minions.forEachAlive(function (target) {
            target.data.tween.pause();
        });
        bullets.forEachAlive(function (bullet) {
            bullet.data.velocity = bullet.body.velocity;
            console.log(bullet.body.velocity);
            bullet.body.velocity.setTo(0, 0);
        });
        uibutton.pause.kill();
        uibutton.play.revive();
    }
}

function toggleSound() {
    if (sounds.active) {
        sounds.active = false;
        uibutton.soundOff.kill();
        uibutton.soundOn.revive();
    } else {
        uibutton.soundOn.kill();
        uibutton.soundOff.revive();
        sounds.active = true;
    }
}