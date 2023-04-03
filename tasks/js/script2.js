class TMoney {
    #money
    constructor(courseValue, initMoney) {
        this.courseUSD = courseValue
        this.Money = initMoney
    }
    get Money() {
        return this.#money
    }
    set Money(val) {
        if (val < 0)
            throw new Error(document.write('<p>Нет средств на счету</p>'))
        this.#money = val
    }
    toString() {
        return `Balance = ${this.Money.toFixed(2)}. Course USD = ${this.courseUSD}`
    }

    increaseMoney(val) {
        return this.Money = this.Money + val / this.courseUSD
    }
    decreaseMoney(val) {
        return this.Money = this.Money - val / this.courseUSD
    }
    getCourseUSDIfIncreaseAmountInUAHBy100 () {
        let val = 100
        let balanceInUAH = this.Money * this.courseUSD        
        return (balanceInUAH + val) / this.Money
    }    
}

let money = new TMoney(37, 500)
money.increaseMoney(12000)
money.decreaseMoney(12000)
document.write(`<p>Курс при котором сумма в гривнах увеличится на 100 UAH = ${money.getCourseUSDIfIncreaseAmountInUAHBy100()}</p>`)

result1.innerHTML = money