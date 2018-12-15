module.export=var LivingCreature=require("LivingCreature.js")
class Grass extends LivingCreature{
    constructor(){
        super(x,y)
        this.multiply=0
    }
    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 5) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}
