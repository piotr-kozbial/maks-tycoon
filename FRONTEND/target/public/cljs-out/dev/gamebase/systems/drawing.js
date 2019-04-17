// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.systems.drawing');
goog.require('cljs.core');
goog.require('gamebase.ecs');
goog.require('gamebase.resources');
goog.require('gamebase.geometry');
goog.require('gamebase.layers');
goog.require('app.tiles.general');
goog.require('app.state');
gamebase.systems.drawing._put_image = (function gamebase$systems$drawing$_put_image(img,x,y,w,h,dst_x,dst_y){
push();

scale((1),(-1));

image(img,dst_x,(((-1) * dst_y) - h),w,h,x,y,w,h);

return pop();
});
if((typeof gamebase !== 'undefined') && (typeof gamebase.systems !== 'undefined') && (typeof gamebase.systems.drawing !== 'undefined') && (typeof gamebase.systems.drawing.draw_tile_extra !== 'undefined')){
} else {
gamebase.systems.drawing.draw_tile_extra = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.systems.drawing","draw-tile-extra"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (tile_id,tx,ty,tile_info){
return tile_id;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,null,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,null,(function (tile_id,tile_info,tx,ty){
return false;
}));
gamebase.systems.drawing.mk_system = (function gamebase$systems$drawing$mk_system(){
return gamebase.ecs.mk_system.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613));
});

gamebase.systems.drawing.to_system = gamebase.ecs.to_system.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613));

gamebase.systems.drawing._get_layer = (function gamebase$systems$drawing$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__45342_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__45342_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});



gamebase.systems.drawing._draw_layer = (function gamebase$systems$drawing$_draw_layer(world,layer,p__45344,draw_extra_QMARK_){
var map__45345 = p__45344;
var map__45345__$1 = ((((!((map__45345 == null)))?(((((map__45345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45345):map__45345);
var context = map__45345__$1;
var min_x = cljs.core.get.call(null,map__45345__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_x = cljs.core.get.call(null,map__45345__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_y = cljs.core.get.call(null,map__45345__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__45345__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__45347 = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var map__45347__$1 = ((((!((map__45347 == null)))?(((((map__45347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45347):map__45347);
var ctx = map__45347__$1;
var tile_width = cljs.core.get.call(null,map__45347__$1,new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343));
var tile_height = cljs.core.get.call(null,map__45347__$1,new cljs.core.Keyword(null,"tile-height","tile-height",-905667651));
var world_width_in_tiles = cljs.core.get.call(null,map__45347__$1,new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212));
var world_height_in_tiles = cljs.core.get.call(null,map__45347__$1,new cljs.core.Keyword(null,"world-height-in-tiles","world-height-in-tiles",1693693808));
var tx_min = (function (){var x__4037__auto__ = (0);
var y__4038__auto__ = (((min_x / tile_width) | (0)) - (1));
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var tx_max = (function (){var x__4040__auto__ = (((max_x / tile_width) | (0)) + (2));
var y__4041__auto__ = (world_width_in_tiles - (1));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var ty_min = (function (){var x__4037__auto__ = (0);
var y__4038__auto__ = (((min_y / tile_width) | (0)) - (1));
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var ty_max = (function (){var x__4040__auto__ = (((max_y / tile_height) | (0)) + (2));
var y__4041__auto__ = (world_height_in_tiles - (1));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var tx_range = cljs.core.range.call(null,tx_min,(tx_max + (1)));
var ty_range = cljs.core.range.call(null,ty_min,(ty_max + (1)));
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__45349(s__45350){
return (new cljs.core.LazySeq(null,((function (map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__45350__$1 = s__45350;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45350__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var tx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__45350__$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__45349_$_iter__45351(s__45352){
return (new cljs.core.LazySeq(null,((function (s__45350__$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__45352__$1 = s__45352;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__45352__$1);
if(temp__5457__auto____$1){
var s__45352__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45352__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__45352__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__45354 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__45353 = (0);
while(true){
if((i__45353 < size__4323__auto__)){
var ty = cljs.core._nth.call(null,c__4322__auto__,i__45353);
cljs.core.chunk_append.call(null,b__45354,(function (){var vec__45355 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__45355,(0),null);
var tile_number = cljs.core.nth.call(null,vec__45355,(1),null);
var tl = vec__45355;
var map__45358 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__45358__$1 = ((((!((map__45358 == null)))?(((((map__45358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45358):map__45358);
var inf = map__45358__$1;
var img = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (i__45353,s__45350__$1,tile_data,vec__45355,_,tile_number,tl,map__45358,map__45358__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__45354,s__45352__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__45343_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__45343_SHARP_,tx,ty,tile_data);
});})(i__45353,s__45350__$1,tile_data,vec__45355,_,tile_number,tl,map__45358,map__45358__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__45354,s__45352__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})());

var G__45365 = (i__45353 + (1));
i__45353 = G__45365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45354),gamebase$systems$drawing$_draw_layer_$_iter__45349_$_iter__45351.call(null,cljs.core.chunk_rest.call(null,s__45352__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45354),null);
}
} else {
var ty = cljs.core.first.call(null,s__45352__$2);
return cljs.core.cons.call(null,(function (){var vec__45360 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__45360,(0),null);
var tile_number = cljs.core.nth.call(null,vec__45360,(1),null);
var tl = vec__45360;
var map__45363 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__45363__$1 = ((((!((map__45363 == null)))?(((((map__45363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45363):map__45363);
var inf = map__45363__$1;
var img = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (s__45350__$1,tile_data,vec__45360,_,tile_number,tl,map__45363,map__45363__$1,inf,img,x,y,w,h,ty,s__45352__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__45343_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__45343_SHARP_,tx,ty,tile_data);
});})(s__45350__$1,tile_data,vec__45360,_,tile_number,tl,map__45363,map__45363__$1,inf,img,x,y,w,h,ty,s__45352__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})(),gamebase$systems$drawing$_draw_layer_$_iter__45349_$_iter__45351.call(null,cljs.core.rest.call(null,s__45352__$2)));
}
} else {
return null;
}
break;
}
});})(s__45350__$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(s__45350__$1,tx,xs__6012__auto__,temp__5457__auto__,map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,ty_range));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,gamebase$systems$drawing$_draw_layer_$_iter__45349.call(null,cljs.core.rest.call(null,s__45350__$1)));
} else {
var G__45366 = cljs.core.rest.call(null,s__45350__$1);
s__45350__$1 = G__45366;
continue;
}
} else {
return null;
}
break;
}
});})(map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(map__45347,map__45347__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__45345,map__45345__$1,context,min_x,max_x,min_y,max_y))
;
return iter__4324__auto__.call(null,tx_range);
})());
});

gamebase.systems.drawing.draw_all = (function gamebase$systems$drawing$draw_all(world,context){
gamebase.systems.drawing._draw_layer.call(null,world,gamebase.systems.drawing._get_layer.call(null,world,new cljs.core.Keyword(null,"background","background",-863952629)),context,false);

gamebase.systems.drawing._draw_layer.call(null,world,gamebase.systems.drawing._get_layer.call(null,world,new cljs.core.Keyword(null,"foreground","foreground",499022036)),context,true);

return cljs.core.dorun.call(null,gamebase.ecs.pass_event_through_all.call(null,world,gamebase.ecs.mk_event.call(null,gamebase.systems.drawing.to_system,new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451),(0)),gamebase.ecs.all_components_of_system.call(null,world,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","systems","gamebase.ecs/systems",1648327110).cljs$core$IFn$_invoke$arity$1(world)))));
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-system","to-system",253598638),new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,system){
var world_SINGLEQUOTE_ = gamebase.ecs.pass_event_through_all.call(null,world,event,gamebase.ecs.all_components_of_system.call(null,world,system));
return world_SINGLEQUOTE_;
}));
gamebase.systems.drawing.mk_static_image_component = (function gamebase$systems$drawing$mk_static_image_component(entity_or_id,key,p__45367){
var map__45368 = p__45367;
var map__45368__$1 = ((((!((map__45368 == null)))?(((((map__45368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45368):map__45368);
var point_kvs = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813)),new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),point_kvs,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),angle_kvs,new cljs.core.Keyword(null,"center","center",-748944368),center,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),resource_name_kvs);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return component;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__45370){
var map__45371 = p__45370;
var map__45371__$1 = ((((!((map__45371 == null)))?(((((map__45371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45371):map__45371);
var component = map__45371__$1;
var point_kvs = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__45371__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
var entity_45379 = gamebase.ecs.get_entity.call(null,world,component);
var vec__45373_45380 = cljs.core.get_in.call(null,entity_45379,point_kvs);
var point_x_45381 = cljs.core.nth.call(null,vec__45373_45380,(0),null);
var point_y_45382 = cljs.core.nth.call(null,vec__45373_45380,(1),null);
var vec__45376_45383 = center;
var center_x_45384 = cljs.core.nth.call(null,vec__45376_45383,(0),null);
var center_y_45385 = cljs.core.nth.call(null,vec__45376_45383,(1),null);
var angle_45386 = cljs.core.get_in.call(null,entity_45379,angle_kvs);
var temp__5457__auto___45387 = gamebase.resources.get_resource.call(null,cljs.core.get_in.call(null,entity_45379,resource_name_kvs));
if(cljs.core.truth_(temp__5457__auto___45387)){
var img_45388 = temp__5457__auto___45387;
push();

translate(point_x_45381,point_y_45382);

rotate(angle_45386);

scale((1),(-1));

image(img_45388,(- center_x_45384),(- center_y_45385));

pop();
} else {
}

return component;
}));
gamebase.systems.drawing.mk_path_component = (function gamebase$systems$drawing$mk_path_component(entity_or_id,key,p__45389){
var map__45390 = p__45389;
var map__45390__$1 = ((((!((map__45390 == null)))?(((((map__45390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45390):map__45390);
var path_kvs = cljs.core.get.call(null,map__45390__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var color = cljs.core.get.call(null,map__45390__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973)),new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342),path_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__45392){
var map__45393 = p__45392;
var map__45393__$1 = ((((!((map__45393 == null)))?(((((map__45393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45393):map__45393);
var component = map__45393__$1;
var path_kvs = cljs.core.get.call(null,map__45393__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var entity_45399 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___45400 = cljs.core.get_in.call(null,entity_45399,path_kvs);
if(cljs.core.truth_(temp__5457__auto___45400)){
var path_45401 = temp__5457__auto___45400;
var len_45402 = gamebase.geometry.path_length.call(null,path_45401);
var n_45403 = ((len_45402 / (5)) | (0));
var d_45404 = (len_45402 / n_45403);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__45395_45405 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_45403 + (1))));
var chunk__45396_45406 = null;
var count__45397_45407 = (0);
var i__45398_45408 = (0);
while(true){
if((i__45398_45408 < count__45397_45407)){
var i_45409 = cljs.core._nth.call(null,chunk__45396_45406,i__45398_45408);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_45401,(i_45409 * d_45404)));


var G__45410 = seq__45395_45405;
var G__45411 = chunk__45396_45406;
var G__45412 = count__45397_45407;
var G__45413 = (i__45398_45408 + (1));
seq__45395_45405 = G__45410;
chunk__45396_45406 = G__45411;
count__45397_45407 = G__45412;
i__45398_45408 = G__45413;
continue;
} else {
var temp__5457__auto___45414__$1 = cljs.core.seq.call(null,seq__45395_45405);
if(temp__5457__auto___45414__$1){
var seq__45395_45415__$1 = temp__5457__auto___45414__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45395_45415__$1)){
var c__4351__auto___45416 = cljs.core.chunk_first.call(null,seq__45395_45415__$1);
var G__45417 = cljs.core.chunk_rest.call(null,seq__45395_45415__$1);
var G__45418 = c__4351__auto___45416;
var G__45419 = cljs.core.count.call(null,c__4351__auto___45416);
var G__45420 = (0);
seq__45395_45405 = G__45417;
chunk__45396_45406 = G__45418;
count__45397_45407 = G__45419;
i__45398_45408 = G__45420;
continue;
} else {
var i_45421 = cljs.core.first.call(null,seq__45395_45415__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_45401,(i_45421 * d_45404)));


var G__45422 = cljs.core.next.call(null,seq__45395_45415__$1);
var G__45423 = null;
var G__45424 = (0);
var G__45425 = (0);
seq__45395_45405 = G__45422;
chunk__45396_45406 = G__45423;
count__45397_45407 = G__45424;
i__45398_45408 = G__45425;
continue;
}
} else {
}
}
break;
}

pop();
} else {
}

return null;
}));
gamebase.systems.drawing.mk_path_history_component = (function gamebase$systems$drawing$mk_path_history_component(entity_or_id,key,p__45426){
var map__45427 = p__45426;
var map__45427__$1 = ((((!((map__45427 == null)))?(((((map__45427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45427):map__45427);
var path_history_kvs = cljs.core.get.call(null,map__45427__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var color = cljs.core.get.call(null,map__45427__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761)),new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496),path_history_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__45429){
var map__45430 = p__45429;
var map__45430__$1 = ((((!((map__45430 == null)))?(((((map__45430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45430):map__45430);
var component = map__45430__$1;
var path_history_kvs = cljs.core.get.call(null,map__45430__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var entity_45444 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___45445 = cljs.core.get_in.call(null,entity_45444,path_history_kvs);
if(cljs.core.truth_(temp__5457__auto___45445)){
var path_history_45446 = temp__5457__auto___45445;
var seq__45432_45447 = cljs.core.seq.call(null,path_history_45446);
var chunk__45433_45448 = null;
var count__45434_45449 = (0);
var i__45435_45450 = (0);
while(true){
if((i__45435_45450 < count__45434_45449)){
var path_45451 = cljs.core._nth.call(null,chunk__45433_45448,i__45435_45450);
var len_45452 = gamebase.geometry.path_length.call(null,path_45451);
var n_45453 = ((len_45452 / (5)) | (0));
var d_45454 = (len_45452 / n_45453);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__45436_45455 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_45453 + (1))));
var chunk__45437_45456 = null;
var count__45438_45457 = (0);
var i__45439_45458 = (0);
while(true){
if((i__45439_45458 < count__45438_45457)){
var i_45459 = cljs.core._nth.call(null,chunk__45437_45456,i__45439_45458);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_45451,(i_45459 * d_45454)));


var G__45460 = seq__45436_45455;
var G__45461 = chunk__45437_45456;
var G__45462 = count__45438_45457;
var G__45463 = (i__45439_45458 + (1));
seq__45436_45455 = G__45460;
chunk__45437_45456 = G__45461;
count__45438_45457 = G__45462;
i__45439_45458 = G__45463;
continue;
} else {
var temp__5457__auto___45464__$1 = cljs.core.seq.call(null,seq__45436_45455);
if(temp__5457__auto___45464__$1){
var seq__45436_45465__$1 = temp__5457__auto___45464__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45436_45465__$1)){
var c__4351__auto___45466 = cljs.core.chunk_first.call(null,seq__45436_45465__$1);
var G__45467 = cljs.core.chunk_rest.call(null,seq__45436_45465__$1);
var G__45468 = c__4351__auto___45466;
var G__45469 = cljs.core.count.call(null,c__4351__auto___45466);
var G__45470 = (0);
seq__45436_45455 = G__45467;
chunk__45437_45456 = G__45468;
count__45438_45457 = G__45469;
i__45439_45458 = G__45470;
continue;
} else {
var i_45471 = cljs.core.first.call(null,seq__45436_45465__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_45451,(i_45471 * d_45454)));


var G__45472 = cljs.core.next.call(null,seq__45436_45465__$1);
var G__45473 = null;
var G__45474 = (0);
var G__45475 = (0);
seq__45436_45455 = G__45472;
chunk__45437_45456 = G__45473;
count__45438_45457 = G__45474;
i__45439_45458 = G__45475;
continue;
}
} else {
}
}
break;
}

pop();


var G__45476 = seq__45432_45447;
var G__45477 = chunk__45433_45448;
var G__45478 = count__45434_45449;
var G__45479 = (i__45435_45450 + (1));
seq__45432_45447 = G__45476;
chunk__45433_45448 = G__45477;
count__45434_45449 = G__45478;
i__45435_45450 = G__45479;
continue;
} else {
var temp__5457__auto___45480__$1 = cljs.core.seq.call(null,seq__45432_45447);
if(temp__5457__auto___45480__$1){
var seq__45432_45481__$1 = temp__5457__auto___45480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45432_45481__$1)){
var c__4351__auto___45482 = cljs.core.chunk_first.call(null,seq__45432_45481__$1);
var G__45483 = cljs.core.chunk_rest.call(null,seq__45432_45481__$1);
var G__45484 = c__4351__auto___45482;
var G__45485 = cljs.core.count.call(null,c__4351__auto___45482);
var G__45486 = (0);
seq__45432_45447 = G__45483;
chunk__45433_45448 = G__45484;
count__45434_45449 = G__45485;
i__45435_45450 = G__45486;
continue;
} else {
var path_45487 = cljs.core.first.call(null,seq__45432_45481__$1);
var len_45488 = gamebase.geometry.path_length.call(null,path_45487);
var n_45489 = ((len_45488 / (5)) | (0));
var d_45490 = (len_45488 / n_45489);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__45440_45491 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_45489 + (1))));
var chunk__45441_45492 = null;
var count__45442_45493 = (0);
var i__45443_45494 = (0);
while(true){
if((i__45443_45494 < count__45442_45493)){
var i_45495 = cljs.core._nth.call(null,chunk__45441_45492,i__45443_45494);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_45487,(i_45495 * d_45490)));


var G__45496 = seq__45440_45491;
var G__45497 = chunk__45441_45492;
var G__45498 = count__45442_45493;
var G__45499 = (i__45443_45494 + (1));
seq__45440_45491 = G__45496;
chunk__45441_45492 = G__45497;
count__45442_45493 = G__45498;
i__45443_45494 = G__45499;
continue;
} else {
var temp__5457__auto___45500__$2 = cljs.core.seq.call(null,seq__45440_45491);
if(temp__5457__auto___45500__$2){
var seq__45440_45501__$1 = temp__5457__auto___45500__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45440_45501__$1)){
var c__4351__auto___45502 = cljs.core.chunk_first.call(null,seq__45440_45501__$1);
var G__45503 = cljs.core.chunk_rest.call(null,seq__45440_45501__$1);
var G__45504 = c__4351__auto___45502;
var G__45505 = cljs.core.count.call(null,c__4351__auto___45502);
var G__45506 = (0);
seq__45440_45491 = G__45503;
chunk__45441_45492 = G__45504;
count__45442_45493 = G__45505;
i__45443_45494 = G__45506;
continue;
} else {
var i_45507 = cljs.core.first.call(null,seq__45440_45501__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_45487,(i_45507 * d_45490)));


var G__45508 = cljs.core.next.call(null,seq__45440_45501__$1);
var G__45509 = null;
var G__45510 = (0);
var G__45511 = (0);
seq__45440_45491 = G__45508;
chunk__45441_45492 = G__45509;
count__45442_45493 = G__45510;
i__45443_45494 = G__45511;
continue;
}
} else {
}
}
break;
}

pop();


var G__45512 = cljs.core.next.call(null,seq__45432_45481__$1);
var G__45513 = null;
var G__45514 = (0);
var G__45515 = (0);
seq__45432_45447 = G__45512;
chunk__45433_45448 = G__45513;
count__45434_45449 = G__45514;
i__45435_45450 = G__45515;
continue;
}
} else {
}
}
break;
}
} else {
}

return null;
}));

//# sourceMappingURL=drawing.js.map
