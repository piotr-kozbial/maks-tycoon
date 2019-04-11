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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20310_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__20310_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});



gamebase.systems.drawing._draw_layer = (function gamebase$systems$drawing$_draw_layer(world,layer,p__20312,draw_extra_QMARK_){
var map__20313 = p__20312;
var map__20313__$1 = ((((!((map__20313 == null)))?(((((map__20313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20313):map__20313);
var context = map__20313__$1;
var min_x = cljs.core.get.call(null,map__20313__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_x = cljs.core.get.call(null,map__20313__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_y = cljs.core.get.call(null,map__20313__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__20313__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__20315 = new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world);
var map__20315__$1 = ((((!((map__20315 == null)))?(((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);
var ctx = map__20315__$1;
var tile_width = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343));
var tile_height = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"tile-height","tile-height",-905667651));
var world_width_in_tiles = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212));
var world_height_in_tiles = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"world-height-in-tiles","world-height-in-tiles",1693693808));
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
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__20317(s__20318){
return (new cljs.core.LazySeq(null,((function (map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__20318__$1 = s__20318;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20318__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var tx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__20318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y){
return (function gamebase$systems$drawing$_draw_layer_$_iter__20317_$_iter__20319(s__20320){
return (new cljs.core.LazySeq(null,((function (s__20318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y){
return (function (){
var s__20320__$1 = s__20320;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__20320__$1);
if(temp__5457__auto____$1){
var s__20320__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20320__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__20320__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__20322 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__20321 = (0);
while(true){
if((i__20321 < size__4323__auto__)){
var ty = cljs.core._nth.call(null,c__4322__auto__,i__20321);
cljs.core.chunk_append.call(null,b__20322,(function (){var vec__20323 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__20323,(0),null);
var tile_number = cljs.core.nth.call(null,vec__20323,(1),null);
var tl = vec__20323;
var map__20326 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__20326__$1 = ((((!((map__20326 == null)))?(((((map__20326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20326):map__20326);
var inf = map__20326__$1;
var img = cljs.core.get.call(null,map__20326__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__20326__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20326__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__20326__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20326__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (i__20321,s__20318__$1,tile_data,vec__20323,_,tile_number,tl,map__20326,map__20326__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__20322,s__20320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__20311_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__20311_SHARP_,tx,ty,tile_data);
});})(i__20321,s__20318__$1,tile_data,vec__20323,_,tile_number,tl,map__20326,map__20326__$1,inf,img,x,y,w,h,ty,c__4322__auto__,size__4323__auto__,b__20322,s__20320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})());

var G__20333 = (i__20321 + (1));
i__20321 = G__20333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20322),gamebase$systems$drawing$_draw_layer_$_iter__20317_$_iter__20319.call(null,cljs.core.chunk_rest.call(null,s__20320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20322),null);
}
} else {
var ty = cljs.core.first.call(null,s__20320__$2);
return cljs.core.cons.call(null,(function (){var vec__20328 = gamebase.layers.get_tile_from_layer.call(null,layer,tx,ty);
var _ = cljs.core.nth.call(null,vec__20328,(0),null);
var tile_number = cljs.core.nth.call(null,vec__20328,(1),null);
var tl = vec__20328;
var map__20331 = gamebase.layers.get_rendering_information_for_tile.call(null,ctx,tl);
var map__20331__$1 = ((((!((map__20331 == null)))?(((((map__20331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20331):map__20331);
var inf = map__20331__$1;
var img = cljs.core.get.call(null,map__20331__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var x = cljs.core.get.call(null,map__20331__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20331__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__20331__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20331__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.truth_(tl)){
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,img),x,y,w,h,(tile_width * tx),(tile_height * ty));

if(cljs.core.truth_(draw_extra_QMARK_)){
var tile_data = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.some.call(null,((function (s__20318__$1,tile_data,vec__20328,_,tile_number,tl,map__20331,map__20331__$1,inf,img,x,y,w,h,ty,s__20320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y){
return (function (p1__20311_SHARP_){
return gamebase.systems.drawing.draw_tile_extra.call(null,p1__20311_SHARP_,tx,ty,tile_data);
});})(s__20318__$1,tile_data,vec__20328,_,tile_number,tl,map__20331,map__20331__$1,inf,img,x,y,w,h,ty,s__20320__$2,temp__5457__auto____$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile_data));
} else {
return null;
}
} else {
return null;
}
})(),gamebase$systems$drawing$_draw_layer_$_iter__20317_$_iter__20319.call(null,cljs.core.rest.call(null,s__20320__$2)));
}
} else {
return null;
}
break;
}
});})(s__20318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(s__20318__$1,tx,xs__6012__auto__,temp__5457__auto__,map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,ty_range));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,gamebase$systems$drawing$_draw_layer_$_iter__20317.call(null,cljs.core.rest.call(null,s__20318__$1)));
} else {
var G__20334 = cljs.core.rest.call(null,s__20318__$1);
s__20318__$1 = G__20334;
continue;
}
} else {
return null;
}
break;
}
});})(map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y))
,null,null));
});})(map__20315,map__20315__$1,ctx,tile_width,tile_height,world_width_in_tiles,world_height_in_tiles,tx_min,tx_max,ty_min,ty_max,tx_range,ty_range,map__20313,map__20313__$1,context,min_x,max_x,min_y,max_y))
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
gamebase.systems.drawing.mk_static_image_component = (function gamebase$systems$drawing$mk_static_image_component(entity_or_id,key,p__20335){
var map__20336 = p__20335;
var map__20336__$1 = ((((!((map__20336 == null)))?(((((map__20336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20336):map__20336);
var point_kvs = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813)),new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377),point_kvs,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469),angle_kvs,new cljs.core.Keyword(null,"center","center",-748944368),center,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272),resource_name_kvs);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return component;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","static-image","gamebase.systems.drawing/static-image",-1021143813),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__20338){
var map__20339 = p__20338;
var map__20339__$1 = ((((!((map__20339 == null)))?(((((map__20339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20339):map__20339);
var component = map__20339__$1;
var point_kvs = cljs.core.get.call(null,map__20339__$1,new cljs.core.Keyword(null,"point-kvs","point-kvs",-863603377));
var angle_kvs = cljs.core.get.call(null,map__20339__$1,new cljs.core.Keyword(null,"angle-kvs","angle-kvs",1580217469));
var center = cljs.core.get.call(null,map__20339__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var resource_name_kvs = cljs.core.get.call(null,map__20339__$1,new cljs.core.Keyword(null,"resource-name-kvs","resource-name-kvs",-1859731272));
var entity_20347 = gamebase.ecs.get_entity.call(null,world,component);
var vec__20341_20348 = cljs.core.get_in.call(null,entity_20347,point_kvs);
var point_x_20349 = cljs.core.nth.call(null,vec__20341_20348,(0),null);
var point_y_20350 = cljs.core.nth.call(null,vec__20341_20348,(1),null);
var vec__20344_20351 = center;
var center_x_20352 = cljs.core.nth.call(null,vec__20344_20351,(0),null);
var center_y_20353 = cljs.core.nth.call(null,vec__20344_20351,(1),null);
var angle_20354 = cljs.core.get_in.call(null,entity_20347,angle_kvs);
var temp__5457__auto___20355 = gamebase.resources.get_resource.call(null,cljs.core.get_in.call(null,entity_20347,resource_name_kvs));
if(cljs.core.truth_(temp__5457__auto___20355)){
var img_20356 = temp__5457__auto___20355;
push();

translate(point_x_20349,point_y_20350);

rotate(angle_20354);

scale((1),(-1));

image(img_20356,(- center_x_20352),(- center_y_20353));

pop();
} else {
}

return component;
}));
gamebase.systems.drawing.mk_path_component = (function gamebase$systems$drawing$mk_path_component(entity_or_id,key,p__20357){
var map__20358 = p__20357;
var map__20358__$1 = ((((!((map__20358 == null)))?(((((map__20358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20358):map__20358);
var path_kvs = cljs.core.get.call(null,map__20358__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var color = cljs.core.get.call(null,map__20358__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.drawing","drawing","gamebase.systems.drawing/drawing",48675613),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973)),new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342),path_kvs,new cljs.core.Keyword(null,"color","color",1011675173),color);
});

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
return null;
}));

cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.drawing","path","gamebase.systems.drawing/path",810791973),new cljs.core.Keyword("gamebase.systems.drawing","draw","gamebase.systems.drawing/draw",352008451)], null),(function (world,event,p__20360){
var map__20361 = p__20360;
var map__20361__$1 = ((((!((map__20361 == null)))?(((((map__20361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20361):map__20361);
var component = map__20361__$1;
var path_kvs = cljs.core.get.call(null,map__20361__$1,new cljs.core.Keyword(null,"path-kvs","path-kvs",1600199342));
var entity_20367 = gamebase.ecs.get_entity.call(null,world,component);
var temp__5457__auto___20368 = cljs.core.get_in.call(null,entity_20367,path_kvs);
if(cljs.core.truth_(temp__5457__auto___20368)){
var path_20369 = temp__5457__auto___20368;
var len_20370 = gamebase.geometry.path_length.call(null,path_20369);
var n_20371 = ((len_20370 / (5)) | (0));
var d_20372 = (len_20370 / n_20371);
push();

stroke(color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(component)));

var seq__20363_20373 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_20371 + (1))));
var chunk__20364_20374 = null;
var count__20365_20375 = (0);
var i__20366_20376 = (0);
while(true){
if((i__20366_20376 < count__20365_20375)){
var i_20377 = cljs.core._nth.call(null,chunk__20364_20374,i__20366_20376);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_20369,(i_20377 * d_20372)));


var G__20378 = seq__20363_20373;
var G__20379 = chunk__20364_20374;
var G__20380 = count__20365_20375;
var G__20381 = (i__20366_20376 + (1));
seq__20363_20373 = G__20378;
chunk__20364_20374 = G__20379;
count__20365_20375 = G__20380;
i__20366_20376 = G__20381;
continue;
} else {
var temp__5457__auto___20382__$1 = cljs.core.seq.call(null,seq__20363_20373);
if(temp__5457__auto___20382__$1){
var seq__20363_20383__$1 = temp__5457__auto___20382__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20363_20383__$1)){
var c__4351__auto___20384 = cljs.core.chunk_first.call(null,seq__20363_20383__$1);
var G__20385 = cljs.core.chunk_rest.call(null,seq__20363_20383__$1);
var G__20386 = c__4351__auto___20384;
var G__20387 = cljs.core.count.call(null,c__4351__auto___20384);
var G__20388 = (0);
seq__20363_20373 = G__20385;
chunk__20364_20374 = G__20386;
count__20365_20375 = G__20387;
i__20366_20376 = G__20388;
continue;
} else {
var i_20389 = cljs.core.first.call(null,seq__20363_20383__$1);
cljs.core.apply.call(null,point,gamebase.geometry.path_point_at_length.call(null,path_20369,(i_20389 * d_20372)));


var G__20390 = cljs.core.next.call(null,seq__20363_20383__$1);
var G__20391 = null;
var G__20392 = (0);
var G__20393 = (0);
seq__20363_20373 = G__20390;
chunk__20364_20374 = G__20391;
count__20365_20375 = G__20392;
i__20366_20376 = G__20393;
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

//# sourceMappingURL=drawing.js.map
