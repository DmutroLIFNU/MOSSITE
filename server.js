const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(bodyParser.json());

// Приклад даних товарів
let products = [
    { id: 1, name: "Стіл дерев'яний", price: 2500, image: "table.jpg" },
    { id: 2, name: "Диван шкіряний", price: 12000, image: "sofa.jpg" }
];

let orders = [];

// API для отримання товарів
app.get("/products", (req, res) => {
    res.json(products);
});

// API для створення замовлення
app.post("/order", (req, res) => {
    const { name, phone, productId } = req.body;
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(400).json({ message: "Товар не знайдено" });
    }

    const order = { id: orders.length + 1, name, phone, product };
    orders.push(order);

    // Надсилання повідомлення в Telegram-бот
    const TELEGRAM_BOT_TOKEN = "ВАШ_ТОКЕН";
    const CHAT_ID = "ВАШ_CHAT_ID";
    const message = `🛒 Нове замовлення!\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n🪑 Товар: ${product.name} - ${product.price} грн`;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message
    });

    res.json({ message: "Замовлення прийнято", order });
});

app.listen(5000, () => {
    console.log("Сервер працює на http://localhost:5000");
});
