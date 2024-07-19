import { el, setChildren } from 'redom';
import { createPaymentForm } from './createForm';
import "./main.css";
import { cvv } from 'card-validator/dist/cvv';


//создаем страницу с формой
function createPage() { 

    return el('div.container', [
        el('h1.title', "Форма оплаты"), 
        createPaymentForm().form
        ]);
}

//доавляем форму на страницу
setChildren(document.body, createPage());

//переменные для работы с формой 
const form = document.getElementById('form'),
      cardInput = document.getElementById('card'),
      dateInput = document.getElementById('date'),
      cvvInput = document.getElementById('cvv'),
      emailInput = document.getElementById('email'),
      button = document.getElementById('button'),
      //массив инпутов, чтобы не повторять код проверок а использовать forEach
      fields = [cardInput, dateInput, cvvInput, emailInput],
      //валидаторы
      validator = require('card-validator'),
      emailValidator = require('email-validator'),
      //переменные классов
      ERROR_CLASS = 'error',
      SUCCESS_CLASS = 'success',
      DISABLED_BTN = 'form__btn--disabled';

function validateForm () { 
    //на старте проверки делаем кнопку активной
    button.disabled = false;
    button.classList.remove(DISABLED_BTN);

    //создаем массив из пар инпут-валидатор, чтобы дальше сделать проверку циклом
    const validators = [
        [cardInput, validator.number],
        [dateInput, validator.expirationDate],
        [cvvInput, validator.cvv],
        [emailInput, (value) => ({ isValid: emailValidator.validate(value) })],
    ];
    //цикл проверки каждого инпута
    validators.forEach(([input, validate]) => {
        //если поле пустое 
        if (!input.value) { 
            //блокируем кнопку
            button.disabled = true;
            button.classList.add(DISABLED_BTN);
            //прекращаем проверку
            return;
        }
        //если значение некорректное
        if (!validate(input.value).isValid) { 
            //блокируем кнопку
            button.disabled = true;
            button.classList.add(DISABLED_BTN)
            //стилизуем ошибку поля
            input.classList.add(ERROR_CLASS);
        } else { 
            //иначе стилизуем успешное заполнение инпута
            input.classList.add(SUCCESS_CLASS);
        }
    }); 
}
//функция сброса стилей ошибки/успешного заполнения
function resetValidityStyles(event) { 
    (event.target).classList.remove(ERROR_CLASS, SUCCESS_CLASS);
}

fields.forEach((input) => {
    //проверка формы по событию блюр
    input.addEventListener('blur', validateForm);
    //сброс стилей при вводе в любое поле
    input.addEventListener('input', resetValidityStyles);
});

