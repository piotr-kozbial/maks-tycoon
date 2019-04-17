// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ui.bottombar');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('app.state');
goog.require('gamebase.ecs');
goog.require('app.ecs.entities.locomotive');
goog.require('gamebase.projection');
goog.require('app.ecs.common_events');
goog.require('gamebase.ui.dropdown');
goog.require('gamebase.canvas_control');
goog.require('gamebase.virtual_timer');
goog.require('app.world_interop');
goog.require('app.ui.ui_state');
goog.require('cljs.pprint');
app.ui.bottombar.bottombar_component = rum.core.build_defc.call(null,(function (){
rum.core.react.call(null,app.ui.ui_state.ui_state);

var map__46243 = cljs.core.deref.call(null,app.state.app_state);
var map__46243__$1 = ((((!((map__46243 == null)))?(((((map__46243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46243):map__46243);
var frame_rate = cljs.core.get.call(null,map__46243__$1,new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942));
var world = cljs.core.get.call(null,map__46243__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var map__46244 = new cljs.core.Keyword(null,"loc-selector","loc-selector",-222053855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.ui.ui_state.ui_state)));
var map__46244__$1 = ((((!((map__46244 == null)))?(((((map__46244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46244):map__46244);
var open_QMARK_ = cljs.core.get.call(null,map__46244__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var selected_id = cljs.core.get.call(null,map__46244__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
var loc = gamebase.ecs.get_entity_by_key.call(null,world,selected_id);
var driving_QMARK_ = new cljs.core.Keyword(null,"driving?","driving?",-428410284).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(loc)));
var locs = app.world_interop.get_all_locomotives.call(null,world);
return React.createElement("table",null,React.createElement("tr",null,(function (){var attrs46247 = gamebase.ui.dropdown.mk_dropdown.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Train:",new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK_,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.map.call(null,((function (map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (p1__46241_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__46241_SHARP_,["halo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__46241_SHARP_))].join('')],null));
});})(map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,cljs.core.sort.call(null,cljs.core.map.call(null,((function (map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (p1__46240_SHARP_){
return new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(p1__46240_SHARP_);
});})(map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,locs))),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),selected_id,new cljs.core.Keyword(null,"callbacks","callbacks",71591310),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Var(function(){return app.ui.ui_state.loc_selector_open;},new cljs.core.Symbol("app.ui.ui-state","loc-selector-open","app.ui.ui-state/loc-selector-open",-412230421,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.ui.ui-state","app.ui.ui-state",-457339504,null),new cljs.core.Symbol(null,"loc-selector-open","loc-selector-open",-495623538,null),"src/app/ui/ui_state.cljs",(24),(1),(25),(25),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.ui.ui_state.loc_selector_open)?app.ui.ui_state.loc_selector_open.cljs$lang$test:null)])),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Var(function(){return app.ui.ui_state.loc_selector_close;},new cljs.core.Symbol("app.ui.ui-state","loc-selector-close","app.ui.ui-state/loc-selector-close",-1733227046,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.ui.ui-state","app.ui.ui-state",-457339504,null),new cljs.core.Symbol(null,"loc-selector-close","loc-selector-close",-1648801793,null),"src/app/ui/ui_state.cljs",(25),(1),(28),(28),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.ui.ui_state.loc_selector_close)?app.ui.ui_state.loc_selector_close.cljs$lang$test:null)])),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Var(function(){return app.ui.ui_state.loc_selector_select;},new cljs.core.Symbol("app.ui.ui-state","loc-selector-select","app.ui.ui-state/loc-selector-select",1891391603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.ui.ui-state","app.ui.ui-state",-457339504,null),new cljs.core.Symbol(null,"loc-selector-select","loc-selector-select",-1917578644,null),"src/app/ui/ui_state.cljs",(26),(1),(31),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loc-id","loc-id",-539002234,null)], null)),null,(cljs.core.truth_(app.ui.ui_state.loc_selector_select)?app.ui.ui_state.loc_selector_select.cljs$lang$test:null)]))], null)], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs46247))?sablono.interpreter.attributes.call(null,attrs46247):null),((cljs.core.map_QMARK_.call(null,attrs46247))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (p1__46242_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(p1__46242_SHARP_),selected_id);
});})(attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,locs));
if(cljs.core.truth_(temp__5457__auto__)){
var selected_loc = temp__5457__auto__;
var tile_x = new cljs.core.Keyword(null,"tile-x","tile-x",1338121882).cljs$core$IFn$_invoke$arity$1(selected_loc);
var tile_y = new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706).cljs$core$IFn$_invoke$arity$1(selected_loc);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),"Location (loc): [",tile_x,", ",tile_y,"] ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#47681b"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return gamebase.canvas_control.center_on.call(null,gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((32) * tile_x),((32) * tile_y)], null)));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
], null),"\u2192 SHOW"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"State: "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return app.world_interop.send_to_entity.call(null,selected_id,new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(driving_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"green",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px green"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px black"], null))], null),"DRIVE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return app.world_interop.send_to_entity.call(null,selected_id,new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(driving_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px black"], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px red"], null))], null),"STOP"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Operations: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return app.world_interop.kill_train.call(null,world,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(selected_loc));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fc1616"], null)], null),"DESTROY"], null)], null)], null);
} else {
return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46247),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (p1__46242_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(p1__46242_SHARP_),selected_id);
});})(attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,locs));
if(cljs.core.truth_(temp__5457__auto__)){
var selected_loc = temp__5457__auto__;
var tile_x = new cljs.core.Keyword(null,"tile-x","tile-x",1338121882).cljs$core$IFn$_invoke$arity$1(selected_loc);
var tile_y = new cljs.core.Keyword(null,"tile-y","tile-y",-1293098706).cljs$core$IFn$_invoke$arity$1(selected_loc);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),"Location (loc): [",tile_x,", ",tile_y,"] ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#47681b"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return gamebase.canvas_control.center_on.call(null,gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((32) * tile_x),((32) * tile_y)], null)));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
], null),"\u2192 SHOW"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"State: "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return app.world_interop.send_to_entity.call(null,selected_id,new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(driving_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"green",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px green"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px black"], null))], null),"DRIVE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return app.world_interop.send_to_entity.call(null,selected_id,new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(driving_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px black"], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px red"], null))], null),"STOP"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Operations: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs){
return (function (_){
return app.world_interop.kill_train.call(null,world,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(selected_loc));
});})(tile_x,tile_y,selected_loc,temp__5457__auto__,attrs46247,map__46243,map__46243__$1,frame_rate,world,map__46244,map__46244__$1,open_QMARK_,selected_id,loc,driving_QMARK_,locs))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fc1616"], null)], null),"DESTROY"], null)], null)], null);
} else {
return null;
}
})())], null)));
})(),React.createElement("td",null,React.createElement("span",({"style": ({"whiteSpace": "pre"})}),"   ")),React.createElement("td",null,"szczegoly")));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"bottombar-component");

//# sourceMappingURL=bottombar.js.map
