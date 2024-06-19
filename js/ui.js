const title = () => {
    document.querySelector('title').textContent = 'JavaScript очень крут!'
}

const updateTextButtons = () => {
    document.querySelector('#button-half').innerHTML = `50% шанс<span class="button__price">от 100 руб.</span>`
    document.querySelector('#button-add').innerHTML = `+ деньги`
}

const updateMoney = () => {
    document.querySelector('.allcash').textContent = `${moneyCount()} ${moneyType()}`
}

const updateButtonMoneyType = () => {
    const price = `<span class="button__price">${moneyPriceAuto()} ${moneyType()}</span>`
    document.querySelector('#button-boost').innerHTML = `прокачка ${price}`
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

const updateAuto = () => {
    const robot = document.querySelector('.body__right .robot')
    if(statusPrice() > 0) robot.innerHTML = `<div>+ ${statusPrice()} ${moneyType()}/сек.</div>`
}

const updateUI = () => {
    updateMoney()
    updateButtonMoneyType()
    updateAuto()
    updateGameInfo()
}

const onceUpdateUI = () => {
    title()
    updateUI()
    updateGameInfoWhatCanDo()
    updateTextButtons()
}
