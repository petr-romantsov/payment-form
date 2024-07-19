import { el, mount, setChildren } from "redom";
import Cleave from "cleave.js";
import './main.css';

//функция получения минимально возможной даты для маски 
function getMinDate () { 
    const currentDate = new Date();
    let minMonth = String(currentDate.getMonth() + 2);
    const minYear = String(currentDate.getFullYear()).split('').splice(2, 2).join('');

    if (minMonth < 10) { 
        minMonth = `${0}${minMonth}`;
    }

    const minDate = `${minYear}-${minMonth}`;

    return minDate;
}

export const createPaymentForm = () => {
    //создаем элементы
    const form = el('form.form#form', { novalidate: "novalidate" }),
    wrapperTop = el('div.form__wrapper-top'),
    cardLabel = el('label.form__label.form__label--card', "Номер карты", { for: "card" }),
    cardInput = el('input.form__input#card', { type: "text", required: " ", name: "card", placeholder: 'xxxx xxxx xxxx xxxx' }),
    wrapperBtm = el('div.form__wrapper-btm'),
    dateLabel = el('label.form__label.form__label--date', "Срок действия", { for: "date" }),
    dateInput = el('input.form__input#date', { type: "text", required: " ", name: "date", placeholder: 'мм/гг'}),
    cvvLabel = el('label.form__label.form__label--cvc', "CVC/CVV", { for: "cvv" }),
    cvvInput = el('input.form__input#cvv', { maxLength: "3", onKeyPress: "return event.charCode >= 48 && event.charCode <= 57", required: " ", name: "cvv", placeholder: '000' }),
    emailLabel = el('label.form__label.form__label--email', "Email", { for: "email" }),
    emailInput = el('input.form__input#email', { type: "email", required: " ", name: "email", placeholder: 'example@example.ru' }),
    button = el('button.form__btn.form__btn--disabled#button', "Оплатить", { type: 'submit' });

    //маска для номера карты
    const cardInputMask = new Cleave(cardInput, {
    creditCard: true,
    creditCardStrictMode: true
    });

    //маска для срока действия
    const dateInputMask = new Cleave(dateInput, {
    date: true, 
    dateMin: getMinDate(),
    dateMax: '99-12',
    datePattern: ['m', 'y']
    });

    //монтируем элементы
    mount(cardLabel, cardInput);
    mount(dateLabel, dateInput);
    mount(cvvLabel, cvvInput);
    mount(emailLabel, emailInput);
    mount(wrapperTop, cardLabel);
    setChildren(wrapperBtm, [dateLabel, cvvLabel]);
    setChildren(form, [wrapperTop, wrapperBtm, emailLabel, button]);

    return { 
        form, 
        cardInput,
        dateInput,
        cvvInput,
        emailInput,
    }
}
