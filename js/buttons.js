const random = () => parseInt(Math.random() * 100 >= 90)

const buttonHalf = () => {
    if (moneyCount() < 100) {
        alert(`Необходимо как минимум 100 ${moneyType()}`)
    } else {
        console.log(random())
        moneySet(random() ? moneyCount() * 2 : +(moneyCount() / 2))
    }
}

const buttonAdd = () => moneyAdd(1)

const buttonBoost = () => console.log('add')

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
