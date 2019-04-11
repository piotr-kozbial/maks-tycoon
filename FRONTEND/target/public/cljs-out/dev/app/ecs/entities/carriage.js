// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ecs.entities.carriage');
goog.require('cljs.core');
goog.require('gamebase.ecs');
goog.require('gamebase.ecsu');
goog.require('gamebase.systems.drawing');
goog.require('gamebase.systems.movement');
goog.require('gamebase.event_queue');
goog.require('gamebase.geometry');
goog.require('app.tiles.general');
goog.require('gamebase.layers');
goog.require('app.world_interop');
goog.require('app.state');
goog.require('app.ecs.common_events');
app.ecs.entities.carriage.mk_entity = (function app$ecs$entities$carriage$mk_entity(id,tile_x,tile_y){
var _LT_entity_GT_22656 = app.ecs.entities.carriage._LT_entity_GT_;
app.ecs.entities.carriage._LT_entity_GT_ = gamebase.ecs.mk_entity.call(null,id,new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460));

try{return cljs.core.assoc.call(null,app.ecs.entities.carriage._LT_entity_GT_,new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (){var _LT_component_key_GT_22657 = app.ecs.entities.carriage._LT_component_key_GT_;
app.ecs.entities.carriage._LT_component_key_GT_ = new cljs.core.Keyword(null,"move","move",-2110884309);

try{return gamebase.systems.movement.mk_path_follower.call(null,app.ecs.entities.carriage._LT_entity_GT_,app.ecs.entities.carriage._LT_component_key_GT_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863),(2)], null));
}finally {app.ecs.entities.carriage._LT_component_key_GT_ = _LT_component_key_GT_22657;
}})(),new cljs.core.Keyword(null,"img","img",1442687358),(function (){var _LT_component_key_GT_22658 = app.ecs.entities.carriage._LT_component_key_GT_;
app.ecs.entities.carriage._LT_component_key_GT_ = new cljs.core.Keyword(null,"img","img",1442687358);

try{return gamebase.systems.drawing.mk_static_image_component.call(null,app.ecs.entities.carriage._LT_entity_GT_,app.ecs.entities.carriage._LT_component_key_GT_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),gamebase.ecs.ck_kvs.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),gamebase.ecs.ck_kvs.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"angle","angle",1622094254)),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(8)], null),new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096)], null)], null));
}finally {app.ecs.entities.carriage._LT_component_key_GT_ = _LT_component_key_GT_22658;
}})()], null),new cljs.core.Keyword(null,"tile-x","tile-x",1338121882),tile_x,new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706),tile_y,new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,tile_y,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)], null),new cljs.core.Keyword(null,"front-coupling","front-coupling",2000992378),null,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524),null,new cljs.core.Keyword(null,"image","image",-58725096),"carriage1.png");
}finally {app.ecs.entities.carriage._LT_entity_GT_ = _LT_entity_GT_22656;
}});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460),new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660)], null),(function (world,event,this$){
cljs.core.println.call(null,"CARRIAGE INIT");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("gamebase.systems.movement","set-path","gamebase.systems.movement/set-path",-1213286642),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"path","path",-188191168),app.tiles.general.track_path.call(null,new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"tile-x","tile-x",1338121882).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706).cljs$core$IFn$_invoke$arity$1(this$)))], null);
}));
app.ecs.entities.carriage._get_layer = (function app$ecs$entities$carriage$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22659_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__22659_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.ecs.entities.carriage._put_to_history = (function app$ecs$entities$carriage$_put_to_history(history,tile_x,tile_y,track){
var history_SINGLEQUOTE_ = (((cljs.core.count.call(null,history) >= (2)))?cljs.core.apply.call(null,cljs.core.vector,cljs.core.rest.call(null,history)):history);
return cljs.core.into.call(null,history_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,tile_y,track], null)], null));
});
app.ecs.entities.carriage._history_to_map = (function app$ecs$entities$carriage$_history_to_map(history){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__22660){
var vec__22661 = p__22660;
var tx = cljs.core.nth.call(null,vec__22661,(0),null);
var ty = cljs.core.nth.call(null,vec__22661,(1),null);
var track = cljs.core.nth.call(null,vec__22661,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null),track], null);
}),history));
});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460),new cljs.core.Keyword("gamebase.systems.movement","at-path-end","gamebase.systems.movement/at-path-end",379756653)], null),(function (world,event,this$){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)));
var map__22664 = this$;
var map__22664__$1 = ((((!((map__22664 == null)))?(((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22664):map__22664);
var track = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"track","track",195787487));
var tile_x = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"tile-x","tile-x",1338121882));
var tile_y = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706));
var vec__22665 = app.tiles.general.track_destination_tile.call(null,track,tile_x,tile_y);
var new_tile_x = cljs.core.nth.call(null,vec__22665,(0),null);
var new_tile_y = cljs.core.nth.call(null,vec__22665,(1),null);
var layer = app.ecs.entities.carriage._get_layer.call(null,world,new cljs.core.Keyword(null,"foreground","foreground",499022036));
var tile_context = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var new_tile = gamebase.layers.get_tile_from_layer.call(null,layer,new_tile_x,new_tile_y);
var info = gamebase.layers.get_tile_info_from_layer.call(null,tile_context,layer,new_tile_x,new_tile_y);
var extra = app.state.get_tile_extra.call(null,new_tile_x,new_tile_y);
var vec__22668 = new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(this$);
var _ = cljs.core.nth.call(null,vec__22668,(0),null);
var tile_end = cljs.core.nth.call(null,vec__22668,(1),null);
var new_tile_start = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null).call(null,tile_end);
var possible_new_tracks = app.tiles.general.active_tracks_from.call(null,new_tile_start,new_tile_x,new_tile_y,info,extra);
var track_chosen_by_front = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"front-coupling","front-coupling",2000992378).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(temp__5457__auto__)){
var front_id = temp__5457__auto__;
var front = gamebase.ecs.get_entity_by_key.call(null,world,front_id);
var front_history = app.ecs.entities.carriage._history_to_map.call(null,new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777).cljs$core$IFn$_invoke$arity$1(front));
return front_history.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_tile_x,new_tile_y], null));
} else {
return null;
}
})();
if(cljs.core.truth_(track_chosen_by_front)){
var new_path = app.tiles.general.track_path.call(null,track_chosen_by_front,new_tile_x,new_tile_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"tile-x","tile-x",1338121882),new_tile_x,new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706),new_tile_y,new cljs.core.Keyword(null,"track","track",195787487),track_chosen_by_front,new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777),app.ecs.entities.carriage._put_to_history.call(null,new cljs.core.Keyword(null,"tile-track-history","tile-track-history",-2028368777).cljs$core$IFn$_invoke$arity$1(this$),new_tile_x,new_tile_y,track_chosen_by_front)),cljs.core.assoc.call(null,gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("gamebase.systems.movement","set-path","gamebase.systems.movement/set-path",-1213286642),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"path","path",-188191168),new_path)], null);
} else {
console.log("NO NEW TRACK!!!");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamebase.ecs.mk_event.call(null,this$,new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event))], null);
}
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785)], null),(function (world,event,p__22672){
var map__22673 = p__22672;
var map__22673__$1 = ((((!((map__22673 == null)))?(((((map__22673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22673):map__22673);
var this$ = map__22673__$1;
var rear_coupling = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524));
console.log("CAR GOT STOP, sending to ",rear_coupling);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),(cljs.core.truth_(rear_coupling)?gamebase.ecs.mk_event.call(null,gamebase.ecs.to_entity.call(null,rear_coupling),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)):null)], null);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491)], null),(function (world,event,p__22675){
var map__22676 = p__22675;
var map__22676__$1 = ((((!((map__22676 == null)))?(((((map__22676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22676):map__22676);
var this$ = map__22676__$1;
var rear_coupling = cljs.core.get.call(null,map__22676__$1,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamebase.ecs.mk_event.call(null,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)),(cljs.core.truth_(rear_coupling)?gamebase.ecs.mk_event.call(null,gamebase.ecs.to_entity.call(null,rear_coupling),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event)):null)], null);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460),new cljs.core.Keyword("app.ecs.entities.carriage","couple-rear","app.ecs.entities.carriage/couple-rear",548779996)], null),(function (world,p__22678,this$){
var map__22679 = p__22678;
var map__22679__$1 = ((((!((map__22679 == null)))?(((((map__22679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22679):map__22679);
var event = map__22679__$1;
var the_other_id = cljs.core.get.call(null,map__22679__$1,new cljs.core.Keyword(null,"the-other-id","the-other-id",-1798540769));
var the_other = gamebase.ecs.get_entity_by_key.call(null,world,the_other_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524),the_other_id),cljs.core.assoc.call(null,the_other,new cljs.core.Keyword(null,"front-coupling","front-coupling",2000992378),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(this$))], null);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("app.ecs.entities.carriage","carriage","app.ecs.entities.carriage/carriage",1924650460),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"image","image",-58725096),(function (){var G__22681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"front-coupling","front-coupling",2000992378).cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(this$))], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__22681)){
return "carriage1.png";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__22681)){
return "carriage1-front-coupled.png";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__22681)){
return "carriage1-rear-coupled.png";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__22681)){
return "carriage1-both-coupled.png";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22681)].join('')));

}
}
}
}
})())], null);
}));

//# sourceMappingURL=carriage.js.map
