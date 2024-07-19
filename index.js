require("./index.css");
var $bK9Ag$redom = require("redom");
require("card-validator/dist/cvv");
var $bK9Ag$cardvalidator = require("card-validator");
var $bK9Ag$emailvalidator = require("email-validator");
var $bK9Ag$cleavejs = require("cleave.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




//функция получения минимально возможной даты для маски 
function $f400c6fb85ff8e3e$var$getMinDate() {
    const currentDate = new Date();
    let minMonth = String(currentDate.getMonth() + 2);
    const minYear = String(currentDate.getFullYear()).split("").splice(2, 2).join("");
    if (minMonth < 10) minMonth = `${0}${minMonth}`;
    const minDate = `${minYear}-${minMonth}`;
    return minDate;
}
const $f400c6fb85ff8e3e$export$8414c4fc75b68556 = ()=>{
    //создаем элементы
    const form = (0, $bK9Ag$redom.el)("form.form#form", {
        novalidate: "novalidate"
    }), wrapperTop = (0, $bK9Ag$redom.el)("div.form__wrapper-top"), cardLabel = (0, $bK9Ag$redom.el)("label.form__label.form__label--card", "\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B", {
        for: "card"
    }), cardInput = (0, $bK9Ag$redom.el)("input.form__input#card", {
        type: "text",
        required: " ",
        name: "card",
        placeholder: "xxxx xxxx xxxx xxxx"
    }), wrapperBtm = (0, $bK9Ag$redom.el)("div.form__wrapper-btm"), dateLabel = (0, $bK9Ag$redom.el)("label.form__label.form__label--date", "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F", {
        for: "date"
    }), dateInput = (0, $bK9Ag$redom.el)("input.form__input#date", {
        type: "text",
        required: " ",
        name: "date",
        placeholder: "\u043C\u043C/\u0433\u0433"
    }), cvvLabel = (0, $bK9Ag$redom.el)("label.form__label.form__label--cvc", "CVC/CVV", {
        for: "cvv"
    }), cvvInput = (0, $bK9Ag$redom.el)("input.form__input#cvv", {
        maxLength: "3",
        onKeyPress: "return event.charCode >= 48 && event.charCode <= 57",
        required: " ",
        name: "cvv",
        placeholder: "000"
    }), emailLabel = (0, $bK9Ag$redom.el)("label.form__label.form__label--email", "Email", {
        for: "email"
    }), emailInput = (0, $bK9Ag$redom.el)("input.form__input#email", {
        type: "email",
        required: " ",
        name: "email",
        placeholder: "example@example.ru"
    }), button = (0, $bK9Ag$redom.el)("button.form__btn.form__btn--disabled#button", "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C", {
        type: "submit"
    });
    //маска для номера карты
    const cardInputMask = new (0, ($parcel$interopDefault($bK9Ag$cleavejs)))(cardInput, {
        creditCard: true,
        creditCardStrictMode: true
    });
    //маска для срока действия
    const dateInputMask = new (0, ($parcel$interopDefault($bK9Ag$cleavejs)))(dateInput, {
        date: true,
        dateMin: $f400c6fb85ff8e3e$var$getMinDate(),
        dateMax: "99-12",
        datePattern: [
            "m",
            "y"
        ]
    });
    //монтируем элементы
    (0, $bK9Ag$redom.mount)(cardLabel, cardInput);
    (0, $bK9Ag$redom.mount)(dateLabel, dateInput);
    (0, $bK9Ag$redom.mount)(cvvLabel, cvvInput);
    (0, $bK9Ag$redom.mount)(emailLabel, emailInput);
    (0, $bK9Ag$redom.mount)(wrapperTop, cardLabel);
    (0, $bK9Ag$redom.setChildren)(wrapperBtm, [
        dateLabel,
        cvvLabel
    ]);
    (0, $bK9Ag$redom.setChildren)(form, [
        wrapperTop,
        wrapperBtm,
        emailLabel,
        button
    ]);
    return {
        form: form,
        cardInput: cardInput,
        dateInput: dateInput,
        cvvInput: cvvInput,
        emailInput: emailInput
    };
};




//создаем страницу с формой
function $b3d6934d5db6250a$var$createPage() {
    return (0, $bK9Ag$redom.el)("div.container", [
        (0, $bK9Ag$redom.el)("h1.title", "\u0424\u043E\u0440\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B"),
        (0, $f400c6fb85ff8e3e$export$8414c4fc75b68556)().form
    ]);
}
//доавляем форму на страницу
(0, $bK9Ag$redom.setChildren)(document.body, $b3d6934d5db6250a$var$createPage());
//переменные для работы с формой 
const $b3d6934d5db6250a$var$form = document.getElementById("form"), $b3d6934d5db6250a$var$cardInput = document.getElementById("card"), $b3d6934d5db6250a$var$dateInput = document.getElementById("date"), $b3d6934d5db6250a$var$cvvInput = document.getElementById("cvv"), $b3d6934d5db6250a$var$emailInput = document.getElementById("email"), $b3d6934d5db6250a$var$button = document.getElementById("button"), //массив инпутов, чтобы не повторять код проверок а использовать forEach
$b3d6934d5db6250a$var$fields = [
    $b3d6934d5db6250a$var$cardInput,
    $b3d6934d5db6250a$var$dateInput,
    $b3d6934d5db6250a$var$cvvInput,
    $b3d6934d5db6250a$var$emailInput
];


const //переменные классов
$b3d6934d5db6250a$var$ERROR_CLASS = "error", $b3d6934d5db6250a$var$SUCCESS_CLASS = "success", $b3d6934d5db6250a$var$DISABLED_BTN = "form__btn--disabled";
function $b3d6934d5db6250a$var$validateForm() {
    //на старте проверки делаем кнопку активной
    $b3d6934d5db6250a$var$button.disabled = false;
    $b3d6934d5db6250a$var$button.classList.remove($b3d6934d5db6250a$var$DISABLED_BTN);
    //создаем массив из пар инпут-валидатор, чтобы дальше сделать проверку циклом
    const validators = [
        [
            $b3d6934d5db6250a$var$cardInput,
            $bK9Ag$cardvalidator.number
        ],
        [
            $b3d6934d5db6250a$var$dateInput,
            $bK9Ag$cardvalidator.expirationDate
        ],
        [
            $b3d6934d5db6250a$var$cvvInput,
            $bK9Ag$cardvalidator.cvv
        ],
        [
            $b3d6934d5db6250a$var$emailInput,
            (value)=>({
                    isValid: $bK9Ag$emailvalidator.validate(value)
                })
        ]
    ];
    //цикл проверки каждого инпута
    validators.forEach(([input, validate])=>{
        //если поле пустое 
        if (!input.value) {
            //блокируем кнопку
            $b3d6934d5db6250a$var$button.disabled = true;
            $b3d6934d5db6250a$var$button.classList.add($b3d6934d5db6250a$var$DISABLED_BTN);
            //прекращаем проверку
            return;
        }
        //если значение некорректное
        if (!validate(input.value).isValid) {
            //блокируем кнопку
            $b3d6934d5db6250a$var$button.disabled = true;
            $b3d6934d5db6250a$var$button.classList.add($b3d6934d5db6250a$var$DISABLED_BTN);
            //стилизуем ошибку поля
            input.classList.add($b3d6934d5db6250a$var$ERROR_CLASS);
        } else //иначе стилизуем успешное заполнение инпута
        input.classList.add($b3d6934d5db6250a$var$SUCCESS_CLASS);
    });
}
//функция сброса стилей ошибки/успешного заполнения
function $b3d6934d5db6250a$var$resetValidityStyles(event) {
    event.target.classList.remove($b3d6934d5db6250a$var$ERROR_CLASS, $b3d6934d5db6250a$var$SUCCESS_CLASS);
}
$b3d6934d5db6250a$var$fields.forEach((input)=>{
    //проверка формы по событию блюр
    input.addEventListener("blur", $b3d6934d5db6250a$var$validateForm);
    //сброс стилей при вводе в любое поле
    input.addEventListener("input", $b3d6934d5db6250a$var$resetValidityStyles);
});


//# sourceMappingURL=index.js.map
