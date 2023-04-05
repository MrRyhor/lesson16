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
        if (newDate < 1 || newDate > 31)
            throw new Error('Incorrect number of the day')
        this.#day = newDate
    }
    get month() {
        return this.#month
    }
    set month(newMonth) {
        if (newMonth < 1 || newMonth > 12)
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
    getQntDaysInMonth(month) {
        let qntDays
        switch (month) {
            case 4:
            case 6:
            case 9:
            case 11: qntDays = 30
                break;
            case 2: (((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 === 0)) ? qntDays = 29 : qntDays = 28
                break;
            default: qntDays = 31
                break;
        }
        return qntDays
    }

    increaseDay(val) {
        let qntDaysOfMonth = this.getQntDaysInMonth(this.month)
        let shiftedDay = this.day  // вводим переменную, чтоб избежать ввода неккоректного значения в this.day при +val
        shiftedDay += val
        while (shiftedDay > qntDaysOfMonth) {
            shiftedDay -= qntDaysOfMonth
            this.increaseMonth(1)
        }

        return this.day = shiftedDay                
    }

    decreaseDay(val) {
        let shiftedDay = this.day
        shiftedDay -= val
        while (shiftedDay < 1) {
            this.decreaseMonth(1)
            let qntDaysOfMonth = this.getQntDaysInMonth(this.month)
            shiftedDay += qntDaysOfMonth
        }
        return this.day = shiftedDay
    }
    // increaseDay(val) {
    //     this.year += Math.floor((this.day + val) / 365)
    //     this.month += (Math.floor((this.day + val) / 30)) % 12
    //     this.day = ((this.day - 1 + val) % 30) + 1
    //     return `${this.day} / ${this.month} / ${this.year}`
    // }
    // decreaseDay(val) {
    //     this.year += Math.floor((this.day - val) / 365)
    //     this.month += ((Math.floor((this.day - val) / 30)) % 12) + 12
    //     this.day = (((this.day - 1 - val) % 30) + 1) + 30
    //     return `${this.day} / ${this.month} / ${this.year}`
    // }
    increaseMonth(val) {
        this.month = ((this.month - 1 + val) % 12) + 1
        this.year += Math.floor((this.month + val) / 12)
        return this.month
    }
    decreaseMonth(val) {
        this.month = ((this.month - (val % 12) + 11) % 12) + 1
        this.year -= Math.floor((this.month + val) / 12)
        return this.month
    }
    increaseYear(val) {
        this.year += val
        return this.year
    }
    decreaseYear(val) {
        this.year -= val
        return this.year
    }
}

let date = new TDate(1, 2, 2023)
date.increaseDay(28)
date.decreaseDay(28)
date.decreaseMonth(22)
date.increaseMonth(22)
date.increaseYear(5)
date.decreaseYear(5)
result1.innerHTML = date