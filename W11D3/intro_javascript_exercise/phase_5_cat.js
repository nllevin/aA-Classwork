function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function ( ) {
    return `${this.owner} loves ${this.name}.`;
};

let kitty = new Cat('kitty', 'Noah');
let gobo = new Cat('gobo', 'Frida');
console.log(kitty.cuteStatement());
console.log(gobo.cuteStatement());
    
Cat.prototype.cuteStatement = function ( ) {
    return `${this.owner} loves ${this.name}!!!`;
};
console.log(kitty.cuteStatement());
console.log(gobo.cuteStatement());

Cat.prototype.meow = function () {
    return `Meow, meow, meow!!`;
};

console.log(kitty.meow());
console.log(gobo.meow());


gobo.meow = function (){
    return `Miau, miau, miau!`;
};

console.log(kitty.meow());
console.log(gobo.meow());
