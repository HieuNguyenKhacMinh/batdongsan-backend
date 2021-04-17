import { FormalityMapper } from "src/cms/formality/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProductTypeEntity } from "src/database.module/entities";
import { ProductTypeReqDto } from "./req-dto";
import { ProductTypeResDto } from "./res-dto";

export class ProductTypeMapper implements IMapperFactory {
    mapReq(entity: ProductTypeEntity, req: ProductTypeResDto) {
        if (!entity) entity = new ProductTypeEntity();
        entity.name = req.name;
        entity.order = req.order;
        entity.description = req.description;
        entity.formalityId = req.formality_id;
        return entity;
    }
    mapRes(res: ProductTypeResDto, entity: ProductTypeEntity) {
        if (!res) res = new ProductTypeResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.order = entity.order;
        res.description = entity.description;
        res.formality_id = entity.formalityId;
        res.formality = entity.formality? new FormalityMapper().mapRes(undefined, entity.formality): undefined;
        return res;
    }

}
