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
var map__30073 = cljs.core.deref.call(null,app.state.app_state);
var map__30073__$1 = ((((!((map__30073 == null)))?(((((map__30073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30073):map__30073);
var world = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),((function (map__30073,map__30073__$1,world,timer){
return (function (p1__30072_SHARP_){
return gamebase.virtual_timer.run.call(null,p1__30072_SHARP_,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396).cljs$core$IFn$_invoke$arity$1(world));
});})(map__30073,map__30073__$1,world,timer))
);
});
app.world_interop.stop = (function app$world_interop$stop(){
var map__30075 = cljs.core.deref.call(null,app.state.app_state);
var map__30075__$1 = ((((!((map__30075 == null)))?(((((map__30075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30075):map__30075);
var world = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),gamebase.virtual_timer.stop);
});
app.world_interop.running_QMARK_ = (function app$world_interop$running_QMARK_(){
var map__30077 = cljs.core.deref.call(null,app.state.app_state);
var map__30077__$1 = ((((!((map__30077 == null)))?(((((map__30077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30077):map__30077);
var world = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return gamebase.virtual_timer.running_QMARK_.call(null,timer);
});
app.world_interop.get_time = (function app$world_interop$get_time(){

var map__30079 = cljs.core.deref.call(null,app.state.app_state);
var map__30079__$1 = ((((!((map__30079 == null)))?(((((map__30079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30079):map__30079);
var world = cljs.core.get.call(null,map__30079__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__30079__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30081_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__30081_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.world_interop.init_tile_extra = (function app$world_interop$init_tile_extra(){
var layer = app.world_interop._get_layer.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state)),new cljs.core.Keyword(null,"foreground","foreground",499022036));
var world_width_in_tiles = (100);
var world_height_in_tiles = (100);
var seq__30083 = cljs.core.seq.call(null,cljs.core.range.call(null,world_width_in_tiles));
var chunk__30088 = null;
var count__30089 = (0);
var i__30090 = (0);
while(true){
if((i__30090 < count__30089)){
var tile_x = cljs.core._nth.call(null,chunk__30088,i__30090);
var seq__30091_30123 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__30092_30124 = null;
var count__30093_30125 = (0);
var i__30094_30126 = (0);
while(true){
if((i__30094_30126 < count__30093_30125)){
var tile_y_30127 = cljs.core._nth.call(null,chunk__30092_30124,i__30094_30126);
var vec__30095_30128 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_30127);
var __30129 = cljs.core.nth.call(null,vec__30095_30128,(0),null);
var tile_number_30130 = cljs.core.nth.call(null,vec__30095_30128,(1),null);
var tile_data_30131 = app.tiles.general.tiles_by_number.call(null,tile_number_30130);
var seq__30098_30132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30131));
var chunk__30099_30133 = null;
var count__30100_30134 = (0);
var i__30101_30135 = (0);
while(true){
if((i__30101_30135 < count__30100_30134)){
var tile_id_30136 = cljs.core._nth.call(null,chunk__30099_30133,i__30101_30135);
app.state.update_tile_extra.call(null,tile_x,tile_y_30127,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30098_30132,chunk__30099_30133,count__30100_30134,i__30101_30135,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30136,vec__30095_30128,__30129,tile_number_30130,tile_data_30131,tile_y_30127,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30127,tile_data_30131);
});})(seq__30098_30132,chunk__30099_30133,count__30100_30134,i__30101_30135,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30136,vec__30095_30128,__30129,tile_number_30130,tile_data_30131,tile_y_30127,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30131))));


var G__30137 = seq__30098_30132;
var G__30138 = chunk__30099_30133;
var G__30139 = count__30100_30134;
var G__30140 = (i__30101_30135 + (1));
seq__30098_30132 = G__30137;
chunk__30099_30133 = G__30138;
count__30100_30134 = G__30139;
i__30101_30135 = G__30140;
continue;
} else {
var temp__5457__auto___30141 = cljs.core.seq.call(null,seq__30098_30132);
if(temp__5457__auto___30141){
var seq__30098_30142__$1 = temp__5457__auto___30141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30098_30142__$1)){
var c__4351__auto___30143 = cljs.core.chunk_first.call(null,seq__30098_30142__$1);
var G__30144 = cljs.core.chunk_rest.call(null,seq__30098_30142__$1);
var G__30145 = c__4351__auto___30143;
var G__30146 = cljs.core.count.call(null,c__4351__auto___30143);
var G__30147 = (0);
seq__30098_30132 = G__30144;
chunk__30099_30133 = G__30145;
count__30100_30134 = G__30146;
i__30101_30135 = G__30147;
continue;
} else {
var tile_id_30148 = cljs.core.first.call(null,seq__30098_30142__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_30127,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30098_30132,chunk__30099_30133,count__30100_30134,i__30101_30135,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30148,seq__30098_30142__$1,temp__5457__auto___30141,vec__30095_30128,__30129,tile_number_30130,tile_data_30131,tile_y_30127,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30127,tile_data_30131);
});})(seq__30098_30132,chunk__30099_30133,count__30100_30134,i__30101_30135,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30148,seq__30098_30142__$1,temp__5457__auto___30141,vec__30095_30128,__30129,tile_number_30130,tile_data_30131,tile_y_30127,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30131))));


var G__30149 = cljs.core.next.call(null,seq__30098_30142__$1);
var G__30150 = null;
var G__30151 = (0);
var G__30152 = (0);
seq__30098_30132 = G__30149;
chunk__30099_30133 = G__30150;
count__30100_30134 = G__30151;
i__30101_30135 = G__30152;
continue;
}
} else {
}
}
break;
}


var G__30153 = seq__30091_30123;
var G__30154 = chunk__30092_30124;
var G__30155 = count__30093_30125;
var G__30156 = (i__30094_30126 + (1));
seq__30091_30123 = G__30153;
chunk__30092_30124 = G__30154;
count__30093_30125 = G__30155;
i__30094_30126 = G__30156;
continue;
} else {
var temp__5457__auto___30157 = cljs.core.seq.call(null,seq__30091_30123);
if(temp__5457__auto___30157){
var seq__30091_30158__$1 = temp__5457__auto___30157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30091_30158__$1)){
var c__4351__auto___30159 = cljs.core.chunk_first.call(null,seq__30091_30158__$1);
var G__30160 = cljs.core.chunk_rest.call(null,seq__30091_30158__$1);
var G__30161 = c__4351__auto___30159;
var G__30162 = cljs.core.count.call(null,c__4351__auto___30159);
var G__30163 = (0);
seq__30091_30123 = G__30160;
chunk__30092_30124 = G__30161;
count__30093_30125 = G__30162;
i__30094_30126 = G__30163;
continue;
} else {
var tile_y_30164 = cljs.core.first.call(null,seq__30091_30158__$1);
var vec__30102_30165 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_30164);
var __30166 = cljs.core.nth.call(null,vec__30102_30165,(0),null);
var tile_number_30167 = cljs.core.nth.call(null,vec__30102_30165,(1),null);
var tile_data_30168 = app.tiles.general.tiles_by_number.call(null,tile_number_30167);
var seq__30105_30169 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30168));
var chunk__30106_30170 = null;
var count__30107_30171 = (0);
var i__30108_30172 = (0);
while(true){
if((i__30108_30172 < count__30107_30171)){
var tile_id_30173 = cljs.core._nth.call(null,chunk__30106_30170,i__30108_30172);
app.state.update_tile_extra.call(null,tile_x,tile_y_30164,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30105_30169,chunk__30106_30170,count__30107_30171,i__30108_30172,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30173,vec__30102_30165,__30166,tile_number_30167,tile_data_30168,tile_y_30164,seq__30091_30158__$1,temp__5457__auto___30157,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30164,tile_data_30168);
});})(seq__30105_30169,chunk__30106_30170,count__30107_30171,i__30108_30172,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30173,vec__30102_30165,__30166,tile_number_30167,tile_data_30168,tile_y_30164,seq__30091_30158__$1,temp__5457__auto___30157,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30168))));


var G__30174 = seq__30105_30169;
var G__30175 = chunk__30106_30170;
var G__30176 = count__30107_30171;
var G__30177 = (i__30108_30172 + (1));
seq__30105_30169 = G__30174;
chunk__30106_30170 = G__30175;
count__30107_30171 = G__30176;
i__30108_30172 = G__30177;
continue;
} else {
var temp__5457__auto___30178__$1 = cljs.core.seq.call(null,seq__30105_30169);
if(temp__5457__auto___30178__$1){
var seq__30105_30179__$1 = temp__5457__auto___30178__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30105_30179__$1)){
var c__4351__auto___30180 = cljs.core.chunk_first.call(null,seq__30105_30179__$1);
var G__30181 = cljs.core.chunk_rest.call(null,seq__30105_30179__$1);
var G__30182 = c__4351__auto___30180;
var G__30183 = cljs.core.count.call(null,c__4351__auto___30180);
var G__30184 = (0);
seq__30105_30169 = G__30181;
chunk__30106_30170 = G__30182;
count__30107_30171 = G__30183;
i__30108_30172 = G__30184;
continue;
} else {
var tile_id_30185 = cljs.core.first.call(null,seq__30105_30179__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_30164,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30105_30169,chunk__30106_30170,count__30107_30171,i__30108_30172,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30185,seq__30105_30179__$1,temp__5457__auto___30178__$1,vec__30102_30165,__30166,tile_number_30167,tile_data_30168,tile_y_30164,seq__30091_30158__$1,temp__5457__auto___30157,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30164,tile_data_30168);
});})(seq__30105_30169,chunk__30106_30170,count__30107_30171,i__30108_30172,seq__30091_30123,chunk__30092_30124,count__30093_30125,i__30094_30126,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30185,seq__30105_30179__$1,temp__5457__auto___30178__$1,vec__30102_30165,__30166,tile_number_30167,tile_data_30168,tile_y_30164,seq__30091_30158__$1,temp__5457__auto___30157,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30168))));


var G__30186 = cljs.core.next.call(null,seq__30105_30179__$1);
var G__30187 = null;
var G__30188 = (0);
var G__30189 = (0);
seq__30105_30169 = G__30186;
chunk__30106_30170 = G__30187;
count__30107_30171 = G__30188;
i__30108_30172 = G__30189;
continue;
}
} else {
}
}
break;
}


var G__30190 = cljs.core.next.call(null,seq__30091_30158__$1);
var G__30191 = null;
var G__30192 = (0);
var G__30193 = (0);
seq__30091_30123 = G__30190;
chunk__30092_30124 = G__30191;
count__30093_30125 = G__30192;
i__30094_30126 = G__30193;
continue;
}
} else {
}
}
break;
}

var G__30194 = seq__30083;
var G__30195 = chunk__30088;
var G__30196 = count__30089;
var G__30197 = (i__30090 + (1));
seq__30083 = G__30194;
chunk__30088 = G__30195;
count__30089 = G__30196;
i__30090 = G__30197;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30083);
if(temp__5457__auto__){
var seq__30083__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30083__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30083__$1);
var G__30198 = cljs.core.chunk_rest.call(null,seq__30083__$1);
var G__30199 = c__4351__auto__;
var G__30200 = cljs.core.count.call(null,c__4351__auto__);
var G__30201 = (0);
seq__30083 = G__30198;
chunk__30088 = G__30199;
count__30089 = G__30200;
i__30090 = G__30201;
continue;
} else {
var tile_x = cljs.core.first.call(null,seq__30083__$1);
var seq__30084_30202 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__30085_30203 = null;
var count__30086_30204 = (0);
var i__30087_30205 = (0);
while(true){
if((i__30087_30205 < count__30086_30204)){
var tile_y_30206 = cljs.core._nth.call(null,chunk__30085_30203,i__30087_30205);
var vec__30109_30207 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_30206);
var __30208 = cljs.core.nth.call(null,vec__30109_30207,(0),null);
var tile_number_30209 = cljs.core.nth.call(null,vec__30109_30207,(1),null);
var tile_data_30210 = app.tiles.general.tiles_by_number.call(null,tile_number_30209);
var seq__30112_30211 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30210));
var chunk__30113_30212 = null;
var count__30114_30213 = (0);
var i__30115_30214 = (0);
while(true){
if((i__30115_30214 < count__30114_30213)){
var tile_id_30215 = cljs.core._nth.call(null,chunk__30113_30212,i__30115_30214);
app.state.update_tile_extra.call(null,tile_x,tile_y_30206,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30112_30211,chunk__30113_30212,count__30114_30213,i__30115_30214,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30215,vec__30109_30207,__30208,tile_number_30209,tile_data_30210,tile_y_30206,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30206,tile_data_30210);
});})(seq__30112_30211,chunk__30113_30212,count__30114_30213,i__30115_30214,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30215,vec__30109_30207,__30208,tile_number_30209,tile_data_30210,tile_y_30206,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30210))));


var G__30216 = seq__30112_30211;
var G__30217 = chunk__30113_30212;
var G__30218 = count__30114_30213;
var G__30219 = (i__30115_30214 + (1));
seq__30112_30211 = G__30216;
chunk__30113_30212 = G__30217;
count__30114_30213 = G__30218;
i__30115_30214 = G__30219;
continue;
} else {
var temp__5457__auto___30220__$1 = cljs.core.seq.call(null,seq__30112_30211);
if(temp__5457__auto___30220__$1){
var seq__30112_30221__$1 = temp__5457__auto___30220__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30112_30221__$1)){
var c__4351__auto___30222 = cljs.core.chunk_first.call(null,seq__30112_30221__$1);
var G__30223 = cljs.core.chunk_rest.call(null,seq__30112_30221__$1);
var G__30224 = c__4351__auto___30222;
var G__30225 = cljs.core.count.call(null,c__4351__auto___30222);
var G__30226 = (0);
seq__30112_30211 = G__30223;
chunk__30113_30212 = G__30224;
count__30114_30213 = G__30225;
i__30115_30214 = G__30226;
continue;
} else {
var tile_id_30227 = cljs.core.first.call(null,seq__30112_30221__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_30206,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30112_30211,chunk__30113_30212,count__30114_30213,i__30115_30214,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30227,seq__30112_30221__$1,temp__5457__auto___30220__$1,vec__30109_30207,__30208,tile_number_30209,tile_data_30210,tile_y_30206,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30206,tile_data_30210);
});})(seq__30112_30211,chunk__30113_30212,count__30114_30213,i__30115_30214,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30227,seq__30112_30221__$1,temp__5457__auto___30220__$1,vec__30109_30207,__30208,tile_number_30209,tile_data_30210,tile_y_30206,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30210))));


var G__30228 = cljs.core.next.call(null,seq__30112_30221__$1);
var G__30229 = null;
var G__30230 = (0);
var G__30231 = (0);
seq__30112_30211 = G__30228;
chunk__30113_30212 = G__30229;
count__30114_30213 = G__30230;
i__30115_30214 = G__30231;
continue;
}
} else {
}
}
break;
}


var G__30232 = seq__30084_30202;
var G__30233 = chunk__30085_30203;
var G__30234 = count__30086_30204;
var G__30235 = (i__30087_30205 + (1));
seq__30084_30202 = G__30232;
chunk__30085_30203 = G__30233;
count__30086_30204 = G__30234;
i__30087_30205 = G__30235;
continue;
} else {
var temp__5457__auto___30236__$1 = cljs.core.seq.call(null,seq__30084_30202);
if(temp__5457__auto___30236__$1){
var seq__30084_30237__$1 = temp__5457__auto___30236__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30084_30237__$1)){
var c__4351__auto___30238 = cljs.core.chunk_first.call(null,seq__30084_30237__$1);
var G__30239 = cljs.core.chunk_rest.call(null,seq__30084_30237__$1);
var G__30240 = c__4351__auto___30238;
var G__30241 = cljs.core.count.call(null,c__4351__auto___30238);
var G__30242 = (0);
seq__30084_30202 = G__30239;
chunk__30085_30203 = G__30240;
count__30086_30204 = G__30241;
i__30087_30205 = G__30242;
continue;
} else {
var tile_y_30243 = cljs.core.first.call(null,seq__30084_30237__$1);
var vec__30116_30244 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_30243);
var __30245 = cljs.core.nth.call(null,vec__30116_30244,(0),null);
var tile_number_30246 = cljs.core.nth.call(null,vec__30116_30244,(1),null);
var tile_data_30247 = app.tiles.general.tiles_by_number.call(null,tile_number_30246);
var seq__30119_30248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30247));
var chunk__30120_30249 = null;
var count__30121_30250 = (0);
var i__30122_30251 = (0);
while(true){
if((i__30122_30251 < count__30121_30250)){
var tile_id_30252 = cljs.core._nth.call(null,chunk__30120_30249,i__30122_30251);
app.state.update_tile_extra.call(null,tile_x,tile_y_30243,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30119_30248,chunk__30120_30249,count__30121_30250,i__30122_30251,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30252,vec__30116_30244,__30245,tile_number_30246,tile_data_30247,tile_y_30243,seq__30084_30237__$1,temp__5457__auto___30236__$1,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30243,tile_data_30247);
});})(seq__30119_30248,chunk__30120_30249,count__30121_30250,i__30122_30251,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30252,vec__30116_30244,__30245,tile_number_30246,tile_data_30247,tile_y_30243,seq__30084_30237__$1,temp__5457__auto___30236__$1,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30247))));


var G__30253 = seq__30119_30248;
var G__30254 = chunk__30120_30249;
var G__30255 = count__30121_30250;
var G__30256 = (i__30122_30251 + (1));
seq__30119_30248 = G__30253;
chunk__30120_30249 = G__30254;
count__30121_30250 = G__30255;
i__30122_30251 = G__30256;
continue;
} else {
var temp__5457__auto___30257__$2 = cljs.core.seq.call(null,seq__30119_30248);
if(temp__5457__auto___30257__$2){
var seq__30119_30258__$1 = temp__5457__auto___30257__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30119_30258__$1)){
var c__4351__auto___30259 = cljs.core.chunk_first.call(null,seq__30119_30258__$1);
var G__30260 = cljs.core.chunk_rest.call(null,seq__30119_30258__$1);
var G__30261 = c__4351__auto___30259;
var G__30262 = cljs.core.count.call(null,c__4351__auto___30259);
var G__30263 = (0);
seq__30119_30248 = G__30260;
chunk__30120_30249 = G__30261;
count__30121_30250 = G__30262;
i__30122_30251 = G__30263;
continue;
} else {
var tile_id_30264 = cljs.core.first.call(null,seq__30119_30258__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_30243,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__30119_30248,chunk__30120_30249,count__30121_30250,i__30122_30251,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30264,seq__30119_30258__$1,temp__5457__auto___30257__$2,vec__30116_30244,__30245,tile_number_30246,tile_data_30247,tile_y_30243,seq__30084_30237__$1,temp__5457__auto___30236__$1,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__30082_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__30082_SHARP_,tile_x,tile_y_30243,tile_data_30247);
});})(seq__30119_30248,chunk__30120_30249,count__30121_30250,i__30122_30251,seq__30084_30202,chunk__30085_30203,count__30086_30204,i__30087_30205,seq__30083,chunk__30088,count__30089,i__30090,tile_id_30264,seq__30119_30258__$1,temp__5457__auto___30257__$2,vec__30116_30244,__30245,tile_number_30246,tile_data_30247,tile_y_30243,seq__30084_30237__$1,temp__5457__auto___30236__$1,tile_x,seq__30083__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_30247))));


var G__30265 = cljs.core.next.call(null,seq__30119_30258__$1);
var G__30266 = null;
var G__30267 = (0);
var G__30268 = (0);
seq__30119_30248 = G__30265;
chunk__30120_30249 = G__30266;
count__30121_30250 = G__30267;
i__30122_30251 = G__30268;
continue;
}
} else {
}
}
break;
}


var G__30269 = cljs.core.next.call(null,seq__30084_30237__$1);
var G__30270 = null;
var G__30271 = (0);
var G__30272 = (0);
seq__30084_30202 = G__30269;
chunk__30085_30203 = G__30270;
count__30086_30204 = G__30271;
i__30087_30205 = G__30272;
continue;
}
} else {
}
}
break;
}

var G__30273 = cljs.core.next.call(null,seq__30083__$1);
var G__30274 = null;
var G__30275 = (0);
var G__30276 = (0);
seq__30083 = G__30273;
chunk__30088 = G__30274;
count__30089 = G__30275;
i__30090 = G__30276;
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
return cljs.core.filter.call(null,(function (p1__30277_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(p1__30277_SHARP_),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705));
}),cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world)));
});
app.world_interop.send_to_entity = (function app$world_interop$send_to_entity(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30281 = arguments.length;
var i__4532__auto___30282 = (0);
while(true){
if((i__4532__auto___30282 < len__4531__auto___30281)){
args__4534__auto__.push((arguments[i__4532__auto___30282]));

var G__30283 = (i__4532__auto___30282 + (1));
i__4532__auto___30282 = G__30283;
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
app.world_interop.send_to_entity.cljs$lang$applyTo = (function (seq30278){
var G__30279 = cljs.core.first.call(null,seq30278);
var seq30278__$1 = cljs.core.next.call(null,seq30278);
var G__30280 = cljs.core.first.call(null,seq30278__$1);
var seq30278__$2 = cljs.core.next.call(null,seq30278__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30279,G__30280,seq30278__$2);
});

app.world_interop.inject_entity = (function app$world_interop$inject_entity(e){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__30284){
var map__30285 = p__30284;
var map__30285__$1 = ((((!((map__30285 == null)))?(((((map__30285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30285):map__30285);
var state = map__30285__$1;
var world = cljs.core.get.call(null,map__30285__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.world_interop.kill_entity = (function app$world_interop$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__30287){
var map__30288 = p__30287;
var map__30288__$1 = ((((!((map__30288 == null)))?(((((map__30288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30288):map__30288);
var state = map__30288__$1;
var world = cljs.core.get.call(null,map__30288__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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

var G__30290 = new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(entity);
key = G__30290;
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
var vec__30291 = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
var conv_x = cljs.core.nth.call(null,vec__30291,(0),null);
var conv_y = cljs.core.nth.call(null,vec__30291,(1),null);
var tile_x = cljs.core.quot.call(null,conv_x.call(null,canvas_x),(32));
var tile_y = cljs.core.quot.call(null,conv_y.call(null,canvas_y),(32));
var vec__30294 = app.world_interop.get_world_size.call(null);
var world_width = cljs.core.nth.call(null,vec__30294,(0),null);
var world_height = cljs.core.nth.call(null,vec__30294,(1),null);
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
return cljs.core.map.call(null,(function (p__30297){
var vec__30298 = p__30297;
var key = cljs.core.nth.call(null,vec__30298,(0),null);
var l = cljs.core.nth.call(null,vec__30298,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"foreground","foreground",499022036)))?gamebase.layers.set_tile_in_layer.call(null,l,tile_x,tile_y,tile):l)], null);
}),layers);
}));
});

//# sourceMappingURL=world_interop.js.map
