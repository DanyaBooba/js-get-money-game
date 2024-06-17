const title = () => {
    document.querySelector('title').textContent = 'JavaScript очень крут!'
}

const updateMoney = () => {
    document.querySelector('.allcash').textContent = `${moneyCount()} ${moneyType()}`
}

const updateButtonMoneyType = () => {
    document.querySelector('.button-group button#button-boost').textContent = `+ 1 ${moneyType()}/сек.`
}

const updateUI = () => {
    updateMoney()
    updateButtonMoneyType()
}

title();
