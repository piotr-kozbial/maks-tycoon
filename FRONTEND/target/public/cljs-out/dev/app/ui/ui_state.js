// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ui.ui_state');
goog.require('cljs.core');
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.ui_state !== 'undefined') && (typeof app.ui.ui_state.ui_state !== 'undefined')){
} else {
app.ui.ui_state.ui_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"game-id","game-id",385578016),null,new cljs.core.Keyword(null,"game-name","game-name",428581934),null,new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc-selector","loc-selector",-222053855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),null], null),new cljs.core.Keyword(null,"save-load-game","save-load-game",1986449844),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"mouse-over-game-id","mouse-over-game-id",1618384737),(1),new cljs.core.Keyword(null,"game-list","game-list",1562205445),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"bottombar","bottombar",-1253677809),cljs.core.PersistentArrayMap.EMPTY], null));
}
app.ui.ui_state.loc_selector_open = (function app$ui$ui_state$loc_selector_open(){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"loc-selector","loc-selector",-222053855),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true);
});
app.ui.ui_state.loc_selector_close = (function app$ui$ui_state$loc_selector_close(){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"loc-selector","loc-selector",-222053855),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),false);
});
app.ui.ui_state.loc_selector_select = (function app$ui$ui_state$loc_selector_select(loc_id){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"loc-selector","loc-selector",-222053855),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044)], null),loc_id);
});
app.ui.ui_state.get_game_id = (function app$ui$ui_state$get_game_id(state){
return new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(state);
});
app.ui.ui_state.get_game_name = (function app$ui$ui_state$get_game_name(state){
return new cljs.core.Keyword(null,"game-name","game-name",428581934).cljs$core$IFn$_invoke$arity$1(state);
});
app.ui.ui_state.set_game_id = (function app$ui$ui_state$set_game_id(id){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-id","game-id",385578016),id);
});
app.ui.ui_state.set_game_name = (function app$ui$ui_state$set_game_name(name){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-name","game-name",428581934),name);
});
app.ui.ui_state.set_game_saved_time = (function app$ui$ui_state$set_game_saved_time(time){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-saved-time","game-saved-time",2144273364),time);
});

//# sourceMappingURL=ui_state.js.map
