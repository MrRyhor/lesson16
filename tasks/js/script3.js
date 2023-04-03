class Firma {
    #name
    constructor(initName, foundationDate, services, branches) {
        this.Name = initName
        this.date = foundationDate
        this.services = services
        this.branches = branches
    }
    get Name() {
        return this.#name
    }
    set Name(name) {
        if (name.length === 0)
            throw new Error('Value is incorrect')
        return this.#name = name
    }
    toString() {
        return `<p>${this.Name}:<br> Services: ${this.services}</p>`

    }
    //==================== Методы ===================================================
    howOldOfFirm(year, month) {
        let currentMonth = month - this.date.Month
        if (currentMonth < 0) return year - this.date.Year
        else return year - this.date.Year + 1
    }
    getAllBranches() {
        return branches 
    }
    getServicesByPrice(price) {
        return services.getServicesByPrice(price)
    }
    getServicesByDeadline(numDays) {
        return services.getServicesByDeadline(numDays)
    }    
}

class Foundation {
    #year
    #month
    constructor(initYear, initMonth) {
        this.Year = initYear
        this.Month = initMonth
    }
    get Year() {
        return this.#year
    }
    set Year(val) {
        if (val.length === 0)
            throw new Error('Value is incorrect')
        this.#year = val
    }
    get Month() {
        return this.#month
    }
    set Month(val) {
        if (val < 1 || val > 12)
            throw new Error('Value is incorrect')
        this.#month = val
    }
    toString() {
        return `<p>${this.Year} / ${this.Month}</p>`
    }
}

class Service {
    constructor(initName, initPrice, initDeadline) {
        this.name = initName
        this.price = initPrice
        this.deadlineInDays = initDeadline
    }
    toString() {
        return `<p>Name :${this.name} - ${this.price} - Deadline:${this.deadline}</p>`
    }
    //================== Методы ========================================================
    getServicesByPrice(price) {
        let arr = []
        for (let i = 0; i < services.price.length; i++) {
            if (services.price[i] <= price)
            arr.push(services.name[i])                  
        }
        return `[${arr}]`
    }
    getServicesByDeadline(numDays) {
        let arr = []
        for (let i = 0; i < services.deadlineInDays.length; i++) {
            if (services.deadlineInDays[i] <= numDays)
            arr.push(services.name[i])
        }
        return `[${arr}]`
    }
}

class Branch {
    constructor(country, city, street, build) {
        this.country = country
        this.city = city
        this.street = street
        this.building = build
    }
    toString() {
        return `<p>Countries: <span>${this.country}</span><br> Cities: <span>${this.city}</span></p>`
    }
}

let foundationDate = new Foundation(2001, 10)
console.log(foundationDate)

let services = new Service(['faktoring', 'checking the system', 'consulting'], [250, 550, 400], [14, 16, 7])
console.log(services)
//console.log(services.getServicesByPrice(100))
//console.log(services.getServicesByDeadline(14))

let branches = new Branch(['Poland', 'Ukraine'], ['Warsaw', 'Uzhorod'], ['Pory', 'Shevchenko'], [12, 78])
console.log(branches)

let firma = new Firma('Fool', foundationDate, services, branches)
console.log(firma)
document.write(`<p>1) How old this firm? <span>${firma.howOldOfFirm(2023, 11)} years</span></p>`)
document.write(`<p>2) Firm has a branches in: <span>${firma.getAllBranches()}</span></p>`)
document.write(`<p>3) For this price we can offer: <span>${firma.getServicesByPrice(300)}</span></p>`)
document.write(`<p>4) For this deadline we can offer: <span>${firma.getServicesByDeadline(14)}</span></p>`)

