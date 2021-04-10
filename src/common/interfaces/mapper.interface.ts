export interface IMapperFactory {
    mapReq( entity, req);
    mapRes(res, entity);
}