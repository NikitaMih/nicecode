## Technology

1. React;
2. Redux;
3. Axios;
4. Redux Toolkit;
5. Redux-thunk;
6. JSON-server;
7. HTML;
8. SASS;
9. TypeScript;

## Description

Тестовое задание в компанию NiceCode.


- ### Json-server

На порту http://localhost:3001 разворачивается json-server на нем содержится информация о пользователях

## Getting Started

Для запуска проекта необходимо: 

1. Клонировать репозиторий к себе (средствами git или архивом);
    ```
   git clone https://github.com/NikitaMih/tradeinvest.git
    ```
2. Установить взаимосвязи и необходимые библиотеки;
    ```
   npm i
    ```
3. Установить json-server, если ранее не был установлен;
    ```
   npm install -g json-server
    ```
4. Выполнить команду (после выполнения команды, на порту http://localhost:3000 развернется проект);
    ```
   npm start
    ```  
5. Для запуска сервера выполнить скрипт в другом терминале;
    ```
   json-server --watch db.json --port 3001
    ```  
После выполнения на порту http://localhost:3001 развернется json-server.