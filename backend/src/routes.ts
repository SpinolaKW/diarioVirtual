import { Router, request, response, Request, Response} from 'express'
import {getUsers} from "./controller/UserController";
import {saveUser} from "./controller/UserController";
import {getUser} from "./controller/UserController";
import {updateUser} from "./controller/UserController";
import {deleteUser} from "./controller/UserController";

const routes = Router()

routes.get('/diario', getUsers)
routes.post('/diario', saveUser)
routes.get('/diario/:id', getUser)
routes.put('/diario/:id', updateUser)
routes.delete('/diario/:id', deleteUser)





export default routes




