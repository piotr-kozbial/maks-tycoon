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
var map__34968 = temp__5457__auto__;
var map__34968__$1 = ((((!((map__34968 == null)))?(((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var state_atom = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
console.log(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs)));

var map__34970 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__34970__$1 = ((((!((map__34970 == null)))?(((((map__34970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34970):map__34970);
var scale_factor = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var t_x = (translation_x | (0));
var t_y = (translation_y | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__34970,map__34970__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34968,map__34968__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__){
return (function (p1__34966_SHARP_){
return (((p1__34966_SHARP_ - t_x) / scale_factor) | (0));
});})(map__34970,map__34970__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34968,map__34968__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__))
,((function (map__34970,map__34970__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34968,map__34968__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__){
return (function (p1__34967_SHARP_){
return (((p1__34967_SHARP_ - t_y) / (- scale_factor)) | (0));
});})(map__34970,map__34970__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34968,map__34968__$1,state_atom,state_kvs,get_canvas_size,temp__5457__auto__))
], null);
} else {
return null;
}
});
gamebase.canvas_control.draw = (function gamebase$canvas_control$draw(){
clear();

noSmooth();

if(cljs.core.truth_(cljs.core.deref.call(null,gamebase.canvas_control.conf))){
var map__34974 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__34974__$1 = ((((!((map__34974 == null)))?(((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34974):map__34974);
var state_atom = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
var map__34976 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__34976__$1 = ((((!((map__34976 == null)))?(((((map__34976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34976):map__34976);
var scale_factor = cljs.core.get.call(null,map__34976__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__34976__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__34976__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var t_x = (translation_x | (0));
var t_y = (translation_y | (0));
translate(t_x,t_y);

scale(scale_factor);

scale((1),(-1));

var rev_x = ((function (map__34976,map__34976__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34974,map__34974__$1,state_atom,state_kvs,get_canvas_size){
return (function (p1__34972_SHARP_){
return ((p1__34972_SHARP_ - t_x) / scale_factor);
});})(map__34976,map__34976__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34974,map__34974__$1,state_atom,state_kvs,get_canvas_size))
;
var rev_y = ((function (rev_x,map__34976,map__34976__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34974,map__34974__$1,state_atom,state_kvs,get_canvas_size){
return (function (p1__34973_SHARP_){
return ((p1__34973_SHARP_ - t_y) / (- scale_factor));
});})(rev_x,map__34976,map__34976__$1,scale_factor,translation_x,translation_y,t_x,t_y,map__34974,map__34974__$1,state_atom,state_kvs,get_canvas_size))
;
var vec__34978 = get_canvas_size.call(null);
var wc = cljs.core.nth.call(null,vec__34978,(0),null);
var hc = cljs.core.nth.call(null,vec__34978,(1),null);
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
gamebase.canvas_control.initialize = (function gamebase$canvas_control$initialize(p__34981){
var map__34982 = p__34981;
var map__34982__$1 = ((((!((map__34982 == null)))?(((((map__34982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34982):map__34982);
var config = map__34982__$1;
var state_atom = cljs.core.get.call(null,map__34982__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__34982__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
cljs.core.reset_BANG_.call(null,gamebase.canvas_control.conf,config);

cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,state_kvs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638),(2),new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),100.0,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),300.0], null));

gamebase.canvas_control.setup_drag_event.call(null);

return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return gamebase.canvas_control.draw;},new cljs.core.Symbol("gamebase.canvas-control","draw","gamebase.canvas-control/draw",1003085460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"gamebase.canvas-control","gamebase.canvas-control",2112523957,null),new cljs.core.Symbol(null,"draw","draw",-1296104095,null),"src/gamebase/canvas_control.cljs",12,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gamebase.canvas_control.draw)?gamebase.canvas_control.draw.cljs$lang$test:null)])));
});
gamebase.canvas_control.make_proj_conf = (function gamebase$canvas_control$make_proj_conf(){
var map__34984 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__34984__$1 = ((((!((map__34984 == null)))?(((((map__34984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34984):map__34984);
var state_atom = cljs.core.get.call(null,map__34984__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__34984__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_canvas_size = cljs.core.get.call(null,map__34984__$1,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642));
var map__34985 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__34985__$1 = ((((!((map__34985 == null)))?(((((map__34985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34985):map__34985);
var scale_factor = cljs.core.get.call(null,map__34985__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
var translation_x = cljs.core.get.call(null,map__34985__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__34985__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var vec__34986 = get_canvas_size.call(null);
var wc = cljs.core.nth.call(null,vec__34986,(0),null);
var hc = cljs.core.nth.call(null,vec__34986,(1),null);
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__34984,map__34984__$1,state_atom,state_kvs,get_canvas_size,map__34985,map__34985__$1,scale_factor,translation_x,translation_y,vec__34986,wc,hc){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),wc,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),hc);
});})(map__34984,map__34984__$1,state_atom,state_kvs,get_canvas_size,map__34985,map__34985__$1,scale_factor,translation_x,translation_y,vec__34986,wc,hc))
);

return gamebase.projection.projection_config.call(null,scale_factor,translation_x,translation_y,wc,hc);
});
gamebase.canvas_control._get_state = (function gamebase$canvas_control$_get_state(){
var temp__5457__auto__ = cljs.core.deref.call(null,gamebase.canvas_control.conf);
if(cljs.core.truth_(temp__5457__auto__)){
var map__34991 = temp__5457__auto__;
var map__34991__$1 = ((((!((map__34991 == null)))?(((((map__34991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34991):map__34991);
var state_atom = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
} else {
return null;
}
});
gamebase.canvas_control.get_scale = (function gamebase$canvas_control$get_scale(){
var temp__5457__auto__ = gamebase.canvas_control._get_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var map__34993 = temp__5457__auto__;
var map__34993__$1 = ((((!((map__34993 == null)))?(((((map__34993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34993):map__34993);
var scale_factor = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638));
return scale_factor;
} else {
return null;
}
});
gamebase.canvas_control.get_canvas_size = (function gamebase$canvas_control$get_canvas_size(){
var temp__5457__auto__ = gamebase.canvas_control._get_state.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var map__34995 = temp__5457__auto__;
var map__34995__$1 = ((((!((map__34995 == null)))?(((((map__34995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34995):map__34995);
var canvas_width = cljs.core.get.call(null,map__34995__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__34995__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
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
var map__34997_35005 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__34997_35006__$1 = ((((!((map__34997_35005 == null)))?(((((map__34997_35005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34997_35005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34997_35005):map__34997_35005);
var state_atom_35007 = cljs.core.get.call(null,map__34997_35006__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs_35008 = cljs.core.get.call(null,map__34997_35006__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var proj_conf_35009 = gamebase.canvas_control.make_proj_conf.call(null);
var proj_conf_SINGLEQUOTE__35010 = cljs.core.assoc.call(null,proj_conf_35009,new cljs.core.Keyword(null,"k","k",-2146297393),scale_factor,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0));
var Wc_35011 = gamebase.projection.world_point.call(null,proj_conf_35009,gamebase.projection.Vc.call(null,proj_conf_35009));
var vec__34998_35012 = gamebase.projection.view_coords.call(null,proj_conf_SINGLEQUOTE__35010,Wc_35011);
var x_35013 = cljs.core.nth.call(null,vec__34998_35012,(0),null);
var y_35014 = cljs.core.nth.call(null,vec__34998_35012,(1),null);
var vec__35001_35015 = gamebase.projection.view_coords.call(null,proj_conf_SINGLEQUOTE__35010,gamebase.projection.Vc.call(null,proj_conf_SINGLEQUOTE__35010));
var x_SINGLEQUOTE__35016 = cljs.core.nth.call(null,vec__35001_35015,(0),null);
var y_SINGLEQUOTE__35017 = cljs.core.nth.call(null,vec__35001_35015,(1),null);
var tr_x_35018 = (x_SINGLEQUOTE__35016 - x_35013);
var tr_y_35019 = (y_SINGLEQUOTE__35017 - y_35014);
cljs.core.swap_BANG_.call(null,state_atom_35007,cljs.core.update_in,state_kvs_35008,((function (map__34997_35005,map__34997_35006__$1,state_atom_35007,state_kvs_35008,proj_conf_35009,proj_conf_SINGLEQUOTE__35010,Wc_35011,vec__34998_35012,x_35013,y_35014,vec__35001_35015,x_SINGLEQUOTE__35016,y_SINGLEQUOTE__35017,tr_x_35018,tr_y_35019){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"scale-factor","scale-factor",-645225638),scale_factor,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),tr_x_35018,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),tr_y_35019);
});})(map__34997_35005,map__34997_35006__$1,state_atom_35007,state_kvs_35008,proj_conf_35009,proj_conf_SINGLEQUOTE__35010,Wc_35011,vec__34998_35012,x_35013,y_35014,vec__35001_35015,x_SINGLEQUOTE__35016,y_SINGLEQUOTE__35017,tr_x_35018,tr_y_35019))
);

gamebase.canvas_control.readjust.call(null);

return null;
});
/**
 * set translation in such a way that the center point
 * of the viewport matches given world point
 */
gamebase.canvas_control.center_on = (function gamebase$canvas_control$center_on(p__35020){
var vec__35021 = p__35020;
var _ = cljs.core.nth.call(null,vec__35021,(0),null);
var world_x = cljs.core.nth.call(null,vec__35021,(1),null);
var world_y = cljs.core.nth.call(null,vec__35021,(2),null);
var world_p = vec__35021;
var world_p_SINGLEQUOTE__35032 = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [world_x,(- world_y)], null));
var map__35024_35033 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__35024_35034__$1 = ((((!((map__35024_35033 == null)))?(((((map__35024_35033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35024_35033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35024_35033):map__35024_35033);
var state_atom_35035 = cljs.core.get.call(null,map__35024_35034__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs_35036 = cljs.core.get.call(null,map__35024_35034__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var proj_conf_35037 = gamebase.canvas_control.make_proj_conf.call(null);
var proj_conf0_35038 = cljs.core.assoc.call(null,proj_conf_35037,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0));
var vec__35025_35039 = gamebase.projection.view_coords.call(null,proj_conf0_35038,world_p_SINGLEQUOTE__35032);
var xw_35040 = cljs.core.nth.call(null,vec__35025_35039,(0),null);
var yw_35041 = cljs.core.nth.call(null,vec__35025_35039,(1),null);
var vec__35028_35042 = gamebase.projection.view_coords.call(null,proj_conf0_35038,gamebase.projection.Vc.call(null,proj_conf0_35038));
var xc_35043 = cljs.core.nth.call(null,vec__35028_35042,(0),null);
var yc_35044 = cljs.core.nth.call(null,vec__35028_35042,(1),null);
var __35045__$1 = cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc_35043,yc_35044], null));
var tr_x_35046 = (xc_35043 - xw_35040);
var tr_y_35047 = (yc_35044 - yw_35041);
cljs.core.swap_BANG_.call(null,state_atom_35035,cljs.core.update_in,state_kvs_35036,((function (world_p_SINGLEQUOTE__35032,map__35024_35033,map__35024_35034__$1,state_atom_35035,state_kvs_35036,proj_conf_35037,proj_conf0_35038,vec__35025_35039,xw_35040,yw_35041,vec__35028_35042,xc_35043,yc_35044,__35045__$1,tr_x_35046,tr_y_35047,vec__35021,_,world_x,world_y,world_p){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),tr_x_35046,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),tr_y_35047);
});})(world_p_SINGLEQUOTE__35032,map__35024_35033,map__35024_35034__$1,state_atom_35035,state_kvs_35036,proj_conf_35037,proj_conf0_35038,vec__35025_35039,xw_35040,yw_35041,vec__35028_35042,xc_35043,yc_35044,__35045__$1,tr_x_35046,tr_y_35047,vec__35021,_,world_x,world_y,world_p))
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
var map__35048 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__35048__$1 = ((((!((map__35048 == null)))?(((((map__35048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35048):map__35048);
var state_atom = cljs.core.get.call(null,map__35048__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__35048__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var get_world_size = cljs.core.get.call(null,map__35048__$1,new cljs.core.Keyword(null,"get-world-size","get-world-size",-1227532980));
var map__35049 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),state_kvs);
var map__35049__$1 = ((((!((map__35049 == null)))?(((((map__35049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35049):map__35049);
var state = map__35049__$1;
var translation_x = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
var map__35050 = gamebase.canvas_control.make_proj_conf.call(null);
var map__35050__$1 = ((((!((map__35050 == null)))?(((((map__35050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35050):map__35050);
var proj_conf = map__35050__$1;
var wc = cljs.core.get.call(null,map__35050__$1,new cljs.core.Keyword(null,"wc","wc",19942463));
var hc = cljs.core.get.call(null,map__35050__$1,new cljs.core.Keyword(null,"hc","hc",-32184781));
var wZ = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var vec__35051 = get_world_size.call(null);
var ww = cljs.core.nth.call(null,vec__35051,(0),null);
var wh = cljs.core.nth.call(null,vec__35051,(1),null);
var wM = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ww,(- wh)], null));
var vec__35054 = gamebase.projection.view_coords.call(null,proj_conf,wZ);
var xZ = cljs.core.nth.call(null,vec__35054,(0),null);
var yZ = cljs.core.nth.call(null,vec__35054,(1),null);
var vec__35057 = gamebase.projection.view_coords.call(null,proj_conf,wM);
var xM = cljs.core.nth.call(null,vec__35057,(0),null);
var yM = cljs.core.nth.call(null,vec__35057,(1),null);
if((xZ > (wc - gamebase.canvas_control.MARGIN))){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),((new cljs.core.Keyword(null,"translation-x","translation-x",1159225318).cljs$core$IFn$_invoke$arity$1(state__$1) - (xZ - wc)) - gamebase.canvas_control.MARGIN));
});})(map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM))
);
} else {
}

if((xM < gamebase.canvas_control.MARGIN)){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),(new cljs.core.Keyword(null,"translation-x","translation-x",1159225318).cljs$core$IFn$_invoke$arity$1(state__$1) + (gamebase.canvas_control.MARGIN - xM)));
});})(map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM))
);
} else {
}

if((yM > (hc - gamebase.canvas_control.MARGIN))){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436).cljs$core$IFn$_invoke$arity$1(state__$1) - ((yM + gamebase.canvas_control.MARGIN) + (- hc))));
});})(map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM))
);
} else {
}

if((yZ < gamebase.canvas_control.MARGIN)){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM){
return (function (state__$1){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436).cljs$core$IFn$_invoke$arity$1(state__$1) + (gamebase.canvas_control.MARGIN - yZ)));
});})(map__35048,map__35048__$1,state_atom,state_kvs,get_world_size,map__35049,map__35049__$1,state,translation_x,translation_y,map__35050,map__35050__$1,proj_conf,wc,hc,wZ,vec__35051,ww,wh,wM,vec__35054,xZ,yZ,vec__35057,xM,yM))
);
} else {
return null;
}
});
gamebase.canvas_control.setup_drag_event = (function gamebase$canvas_control$setup_drag_event(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-mouse-dragged","canvas-mouse-dragged",-1573026060),(function (p__35063){
var map__35064 = p__35063;
var map__35064__$1 = ((((!((map__35064 == null)))?(((((map__35064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35064):map__35064);
var button = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var x = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var prev_x = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"prev-x","prev-x",253040489));
var prev_y = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"prev-y","prev-y",1338732167));
if(cljs.core._EQ_.call(null,button,RIGHT)){
var map__35066 = cljs.core.deref.call(null,gamebase.canvas_control.conf);
var map__35066__$1 = ((((!((map__35066 == null)))?(((((map__35066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35066):map__35066);
var state_atom = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_kvs = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727));
var dx = (x - prev_x);
var dy = (y - prev_y);
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,state_kvs,((function (map__35066,map__35066__$1,state_atom,state_kvs,dx,dy,map__35064,map__35064__$1,button,x,y,prev_x,prev_y){
return (function (p__35068){
var map__35069 = p__35068;
var map__35069__$1 = ((((!((map__35069 == null)))?(((((map__35069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35069):map__35069);
var s = map__35069__$1;
var translation_x = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318));
var translation_y = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436));
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"translation-x","translation-x",1159225318),(translation_x + dx),new cljs.core.Keyword(null,"translation-y","translation-y",-1817902436),(translation_y + dy));
});})(map__35066,map__35066__$1,state_atom,state_kvs,dx,dy,map__35064,map__35064__$1,button,x,y,prev_x,prev_y))
);

return gamebase.canvas_control.readjust.call(null);
} else {
return null;
}
}));
});

//# sourceMappingURL=canvas_control.js.map
