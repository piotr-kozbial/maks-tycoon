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
var map__66969 = cljs.core.deref.call(null,app.state.app_state);
var map__66969__$1 = ((((!((map__66969 == null)))?(((((map__66969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66969):map__66969);
var world = cljs.core.get.call(null,map__66969__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__66969__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),((function (map__66969,map__66969__$1,world,timer){
return (function (p1__66968_SHARP_){
return gamebase.virtual_timer.run.call(null,p1__66968_SHARP_,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396).cljs$core$IFn$_invoke$arity$1(world));
});})(map__66969,map__66969__$1,world,timer))
);
});
app.world_interop.stop = (function app$world_interop$stop(){
var map__66971 = cljs.core.deref.call(null,app.state.app_state);
var map__66971__$1 = ((((!((map__66971 == null)))?(((((map__66971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66971):map__66971);
var world = cljs.core.get.call(null,map__66971__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__66971__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),gamebase.virtual_timer.stop);
});
app.world_interop.running_QMARK_ = (function app$world_interop$running_QMARK_(){
var map__66973 = cljs.core.deref.call(null,app.state.app_state);
var map__66973__$1 = ((((!((map__66973 == null)))?(((((map__66973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66973):map__66973);
var world = cljs.core.get.call(null,map__66973__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__66973__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return gamebase.virtual_timer.running_QMARK_.call(null,timer);
});
app.world_interop.get_time = (function app$world_interop$get_time(){

var map__66975 = cljs.core.deref.call(null,app.state.app_state);
var map__66975__$1 = ((((!((map__66975 == null)))?(((((map__66975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66975):map__66975);
var world = cljs.core.get.call(null,map__66975__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__66975__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__66977_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__66977_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.world_interop.init_tile_extra = (function app$world_interop$init_tile_extra(){
var layer = app.world_interop._get_layer.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state)),new cljs.core.Keyword(null,"foreground","foreground",499022036));
var world_width_in_tiles = (100);
var world_height_in_tiles = (100);
var seq__66979 = cljs.core.seq.call(null,cljs.core.range.call(null,world_width_in_tiles));
var chunk__66984 = null;
var count__66985 = (0);
var i__66986 = (0);
while(true){
if((i__66986 < count__66985)){
var tile_x = cljs.core._nth.call(null,chunk__66984,i__66986);
var seq__66987_67019 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__66988_67020 = null;
var count__66989_67021 = (0);
var i__66990_67022 = (0);
while(true){
if((i__66990_67022 < count__66989_67021)){
var tile_y_67023 = cljs.core._nth.call(null,chunk__66988_67020,i__66990_67022);
var vec__66991_67024 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_67023);
var __67025 = cljs.core.nth.call(null,vec__66991_67024,(0),null);
var tile_number_67026 = cljs.core.nth.call(null,vec__66991_67024,(1),null);
var tile_data_67027 = app.tiles.general.tiles_by_number.call(null,tile_number_67026);
var seq__66994_67028 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67027));
var chunk__66995_67029 = null;
var count__66996_67030 = (0);
var i__66997_67031 = (0);
while(true){
if((i__66997_67031 < count__66996_67030)){
var tile_id_67032 = cljs.core._nth.call(null,chunk__66995_67029,i__66997_67031);
app.state.update_tile_extra.call(null,tile_x,tile_y_67023,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__66994_67028,chunk__66995_67029,count__66996_67030,i__66997_67031,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67032,vec__66991_67024,__67025,tile_number_67026,tile_data_67027,tile_y_67023,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67023,tile_data_67027);
});})(seq__66994_67028,chunk__66995_67029,count__66996_67030,i__66997_67031,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67032,vec__66991_67024,__67025,tile_number_67026,tile_data_67027,tile_y_67023,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67027))));


var G__67033 = seq__66994_67028;
var G__67034 = chunk__66995_67029;
var G__67035 = count__66996_67030;
var G__67036 = (i__66997_67031 + (1));
seq__66994_67028 = G__67033;
chunk__66995_67029 = G__67034;
count__66996_67030 = G__67035;
i__66997_67031 = G__67036;
continue;
} else {
var temp__5457__auto___67037 = cljs.core.seq.call(null,seq__66994_67028);
if(temp__5457__auto___67037){
var seq__66994_67038__$1 = temp__5457__auto___67037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66994_67038__$1)){
var c__4351__auto___67039 = cljs.core.chunk_first.call(null,seq__66994_67038__$1);
var G__67040 = cljs.core.chunk_rest.call(null,seq__66994_67038__$1);
var G__67041 = c__4351__auto___67039;
var G__67042 = cljs.core.count.call(null,c__4351__auto___67039);
var G__67043 = (0);
seq__66994_67028 = G__67040;
chunk__66995_67029 = G__67041;
count__66996_67030 = G__67042;
i__66997_67031 = G__67043;
continue;
} else {
var tile_id_67044 = cljs.core.first.call(null,seq__66994_67038__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_67023,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__66994_67028,chunk__66995_67029,count__66996_67030,i__66997_67031,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67044,seq__66994_67038__$1,temp__5457__auto___67037,vec__66991_67024,__67025,tile_number_67026,tile_data_67027,tile_y_67023,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67023,tile_data_67027);
});})(seq__66994_67028,chunk__66995_67029,count__66996_67030,i__66997_67031,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67044,seq__66994_67038__$1,temp__5457__auto___67037,vec__66991_67024,__67025,tile_number_67026,tile_data_67027,tile_y_67023,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67027))));


var G__67045 = cljs.core.next.call(null,seq__66994_67038__$1);
var G__67046 = null;
var G__67047 = (0);
var G__67048 = (0);
seq__66994_67028 = G__67045;
chunk__66995_67029 = G__67046;
count__66996_67030 = G__67047;
i__66997_67031 = G__67048;
continue;
}
} else {
}
}
break;
}


var G__67049 = seq__66987_67019;
var G__67050 = chunk__66988_67020;
var G__67051 = count__66989_67021;
var G__67052 = (i__66990_67022 + (1));
seq__66987_67019 = G__67049;
chunk__66988_67020 = G__67050;
count__66989_67021 = G__67051;
i__66990_67022 = G__67052;
continue;
} else {
var temp__5457__auto___67053 = cljs.core.seq.call(null,seq__66987_67019);
if(temp__5457__auto___67053){
var seq__66987_67054__$1 = temp__5457__auto___67053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66987_67054__$1)){
var c__4351__auto___67055 = cljs.core.chunk_first.call(null,seq__66987_67054__$1);
var G__67056 = cljs.core.chunk_rest.call(null,seq__66987_67054__$1);
var G__67057 = c__4351__auto___67055;
var G__67058 = cljs.core.count.call(null,c__4351__auto___67055);
var G__67059 = (0);
seq__66987_67019 = G__67056;
chunk__66988_67020 = G__67057;
count__66989_67021 = G__67058;
i__66990_67022 = G__67059;
continue;
} else {
var tile_y_67060 = cljs.core.first.call(null,seq__66987_67054__$1);
var vec__66998_67061 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_67060);
var __67062 = cljs.core.nth.call(null,vec__66998_67061,(0),null);
var tile_number_67063 = cljs.core.nth.call(null,vec__66998_67061,(1),null);
var tile_data_67064 = app.tiles.general.tiles_by_number.call(null,tile_number_67063);
var seq__67001_67065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67064));
var chunk__67002_67066 = null;
var count__67003_67067 = (0);
var i__67004_67068 = (0);
while(true){
if((i__67004_67068 < count__67003_67067)){
var tile_id_67069 = cljs.core._nth.call(null,chunk__67002_67066,i__67004_67068);
app.state.update_tile_extra.call(null,tile_x,tile_y_67060,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__67001_67065,chunk__67002_67066,count__67003_67067,i__67004_67068,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67069,vec__66998_67061,__67062,tile_number_67063,tile_data_67064,tile_y_67060,seq__66987_67054__$1,temp__5457__auto___67053,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67060,tile_data_67064);
});})(seq__67001_67065,chunk__67002_67066,count__67003_67067,i__67004_67068,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67069,vec__66998_67061,__67062,tile_number_67063,tile_data_67064,tile_y_67060,seq__66987_67054__$1,temp__5457__auto___67053,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67064))));


var G__67070 = seq__67001_67065;
var G__67071 = chunk__67002_67066;
var G__67072 = count__67003_67067;
var G__67073 = (i__67004_67068 + (1));
seq__67001_67065 = G__67070;
chunk__67002_67066 = G__67071;
count__67003_67067 = G__67072;
i__67004_67068 = G__67073;
continue;
} else {
var temp__5457__auto___67074__$1 = cljs.core.seq.call(null,seq__67001_67065);
if(temp__5457__auto___67074__$1){
var seq__67001_67075__$1 = temp__5457__auto___67074__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67001_67075__$1)){
var c__4351__auto___67076 = cljs.core.chunk_first.call(null,seq__67001_67075__$1);
var G__67077 = cljs.core.chunk_rest.call(null,seq__67001_67075__$1);
var G__67078 = c__4351__auto___67076;
var G__67079 = cljs.core.count.call(null,c__4351__auto___67076);
var G__67080 = (0);
seq__67001_67065 = G__67077;
chunk__67002_67066 = G__67078;
count__67003_67067 = G__67079;
i__67004_67068 = G__67080;
continue;
} else {
var tile_id_67081 = cljs.core.first.call(null,seq__67001_67075__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_67060,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__67001_67065,chunk__67002_67066,count__67003_67067,i__67004_67068,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67081,seq__67001_67075__$1,temp__5457__auto___67074__$1,vec__66998_67061,__67062,tile_number_67063,tile_data_67064,tile_y_67060,seq__66987_67054__$1,temp__5457__auto___67053,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67060,tile_data_67064);
});})(seq__67001_67065,chunk__67002_67066,count__67003_67067,i__67004_67068,seq__66987_67019,chunk__66988_67020,count__66989_67021,i__66990_67022,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67081,seq__67001_67075__$1,temp__5457__auto___67074__$1,vec__66998_67061,__67062,tile_number_67063,tile_data_67064,tile_y_67060,seq__66987_67054__$1,temp__5457__auto___67053,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67064))));


var G__67082 = cljs.core.next.call(null,seq__67001_67075__$1);
var G__67083 = null;
var G__67084 = (0);
var G__67085 = (0);
seq__67001_67065 = G__67082;
chunk__67002_67066 = G__67083;
count__67003_67067 = G__67084;
i__67004_67068 = G__67085;
continue;
}
} else {
}
}
break;
}


var G__67086 = cljs.core.next.call(null,seq__66987_67054__$1);
var G__67087 = null;
var G__67088 = (0);
var G__67089 = (0);
seq__66987_67019 = G__67086;
chunk__66988_67020 = G__67087;
count__66989_67021 = G__67088;
i__66990_67022 = G__67089;
continue;
}
} else {
}
}
break;
}

var G__67090 = seq__66979;
var G__67091 = chunk__66984;
var G__67092 = count__66985;
var G__67093 = (i__66986 + (1));
seq__66979 = G__67090;
chunk__66984 = G__67091;
count__66985 = G__67092;
i__66986 = G__67093;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66979);
if(temp__5457__auto__){
var seq__66979__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66979__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__66979__$1);
var G__67094 = cljs.core.chunk_rest.call(null,seq__66979__$1);
var G__67095 = c__4351__auto__;
var G__67096 = cljs.core.count.call(null,c__4351__auto__);
var G__67097 = (0);
seq__66979 = G__67094;
chunk__66984 = G__67095;
count__66985 = G__67096;
i__66986 = G__67097;
continue;
} else {
var tile_x = cljs.core.first.call(null,seq__66979__$1);
var seq__66980_67098 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__66981_67099 = null;
var count__66982_67100 = (0);
var i__66983_67101 = (0);
while(true){
if((i__66983_67101 < count__66982_67100)){
var tile_y_67102 = cljs.core._nth.call(null,chunk__66981_67099,i__66983_67101);
var vec__67005_67103 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_67102);
var __67104 = cljs.core.nth.call(null,vec__67005_67103,(0),null);
var tile_number_67105 = cljs.core.nth.call(null,vec__67005_67103,(1),null);
var tile_data_67106 = app.tiles.general.tiles_by_number.call(null,tile_number_67105);
var seq__67008_67107 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67106));
var chunk__67009_67108 = null;
var count__67010_67109 = (0);
var i__67011_67110 = (0);
while(true){
if((i__67011_67110 < count__67010_67109)){
var tile_id_67111 = cljs.core._nth.call(null,chunk__67009_67108,i__67011_67110);
app.state.update_tile_extra.call(null,tile_x,tile_y_67102,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__67008_67107,chunk__67009_67108,count__67010_67109,i__67011_67110,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67111,vec__67005_67103,__67104,tile_number_67105,tile_data_67106,tile_y_67102,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67102,tile_data_67106);
});})(seq__67008_67107,chunk__67009_67108,count__67010_67109,i__67011_67110,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67111,vec__67005_67103,__67104,tile_number_67105,tile_data_67106,tile_y_67102,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67106))));


var G__67112 = seq__67008_67107;
var G__67113 = chunk__67009_67108;
var G__67114 = count__67010_67109;
var G__67115 = (i__67011_67110 + (1));
seq__67008_67107 = G__67112;
chunk__67009_67108 = G__67113;
count__67010_67109 = G__67114;
i__67011_67110 = G__67115;
continue;
} else {
var temp__5457__auto___67116__$1 = cljs.core.seq.call(null,seq__67008_67107);
if(temp__5457__auto___67116__$1){
var seq__67008_67117__$1 = temp__5457__auto___67116__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67008_67117__$1)){
var c__4351__auto___67118 = cljs.core.chunk_first.call(null,seq__67008_67117__$1);
var G__67119 = cljs.core.chunk_rest.call(null,seq__67008_67117__$1);
var G__67120 = c__4351__auto___67118;
var G__67121 = cljs.core.count.call(null,c__4351__auto___67118);
var G__67122 = (0);
seq__67008_67107 = G__67119;
chunk__67009_67108 = G__67120;
count__67010_67109 = G__67121;
i__67011_67110 = G__67122;
continue;
} else {
var tile_id_67123 = cljs.core.first.call(null,seq__67008_67117__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_67102,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__67008_67107,chunk__67009_67108,count__67010_67109,i__67011_67110,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67123,seq__67008_67117__$1,temp__5457__auto___67116__$1,vec__67005_67103,__67104,tile_number_67105,tile_data_67106,tile_y_67102,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67102,tile_data_67106);
});})(seq__67008_67107,chunk__67009_67108,count__67010_67109,i__67011_67110,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67123,seq__67008_67117__$1,temp__5457__auto___67116__$1,vec__67005_67103,__67104,tile_number_67105,tile_data_67106,tile_y_67102,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67106))));


var G__67124 = cljs.core.next.call(null,seq__67008_67117__$1);
var G__67125 = null;
var G__67126 = (0);
var G__67127 = (0);
seq__67008_67107 = G__67124;
chunk__67009_67108 = G__67125;
count__67010_67109 = G__67126;
i__67011_67110 = G__67127;
continue;
}
} else {
}
}
break;
}


var G__67128 = seq__66980_67098;
var G__67129 = chunk__66981_67099;
var G__67130 = count__66982_67100;
var G__67131 = (i__66983_67101 + (1));
seq__66980_67098 = G__67128;
chunk__66981_67099 = G__67129;
count__66982_67100 = G__67130;
i__66983_67101 = G__67131;
continue;
} else {
var temp__5457__auto___67132__$1 = cljs.core.seq.call(null,seq__66980_67098);
if(temp__5457__auto___67132__$1){
var seq__66980_67133__$1 = temp__5457__auto___67132__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66980_67133__$1)){
var c__4351__auto___67134 = cljs.core.chunk_first.call(null,seq__66980_67133__$1);
var G__67135 = cljs.core.chunk_rest.call(null,seq__66980_67133__$1);
var G__67136 = c__4351__auto___67134;
var G__67137 = cljs.core.count.call(null,c__4351__auto___67134);
var G__67138 = (0);
seq__66980_67098 = G__67135;
chunk__66981_67099 = G__67136;
count__66982_67100 = G__67137;
i__66983_67101 = G__67138;
continue;
} else {
var tile_y_67139 = cljs.core.first.call(null,seq__66980_67133__$1);
var vec__67012_67140 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_67139);
var __67141 = cljs.core.nth.call(null,vec__67012_67140,(0),null);
var tile_number_67142 = cljs.core.nth.call(null,vec__67012_67140,(1),null);
var tile_data_67143 = app.tiles.general.tiles_by_number.call(null,tile_number_67142);
var seq__67015_67144 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67143));
var chunk__67016_67145 = null;
var count__67017_67146 = (0);
var i__67018_67147 = (0);
while(true){
if((i__67018_67147 < count__67017_67146)){
var tile_id_67148 = cljs.core._nth.call(null,chunk__67016_67145,i__67018_67147);
app.state.update_tile_extra.call(null,tile_x,tile_y_67139,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__67015_67144,chunk__67016_67145,count__67017_67146,i__67018_67147,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67148,vec__67012_67140,__67141,tile_number_67142,tile_data_67143,tile_y_67139,seq__66980_67133__$1,temp__5457__auto___67132__$1,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67139,tile_data_67143);
});})(seq__67015_67144,chunk__67016_67145,count__67017_67146,i__67018_67147,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67148,vec__67012_67140,__67141,tile_number_67142,tile_data_67143,tile_y_67139,seq__66980_67133__$1,temp__5457__auto___67132__$1,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67143))));


var G__67149 = seq__67015_67144;
var G__67150 = chunk__67016_67145;
var G__67151 = count__67017_67146;
var G__67152 = (i__67018_67147 + (1));
seq__67015_67144 = G__67149;
chunk__67016_67145 = G__67150;
count__67017_67146 = G__67151;
i__67018_67147 = G__67152;
continue;
} else {
var temp__5457__auto___67153__$2 = cljs.core.seq.call(null,seq__67015_67144);
if(temp__5457__auto___67153__$2){
var seq__67015_67154__$1 = temp__5457__auto___67153__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67015_67154__$1)){
var c__4351__auto___67155 = cljs.core.chunk_first.call(null,seq__67015_67154__$1);
var G__67156 = cljs.core.chunk_rest.call(null,seq__67015_67154__$1);
var G__67157 = c__4351__auto___67155;
var G__67158 = cljs.core.count.call(null,c__4351__auto___67155);
var G__67159 = (0);
seq__67015_67144 = G__67156;
chunk__67016_67145 = G__67157;
count__67017_67146 = G__67158;
i__67018_67147 = G__67159;
continue;
} else {
var tile_id_67160 = cljs.core.first.call(null,seq__67015_67154__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_67139,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__67015_67144,chunk__67016_67145,count__67017_67146,i__67018_67147,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67160,seq__67015_67154__$1,temp__5457__auto___67153__$2,vec__67012_67140,__67141,tile_number_67142,tile_data_67143,tile_y_67139,seq__66980_67133__$1,temp__5457__auto___67132__$1,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__66978_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__66978_SHARP_,tile_x,tile_y_67139,tile_data_67143);
});})(seq__67015_67144,chunk__67016_67145,count__67017_67146,i__67018_67147,seq__66980_67098,chunk__66981_67099,count__66982_67100,i__66983_67101,seq__66979,chunk__66984,count__66985,i__66986,tile_id_67160,seq__67015_67154__$1,temp__5457__auto___67153__$2,vec__67012_67140,__67141,tile_number_67142,tile_data_67143,tile_y_67139,seq__66980_67133__$1,temp__5457__auto___67132__$1,tile_x,seq__66979__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_67143))));


var G__67161 = cljs.core.next.call(null,seq__67015_67154__$1);
var G__67162 = null;
var G__67163 = (0);
var G__67164 = (0);
seq__67015_67144 = G__67161;
chunk__67016_67145 = G__67162;
count__67017_67146 = G__67163;
i__67018_67147 = G__67164;
continue;
}
} else {
}
}
break;
}


var G__67165 = cljs.core.next.call(null,seq__66980_67133__$1);
var G__67166 = null;
var G__67167 = (0);
var G__67168 = (0);
seq__66980_67098 = G__67165;
chunk__66981_67099 = G__67166;
count__66982_67100 = G__67167;
i__66983_67101 = G__67168;
continue;
}
} else {
}
}
break;
}

var G__67169 = cljs.core.next.call(null,seq__66979__$1);
var G__67170 = null;
var G__67171 = (0);
var G__67172 = (0);
seq__66979 = G__67169;
chunk__66984 = G__67170;
count__66985 = G__67171;
i__66986 = G__67172;
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
return cljs.core.filter.call(null,(function (p1__67173_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(p1__67173_SHARP_),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705));
}),cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world)));
});
app.world_interop.send_to_entity = (function app$world_interop$send_to_entity(var_args){
var args__4534__auto__ = [];
var len__4531__auto___67177 = arguments.length;
var i__4532__auto___67178 = (0);
while(true){
if((i__4532__auto___67178 < len__4531__auto___67177)){
args__4534__auto__.push((arguments[i__4532__auto___67178]));

var G__67179 = (i__4532__auto___67178 + (1));
i__4532__auto___67178 = G__67179;
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
app.world_interop.send_to_entity.cljs$lang$applyTo = (function (seq67174){
var G__67175 = cljs.core.first.call(null,seq67174);
var seq67174__$1 = cljs.core.next.call(null,seq67174);
var G__67176 = cljs.core.first.call(null,seq67174__$1);
var seq67174__$2 = cljs.core.next.call(null,seq67174__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67175,G__67176,seq67174__$2);
});

app.world_interop.inject_entity = (function app$world_interop$inject_entity(e){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__67180){
var map__67181 = p__67180;
var map__67181__$1 = ((((!((map__67181 == null)))?(((((map__67181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67181):map__67181);
var state = map__67181__$1;
var world = cljs.core.get.call(null,map__67181__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.world_interop.kill_entity = (function app$world_interop$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__67183){
var map__67184 = p__67183;
var map__67184__$1 = ((((!((map__67184 == null)))?(((((map__67184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67184):map__67184);
var state = map__67184__$1;
var world = cljs.core.get.call(null,map__67184__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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

var G__67186 = new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(entity);
key = G__67186;
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
var vec__67187 = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
var conv_x = cljs.core.nth.call(null,vec__67187,(0),null);
var conv_y = cljs.core.nth.call(null,vec__67187,(1),null);
var tile_x = cljs.core.quot.call(null,conv_x.call(null,canvas_x),(32));
var tile_y = cljs.core.quot.call(null,conv_y.call(null,canvas_y),(32));
var vec__67190 = app.world_interop.get_world_size.call(null);
var world_width = cljs.core.nth.call(null,vec__67190,(0),null);
var world_height = cljs.core.nth.call(null,vec__67190,(1),null);
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
return cljs.core.map.call(null,(function (p__67193){
var vec__67194 = p__67193;
var key = cljs.core.nth.call(null,vec__67194,(0),null);
var l = cljs.core.nth.call(null,vec__67194,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"foreground","foreground",499022036)))?gamebase.layers.set_tile_in_layer.call(null,l,tile_x,tile_y,tile):l)], null);
}),layers);
}));
});

//# sourceMappingURL=world_interop.js.map
