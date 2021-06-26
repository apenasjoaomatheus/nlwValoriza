import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"


interface iPayload {
    sub: string;
}

export function ensureAuthenticated(request:Request, response:Response, next: NextFunction) {

    // Receber o Token
    const authToken = request.headers.authorization

    //Caso o não venha o token
    if(!authToken) {
        return response.status(401).json({message: "O token está ausente"});
    }

    //Pegando o token, separando em duas partes e pegando apenas a segunda posição do Array e salvando na variavel token
    const [,token] = authToken.split(" ")

    // Validar se o token é valido
    try {
        const { sub } = verify(token, "135e2f1056f4bcc98d9a58b40ac36c61") as iPayload;

        
        // Recuperar informações do usuario
        request.user_id = sub;

        return next();
    }catch(err)
    {
        return response.status(401).json({message: "Token Invalido"})
    }









}