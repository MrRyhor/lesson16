class TMoney {
    #money = 0
    constructor(courseValue, initMoney) {
        this.courseUSD = courseValue
        this.Money = initMoney
    }
    get MoneyInUAH() {
        return this.#money
    }
    set MoneyInUAH(val) {
        if (this.#money + val < 0)
            throw new Error(document.write('<p>Нет средств на счету</p>'))
        this.#money += val
    }
    toString() {
        return `Balance = ${(this.Money / this.courseUSD).toFixed(2)}. Course USD = ${this.courseUSD}`
    }

    increaseMoney(val) {
        return this.Money = this.Money + val
    }
    decreaseMoney(val) {
        return this.Money = this.Money - val
    }
    increaseAmountInUAHBy100 (amount) {
        let val = 100        
        return this.Money = this.increaseMoney(amount) + val
    }
    decreaseAmountInUAHBy100 (amount) {
        let val =100
        return this.Money = this.decreaseMoney(amount) + val
    }
}

let money = new TMoney(37, 23500)
money.increaseMoney(12000)
money.decreaseMoney(12000)
money.increaseAmountInUAHBy100(12000)
money.decreaseAmountInUAHBy100(12000)
result1.innerHTML = money