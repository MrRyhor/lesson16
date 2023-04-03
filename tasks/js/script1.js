class TDate {
    #day
    #month
    #year
    constructor(initday, initMonth, initYear) {
        this.day = initday
        this.month = initMonth
        this.year = initYear
    }
    get day() {
        return this.#day
    }
    set day(newDate) {
        if (newDate <= 0 || newDate > 31)
            throw new Error('Incorrect number of the day')
        this.#day = newDate
    }
    get month() {
        return this.#month
    }
    set month(newMonth) {
        if (newMonth <= 0 || newMonth > 12)
            throw new Error('Incorrect number of the month')
        this.#month = newMonth
    }
    get year() {
        return this.#year
    }
    set year(newYear) {
        if (newYear.length === 0)
            throw new Error('Year can\'t be empty')
        this.#year = newYear
    }

    toString() {
        return `${this.day} / ${this.month} / ${this.year}`
    }
    //========================= Методы =========================================================
    increaseDay(val) {
        this.year += Math.floor((this.day + val) / 365)
        this.month += (Math.floor((this.day + val) / 30)) % 12
        this.day = ((this.day - 1 + val) % 30) + 1
        return `${this.day} / ${this.month} / ${this.year}`
    }
    decreaseDay(val) {
        this.year += Math.floor((this.day - val) / 365)
        this.month += ((Math.floor((this.day - val) / 30)) % 12) + 12
        this.day = (((this.day - 1 - val) % 30) + 1) + 30
        return `${this.day} / ${this.month} / ${this.year}`
    }
    increaseMonth(val) {
        this.month = ((this.month - 1 + val) % 12) + 1
        this.year += Math.floor((this.month + val) / 12)
        return `${this.day} / ${this.month} / ${this.year}`
    }
    decreaseMonth(val) {
        this.month = (((this.month - 1 - val) % 12) + 1) + 12
        this.year -= Math.floor((this.month + val) / 12)
        return `${this.day} / ${this.month} / ${this.year}`
    }
    increaseYear(val) {
        this.year += val
        return `${this.day} / ${this.month} / ${this.year}`
    }
    decreaseYear(val) {
        this.year -= val
        return `${this.day} / ${this.month} / ${this.year}`
    }
}

let date = new TDate(31, 1, 2023)
date.increaseDay(30)
// date.decreaseDay(1335)
// date.increaseMonth(24)
// date.decreaseMonth(33)
// date.increaseYear(12)
// date.decreaseYear(22)
result1.innerHTML = date