const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const WebSocket = require("ws");
const http = require("http");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/rooms", roomRoutes);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
        console.log("Received:", message);
        ws.send("Echo: " + message);
    });

    ws.on("close", () => console.log("Client disconnected"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
