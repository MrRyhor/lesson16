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
    companyAge(year, month) {
        return Foundation.howOldOfFirm(foundationDate, year, month)
    }
    getAllBranches() {
        return Branch.getAllBranches(branches)
    }
    getServicesByPrice(price) {
        return Service.getServicesByPrice(price)
    }
    getServicesByDeadline(numDays) {
        return Service.getServicesByDeadline(numDays)
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
    static howOldOfFirm (foundationDate, year, month) {
        let currentMonth = month - foundationDate.Month
        if (currentMonth < 0) return year - foundationDate.Year
        else return year - foundationDate.Year + 1        
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
    static getServicesByPrice(price) {
        let arr = []
        for (let i = 0; i < services.price.length; i++) {
            if (services.price[i] <= price)
            arr.push(services.name[i])                  
        }
        return `[${arr}]`
    }
    static getServicesByDeadline(numDays) {
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
    static getAllBranches(branches){
        return `<p>Countries: <span>${branches.country}</span><br> Cities: <span>${branches.city}</span></p>`
    }
    toString() {
        return `<p>Countries: <span>${this.country}</span><br> Cities: <span>${this.city}</span></p>`
    }
}

let foundationDate = new Foundation(2001, 10)
console.log(foundationDate)
console.log(Foundation.howOldOfFirm(foundationDate,2023, 11))

let services = new Service(['faktoring', 'checking the system', 'consulting'], [250, 550, 400], [14, 16, 7])
console.log(services)

let branches = new Branch(['Poland', 'Ukraine'], ['Warsaw', 'Uzhorod'], ['Pory', 'Shevchenko'], [12, 78])
console.log(branches)

let firma = new Firma('Fool', foundationDate, services, branches)
console.log(firma)
document.write(`<p>1) How old this firm? <span>${firma.companyAge(2023, 11)} years</span></p>`)
document.write(`<p>2) Firm has a branches in: <span>${firma.getAllBranches()}</span></p>`)
document.write(`<p>3) For this price we can offer: <span>${firma.getServicesByPrice(300)}</span></p>`)
document.write(`<p>4) For this deadline we can offer: <span>${firma.getServicesByDeadline(14)}</span></p>`)

