// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.world_interop');
goog.require('cljs.core');
goog.require('gamebase.canvas_control');
goog.require('gamebase.resources');
goog.require('gamebase.systems.drawing');
goog.require('gamebase.systems.movement');
goog.require('app.tiles.general');
goog.require('app.tiles.turnouts');
goog.require('gamebase.ecs');
goog.require('gamebase.virtual_timer');
goog.require('gamebase.event_queue');
goog.require('gamebase.layers');
goog.require('app.server_communication');
goog.require('app.state');
app.world_interop.run = (function app$world_interop$run(){
var map__22426 = cljs.core.deref.call(null,app.state.app_state);
var map__22426__$1 = ((((!((map__22426 == null)))?(((((map__22426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22426):map__22426);
var world = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),((function (map__22426,map__22426__$1,world,timer){
return (function (p1__22425_SHARP_){
return gamebase.virtual_timer.run.call(null,p1__22425_SHARP_,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396).cljs$core$IFn$_invoke$arity$1(world));
});})(map__22426,map__22426__$1,world,timer))
);
});
app.world_interop.stop = (function app$world_interop$stop(){
var map__22428 = cljs.core.deref.call(null,app.state.app_state);
var map__22428__$1 = ((((!((map__22428 == null)))?(((((map__22428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22428):map__22428);
var world = cljs.core.get.call(null,map__22428__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__22428__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),gamebase.virtual_timer.stop);
});
app.world_interop.running_QMARK_ = (function app$world_interop$running_QMARK_(){
var map__22430 = cljs.core.deref.call(null,app.state.app_state);
var map__22430__$1 = ((((!((map__22430 == null)))?(((((map__22430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22430):map__22430);
var world = cljs.core.get.call(null,map__22430__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__22430__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return gamebase.virtual_timer.running_QMARK_.call(null,timer);
});
app.world_interop.get_time = (function app$world_interop$get_time(){

var map__22432 = cljs.core.deref.call(null,app.state.app_state);
var map__22432__$1 = ((((!((map__22432 == null)))?(((((map__22432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22432):map__22432);
var world = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

if(cljs.core.truth_(gamebase.virtual_timer.running_QMARK_.call(null,timer))){
return gamebase.virtual_timer.get_time.call(null,timer);
} else {
return new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396).cljs$core$IFn$_invoke$arity$1(world);
}
});
app.world_interop.mk_world = (function app$world_interop$mk_world(){
var tmx_fname = "level1.tmx";
var ls = gamebase.layers.get_all_layers_from_tmx.call(null,gamebase.resources.get_resource.call(null,tmx_fname));
var tileset_rendering_map = gamebase.layers.get_tileset_rendering_map_from_tmx.call(null,gamebase.resources.get_resource.call(null,tmx_fname));
var world_width_in_tiles = (100);
var world_height_in_tiles = (100);
var ctx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),(32),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651),(32),new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212),world_width_in_tiles,new cljs.core.Keyword(null,"world-height-in-tiles","world-height-in-tiles",1693693808),world_height_in_tiles,new cljs.core.Keyword(null,"tileset-rendering-map","tileset-rendering-map",-972444005),tileset_rendering_map,new cljs.core.Keyword(null,"tileset-map","tileset-map",-1097486347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),app.tiles.general.tiles_by_number], null)], null);
var world0 = cljs.core.assoc.call(null,gamebase.ecs.insert_object.call(null,gamebase.ecs.insert_object.call(null,gamebase.ecs.mk_world.call(null),gamebase.systems.drawing.mk_system.call(null)),gamebase.systems.movement.mk_system.call(null)),new cljs.core.Keyword(null,"layers","layers",1944875032),ls,new cljs.core.Keyword(null,"tile-context","tile-context",32165727),ctx,new cljs.core.Keyword(null,"tile-extra","tile-extra",1451483079),cljs.core.PersistentArrayMap.EMPTY);
var world1 = gamebase.ecs.put_all_events.call(null,world0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,gamebase.ecs.mk_event.call(null,gamebase.systems.drawing.to_system,new cljs.core.Keyword("gamebase.systems.drawing","set-all-tmx","gamebase.systems.drawing/set-all-tmx",1923189353),(0)),new cljs.core.Keyword(null,"tmx-fname","tmx-fname",-601953930),"level1.tmx")], null));
return world1;
});
app.world_interop._get_layer = (function app$world_interop$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22434_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__22434_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.world_interop.init_tile_extra = (function app$world_interop$init_tile_extra(){
var layer = app.world_interop._get_layer.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state)),new cljs.core.Keyword(null,"foreground","foreground",499022036));
var world_width_in_tiles = (100);
var world_height_in_tiles = (100);
var seq__22436 = cljs.core.seq.call(null,cljs.core.range.call(null,world_width_in_tiles));
var chunk__22441 = null;
var count__22442 = (0);
var i__22443 = (0);
while(true){
if((i__22443 < count__22442)){
var tile_x = cljs.core._nth.call(null,chunk__22441,i__22443);
var seq__22444_22476 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__22445_22477 = null;
var count__22446_22478 = (0);
var i__22447_22479 = (0);
while(true){
if((i__22447_22479 < count__22446_22478)){
var tile_y_22480 = cljs.core._nth.call(null,chunk__22445_22477,i__22447_22479);
var vec__22448_22481 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_22480);
var __22482 = cljs.core.nth.call(null,vec__22448_22481,(0),null);
var tile_number_22483 = cljs.core.nth.call(null,vec__22448_22481,(1),null);
var tile_data_22484 = app.tiles.general.tiles_by_number.call(null,tile_number_22483);
var seq__22451_22485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22484));
var chunk__22452_22486 = null;
var count__22453_22487 = (0);
var i__22454_22488 = (0);
while(true){
if((i__22454_22488 < count__22453_22487)){
var tile_id_22489 = cljs.core._nth.call(null,chunk__22452_22486,i__22454_22488);
app.state.update_tile_extra.call(null,tile_x,tile_y_22480,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22451_22485,chunk__22452_22486,count__22453_22487,i__22454_22488,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22489,vec__22448_22481,__22482,tile_number_22483,tile_data_22484,tile_y_22480,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22480,tile_data_22484);
});})(seq__22451_22485,chunk__22452_22486,count__22453_22487,i__22454_22488,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22489,vec__22448_22481,__22482,tile_number_22483,tile_data_22484,tile_y_22480,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22484))));


var G__22490 = seq__22451_22485;
var G__22491 = chunk__22452_22486;
var G__22492 = count__22453_22487;
var G__22493 = (i__22454_22488 + (1));
seq__22451_22485 = G__22490;
chunk__22452_22486 = G__22491;
count__22453_22487 = G__22492;
i__22454_22488 = G__22493;
continue;
} else {
var temp__5457__auto___22494 = cljs.core.seq.call(null,seq__22451_22485);
if(temp__5457__auto___22494){
var seq__22451_22495__$1 = temp__5457__auto___22494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22451_22495__$1)){
var c__4351__auto___22496 = cljs.core.chunk_first.call(null,seq__22451_22495__$1);
var G__22497 = cljs.core.chunk_rest.call(null,seq__22451_22495__$1);
var G__22498 = c__4351__auto___22496;
var G__22499 = cljs.core.count.call(null,c__4351__auto___22496);
var G__22500 = (0);
seq__22451_22485 = G__22497;
chunk__22452_22486 = G__22498;
count__22453_22487 = G__22499;
i__22454_22488 = G__22500;
continue;
} else {
var tile_id_22501 = cljs.core.first.call(null,seq__22451_22495__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_22480,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22451_22485,chunk__22452_22486,count__22453_22487,i__22454_22488,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22501,seq__22451_22495__$1,temp__5457__auto___22494,vec__22448_22481,__22482,tile_number_22483,tile_data_22484,tile_y_22480,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22480,tile_data_22484);
});})(seq__22451_22485,chunk__22452_22486,count__22453_22487,i__22454_22488,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22501,seq__22451_22495__$1,temp__5457__auto___22494,vec__22448_22481,__22482,tile_number_22483,tile_data_22484,tile_y_22480,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22484))));


var G__22502 = cljs.core.next.call(null,seq__22451_22495__$1);
var G__22503 = null;
var G__22504 = (0);
var G__22505 = (0);
seq__22451_22485 = G__22502;
chunk__22452_22486 = G__22503;
count__22453_22487 = G__22504;
i__22454_22488 = G__22505;
continue;
}
} else {
}
}
break;
}


var G__22506 = seq__22444_22476;
var G__22507 = chunk__22445_22477;
var G__22508 = count__22446_22478;
var G__22509 = (i__22447_22479 + (1));
seq__22444_22476 = G__22506;
chunk__22445_22477 = G__22507;
count__22446_22478 = G__22508;
i__22447_22479 = G__22509;
continue;
} else {
var temp__5457__auto___22510 = cljs.core.seq.call(null,seq__22444_22476);
if(temp__5457__auto___22510){
var seq__22444_22511__$1 = temp__5457__auto___22510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22444_22511__$1)){
var c__4351__auto___22512 = cljs.core.chunk_first.call(null,seq__22444_22511__$1);
var G__22513 = cljs.core.chunk_rest.call(null,seq__22444_22511__$1);
var G__22514 = c__4351__auto___22512;
var G__22515 = cljs.core.count.call(null,c__4351__auto___22512);
var G__22516 = (0);
seq__22444_22476 = G__22513;
chunk__22445_22477 = G__22514;
count__22446_22478 = G__22515;
i__22447_22479 = G__22516;
continue;
} else {
var tile_y_22517 = cljs.core.first.call(null,seq__22444_22511__$1);
var vec__22455_22518 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_22517);
var __22519 = cljs.core.nth.call(null,vec__22455_22518,(0),null);
var tile_number_22520 = cljs.core.nth.call(null,vec__22455_22518,(1),null);
var tile_data_22521 = app.tiles.general.tiles_by_number.call(null,tile_number_22520);
var seq__22458_22522 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22521));
var chunk__22459_22523 = null;
var count__22460_22524 = (0);
var i__22461_22525 = (0);
while(true){
if((i__22461_22525 < count__22460_22524)){
var tile_id_22526 = cljs.core._nth.call(null,chunk__22459_22523,i__22461_22525);
app.state.update_tile_extra.call(null,tile_x,tile_y_22517,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22458_22522,chunk__22459_22523,count__22460_22524,i__22461_22525,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22526,vec__22455_22518,__22519,tile_number_22520,tile_data_22521,tile_y_22517,seq__22444_22511__$1,temp__5457__auto___22510,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22517,tile_data_22521);
});})(seq__22458_22522,chunk__22459_22523,count__22460_22524,i__22461_22525,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22526,vec__22455_22518,__22519,tile_number_22520,tile_data_22521,tile_y_22517,seq__22444_22511__$1,temp__5457__auto___22510,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22521))));


var G__22527 = seq__22458_22522;
var G__22528 = chunk__22459_22523;
var G__22529 = count__22460_22524;
var G__22530 = (i__22461_22525 + (1));
seq__22458_22522 = G__22527;
chunk__22459_22523 = G__22528;
count__22460_22524 = G__22529;
i__22461_22525 = G__22530;
continue;
} else {
var temp__5457__auto___22531__$1 = cljs.core.seq.call(null,seq__22458_22522);
if(temp__5457__auto___22531__$1){
var seq__22458_22532__$1 = temp__5457__auto___22531__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22458_22532__$1)){
var c__4351__auto___22533 = cljs.core.chunk_first.call(null,seq__22458_22532__$1);
var G__22534 = cljs.core.chunk_rest.call(null,seq__22458_22532__$1);
var G__22535 = c__4351__auto___22533;
var G__22536 = cljs.core.count.call(null,c__4351__auto___22533);
var G__22537 = (0);
seq__22458_22522 = G__22534;
chunk__22459_22523 = G__22535;
count__22460_22524 = G__22536;
i__22461_22525 = G__22537;
continue;
} else {
var tile_id_22538 = cljs.core.first.call(null,seq__22458_22532__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_22517,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22458_22522,chunk__22459_22523,count__22460_22524,i__22461_22525,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22538,seq__22458_22532__$1,temp__5457__auto___22531__$1,vec__22455_22518,__22519,tile_number_22520,tile_data_22521,tile_y_22517,seq__22444_22511__$1,temp__5457__auto___22510,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22517,tile_data_22521);
});})(seq__22458_22522,chunk__22459_22523,count__22460_22524,i__22461_22525,seq__22444_22476,chunk__22445_22477,count__22446_22478,i__22447_22479,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22538,seq__22458_22532__$1,temp__5457__auto___22531__$1,vec__22455_22518,__22519,tile_number_22520,tile_data_22521,tile_y_22517,seq__22444_22511__$1,temp__5457__auto___22510,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22521))));


var G__22539 = cljs.core.next.call(null,seq__22458_22532__$1);
var G__22540 = null;
var G__22541 = (0);
var G__22542 = (0);
seq__22458_22522 = G__22539;
chunk__22459_22523 = G__22540;
count__22460_22524 = G__22541;
i__22461_22525 = G__22542;
continue;
}
} else {
}
}
break;
}


var G__22543 = cljs.core.next.call(null,seq__22444_22511__$1);
var G__22544 = null;
var G__22545 = (0);
var G__22546 = (0);
seq__22444_22476 = G__22543;
chunk__22445_22477 = G__22544;
count__22446_22478 = G__22545;
i__22447_22479 = G__22546;
continue;
}
} else {
}
}
break;
}

var G__22547 = seq__22436;
var G__22548 = chunk__22441;
var G__22549 = count__22442;
var G__22550 = (i__22443 + (1));
seq__22436 = G__22547;
chunk__22441 = G__22548;
count__22442 = G__22549;
i__22443 = G__22550;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22436);
if(temp__5457__auto__){
var seq__22436__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22436__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22436__$1);
var G__22551 = cljs.core.chunk_rest.call(null,seq__22436__$1);
var G__22552 = c__4351__auto__;
var G__22553 = cljs.core.count.call(null,c__4351__auto__);
var G__22554 = (0);
seq__22436 = G__22551;
chunk__22441 = G__22552;
count__22442 = G__22553;
i__22443 = G__22554;
continue;
} else {
var tile_x = cljs.core.first.call(null,seq__22436__$1);
var seq__22437_22555 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__22438_22556 = null;
var count__22439_22557 = (0);
var i__22440_22558 = (0);
while(true){
if((i__22440_22558 < count__22439_22557)){
var tile_y_22559 = cljs.core._nth.call(null,chunk__22438_22556,i__22440_22558);
var vec__22462_22560 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_22559);
var __22561 = cljs.core.nth.call(null,vec__22462_22560,(0),null);
var tile_number_22562 = cljs.core.nth.call(null,vec__22462_22560,(1),null);
var tile_data_22563 = app.tiles.general.tiles_by_number.call(null,tile_number_22562);
var seq__22465_22564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22563));
var chunk__22466_22565 = null;
var count__22467_22566 = (0);
var i__22468_22567 = (0);
while(true){
if((i__22468_22567 < count__22467_22566)){
var tile_id_22568 = cljs.core._nth.call(null,chunk__22466_22565,i__22468_22567);
app.state.update_tile_extra.call(null,tile_x,tile_y_22559,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22465_22564,chunk__22466_22565,count__22467_22566,i__22468_22567,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22568,vec__22462_22560,__22561,tile_number_22562,tile_data_22563,tile_y_22559,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22559,tile_data_22563);
});})(seq__22465_22564,chunk__22466_22565,count__22467_22566,i__22468_22567,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22568,vec__22462_22560,__22561,tile_number_22562,tile_data_22563,tile_y_22559,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22563))));


var G__22569 = seq__22465_22564;
var G__22570 = chunk__22466_22565;
var G__22571 = count__22467_22566;
var G__22572 = (i__22468_22567 + (1));
seq__22465_22564 = G__22569;
chunk__22466_22565 = G__22570;
count__22467_22566 = G__22571;
i__22468_22567 = G__22572;
continue;
} else {
var temp__5457__auto___22573__$1 = cljs.core.seq.call(null,seq__22465_22564);
if(temp__5457__auto___22573__$1){
var seq__22465_22574__$1 = temp__5457__auto___22573__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22465_22574__$1)){
var c__4351__auto___22575 = cljs.core.chunk_first.call(null,seq__22465_22574__$1);
var G__22576 = cljs.core.chunk_rest.call(null,seq__22465_22574__$1);
var G__22577 = c__4351__auto___22575;
var G__22578 = cljs.core.count.call(null,c__4351__auto___22575);
var G__22579 = (0);
seq__22465_22564 = G__22576;
chunk__22466_22565 = G__22577;
count__22467_22566 = G__22578;
i__22468_22567 = G__22579;
continue;
} else {
var tile_id_22580 = cljs.core.first.call(null,seq__22465_22574__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_22559,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22465_22564,chunk__22466_22565,count__22467_22566,i__22468_22567,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22580,seq__22465_22574__$1,temp__5457__auto___22573__$1,vec__22462_22560,__22561,tile_number_22562,tile_data_22563,tile_y_22559,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22559,tile_data_22563);
});})(seq__22465_22564,chunk__22466_22565,count__22467_22566,i__22468_22567,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22580,seq__22465_22574__$1,temp__5457__auto___22573__$1,vec__22462_22560,__22561,tile_number_22562,tile_data_22563,tile_y_22559,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22563))));


var G__22581 = cljs.core.next.call(null,seq__22465_22574__$1);
var G__22582 = null;
var G__22583 = (0);
var G__22584 = (0);
seq__22465_22564 = G__22581;
chunk__22466_22565 = G__22582;
count__22467_22566 = G__22583;
i__22468_22567 = G__22584;
continue;
}
} else {
}
}
break;
}


var G__22585 = seq__22437_22555;
var G__22586 = chunk__22438_22556;
var G__22587 = count__22439_22557;
var G__22588 = (i__22440_22558 + (1));
seq__22437_22555 = G__22585;
chunk__22438_22556 = G__22586;
count__22439_22557 = G__22587;
i__22440_22558 = G__22588;
continue;
} else {
var temp__5457__auto___22589__$1 = cljs.core.seq.call(null,seq__22437_22555);
if(temp__5457__auto___22589__$1){
var seq__22437_22590__$1 = temp__5457__auto___22589__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22437_22590__$1)){
var c__4351__auto___22591 = cljs.core.chunk_first.call(null,seq__22437_22590__$1);
var G__22592 = cljs.core.chunk_rest.call(null,seq__22437_22590__$1);
var G__22593 = c__4351__auto___22591;
var G__22594 = cljs.core.count.call(null,c__4351__auto___22591);
var G__22595 = (0);
seq__22437_22555 = G__22592;
chunk__22438_22556 = G__22593;
count__22439_22557 = G__22594;
i__22440_22558 = G__22595;
continue;
} else {
var tile_y_22596 = cljs.core.first.call(null,seq__22437_22590__$1);
var vec__22469_22597 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_22596);
var __22598 = cljs.core.nth.call(null,vec__22469_22597,(0),null);
var tile_number_22599 = cljs.core.nth.call(null,vec__22469_22597,(1),null);
var tile_data_22600 = app.tiles.general.tiles_by_number.call(null,tile_number_22599);
var seq__22472_22601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22600));
var chunk__22473_22602 = null;
var count__22474_22603 = (0);
var i__22475_22604 = (0);
while(true){
if((i__22475_22604 < count__22474_22603)){
var tile_id_22605 = cljs.core._nth.call(null,chunk__22473_22602,i__22475_22604);
app.state.update_tile_extra.call(null,tile_x,tile_y_22596,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22472_22601,chunk__22473_22602,count__22474_22603,i__22475_22604,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22605,vec__22469_22597,__22598,tile_number_22599,tile_data_22600,tile_y_22596,seq__22437_22590__$1,temp__5457__auto___22589__$1,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22596,tile_data_22600);
});})(seq__22472_22601,chunk__22473_22602,count__22474_22603,i__22475_22604,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22605,vec__22469_22597,__22598,tile_number_22599,tile_data_22600,tile_y_22596,seq__22437_22590__$1,temp__5457__auto___22589__$1,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22600))));


var G__22606 = seq__22472_22601;
var G__22607 = chunk__22473_22602;
var G__22608 = count__22474_22603;
var G__22609 = (i__22475_22604 + (1));
seq__22472_22601 = G__22606;
chunk__22473_22602 = G__22607;
count__22474_22603 = G__22608;
i__22475_22604 = G__22609;
continue;
} else {
var temp__5457__auto___22610__$2 = cljs.core.seq.call(null,seq__22472_22601);
if(temp__5457__auto___22610__$2){
var seq__22472_22611__$1 = temp__5457__auto___22610__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22472_22611__$1)){
var c__4351__auto___22612 = cljs.core.chunk_first.call(null,seq__22472_22611__$1);
var G__22613 = cljs.core.chunk_rest.call(null,seq__22472_22611__$1);
var G__22614 = c__4351__auto___22612;
var G__22615 = cljs.core.count.call(null,c__4351__auto___22612);
var G__22616 = (0);
seq__22472_22601 = G__22613;
chunk__22473_22602 = G__22614;
count__22474_22603 = G__22615;
i__22475_22604 = G__22616;
continue;
} else {
var tile_id_22617 = cljs.core.first.call(null,seq__22472_22611__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_22596,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__22472_22601,chunk__22473_22602,count__22474_22603,i__22475_22604,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22617,seq__22472_22611__$1,temp__5457__auto___22610__$2,vec__22469_22597,__22598,tile_number_22599,tile_data_22600,tile_y_22596,seq__22437_22590__$1,temp__5457__auto___22589__$1,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__22435_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__22435_SHARP_,tile_x,tile_y_22596,tile_data_22600);
});})(seq__22472_22601,chunk__22473_22602,count__22474_22603,i__22475_22604,seq__22437_22555,chunk__22438_22556,count__22439_22557,i__22440_22558,seq__22436,chunk__22441,count__22442,i__22443,tile_id_22617,seq__22472_22611__$1,temp__5457__auto___22610__$2,vec__22469_22597,__22598,tile_number_22599,tile_data_22600,tile_y_22596,seq__22437_22590__$1,temp__5457__auto___22589__$1,tile_x,seq__22436__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_22600))));


var G__22618 = cljs.core.next.call(null,seq__22472_22611__$1);
var G__22619 = null;
var G__22620 = (0);
var G__22621 = (0);
seq__22472_22601 = G__22618;
chunk__22473_22602 = G__22619;
count__22474_22603 = G__22620;
i__22475_22604 = G__22621;
continue;
}
} else {
}
}
break;
}


var G__22622 = cljs.core.next.call(null,seq__22437_22590__$1);
var G__22623 = null;
var G__22624 = (0);
var G__22625 = (0);
seq__22437_22555 = G__22622;
chunk__22438_22556 = G__22623;
count__22439_22557 = G__22624;
i__22440_22558 = G__22625;
continue;
}
} else {
}
}
break;
}

var G__22626 = cljs.core.next.call(null,seq__22436__$1);
var G__22627 = null;
var G__22628 = (0);
var G__22629 = (0);
seq__22436 = G__22626;
chunk__22441 = G__22627;
count__22442 = G__22628;
i__22443 = G__22629;
continue;
}
} else {
return null;
}
}
break;
}
});
app.world_interop.set_world = (function app$world_interop$set_world(world){
cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),world);

return app.world_interop.stop.call(null);
});
app.world_interop.destroy_world = (function app$world_interop$destroy_world(){
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),null);
});
app.world_interop.get_all_locomotives = (function app$world_interop$get_all_locomotives(world){
return cljs.core.filter.call(null,(function (p1__22630_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(p1__22630_SHARP_),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705));
}),cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world)));
});
app.world_interop.send_to_entity = (function app$world_interop$send_to_entity(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22634 = arguments.length;
var i__4532__auto___22635 = (0);
while(true){
if((i__4532__auto___22635 < len__4531__auto___22634)){
args__4534__auto__.push((arguments[i__4532__auto___22635]));

var G__22636 = (i__4532__auto___22635 + (1));
i__4532__auto___22635 = G__22636;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.world_interop.send_to_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.world_interop.send_to_entity.cljs$core$IFn$_invoke$arity$variadic = (function (entity_or_key,msg,kvs){
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623)], null),(function (world){
var entity = ((cljs.core.map_QMARK_.call(null,entity_or_key))?entity_or_key:gamebase.ecs.get_entity_by_key.call(null,world,entity_or_key));
var time = app.world_interop.get_time.call(null);
var event = cljs.core.apply.call(null,cljs.core.assoc,gamebase.ecs.mk_event.call(null,gamebase.ecs.to.call(null,entity),msg,time),kvs);
return gamebase.ecs.put_all_events.call(null,world,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}));
});

app.world_interop.send_to_entity.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.world_interop.send_to_entity.cljs$lang$applyTo = (function (seq22631){
var G__22632 = cljs.core.first.call(null,seq22631);
var seq22631__$1 = cljs.core.next.call(null,seq22631);
var G__22633 = cljs.core.first.call(null,seq22631__$1);
var seq22631__$2 = cljs.core.next.call(null,seq22631__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22632,G__22633,seq22631__$2);
});

app.world_interop.inject_entity = (function app$world_interop$inject_entity(e){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__22637){
var map__22638 = p__22637;
var map__22638__$1 = ((((!((map__22638 == null)))?(((((map__22638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22638):map__22638);
var state = map__22638__$1;
var world = cljs.core.get.call(null,map__22638__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.world_interop.kill_entity = (function app$world_interop$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__22640){
var map__22641 = p__22640;
var map__22641__$1 = ((((!((map__22641 == null)))?(((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);
var state = map__22641__$1;
var world = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.remove_entity_by_key.call(null,world,entity_key));
}));

return null;
});
app.world_interop.kill_train = (function app$world_interop$kill_train(world,loc_key){
var key = loc_key;
while(true){
if(cljs.core.truth_(key)){
var entity = gamebase.ecs.get_entity_by_key.call(null,world,key);
app.world_interop.kill_entity.call(null,key);

var G__22643 = new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(entity);
key = G__22643;
continue;
} else {
return null;
}
break;
}
});
app.world_interop.get_world_size = (function app$world_interop$get_world_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(1000)], null);
});
app.world_interop.get_tile_xy = (function app$world_interop$get_tile_xy(canvas_x,canvas_y){
var vec__22644 = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
var conv_x = cljs.core.nth.call(null,vec__22644,(0),null);
var conv_y = cljs.core.nth.call(null,vec__22644,(1),null);
var tile_x = cljs.core.quot.call(null,conv_x.call(null,canvas_x),(32));
var tile_y = cljs.core.quot.call(null,conv_y.call(null,canvas_y),(32));
var vec__22647 = app.world_interop.get_world_size.call(null);
var world_width = cljs.core.nth.call(null,vec__22647,(0),null);
var world_height = cljs.core.nth.call(null,vec__22647,(1),null);
if((((tile_x >= (0))) && ((tile_x < world_width)) && ((tile_y >= (0))) && ((tile_y < world_height)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,tile_y], null);
} else {
return null;
}
});
app.world_interop.get_tile = (function app$world_interop$get_tile(tile_x,tile_y){
var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state));
var layer = app.world_interop._get_layer.call(null,world,new cljs.core.Keyword(null,"foreground","foreground",499022036));
return gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y);
});
app.world_interop.set_tile = (function app$world_interop$set_tile(tile_x,tile_y,tile){
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"layers","layers",1944875032)], null),(function (layers){
return cljs.core.map.call(null,(function (p__22650){
var vec__22651 = p__22650;
var key = cljs.core.nth.call(null,vec__22651,(0),null);
var l = cljs.core.nth.call(null,vec__22651,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"foreground","foreground",499022036)))?gamebase.layers.set_tile_in_layer.call(null,l,tile_x,tile_y,tile):l)], null);
}),layers);
}));
});

//# sourceMappingURL=world_interop.js.map
