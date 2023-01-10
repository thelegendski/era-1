//*define all data type prototypes here*

//returns sum of an array
Array.prototype.sum = function(){
    return this.reduce((a, b) => a + b)
}

//sets total value of an array
Array.prototype.set = function(num, MAX){
    while(this.sum() !== num){
        let i = random(this.length) | 0
        this[i] = constrain(abs(this[i] + (this.sum() > num ? -1 : 1)), 1, MAX)
    }
}

//true shuffle
Array.prototype.shuffle = function(){
    let i = this.length
    while(i > 0){
        let I = random(this.length) | 0
        i--
        [this[i], this[I]] = [this[I], this[i]]
    }
}

//*define all global variables here*
let territories = [], units = []
//*define all global constants here*
//const 

//*define all classes here*

//the Civilization class
class Civilization {
    constructor (name, player = false) {
        this.name = name
        this.player = player
        this.units = []
    }
    /*
        sample player prototype
    */
    gather () {
        this.units = units.filter(unit => unit.civ === name)
        this.territories = territories.filter(territory => territory.civ === this.name)
    }
    /*
        sample CPU prototype
    */
    CPU_gather () {
        this.units = units.filter(unit => unit.civ === name)
        this.territories = territories.filter(territory => territory.civ === this.name)
    }
    /*
        executes a given local method
        based on the civ's player status.

        method: name of the method to be executed
        args: arguments to be passed to the method
        CPU: if the method is only for the CPU
    */
    execute (method, args = [], CPU) {
        this[this.player && !CPU ? method : `CPU_${method}`](...args)
    }
    /*
        compile all Civilization logic into
        one prototype
    */
    all () {
        //all class methods must be called in this
        //manner
        this.execute('gather')
    }
}

class Territory {
    constructor (x, y, civ = null) {
        this.x = x
        this.y = y
        this.civ = civ
    }
}

class Unit {

}

class Gunner extends Unit {

}
