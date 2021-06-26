import { Router } from "express";
import { CreateUserController } from "./src/controller/CreateUserController";
import { CreateTagController } from "./src/controller/CreateTagController"
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./src/controller/AuthenticateUserController";
import { CreateComplimentController } from "./src/controller/CreateComplimentController";
import { ensureAuthenticated } from "./src/middlewares/ensureAuthenticated";




const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentsController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated ,ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle); 
router.post('/compliments',ensureAuthenticated ,complimentsController.handle);

export { router };