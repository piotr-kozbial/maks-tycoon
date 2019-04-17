// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.systems.movement');
goog.require('cljs.core');
goog.require('gamebase.ecs');
goog.require('gamebase.event_queue');
goog.require('gamebase.geometry');
goog.require('app.ecs.common_events');
goog.require('sablono.core');
goog.require('devcards.core');
gamebase.systems.movement.mk_system = (function gamebase$systems$movement$mk_system(){
return gamebase.ecs.mk_system.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131));
});
gamebase.systems.movement.to_system = gamebase.ecs.to_system.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-system","to-system",253598638),new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,system){
return gamebase.ecs.pass_event_through_all.call(null,world,event,gamebase.ecs.all_components_of_system.call(null,world,system));
}));
gamebase.systems.movement.mk_test_diagonal_component = (function gamebase$systems$movement$mk_test_diagonal_component(entity_or_id,key,_){
return gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.movement","test-diagonal","gamebase.systems.movement/test-diagonal",-305995921));
});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","test-diagonal","gamebase.systems.movement/test-diagonal",-305995921),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,component){
var t = new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event);
var d = cljs.core.rem.call(null,((0.05 * t) | (0)),(200));
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,d], null));
}));
gamebase.systems.movement.calculate_path_end_time = (function gamebase$systems$movement$calculate_path_end_time(p__45656,time){
var map__45657 = p__45656;
var map__45657__$1 = ((((!((map__45657 == null)))?(((((map__45657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45657):map__45657);
var component = map__45657__$1;
var path = cljs.core.get.call(null,map__45657__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_start_length = cljs.core.get.call(null,map__45657__$1,new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584));
var path_start_time = cljs.core.get.call(null,map__45657__$1,new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704));
var speed = cljs.core.get.call(null,map__45657__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
if((speed > (0))){
return ((time + ((gamebase.geometry.path_length.call(null,path) - path_start_length) / speed)) | (0));
} else {
return null;
}
});
gamebase.systems.movement.set_path = (function gamebase$systems$movement$set_path(this$,time,path,path_start_length){
var history = new cljs.core.Keyword(null,"path-history","path-history",1133440586).cljs$core$IFn$_invoke$arity$1(this$);
var history_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(this$))?cljs.core.into.call(null,history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(this$)], null)):history);
var history_SINGLEQUOTE__SINGLEQUOTE_ = (((cljs.core.count.call(null,history_SINGLEQUOTE_) <= new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863).cljs$core$IFn$_invoke$arity$1(this$)))?history_SINGLEQUOTE_:cljs.core.apply.call(null,cljs.core.vector,cljs.core.rest.call(null,history_SINGLEQUOTE_)));
var this_SINGLEQUOTE_ = cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"path-history","path-history",1133440586),history_SINGLEQUOTE__SINGLEQUOTE_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584),path_start_length,new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704),time);
var path_end_time = gamebase.systems.movement.calculate_path_end_time.call(null,this_SINGLEQUOTE_,time);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this_SINGLEQUOTE_,new cljs.core.Keyword(null,"path-end-time","path-end-time",718445815),path_end_time),gamebase.ecs.mk_event.call(null,this$,new cljs.core.Keyword(null,"update","update",1045576396),path_end_time)], null);
});
gamebase.systems.movement.do_update = (function gamebase$systems$movement$do_update(_LT_this_GT_,_LT_time_GT_,_LT_world_GT_){
var map__45659 = _LT_this_GT_;
var map__45659__$1 = ((((!((map__45659 == null)))?(((((map__45659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45659):map__45659);
var path = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_start_time = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704));
var path_start_length = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584));
var path_end_time = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"path-end-time","path-end-time",718445815));
var speed = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var driving_QMARK_ = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"driving?","driving?",-428410284));
var extra_points = cljs.core.get.call(null,map__45659__$1,new cljs.core.Keyword(null,"extra-points","extra-points",41144411));
if(cljs.core.truth_((function (){var and__3938__auto__ = path;
if(cljs.core.truth_(and__3938__auto__)){
return driving_QMARK_;
} else {
return and__3938__auto__;
}
})())){
var time_of_travel = (_LT_time_GT_ - path_start_time);
var length_on_path = (path_start_length + (time_of_travel * speed));
var total_path_length = gamebase.geometry.path_length.call(null,path);
var at_end_QMARK_ = cljs.core._EQ_.call(null,_LT_time_GT_,path_end_time);
var after_end_QMARK_ = (_LT_time_GT_ >= path_end_time);
var extra_xy = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (time_of_travel,length_on_path,total_path_length,at_end_QMARK_,after_end_QMARK_,map__45659,map__45659__$1,path,path_start_time,path_start_length,path_end_time,speed,driving_QMARK_,extra_points){
return (function (p__45661){
var vec__45662 = p__45661;
var k = cljs.core.nth.call(null,vec__45662,(0),null);
var dist = cljs.core.nth.call(null,vec__45662,(1),null);
var length_on_path__$1 = (length_on_path + dist);
var position = gamebase.geometry.path_point_at_length.call(null,path,length_on_path__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,position], null);
});})(time_of_travel,length_on_path,total_path_length,at_end_QMARK_,after_end_QMARK_,map__45659,map__45659__$1,path,path_start_time,path_start_length,path_end_time,speed,driving_QMARK_,extra_points))
,extra_points));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((at_end_QMARK_)?gamebase.ecs.mk_event.call(null,gamebase.ecs.to_entity.call(null,new cljs.core.Keyword("gamebase.ecs","entity-id","gamebase.ecs/entity-id",-1186455917).cljs$core$IFn$_invoke$arity$1(_LT_this_GT_)),new cljs.core.Keyword("gamebase.systems.movement","at-path-end","gamebase.systems.movement/at-path-end",379756653),_LT_time_GT_):null),cljs.core.assoc.call(null,_LT_this_GT_,new cljs.core.Keyword(null,"length-on-path","length-on-path",836446393),length_on_path,new cljs.core.Keyword(null,"at-end?","at-end?",-1629621185),at_end_QMARK_,new cljs.core.Keyword(null,"after-end?","after-end?",1965545011),after_end_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),gamebase.geometry.path_point_at_length.call(null,path,((after_end_QMARK_)?total_path_length:length_on_path)),new cljs.core.Keyword(null,"angle","angle",1622094254),gamebase.geometry.angle_at_length.call(null,path,((after_end_QMARK_)?total_path_length:length_on_path)),new cljs.core.Keyword(null,"extra-xy","extra-xy",78827342),extra_xy)], null);
} else {
return null;
}
});
gamebase.systems.movement.mk_path_follower = (function gamebase$systems$movement$mk_path_follower(entity_or_id,key,p__45665){
var map__45666 = p__45665;
var map__45666__$1 = ((((!((map__45666 == null)))?(((((map__45666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45666):map__45666);
var path_history_size = cljs.core.get.call(null,map__45666__$1,new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863));
var extra_points = cljs.core.get.call(null,map__45666__$1,new cljs.core.Keyword(null,"extra-points","extra-points",41144411));
var v = cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374)),new cljs.core.Keyword(null,"driving?","driving?",-428410284),true,new cljs.core.Keyword(null,"speed","speed",1257663751),0.02,new cljs.core.Keyword(null,"path-history","path-history",1133440586),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863),path_history_size,new cljs.core.Keyword(null,"extra-points","extra-points",41144411),extra_points);
return cljs.core.vary_meta.call(null,v,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.xprint.core","key-order","app.xprint.core/key-order",2050044103)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863),new cljs.core.Keyword(null,"extra-points","extra-points",41144411),new cljs.core.Keyword(null,"driving?","driving?",-428410284),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584),new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704),new cljs.core.Keyword(null,"path-end-time","path-end-time",718445815),new cljs.core.Keyword(null,"path-history","path-history",1133440586),new cljs.core.Keyword(null,"length-on-path","length-on-path",836446393),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"at-end?","at-end?",-1629621185),new cljs.core.Keyword(null,"after-end?","after-end?",1965545011),new cljs.core.Keyword(null,"extra-xy","extra-xy",78827342)], null));

});
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374),new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660)], null),(function (_,___$1,this$){
return cljs.core.PersistentVector.EMPTY;
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374),new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785)], null),(function (world,event,this$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"driving?","driving?",-428410284).cljs$core$IFn$_invoke$arity$1(this$))){
var temp__5457__auto__ = gamebase.systems.movement.do_update.call(null,this$,new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event),world);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__45668 = temp__5457__auto__;
var maybe_event = cljs.core.nth.call(null,vec__45668,(0),null);
var this_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__45668,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_event,cljs.core.assoc.call(null,this_SINGLEQUOTE_,new cljs.core.Keyword(null,"driving?","driving?",-428410284),false)], null);
} else {
return null;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374),new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491)], null),(function (world,event,this$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"driving?","driving?",-428410284).cljs$core$IFn$_invoke$arity$1(this$))){
return null;
} else {
return gamebase.systems.movement.set_path.call(null,cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"driving?","driving?",-428410284),true),new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"length-on-path","length-on-path",836446393).cljs$core$IFn$_invoke$arity$1(this$));
}
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (world,event,this$){
return gamebase.systems.movement.do_update.call(null,this$,new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event),world);
}));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374),new cljs.core.Keyword("gamebase.systems.movement","set-path","gamebase.systems.movement/set-path",-1213286642)], null),(function (world,event,this$){
var map__45671 = event;
var map__45671__$1 = ((((!((map__45671 == null)))?(((((map__45671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45671):map__45671);
var path = cljs.core.get.call(null,map__45671__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return gamebase.systems.movement.set_path.call(null,this$,new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(event),path,(0));
}));
gamebase.systems.movement.mk_path_trailer = (function gamebase$systems$movement$mk_path_trailer(entity_or_id,key,p__45673){
var map__45674 = p__45673;
var map__45674__$1 = ((((!((map__45674 == null)))?(((((map__45674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45674):map__45674);
var path_history_size = cljs.core.get.call(null,map__45674__$1,new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.movement","path-trailer","gamebase.systems.movement/path-trailer",-1535007830)),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470));
});

//# sourceMappingURL=movement.js.map
