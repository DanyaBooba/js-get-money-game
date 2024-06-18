const random = () => parseInt(Math.random() * 100 >= 90)

const buttonHalf = () => {
    if (moneyCount() < 100) {
        alert(`Необходимо как минимум 100 ${moneyType()}`)
    } else {
        moneySet(random() ? moneyCount() * 2 : +(moneyCount() / 2))
    }
}

const buttonAdd = () => moneyAdd(1)

const buttonBoost = () => {
    let money = moneyCount()
    let price = moneyPriceAuto()
    if (money - price >= 0) {
        moneyBuy(price)
        priceAdd()
    } else {
        console.log('no money')
    }
}

const buttonsSetFunc = () => {
    document.querySelector('button#button-half').onclick = () => {
        buttonHalf()
        updateUI()
    };
    document.querySelector('button#button-add').onclick = () => {
        buttonAdd()
        updateUI()
    };
    document.querySelector('button#button-boost').onclick = () => {
        buttonBoost()
        updateUI()
    };
}
