import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import rotas from "./rotas";

const diario = express()
createConnection()

diario.use(bodyParser.json())
diario.use(rotas)

diario.listen(3333)