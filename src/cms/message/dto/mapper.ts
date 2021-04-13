import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  MessageEntity } from "src/database.module/entities";
import { MessageReqDto } from "./req-dto";
import { MessageResDto } from "./res-dto";

export class MessageMapper implements IMapperFactory {
    mapReq(entity: MessageEntity, req: MessageReqDto) {
        if (!entity) entity = new MessageEntity();
        entity.contentType = req.content_type;
        entity.forwardId = req.forward_id;
        entity.from = req.from;
        entity.to = req.to;
        return entity;
    }
    mapRes(res:MessageResDto, entity: MessageEntity) {
        if (!res) res = new MessageResDto();
        res.id = entity.id;
        res.content_type = entity.contentType;
        res.forward_id = entity.forwardId;
        res.from = entity.from;
        res.to = entity.to;
        return res;
    }

}