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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__65210_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__65210_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});



gamebase.systems.drawing._draw_layer = (function gamebase$systems$drawing$_draw_layer(world,layer,p__65212,draw_extra_QMARK_){
var map__65213 = p__65212;
var map__65213__$1 = ((((!((map__65213 == null)))?(((((map__65213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65213):map__65213);
var context = map__65213__$1;
var min_x = cljs.core.get.call(null,map__65213__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_x = cljs.core.get.call(null,map__65213__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_y = cljs.core.get.call(null,map__65213__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__65213__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__65215 = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var map__65215__$1 = ((((!((map__65215 == null)))?(((((map__65215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65215):map__65215);
var ctx = map__65215__$1;
var tile_width = cljs.core.get.call(null,map__65215__$1,new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343));
var tile_height = cljs.core.get.call(null,map__65215__$1,new cljs.core.Keyword(null,"tile-height","tile-height",-905667651));
var world_width_in_tiles = cljs.core.get.call(null,map__65215__$1,new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212));
var world_height_in_tiles = cljs.core.get.call(null,map__65215__$1,new cljs.core.Keyword(null,"world-height-in-tiles","world-height-in-tiles",1693693808));
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
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__65217(s__65218){
return (new cljs.core.LazySeq(null,((function (map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__65218__$1 = s__65218;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__65218__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var tx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__65218__$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__65217_$_iter__65219(s__65220){
return (new cljs.core.LazySeq(null,((function (s__65218__$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__65220__$1 = s__65220;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__65220__$1);
if(temp__5457__auto____$1){
var s__65220__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65220__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__65220__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__65222 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__65221 = (0);
while(true){
if((i__65221 < size__4323__auto__)){
var ty = cljs.core._nth.call(null,c__4322__auto__,i__65221);
cljs.core.chunk_append.call(null,b__65222,(function (){var vec__65223 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__65223,(0),null);
var tile_number = cljs.core.nth.call(null,vec__65223,(1),null);
var tl = vec__65223;
var map__65226 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__65226__$1 = ((((!((map__65226 == null)))?(((((map__65226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65226):map__65226);
var inf = map__65226__$1;
var img = cljs.core.get.call(null,map__65226__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__65226__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__65226__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__65226__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__65226__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (i__65221,s__65218__$1,tile_data,vec__65223,_,tile_number,tl,map__65226,map__65226__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__65222,s__65220__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__65211_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__65211_SHARP_,tx,ty,tile_data);
});})(i__65221,s__65218__$1,tile_data,vec__65223,_,tile_number,tl,map__65226,map__65226__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__65222,s__65220__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})());

var G__65233 = (i__65221 + (1));
i__65221 = G__65233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65222),gamebase$systems$drawing$_draw_layer_$_iter__65217_$_iter__65219.call(null,cljs.core.chunk_rest.call(null,s__65220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65222),null);
}
} else {
var ty = cljs.core.first.call(null,s__65220__$2);
return cljs.core.cons.call(null,(function (){var vec__65228 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__65228,(0),null);
var tile_number = cljs.core.nth.call(null,vec__65228,(1),null);
var tl = vec__65228;
var map__65231 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__65231__$1 = ((((!((map__65231 == null)))?(((((map__65231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65231):map__65231);
var inf = map__65231__$1;
var img = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (s__65218__$1,tile_data,vec__65228,_,tile_number,tl,map__65231,map__65231__$1,inf,img,x,y,w,h,ty,s__65220__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__65211_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__65211_SHARP_,tx,ty,tile_data);
});})(s__65218__$1,tile_data,vec__65228,_,tile_number,tl,map__65231,map__65231__$1,inf,img,x,y,w,h,ty,s__65220__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})(),gamebase$systems$drawing$_draw_layer_$_iter__65217_$_iter__65219.call(null,cljs.core.rest.call(null,s__65220__$2)));
}
} else {
return null;
}
break;
}
});})(s__65218__$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(s__65218__$1,tx,xs__6012__auto__,temp__5457__auto__,map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,ty_range));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,gamebase$systems$drawing$_draw_layer_$_iter__65217.call(null,cljs.core.rest.call(null,s__65218__$1)));
} else {
var G__65234 = cljs.core.rest.call(null,s__65218__$1);
s__65218__$1 = G__65234;
continue;
}
} else {
return null;
}
break;
}
});})(map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(map__65215,map__65215__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__65213,map__65213__$1,context,min_x,max_x,min_y,max_y))
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
gamebase.systems.drawing.mk_static_image_component = (function gamebase$systems$drawing$mk_static_image_component(entity_or_id,key,p__65235){
var map__65236 = p__65235;
var map__65236__$1 = ((((!((map__65236 == null)))?(((((map__65236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65236):map__65236);
var point_kvs = cljs.core.get.call(null,map__65236__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__65236__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__65236__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__65236__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813)),new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),point_kvs,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),angle_kvs,new cljs.core.Keyword(null,"center","center",-748944368),center,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),resource_name_kvs);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return component;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__65238){
var map__65239 = p__65238;
var map__65239__$1 = ((((!((map__65239 == null)))?(((((map__65239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65239):map__65239);
var component = map__65239__$1;
var point_kvs = cljs.core.get.call(null,map__65239__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__65239__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__65239__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__65239__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
var entity_65247 = gamebase.ecs.get_entity.call(null,world,component);
var vec__65241_65248 = cljs.core.get_in.call(null,entity_65247,point_kvs);
var point_x_65249 = cljs.core.nth.call(null,vec__65241_65248,(0),null);
var point_y_65250 = cljs.core.nth.call(null,vec__65241_65248,(1),null);
var vec__65244_65251 = center;
var center_x_65252 = cljs.core.nth.call(null,vec__65244_65251,(0),null);
var center_y_65253 = cljs.core.nth.call(null,vec__65244_65251,(1),null);
var angle_65254 = cljs.core.get_in.call(null,entity_65247,angle_kvs);
var temp__5457__auto___65255 = gamebase.resources.get_resource.call(null,cljs.core.get_in.call(null,entity_65247,resource_name_kvs));
if(cljs.core.truth_(temp__5457__auto___65255)){
var img_65256 = temp__5457__auto___65255;
push();

translate(point_x_65249,point_y_65250);

rotate(angle_65254);

scale((1),(-1));

image(img_65256,(- center_x_65252),(- center_y_65253));

pop();
} else {
}

return component;
}));
gamebase.systems.drawing.mk_path_component = (function gamebase$systems$drawing$mk_path_component(entity_or_id,key,p__65257){
var map__65258 = p__65257;
var map__65258__$1 = ((((!((map__65258 == null)))?(((((map__65258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65258):map__65258);
var path_kvs = cljs.core.get.call(null,map__65258__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var color = cljs.core.get.call(null,map__65258__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973)),new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342),path_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__65260){
var map__65261 = p__65260;
var map__65261__$1 = ((((!((map__65261 == null)))?(((((map__65261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65261):map__65261);
var component = map__65261__$1;
var path_kvs = cljs.core.get.call(null,map__65261__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var entity_65267 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___65268 = cljs.core.get_in.call(null,entity_65267,path_kvs);
if(cljs.core.truth_(temp__5457__auto___65268)){
var path_65269 = temp__5457__auto___65268;
var len_65270 = gamebase.geometry.path_length.call(null,path_65269);
var n_65271 = ((len_65270 / (5)) | (0));
var d_65272 = (len_65270 / n_65271);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__65263_65273 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_65271 + (1))));
var chunk__65264_65274 = null;
var count__65265_65275 = (0);
var i__65266_65276 = (0);
while(true){
if((i__65266_65276 < count__65265_65275)){
var i_65277 = cljs.core._nth.call(null,chunk__65264_65274,i__65266_65276);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_65269,(i_65277 * d_65272)));


var G__65278 = seq__65263_65273;
var G__65279 = chunk__65264_65274;
var G__65280 = count__65265_65275;
var G__65281 = (i__65266_65276 + (1));
seq__65263_65273 = G__65278;
chunk__65264_65274 = G__65279;
count__65265_65275 = G__65280;
i__65266_65276 = G__65281;
continue;
} else {
var temp__5457__auto___65282__$1 = cljs.core.seq.call(null,seq__65263_65273);
if(temp__5457__auto___65282__$1){
var seq__65263_65283__$1 = temp__5457__auto___65282__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65263_65283__$1)){
var c__4351__auto___65284 = cljs.core.chunk_first.call(null,seq__65263_65283__$1);
var G__65285 = cljs.core.chunk_rest.call(null,seq__65263_65283__$1);
var G__65286 = c__4351__auto___65284;
var G__65287 = cljs.core.count.call(null,c__4351__auto___65284);
var G__65288 = (0);
seq__65263_65273 = G__65285;
chunk__65264_65274 = G__65286;
count__65265_65275 = G__65287;
i__65266_65276 = G__65288;
continue;
} else {
var i_65289 = cljs.core.first.call(null,seq__65263_65283__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_65269,(i_65289 * d_65272)));


var G__65290 = cljs.core.next.call(null,seq__65263_65283__$1);
var G__65291 = null;
var G__65292 = (0);
var G__65293 = (0);
seq__65263_65273 = G__65290;
chunk__65264_65274 = G__65291;
count__65265_65275 = G__65292;
i__65266_65276 = G__65293;
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
gamebase.systems.drawing.mk_path_history_component = (function gamebase$systems$drawing$mk_path_history_component(entity_or_id,key,p__65294){
var map__65295 = p__65294;
var map__65295__$1 = ((((!((map__65295 == null)))?(((((map__65295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65295):map__65295);
var path_history_kvs = cljs.core.get.call(null,map__65295__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var color = cljs.core.get.call(null,map__65295__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761)),new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496),path_history_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__65297){
var map__65298 = p__65297;
var map__65298__$1 = ((((!((map__65298 == null)))?(((((map__65298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65298):map__65298);
var component = map__65298__$1;
var path_history_kvs = cljs.core.get.call(null,map__65298__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var entity_65312 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___65313 = cljs.core.get_in.call(null,entity_65312,path_history_kvs);
if(cljs.core.truth_(temp__5457__auto___65313)){
var path_history_65314 = temp__5457__auto___65313;
var seq__65300_65315 = cljs.core.seq.call(null,path_history_65314);
var chunk__65301_65316 = null;
var count__65302_65317 = (0);
var i__65303_65318 = (0);
while(true){
if((i__65303_65318 < count__65302_65317)){
var path_65319 = cljs.core._nth.call(null,chunk__65301_65316,i__65303_65318);
var len_65320 = gamebase.geometry.path_length.call(null,path_65319);
var n_65321 = ((len_65320 / (5)) | (0));
var d_65322 = (len_65320 / n_65321);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__65304_65323 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_65321 + (1))));
var chunk__65305_65324 = null;
var count__65306_65325 = (0);
var i__65307_65326 = (0);
while(true){
if((i__65307_65326 < count__65306_65325)){
var i_65327 = cljs.core._nth.call(null,chunk__65305_65324,i__65307_65326);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_65319,(i_65327 * d_65322)));


var G__65328 = seq__65304_65323;
var G__65329 = chunk__65305_65324;
var G__65330 = count__65306_65325;
var G__65331 = (i__65307_65326 + (1));
seq__65304_65323 = G__65328;
chunk__65305_65324 = G__65329;
count__65306_65325 = G__65330;
i__65307_65326 = G__65331;
continue;
} else {
var temp__5457__auto___65332__$1 = cljs.core.seq.call(null,seq__65304_65323);
if(temp__5457__auto___65332__$1){
var seq__65304_65333__$1 = temp__5457__auto___65332__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65304_65333__$1)){
var c__4351__auto___65334 = cljs.core.chunk_first.call(null,seq__65304_65333__$1);
var G__65335 = cljs.core.chunk_rest.call(null,seq__65304_65333__$1);
var G__65336 = c__4351__auto___65334;
var G__65337 = cljs.core.count.call(null,c__4351__auto___65334);
var G__65338 = (0);
seq__65304_65323 = G__65335;
chunk__65305_65324 = G__65336;
count__65306_65325 = G__65337;
i__65307_65326 = G__65338;
continue;
} else {
var i_65339 = cljs.core.first.call(null,seq__65304_65333__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_65319,(i_65339 * d_65322)));


var G__65340 = cljs.core.next.call(null,seq__65304_65333__$1);
var G__65341 = null;
var G__65342 = (0);
var G__65343 = (0);
seq__65304_65323 = G__65340;
chunk__65305_65324 = G__65341;
count__65306_65325 = G__65342;
i__65307_65326 = G__65343;
continue;
}
} else {
}
}
break;
}

pop();


var G__65344 = seq__65300_65315;
var G__65345 = chunk__65301_65316;
var G__65346 = count__65302_65317;
var G__65347 = (i__65303_65318 + (1));
seq__65300_65315 = G__65344;
chunk__65301_65316 = G__65345;
count__65302_65317 = G__65346;
i__65303_65318 = G__65347;
continue;
} else {
var temp__5457__auto___65348__$1 = cljs.core.seq.call(null,seq__65300_65315);
if(temp__5457__auto___65348__$1){
var seq__65300_65349__$1 = temp__5457__auto___65348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65300_65349__$1)){
var c__4351__auto___65350 = cljs.core.chunk_first.call(null,seq__65300_65349__$1);
var G__65351 = cljs.core.chunk_rest.call(null,seq__65300_65349__$1);
var G__65352 = c__4351__auto___65350;
var G__65353 = cljs.core.count.call(null,c__4351__auto___65350);
var G__65354 = (0);
seq__65300_65315 = G__65351;
chunk__65301_65316 = G__65352;
count__65302_65317 = G__65353;
i__65303_65318 = G__65354;
continue;
} else {
var path_65355 = cljs.core.first.call(null,seq__65300_65349__$1);
var len_65356 = gamebase.geometry.path_length.call(null,path_65355);
var n_65357 = ((len_65356 / (5)) | (0));
var d_65358 = (len_65356 / n_65357);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__65308_65359 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_65357 + (1))));
var chunk__65309_65360 = null;
var count__65310_65361 = (0);
var i__65311_65362 = (0);
while(true){
if((i__65311_65362 < count__65310_65361)){
var i_65363 = cljs.core._nth.call(null,chunk__65309_65360,i__65311_65362);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_65355,(i_65363 * d_65358)));


var G__65364 = seq__65308_65359;
var G__65365 = chunk__65309_65360;
var G__65366 = count__65310_65361;
var G__65367 = (i__65311_65362 + (1));
seq__65308_65359 = G__65364;
chunk__65309_65360 = G__65365;
count__65310_65361 = G__65366;
i__65311_65362 = G__65367;
continue;
} else {
var temp__5457__auto___65368__$2 = cljs.core.seq.call(null,seq__65308_65359);
if(temp__5457__auto___65368__$2){
var seq__65308_65369__$1 = temp__5457__auto___65368__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65308_65369__$1)){
var c__4351__auto___65370 = cljs.core.chunk_first.call(null,seq__65308_65369__$1);
var G__65371 = cljs.core.chunk_rest.call(null,seq__65308_65369__$1);
var G__65372 = c__4351__auto___65370;
var G__65373 = cljs.core.count.call(null,c__4351__auto___65370);
var G__65374 = (0);
seq__65308_65359 = G__65371;
chunk__65309_65360 = G__65372;
count__65310_65361 = G__65373;
i__65311_65362 = G__65374;
continue;
} else {
var i_65375 = cljs.core.first.call(null,seq__65308_65369__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_65355,(i_65375 * d_65358)));


var G__65376 = cljs.core.next.call(null,seq__65308_65369__$1);
var G__65377 = null;
var G__65378 = (0);
var G__65379 = (0);
seq__65308_65359 = G__65376;
chunk__65309_65360 = G__65377;
count__65310_65361 = G__65378;
i__65311_65362 = G__65379;
continue;
}
} else {
}
}
break;
}

pop();


var G__65380 = cljs.core.next.call(null,seq__65300_65349__$1);
var G__65381 = null;
var G__65382 = (0);
var G__65383 = (0);
seq__65300_65315 = G__65380;
chunk__65301_65316 = G__65381;
count__65302_65317 = G__65382;
i__65303_65318 = G__65383;
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
