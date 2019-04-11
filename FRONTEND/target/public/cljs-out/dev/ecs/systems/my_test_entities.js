// Compiled by ClojureScript 1.10.339 {}
goog.provide('ecs.systems.my_test_entities');
goog.require('cljs.core');
goog.require('gamebase.ecs');
ecs.systems.my_test_entities.mk_system = (function ecs$systems$my_test_entities$mk_system(){
return gamebase.ecs.mk_system.call(null,new cljs.core.Keyword("ecs.systems.my-test-entities","test","ecs.systems.my-test-entities/test",159987779));
});
ecs.systems.my_test_entities.mk_component = (function ecs$systems$my_test_entities$mk_component(entity_or_id,key){
return gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("ecs.systems.my-test-entities","test","ecs.systems.my-test-entities/test",159987779),entity_or_id,key,new cljs.core.Keyword("ecs.systems.my-test-entities","test-component-1","ecs.systems.my-test-entities/test-component-1",637041586));
});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-system","to-system",253598638),new cljs.core.Keyword("ecs.systems.my-test-entities","test","ecs.systems.my-test-entities/test",159987779),new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396)], null),(function (world,event,system){
console.log("Jestem testowym systemem, dostalem ::ecs/time");

return gamebase.ecs.pass_event_through_all.call(null,world,event,gamebase.ecs.all_components_of_system.call(null,world,system));
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("ecs.systems.my-test-entities","test-component-1","ecs.systems.my-test-entities/test-component-1",637041586),new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396)], null),(function (world,event,component){
console.log(["Jestem komponentem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","component-key","gamebase.ecs/component-key",-1450608268).cljs$core$IFn$_invoke$arity$1(component)),", dostalem ::ecs/time"].join(''));

return world;
}));

//# sourceMappingURL=my_test_entities.js.map
