// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('app.scratch');
goog.require('app.state');
goog.require('app.ui.ui_state');
goog.require('gamebase.resources');
goog.require('gamebase.systems.drawing');
goog.require('gamebase.systems.movement');
goog.require('app.ecs.entities.locomotive');
goog.require('app.ecs.entities.carriage');
goog.require('gamebase.events');
goog.require('gamebase.event_queue');
goog.require('gamebase.ecs');
goog.require('gamebase.virtual_timer');
goog.require('gamebase.canvas_control');
goog.require('gamebase.layouts.sidebar_and_bottombar');
goog.require('cljs.pprint');
goog.require('gamebase.layers');
goog.require('gamebase.debug');
goog.require('app.tiles.general');
goog.require('app.tiles.turnouts');
goog.require('app.world_interop');
goog.require('app.ui.sidebar');
goog.require('app.ui.bottombar');
goog.require('app.tiles.activate');
goog.require('app.ecs.world');
goog.require('app.key_mouse_input');
goog.require('app.modules.construction');
goog.require('sablono.core');
app.core._draw_tile_box_under_mouse = (function app$core$_draw_tile_box_under_mouse(p__37498){
var map__37499 = p__37498;
var map__37499__$1 = ((((!((map__37499 == null)))?(((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37499):map__37499);
var mouse_x = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"mouse-x","mouse-x",-195915258));
var mouse_y = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"mouse-y","mouse-y",83174488));
noFill();

strokeWeight((1));

stroke((20),(20),(20));

rect(((32) * cljs.core.quot.call(null,mouse_x,(32))),((32) * cljs.core.quot.call(null,mouse_y,(32))),(31),(31));

stroke((210),(210),(210));

return rect((((32) * cljs.core.quot.call(null,mouse_x,(32))) + (1)),(((32) * cljs.core.quot.call(null,mouse_y,(32))) - (1)),(31),(31));
});
app.core.debug_draw_coord_system = (function app$core$debug_draw_coord_system(){
stroke((255),(0),(0));

strokeWeight((4));

line((-32),(0),(32),(0));

line((32),(0),(28),(5));

line((32),(0),(28),(-5));

stroke((0),(0),(255));

strokeWeight((4));

line((0),(-32),(0),(32));

line((0),(32),(-5),(28));

line((0),(32),(5),(28));

stroke((255),(255),(255));

return line((0),(0),(0),(0));
});
app.core.advance_simulation_and_draw = (function app$core$advance_simulation_and_draw(p__37501){
var map__37502 = p__37501;
var map__37502__$1 = ((((!((map__37502 == null)))?(((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37502):map__37502);
var context = map__37502__$1;
var min_x = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"min-x","min-x",-1544012261));
var max_x = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"max-x","max-x",1609536425));
var min_y = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
var map__37504 = cljs.core.deref.call(null,app.state.app_state);
var map__37504__$1 = ((((!((map__37504 == null)))?(((((map__37504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37504):map__37504);
var world = cljs.core.get.call(null,map__37504__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var timer = cljs.core.get.call(null,map__37504__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
if(cljs.core.truth_(world)){
var world_SINGLEQUOTE_ = (cljs.core.truth_(app.world_interop.running_QMARK_.call(null))?(function (){var time = app.world_interop.get_time.call(null);
return gamebase.ecs.do_handle_event.call(null,gamebase.ecs.advance_until_time.call(null,world,time),gamebase.ecs.mk_event.call(null,gamebase.ecs.to_world.call(null),new cljs.core.Keyword(null,"update","update",1045576396),time));
})():world);
cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),world_SINGLEQUOTE_);

gamebase.systems.drawing.draw_all.call(null,world_SINGLEQUOTE_,context);

app.core._draw_tile_box_under_mouse.call(null,context);

if(cljs.core.truth_(new cljs.core.Keyword(null,"coordinate-system-marker","coordinate-system-marker",1049168936).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"canvas-control","canvas-control",772369914).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gamebase.debug.settings))))){
return app.core.debug_draw_coord_system.call(null);
} else {
return null;
}
} else {
return null;
}
});
app.core.my_mixin = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
console.log("DID MOUNT!");

app.core.initialize_layout.call(null);

gamebase.canvas_control.initialize.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),app.state.app_state,new cljs.core.Keyword(null,"state-kvs","state-kvs",667537727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas-control","canvas-control",772369914)], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return app.core.advance_simulation_and_draw;},new cljs.core.Symbol("app.core","advance-simulation-and-draw","app.core/advance-simulation-and-draw",1732681980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"advance-simulation-and-draw","advance-simulation-and-draw",610731824,null),"src/app/core.cljs",34,1,88,88,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"min-x","min-x",96519266,null),new cljs.core.Symbol(null,"max-x","max-x",-1044899344,null),new cljs.core.Symbol(null,"min-y","min-y",-329341421,null),new cljs.core.Symbol(null,"max-y","max-y",-1128807687,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)),null,(cljs.core.truth_(app.core.advance_simulation_and_draw)?app.core.advance_simulation_and_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"overlay-draw","overlay-draw",-538101077),null,new cljs.core.Keyword(null,"get-canvas-size","get-canvas-size",-1072944642),gamebase.layouts.sidebar_and_bottombar.get_canvas_size,new cljs.core.Keyword(null,"get-world-size","get-world-size",-1227532980),new cljs.core.Var(function(){return app.world_interop.get_world_size;},new cljs.core.Symbol("app.world-interop","get-world-size","app.world-interop/get-world-size",1934276632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.world-interop","app.world-interop",846548413,null),new cljs.core.Symbol(null,"get-world-size","get-world-size",412998547,null),"/home/ja/projects/maks-tycoon/FRONTEND/src/app/world_interop.cljs",(21),(1),(164),(164),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.world_interop.get_world_size)?app.world_interop.get_world_size.cljs$lang$test:null)]))], null));

return state;
})], null);
app.core.main_component = rum.core.build_defc.call(null,(function (){
rum.core.react.call(null,app.state.ui_refresh_tick);

var attrs37506 = gamebase.layouts.sidebar_and_bottombar.mk_html.call(null,app.ui.sidebar.sidebar_component.call(null),app.ui.bottombar.bottombar_component.call(null));
return cljs.core.apply.call(null,React.createElement,"dev",((cljs.core.map_QMARK_.call(null,attrs37506))?sablono.interpreter.attributes.call(null,attrs37506):null),((cljs.core.map_QMARK_.call(null,attrs37506))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,app.scratch.component.call(null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37506),sablono.interpreter.interpret.call(null,app.scratch.component.call(null))], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.my_mixin,rum.core.reactive], null),"main-component");
app.core.render = (function app$core$render(){
console.log("RENDER");

return rum.core.mount.call(null,app.core.main_component.call(null),document.getElementById("app"));
});
app.core.resource_fnames = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background.png","tiles.png","loco1.png","loco1-coupled.png","loco1-crashed.png","loco1-debug.png","carriage1.png","carriage1-front-coupled.png","carriage1-rear-coupled.png","carriage1-both-coupled.png","carriage1-crashed.png","carriage2.png","level1.tmx"], null));
app.core.main = (function app$core$main(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37512 = arguments.length;
var i__4532__auto___37513 = (0);
while(true){
if((i__4532__auto___37513 < len__4531__auto___37512)){
args__4534__auto__.push((arguments[i__4532__auto___37513]));

var G__37514 = (i__4532__auto___37513 + (1));
i__4532__auto___37513 = G__37514;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return app.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

app.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (_){
console.log("MAIN");

setInterval((function (){
var rate = frameRate();
var rate_s = (((rate * (10)) | (0)) / (10));
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942),rate_s);
}),(1000));

var seq__37508_37515 = cljs.core.seq.call(null,app.core.resource_fnames);
var chunk__37509_37516 = null;
var count__37510_37517 = (0);
var i__37511_37518 = (0);
while(true){
if((i__37511_37518 < count__37510_37517)){
var fname_37519 = cljs.core._nth.call(null,chunk__37509_37516,i__37511_37518);
gamebase.resources.add_resource.call(null,fname_37519);


var G__37520 = seq__37508_37515;
var G__37521 = chunk__37509_37516;
var G__37522 = count__37510_37517;
var G__37523 = (i__37511_37518 + (1));
seq__37508_37515 = G__37520;
chunk__37509_37516 = G__37521;
count__37510_37517 = G__37522;
i__37511_37518 = G__37523;
continue;
} else {
var temp__5457__auto___37524 = cljs.core.seq.call(null,seq__37508_37515);
if(temp__5457__auto___37524){
var seq__37508_37525__$1 = temp__5457__auto___37524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37508_37525__$1)){
var c__4351__auto___37526 = cljs.core.chunk_first.call(null,seq__37508_37525__$1);
var G__37527 = cljs.core.chunk_rest.call(null,seq__37508_37525__$1);
var G__37528 = c__4351__auto___37526;
var G__37529 = cljs.core.count.call(null,c__4351__auto___37526);
var G__37530 = (0);
seq__37508_37515 = G__37527;
chunk__37509_37516 = G__37528;
count__37510_37517 = G__37529;
i__37511_37518 = G__37530;
continue;
} else {
var fname_37531 = cljs.core.first.call(null,seq__37508_37525__$1);
gamebase.resources.add_resource.call(null,fname_37531);


var G__37532 = cljs.core.next.call(null,seq__37508_37525__$1);
var G__37533 = null;
var G__37534 = (0);
var G__37535 = (0);
seq__37508_37515 = G__37532;
chunk__37509_37516 = G__37533;
count__37510_37517 = G__37534;
i__37511_37518 = G__37535;
continue;
}
} else {
}
}
break;
}

gamebase.resources.set_on_all_loaded.call(null,(function (){
console.log("on all loaded");

if(cljs.core.every_QMARK_.call(null,gamebase.resources.get_resource,app.core.resource_fnames)){
console.log("mozna odpalac");

app.world_interop.set_world.call(null,app.world_interop.mk_world.call(null));

app.world_interop.init_tile_extra.call(null);

return app.world_interop.run.call(null);
} else {
return null;
}
}));

app.key_mouse_input.setup_key_handler.call(null);

app.key_mouse_input.setup_mouse_handler.call(null);

app.modules.construction.initialize.call(null);

return app.core.render.call(null);
});

app.core.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
app.core.main.cljs$lang$applyTo = (function (seq37507){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37507));
});

app.core.initialize_layout = (function app$core$initialize_layout(){
return gamebase.layouts.sidebar_and_bottombar.initialize.call(null,app.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bottom-bar-height","bottom-bar-height",757803900),(150),new cljs.core.Keyword(null,"side-bar-width","side-bar-width",130602106),(200),new cljs.core.Keyword(null,"after-canvas-resize","after-canvas-resize",546295223),(function (){
return cljs.core.List.EMPTY;
})], null));
});

//# sourceMappingURL=core.js.map
