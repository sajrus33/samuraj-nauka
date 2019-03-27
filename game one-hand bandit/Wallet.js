class Wallet {
    constructor(money) {

        // priv variable, exist only in constructor scope
        let _money = money;

        //function, geting acutal money
        // return automaticly, cause it is arrow function
        this.getValue = () => _money;

        // function, checking if "value" parametr is less or equal to a priv _money value
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = value => {
            // samuraj program,    need to add type parametr: type = "+"

            // if (typeof value === "number" && !isNaN(value)) {
            //     if (type === "+") {
            //         return _money += value;
            //     } else if (type === "-") {
            //         return _money -= value;
            //     } else {
            //         throw new Error("worng type of operation 'changeWallet'");
            //     }
            // } else {
            //     console.log(typeof value);
            //     throw new Error("wrong number");
            // }

            // my program
            if (typeof value === "number" && !isNaN(value)) {
                return _money += value;
            } else {
                console.log(typeof value);
                throw new Error("wrong number");
            }
        }
    }

}

const wallet = new Wallet(200);
let lol = wallet.getValue();
console.log(lol);