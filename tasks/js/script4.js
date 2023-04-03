class TBankomat {
    #banknote5UAH = 0
    #banknote10UAH = 0
    #banknote20UAH = 0
    #banknote50UAH = 0
    #banknote100UAH = 0
    #banknote200UAH = 0
    constructor(init5UAH, init10UAH, init20UAH, init50UAH, init100UAH, init200UAH) {
        this.Banknote5UAH = init5UAH
        this.Banknote10UAH = init10UAH
        this.Banknote20UAH = init20UAH
        this.Banknote50UAH = init50UAH
        this.Banknote100UAH = init100UAH
        this.Banknote200UAH = init200UAH
    }
    get Banknote5UAH() {
        return this.#banknote5UAH
    }
    set Banknote5UAH(val) {
        if (this.#banknote5UAH + val < 0)
            throw new Error('Incorrect value')
        this.#banknote5UAH += val
    }
    get Banknote10UAH() {
        return this.#banknote10UAH
    }
    set Banknote10UAH(val) {
        if (this.#banknote10UAH + val < 0)
            throw new Error('Incorrect value')
        this.#banknote10UAH += val
    }
    get Banknote20UAH() {
        return this.#banknote20UAH
    }
    set Banknote20UAH(val) {
        if (this.#banknote20UAH + val < 0)
            throw new Error('Incorrect value')
        this.#banknote20UAH += val
    }
    get Banknote50UAH() {
        return this.#banknote50UAH
    }
    set Banknote50UAH(val) {
        if (this.#banknote50UAH + val < 0)
            throw new Error('Incorrect value')
        this.#banknote50UAH += val
    }
    get Banknote100UAH() {
        return this.#banknote100UAH
    }
    set Banknote100UAH(val) {
        if (this.#banknote100UAH + val < 0)
            throw new Error('Incorrect value')
        this.#banknote100UAH += val
    }
    get Banknote200UAH() {
        return this.#banknote200UAH
    }
    set Banknote200UAH(val) {
        if (this.#banknote200UAH + val < 0)
            throw new Error('Incorrect value')
        this.#banknote200UAH += val
    }
    toString() {
        return `<p>Banknote 5 UAH = ${this.Banknote5UAH} pcs.<br>
        Banknote 10 UAH = ${this.Banknote10UAH} pcs.<br>
        Banknote 20 UAH = ${this.Banknote20UAH} pcs.<br>
        Banknote 50 UAH = ${this.Banknote50UAH} pcs.<br>
        Banknote 100 UAH = ${this.Banknote100UAH} pcs.<br>
        Banknote 200 UAH = ${this.Banknote200UAH} pcs.<br></p>`
    }
    valueOf() {
        return this.Banknote5UAH * 5 + this.Banknote10UAH * 10 + this.Banknote20UAH * 20 + this.Banknote50UAH * 50 + this.Banknote100UAH * 100 + this.Banknote200UAH * 200
    }
    //=========================== Методы ==============================================================================================================================================
    getMinSumOfMoney() {
        let minSum = 0
        if (this.Banknote5UAH > 0) return minSum += 5
        if (this.Banknote5UAH === 0 && this.Banknote10UAH > 0) return minSum += 10
        if (this.Banknote10UAH === 0 && this.Banknote20UAH > 0) return minSum += 20
        if (this.Banknote20UAH === 0 && this.Banknote50UAH > 0) return minSum += 50
        if (this.Banknote50UAH === 0 && this.Banknote100UAH > 0) return minSum += 100
        else return minSum += 200
    }
    getMaxSumOfMoney() {
        return this.valueOf()
    }
    getMoneyFromBankomat(val) {
               
        if (val > this.getMaxSumOfMoney()) {
            document.write('<p>The sum is more than it is</p>')
            return
        } else {
            if (this.#banknote200UAH > 0 && val / 200 > 0) {
                this.#banknote200UAH -= Math.floor(val / 200)
                val = val % 200
            }
            if (this.#banknote100UAH > 0 && val / 100 > 0) {
                this.#banknote100UAH -= Math.floor(val / 100)
                val = val % 100
            }
            if (this.#banknote50UAH > 0 && val / 50 > 0) {
                this.#banknote50UAH -= Math.floor(val / 50)
                val = val % 50
            }
            if (this.#banknote20UAH > 0 && val / 20 > 0) {
                this.#banknote20UAH -= Math.floor(val / 20)
                val = val % 20
            }
            if (this.#banknote10UAH > 0 && val / 10 > 0) {
                this.#banknote10UAH -= Math.floor(val / 10)
                val = val % 10
            }
            if (this.#banknote5UAH > 0 && val / 5 > 0) {
                this.#banknote5UAH -= Math.floor(val / 5)
                val = val % 5
            }
            if (val > 0)
                document.write(`<p>The sum is not enough to withdraw.<br> We can issue the amount without <span>${val}</span> UAH</p>`)    
        }      
              
    }

}
// const value = [5, 10, 20, 50, 100, 200]
// const count = [100, 100, 100, 100, 50, 50]

let bankomat = new TBankomat(100, 50, 40, 20, 15, 10)
console.log(bankomat)
document.write(bankomat)
document.write(`<p>Min Sum Of Money = ${bankomat.getMinSumOfMoney()}<br></p>`)
document.write(`<p>Max Sum Of Money = ${bankomat.getMaxSumOfMoney()}<br></p>`)

console.log(bankomat.getMoneyFromBankomat(1260))
document.write(bankomat)

console.log(bankomat)




