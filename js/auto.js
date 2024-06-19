const checkAuto = () => {
    moneyAdd(parseInt(sessionStorage.getItem('_auto') ?? 0))
    updateUI()
}
