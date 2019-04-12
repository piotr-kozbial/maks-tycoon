// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ecs.world');
goog.require('cljs.core');
goog.require('gamebase.ecs');
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-world","to-world",-430459984),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,_){
return (function (p1__31092_SHARP_){
return cljs.core.reduce.call(null,(function (wrl,e){
return gamebase.ecs.do_handle_event.call(null,wrl,gamebase.ecs.retarget.call(null,event,e));
}),p1__31092_SHARP_,gamebase.ecs.all_entities.call(null,p1__31092_SHARP_));
}).call(null,(function (p1__31091_SHARP_){
return cljs.core.reduce.call(null,(function (wrl,sys){
return gamebase.ecs.do_handle_event.call(null,wrl,gamebase.ecs.retarget.call(null,event,sys));
}),p1__31091_SHARP_,gamebase.ecs.all_systems.call(null,p1__31091_SHARP_));
}).call(null,world));
}));

//# sourceMappingURL=world.js.map
