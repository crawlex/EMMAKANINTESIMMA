//skapa en klass
function Warrior(name, hp, strength, x, y, img) {

    this.name = name;
    this.hp = hp;
    this.strength = strength;
    this.img = img;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.h = 50;
    this.w = 50;
    console.log("En krigare är född. Han ska heta " + this.name + ". Han är en överlevare med " + this.hp + " hp och han är stark som en oxe med " + this.strength + " styrka.");

}
//metod spring
Warrior.prototype.updatePositions = function (map) {

        var xIndex = 0,
            yIndex = 0;
        //Rör sig åt vänster
        if (this.vx < 0) {
            //Kolla index för vänster fot
            xIndex = Math.floor((this.x + this.vx) / 50);
            yIndex = Math.floor((this.y + this.h) / 50);
            console.log(xIndex + " , " + yIndex + " Värde: " + map[yIndex][xIndex]);
        }
        if (this.vx > 0) {
            //Kolla index för vänster fot
            xIndex = Math.floor((this.x + this.w + this.vx) / 50);
            yIndex = Math.floor((this.y + this.h) / 50);

        }
        if (map[yIndex][xIndex] >= 2) {



            this.x = this.x + this.vx;
        }
        this.y = this.y + this.vy;
    }
    //metod pain
Warrior.prototype.paint = function (ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

}

//metod att bli skadad
Warrior.prototype.hurt = function (damage) {
        this.hp = this.hp - damage;
        console.log(this.name + " skadar sig lite han förlorade " + damage + " hp och har kvar " + this.hp + " hp.")
    }
    //metod att skada
Warrior.prototype.attack = function (opponent) {

    console.log(this.name + " attackerar " + opponent.name + ".");
    opponent.hurt(this.strength);


}