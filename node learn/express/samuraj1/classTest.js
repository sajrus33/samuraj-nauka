// class foo1 {
//     x(x, y) {
//         console.log("adsasd");
//         console.log("adsasd");
//         console.log("adsasd");
//         console.log("adsasd" + x + y);
//         const z = Math.random();
//         return x + y + y + z;
//     };
// };

class foo2 {
    constructor(name, roles) {
        this.name = name;
        this.roles = roles;

    };


}
foo2.prototype.getRoles = () => {
    return `${this.name} is acting the roles of: ${this.roles}`;
};

function foo1(name, roles) {
    this.name = name;
    this.roles = roles;
};

foo1.prototype.getRoles = () => {
    return `${this.name} is acting the roles of: ${this.roles}`;
};

console.time()
for (let i = 0; i < 10000000; i++) {
    new Array().push(new foo2("name"));
}
console.timeEnd();

console.time()
for (let i = 0; i < 10000000; i++) {
    new Array().push(new foo1("name"));
}
console.timeEnd();


