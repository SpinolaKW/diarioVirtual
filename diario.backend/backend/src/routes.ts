import { Router, request, response, Request, Response} from 'express'
import {getUsers} from "./controller/UserController";
import {saveUser} from "./controller/UserController";
import {getUser} from "./controller/UserController";
import {updateUser} from "./controller/UserController";
import {deleteUser} from "./controller/UserController";

const routes = Router()

routes.get('/inicio', getUsers)
routes.post('/inicio', saveUser)
routes.get('/inicio/:id', getUser)
routes.put('/inicio/:id', updateUser)
routes.delete('/inicio/:id', deleteUser)





export default routes




