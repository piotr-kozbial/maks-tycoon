// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.canvas_control');
goog.require('cljs.core');
goog.require('gamebase.events');
goog.require('gamebase.ecs');
goog.require('gamebase.projection');
if((typeof gamebase !== 'undefined') && (typeof gamebase.canvas_control !== 'undefined') && (typeof gamebase.canvas_control.conf !== 'undefined')){
} else {
gamebase.canvas_control.conf = cljs.core.atom.call(null,null);
}
gamebase.canvas_control.get_canvas_to_world_converters = (function gamebase$canvas_control$get_canvas_to_world_converters(){
var temp__5457__auto__ = cljs.core.deref.call(null,gamebase.canvas_control.conf);
if(cljs.core.truth_(temp__5457__auto__)){
var map__22320 = temp__5457__auto__;
var map__22320__$1 = ((((!((map__22320 == null)))?(((((map__22320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22320):map__22320);
var state_atom = cljs.core.get.call(null,map__22320__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22320__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__22320__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
console.log(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs)));

var map__22322 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__22322__$1 = ((((!((map__22322 == null)))?(((((map__22322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22322):map__22322);
var scale_factor = cljs.core.get.call(null,map__22322__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__22322__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__22322__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var t_x = (translation_x | (0));
var t_y = (translation_y | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__22322,map__22322__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22320,map__22320__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__){
return (function (p1__22318_SHARP_){
return (((p1__22318_SHARP_ - t_x) / scale_factor) | (0));
});})(map__22322,map__22322__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22320,map__22320__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__))
,((function (map__22322,map__22322__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22320,map__22320__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__){
return (function (p1__22319_SHARP_){
return (((p1__22319_SHARP_ - t_y) / (- scale_factor)) | (0));
});})(map__22322,map__22322__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22320,map__22320__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__))
], null);
} else {
return null;
}
});
gamebase.canvas_control.draw = (function gamebase$canvas_control$draw(){
clear();

noSmooth();

if(cljs.core.truth_(cljs.core.deref.call(null,gamebase.canvas_control.conf))){
var map__22326 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__22326__$1 = ((((!((map__22326 == null)))?(((((map__22326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22326):map__22326);
var state_atom = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
var map__22328 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__22328__$1 = ((((!((map__22328 == null)))?(((((map__22328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22328):map__22328);
var scale_factor = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var t_x = (translation_x | (0));
var t_y = (translation_y | (0));
translate(t_x,t_y);

scale(scale_factor);

scale((1),(-1));

var rev_x = ((function (map__22328,map__22328__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22326,map__22326__$1,state_atom,state_kvs,get_canvas_size){
return (function (p1__22324_SHARP_){
return ((p1__22324_SHARP_ - t_x) / scale_factor);
});})(map__22328,map__22328__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22326,map__22326__$1,state_atom,state_kvs,get_canvas_size))
;
var rev_y = ((function (rev_x,map__22328,map__22328__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22326,map__22326__$1,state_atom,state_kvs,get_canvas_size){
return (function (p1__22325_SHARP_){
return ((p1__22325_SHARP_ - t_y) / (- scale_factor));
});})(rev_x,map__22328,map__22328__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__22326,map__22326__$1,state_atom,state_kvs,get_canvas_size))
;
var vec__22330 = get_canvas_size.call(null);
var wc = cljs.core.nth.call(null,vec__22330,(0),null);
var hc = cljs.core.nth.call(null,vec__22330,(1),null);
new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gamebase.canvas_control.conf)).call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-x","min-x",-1544012261),(rev_x.call(null,(0)) | (0)),new cljs.core.Keyword(null,"max-x","max-x",1609536425),(rev_x.call(null,wc) | (0)),new cljs.core.Keyword(null,"min-y","min-y",-1969872948),(rev_y.call(null,hc) | (0)),new cljs.core.Keyword(null,"max-y","max-y",1525628082),(rev_y.call(null,(0)) | (0)),new cljs.core.Keyword(null,"mouse-x","mouse-x",-195915258),(rev_x.call(null,mouseX) | (0)),new cljs.core.Keyword(null,"mouse-y","mouse-y",83174488),(rev_y.call(null,mouseY) | (0))], null));

var temp__5457__auto__ = new cljs.core.Keyword(null,"overlay-draw","overlay-draw",-538101077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gamebase.canvas_control.conf));
if(cljs.core.truth_(temp__5457__auto__)){
var overlay_draw = temp__5457__auto__;
resetMatrix();

return overlay_draw.call(null,wc,hc);
} else {
return null;
}
} else {
return null;
}
});
gamebase.canvas_control.initialize = (function gamebase$canvas_control$initialize(p__22333){
var map__22334 = p__22333;
var map__22334__$1 = ((((!((map__22334 == null)))?(((((map__22334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22334):map__22334);
var config = map__22334__$1;
var state_atom = cljs.core.get.call(null,map__22334__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22334__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
cljs.core.reset_BANG_.call(null,gamebase.canvas_control.conf,config);

cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,state_kvs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638),(2),new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),100.0,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),300.0], null));

gamebase.canvas_control.setup_drag_event.call(null);

return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return gamebase.canvas_control.draw;},new cljs.core.Symbol("gamebase.canvas-control","draw","gamebase.canvas-control/draw",1003085460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"gamebase.canvas-control","gamebase.canvas-control",2112523957,null),new cljs.core.Symbol(null,"draw","draw",-1296104095,null),"/home/ja/projects/maks-tycoon/FRONTEND/src/gamebase/canvas_control.cljs",12,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gamebase.canvas_control.draw)?gamebase.canvas_control.draw.cljs$lang$test:null)])));
});
gamebase.canvas_control.make_proj_conf = (function gamebase$canvas_control$make_proj_conf(){
var map__22336 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__22336__$1 = ((((!((map__22336 == null)))?(((((map__22336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22336):map__22336);
var state_atom = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
var map__22337 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__22337__$1 = ((((!((map__22337 == null)))?(((((map__22337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22337):map__22337);
var scale_factor = cljs.core.get.call(null,map__22337__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__22337__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__22337__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var vec__22338 = get_canvas_size.call(null);
var wc = cljs.core.nth.call(null,vec__22338,(0),null);
var hc = cljs.core.nth.call(null,vec__22338,(1),null);
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__22336,map__22336__$1,state_atom,state_kvs,get_canvas_size,map__22337,map__22337__$1,scale_factor,translation_x,translation_y,vec__22338,wc,hc){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),wc,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),hc);
});})(map__22336,map__22336__$1,state_atom,state_kvs,get_canvas_size,map__22337,map__22337__$1,scale_factor,translation_x,translation_y,vec__22338,wc,hc))
);

return gamebase.projection.projection_config.call(null,scale_factor,translation_x,translation_y,wc,hc);
});
gamebase.canvas_control._get_state = (function gamebase$canvas_control$_get_state(){
var temp__5457__auto__ = cljs.core.deref.call(null,gamebase.canvas_control.conf);
if(cljs.core.truth_(temp__5457__auto__)){
var map__22343 = temp__5457__auto__;
var map__22343__$1 = ((((!((map__22343 == null)))?(((((map__22343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22343):map__22343);
var state_atom = cljs.core.get.call(null,map__22343__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22343__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
} else {
return null;
}
});
gamebase.canvas_control.get_scale = (function gamebase$canvas_control$get_scale(){
var temp__5457__auto__ = gamebase.canvas_control._get_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var map__22345 = temp__5457__auto__;
var map__22345__$1 = ((((!((map__22345 == null)))?(((((map__22345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22345):map__22345);
var scale_factor = cljs.core.get.call(null,map__22345__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
return scale_factor;
} else {
return null;
}
});
gamebase.canvas_control.get_canvas_size = (function gamebase$canvas_control$get_canvas_size(){
var temp__5457__auto__ = gamebase.canvas_control._get_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var map__22347 = temp__5457__auto__;
var map__22347__$1 = ((((!((map__22347 == null)))?(((((map__22347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22347):map__22347);
var canvas_width = cljs.core.get.call(null,map__22347__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__22347__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_width,canvas_height], null);
} else {
return null;
}
});
/**
 * set scale in such a way that the center point of the viewport
 *   keeps the same world point
 */
gamebase.canvas_control.set_scale = (function gamebase$canvas_control$set_scale(scale_factor){
var map__22349_22357 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__22349_22358__$1 = ((((!((map__22349_22357 == null)))?(((((map__22349_22357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22349_22357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22349_22357):map__22349_22357);
var state_atom_22359 = cljs.core.get.call(null,map__22349_22358__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs_22360 = cljs.core.get.call(null,map__22349_22358__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var proj_conf_22361 = gamebase.canvas_control.make_proj_conf.call(null);
var proj_conf_SINGLEQUOTE__22362 = cljs.core.assoc.call(null,proj_conf_22361,new cljs.core.Keyword(null,"k","k",-2146297393),scale_factor,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0));
var Wc_22363 = gamebase.projection.world_point.call(null,proj_conf_22361,gamebase.projection.Vc.call(null,proj_conf_22361));
var vec__22350_22364 = gamebase.projection.view_coords.call(null,proj_conf_SINGLEQUOTE__22362,Wc_22363);
var x_22365 = cljs.core.nth.call(null,vec__22350_22364,(0),null);
var y_22366 = cljs.core.nth.call(null,vec__22350_22364,(1),null);
var vec__22353_22367 = gamebase.projection.view_coords.call(null,proj_conf_SINGLEQUOTE__22362,gamebase.projection.Vc.call(null,proj_conf_SINGLEQUOTE__22362));
var x_SINGLEQUOTE__22368 = cljs.core.nth.call(null,vec__22353_22367,(0),null);
var y_SINGLEQUOTE__22369 = cljs.core.nth.call(null,vec__22353_22367,(1),null);
var tr_x_22370 = (x_SINGLEQUOTE__22368 - x_22365);
var tr_y_22371 = (y_SINGLEQUOTE__22369 - y_22366);
cljs.core.swap_BANG_.call(null,state_atom_22359,cljs.core.update_in,state_kvs_22360,((function (map__22349_22357,map__22349_22358__$1,state_atom_22359,state_kvs_22360,proj_conf_22361,proj_conf_SINGLEQUOTE__22362,Wc_22363,vec__22350_22364,x_22365,y_22366,vec__22353_22367,x_SINGLEQUOTE__22368,y_SINGLEQUOTE__22369,tr_x_22370,tr_y_22371){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638),scale_factor,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),tr_x_22370,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),tr_y_22371);
});})(map__22349_22357,map__22349_22358__$1,state_atom_22359,state_kvs_22360,proj_conf_22361,proj_conf_SINGLEQUOTE__22362,Wc_22363,vec__22350_22364,x_22365,y_22366,vec__22353_22367,x_SINGLEQUOTE__22368,y_SINGLEQUOTE__22369,tr_x_22370,tr_y_22371))
);

gamebase.canvas_control.readjust.call(null);

return null;
});
/**
 * set translation in such a way that the center point
 * of the viewport matches given world point
 */
gamebase.canvas_control.center_on = (function gamebase$canvas_control$center_on(p__22372){
var vec__22373 = p__22372;
var _ = cljs.core.nth.call(null,vec__22373,(0),null);
var world_x = cljs.core.nth.call(null,vec__22373,(1),null);
var world_y = cljs.core.nth.call(null,vec__22373,(2),null);
var world_p = vec__22373;
var world_p_SINGLEQUOTE__22384 = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [world_x,(- world_y)], null));
var map__22376_22385 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__22376_22386__$1 = ((((!((map__22376_22385 == null)))?(((((map__22376_22385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22376_22385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22376_22385):map__22376_22385);
var state_atom_22387 = cljs.core.get.call(null,map__22376_22386__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs_22388 = cljs.core.get.call(null,map__22376_22386__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var proj_conf_22389 = gamebase.canvas_control.make_proj_conf.call(null);
var proj_conf0_22390 = cljs.core.assoc.call(null,proj_conf_22389,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0));
var vec__22377_22391 = gamebase.projection.view_coords.call(null,proj_conf0_22390,world_p_SINGLEQUOTE__22384);
var xw_22392 = cljs.core.nth.call(null,vec__22377_22391,(0),null);
var yw_22393 = cljs.core.nth.call(null,vec__22377_22391,(1),null);
var vec__22380_22394 = gamebase.projection.view_coords.call(null,proj_conf0_22390,gamebase.projection.Vc.call(null,proj_conf0_22390));
var xc_22395 = cljs.core.nth.call(null,vec__22380_22394,(0),null);
var yc_22396 = cljs.core.nth.call(null,vec__22380_22394,(1),null);
var __22397__$1 = cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc_22395,yc_22396], null));
var tr_x_22398 = (xc_22395 - xw_22392);
var tr_y_22399 = (yc_22396 - yw_22393);
cljs.core.swap_BANG_.call(null,state_atom_22387,cljs.core.update_in,state_kvs_22388,((function (world_p_SINGLEQUOTE__22384,map__22376_22385,map__22376_22386__$1,state_atom_22387,state_kvs_22388,proj_conf_22389,proj_conf0_22390,vec__22377_22391,xw_22392,yw_22393,vec__22380_22394,xc_22395,yc_22396,__22397__$1,tr_x_22398,tr_y_22399,vec__22373,_,world_x,world_y,world_p){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),tr_x_22398,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),tr_y_22399);
});})(world_p_SINGLEQUOTE__22384,map__22376_22385,map__22376_22386__$1,state_atom_22387,state_kvs_22388,proj_conf_22389,proj_conf0_22390,vec__22377_22391,xw_22392,yw_22393,vec__22380_22394,xc_22395,yc_22396,__22397__$1,tr_x_22398,tr_y_22399,vec__22373,_,world_x,world_y,world_p))
);

return null;
});
gamebase.canvas_control.MARGIN = (100);
/**
 * fix translation after external change
 *   (such as canvas resize by layout or game state reloaded)
 *   so that some of the world is visible at least
 */
gamebase.canvas_control.readjust = (function gamebase$canvas_control$readjust(){
var map__22400 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__22400__$1 = ((((!((map__22400 == null)))?(((((map__22400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22400):map__22400);
var state_atom = cljs.core.get.call(null,map__22400__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22400__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_world_size = cljs.core.get.call(null,map__22400__$1,new cljs.core.Keyword(null,"get-world-size","get-world-size",-1227532980));
var map__22401 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__22401__$1 = ((((!((map__22401 == null)))?(((((map__22401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22401):map__22401);
var state = map__22401__$1;
var translation_x = cljs.core.get.call(null,map__22401__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__22401__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var map__22402 = gamebase.canvas_control.make_proj_conf.call(null);
var map__22402__$1 = ((((!((map__22402 == null)))?(((((map__22402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22402):map__22402);
var proj_conf = map__22402__$1;
var wc = cljs.core.get.call(null,map__22402__$1,new cljs.core.Keyword(null,"wc","wc",19942463));
var hc = cljs.core.get.call(null,map__22402__$1,new cljs.core.Keyword(null,"hc","hc",-32184781));
var wZ = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var vec__22403 = get_world_size.call(null);
var ww = cljs.core.nth.call(null,vec__22403,(0),null);
var wh = cljs.core.nth.call(null,vec__22403,(1),null);
var wM = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ww,(- wh)], null));
var vec__22406 = gamebase.projection.view_coords.call(null,proj_conf,wZ);
var xZ = cljs.core.nth.call(null,vec__22406,(0),null);
var yZ = cljs.core.nth.call(null,vec__22406,(1),null);
var vec__22409 = gamebase.projection.view_coords.call(null,proj_conf,wM);
var xM = cljs.core.nth.call(null,vec__22409,(0),null);
var yM = cljs.core.nth.call(null,vec__22409,(1),null);
if((xZ > (wc - gamebase.canvas_control.MARGIN))){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),((new cljs.core.Keyword(null,"translation-x","translation-x",1159225318).cljs$core$IFn$_invoke$arity$1(state__$1) - (xZ - wc)) - gamebase.canvas_control.MARGIN));
});})(map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM))
);
} else {
}

if((xM < gamebase.canvas_control.MARGIN)){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),(new cljs.core.Keyword(null,"translation-x","translation-x",1159225318).cljs$core$IFn$_invoke$arity$1(state__$1) + (gamebase.canvas_control.MARGIN - xM)));
});})(map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM))
);
} else {
}

if((yM > (hc - gamebase.canvas_control.MARGIN))){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436).cljs$core$IFn$_invoke$arity$1(state__$1) - ((yM + gamebase.canvas_control.MARGIN) + (- hc))));
});})(map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM))
);
} else {
}

if((yZ < gamebase.canvas_control.MARGIN)){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436).cljs$core$IFn$_invoke$arity$1(state__$1) + (gamebase.canvas_control.MARGIN - yZ)));
});})(map__22400,map__22400__$1,state_atom,state_kvs,get_world_size,map__22401,map__22401__$1,state,translation_x,translation_y,map__22402,map__22402__$1,proj_conf,wc,hc,wZ,vec__22403,ww,wh,wM,vec__22406,xZ,yZ,vec__22409,xM,yM))
);
} else {
return null;
}
});
gamebase.canvas_control.setup_drag_event = (function gamebase$canvas_control$setup_drag_event(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-mouse-dragged","canvas-mouse-dragged",-1573026060),(function (p__22415){
var map__22416 = p__22415;
var map__22416__$1 = ((((!((map__22416 == null)))?(((((map__22416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22416):map__22416);
var button = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var x = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var prev_x = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword(null,"prev-x","prev-x",253040489));
var prev_y = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword(null,"prev-y","prev-y",1338732167));
if(cljs.core._EQ_.call(null,button,RIGHT)){
var map__22418 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__22418__$1 = ((((!((map__22418 == null)))?(((((map__22418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22418):map__22418);
var state_atom = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var dx = (x - prev_x);
var dy = (y - prev_y);
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__22418,map__22418__$1,state_atom,state_kvs,dx,dy,map__22416,map__22416__$1,button,x,y,prev_x,prev_y){
return (function (p__22420){
var map__22421 = p__22420;
var map__22421__$1 = ((((!((map__22421 == null)))?(((((map__22421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22421):map__22421);
var s = map__22421__$1;
var translation_x = cljs.core.get.call(null,map__22421__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__22421__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),(translation_x + dx),new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(translation_y + dy));
});})(map__22418,map__22418__$1,state_atom,state_kvs,dx,dy,map__22416,map__22416__$1,button,x,y,prev_x,prev_y))
);

return gamebase.canvas_control.readjust.call(null);
} else {
return null;
}
}));
});

//# sourceMappingURL=canvas_control.js.map
