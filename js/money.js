let money = +(sessionStorage.getItem('_money') ?? 0)
let type = sessionStorage.getItem('_type') ?? 'руб.'
let priceAutoIndex = +(sessionStorage.getItem('_auto') ?? 0)
let priceAutoList = [
    100,
    200,
    300
]
let priceAuto = priceAutoList[priceAutoIndex % priceAutoList.length]

const moneyCount = () => money

const moneyType = () => type

const moneyAdd = value => {
    money += parseInt(value >= 0 ? value : 0)
    moneySave()
}

const moneyBuy = value => {
    money -= parseInt(value <= money ? value : 0)
    moneySave()
}

const moneySet = value => {
    money = parseInt(value >= 0 ? value : money)
    moneySave()
}

const moneySave = () => sessionStorage.setItem('_money', money)

const moneyPriceAuto = () => {
    priceAuto = priceAutoList[priceAutoIndex % priceAutoList.length]
    return priceAuto
}

const statusPrice = () => priceAutoIndex

const priceAdd = () => {
    priceAutoIndex += 1
    priceSave()
}

const priceSave = () => sessionStorage.setItem('_auto', priceAutoIndex)
