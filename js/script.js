const button = document.querySelectorAll('.button-show');
const leftSection = document.querySelector('.main-container__left-section');
const text = document.querySelector('.main-container__logo-text')

const accountFlex = document.querySelector('.main-container__account-flex')
const accountName = document.querySelector('.main-container__account-name')
const accountSetting = document.querySelector('.main-container__account-setting')

const friendName = document.querySelectorAll('.main-container__friend-name');
const friendsTitle = document.querySelector('.main-container__friend-title')

const friendArrow = document.querySelector('.main-container__friend-arrow');
const frinedAdd = document.querySelector('.main-container__friend-add');

const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
                if(parseInt(entry.contentRect.width) > 145){
                        text.classList.add('main-container__logo-text--active');
                        accountFlex.classList.add('main-container__account-flex--active');
                        accountName.classList.add('main-container__account-name--active');
                        accountSetting.classList.add('main-container__account-setting--active');
                        friendsTitle.classList.add('main-container__friend-title--active');
                        friendsTitle.classList.add('main-container__friend-title--active');
                        friendArrow.classList.add('main-container__friend-arrow--visibale');
                        frinedAdd.classList.add('main-container__friend-add--active');
                        frinedAdd.classList.remove('main-container__friend-add--active');       

                        friendName.forEach((element) => {
                                element.
                                classList.
                                add('main-container__friend-name--active');
                        })
                }
                else{
                        text.classList.remove('main-container__logo-text--active');
                        accountFlex.classList.remove('main-container__account-flex--active');
                        accountName.classList.remove('main-container__account-name--active');
                        accountSetting.classList.remove('main-container__account-setting--active');
                        friendsTitle.classList.remove('main-container__friend-title--active');
                        friendArrow.classList.remove('main-container__friend-arrow--visibale');
                        frinedAdd.classList.add('main-container__friend-add--active');

                        friendName.forEach((element) => {
                                element.
                                classList.
                                remove('main-container__friend-name--active');
                        })
                }
        }
});
resizeObserver.observe(leftSection);



'mouseover mouseout'.split(" ").forEach((e) => {
        leftSection.addEventListener(e, (event) => {
                // console.log(leftSection.offsetWidth)
                leftSection.classList.toggle('main-container__left-section--active');
                
        })
});

const fiendSelect = document.querySelector('.main-container__friend-select');
const fiendOptions= document.querySelector('.main-container__friend-options');


fiendSelect.addEventListener('click', (event) => {
        friendArrow.
        classList.
        toggle('main-container__friend-arrow--active');
        fiendOptions.
        classList.
        toggle('main-container__friend-options--active');
})



