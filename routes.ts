import { Router } from "express";
import { CreateUserController } from "./src/controller/CreateUserController";
import { CreateTagController } from "./src/controller/CreateTagController"

const router = Router();

const createUserController = new CreateUserController;
const createTagController = new CreateTagController;

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);

export { router };