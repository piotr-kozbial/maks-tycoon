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
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__48392){
var map__48393 = p__48392;
var map__48393__$1 = ((((!((map__48393 == null)))?(((((map__48393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48393):map__48393);
var state = map__48393__$1;
var world = cljs.core.get.call(null,map__48393__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.insert_object.call(null,world,e));
}));

return null;
});
app.workspace.kill_entity = (function app$workspace$kill_entity(entity_key){
cljs.core.swap_BANG_.call(null,app.state.app_state,(function (p__48395){
var map__48396 = p__48395;
var map__48396__$1 = ((((!((map__48396 == null)))?(((((map__48396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48396):map__48396);
var state = map__48396__$1;
var world = cljs.core.get.call(null,map__48396__$1,new cljs.core.Keyword(null,"world","world",-418292623));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"world","world",-418292623),gamebase.ecs.remove_entity_by_key.call(null,world,entity_key));
}));

return null;
});

//# sourceMappingURL=workspace.js.map
