import { Router } from "express";
import { CreateUserController } from "./src/controller/CreateUserController";
import { CreateTagController } from "./src/controller/CreateTagController"
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./src/controller/AuthenticateUserController";
import { CreateComplimentController } from "./src/controller/CreateComplimentController";
import { ensureAuthenticated } from "./src/middlewares/ensureAuthenticated";
import { ListUSerReceiveComplimentsController } from "./src/controller/ListUSerReceiveComplimentsController";
import { ListUSerSendeComplimentsController } from "./src/controller/ListUSerSendeComplimentsController";
import { ListTagsController } from "./src/controller/ListTagsControllers";
import { ListUserController } from "./src/controller/ListUserController";




const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentsController = new CreateComplimentController();
const listUSerReceiveComplimentsController = new ListUSerReceiveComplimentsController();
const listUSerSendeComplimentsController = new ListUSerSendeComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated ,ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle); 
router.post('/compliments',ensureAuthenticated ,complimentsController.handle);


router.get('/users/compliments/send', ensureAuthenticated ,listUSerSendeComplimentsController.handle )
router.get('/users/compliments/receive', ensureAuthenticated ,listUSerReceiveComplimentsController.handle )
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUserController.handle);

export { router };