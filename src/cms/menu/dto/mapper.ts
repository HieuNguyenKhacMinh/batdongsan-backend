import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { MenuEntity } from "src/database.module/entities";
import { MenuReqDto } from "./req-dto";
import { MenuResDto } from "./res-dto";

export class MenuMapper implements IMapperFactory {
    mapReq(entity: MenuEntity, req: MenuReqDto) {
        if (!entity) entity = new MenuEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.parentId = req.parent_id;
        return entity;
    }
    mapRes(res: MenuResDto, entity: MenuEntity) {
        if (!res) res = new MenuResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.children = entity.children ? entity.children.map(c => new MenuMapper().mapRes(undefined, c)) : undefined;
        return res;
    }

}
