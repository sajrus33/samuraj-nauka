class Wallet {
    constructor(money) {
        let _money = money;
        // geting acutal money
        this.getValue = () => _money;

        this.checkCanPlay = value => {
            if (_money >= value) return true
        }
    }

}

const wallet = new Wallet(200);
let lol = wallet.getValue();
console.log(lol);