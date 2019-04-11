// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.ecs');
goog.require('cljs.core');
goog.require('gamebase.event_queue');
gamebase.ecs.to_world = (function gamebase$ecs$to_world(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"to-world","to-world",-430459984)], null);
});
gamebase.ecs.to_system = (function gamebase$ecs$to_system(system){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"to-system","to-system",253598638),new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001),(((system instanceof cljs.core.Keyword))?system:new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001).cljs$core$IFn$_invoke$arity$1(system))], null);
});
gamebase.ecs.to_entity = (function gamebase$ecs$to_entity(entity){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917),((cljs.core.map_QMARK_.call(null,entity))?new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(entity):entity)], null);
});
gamebase.ecs.to_component = (function gamebase$ecs$to_component(component){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword("gamebase.ecs","component-id","gamebase.ecs/component-id",-1105378023),new cljs.core.Keyword("gamebase.ecs","component-key","gamebase.ecs/component-key",-1450608268).cljs$core$IFn$_invoke$arity$1(component)], null);
});
gamebase.ecs.to = (function gamebase$ecs$to(object_or_target_id){
if(cljs.core.map_QMARK_.call(null,object_or_target_id)){
var G__20288 = new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875).cljs$core$IFn$_invoke$arity$1(object_or_target_id);
var G__20288__$1 = (((G__20288 instanceof cljs.core.Keyword))?G__20288.fqn:null);
switch (G__20288__$1) {
case "world":
return gamebase.ecs.to_world.call(null);

break;
case "to-world":
return object_or_target_id;

break;
case "system":
return gamebase.ecs.to_system.call(null,object_or_target_id);

break;
case "to-system":
return object_or_target_id;

break;
case "entity":
return gamebase.ecs.to_entity.call(null,object_or_target_id);

break;
case "to-entity":
return object_or_target_id;

break;
case "component":
return gamebase.ecs.to_component.call(null,object_or_target_id);

break;
case "to-component":
return object_or_target_id;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20288__$1)].join('')));

}
} else {
return object_or_target_id;
}
});
gamebase.ecs.change_target = (function gamebase$ecs$change_target(event,target_id){
return cljs.core.assoc.call(null,event,new cljs.core.Keyword("gamebase.ecs","target-id","gamebase.ecs/target-id",200150503),gamebase.ecs.to.call(null,target_id));
});
gamebase.ecs.id = (function gamebase$ecs$id(object_or_object_id){
if(cljs.core.map_QMARK_.call(null,object_or_object_id)){
var G__20290 = new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875).cljs$core$IFn$_invoke$arity$1(object_or_object_id);
var G__20290__$1 = (((G__20290 instanceof cljs.core.Keyword))?G__20290.fqn:null);
switch (G__20290__$1) {
case "world":
return null;

break;
case "system":
return new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001).cljs$core$IFn$_invoke$arity$1(object_or_object_id);

break;
case "component":
return new cljs.core.Keyword("gamebase.ecs","component-id","gamebase.ecs/component-id",-1105378023).cljs$core$IFn$_invoke$arity$1(object_or_object_id);

break;
case "entity":
return new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(object_or_object_id);

break;
default:
return object_or_object_id;

}
} else {
return object_or_object_id;
}
});
gamebase.ecs.mk_world = (function gamebase$ecs$mk_world(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("gamebase.ecs","systems","gamebase.ecs/systems",1648327110),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396),(0),new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763),gamebase.event_queue.create.call(null)], null);
});
gamebase.ecs.mk_system = (function gamebase$ecs$mk_system(id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001),id], null);
});
gamebase.ecs.mk_entity = (function gamebase$ecs$mk_entity(id,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986),type,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917),id,new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412),cljs.core.PersistentArrayMap.EMPTY], null);
});
gamebase.ecs.mk_component = (function gamebase$ecs$mk_component(system_or_id,entity_or_id,key,type){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001),gamebase.ecs.id.call(null,system_or_id),new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986),type,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917),gamebase.ecs.id.call(null,entity_or_id),new cljs.core.Keyword("gamebase.ecs","component-key","gamebase.ecs/component-key",-1450608268),key], null);
});
if((typeof gamebase !== 'undefined') && (typeof gamebase.ecs !== 'undefined') && (typeof gamebase.ecs.handle_event !== 'undefined')){
} else {
gamebase.ecs.handle_event = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.ecs","handle-event"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (world,event,object){
var target_id = new cljs.core.Keyword("gamebase.ecs","target-id","gamebase.ecs/target-id",200150503).cljs$core$IFn$_invoke$arity$1(event);
var G__20292 = new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875).cljs$core$IFn$_invoke$arity$1(target_id);
var G__20292__$1 = (((G__20292 instanceof cljs.core.Keyword))?G__20292.fqn:null);
switch (G__20292__$1) {
case "to-world":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-world","to-world",-430459984),new cljs.core.Keyword("gamebase.ecs","msg","gamebase.ecs/msg",1284168338).cljs$core$IFn$_invoke$arity$1(event)], null);

break;
case "to-system":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-system","to-system",253598638),new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001).cljs$core$IFn$_invoke$arity$1(target_id),new cljs.core.Keyword("gamebase.ecs","msg","gamebase.ecs/msg",1284168338).cljs$core$IFn$_invoke$arity$1(event)], null);

break;
case "to-entity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-entity","to-entity",-34052624),new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword("gamebase.ecs","msg","gamebase.ecs/msg",1284168338).cljs$core$IFn$_invoke$arity$1(event)], null);

break;
case "to-component":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.ecs","type","gamebase.ecs/type",-1539780986).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword("gamebase.ecs","msg","gamebase.ecs/msg",1284168338).cljs$core$IFn$_invoke$arity$1(event)], null);

break;
default:
return cljs.core.println.call(null,["PROBLEM 2 !!!! >",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,target_id)),"< EVENT: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,event))].join(''));

}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,e,___$1){
cljs.core.println.call(null,["UNHANDLED EVENT: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e))].join(''));

return cljs.core.PersistentVector.EMPTY;
}));

gamebase.ecs.do_handle_event = (function gamebase$ecs$do_handle_event(world,event){
var world0 = cljs.core.assoc.call(null,world,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event));
var object = gamebase.ecs.resolve_target_id.call(null,world0,new cljs.core.Keyword("gamebase.ecs","target-id","gamebase.ecs/target-id",200150503).cljs$core$IFn$_invoke$arity$1(event));
var ret = gamebase.ecs.handle_event.call(null,world0,event,object);
var new_objects_or_events = ((cljs.core.map_QMARK_.call(null,ret))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null):ret);
var world_SINGLEQUOTE_ = cljs.core.reduce.call(null,gamebase.ecs.insert_object,world0,cljs.core.filter.call(null,new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new_objects_or_events));
var events_SINGLEQUOTE_ = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.remove.call(null,new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875),new_objects_or_events));
var event_queue_SINGLEQUOTE_ = gamebase.event_queue.put_all_events.call(null,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763).cljs$core$IFn$_invoke$arity$1(world_SINGLEQUOTE_),events_SINGLEQUOTE_);
var world_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.assoc.call(null,world_SINGLEQUOTE_,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763),event_queue_SINGLEQUOTE_);
return world_SINGLEQUOTE__SINGLEQUOTE_;
});
gamebase.ecs.advance_until_time = (function gamebase$ecs$advance_until_time(world,time){
var wrl = world;
while(true){
var temp__5455__auto__ = gamebase.event_queue.soonest_event_time.call(null,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763).cljs$core$IFn$_invoke$arity$1(wrl));
if(cljs.core.truth_(temp__5455__auto__)){
var s_t = temp__5455__auto__;
if((s_t <= time)){
var vec__20294 = gamebase.event_queue.take_event.call(null,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763).cljs$core$IFn$_invoke$arity$1(wrl));
var event = cljs.core.nth.call(null,vec__20294,(0),null);
var event_queue_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__20294,(1),null);
var wrl_SINGLEQUOTE_ = cljs.core.assoc.call(null,wrl,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763),event_queue_SINGLEQUOTE_,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396),s_t);
var G__20297 = gamebase.ecs.do_handle_event.call(null,wrl_SINGLEQUOTE_,event);
wrl = G__20297;
continue;
} else {
return wrl;
}
} else {
return cljs.core.assoc.call(null,wrl,new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396),time);
}
break;
}
});
gamebase.ecs.mk_event = (function gamebase$ecs$mk_event(target_or_id,msg,time){
var target_id = gamebase.ecs.to.call(null,target_or_id);
if(cljs.core.truth_(target_id)){
} else {
cljs.core.println.call(null,"ERROR!!! TARGET-ID NIL!!!");

((1) / (0));
}

if(cljs.core.truth_(new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875).cljs$core$IFn$_invoke$arity$1(target_id))){
} else {
cljs.core.println.call(null,["ERROR!!! TARGET-ID KIND NIL!!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,target_id))].join(''));

((1) / (0));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("gamebase.ecs","target-id","gamebase.ecs/target-id",200150503),target_id,new cljs.core.Keyword("gamebase.ecs","msg","gamebase.ecs/msg",1284168338),msg,new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787),time], null);
});
gamebase.ecs.put_all_events = (function gamebase$ecs$put_all_events(world,events){
var event_queue_SINGLEQUOTE_ = gamebase.event_queue.put_all_events.call(null,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763).cljs$core$IFn$_invoke$arity$1(world),events);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword("gamebase.ecs","event-queue","gamebase.ecs/event-queue",-548435763),event_queue_SINGLEQUOTE_);
});
gamebase.ecs.predefined_events = new cljs.core.Keyword("gamebase.ecs","time","gamebase.ecs/time",-1251896396);
gamebase.ecs.retarget = (function gamebase$ecs$retarget(event,object){
return cljs.core.assoc.call(null,event,new cljs.core.Keyword("gamebase.ecs","target-id","gamebase.ecs/target-id",200150503),gamebase.ecs.to.call(null,object));
});
gamebase.ecs.pass_event_through_all = (function gamebase$ecs$pass_event_through_all(world,event,objects){
return cljs.core.reduce.call(null,(function (w,o){
return gamebase.ecs.do_handle_event.call(null,w,gamebase.ecs.retarget.call(null,event,o));
}),world,objects);
});
gamebase.ecs.all_systems = (function gamebase$ecs$all_systems(world){
return cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","systems","gamebase.ecs/systems",1648327110).cljs$core$IFn$_invoke$arity$1(world));
});
gamebase.ecs.all_entities = (function gamebase$ecs$all_entities(world){
return cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world));
});
gamebase.ecs.all_components = (function gamebase$ecs$all_components(world){
return cljs.core.mapcat.call(null,cljs.core.comp.call(null,cljs.core.vals,new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412)),cljs.core.vals.call(null,new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world)));
});
gamebase.ecs.all_components_of_system = (function gamebase$ecs$all_components_of_system(world,system){
return cljs.core.filter.call(null,(function (p1__20298_SHARP_){
return cljs.core._EQ_.call(null,gamebase.ecs.id.call(null,system),new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001).cljs$core$IFn$_invoke$arity$1(p1__20298_SHARP_));
}),gamebase.ecs.all_components.call(null,world));
});
gamebase.ecs.get_entity = (function gamebase$ecs$get_entity(world,component){
var entity_id = new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world).call(null,entity_id);
});
gamebase.ecs.ck_kvs = (function gamebase$ecs$ck_kvs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20301 = arguments.length;
var i__4532__auto___20302 = (0);
while(true){
if((i__4532__auto___20302 < len__4531__auto___20301)){
args__4534__auto__.push((arguments[i__4532__auto___20302]));

var G__20303 = (i__4532__auto___20302 + (1));
i__4532__auto___20302 = G__20303;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return gamebase.ecs.ck_kvs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

gamebase.ecs.ck_kvs.cljs$core$IFn$_invoke$arity$variadic = (function (component_key,kvs){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412),component_key], null),kvs);
});

gamebase.ecs.ck_kvs.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gamebase.ecs.ck_kvs.cljs$lang$applyTo = (function (seq20299){
var G__20300 = cljs.core.first.call(null,seq20299);
var seq20299__$1 = cljs.core.next.call(null,seq20299);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20300,seq20299__$1);
});

gamebase.ecs.resolve_target_id = (function gamebase$ecs$resolve_target_id(world,target_id){
var G__20304 = new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875).cljs$core$IFn$_invoke$arity$1(target_id);
var G__20304__$1 = (((G__20304 instanceof cljs.core.Keyword))?G__20304.fqn:null);
switch (G__20304__$1) {
case "to-world":
return world;

break;
case "to-system":
return new cljs.core.Keyword("gamebase.ecs","systems","gamebase.ecs/systems",1648327110).cljs$core$IFn$_invoke$arity$1(world).call(null,new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001).cljs$core$IFn$_invoke$arity$1(target_id));

break;
case "to-entity":
return new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world).call(null,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(target_id));

break;
case "to-component":
var entity = new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233).cljs$core$IFn$_invoke$arity$1(world).call(null,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(target_id));
return new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(entity).call(null,new cljs.core.Keyword("gamebase.ecs","component-id","gamebase.ecs/component-id",-1105378023).cljs$core$IFn$_invoke$arity$1(target_id));

break;
default:
console.log(["PROBLEM!!!! >",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,target_id)),"<"].join(''));

return null;

}
});
gamebase.ecs.insert_object = (function gamebase$ecs$insert_object(world,object){
var G__20306 = new cljs.core.Keyword("gamebase.ecs","kind","gamebase.ecs/kind",846742875).cljs$core$IFn$_invoke$arity$1(object);
var G__20306__$1 = (((G__20306 instanceof cljs.core.Keyword))?G__20306.fqn:null);
switch (G__20306__$1) {
case "world":
return object;

break;
case "system":
return cljs.core.assoc_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","systems","gamebase.ecs/systems",1648327110),new cljs.core.Keyword("gamebase.ecs","system-id","gamebase.ecs/system-id",1737692001).cljs$core$IFn$_invoke$arity$1(object)], null),object);

break;
case "entity":
return cljs.core.assoc_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(object)], null),object);

break;
case "component":
return cljs.core.assoc_in.call(null,world,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233),new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412),new cljs.core.Keyword("gamebase.ecs","component-key","gamebase.ecs/component-key",-1450608268).cljs$core$IFn$_invoke$arity$1(object)], null),object);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20306__$1)].join('')));

}
});
gamebase.ecs.remove_entity_by_key = (function gamebase$ecs$remove_entity_by_key(world,entity_key){
return cljs.core.update_in.call(null,world,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233)], null),cljs.core.dissoc,entity_key);
});
gamebase.ecs.get_entity_by_key = (function gamebase$ecs$get_entity_by_key(world,entity_key){
return cljs.core.get_in.call(null,world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","entities","gamebase.ecs/entities",343273233),entity_key], null));
});

//# sourceMappingURL=ecs.js.map
