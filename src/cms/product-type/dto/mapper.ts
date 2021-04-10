import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProductTypeEntity } from "src/database.module/entities";
import { ProductTypeReqDto } from "./req-dto";
import { ProductTypeResDto } from "./res-dto";

export class ProductTypeMapper implements IMapperFactory {
    mapReq(entity: ProductTypeEntity, req: ProductTypeResDto) {
        if (!entity) entity = new ProductTypeEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: ProductTypeResDto, entity: ProductTypeEntity) {
        if (!res) res = new ProductTypeResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}
