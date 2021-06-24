import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositores"
 


class CreateTagService {
    
    async execute(name: string){

        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name) {
            throw new Error("Nome Incorreto");
        }

        const tagAlreadyExist = await tagsRepositories.findOne({name});

        if(tagAlreadyExist) {
            throw new Error("Tag já existe")
        }

        const tag = tagsRepositories.create({name});

        await tagsRepositories.save(tag);

        return tag;

    }
}

export { CreateTagService };