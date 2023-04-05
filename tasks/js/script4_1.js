class TBankomat {
    #value
    #count
    constructor(value, count) {
        this.Value = value
        this.Count = count
    }
    get Value() {
        return this.#value
    }
    set Value(val) {
        if (value < 0)
            throw new Error('Incorrect value')
        this.#value = val
    }
    get Count() {
        return this.#count
    }
    set Count(val) {
        if (val < 0)
            throw new Error('Incorrect value')
        this.#count = val
    }
    toString() {
        return `<p>Min Sum to withdraw = <span>${this.getMinSum()}</span>. Max Sum to withdraw = <span>${this.getMaxSum()}</span></p>`
    }
    //===================== Методы =========================================================
    getMinSum() {
        let minSum = 0
        for (let i = 0; i < this.Count.length; i++) {
            if (this.Count[i] > 0) return minSum = this.Value[i]
        }
        return minSum
    }

    getMaxSum() {
        let maxSum = 0
        for (let i = 0; i < this.Value.length; i++) {
            maxSum += this.Value[i] * this.Count[i]
        }
        return maxSum      
    }
    

    getMoneyFromBankomat(val) {
        let arr = []
        while (val > this.getMinSum() && val < this.getMaxSum()) {
            for (let i = this.Value.length - 1; i >= 0; i--) {
                if (this.Count[i] > 0 && val / this.Value[i]) {
                    this.Count[i] -= Math.floor(val / this.Value[i])
                    val = val % this.Value[i]
                }
                arr.push(this.Count[i])
            }
        }
        return arr
    }
}

const value = [5, 10, 20, 50, 100, 200]
const count = [100, 100, 100, 100, 50, 50]

let banknotes = new TBankomat(value, count)
console.log(banknotes)

console.log(banknotes.getMinSum())
console.log(banknotes.getMaxSum())
console.log(banknotes.getMoneyFromBankomat(2880))
document.write(banknotes)
document.write(`<p>Результат снятия суммы см. в консоли</p>`)
