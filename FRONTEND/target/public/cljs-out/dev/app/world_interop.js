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
var map__40149 = cljs.core.deref.call(null,app.state.app_state);
var map__40149__$1 = ((((!((map__40149 == null)))?(((((map__40149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40149):map__40149);
var world = cljs.core.get.call(null,map__40149__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__40149__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),((function (map__40149,map__40149__$1,world,timer){
return (function (p1__40148_SHARP_){
return gamebase.virtual_timer.run.call(null,p1__40148_SHARP_,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396).cljs$core$IFn$_invoke$arity$1(world));
});})(map__40149,map__40149__$1,world,timer))
);
});
app.world_interop.stop = (function app$world_interop$stop(){
var map__40151 = cljs.core.deref.call(null,app.state.app_state);
var map__40151__$1 = ((((!((map__40151 == null)))?(((((map__40151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40151):map__40151);
var world = cljs.core.get.call(null,map__40151__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__40151__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),gamebase.virtual_timer.stop);
});
app.world_interop.running_QMARK_ = (function app$world_interop$running_QMARK_(){
var map__40153 = cljs.core.deref.call(null,app.state.app_state);
var map__40153__$1 = ((((!((map__40153 == null)))?(((((map__40153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40153):map__40153);
var world = cljs.core.get.call(null,map__40153__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__40153__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return gamebase.virtual_timer.running_QMARK_.call(null,timer);
});
app.world_interop.get_time = (function app$world_interop$get_time(){

var map__40155 = cljs.core.deref.call(null,app.state.app_state);
var map__40155__$1 = ((((!((map__40155 == null)))?(((((map__40155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40155):map__40155);
var world = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__40157_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__40157_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.world_interop.init_tile_extra = (function app$world_interop$init_tile_extra(){
var layer = app.world_interop._get_layer.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state)),new cljs.core.Keyword(null,"foreground","foreground",499022036));
var world_width_in_tiles = (100);
var world_height_in_tiles = (100);
var seq__40159 = cljs.core.seq.call(null,cljs.core.range.call(null,world_width_in_tiles));
var chunk__40164 = null;
var count__40165 = (0);
var i__40166 = (0);
while(true){
if((i__40166 < count__40165)){
var tile_x = cljs.core._nth.call(null,chunk__40164,i__40166);
var seq__40167_40199 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__40168_40200 = null;
var count__40169_40201 = (0);
var i__40170_40202 = (0);
while(true){
if((i__40170_40202 < count__40169_40201)){
var tile_y_40203 = cljs.core._nth.call(null,chunk__40168_40200,i__40170_40202);
var vec__40171_40204 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_40203);
var __40205 = cljs.core.nth.call(null,vec__40171_40204,(0),null);
var tile_number_40206 = cljs.core.nth.call(null,vec__40171_40204,(1),null);
var tile_data_40207 = app.tiles.general.tiles_by_number.call(null,tile_number_40206);
var seq__40174_40208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40207));
var chunk__40175_40209 = null;
var count__40176_40210 = (0);
var i__40177_40211 = (0);
while(true){
if((i__40177_40211 < count__40176_40210)){
var tile_id_40212 = cljs.core._nth.call(null,chunk__40175_40209,i__40177_40211);
app.state.update_tile_extra.call(null,tile_x,tile_y_40203,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40174_40208,chunk__40175_40209,count__40176_40210,i__40177_40211,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40212,vec__40171_40204,__40205,tile_number_40206,tile_data_40207,tile_y_40203,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40203,tile_data_40207);
});})(seq__40174_40208,chunk__40175_40209,count__40176_40210,i__40177_40211,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40212,vec__40171_40204,__40205,tile_number_40206,tile_data_40207,tile_y_40203,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40207))));


var G__40213 = seq__40174_40208;
var G__40214 = chunk__40175_40209;
var G__40215 = count__40176_40210;
var G__40216 = (i__40177_40211 + (1));
seq__40174_40208 = G__40213;
chunk__40175_40209 = G__40214;
count__40176_40210 = G__40215;
i__40177_40211 = G__40216;
continue;
} else {
var temp__5457__auto___40217 = cljs.core.seq.call(null,seq__40174_40208);
if(temp__5457__auto___40217){
var seq__40174_40218__$1 = temp__5457__auto___40217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40174_40218__$1)){
var c__4351__auto___40219 = cljs.core.chunk_first.call(null,seq__40174_40218__$1);
var G__40220 = cljs.core.chunk_rest.call(null,seq__40174_40218__$1);
var G__40221 = c__4351__auto___40219;
var G__40222 = cljs.core.count.call(null,c__4351__auto___40219);
var G__40223 = (0);
seq__40174_40208 = G__40220;
chunk__40175_40209 = G__40221;
count__40176_40210 = G__40222;
i__40177_40211 = G__40223;
continue;
} else {
var tile_id_40224 = cljs.core.first.call(null,seq__40174_40218__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_40203,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40174_40208,chunk__40175_40209,count__40176_40210,i__40177_40211,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40224,seq__40174_40218__$1,temp__5457__auto___40217,vec__40171_40204,__40205,tile_number_40206,tile_data_40207,tile_y_40203,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40203,tile_data_40207);
});})(seq__40174_40208,chunk__40175_40209,count__40176_40210,i__40177_40211,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40224,seq__40174_40218__$1,temp__5457__auto___40217,vec__40171_40204,__40205,tile_number_40206,tile_data_40207,tile_y_40203,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40207))));


var G__40225 = cljs.core.next.call(null,seq__40174_40218__$1);
var G__40226 = null;
var G__40227 = (0);
var G__40228 = (0);
seq__40174_40208 = G__40225;
chunk__40175_40209 = G__40226;
count__40176_40210 = G__40227;
i__40177_40211 = G__40228;
continue;
}
} else {
}
}
break;
}


var G__40229 = seq__40167_40199;
var G__40230 = chunk__40168_40200;
var G__40231 = count__40169_40201;
var G__40232 = (i__40170_40202 + (1));
seq__40167_40199 = G__40229;
chunk__40168_40200 = G__40230;
count__40169_40201 = G__40231;
i__40170_40202 = G__40232;
continue;
} else {
var temp__5457__auto___40233 = cljs.core.seq.call(null,seq__40167_40199);
if(temp__5457__auto___40233){
var seq__40167_40234__$1 = temp__5457__auto___40233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40167_40234__$1)){
var c__4351__auto___40235 = cljs.core.chunk_first.call(null,seq__40167_40234__$1);
var G__40236 = cljs.core.chunk_rest.call(null,seq__40167_40234__$1);
var G__40237 = c__4351__auto___40235;
var G__40238 = cljs.core.count.call(null,c__4351__auto___40235);
var G__40239 = (0);
seq__40167_40199 = G__40236;
chunk__40168_40200 = G__40237;
count__40169_40201 = G__40238;
i__40170_40202 = G__40239;
continue;
} else {
var tile_y_40240 = cljs.core.first.call(null,seq__40167_40234__$1);
var vec__40178_40241 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_40240);
var __40242 = cljs.core.nth.call(null,vec__40178_40241,(0),null);
var tile_number_40243 = cljs.core.nth.call(null,vec__40178_40241,(1),null);
var tile_data_40244 = app.tiles.general.tiles_by_number.call(null,tile_number_40243);
var seq__40181_40245 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40244));
var chunk__40182_40246 = null;
var count__40183_40247 = (0);
var i__40184_40248 = (0);
while(true){
if((i__40184_40248 < count__40183_40247)){
var tile_id_40249 = cljs.core._nth.call(null,chunk__40182_40246,i__40184_40248);
app.state.update_tile_extra.call(null,tile_x,tile_y_40240,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40181_40245,chunk__40182_40246,count__40183_40247,i__40184_40248,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40249,vec__40178_40241,__40242,tile_number_40243,tile_data_40244,tile_y_40240,seq__40167_40234__$1,temp__5457__auto___40233,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40240,tile_data_40244);
});})(seq__40181_40245,chunk__40182_40246,count__40183_40247,i__40184_40248,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40249,vec__40178_40241,__40242,tile_number_40243,tile_data_40244,tile_y_40240,seq__40167_40234__$1,temp__5457__auto___40233,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40244))));


var G__40250 = seq__40181_40245;
var G__40251 = chunk__40182_40246;
var G__40252 = count__40183_40247;
var G__40253 = (i__40184_40248 + (1));
seq__40181_40245 = G__40250;
chunk__40182_40246 = G__40251;
count__40183_40247 = G__40252;
i__40184_40248 = G__40253;
continue;
} else {
var temp__5457__auto___40254__$1 = cljs.core.seq.call(null,seq__40181_40245);
if(temp__5457__auto___40254__$1){
var seq__40181_40255__$1 = temp__5457__auto___40254__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40181_40255__$1)){
var c__4351__auto___40256 = cljs.core.chunk_first.call(null,seq__40181_40255__$1);
var G__40257 = cljs.core.chunk_rest.call(null,seq__40181_40255__$1);
var G__40258 = c__4351__auto___40256;
var G__40259 = cljs.core.count.call(null,c__4351__auto___40256);
var G__40260 = (0);
seq__40181_40245 = G__40257;
chunk__40182_40246 = G__40258;
count__40183_40247 = G__40259;
i__40184_40248 = G__40260;
continue;
} else {
var tile_id_40261 = cljs.core.first.call(null,seq__40181_40255__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_40240,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40181_40245,chunk__40182_40246,count__40183_40247,i__40184_40248,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40261,seq__40181_40255__$1,temp__5457__auto___40254__$1,vec__40178_40241,__40242,tile_number_40243,tile_data_40244,tile_y_40240,seq__40167_40234__$1,temp__5457__auto___40233,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40240,tile_data_40244);
});})(seq__40181_40245,chunk__40182_40246,count__40183_40247,i__40184_40248,seq__40167_40199,chunk__40168_40200,count__40169_40201,i__40170_40202,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40261,seq__40181_40255__$1,temp__5457__auto___40254__$1,vec__40178_40241,__40242,tile_number_40243,tile_data_40244,tile_y_40240,seq__40167_40234__$1,temp__5457__auto___40233,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40244))));


var G__40262 = cljs.core.next.call(null,seq__40181_40255__$1);
var G__40263 = null;
var G__40264 = (0);
var G__40265 = (0);
seq__40181_40245 = G__40262;
chunk__40182_40246 = G__40263;
count__40183_40247 = G__40264;
i__40184_40248 = G__40265;
continue;
}
} else {
}
}
break;
}


var G__40266 = cljs.core.next.call(null,seq__40167_40234__$1);
var G__40267 = null;
var G__40268 = (0);
var G__40269 = (0);
seq__40167_40199 = G__40266;
chunk__40168_40200 = G__40267;
count__40169_40201 = G__40268;
i__40170_40202 = G__40269;
continue;
}
} else {
}
}
break;
}

var G__40270 = seq__40159;
var G__40271 = chunk__40164;
var G__40272 = count__40165;
var G__40273 = (i__40166 + (1));
seq__40159 = G__40270;
chunk__40164 = G__40271;
count__40165 = G__40272;
i__40166 = G__40273;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40159);
if(temp__5457__auto__){
var seq__40159__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40159__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40159__$1);
var G__40274 = cljs.core.chunk_rest.call(null,seq__40159__$1);
var G__40275 = c__4351__auto__;
var G__40276 = cljs.core.count.call(null,c__4351__auto__);
var G__40277 = (0);
seq__40159 = G__40274;
chunk__40164 = G__40275;
count__40165 = G__40276;
i__40166 = G__40277;
continue;
} else {
var tile_x = cljs.core.first.call(null,seq__40159__$1);
var seq__40160_40278 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__40161_40279 = null;
var count__40162_40280 = (0);
var i__40163_40281 = (0);
while(true){
if((i__40163_40281 < count__40162_40280)){
var tile_y_40282 = cljs.core._nth.call(null,chunk__40161_40279,i__40163_40281);
var vec__40185_40283 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_40282);
var __40284 = cljs.core.nth.call(null,vec__40185_40283,(0),null);
var tile_number_40285 = cljs.core.nth.call(null,vec__40185_40283,(1),null);
var tile_data_40286 = app.tiles.general.tiles_by_number.call(null,tile_number_40285);
var seq__40188_40287 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40286));
var chunk__40189_40288 = null;
var count__40190_40289 = (0);
var i__40191_40290 = (0);
while(true){
if((i__40191_40290 < count__40190_40289)){
var tile_id_40291 = cljs.core._nth.call(null,chunk__40189_40288,i__40191_40290);
app.state.update_tile_extra.call(null,tile_x,tile_y_40282,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40188_40287,chunk__40189_40288,count__40190_40289,i__40191_40290,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40291,vec__40185_40283,__40284,tile_number_40285,tile_data_40286,tile_y_40282,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40282,tile_data_40286);
});})(seq__40188_40287,chunk__40189_40288,count__40190_40289,i__40191_40290,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40291,vec__40185_40283,__40284,tile_number_40285,tile_data_40286,tile_y_40282,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40286))));


var G__40292 = seq__40188_40287;
var G__40293 = chunk__40189_40288;
var G__40294 = count__40190_40289;
var G__40295 = (i__40191_40290 + (1));
seq__40188_40287 = G__40292;
chunk__40189_40288 = G__40293;
count__40190_40289 = G__40294;
i__40191_40290 = G__40295;
continue;
} else {
var temp__5457__auto___40296__$1 = cljs.core.seq.call(null,seq__40188_40287);
if(temp__5457__auto___40296__$1){
var seq__40188_40297__$1 = temp__5457__auto___40296__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40188_40297__$1)){
var c__4351__auto___40298 = cljs.core.chunk_first.call(null,seq__40188_40297__$1);
var G__40299 = cljs.core.chunk_rest.call(null,seq__40188_40297__$1);
var G__40300 = c__4351__auto___40298;
var G__40301 = cljs.core.count.call(null,c__4351__auto___40298);
var G__40302 = (0);
seq__40188_40287 = G__40299;
chunk__40189_40288 = G__40300;
count__40190_40289 = G__40301;
i__40191_40290 = G__40302;
continue;
} else {
var tile_id_40303 = cljs.core.first.call(null,seq__40188_40297__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_40282,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40188_40287,chunk__40189_40288,count__40190_40289,i__40191_40290,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40303,seq__40188_40297__$1,temp__5457__auto___40296__$1,vec__40185_40283,__40284,tile_number_40285,tile_data_40286,tile_y_40282,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40282,tile_data_40286);
});})(seq__40188_40287,chunk__40189_40288,count__40190_40289,i__40191_40290,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40303,seq__40188_40297__$1,temp__5457__auto___40296__$1,vec__40185_40283,__40284,tile_number_40285,tile_data_40286,tile_y_40282,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40286))));


var G__40304 = cljs.core.next.call(null,seq__40188_40297__$1);
var G__40305 = null;
var G__40306 = (0);
var G__40307 = (0);
seq__40188_40287 = G__40304;
chunk__40189_40288 = G__40305;
count__40190_40289 = G__40306;
i__40191_40290 = G__40307;
continue;
}
} else {
}
}
break;
}


var G__40308 = seq__40160_40278;
var G__40309 = chunk__40161_40279;
var G__40310 = count__40162_40280;
var G__40311 = (i__40163_40281 + (1));
seq__40160_40278 = G__40308;
chunk__40161_40279 = G__40309;
count__40162_40280 = G__40310;
i__40163_40281 = G__40311;
continue;
} else {
var temp__5457__auto___40312__$1 = cljs.core.seq.call(null,seq__40160_40278);
if(temp__5457__auto___40312__$1){
var seq__40160_40313__$1 = temp__5457__auto___40312__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40160_40313__$1)){
var c__4351__auto___40314 = cljs.core.chunk_first.call(null,seq__40160_40313__$1);
var G__40315 = cljs.core.chunk_rest.call(null,seq__40160_40313__$1);
var G__40316 = c__4351__auto___40314;
var G__40317 = cljs.core.count.call(null,c__4351__auto___40314);
var G__40318 = (0);
seq__40160_40278 = G__40315;
chunk__40161_40279 = G__40316;
count__40162_40280 = G__40317;
i__40163_40281 = G__40318;
continue;
} else {
var tile_y_40319 = cljs.core.first.call(null,seq__40160_40313__$1);
var vec__40192_40320 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_40319);
var __40321 = cljs.core.nth.call(null,vec__40192_40320,(0),null);
var tile_number_40322 = cljs.core.nth.call(null,vec__40192_40320,(1),null);
var tile_data_40323 = app.tiles.general.tiles_by_number.call(null,tile_number_40322);
var seq__40195_40324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40323));
var chunk__40196_40325 = null;
var count__40197_40326 = (0);
var i__40198_40327 = (0);
while(true){
if((i__40198_40327 < count__40197_40326)){
var tile_id_40328 = cljs.core._nth.call(null,chunk__40196_40325,i__40198_40327);
app.state.update_tile_extra.call(null,tile_x,tile_y_40319,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40195_40324,chunk__40196_40325,count__40197_40326,i__40198_40327,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40328,vec__40192_40320,__40321,tile_number_40322,tile_data_40323,tile_y_40319,seq__40160_40313__$1,temp__5457__auto___40312__$1,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40319,tile_data_40323);
});})(seq__40195_40324,chunk__40196_40325,count__40197_40326,i__40198_40327,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40328,vec__40192_40320,__40321,tile_number_40322,tile_data_40323,tile_y_40319,seq__40160_40313__$1,temp__5457__auto___40312__$1,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40323))));


var G__40329 = seq__40195_40324;
var G__40330 = chunk__40196_40325;
var G__40331 = count__40197_40326;
var G__40332 = (i__40198_40327 + (1));
seq__40195_40324 = G__40329;
chunk__40196_40325 = G__40330;
count__40197_40326 = G__40331;
i__40198_40327 = G__40332;
continue;
} else {
var temp__5457__auto___40333__$2 = cljs.core.seq.call(null,seq__40195_40324);
if(temp__5457__auto___40333__$2){
var seq__40195_40334__$1 = temp__5457__auto___40333__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40195_40334__$1)){
var c__4351__auto___40335 = cljs.core.chunk_first.call(null,seq__40195_40334__$1);
var G__40336 = cljs.core.chunk_rest.call(null,seq__40195_40334__$1);
var G__40337 = c__4351__auto___40335;
var G__40338 = cljs.core.count.call(null,c__4351__auto___40335);
var G__40339 = (0);
seq__40195_40324 = G__40336;
chunk__40196_40325 = G__40337;
count__40197_40326 = G__40338;
i__40198_40327 = G__40339;
continue;
} else {
var tile_id_40340 = cljs.core.first.call(null,seq__40195_40334__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_40319,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__40195_40324,chunk__40196_40325,count__40197_40326,i__40198_40327,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40340,seq__40195_40334__$1,temp__5457__auto___40333__$2,vec__40192_40320,__40321,tile_number_40322,tile_data_40323,tile_y_40319,seq__40160_40313__$1,temp__5457__auto___40312__$1,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__40158_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__40158_SHARP_,tile_x,tile_y_40319,tile_data_40323);
});})(seq__40195_40324,chunk__40196_40325,count__40197_40326,i__40198_40327,seq__40160_40278,chunk__40161_40279,count__40162_40280,i__40163_40281,seq__40159,chunk__40164,count__40165,i__40166,tile_id_40340,seq__40195_40334__$1,temp__5457__auto___40333__$2,vec__40192_40320,__40321,tile_number_40322,tile_data_40323,tile_y_40319,seq__40160_40313__$1,temp__5457__auto___40312__$1,tile_x,seq__40159__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_40323))));


var G__40341 = cljs.core.next.call(null,seq__40195_40334__$1);
var G__40342 = null;
var G__40343 = (0);
var G__40344 = (0);
seq__40195_40324 = G__40341;
chunk__40196_40325 = G__40342;
count__40197_40326 = G__40343;
i__40198_40327 = G__40344;
continue;
}
} else {
}
}
break;
}


var G__40345 = cljs.core.next.call(null,seq__40160_40313__$1);
var G__40346 = null;
var G__40347 = (0);
var G__40348 = (0);
seq__40160_40278 = G__40345;
chunk__40161_40279 = G__40346;
count__40162_40280 = G__40347;
i__40163_40281 = G__40348;
continue;
}
} else {
}
}
break;
}

var G__40349 = cljs.core.next.call(null,seq__40159__$1);
var G__40350 = null;
var G__40351 = (0);
var G__40352 = (0);
seq__40159 = G__40349;
chunk__40164 = G__40350;
count__40165 = G__40351;
i__40166 = G__40352;
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
return cljs.core.filter.call(null,(function (p1__40353_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(p1__40353_SHARP_),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705));
}),cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world)));
});
app.world_interop.send_to_entity = (function app$world_interop$send_to_entity(var_args){
var args__4534__auto__ = [];
var len__4531__auto___40357 = arguments.length;
var i__4532__auto___40358 = (0);
while(true){
if((i__4532__auto___40358 < len__4531__auto___40357)){
args__4534__auto__.push((arguments[i__4532__auto___40358]));

var G__40359 = (i__4532__auto___40358 + (1));
i__4532__auto___40358 = G__40359;
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
app.world_interop.send_to_entity.cljs$lang$applyTo = (function (seq40354){
var G__40355 = cljs.core.first.call(null,seq40354);
var seq40354__$1 = cljs.core.next.call(null,seq40354);
var G__40356 = cljs.core.first.call(null,seq40354__$1);
var seq40354__$2 = cljs.core.next.call(null,seq40354__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40355,G__40356,seq40354__$2);
});

app.world_interop.inject_entity = (function app$world_interop$inject_entity(e){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__40360){
var map__40361 = p__40360;
var map__40361__$1 = ((((!((map__40361 == null)))?(((((map__40361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40361):map__40361);
var state = map__40361__$1;
var world = cljs.core.get.call(null,map__40361__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.world_interop.kill_entity = (function app$world_interop$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__40363){
var map__40364 = p__40363;
var map__40364__$1 = ((((!((map__40364 == null)))?(((((map__40364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40364):map__40364);
var state = map__40364__$1;
var world = cljs.core.get.call(null,map__40364__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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

var G__40366 = new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(entity);
key = G__40366;
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
var vec__40367 = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
var conv_x = cljs.core.nth.call(null,vec__40367,(0),null);
var conv_y = cljs.core.nth.call(null,vec__40367,(1),null);
var tile_x = cljs.core.quot.call(null,conv_x.call(null,canvas_x),(32));
var tile_y = cljs.core.quot.call(null,conv_y.call(null,canvas_y),(32));
var vec__40370 = app.world_interop.get_world_size.call(null);
var world_width = cljs.core.nth.call(null,vec__40370,(0),null);
var world_height = cljs.core.nth.call(null,vec__40370,(1),null);
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
return cljs.core.map.call(null,(function (p__40373){
var vec__40374 = p__40373;
var key = cljs.core.nth.call(null,vec__40374,(0),null);
var l = cljs.core.nth.call(null,vec__40374,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"foreground","foreground",499022036)))?gamebase.layers.set_tile_in_layer.call(null,l,tile_x,tile_y,tile):l)], null);
}),layers);
}));
});

//# sourceMappingURL=world_interop.js.map
