// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.workspace');
goog.require('cljs.core');
goog.require('gamebase.resources');
goog.require('gamebase.systems.drawing');
goog.require('gamebase.systems.movement');
goog.require('app.ecs.entities.locomotive');
goog.require('gamebase.events');
goog.require('gamebase.event_queue');
goog.require('gamebase.ecs');
goog.require('gamebase.virtual_timer');
goog.require('gamebase.canvas_control');
goog.require('gamebase.layouts.sidebar_and_bottombar');
goog.require('gamebase.geometry');
goog.require('app.tiles.general');
goog.require('app.core');
goog.require('app.state');
app.workspace.inject_entity = (function app$workspace$inject_entity(e){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__67444){
var map__67445 = p__67444;
var map__67445__$1 = ((((!((map__67445 == null)))?(((((map__67445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67445):map__67445);
var state = map__67445__$1;
var world = cljs.core.get.call(null,map__67445__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.workspace.kill_entity = (function app$workspace$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__67447){
var map__67448 = p__67447;
var map__67448__$1 = ((((!((map__67448 == null)))?(((((map__67448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67448):map__67448);
var state = map__67448__$1;
var world = cljs.core.get.call(null,map__67448__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.remove_entity_by_key.call(null,world,entity_key));
}));

return null;
});

//# sourceMappingURL=workspace.js.map
