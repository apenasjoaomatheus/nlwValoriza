import { getCustomRepository } from "typeorm";
import  { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async exexute({email, password } : IAuthenticateRequest){ 

        const usersRepository = getCustomRepository(UsersRepositories);

        //Verificando a existencia do user
        const user = await usersRepository.findOne({email});

        //Caso ele não exista
        if (!user) {
            throw new Error("Email/Password Estão incorretos")
        }
        //Comparando a senha
        const passwordMatch = await compare(password, user.password)        
        // Caso esteja errada
        if(!passwordMatch) {
            throw new Error("Email/Password Estão incorretos")
        }

        //Gerando Token

        const token = sign({ email: user.email},"135e2f1056f4bcc98d9a58b40ac36c61", {subject:user.id, expiresIn: "1d"});

        return token;
        
    }


}

export { AuthenticateUserService };