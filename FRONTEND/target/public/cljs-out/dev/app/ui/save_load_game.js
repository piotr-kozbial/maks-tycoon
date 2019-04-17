// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ui.save_load_game');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('app.state');
goog.require('gamebase.ecs');
goog.require('app.ecs.common_events');
goog.require('app.world_interop');
goog.require('app.server_communication');
goog.require('app.ui.ui_state');
goog.require('goog.string');
goog.require('goog.string.format');
app.ui.save_load_game.button_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#47681b",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
app.ui.save_load_game.disabled_button_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#686868",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
app.ui.save_load_game.red_button_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#e8cba2",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#9b4915",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
app.ui.save_load_game.button = (function app$ui$save_load_game$button(icon,style,text,f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return f.call(null);
}),new cljs.core.Keyword(null,"style","style",-496642736),style], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),icon,new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null)], null):null),text], null);
});
app.ui.save_load_game.cancel_button = (function app$ui$save_load_game$cancel_button(){
return app.ui.save_load_game.button.call(null,null,app.ui.save_load_game.red_button_style,"Cancel",(function (){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322));
}));
});
app.ui.save_load_game.box = (function app$ui$save_load_game$box(var_args){
var args__4534__auto__ = [];
var len__4531__auto___46156 = arguments.length;
var i__4532__auto___46157 = (0);
while(true){
if((i__4532__auto___46157 < len__4531__auto___46156)){
args__4534__auto__.push((arguments[i__4532__auto___46157]));

var G__46158 = (i__4532__auto___46157 + (1));
i__4532__auto___46157 = G__46158;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return app.ui.save_load_game.box.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

app.ui.save_load_game.box.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),content);
});

app.ui.save_load_game.box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
app.ui.save_load_game.box.cljs$lang$applyTo = (function (seq46155){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46155));
});

app.ui.save_load_game.spacer = (function app$ui$save_load_game$spacer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null)], null),"   "], null);
});
app.ui.save_load_game.save_game_as_open = (function app$ui$save_load_game$save_game_as_open(){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"save-as","save-as",-1722047792));
});
app.ui.save_load_game.save_game_as = (function app$ui$save_load_game$save_game_as(name){
return app.server_communication.save_game_as.call(null,name,(function (){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322));

return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-saved-time","game-saved-time",2144273364)], null),millis());
}),(function (){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322));

return alert("ERROR: game not saved!");
}));
});
app.ui.save_load_game.save_game = (function app$ui$save_load_game$save_game(){
var ui_state = cljs.core.deref.call(null,app.ui.ui_state.ui_state);
var id = app.ui.ui_state.get_game_id.call(null,ui_state);
var name = app.ui.ui_state.get_game_name.call(null,ui_state);
return app.server_communication.save_game.call(null,id,name,((function (ui_state,id,name){
return (function (){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322));

return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-saved-time","game-saved-time",2144273364)], null),millis());
});})(ui_state,id,name))
,((function (ui_state,id,name){
return (function (){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322));

return alert("ERROR: game not saved!");
});})(ui_state,id,name))
);
});
app.ui.save_load_game.load_game_open = (function app$ui$save_load_game$load_game_open(){
console.log("load game...");

return app.server_communication.list_games.call(null,(function (game_list){
console.log(["LIST GAMES RET: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_list)].join(''));

cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"load","load",-1318641184));

return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"game-list","game-list",1562205445)], null),game_list);
}));
});
app.ui.save_load_game.load_game = (function app$ui$save_load_game$load_game(id,name){
return app.server_communication.load_game.call(null,id,(function (ret){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322));

cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-saved-time","game-saved-time",2144273364)], null),millis());

var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ret));
app.world_interop.set_world.call(null,world);

app.world_interop.run.call(null);

app.ui.ui_state.set_game_id.call(null,id);

app.ui.ui_state.set_game_name.call(null,name);

return console.log(["GAME LOADED. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.ui.ui_state.get_game_id.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.ui.ui_state.get_game_name.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state)))].join(''));
}),(function (){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"base","base",185279322)).call(null,alert("ERROR: game not loaded!"));
}));
});
app.ui.save_load_game.new_game = (function app$ui$save_load_game$new_game(){
app.world_interop.set_world.call(null,app.world_interop.mk_world.call(null));

app.world_interop.run.call(null);

app.ui.ui_state.set_game_id.call(null,null);

app.ui.ui_state.set_game_name.call(null,null);

return app.ui.ui_state.set_game_saved_time.call(null,null);
});
app.ui.save_load_game.save_load_game_component = rum.core.build_defcs.call(null,(function (component_state){
rum.core.react.call(null,app.state.ui_refresh_tick);

var map__46160 = new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.ui.ui_state.ui_state)));
var map__46160__$1 = ((((!((map__46160 == null)))?(((((map__46160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46160):map__46160);
var state = cljs.core.get.call(null,map__46160__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var game_list = cljs.core.get.call(null,map__46160__$1,new cljs.core.Keyword(null,"game-list","game-list",1562205445));
var mouse_over_game_id = cljs.core.get.call(null,map__46160__$1,new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737));
var attrs46159 = app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/save-icon.png",(cljs.core.truth_((function (){var and__3938__auto__ = app.ui.ui_state.get_game_id.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"base","base",185279322));
} else {
return and__3938__auto__;
}
})())?app.ui.save_load_game.button_style:app.ui.save_load_game.disabled_button_style)," SAVE GAME",((function (map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
if(cljs.core.truth_((function (){var and__3938__auto__ = app.ui.ui_state.get_game_id.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"base","base",185279322));
} else {
return and__3938__auto__;
}
})())){
return app.ui.save_load_game.save_game.call(null);
} else {
return null;
}
});})(map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"game-saved-time","game-saved-time",2144273364).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.ui.ui_state.ui_state));
if(cljs.core.truth_(temp__5455__auto__)){
var saved_time = temp__5455__auto__;
var total_seconds = (((millis() - saved_time) / (1000)) | (0));
var seconds = cljs.core.mod.call(null,total_seconds,(60));
var minutes = cljs.core.mod.call(null,((total_seconds / (60)) | (0)),(60));
var hours = ((total_seconds / (3600)) | (0));
return ["saved ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hours > (0)))?hours.call(null,"h "):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((minutes > (0)))?goog.string.format("%02dm",minutes):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02ds",seconds))," ago"].join('');
} else {
return "never saved";
}
})()], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs46159))?sablono.interpreter.attributes.call(null,attrs46159):null),((cljs.core.map_QMARK_.call(null,attrs46159))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/save-as-icon.png",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-as","save-as",-1722047792),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null).call(null,state))?app.ui.save_load_game.button_style:app.ui.save_load_game.disabled_button_style)," SAVE GAME AS...",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"base","base",185279322))){
return app.ui.save_load_game.save_game_as_open.call(null);
} else {
return null;
}
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"save-as","save-as",-1722047792)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"save-game-as-name",new cljs.core.Keyword(null,"ref","ref",1289896967),"save-game-as-name"], null)], null)], null),app.ui.save_load_game.box.call(null,app.ui.save_load_game.spacer.call(null),app.ui.save_load_game.button.call(null,null,app.ui.save_load_game.button_style,"Save",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
var name = rum.core.ref_node.call(null,component_state,"save-game-as-name").value;
return app.ui.save_load_game.save_game_as.call(null,name);
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),app.ui.save_load_game.spacer.call(null),app.ui.save_load_game.cancel_button.call(null))], null):null))),sablono.interpreter.interpret.call(null,app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/load-icon.png",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"load","load",-1318641184),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null).call(null,state))?app.ui.save_load_game.button_style:app.ui.save_load_game.disabled_button_style)," LOAD GAME...",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"base","base",185279322))){
return app.ui.save_load_game.load_game_open.call(null);
} else {
return null;
}
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"load","load",-1318641184)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4324__auto__ = ((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function app$ui$save_load_game$iter__46162(s__46163){
return (new cljs.core.LazySeq(null,((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
var s__46163__$1 = s__46163;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__46163__$1);
if(temp__5457__auto__){
var s__46163__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46163__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__46163__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__46165 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__46164 = (0);
while(true){
if((i__46164 < size__4323__auto__)){
var vec__46166 = cljs.core._nth.call(null,c__4322__auto__,i__46164);
var id = cljs.core.nth.call(null,vec__46166,(0),null);
var name = cljs.core.nth.call(null,vec__46166,(1),null);
cljs.core.chunk_append.call(null,b__46165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,id,mouse_over_game_id))?"#a58d2e":null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__46164,vec__46166,id,name,c__4322__auto__,size__4323__auto__,b__46165,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (e){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),id);
});})(i__46164,vec__46166,id,name,c__4322__auto__,size__4323__auto__,b__46165,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__46164,vec__46166,id,name,c__4322__auto__,size__4323__auto__,b__46165,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),null);
});})(i__46164,vec__46166,id,name,c__4322__auto__,size__4323__auto__,b__46165,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__46164,vec__46166,id,name,c__4322__auto__,size__4323__auto__,b__46165,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return app.ui.save_load_game.load_game.call(null,id,name);
});})(i__46164,vec__46166,id,name,c__4322__auto__,size__4323__auto__,b__46165,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
], null),name], null));

var G__46182 = (i__46164 + (1));
i__46164 = G__46182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46165),app$ui$save_load_game$iter__46162.call(null,cljs.core.chunk_rest.call(null,s__46163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46165),null);
}
} else {
var vec__46169 = cljs.core.first.call(null,s__46163__$2);
var id = cljs.core.nth.call(null,vec__46169,(0),null);
var name = cljs.core.nth.call(null,vec__46169,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,id,mouse_over_game_id))?"#a58d2e":null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__46169,id,name,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (e){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),id);
});})(vec__46169,id,name,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__46169,id,name,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),null);
});})(vec__46169,id,name,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__46169,id,name,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return app.ui.save_load_game.load_game.call(null,id,name);
});})(vec__46169,id,name,s__46163__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
], null),name], null),app$ui$save_load_game$iter__46162.call(null,cljs.core.rest.call(null,s__46163__$2)));
}
} else {
return null;
}
break;
}
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,null,null));
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
;
return iter__4324__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.second,game_list));
})(),app.ui.save_load_game.box.call(null,app.ui.save_load_game.cancel_button.call(null))], null):null))),sablono.interpreter.interpret.call(null,app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/asterisk.png",app.ui.save_load_game.button_style," NEW GAME",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
return app.ui.save_load_game.new_game.call(null);
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
)))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46159),sablono.interpreter.interpret.call(null,app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/save-as-icon.png",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-as","save-as",-1722047792),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null).call(null,state))?app.ui.save_load_game.button_style:app.ui.save_load_game.disabled_button_style)," SAVE GAME AS...",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"base","base",185279322))){
return app.ui.save_load_game.save_game_as_open.call(null);
} else {
return null;
}
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"save-as","save-as",-1722047792)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"save-game-as-name",new cljs.core.Keyword(null,"ref","ref",1289896967),"save-game-as-name"], null)], null)], null),app.ui.save_load_game.box.call(null,app.ui.save_load_game.spacer.call(null),app.ui.save_load_game.button.call(null,null,app.ui.save_load_game.button_style,"Save",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
var name = rum.core.ref_node.call(null,component_state,"save-game-as-name").value;
return app.ui.save_load_game.save_game_as.call(null,name);
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),app.ui.save_load_game.spacer.call(null),app.ui.save_load_game.cancel_button.call(null))], null):null))),sablono.interpreter.interpret.call(null,app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/load-icon.png",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"load","load",-1318641184),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null).call(null,state))?app.ui.save_load_game.button_style:app.ui.save_load_game.disabled_button_style)," LOAD GAME...",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"base","base",185279322))){
return app.ui.save_load_game.load_game_open.call(null);
} else {
return null;
}
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"load","load",-1318641184)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4324__auto__ = ((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function app$ui$save_load_game$iter__46172(s__46173){
return (new cljs.core.LazySeq(null,((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
var s__46173__$1 = s__46173;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__46173__$1);
if(temp__5457__auto__){
var s__46173__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46173__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__46173__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__46175 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__46174 = (0);
while(true){
if((i__46174 < size__4323__auto__)){
var vec__46176 = cljs.core._nth.call(null,c__4322__auto__,i__46174);
var id = cljs.core.nth.call(null,vec__46176,(0),null);
var name = cljs.core.nth.call(null,vec__46176,(1),null);
cljs.core.chunk_append.call(null,b__46175,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,id,mouse_over_game_id))?"#a58d2e":null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__46174,vec__46176,id,name,c__4322__auto__,size__4323__auto__,b__46175,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (e){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),id);
});})(i__46174,vec__46176,id,name,c__4322__auto__,size__4323__auto__,b__46175,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__46174,vec__46176,id,name,c__4322__auto__,size__4323__auto__,b__46175,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),null);
});})(i__46174,vec__46176,id,name,c__4322__auto__,size__4323__auto__,b__46175,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__46174,vec__46176,id,name,c__4322__auto__,size__4323__auto__,b__46175,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return app.ui.save_load_game.load_game.call(null,id,name);
});})(i__46174,vec__46176,id,name,c__4322__auto__,size__4323__auto__,b__46175,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
], null),name], null));

var G__46183 = (i__46174 + (1));
i__46174 = G__46183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46175),app$ui$save_load_game$iter__46172.call(null,cljs.core.chunk_rest.call(null,s__46173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46175),null);
}
} else {
var vec__46179 = cljs.core.first.call(null,s__46173__$2);
var id = cljs.core.nth.call(null,vec__46179,(0),null);
var name = cljs.core.nth.call(null,vec__46179,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,id,mouse_over_game_id))?"#a58d2e":null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__46179,id,name,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (e){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),id);
});})(vec__46179,id,name,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__46179,id,name,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737)], null),null);
});})(vec__46179,id,name,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__46179,id,name,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (_){
return app.ui.save_load_game.load_game.call(null,id,name);
});})(vec__46179,id,name,s__46173__$2,temp__5457__auto__,attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
], null),name], null),app$ui$save_load_game$iter__46172.call(null,cljs.core.rest.call(null,s__46173__$2)));
}
} else {
return null;
}
break;
}
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
,null,null));
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
;
return iter__4324__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.second,game_list));
})(),app.ui.save_load_game.box.call(null,app.ui.save_load_game.cancel_button.call(null))], null):null))),sablono.interpreter.interpret.call(null,app.ui.save_load_game.box.call(null,app.ui.save_load_game.button.call(null,"public/asterisk.png",app.ui.save_load_game.button_style," NEW GAME",((function (attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id){
return (function (){
return app.ui.save_load_game.new_game.call(null);
});})(attrs46159,map__46160,map__46160__$1,state,game_list,mouse_over_game_id))
)))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"save-load-game-component");

//# sourceMappingURL=save_load_game.js.map
