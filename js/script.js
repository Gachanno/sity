const button = document.querySelectorAll('.button-show');
const leftSection = document.querySelector('.main-container__left-section');
const text = document.querySelector('.main-container__logo-text')

const accountFlex = document.querySelector('.main-container__account-flex')
const accountName = document.querySelector('.main-container__account-name')
const accountSetting = document.querySelector('.main-container__account-setting')

const friendName = document.querySelectorAll('.main-container__friend-name');

'mouseover mouseout'.split(" ").forEach((e) => {
        leftSection.addEventListener(e, (event) => {
                leftSection.classList.toggle('main-container__left-section--active');
                text.classList.toggle('main-container__logo-text--active');
                accountFlex.classList.toggle('main-container__account-flex--active');
                accountName.classList.toggle('main-container__account-name--active');
                accountSetting.classList.toggle('main-container__account-setting--active');
                friendName.forEach((element) => {
                        element.
                        classList.
                        toggle('main-container__friend-name--active');
                })
        })
});

const fiendSelect = document.querySelector('.main-container__friend-select');
const friendArrow = document.querySelector('.main-container__friend-arrow');
const fiendOptions= document.querySelector('.main-container__friend-options');


fiendSelect.addEventListener('click', (event) => {
        friendArrow.
        classList.
        toggle('main-container__friend-arrow--active');
        fiendOptions.
        classList.
        toggle('main-container__friend-options--active');
})



