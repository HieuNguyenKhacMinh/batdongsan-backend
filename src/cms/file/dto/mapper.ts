import { ProductMapper } from "src/cms/product/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { FileEntity } from "src/database.module/entities";
import { FileReqDto } from "./req-dto";
import { FileResDto } from "./res-dto";

export class FileMapper implements IMapperFactory {
    mapReq(entity: FileEntity, req: FileResDto) {
        if (!entity) entity = new FileEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.path = req.path;
        entity.productId = req.product_id;
        return entity;
    }
    mapRes(res:FileResDto, entity: FileEntity) {
        if (!res) res = new FileResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.path = entity.path;
        res.product_id = entity.productId;
        res.productFiles = entity.productFile? new ProductMapper().mapRes(undefined, entity.productFile): undefined;
        res.productVideos = entity.productVideo? new ProductMapper().mapRes(undefined, entity.productVideo): undefined;
        return res;
    }

}