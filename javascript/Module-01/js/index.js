﻿"use strict";

/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const CANCELED_MESSAGE = 'Отменено пользователем!';
const WELCOME_MESSAGE = 'Добро пожаловать!';
const ACCES_DENITED_MESSAGE = 'Доступ запрещен!';


const enterUserLogin = prompt('введите логин');

if (enterUserLogin === adminLogin) {

    const enterUserPass = prompt('введите пароль')

    if (enterUserPass === adminPassword) {
        alert(WELCOME_MESSAGE);

    }else if (enterUserPass === null) {
        alert(CANCELED_MESSAGE);

    } else {
        alert(ACCES_DENITED_MESSAGE);
    }; 
}else if (enterUserLogin === null) {
    alert(CANCELED_MESSAGE);

} else {
    alert(ACCES_DENITED_MESSAGE);
};


/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/



const sharm = 15;
const hurgada = 25;
const taba = 6;
let userGroupSelection;


const enerGroup = prompt('Введите число необходимых мест');
const integer = Number(enerGroup);
const invalidInput = enerGroup !== null && !Number.isNaN(enerGroup);

if (invalidInput) {

    if (integer > 25 || integer <= 0) {
        alert("Извение, мест нет. Максимальное количество мест - 25!");
    } else {

        if (integer <= taba) {
            userGroupSelection = confirm('Вы согласны быть в группе \'taba\' ?');
        };
        if (userGroupSelection) {
            alert('Приятного путешествия в группе \'taba\'');
        } else {

            if (integer <= sharm) {
                userGroupSelection = confirm('Вы согласны быть в группе \'sharm\' ?');
            };
            if (userGroupSelection) {
                alert('Приятного путешествия в группе \'sharm\'');
            } else {

                if (integer <= hurgada) {
                    userGroupSelection = confirm('Вы согласны быть в группе \'hurgada\' ?');
                };
                if (userGroupSelection) {
                    alert('Приятного путешествия в группе \'hurgada\'');
                } else {
                    alert("Нам очень жаль, приходите еще!");
                };
            }

        }
    }
} else {
    alert("Ошибка ввода");
};