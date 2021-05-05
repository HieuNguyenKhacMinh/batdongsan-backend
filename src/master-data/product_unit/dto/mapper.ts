import { IMapperFactory } from "src/common/interfaces/mapper.interface";;
import { ProductUnitTypeEntity } from "src/database.module/entities/product_unit_type.entity";
import { ProductUnitReqDto } from "./req-dto";
import { ProductUnitResDto } from "./res-dto";

export class ProductUnitMapper implements IMapperFactory {
    mapReq(entity: ProductUnitTypeEntity, req: ProductUnitReqDto) {
        if (!entity) entity = new ProductUnitTypeEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: ProductUnitResDto, entity: ProductUnitTypeEntity) {
        if (!res) res = new ProductUnitResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}