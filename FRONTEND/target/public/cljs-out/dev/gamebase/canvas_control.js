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
var map__29967 = temp__5457__auto__;
var map__29967__$1 = ((((!((map__29967 == null)))?(((((map__29967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29967):map__29967);
var state_atom = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
console.log(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs)));

var map__29969 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__29969__$1 = ((((!((map__29969 == null)))?(((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);
var scale_factor = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var t_x = (translation_x | (0));
var t_y = (translation_y | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__29969,map__29969__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29967,map__29967__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__){
return (function (p1__29965_SHARP_){
return (((p1__29965_SHARP_ - t_x) / scale_factor) | (0));
});})(map__29969,map__29969__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29967,map__29967__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__))
,((function (map__29969,map__29969__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29967,map__29967__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__){
return (function (p1__29966_SHARP_){
return (((p1__29966_SHARP_ - t_y) / (- scale_factor)) | (0));
});})(map__29969,map__29969__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29967,map__29967__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__))
], null);
} else {
return null;
}
});
gamebase.canvas_control.draw = (function gamebase$canvas_control$draw(){
clear();

noSmooth();

if(cljs.core.truth_(cljs.core.deref.call(null,gamebase.canvas_control.conf))){
var map__29973 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__29973__$1 = ((((!((map__29973 == null)))?(((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var state_atom = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
var map__29975 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__29975__$1 = ((((!((map__29975 == null)))?(((((map__29975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29975):map__29975);
var scale_factor = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var t_x = (translation_x | (0));
var t_y = (translation_y | (0));
translate(t_x,t_y);

scale(scale_factor);

scale((1),(-1));

var rev_x = ((function (map__29975,map__29975__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29973,map__29973__$1,state_atom,state_kvs,get_canvas_size){
return (function (p1__29971_SHARP_){
return ((p1__29971_SHARP_ - t_x) / scale_factor);
});})(map__29975,map__29975__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29973,map__29973__$1,state_atom,state_kvs,get_canvas_size))
;
var rev_y = ((function (rev_x,map__29975,map__29975__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29973,map__29973__$1,state_atom,state_kvs,get_canvas_size){
return (function (p1__29972_SHARP_){
return ((p1__29972_SHARP_ - t_y) / (- scale_factor));
});})(rev_x,map__29975,map__29975__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__29973,map__29973__$1,state_atom,state_kvs,get_canvas_size))
;
var vec__29977 = get_canvas_size.call(null);
var wc = cljs.core.nth.call(null,vec__29977,(0),null);
var hc = cljs.core.nth.call(null,vec__29977,(1),null);
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
gamebase.canvas_control.initialize = (function gamebase$canvas_control$initialize(p__29980){
var map__29981 = p__29980;
var map__29981__$1 = ((((!((map__29981 == null)))?(((((map__29981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29981):map__29981);
var config = map__29981__$1;
var state_atom = cljs.core.get.call(null,map__29981__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__29981__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
cljs.core.reset_BANG_.call(null,gamebase.canvas_control.conf,config);

cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,state_kvs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638),(2),new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),100.0,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),300.0], null));

gamebase.canvas_control.setup_drag_event.call(null);

return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return gamebase.canvas_control.draw;},new cljs.core.Symbol("gamebase.canvas-control","draw","gamebase.canvas-control/draw",1003085460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"gamebase.canvas-control","gamebase.canvas-control",2112523957,null),new cljs.core.Symbol(null,"draw","draw",-1296104095,null),"/home/ja/projects/maks-tycoon/FRONTEND/src/gamebase/canvas_control.cljs",12,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gamebase.canvas_control.draw)?gamebase.canvas_control.draw.cljs$lang$test:null)])));
});
gamebase.canvas_control.make_proj_conf = (function gamebase$canvas_control$make_proj_conf(){
var map__29983 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__29983__$1 = ((((!((map__29983 == null)))?(((((map__29983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29983):map__29983);
var state_atom = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
var map__29984 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__29984__$1 = ((((!((map__29984 == null)))?(((((map__29984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29984):map__29984);
var scale_factor = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var vec__29985 = get_canvas_size.call(null);
var wc = cljs.core.nth.call(null,vec__29985,(0),null);
var hc = cljs.core.nth.call(null,vec__29985,(1),null);
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__29983,map__29983__$1,state_atom,state_kvs,get_canvas_size,map__29984,map__29984__$1,scale_factor,translation_x,translation_y,vec__29985,wc,hc){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),wc,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),hc);
});})(map__29983,map__29983__$1,state_atom,state_kvs,get_canvas_size,map__29984,map__29984__$1,scale_factor,translation_x,translation_y,vec__29985,wc,hc))
);

return gamebase.projection.projection_config.call(null,scale_factor,translation_x,translation_y,wc,hc);
});
gamebase.canvas_control._get_state = (function gamebase$canvas_control$_get_state(){
var temp__5457__auto__ = cljs.core.deref.call(null,gamebase.canvas_control.conf);
if(cljs.core.truth_(temp__5457__auto__)){
var map__29990 = temp__5457__auto__;
var map__29990__$1 = ((((!((map__29990 == null)))?(((((map__29990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29990):map__29990);
var state_atom = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
} else {
return null;
}
});
gamebase.canvas_control.get_scale = (function gamebase$canvas_control$get_scale(){
var temp__5457__auto__ = gamebase.canvas_control._get_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var map__29992 = temp__5457__auto__;
var map__29992__$1 = ((((!((map__29992 == null)))?(((((map__29992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29992):map__29992);
var scale_factor = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
return scale_factor;
} else {
return null;
}
});
gamebase.canvas_control.get_canvas_size = (function gamebase$canvas_control$get_canvas_size(){
var temp__5457__auto__ = gamebase.canvas_control._get_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var map__29994 = temp__5457__auto__;
var map__29994__$1 = ((((!((map__29994 == null)))?(((((map__29994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994):map__29994);
var canvas_width = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
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
var map__29996_30004 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__29996_30005__$1 = ((((!((map__29996_30004 == null)))?(((((map__29996_30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29996_30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29996_30004):map__29996_30004);
var state_atom_30006 = cljs.core.get.call(null,map__29996_30005__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs_30007 = cljs.core.get.call(null,map__29996_30005__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var proj_conf_30008 = gamebase.canvas_control.make_proj_conf.call(null);
var proj_conf_SINGLEQUOTE__30009 = cljs.core.assoc.call(null,proj_conf_30008,new cljs.core.Keyword(null,"k","k",-2146297393),scale_factor,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0));
var Wc_30010 = gamebase.projection.world_point.call(null,proj_conf_30008,gamebase.projection.Vc.call(null,proj_conf_30008));
var vec__29997_30011 = gamebase.projection.view_coords.call(null,proj_conf_SINGLEQUOTE__30009,Wc_30010);
var x_30012 = cljs.core.nth.call(null,vec__29997_30011,(0),null);
var y_30013 = cljs.core.nth.call(null,vec__29997_30011,(1),null);
var vec__30000_30014 = gamebase.projection.view_coords.call(null,proj_conf_SINGLEQUOTE__30009,gamebase.projection.Vc.call(null,proj_conf_SINGLEQUOTE__30009));
var x_SINGLEQUOTE__30015 = cljs.core.nth.call(null,vec__30000_30014,(0),null);
var y_SINGLEQUOTE__30016 = cljs.core.nth.call(null,vec__30000_30014,(1),null);
var tr_x_30017 = (x_SINGLEQUOTE__30015 - x_30012);
var tr_y_30018 = (y_SINGLEQUOTE__30016 - y_30013);
cljs.core.swap_BANG_.call(null,state_atom_30006,cljs.core.update_in,state_kvs_30007,((function (map__29996_30004,map__29996_30005__$1,state_atom_30006,state_kvs_30007,proj_conf_30008,proj_conf_SINGLEQUOTE__30009,Wc_30010,vec__29997_30011,x_30012,y_30013,vec__30000_30014,x_SINGLEQUOTE__30015,y_SINGLEQUOTE__30016,tr_x_30017,tr_y_30018){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638),scale_factor,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),tr_x_30017,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),tr_y_30018);
});})(map__29996_30004,map__29996_30005__$1,state_atom_30006,state_kvs_30007,proj_conf_30008,proj_conf_SINGLEQUOTE__30009,Wc_30010,vec__29997_30011,x_30012,y_30013,vec__30000_30014,x_SINGLEQUOTE__30015,y_SINGLEQUOTE__30016,tr_x_30017,tr_y_30018))
);

gamebase.canvas_control.readjust.call(null);

return null;
});
/**
 * set translation in such a way that the center point
 * of the viewport matches given world point
 */
gamebase.canvas_control.center_on = (function gamebase$canvas_control$center_on(p__30019){
var vec__30020 = p__30019;
var _ = cljs.core.nth.call(null,vec__30020,(0),null);
var world_x = cljs.core.nth.call(null,vec__30020,(1),null);
var world_y = cljs.core.nth.call(null,vec__30020,(2),null);
var world_p = vec__30020;
var world_p_SINGLEQUOTE__30031 = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [world_x,(- world_y)], null));
var map__30023_30032 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__30023_30033__$1 = ((((!((map__30023_30032 == null)))?(((((map__30023_30032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30023_30032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023_30032):map__30023_30032);
var state_atom_30034 = cljs.core.get.call(null,map__30023_30033__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs_30035 = cljs.core.get.call(null,map__30023_30033__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var proj_conf_30036 = gamebase.canvas_control.make_proj_conf.call(null);
var proj_conf0_30037 = cljs.core.assoc.call(null,proj_conf_30036,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0));
var vec__30024_30038 = gamebase.projection.view_coords.call(null,proj_conf0_30037,world_p_SINGLEQUOTE__30031);
var xw_30039 = cljs.core.nth.call(null,vec__30024_30038,(0),null);
var yw_30040 = cljs.core.nth.call(null,vec__30024_30038,(1),null);
var vec__30027_30041 = gamebase.projection.view_coords.call(null,proj_conf0_30037,gamebase.projection.Vc.call(null,proj_conf0_30037));
var xc_30042 = cljs.core.nth.call(null,vec__30027_30041,(0),null);
var yc_30043 = cljs.core.nth.call(null,vec__30027_30041,(1),null);
var __30044__$1 = cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc_30042,yc_30043], null));
var tr_x_30045 = (xc_30042 - xw_30039);
var tr_y_30046 = (yc_30043 - yw_30040);
cljs.core.swap_BANG_.call(null,state_atom_30034,cljs.core.update_in,state_kvs_30035,((function (world_p_SINGLEQUOTE__30031,map__30023_30032,map__30023_30033__$1,state_atom_30034,state_kvs_30035,proj_conf_30036,proj_conf0_30037,vec__30024_30038,xw_30039,yw_30040,vec__30027_30041,xc_30042,yc_30043,__30044__$1,tr_x_30045,tr_y_30046,vec__30020,_,world_x,world_y,world_p){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),tr_x_30045,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),tr_y_30046);
});})(world_p_SINGLEQUOTE__30031,map__30023_30032,map__30023_30033__$1,state_atom_30034,state_kvs_30035,proj_conf_30036,proj_conf0_30037,vec__30024_30038,xw_30039,yw_30040,vec__30027_30041,xc_30042,yc_30043,__30044__$1,tr_x_30045,tr_y_30046,vec__30020,_,world_x,world_y,world_p))
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
var map__30047 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__30047__$1 = ((((!((map__30047 == null)))?(((((map__30047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30047):map__30047);
var state_atom = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_world_size = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"get-world-size","get-world-size",-1227532980));
var map__30048 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__30048__$1 = ((((!((map__30048 == null)))?(((((map__30048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30048):map__30048);
var state = map__30048__$1;
var translation_x = cljs.core.get.call(null,map__30048__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__30048__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var map__30049 = gamebase.canvas_control.make_proj_conf.call(null);
var map__30049__$1 = ((((!((map__30049 == null)))?(((((map__30049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30049):map__30049);
var proj_conf = map__30049__$1;
var wc = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"wc","wc",19942463));
var hc = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"hc","hc",-32184781));
var wZ = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var vec__30050 = get_world_size.call(null);
var ww = cljs.core.nth.call(null,vec__30050,(0),null);
var wh = cljs.core.nth.call(null,vec__30050,(1),null);
var wM = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ww,(- wh)], null));
var vec__30053 = gamebase.projection.view_coords.call(null,proj_conf,wZ);
var xZ = cljs.core.nth.call(null,vec__30053,(0),null);
var yZ = cljs.core.nth.call(null,vec__30053,(1),null);
var vec__30056 = gamebase.projection.view_coords.call(null,proj_conf,wM);
var xM = cljs.core.nth.call(null,vec__30056,(0),null);
var yM = cljs.core.nth.call(null,vec__30056,(1),null);
if((xZ > (wc - gamebase.canvas_control.MARGIN))){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),((new cljs.core.Keyword(null,"translation-x","translation-x",1159225318).cljs$core$IFn$_invoke$arity$1(state__$1) - (xZ - wc)) - gamebase.canvas_control.MARGIN));
});})(map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM))
);
} else {
}

if((xM < gamebase.canvas_control.MARGIN)){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),(new cljs.core.Keyword(null,"translation-x","translation-x",1159225318).cljs$core$IFn$_invoke$arity$1(state__$1) + (gamebase.canvas_control.MARGIN - xM)));
});})(map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM))
);
} else {
}

if((yM > (hc - gamebase.canvas_control.MARGIN))){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436).cljs$core$IFn$_invoke$arity$1(state__$1) - ((yM + gamebase.canvas_control.MARGIN) + (- hc))));
});})(map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM))
);
} else {
}

if((yZ < gamebase.canvas_control.MARGIN)){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436).cljs$core$IFn$_invoke$arity$1(state__$1) + (gamebase.canvas_control.MARGIN - yZ)));
});})(map__30047,map__30047__$1,state_atom,state_kvs,get_world_size,map__30048,map__30048__$1,state,translation_x,translation_y,map__30049,map__30049__$1,proj_conf,wc,hc,wZ,vec__30050,ww,wh,wM,vec__30053,xZ,yZ,vec__30056,xM,yM))
);
} else {
return null;
}
});
gamebase.canvas_control.setup_drag_event = (function gamebase$canvas_control$setup_drag_event(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-mouse-dragged","canvas-mouse-dragged",-1573026060),(function (p__30062){
var map__30063 = p__30062;
var map__30063__$1 = ((((!((map__30063 == null)))?(((((map__30063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30063):map__30063);
var button = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var x = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var prev_x = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"prev-x","prev-x",253040489));
var prev_y = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"prev-y","prev-y",1338732167));
if(cljs.core._EQ_.call(null,button,RIGHT)){
var map__30065 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__30065__$1 = ((((!((map__30065 == null)))?(((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);
var state_atom = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var dx = (x - prev_x);
var dy = (y - prev_y);
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__30065,map__30065__$1,state_atom,state_kvs,dx,dy,map__30063,map__30063__$1,button,x,y,prev_x,prev_y){
return (function (p__30067){
var map__30068 = p__30067;
var map__30068__$1 = ((((!((map__30068 == null)))?(((((map__30068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30068):map__30068);
var s = map__30068__$1;
var translation_x = cljs.core.get.call(null,map__30068__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__30068__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),(translation_x + dx),new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(translation_y + dy));
});})(map__30065,map__30065__$1,state_atom,state_kvs,dx,dy,map__30063,map__30063__$1,button,x,y,prev_x,prev_y))
);

return gamebase.canvas_control.readjust.call(null);
} else {
return null;
}
}));
});

//# sourceMappingURL=canvas_control.js.map
