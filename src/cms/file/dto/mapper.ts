import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { FileEntity } from "src/database.module/entities";
import { FileReqDto } from "./req-dto";
import { FileResDto } from "./res-dto";

export class FileMapper implements IMapperFactory {
    mapReq(entity: FileEntity, req: FileResDto) {
        if (!entity) entity = new FileEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:FileResDto, entity: FileEntity) {
        if (!res) res = new FileResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}