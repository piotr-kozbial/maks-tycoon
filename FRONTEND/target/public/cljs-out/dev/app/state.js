// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.state');
goog.require('cljs.core');
goog.require('gamebase.layers');
goog.require('app.tiles.general');
goog.require('gamebase.virtual_timer');
goog.require('gamebase.event_queue');
goog.require('devcards.core');
goog.require('sablono.core');
if((typeof app !== 'undefined') && (typeof app.state !== 'undefined') && (typeof app.state.app_state !== 'undefined')){
} else {
app.state.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942),"???",new cljs.core.Keyword(null,"timer","timer",-1266967739),gamebase.virtual_timer.mk_timer.call(null)], null));
}
if((typeof app !== 'undefined') && (typeof app.state !== 'undefined') && (typeof app.state.ui_refresh_tick !== 'undefined')){
} else {
app.state.ui_refresh_tick = cljs.core.atom.call(null,(0));
}
if((typeof app !== 'undefined') && (typeof app.state !== 'undefined') && (typeof app.state._ui_refresh !== 'undefined')){
} else {
app.state._ui_refresh = (function (){
setInterval((function (){
return cljs.core.swap_BANG_.call(null,app.state.ui_refresh_tick,cljs.core.inc);
}),(500));

return null;
})()
;
}
if((typeof app !== 'undefined') && (typeof app.state !== 'undefined') && (typeof app.state._entity_id_counter !== 'undefined')){
} else {
app.state._entity_id_counter = cljs.core.atom.call(null,(0));
}
app.state.get_fresh_entity_id = (function app$state$get_fresh_entity_id(){
return cljs.core.swap_BANG_.call(null,app.state._entity_id_counter,cljs.core.inc);
});
app.state.get_tile_extra = (function app$state$get_tile_extra(tx,ty){
return new cljs.core.Keyword(null,"tile-extra","tile-extra",1451483079).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state))).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));
});
app.state.update_tile_extra = (function app$state$update_tile_extra(tx,ty,f){
cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"tile-extra","tile-extra",1451483079)], null),(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null),f.call(null,m.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null))));
}));

return null;
});
app.state._get_layer = (function app$state$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__65203_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__65203_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.state.init_tile_extra = (function app$state$init_tile_extra(tile_x,tile_y){
var layer = app.state._get_layer.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.state.app_state)),new cljs.core.Keyword(null,"foreground","foreground",499022036));
var vec__65205 = gamebase.layers.get_tile_from_layer.call(null,layer,tile_x,tile_y);
var _ = cljs.core.nth.call(null,vec__65205,(0),null);
var tile_number = cljs.core.nth.call(null,vec__65205,(1),null);
var tile = app.tiles.general.tiles_by_number.call(null,tile_number);
return cljs.core.swap_BANG_.call(null,app.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"tile-extra","tile-extra",1451483079)], null),((function (layer,vec__65205,_,tile_number,tile){
return (function (m){
return cljs.core.assoc.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,tile_y], null),cljs.core.some.call(null,((function (layer,vec__65205,_,tile_number,tile){
return (function (p1__65204_SHARP_){
return app.tiles.general.initialize_tile_extra.call(null,p1__65204_SHARP_,tile_x,tile_y,tile);
});})(layer,vec__65205,_,tile_number,tile))
,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(tile)));
});})(layer,vec__65205,_,tile_number,tile))
);
});

//# sourceMappingURL=state.js.map
