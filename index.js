import express from 'express';
import axios from 'axios'
// const express = require('express');

// const axios = require('axios')

const app = express();
const PORT = 4000;
app.use(express.json());

let data = [
    {
        id: 1,
        title: "admin01",
        description: "Vfrcvfrc123!45!"
    },

];

// Middleware для установки CORS заголовков
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Опциональный запрос для CORS
app.options('/', (req, res) => {
    res.sendStatus(200);
});

// Получение данных пользователей
app.get('/', (req, res) => {
    axios.get(`https://api.telegram.org/bot7125919808:AAEPlAJ_5kJWNqjf85ZwXu15HoUXiOYIl90/sendMessage?chat_id=1202194185&text=sosi-penis!`)
    res.json(data);
});

// Добавление нового пользователя
app.post('/', (req, res) => {
    const {title, description} = req.body;
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    data.push({id, title, description});
    res.json(data);
});

// Удаление пользователя по ID
app.delete('/', (req, res) => {
    const {id} = req.query;
    data = data.filter(item => item.id !== parseInt(id));
    res.json(data);
});

// Обновление информации о пользователе по ID
app.put('/', (req, res) => {
    const {id, title, description} = req.body;
    data = data.map(item => (item.id === parseInt(id) ? {id, title, description} : item));
    res.json(data);
});

// Получение данных о футбольных событиях

// Запуск сервера
app.listen(PORT, () => {
    console.log('Сервер запущен');
});