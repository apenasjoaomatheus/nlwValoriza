import { Request, Response } from "express";
import { ListUSerReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";




class ListUSerReceiveComplimentsController {

    async handle(request: Request, response: Response) {


        const { user_id } = request;


        const listUSerReceiveComplimentsService = new ListUSerReceiveComplimentsService();

        const compliments = await listUSerReceiveComplimentsService.execute(user_id)

        return response.json(compliments);

    }

}

export { ListUSerReceiveComplimentsController };