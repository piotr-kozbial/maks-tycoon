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
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__37555){
var map__37556 = p__37555;
var map__37556__$1 = ((((!((map__37556 == null)))?(((((map__37556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37556):map__37556);
var state = map__37556__$1;
var world = cljs.core.get.call(null,map__37556__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.workspace.kill_entity = (function app$workspace$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__37558){
var map__37559 = p__37558;
var map__37559__$1 = ((((!((map__37559 == null)))?(((((map__37559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37559):map__37559);
var state = map__37559__$1;
var world = cljs.core.get.call(null,map__37559__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.remove_entity_by_key.call(null,world,entity_key));
}));

return null;
});

//# sourceMappingURL=workspace.js.map
