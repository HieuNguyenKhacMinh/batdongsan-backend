import { resolveSoa } from "dns";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { UserEntity } from "src/database.module/entities/User.entity";
import { UserReqDto } from "./req-dto";
import { UserResDto } from "./res-dto";

export class UserMapper implements IMapperFactory {
    mapReq(entity: UserEntity, req: UserReqDto) {
        if (!entity) entity = new UserEntity();
        entity.full_name= req.full_name;
        entity.email = req.email;
        entity.gender = req.gender;
        entity.user_name= req.user_name;
        entity.password= req.password;
        entity.phone_number = req.phone_number;
        return entity;
    }
    mapRes(res:UserResDto, entity: UserEntity) {
        if (!res) res = new UserResDto();
        res.id= entity.id;
       res.full_name = entity.full_name;
       res.email = entity.full_name;
       res.gender = entity.gender;
       res.user_name = entity.user_name;
       res.password = entity.password;
       res.phone_number = res.phone_number;
        return res;
    }

}