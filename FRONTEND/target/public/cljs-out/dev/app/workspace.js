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
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__41048){
var map__41049 = p__41048;
var map__41049__$1 = ((((!((map__41049 == null)))?(((((map__41049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41049):map__41049);
var state = map__41049__$1;
var world = cljs.core.get.call(null,map__41049__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.workspace.kill_entity = (function app$workspace$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__41051){
var map__41052 = p__41051;
var map__41052__$1 = ((((!((map__41052 == null)))?(((((map__41052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41052):map__41052);
var state = map__41052__$1;
var world = cljs.core.get.call(null,map__41052__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.remove_entity_by_key.call(null,world,entity_key));
}));

return null;
});

//# sourceMappingURL=workspace.js.map
