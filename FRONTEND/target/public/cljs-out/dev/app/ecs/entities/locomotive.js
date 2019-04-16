// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ecs.entities.locomotive');
goog.require('cljs.core');
goog.require('gamebase.ecs');
goog.require('gamebase.systems.drawing');
goog.require('gamebase.systems.movement');
goog.require('gamebase.event_queue');
goog.require('gamebase.geometry');
goog.require('app.tiles.general');
goog.require('gamebase.layers');
goog.require('app.world_interop');
goog.require('app.state');
goog.require('app.ecs.common_events');
app.ecs.entities.locomotive.mk_entity = (function app$ecs$entities$locomotive$mk_entity(id,tile_x,tile_y){
var entity = gamebase.ecs.mk_entity.call(null,id,new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705));
return cljs.core.assoc.call(null,entity,new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"move","move",-2110884309),gamebase.systems.movement.mk_path_follower.call(null,entity,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863),(10)], null)),new cljs.core.Keyword(null,"img","img",1442687358),gamebase.systems.drawing.mk_static_image_component.call(null,entity,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),gamebase.ecs.ck_kvs.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),gamebase.ecs.ck_kvs.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"angle","angle",1622094254)),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(8)], null),new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096)], null)], null)),new cljs.core.Keyword(null,"debug-path","debug-path",415953161),gamebase.systems.drawing.mk_path_component.call(null,entity,new cljs.core.Keyword(null,"debug-path","debug-path",415953161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342),gamebase.ecs.ck_kvs.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"path","path",-188191168)),new cljs.core.Keyword(null,"color","color",1011675173),"magenta"], null)),new cljs.core.Keyword(null,"debug-path-history","debug-path-history",1737542801),gamebase.systems.drawing.mk_path_history_component.call(null,entity,new cljs.core.Keyword(null,"debug-path-history","debug-path-history",1737542801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496),gamebase.ecs.ck_kvs.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"path-history","path-history",1133440586)),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null))], null),new cljs.core.Keyword(null,"tile-x","tile-x",1338121882),tile_x,new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706),tile_y,new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,tile_y,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)], null),new cljs.core.Keyword(null,"front-coupling","front-coupling",2000992378),null,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524),null,new cljs.core.Keyword(null,"image","image",-58725096),"loco1.png");
});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705),new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660)], null),(function (world,event,this$){
cljs.core.println.call(null,"LOCOMOTIVE INIT");

return cljs.core.assoc.call(null,gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("gamebase.systems.movement","set-path","gamebase.systems.movement/set-path",-1213286642),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"path","path",-188191168),app.tiles.general.track_path.call(null,new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"tile-x","tile-x",1338121882).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706).cljs$core$IFn$_invoke$arity$1(this$)));
}));
app.ecs.entities.locomotive._get_layer = (function app$ecs$entities$locomotive$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__40404_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__40404_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.ecs.entities.locomotive._put_to_history = (function app$ecs$entities$locomotive$_put_to_history(history,tile_x,tile_y,track){
var history_SINGLEQUOTE_ = (((cljs.core.count.call(null,history) >= (2)))?cljs.core.apply.call(null,cljs.core.vector,cljs.core.rest.call(null,history)):history);
return cljs.core.into.call(null,history_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,tile_y,track], null)], null));
});
app.ecs.entities.locomotive._history_to_map = (function app$ecs$entities$locomotive$_history_to_map(history){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__40405){
var vec__40406 = p__40405;
var tx = cljs.core.nth.call(null,vec__40406,(0),null);
var ty = cljs.core.nth.call(null,vec__40406,(1),null);
var track = cljs.core.nth.call(null,vec__40406,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null),track], null);
}),history));
});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705),new cljs.core.Keyword("gamebase.systems.movement","at-path-end","gamebase.systems.movement/at-path-end",379756653)], null),(function (world,event,this$){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)));
var map__40409 = this$;
var map__40409__$1 = ((((!((map__40409 == null)))?(((((map__40409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40409):map__40409);
var track = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"track","track",195787487));
var tile_x = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"tile-x","tile-x",1338121882));
var tile_y = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706));
var vec__40410 = app.tiles.general.track_destination_tile.call(null,track,tile_x,tile_y);
var new_tile_x = cljs.core.nth.call(null,vec__40410,(0),null);
var new_tile_y = cljs.core.nth.call(null,vec__40410,(1),null);
var layer = app.ecs.entities.locomotive._get_layer.call(null,world,new cljs.core.Keyword(null,"foreground","foreground",499022036));
var tile_context = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var new_tile = gamebase.layers.get_tile_from_layer.call(null,layer,new_tile_x,new_tile_y);
var info = gamebase.layers.get_tile_info_from_layer.call(null,tile_context,layer,new_tile_x,new_tile_y);
var extra = app.state.get_tile_extra.call(null,new_tile_x,new_tile_y);
var vec__40413 = new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(this$);
var _ = cljs.core.nth.call(null,vec__40413,(0),null);
var tile_end = cljs.core.nth.call(null,vec__40413,(1),null);
var new_tile_start = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null).call(null,tile_end);
var possible_new_tracks = app.tiles.general.active_tracks_from.call(null,new_tile_start,new_tile_x,new_tile_y,info,extra);
var new_track = cljs.core.first.call(null,possible_new_tracks);
console.log(cljs.core.pr_str.call(null,new_tile));

if(cljs.core.truth_(new_track)){
var new_path = app.tiles.general.track_path.call(null,new_track,new_tile_x,new_tile_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"tile-x","tile-x",1338121882),new_tile_x,new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706),new_tile_y,new cljs.core.Keyword(null,"track","track",195787487),new_track,new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777),app.ecs.entities.locomotive._put_to_history.call(null,new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777).cljs$core$IFn$_invoke$arity$1(this$),new_tile_x,new_tile_y,new_track)),cljs.core.assoc.call(null,gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("gamebase.systems.movement","set-path","gamebase.systems.movement/set-path",-1213286642),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"path","path",-188191168),new_path)], null);
} else {
console.log("NO NEW TRACK!!!");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamebase.ecs.mk_event.call(null,this$,new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event))], null);
}
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785)], null),(function (world,event,p__40417){
var map__40418 = p__40417;
var map__40418__$1 = ((((!((map__40418 == null)))?(((((map__40418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40418):map__40418);
var this$ = map__40418__$1;
var rear_coupling = cljs.core.get.call(null,map__40418__$1,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524));
console.log("LOC GOT STOP, sending to ",rear_coupling);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),(cljs.core.truth_(rear_coupling)?gamebase.ecs.mk_event.call(null,gamebase.ecs.to_entity.call(null,rear_coupling),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)):null)], null);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491)], null),(function (world,event,p__40420){
var map__40421 = p__40420;
var map__40421__$1 = ((((!((map__40421 == null)))?(((((map__40421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40421):map__40421);
var this$ = map__40421__$1;
var rear_coupling = cljs.core.get.call(null,map__40421__$1,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),(cljs.core.truth_(rear_coupling)?gamebase.ecs.mk_event.call(null,gamebase.ecs.to_entity.call(null,rear_coupling),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)):null)], null);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705),new cljs.core.Keyword("app.ecs.entities.locomotive","couple-rear","app.ecs.entities.locomotive/couple-rear",884965625)], null),(function (world,p__40423,this$){
var map__40424 = p__40423;
var map__40424__$1 = ((((!((map__40424 == null)))?(((((map__40424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40424):map__40424);
var event = map__40424__$1;
var the_other_id = cljs.core.get.call(null,map__40424__$1,new cljs.core.Keyword(null,"the-other-id","the-other-id",-1798540769));
var the_other = gamebase.ecs.get_entity_by_key.call(null,world,the_other_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524),the_other_id),cljs.core.assoc.call(null,the_other,new cljs.core.Keyword(null,"front-coupling","front-coupling",2000992378),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(this$))], null);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"image","image",-58725096),(cljs.core.truth_(new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(this$))?"loco1-coupled.png":"loco1.png"))], null);
}));

//# sourceMappingURL=locomotive.js.map
