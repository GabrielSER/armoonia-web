const locale = 'es-CO'

const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
})

class DateFormatter {
    format(date) {
        return date.toLocaleDateString(locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }
}

const dateFormatter = new DateFormatter()

export {
    formatter,
    dateFormatter 
}