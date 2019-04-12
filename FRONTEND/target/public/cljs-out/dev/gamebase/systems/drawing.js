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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28308_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__28308_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});



gamebase.systems.drawing._draw_layer = (function gamebase$systems$drawing$_draw_layer(world,layer,p__28310,draw_extra_QMARK_){
var map__28311 = p__28310;
var map__28311__$1 = ((((!((map__28311 == null)))?(((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var context = map__28311__$1;
var min_x = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_x = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_y = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__28313 = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var map__28313__$1 = ((((!((map__28313 == null)))?(((((map__28313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313):map__28313);
var ctx = map__28313__$1;
var tile_width = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343));
var tile_height = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"tile-height","tile-height",-905667651));
var world_width_in_tiles = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212));
var world_height_in_tiles = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"world-height-in-tiles","world-height-in-tiles",1693693808));
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
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__28315(s__28316){
return (new cljs.core.LazySeq(null,((function (map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__28316__$1 = s__28316;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28316__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var tx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__28316__$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__28315_$_iter__28317(s__28318){
return (new cljs.core.LazySeq(null,((function (s__28316__$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__28318__$1 = s__28318;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__28318__$1);
if(temp__5457__auto____$1){
var s__28318__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28318__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28318__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28320 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28319 = (0);
while(true){
if((i__28319 < size__4323__auto__)){
var ty = cljs.core._nth.call(null,c__4322__auto__,i__28319);
cljs.core.chunk_append.call(null,b__28320,(function (){var vec__28321 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__28321,(0),null);
var tile_number = cljs.core.nth.call(null,vec__28321,(1),null);
var tl = vec__28321;
var map__28324 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__28324__$1 = ((((!((map__28324 == null)))?(((((map__28324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);
var inf = map__28324__$1;
var img = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (i__28319,s__28316__$1,tile_data,vec__28321,_,tile_number,tl,map__28324,map__28324__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__28320,s__28318__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__28309_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__28309_SHARP_,tx,ty,tile_data);
});})(i__28319,s__28316__$1,tile_data,vec__28321,_,tile_number,tl,map__28324,map__28324__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__28320,s__28318__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})());

var G__28331 = (i__28319 + (1));
i__28319 = G__28331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28320),gamebase$systems$drawing$_draw_layer_$_iter__28315_$_iter__28317.call(null,cljs.core.chunk_rest.call(null,s__28318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28320),null);
}
} else {
var ty = cljs.core.first.call(null,s__28318__$2);
return cljs.core.cons.call(null,(function (){var vec__28326 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__28326,(0),null);
var tile_number = cljs.core.nth.call(null,vec__28326,(1),null);
var tl = vec__28326;
var map__28329 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__28329__$1 = ((((!((map__28329 == null)))?(((((map__28329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);
var inf = map__28329__$1;
var img = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (s__28316__$1,tile_data,vec__28326,_,tile_number,tl,map__28329,map__28329__$1,inf,img,x,y,w,h,ty,s__28318__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__28309_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__28309_SHARP_,tx,ty,tile_data);
});})(s__28316__$1,tile_data,vec__28326,_,tile_number,tl,map__28329,map__28329__$1,inf,img,x,y,w,h,ty,s__28318__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})(),gamebase$systems$drawing$_draw_layer_$_iter__28315_$_iter__28317.call(null,cljs.core.rest.call(null,s__28318__$2)));
}
} else {
return null;
}
break;
}
});})(s__28316__$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(s__28316__$1,tx,xs__6012__auto__,temp__5457__auto__,map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,ty_range));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,gamebase$systems$drawing$_draw_layer_$_iter__28315.call(null,cljs.core.rest.call(null,s__28316__$1)));
} else {
var G__28332 = cljs.core.rest.call(null,s__28316__$1);
s__28316__$1 = G__28332;
continue;
}
} else {
return null;
}
break;
}
});})(map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(map__28313,map__28313__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__28311,map__28311__$1,context,min_x,max_x,min_y,max_y))
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
gamebase.systems.drawing.mk_static_image_component = (function gamebase$systems$drawing$mk_static_image_component(entity_or_id,key,p__28333){
var map__28334 = p__28333;
var map__28334__$1 = ((((!((map__28334 == null)))?(((((map__28334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28334):map__28334);
var point_kvs = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813)),new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),point_kvs,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),angle_kvs,new cljs.core.Keyword(null,"center","center",-748944368),center,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),resource_name_kvs);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return component;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__28336){
var map__28337 = p__28336;
var map__28337__$1 = ((((!((map__28337 == null)))?(((((map__28337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);
var component = map__28337__$1;
var point_kvs = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
var entity_28345 = gamebase.ecs.get_entity.call(null,world,component);
var vec__28339_28346 = cljs.core.get_in.call(null,entity_28345,point_kvs);
var point_x_28347 = cljs.core.nth.call(null,vec__28339_28346,(0),null);
var point_y_28348 = cljs.core.nth.call(null,vec__28339_28346,(1),null);
var vec__28342_28349 = center;
var center_x_28350 = cljs.core.nth.call(null,vec__28342_28349,(0),null);
var center_y_28351 = cljs.core.nth.call(null,vec__28342_28349,(1),null);
var angle_28352 = cljs.core.get_in.call(null,entity_28345,angle_kvs);
var temp__5457__auto___28353 = gamebase.resources.get_resource.call(null,cljs.core.get_in.call(null,entity_28345,resource_name_kvs));
if(cljs.core.truth_(temp__5457__auto___28353)){
var img_28354 = temp__5457__auto___28353;
push();

translate(point_x_28347,point_y_28348);

rotate(angle_28352);

scale((1),(-1));

image(img_28354,(- center_x_28350),(- center_y_28351));

pop();
} else {
}

return component;
}));
gamebase.systems.drawing.mk_path_component = (function gamebase$systems$drawing$mk_path_component(entity_or_id,key,p__28355){
var map__28356 = p__28355;
var map__28356__$1 = ((((!((map__28356 == null)))?(((((map__28356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28356):map__28356);
var path_kvs = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var color = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973)),new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342),path_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__28358){
var map__28359 = p__28358;
var map__28359__$1 = ((((!((map__28359 == null)))?(((((map__28359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28359):map__28359);
var component = map__28359__$1;
var path_kvs = cljs.core.get.call(null,map__28359__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var entity_28365 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___28366 = cljs.core.get_in.call(null,entity_28365,path_kvs);
if(cljs.core.truth_(temp__5457__auto___28366)){
var path_28367 = temp__5457__auto___28366;
var len_28368 = gamebase.geometry.path_length.call(null,path_28367);
var n_28369 = ((len_28368 / (5)) | (0));
var d_28370 = (len_28368 / n_28369);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__28361_28371 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_28369 + (1))));
var chunk__28362_28372 = null;
var count__28363_28373 = (0);
var i__28364_28374 = (0);
while(true){
if((i__28364_28374 < count__28363_28373)){
var i_28375 = cljs.core._nth.call(null,chunk__28362_28372,i__28364_28374);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_28367,(i_28375 * d_28370)));


var G__28376 = seq__28361_28371;
var G__28377 = chunk__28362_28372;
var G__28378 = count__28363_28373;
var G__28379 = (i__28364_28374 + (1));
seq__28361_28371 = G__28376;
chunk__28362_28372 = G__28377;
count__28363_28373 = G__28378;
i__28364_28374 = G__28379;
continue;
} else {
var temp__5457__auto___28380__$1 = cljs.core.seq.call(null,seq__28361_28371);
if(temp__5457__auto___28380__$1){
var seq__28361_28381__$1 = temp__5457__auto___28380__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28361_28381__$1)){
var c__4351__auto___28382 = cljs.core.chunk_first.call(null,seq__28361_28381__$1);
var G__28383 = cljs.core.chunk_rest.call(null,seq__28361_28381__$1);
var G__28384 = c__4351__auto___28382;
var G__28385 = cljs.core.count.call(null,c__4351__auto___28382);
var G__28386 = (0);
seq__28361_28371 = G__28383;
chunk__28362_28372 = G__28384;
count__28363_28373 = G__28385;
i__28364_28374 = G__28386;
continue;
} else {
var i_28387 = cljs.core.first.call(null,seq__28361_28381__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_28367,(i_28387 * d_28370)));


var G__28388 = cljs.core.next.call(null,seq__28361_28381__$1);
var G__28389 = null;
var G__28390 = (0);
var G__28391 = (0);
seq__28361_28371 = G__28388;
chunk__28362_28372 = G__28389;
count__28363_28373 = G__28390;
i__28364_28374 = G__28391;
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
gamebase.systems.drawing.mk_path_history_component = (function gamebase$systems$drawing$mk_path_history_component(entity_or_id,key,p__28392){
var map__28393 = p__28392;
var map__28393__$1 = ((((!((map__28393 == null)))?(((((map__28393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);
var path_history_kvs = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var color = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761)),new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496),path_history_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path-history","gamebase.systems.drawing/path-history",151107761),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__28395){
var map__28396 = p__28395;
var map__28396__$1 = ((((!((map__28396 == null)))?(((((map__28396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28396):map__28396);
var component = map__28396__$1;
var path_history_kvs = cljs.core.get.call(null,map__28396__$1,new cljs.core.Keyword(null,"path-history-kvs","path-history-kvs",-1378128496));
var entity_28410 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___28411 = cljs.core.get_in.call(null,entity_28410,path_history_kvs);
if(cljs.core.truth_(temp__5457__auto___28411)){
var path_history_28412 = temp__5457__auto___28411;
var seq__28398_28413 = cljs.core.seq.call(null,path_history_28412);
var chunk__28399_28414 = null;
var count__28400_28415 = (0);
var i__28401_28416 = (0);
while(true){
if((i__28401_28416 < count__28400_28415)){
var path_28417 = cljs.core._nth.call(null,chunk__28399_28414,i__28401_28416);
var len_28418 = gamebase.geometry.path_length.call(null,path_28417);
var n_28419 = ((len_28418 / (5)) | (0));
var d_28420 = (len_28418 / n_28419);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__28402_28421 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_28419 + (1))));
var chunk__28403_28422 = null;
var count__28404_28423 = (0);
var i__28405_28424 = (0);
while(true){
if((i__28405_28424 < count__28404_28423)){
var i_28425 = cljs.core._nth.call(null,chunk__28403_28422,i__28405_28424);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_28417,(i_28425 * d_28420)));


var G__28426 = seq__28402_28421;
var G__28427 = chunk__28403_28422;
var G__28428 = count__28404_28423;
var G__28429 = (i__28405_28424 + (1));
seq__28402_28421 = G__28426;
chunk__28403_28422 = G__28427;
count__28404_28423 = G__28428;
i__28405_28424 = G__28429;
continue;
} else {
var temp__5457__auto___28430__$1 = cljs.core.seq.call(null,seq__28402_28421);
if(temp__5457__auto___28430__$1){
var seq__28402_28431__$1 = temp__5457__auto___28430__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28402_28431__$1)){
var c__4351__auto___28432 = cljs.core.chunk_first.call(null,seq__28402_28431__$1);
var G__28433 = cljs.core.chunk_rest.call(null,seq__28402_28431__$1);
var G__28434 = c__4351__auto___28432;
var G__28435 = cljs.core.count.call(null,c__4351__auto___28432);
var G__28436 = (0);
seq__28402_28421 = G__28433;
chunk__28403_28422 = G__28434;
count__28404_28423 = G__28435;
i__28405_28424 = G__28436;
continue;
} else {
var i_28437 = cljs.core.first.call(null,seq__28402_28431__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_28417,(i_28437 * d_28420)));


var G__28438 = cljs.core.next.call(null,seq__28402_28431__$1);
var G__28439 = null;
var G__28440 = (0);
var G__28441 = (0);
seq__28402_28421 = G__28438;
chunk__28403_28422 = G__28439;
count__28404_28423 = G__28440;
i__28405_28424 = G__28441;
continue;
}
} else {
}
}
break;
}

pop();


var G__28442 = seq__28398_28413;
var G__28443 = chunk__28399_28414;
var G__28444 = count__28400_28415;
var G__28445 = (i__28401_28416 + (1));
seq__28398_28413 = G__28442;
chunk__28399_28414 = G__28443;
count__28400_28415 = G__28444;
i__28401_28416 = G__28445;
continue;
} else {
var temp__5457__auto___28446__$1 = cljs.core.seq.call(null,seq__28398_28413);
if(temp__5457__auto___28446__$1){
var seq__28398_28447__$1 = temp__5457__auto___28446__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28398_28447__$1)){
var c__4351__auto___28448 = cljs.core.chunk_first.call(null,seq__28398_28447__$1);
var G__28449 = cljs.core.chunk_rest.call(null,seq__28398_28447__$1);
var G__28450 = c__4351__auto___28448;
var G__28451 = cljs.core.count.call(null,c__4351__auto___28448);
var G__28452 = (0);
seq__28398_28413 = G__28449;
chunk__28399_28414 = G__28450;
count__28400_28415 = G__28451;
i__28401_28416 = G__28452;
continue;
} else {
var path_28453 = cljs.core.first.call(null,seq__28398_28447__$1);
var len_28454 = gamebase.geometry.path_length.call(null,path_28453);
var n_28455 = ((len_28454 / (5)) | (0));
var d_28456 = (len_28454 / n_28455);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__28406_28457 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_28455 + (1))));
var chunk__28407_28458 = null;
var count__28408_28459 = (0);
var i__28409_28460 = (0);
while(true){
if((i__28409_28460 < count__28408_28459)){
var i_28461 = cljs.core._nth.call(null,chunk__28407_28458,i__28409_28460);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_28453,(i_28461 * d_28456)));


var G__28462 = seq__28406_28457;
var G__28463 = chunk__28407_28458;
var G__28464 = count__28408_28459;
var G__28465 = (i__28409_28460 + (1));
seq__28406_28457 = G__28462;
chunk__28407_28458 = G__28463;
count__28408_28459 = G__28464;
i__28409_28460 = G__28465;
continue;
} else {
var temp__5457__auto___28466__$2 = cljs.core.seq.call(null,seq__28406_28457);
if(temp__5457__auto___28466__$2){
var seq__28406_28467__$1 = temp__5457__auto___28466__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28406_28467__$1)){
var c__4351__auto___28468 = cljs.core.chunk_first.call(null,seq__28406_28467__$1);
var G__28469 = cljs.core.chunk_rest.call(null,seq__28406_28467__$1);
var G__28470 = c__4351__auto___28468;
var G__28471 = cljs.core.count.call(null,c__4351__auto___28468);
var G__28472 = (0);
seq__28406_28457 = G__28469;
chunk__28407_28458 = G__28470;
count__28408_28459 = G__28471;
i__28409_28460 = G__28472;
continue;
} else {
var i_28473 = cljs.core.first.call(null,seq__28406_28467__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_28453,(i_28473 * d_28456)));


var G__28474 = cljs.core.next.call(null,seq__28406_28467__$1);
var G__28475 = null;
var G__28476 = (0);
var G__28477 = (0);
seq__28406_28457 = G__28474;
chunk__28407_28458 = G__28475;
count__28408_28459 = G__28476;
i__28409_28460 = G__28477;
continue;
}
} else {
}
}
break;
}

pop();


var G__28478 = cljs.core.next.call(null,seq__28398_28447__$1);
var G__28479 = null;
var G__28480 = (0);
var G__28481 = (0);
seq__28398_28413 = G__28478;
chunk__28399_28414 = G__28479;
count__28400_28415 = G__28480;
i__28401_28416 = G__28481;
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
