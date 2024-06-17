let money = +(sessionStorage.getItem('_money') ?? 0);
let type = sessionStorage.getItem('_type') ?? 'руб.';

const moneyCount = () => money

const moneyType = () => type

const moneyAdd = value => {
    money += parseInt(value >= 0 ? value : 0)
    moneySave()
}

const moneySet = value => {
    money = parseInt(value >= 0 ? value : money)
    moneySave()
}

const moneySave = () => sessionStorage.setItem('_money', money)
