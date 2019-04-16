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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36310_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__36310_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});



gamebase.systems.drawing._draw_layer = (function gamebase$systems$drawing$_draw_layer(world,layer,p__36312,draw_extra_QMARK_){
var map__36313 = p__36312;
var map__36313__$1 = ((((!((map__36313 == null)))?(((((map__36313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36313):map__36313);
var context = map__36313__$1;
var min_x = cljs.core.get.call(null,map__36313__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_x = cljs.core.get.call(null,map__36313__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_y = cljs.core.get.call(null,map__36313__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__36313__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__36315 = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var map__36315__$1 = ((((!((map__36315 == null)))?(((((map__36315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36315):map__36315);
var ctx = map__36315__$1;
var tile_width = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343));
var tile_height = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"tile-height","tile-height",-905667651));
var world_width_in_tiles = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212));
var world_height_in_tiles = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"world-height-in-tiles","world-height-in-tiles",1693693808));
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
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__36317(s__36318){
return (new cljs.core.LazySeq(null,((function (map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__36318__$1 = s__36318;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36318__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var tx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__36318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__36317_$_iter__36319(s__36320){
return (new cljs.core.LazySeq(null,((function (s__36318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__36320__$1 = s__36320;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__36320__$1);
if(temp__5457__auto____$1){
var s__36320__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36320__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__36320__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__36322 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__36321 = (0);
while(true){
if((i__36321 < size__4323__auto__)){
var ty = cljs.core._nth.call(null,c__4322__auto__,i__36321);
cljs.core.chunk_append.call(null,b__36322,(function (){var vec__36323 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__36323,(0),null);
var tile_number = cljs.core.nth.call(null,vec__36323,(1),null);
var tl = vec__36323;
var map__36326 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__36326__$1 = ((((!((map__36326 == null)))?(((((map__36326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36326):map__36326);
var inf = map__36326__$1;
var img = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (i__36321,s__36318__$1,tile_data,vec__36323,_,tile_number,tl,map__36326,map__36326__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__36322,s__36320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__36311_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__36311_SHARP_,tx,ty,tile_data);
});})(i__36321,s__36318__$1,tile_data,vec__36323,_,tile_number,tl,map__36326,map__36326__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__36322,s__36320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})());

var G__36333 = (i__36321 + (1));
i__36321 = G__36333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36322),gamebase$systems$drawing$_draw_layer_$_iter__36317_$_iter__36319.call(null,cljs.core.chunk_rest.call(null,s__36320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36322),null);
}
} else {
var ty = cljs.core.first.call(null,s__36320__$2);
return cljs.core.cons.call(null,(function (){var vec__36328 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__36328,(0),null);
var tile_number = cljs.core.nth.call(null,vec__36328,(1),null);
var tl = vec__36328;
var map__36331 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__36331__$1 = ((((!((map__36331 == null)))?(((((map__36331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36331):map__36331);
var inf = map__36331__$1;
var img = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (s__36318__$1,tile_data,vec__36328,_,tile_number,tl,map__36331,map__36331__$1,inf,img,x,y,w,h,ty,s__36320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__36311_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__36311_SHARP_,tx,ty,tile_data);
});})(s__36318__$1,tile_data,vec__36328,_,tile_number,tl,map__36331,map__36331__$1,inf,img,x,y,w,h,ty,s__36320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})(),gamebase$systems$drawing$_draw_layer_$_iter__36317_$_iter__36319.call(null,cljs.core.rest.call(null,s__36320__$2)));
}
} else {
return null;
}
break;
}
});})(s__36318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(s__36318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,ty_range));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,gamebase$systems$drawing$_draw_layer_$_iter__36317.call(null,cljs.core.rest.call(null,s__36318__$1)));
} else {
var G__36334 = cljs.core.rest.call(null,s__36318__$1);
s__36318__$1 = G__36334;
continue;
}
} else {
return null;
}
break;
}
});})(map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(map__36315,map__36315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__36313,map__36313__$1,context,min_x,max_x,min_y,max_y))
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
gamebase.systems.drawing.mk_static_image_component = (function gamebase$systems$drawing$mk_static_image_component(entity_or_id,key,p__36335){
var map__36336 = p__36335;
var map__36336__$1 = ((((!((map__36336 == null)))?(((((map__36336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36336):map__36336);
var point_kvs = cljs.core.get.call(null,map__36336__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__36336__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__36336__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__36336__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813)),new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),point_kvs,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),angle_kvs,new cljs.core.Keyword(null,"center","center",-748944368),center,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),resource_name_kvs);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return component;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__36338){
var map__36339 = p__36338;
var map__36339__$1 = ((((!((map__36339 == null)))?(((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36339):map__36339);
var component = map__36339__$1;
var point_kvs = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
var entity_36347 = gamebase.ecs.get_entity.call(null,world,component);
var vec__36341_36348 = cljs.core.get_in.call(null,entity_36347,point_kvs);
var point_x_36349 = cljs.core.nth.call(null,vec__36341_36348,(0),null);
var point_y_36350 = cljs.core.nth.call(null,vec__36341_36348,(1),null);
var vec__36344_36351 = center;
var center_x_36352 = cljs.core.nth.call(null,vec__36344_36351,(0),null);
var center_y_36353 = cljs.core.nth.call(null,vec__36344_36351,(1),null);
var angle_36354 = cljs.core.get_in.call(null,entity_36347,angle_kvs);
var temp__5457__auto___36355 = gamebase.resources.get_resource.call(null,cljs.core.get_in.call(null,entity_36347,resource_name_kvs));
if(cljs.core.truth_(temp__5457__auto___36355)){
var img_36356 = temp__5457__auto___36355;
push();

translate(point_x_36349,point_y_36350);

rotate(angle_36354);

scale((1),(-1));

image(img_36356,(- center_x_36352),(- center_y_36353));

pop();
} else {
}

return component;
}));
gamebase.systems.drawing.mk_path_component = (function gamebase$systems$drawing$mk_path_component(entity_or_id,key,p__36357){
var map__36358 = p__36357;
var map__36358__$1 = ((((!((map__36358 == null)))?(((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36358):map__36358);
var path_kvs = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var color = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973)),new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342),path_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__36360){
var map__36361 = p__36360;
var map__36361__$1 = ((((!((map__36361 == null)))?(((((map__36361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36361):map__36361);
var component = map__36361__$1;
var path_kvs = cljs.core.get.call(null,map__36361__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var entity_36367 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___36368 = cljs.core.get_in.call(null,entity_36367,path_kvs);
if(cljs.core.truth_(temp__5457__auto___36368)){
var path_36369 = temp__5457__auto___36368;
var len_36370 = gamebase.geometry.path_length.call(null,path_36369);
var n_36371 = ((len_36370 / (5)) | (0));
var d_36372 = (len_36370 / n_36371);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__36363_36373 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_36371 + (1))));
var chunk__36364_36374 = null;
var count__36365_36375 = (0);
var i__36366_36376 = (0);
while(true){
if((i__36366_36376 < count__36365_36375)){
var i_36377 = cljs.core._nth.call(null,chunk__36364_36374,i__36366_36376);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_36369,(i_36377 * d_36372)));


var G__36378 = seq__36363_36373;
var G__36379 = chunk__36364_36374;
var G__36380 = count__36365_36375;
var G__36381 = (i__36366_36376 + (1));
seq__36363_36373 = G__36378;
chunk__36364_36374 = G__36379;
count__36365_36375 = G__36380;
i__36366_36376 = G__36381;
continue;
} else {
var temp__5457__auto___36382__$1 = cljs.core.seq.call(null,seq__36363_36373);
if(temp__5457__auto___36382__$1){
var seq__36363_36383__$1 = temp__5457__auto___36382__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36363_36383__$1)){
var c__4351__auto___36384 = cljs.core.chunk_first.call(null,seq__36363_36383__$1);
var G__36385 = cljs.core.chunk_rest.call(null,seq__36363_36383__$1);
var G__36386 = c__4351__auto___36384;
var G__36387 = cljs.core.count.call(null,c__4351__auto___36384);
var G__36388 = (0);
seq__36363_36373 = G__36385;
chunk__36364_36374 = G__36386;
count__36365_36375 = G__36387;
i__36366_36376 = G__36388;
continue;
} else {
var i_36389 = cljs.core.first.call(null,seq__36363_36383__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_36369,(i_36389 * d_36372)));


var G__36390 = cljs.core.next.call(null,seq__36363_36383__$1);
var G__36391 = null;
var G__36392 = (0);
var G__36393 = (0);
seq__36363_36373 = G__36390;
chunk__36364_36374 = G__36391;
count__36365_36375 = G__36392;
i__36366_36376 = G__36393;
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
gamebase.systems.drawing.mk_path_history_component = (function gamebase$systems$drawing$mk_path_history_component(entity_or_id,key,p__36394){
var map__36395 = p__36394;
var map__36395__$1 = ((((!((map__36395 == null)))?(((((map__36395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36395):map__36395);
var path_history_kvs = cljs.core.get.call(null,map__36395__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var color = cljs.core.get.call(null,map__36395__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761)),new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496),path_history_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__36397){
var map__36398 = p__36397;
var map__36398__$1 = ((((!((map__36398 == null)))?(((((map__36398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36398):map__36398);
var component = map__36398__$1;
var path_history_kvs = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var entity_36412 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___36413 = cljs.core.get_in.call(null,entity_36412,path_history_kvs);
if(cljs.core.truth_(temp__5457__auto___36413)){
var path_history_36414 = temp__5457__auto___36413;
var seq__36400_36415 = cljs.core.seq.call(null,path_history_36414);
var chunk__36401_36416 = null;
var count__36402_36417 = (0);
var i__36403_36418 = (0);
while(true){
if((i__36403_36418 < count__36402_36417)){
var path_36419 = cljs.core._nth.call(null,chunk__36401_36416,i__36403_36418);
var len_36420 = gamebase.geometry.path_length.call(null,path_36419);
var n_36421 = ((len_36420 / (5)) | (0));
var d_36422 = (len_36420 / n_36421);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__36404_36423 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_36421 + (1))));
var chunk__36405_36424 = null;
var count__36406_36425 = (0);
var i__36407_36426 = (0);
while(true){
if((i__36407_36426 < count__36406_36425)){
var i_36427 = cljs.core._nth.call(null,chunk__36405_36424,i__36407_36426);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_36419,(i_36427 * d_36422)));


var G__36428 = seq__36404_36423;
var G__36429 = chunk__36405_36424;
var G__36430 = count__36406_36425;
var G__36431 = (i__36407_36426 + (1));
seq__36404_36423 = G__36428;
chunk__36405_36424 = G__36429;
count__36406_36425 = G__36430;
i__36407_36426 = G__36431;
continue;
} else {
var temp__5457__auto___36432__$1 = cljs.core.seq.call(null,seq__36404_36423);
if(temp__5457__auto___36432__$1){
var seq__36404_36433__$1 = temp__5457__auto___36432__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36404_36433__$1)){
var c__4351__auto___36434 = cljs.core.chunk_first.call(null,seq__36404_36433__$1);
var G__36435 = cljs.core.chunk_rest.call(null,seq__36404_36433__$1);
var G__36436 = c__4351__auto___36434;
var G__36437 = cljs.core.count.call(null,c__4351__auto___36434);
var G__36438 = (0);
seq__36404_36423 = G__36435;
chunk__36405_36424 = G__36436;
count__36406_36425 = G__36437;
i__36407_36426 = G__36438;
continue;
} else {
var i_36439 = cljs.core.first.call(null,seq__36404_36433__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_36419,(i_36439 * d_36422)));


var G__36440 = cljs.core.next.call(null,seq__36404_36433__$1);
var G__36441 = null;
var G__36442 = (0);
var G__36443 = (0);
seq__36404_36423 = G__36440;
chunk__36405_36424 = G__36441;
count__36406_36425 = G__36442;
i__36407_36426 = G__36443;
continue;
}
} else {
}
}
break;
}

pop();


var G__36444 = seq__36400_36415;
var G__36445 = chunk__36401_36416;
var G__36446 = count__36402_36417;
var G__36447 = (i__36403_36418 + (1));
seq__36400_36415 = G__36444;
chunk__36401_36416 = G__36445;
count__36402_36417 = G__36446;
i__36403_36418 = G__36447;
continue;
} else {
var temp__5457__auto___36448__$1 = cljs.core.seq.call(null,seq__36400_36415);
if(temp__5457__auto___36448__$1){
var seq__36400_36449__$1 = temp__5457__auto___36448__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36400_36449__$1)){
var c__4351__auto___36450 = cljs.core.chunk_first.call(null,seq__36400_36449__$1);
var G__36451 = cljs.core.chunk_rest.call(null,seq__36400_36449__$1);
var G__36452 = c__4351__auto___36450;
var G__36453 = cljs.core.count.call(null,c__4351__auto___36450);
var G__36454 = (0);
seq__36400_36415 = G__36451;
chunk__36401_36416 = G__36452;
count__36402_36417 = G__36453;
i__36403_36418 = G__36454;
continue;
} else {
var path_36455 = cljs.core.first.call(null,seq__36400_36449__$1);
var len_36456 = gamebase.geometry.path_length.call(null,path_36455);
var n_36457 = ((len_36456 / (5)) | (0));
var d_36458 = (len_36456 / n_36457);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__36408_36459 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_36457 + (1))));
var chunk__36409_36460 = null;
var count__36410_36461 = (0);
var i__36411_36462 = (0);
while(true){
if((i__36411_36462 < count__36410_36461)){
var i_36463 = cljs.core._nth.call(null,chunk__36409_36460,i__36411_36462);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_36455,(i_36463 * d_36458)));


var G__36464 = seq__36408_36459;
var G__36465 = chunk__36409_36460;
var G__36466 = count__36410_36461;
var G__36467 = (i__36411_36462 + (1));
seq__36408_36459 = G__36464;
chunk__36409_36460 = G__36465;
count__36410_36461 = G__36466;
i__36411_36462 = G__36467;
continue;
} else {
var temp__5457__auto___36468__$2 = cljs.core.seq.call(null,seq__36408_36459);
if(temp__5457__auto___36468__$2){
var seq__36408_36469__$1 = temp__5457__auto___36468__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36408_36469__$1)){
var c__4351__auto___36470 = cljs.core.chunk_first.call(null,seq__36408_36469__$1);
var G__36471 = cljs.core.chunk_rest.call(null,seq__36408_36469__$1);
var G__36472 = c__4351__auto___36470;
var G__36473 = cljs.core.count.call(null,c__4351__auto___36470);
var G__36474 = (0);
seq__36408_36459 = G__36471;
chunk__36409_36460 = G__36472;
count__36410_36461 = G__36473;
i__36411_36462 = G__36474;
continue;
} else {
var i_36475 = cljs.core.first.call(null,seq__36408_36469__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_36455,(i_36475 * d_36458)));


var G__36476 = cljs.core.next.call(null,seq__36408_36469__$1);
var G__36477 = null;
var G__36478 = (0);
var G__36479 = (0);
seq__36408_36459 = G__36476;
chunk__36409_36460 = G__36477;
count__36410_36461 = G__36478;
i__36411_36462 = G__36479;
continue;
}
} else {
}
}
break;
}

pop();


var G__36480 = cljs.core.next.call(null,seq__36400_36449__$1);
var G__36481 = null;
var G__36482 = (0);
var G__36483 = (0);
seq__36400_36415 = G__36480;
chunk__36401_36416 = G__36481;
count__36402_36417 = G__36482;
i__36403_36418 = G__36483;
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
