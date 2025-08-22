import moment from "moment";

/**
 *
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

/**
 *
 * @param{string} fullname
 * @returns {string} L'assemblage de la première lettre des deux premiers mots
 */
export function getInitials(fullname) {
    if(!fullname) return ""
    const words = fullname.split(" ")
    let initials = ""

    for(let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i].charAt(0)
    }
    return initials.toUpperCase()
}

/**
 *
 * @param{number} number
 *
 */
export function formatNumber(number) {
    try {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "XOF"
        }).format(number);
    } catch (error) {
        console.warn('Formatting error:', error);
        return `${number} FCFA`; // Fallback simple
    }

}

/**
 *
 * @param {[]} data
 * @param order
 * @returns {{amount: *, category: *}[]}
 */
export function normalizeData(data=[], order="desc"){
    const result = []

    for(const item of data) {
        const day = moment(item.date).date()
        const existingDay = result.find(item => item.day === day)

        if(existingDay) {
            existingDay.amount += item.amount
            existingDay.nb +=1
        } else {
            result.push({
                amount: item.amount,
                day: day,
                uniqueDate: order === "asc" ? moment(item?.date).locale('fr').format("Do MM YYYY") : moment(item?.date).locale('fr').format("Do MM YYYY"),
                category: item.category,
                nb: 1
            })
        }
    }

    return order === "asc" ? result.sort((a, b) => a.day - b.day) : result.sort((a, b) => b.day - a.day)
}

export function prepareIncomedata(data= []) {

    return data.map((item, index) =>({
        date: moment(item?.date).locale('fr').format("Do MM YYYY"),
        uniqueDate: `${moment(item?.date).locale('fr').format("Do MM YYYY")}_${index}`,
        category: item?.source,
        amount: item.amount
    }))

}

