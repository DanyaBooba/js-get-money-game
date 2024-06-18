const title = () => {
    document.querySelector('title').textContent = 'JavaScript очень крут!'
}

const updateMoney = () => {
    document.querySelector('.allcash').textContent = `${moneyCount()} ${moneyType()}`
}

const updateButtonMoneyType = () => {
    const price = `<span class="button__price">${moneyPriceAuto()} ${moneyType()}</span>`
    document.querySelector('.button-group button#button-boost').innerHTML = `+ 1 ${moneyType()}/сек. ${price}`
}

const updateAuto = () => {
    const robot = document.querySelector('.body__right .robot')
    if(statusPrice() > 0) robot.innerHTML = `<div>+ ${statusPrice()} ${moneyType()}/сек.</div>`
}

const updateButtonHalf = () => {
    const price = `<span class="button__price">от 100 ${moneyType()}</span>`
    document.querySelector('.button-half').innerHTML = `${price}`
}

const updateGameInfo = () => {
    document.querySelector('#game-info-time').innerHTML = `прошло:<span>${timeValue()} сек.</span>`
    document.querySelector('#game-info-clicks').innerHTML = `кликов:<span>${clickValue()}</span>`
}

const updateGameInfoWhatCanDo = () => {
    document.querySelector('#game-info-whatcando').innerHTML = `за это время можно было:<span>${whatCanDo()}</span>`
}

const updateUI = () => {
    updateMoney()
    updateButtonMoneyType()
    updateAuto()
    updateGameInfo()
}

title()
updateGameInfoWhatCanDo()
