import { Request, Response } from "express";
import { ListUSerSendeComplimentsService } from "../services/ListUserSendeComplimentsService";




class ListUSerSendeComplimentsController {

    async handle(request: Request, response: Response) {


        const { user_id } = request;


        const listUSerSendeComplimentsService = new ListUSerSendeComplimentsService();

        const compliments = await listUSerSendeComplimentsService.execute(user_id);

        return response.json(compliments);

    }

}

export { ListUSerSendeComplimentsController };