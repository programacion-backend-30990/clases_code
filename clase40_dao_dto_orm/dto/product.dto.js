
class ProductDTO {

    constructor(data) {
        this.name = data.name
        this.price = data.price

        for (const currency of Cotizador.currencies) {
            this[currency] = Cotizador.getPriceFromCurrency(this.price, currency)
        }
    }

}

class Cotizador {
    static VALOR_USD = 4000
    static VALOR_EUR = 4300

    static currencies = ['usd', 'eur']

    static getPriceFromCurrency(price, currency) {
        switch (currency) {
            case 'usd':
                return price * Cotizador.VALOR_USD
            case 'eur':
                return price * Cotizador.VALOR_EUR
            default:
                return price
        }
    }
}

module.exports = ProductDTO