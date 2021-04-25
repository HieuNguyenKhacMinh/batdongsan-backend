import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { UserEntity } from "src/database.module/entities/User.entity";
import { UserReqDto } from "./req-dto";
import { UserResDto } from "./res-dto";

export class UserMapper implements IMapperFactory {
    mapReq(entity: UserEntity, req: UserReqDto) {
        if (!entity) entity = new UserEntity();
        entity.organizationId = req.organization_id;
        entity.fullName = req.full_name;
        entity.email = req.email;
        entity.birthday = req.birthday;
        entity.gender = req.gender;
        entity.userName = req.user_name;
        entity.password = req.password;
        entity.phoneNumber = req.phone_number;
        return entity;
    }
    mapRes(res: UserResDto, entity: UserEntity) {
        if (!res) res = new UserResDto();
        res.id = entity.id;
        res.organization_id = entity.organizationId;
        res.full_name = entity.fullName;
        res.email = entity.email;
        res.gender = entity.gender;
        res.user_name = entity.userName;
        res.birthday = entity.birthday;
        res.phone_number = res.phone_number;
        res.password = entity.password;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization): undefined;
        return res;
    }

}