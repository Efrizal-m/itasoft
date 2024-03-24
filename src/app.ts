
import http from 'http';
import "reflect-metadata";
import express from "express";
import { db } from "./database/models";
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import SequelizeConnection from "./database/SequelizeConnection";
import router from "./routes/index";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
  await SequelizeConnection.connect();
  db.sequelize.sync()
})();

app.use(router);

const server = http.createServer(app);server.listen(PORT, () => {
  console.log(`⚡️ running at http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  SequelizeConnection.close();
  process.exit();
});