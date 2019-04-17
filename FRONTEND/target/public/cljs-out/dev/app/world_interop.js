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
var map__45838 = cljs.core.deref.call(null,app.state.app_state);
var map__45838__$1 = ((((!((map__45838 == null)))?(((((map__45838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45838):map__45838);
var world = cljs.core.get.call(null,map__45838__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__45838__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),((function (map__45838,map__45838__$1,world,timer){
return (function (p1__45837_SHARP_){
return gamebase.virtual_timer.run.call(null,p1__45837_SHARP_,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396).cljs$core$IFn$_invoke$arity$1(world));
});})(map__45838,map__45838__$1,world,timer))
);
});
app.world_interop.stop = (function app$world_interop$stop(){
var map__45840 = cljs.core.deref.call(null,app.state.app_state);
var map__45840__$1 = ((((!((map__45840 == null)))?(((((map__45840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45840):map__45840);
var world = cljs.core.get.call(null,map__45840__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__45840__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),gamebase.virtual_timer.stop);
});
app.world_interop.running_QMARK_ = (function app$world_interop$running_QMARK_(){
var map__45842 = cljs.core.deref.call(null,app.state.app_state);
var map__45842__$1 = ((((!((map__45842 == null)))?(((((map__45842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45842):map__45842);
var world = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
} else {
throw (new Error("Assert failed: world"));
}

return gamebase.virtual_timer.running_QMARK_.call(null,timer);
});
app.world_interop.get_time = (function app$world_interop$get_time(){

var map__45844 = cljs.core.deref.call(null,app.state.app_state);
var map__45844__$1 = ((((!((map__45844 == null)))?(((((map__45844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45844):map__45844);
var world = cljs.core.get.call(null,map__45844__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__45844__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__45846_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__45846_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.world_interop.init_tile_extra = (function app$world_interop$init_tile_extra(){
var layer = app.world_interop._get_layer.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state)),new cljs.core.Keyword(null,"foreground","foreground",499022036));
var world_width_in_tiles = (100);
var world_height_in_tiles = (100);
var seq__45848 = cljs.core.seq.call(null,cljs.core.range.call(null,world_width_in_tiles));
var chunk__45853 = null;
var count__45854 = (0);
var i__45855 = (0);
while(true){
if((i__45855 < count__45854)){
var tile_x = cljs.core._nth.call(null,chunk__45853,i__45855);
var seq__45856_45888 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__45857_45889 = null;
var count__45858_45890 = (0);
var i__45859_45891 = (0);
while(true){
if((i__45859_45891 < count__45858_45890)){
var tile_y_45892 = cljs.core._nth.call(null,chunk__45857_45889,i__45859_45891);
var vec__45860_45893 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_45892);
var __45894 = cljs.core.nth.call(null,vec__45860_45893,(0),null);
var tile_number_45895 = cljs.core.nth.call(null,vec__45860_45893,(1),null);
var tile_data_45896 = app.tiles.general.tiles_by_number.call(null,tile_number_45895);
var seq__45863_45897 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45896));
var chunk__45864_45898 = null;
var count__45865_45899 = (0);
var i__45866_45900 = (0);
while(true){
if((i__45866_45900 < count__45865_45899)){
var tile_id_45901 = cljs.core._nth.call(null,chunk__45864_45898,i__45866_45900);
app.state.update_tile_extra.call(null,tile_x,tile_y_45892,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45863_45897,chunk__45864_45898,count__45865_45899,i__45866_45900,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45901,vec__45860_45893,__45894,tile_number_45895,tile_data_45896,tile_y_45892,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_45892,tile_data_45896);
});})(seq__45863_45897,chunk__45864_45898,count__45865_45899,i__45866_45900,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45901,vec__45860_45893,__45894,tile_number_45895,tile_data_45896,tile_y_45892,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45896))));


var G__45902 = seq__45863_45897;
var G__45903 = chunk__45864_45898;
var G__45904 = count__45865_45899;
var G__45905 = (i__45866_45900 + (1));
seq__45863_45897 = G__45902;
chunk__45864_45898 = G__45903;
count__45865_45899 = G__45904;
i__45866_45900 = G__45905;
continue;
} else {
var temp__5457__auto___45906 = cljs.core.seq.call(null,seq__45863_45897);
if(temp__5457__auto___45906){
var seq__45863_45907__$1 = temp__5457__auto___45906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45863_45907__$1)){
var c__4351__auto___45908 = cljs.core.chunk_first.call(null,seq__45863_45907__$1);
var G__45909 = cljs.core.chunk_rest.call(null,seq__45863_45907__$1);
var G__45910 = c__4351__auto___45908;
var G__45911 = cljs.core.count.call(null,c__4351__auto___45908);
var G__45912 = (0);
seq__45863_45897 = G__45909;
chunk__45864_45898 = G__45910;
count__45865_45899 = G__45911;
i__45866_45900 = G__45912;
continue;
} else {
var tile_id_45913 = cljs.core.first.call(null,seq__45863_45907__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_45892,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45863_45897,chunk__45864_45898,count__45865_45899,i__45866_45900,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45913,seq__45863_45907__$1,temp__5457__auto___45906,vec__45860_45893,__45894,tile_number_45895,tile_data_45896,tile_y_45892,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_45892,tile_data_45896);
});})(seq__45863_45897,chunk__45864_45898,count__45865_45899,i__45866_45900,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45913,seq__45863_45907__$1,temp__5457__auto___45906,vec__45860_45893,__45894,tile_number_45895,tile_data_45896,tile_y_45892,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45896))));


var G__45914 = cljs.core.next.call(null,seq__45863_45907__$1);
var G__45915 = null;
var G__45916 = (0);
var G__45917 = (0);
seq__45863_45897 = G__45914;
chunk__45864_45898 = G__45915;
count__45865_45899 = G__45916;
i__45866_45900 = G__45917;
continue;
}
} else {
}
}
break;
}


var G__45918 = seq__45856_45888;
var G__45919 = chunk__45857_45889;
var G__45920 = count__45858_45890;
var G__45921 = (i__45859_45891 + (1));
seq__45856_45888 = G__45918;
chunk__45857_45889 = G__45919;
count__45858_45890 = G__45920;
i__45859_45891 = G__45921;
continue;
} else {
var temp__5457__auto___45922 = cljs.core.seq.call(null,seq__45856_45888);
if(temp__5457__auto___45922){
var seq__45856_45923__$1 = temp__5457__auto___45922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45856_45923__$1)){
var c__4351__auto___45924 = cljs.core.chunk_first.call(null,seq__45856_45923__$1);
var G__45925 = cljs.core.chunk_rest.call(null,seq__45856_45923__$1);
var G__45926 = c__4351__auto___45924;
var G__45927 = cljs.core.count.call(null,c__4351__auto___45924);
var G__45928 = (0);
seq__45856_45888 = G__45925;
chunk__45857_45889 = G__45926;
count__45858_45890 = G__45927;
i__45859_45891 = G__45928;
continue;
} else {
var tile_y_45929 = cljs.core.first.call(null,seq__45856_45923__$1);
var vec__45867_45930 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_45929);
var __45931 = cljs.core.nth.call(null,vec__45867_45930,(0),null);
var tile_number_45932 = cljs.core.nth.call(null,vec__45867_45930,(1),null);
var tile_data_45933 = app.tiles.general.tiles_by_number.call(null,tile_number_45932);
var seq__45870_45934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45933));
var chunk__45871_45935 = null;
var count__45872_45936 = (0);
var i__45873_45937 = (0);
while(true){
if((i__45873_45937 < count__45872_45936)){
var tile_id_45938 = cljs.core._nth.call(null,chunk__45871_45935,i__45873_45937);
app.state.update_tile_extra.call(null,tile_x,tile_y_45929,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45870_45934,chunk__45871_45935,count__45872_45936,i__45873_45937,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45938,vec__45867_45930,__45931,tile_number_45932,tile_data_45933,tile_y_45929,seq__45856_45923__$1,temp__5457__auto___45922,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_45929,tile_data_45933);
});})(seq__45870_45934,chunk__45871_45935,count__45872_45936,i__45873_45937,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45938,vec__45867_45930,__45931,tile_number_45932,tile_data_45933,tile_y_45929,seq__45856_45923__$1,temp__5457__auto___45922,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45933))));


var G__45939 = seq__45870_45934;
var G__45940 = chunk__45871_45935;
var G__45941 = count__45872_45936;
var G__45942 = (i__45873_45937 + (1));
seq__45870_45934 = G__45939;
chunk__45871_45935 = G__45940;
count__45872_45936 = G__45941;
i__45873_45937 = G__45942;
continue;
} else {
var temp__5457__auto___45943__$1 = cljs.core.seq.call(null,seq__45870_45934);
if(temp__5457__auto___45943__$1){
var seq__45870_45944__$1 = temp__5457__auto___45943__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45870_45944__$1)){
var c__4351__auto___45945 = cljs.core.chunk_first.call(null,seq__45870_45944__$1);
var G__45946 = cljs.core.chunk_rest.call(null,seq__45870_45944__$1);
var G__45947 = c__4351__auto___45945;
var G__45948 = cljs.core.count.call(null,c__4351__auto___45945);
var G__45949 = (0);
seq__45870_45934 = G__45946;
chunk__45871_45935 = G__45947;
count__45872_45936 = G__45948;
i__45873_45937 = G__45949;
continue;
} else {
var tile_id_45950 = cljs.core.first.call(null,seq__45870_45944__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_45929,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45870_45934,chunk__45871_45935,count__45872_45936,i__45873_45937,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45950,seq__45870_45944__$1,temp__5457__auto___45943__$1,vec__45867_45930,__45931,tile_number_45932,tile_data_45933,tile_y_45929,seq__45856_45923__$1,temp__5457__auto___45922,tile_x,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_45929,tile_data_45933);
});})(seq__45870_45934,chunk__45871_45935,count__45872_45936,i__45873_45937,seq__45856_45888,chunk__45857_45889,count__45858_45890,i__45859_45891,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45950,seq__45870_45944__$1,temp__5457__auto___45943__$1,vec__45867_45930,__45931,tile_number_45932,tile_data_45933,tile_y_45929,seq__45856_45923__$1,temp__5457__auto___45922,tile_x,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45933))));


var G__45951 = cljs.core.next.call(null,seq__45870_45944__$1);
var G__45952 = null;
var G__45953 = (0);
var G__45954 = (0);
seq__45870_45934 = G__45951;
chunk__45871_45935 = G__45952;
count__45872_45936 = G__45953;
i__45873_45937 = G__45954;
continue;
}
} else {
}
}
break;
}


var G__45955 = cljs.core.next.call(null,seq__45856_45923__$1);
var G__45956 = null;
var G__45957 = (0);
var G__45958 = (0);
seq__45856_45888 = G__45955;
chunk__45857_45889 = G__45956;
count__45858_45890 = G__45957;
i__45859_45891 = G__45958;
continue;
}
} else {
}
}
break;
}

var G__45959 = seq__45848;
var G__45960 = chunk__45853;
var G__45961 = count__45854;
var G__45962 = (i__45855 + (1));
seq__45848 = G__45959;
chunk__45853 = G__45960;
count__45854 = G__45961;
i__45855 = G__45962;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45848);
if(temp__5457__auto__){
var seq__45848__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45848__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__45848__$1);
var G__45963 = cljs.core.chunk_rest.call(null,seq__45848__$1);
var G__45964 = c__4351__auto__;
var G__45965 = cljs.core.count.call(null,c__4351__auto__);
var G__45966 = (0);
seq__45848 = G__45963;
chunk__45853 = G__45964;
count__45854 = G__45965;
i__45855 = G__45966;
continue;
} else {
var tile_x = cljs.core.first.call(null,seq__45848__$1);
var seq__45849_45967 = cljs.core.seq.call(null,cljs.core.range.call(null,world_height_in_tiles));
var chunk__45850_45968 = null;
var count__45851_45969 = (0);
var i__45852_45970 = (0);
while(true){
if((i__45852_45970 < count__45851_45969)){
var tile_y_45971 = cljs.core._nth.call(null,chunk__45850_45968,i__45852_45970);
var vec__45874_45972 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_45971);
var __45973 = cljs.core.nth.call(null,vec__45874_45972,(0),null);
var tile_number_45974 = cljs.core.nth.call(null,vec__45874_45972,(1),null);
var tile_data_45975 = app.tiles.general.tiles_by_number.call(null,tile_number_45974);
var seq__45877_45976 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45975));
var chunk__45878_45977 = null;
var count__45879_45978 = (0);
var i__45880_45979 = (0);
while(true){
if((i__45880_45979 < count__45879_45978)){
var tile_id_45980 = cljs.core._nth.call(null,chunk__45878_45977,i__45880_45979);
app.state.update_tile_extra.call(null,tile_x,tile_y_45971,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45877_45976,chunk__45878_45977,count__45879_45978,i__45880_45979,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45980,vec__45874_45972,__45973,tile_number_45974,tile_data_45975,tile_y_45971,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_45971,tile_data_45975);
});})(seq__45877_45976,chunk__45878_45977,count__45879_45978,i__45880_45979,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45980,vec__45874_45972,__45973,tile_number_45974,tile_data_45975,tile_y_45971,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45975))));


var G__45981 = seq__45877_45976;
var G__45982 = chunk__45878_45977;
var G__45983 = count__45879_45978;
var G__45984 = (i__45880_45979 + (1));
seq__45877_45976 = G__45981;
chunk__45878_45977 = G__45982;
count__45879_45978 = G__45983;
i__45880_45979 = G__45984;
continue;
} else {
var temp__5457__auto___45985__$1 = cljs.core.seq.call(null,seq__45877_45976);
if(temp__5457__auto___45985__$1){
var seq__45877_45986__$1 = temp__5457__auto___45985__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45877_45986__$1)){
var c__4351__auto___45987 = cljs.core.chunk_first.call(null,seq__45877_45986__$1);
var G__45988 = cljs.core.chunk_rest.call(null,seq__45877_45986__$1);
var G__45989 = c__4351__auto___45987;
var G__45990 = cljs.core.count.call(null,c__4351__auto___45987);
var G__45991 = (0);
seq__45877_45976 = G__45988;
chunk__45878_45977 = G__45989;
count__45879_45978 = G__45990;
i__45880_45979 = G__45991;
continue;
} else {
var tile_id_45992 = cljs.core.first.call(null,seq__45877_45986__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_45971,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45877_45976,chunk__45878_45977,count__45879_45978,i__45880_45979,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45992,seq__45877_45986__$1,temp__5457__auto___45985__$1,vec__45874_45972,__45973,tile_number_45974,tile_data_45975,tile_y_45971,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_45971,tile_data_45975);
});})(seq__45877_45976,chunk__45878_45977,count__45879_45978,i__45880_45979,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_45992,seq__45877_45986__$1,temp__5457__auto___45985__$1,vec__45874_45972,__45973,tile_number_45974,tile_data_45975,tile_y_45971,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_45975))));


var G__45993 = cljs.core.next.call(null,seq__45877_45986__$1);
var G__45994 = null;
var G__45995 = (0);
var G__45996 = (0);
seq__45877_45976 = G__45993;
chunk__45878_45977 = G__45994;
count__45879_45978 = G__45995;
i__45880_45979 = G__45996;
continue;
}
} else {
}
}
break;
}


var G__45997 = seq__45849_45967;
var G__45998 = chunk__45850_45968;
var G__45999 = count__45851_45969;
var G__46000 = (i__45852_45970 + (1));
seq__45849_45967 = G__45997;
chunk__45850_45968 = G__45998;
count__45851_45969 = G__45999;
i__45852_45970 = G__46000;
continue;
} else {
var temp__5457__auto___46001__$1 = cljs.core.seq.call(null,seq__45849_45967);
if(temp__5457__auto___46001__$1){
var seq__45849_46002__$1 = temp__5457__auto___46001__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45849_46002__$1)){
var c__4351__auto___46003 = cljs.core.chunk_first.call(null,seq__45849_46002__$1);
var G__46004 = cljs.core.chunk_rest.call(null,seq__45849_46002__$1);
var G__46005 = c__4351__auto___46003;
var G__46006 = cljs.core.count.call(null,c__4351__auto___46003);
var G__46007 = (0);
seq__45849_45967 = G__46004;
chunk__45850_45968 = G__46005;
count__45851_45969 = G__46006;
i__45852_45970 = G__46007;
continue;
} else {
var tile_y_46008 = cljs.core.first.call(null,seq__45849_46002__$1);
var vec__45881_46009 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y_46008);
var __46010 = cljs.core.nth.call(null,vec__45881_46009,(0),null);
var tile_number_46011 = cljs.core.nth.call(null,vec__45881_46009,(1),null);
var tile_data_46012 = app.tiles.general.tiles_by_number.call(null,tile_number_46011);
var seq__45884_46013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_46012));
var chunk__45885_46014 = null;
var count__45886_46015 = (0);
var i__45887_46016 = (0);
while(true){
if((i__45887_46016 < count__45886_46015)){
var tile_id_46017 = cljs.core._nth.call(null,chunk__45885_46014,i__45887_46016);
app.state.update_tile_extra.call(null,tile_x,tile_y_46008,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45884_46013,chunk__45885_46014,count__45886_46015,i__45887_46016,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_46017,vec__45881_46009,__46010,tile_number_46011,tile_data_46012,tile_y_46008,seq__45849_46002__$1,temp__5457__auto___46001__$1,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_46008,tile_data_46012);
});})(seq__45884_46013,chunk__45885_46014,count__45886_46015,i__45887_46016,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_46017,vec__45881_46009,__46010,tile_number_46011,tile_data_46012,tile_y_46008,seq__45849_46002__$1,temp__5457__auto___46001__$1,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_46012))));


var G__46018 = seq__45884_46013;
var G__46019 = chunk__45885_46014;
var G__46020 = count__45886_46015;
var G__46021 = (i__45887_46016 + (1));
seq__45884_46013 = G__46018;
chunk__45885_46014 = G__46019;
count__45886_46015 = G__46020;
i__45887_46016 = G__46021;
continue;
} else {
var temp__5457__auto___46022__$2 = cljs.core.seq.call(null,seq__45884_46013);
if(temp__5457__auto___46022__$2){
var seq__45884_46023__$1 = temp__5457__auto___46022__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45884_46023__$1)){
var c__4351__auto___46024 = cljs.core.chunk_first.call(null,seq__45884_46023__$1);
var G__46025 = cljs.core.chunk_rest.call(null,seq__45884_46023__$1);
var G__46026 = c__4351__auto___46024;
var G__46027 = cljs.core.count.call(null,c__4351__auto___46024);
var G__46028 = (0);
seq__45884_46013 = G__46025;
chunk__45885_46014 = G__46026;
count__45886_46015 = G__46027;
i__45887_46016 = G__46028;
continue;
} else {
var tile_id_46029 = cljs.core.first.call(null,seq__45884_46023__$1);
app.state.update_tile_extra.call(null,tile_x,tile_y_46008,cljs.core.constantly.call(null,cljs.core.some.call(null,((function (seq__45884_46013,chunk__45885_46014,count__45886_46015,i__45887_46016,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_46029,seq__45884_46023__$1,temp__5457__auto___46022__$2,vec__45881_46009,__46010,tile_number_46011,tile_data_46012,tile_y_46008,seq__45849_46002__$1,temp__5457__auto___46001__$1,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles){
return (function (p1__45847_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__45847_SHARP_,tile_x,tile_y_46008,tile_data_46012);
});})(seq__45884_46013,chunk__45885_46014,count__45886_46015,i__45887_46016,seq__45849_45967,chunk__45850_45968,count__45851_45969,i__45852_45970,seq__45848,chunk__45853,count__45854,i__45855,tile_id_46029,seq__45884_46023__$1,temp__5457__auto___46022__$2,vec__45881_46009,__46010,tile_number_46011,tile_data_46012,tile_y_46008,seq__45849_46002__$1,temp__5457__auto___46001__$1,tile_x,seq__45848__$1,temp__5457__auto__,layer,world_width_in_tiles,world_height_in_tiles))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data_46012))));


var G__46030 = cljs.core.next.call(null,seq__45884_46023__$1);
var G__46031 = null;
var G__46032 = (0);
var G__46033 = (0);
seq__45884_46013 = G__46030;
chunk__45885_46014 = G__46031;
count__45886_46015 = G__46032;
i__45887_46016 = G__46033;
continue;
}
} else {
}
}
break;
}


var G__46034 = cljs.core.next.call(null,seq__45849_46002__$1);
var G__46035 = null;
var G__46036 = (0);
var G__46037 = (0);
seq__45849_45967 = G__46034;
chunk__45850_45968 = G__46035;
count__45851_45969 = G__46036;
i__45852_45970 = G__46037;
continue;
}
} else {
}
}
break;
}

var G__46038 = cljs.core.next.call(null,seq__45848__$1);
var G__46039 = null;
var G__46040 = (0);
var G__46041 = (0);
seq__45848 = G__46038;
chunk__45853 = G__46039;
count__45854 = G__46040;
i__45855 = G__46041;
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
return cljs.core.filter.call(null,(function (p1__46042_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(p1__46042_SHARP_),new cljs.core.Keyword("app.ecs.entities.locomotive","locomotive","app.ecs.entities.locomotive/locomotive",1809697705));
}),cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world)));
});
app.world_interop.send_to_entity = (function app$world_interop$send_to_entity(var_args){
var args__4534__auto__ = [];
var len__4531__auto___46046 = arguments.length;
var i__4532__auto___46047 = (0);
while(true){
if((i__4532__auto___46047 < len__4531__auto___46046)){
args__4534__auto__.push((arguments[i__4532__auto___46047]));

var G__46048 = (i__4532__auto___46047 + (1));
i__4532__auto___46047 = G__46048;
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
app.world_interop.send_to_entity.cljs$lang$applyTo = (function (seq46043){
var G__46044 = cljs.core.first.call(null,seq46043);
var seq46043__$1 = cljs.core.next.call(null,seq46043);
var G__46045 = cljs.core.first.call(null,seq46043__$1);
var seq46043__$2 = cljs.core.next.call(null,seq46043__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46044,G__46045,seq46043__$2);
});

app.world_interop.inject_entity = (function app$world_interop$inject_entity(e){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__46049){
var map__46050 = p__46049;
var map__46050__$1 = ((((!((map__46050 == null)))?(((((map__46050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46050):map__46050);
var state = map__46050__$1;
var world = cljs.core.get.call(null,map__46050__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.world_interop.kill_entity = (function app$world_interop$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__46052){
var map__46053 = p__46052;
var map__46053__$1 = ((((!((map__46053 == null)))?(((((map__46053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46053):map__46053);
var state = map__46053__$1;
var world = cljs.core.get.call(null,map__46053__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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

var G__46055 = new cljs.core.Keyword(null,"rear-coupling","rear-coupling",1106253524).cljs$core$IFn$_invoke$arity$1(entity);
key = G__46055;
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
var vec__46056 = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
var conv_x = cljs.core.nth.call(null,vec__46056,(0),null);
var conv_y = cljs.core.nth.call(null,vec__46056,(1),null);
var tile_x = cljs.core.quot.call(null,conv_x.call(null,canvas_x),(32));
var tile_y = cljs.core.quot.call(null,conv_y.call(null,canvas_y),(32));
var vec__46059 = app.world_interop.get_world_size.call(null);
var world_width = cljs.core.nth.call(null,vec__46059,(0),null);
var world_height = cljs.core.nth.call(null,vec__46059,(1),null);
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
return cljs.core.map.call(null,(function (p__46062){
var vec__46063 = p__46062;
var key = cljs.core.nth.call(null,vec__46063,(0),null);
var l = cljs.core.nth.call(null,vec__46063,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"foreground","foreground",499022036)))?gamebase.layers.set_tile_in_layer.call(null,l,tile_x,tile_y,tile):l)], null);
}),layers);
}));
});

//# sourceMappingURL=world_interop.js.map
