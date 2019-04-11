// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.systems.movement');
goog.require('cljs.core');
goog.require('gamebase.ecs');
goog.require('gamebase.ecsu');
goog.require('gamebase.event_queue');
goog.require('gamebase.geometry');
goog.require('app.ecs.common_events');
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
var _LT__event_target_prefix_GT_19884_19898 = gamebase.systems.movement._LT__event_target_prefix_GT_;
gamebase.systems.movement._LT__event_target_prefix_GT_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374)], null);

try{var calculate_path_end_time_19899 = ((function (_LT__event_target_prefix_GT_19884_19898){
return (function (p__19885,time){
var map__19886 = p__19885;
var map__19886__$1 = ((((!((map__19886 == null)))?(((((map__19886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19886):map__19886);
var component = map__19886__$1;
var path = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_start_length = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584));
var path_start_time = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704));
var speed = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
if((speed > (0))){
return ((time + ((gamebase.geometry.path_length.call(null,path) - path_start_length) / speed)) | (0));
} else {
return null;
}
});})(_LT__event_target_prefix_GT_19884_19898))
;
var set_path_19900 = ((function (calculate_path_end_time_19899,_LT__event_target_prefix_GT_19884_19898){
return (function (this$,time,path,path_start_length){
var history = new cljs.core.Keyword(null,"path-history","path-history",1133440586).cljs$core$IFn$_invoke$arity$1(this$);
var history_SINGLEQUOTE_ = cljs.core.into.call(null,history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(this$)], null));
var history_SINGLEQUOTE__SINGLEQUOTE_ = (((cljs.core.count.call(null,history_SINGLEQUOTE_) <= new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863).cljs$core$IFn$_invoke$arity$1(this$)))?history_SINGLEQUOTE_:cljs.core.apply.call(null,cljs.core.vector,cljs.core.rest.call(null,history_SINGLEQUOTE_)));
var this_SINGLEQUOTE_ = cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"path-history","path-history",1133440586),history_SINGLEQUOTE__SINGLEQUOTE_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584),path_start_length,new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704),time);
var path_end_time = calculate_path_end_time_19899.call(null,this_SINGLEQUOTE_,time);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this_SINGLEQUOTE_,new cljs.core.Keyword(null,"path-end-time","path-end-time",718445815),path_end_time),gamebase.ecs.mk_event.call(null,this$,new cljs.core.Keyword(null,"update","update",1045576396),path_end_time)], null);
});})(calculate_path_end_time_19899,_LT__event_target_prefix_GT_19884_19898))
;
var do_update_19901 = ((function (calculate_path_end_time_19899,set_path_19900,_LT__event_target_prefix_GT_19884_19898){
return (function (_LT_this_GT_,_LT_time_GT_,_LT_world_GT_){
var map__19888 = _LT_this_GT_;
var map__19888__$1 = ((((!((map__19888 == null)))?(((((map__19888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19888):map__19888);
var path = cljs.core.get.call(null,map__19888__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_start_time = cljs.core.get.call(null,map__19888__$1,new cljs.core.Keyword(null,"path-start-time","path-start-time",1685054704));
var path_start_length = cljs.core.get.call(null,map__19888__$1,new cljs.core.Keyword(null,"path-start-length","path-start-length",29775584));
var path_end_time = cljs.core.get.call(null,map__19888__$1,new cljs.core.Keyword(null,"path-end-time","path-end-time",718445815));
var speed = cljs.core.get.call(null,map__19888__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var driving_QMARK_ = cljs.core.get.call(null,map__19888__$1,new cljs.core.Keyword(null,"driving?","driving?",-428410284));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((at_end_QMARK_)?gamebase.ecs.mk_event.call(null,gamebase.ecs.get_entity.call(null,_LT_world_GT_,_LT_this_GT_),new cljs.core.Keyword("gamebase.systems.movement","at-path-end","gamebase.systems.movement/at-path-end",379756653),_LT_time_GT_):null),cljs.core.assoc.call(null,_LT_this_GT_,new cljs.core.Keyword(null,"length-on-path","length-on-path",836446393),length_on_path,new cljs.core.Keyword(null,"at-end?","at-end?",-1629621185),at_end_QMARK_,new cljs.core.Keyword(null,"after-end?","after-end?",1965545011),after_end_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),gamebase.geometry.path_point_at_length.call(null,path,((after_end_QMARK_)?total_path_length:length_on_path)),new cljs.core.Keyword(null,"angle","angle",1622094254),gamebase.geometry.angle_at_length.call(null,path,((after_end_QMARK_)?total_path_length:length_on_path)))], null);
} else {
return null;
}
});})(calculate_path_end_time_19899,set_path_19900,_LT__event_target_prefix_GT_19884_19898))
;
gamebase.systems.movement.mk_path_follower = ((function (calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898){
return (function gamebase$systems$movement$mk_path_follower(entity_or_id,key,p__19890){
var map__19891 = p__19890;
var map__19891__$1 = ((((!((map__19891 == null)))?(((((map__19891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19891):map__19891);
var path_history_size = cljs.core.get.call(null,map__19891__$1,new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.movement","path-follower","gamebase.systems.movement/path-follower",2123706374)),new cljs.core.Keyword(null,"driving?","driving?",-428410284),true,new cljs.core.Keyword(null,"speed","speed",1257663751),0.02,new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863),path_history_size,new cljs.core.Keyword(null,"path-history","path-history",1133440586),cljs.core.PersistentVector.EMPTY);
});})(calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898))
;

var event_target__19855__auto___19902 = cljs.core.into.call(null,gamebase.systems.movement._LT__event_target_prefix_GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660)], null));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,event_target__19855__auto___19902,((function (event_target__19855__auto___19902,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898){
return (function (_LT_world_GT_,_LT_event_GT_,_LT_this_GT_){
var _LT_time_GT_ = new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(_LT_event_GT_);
return cljs.core.PersistentVector.EMPTY;
});})(event_target__19855__auto___19902,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898))
);

var event_target__19855__auto___19903 = cljs.core.into.call(null,gamebase.systems.movement._LT__event_target_prefix_GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,event_target__19855__auto___19903,((function (event_target__19855__auto___19903,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898){
return (function (_LT_world_GT_,_LT_event_GT_,_LT_this_GT_){
var _LT_time_GT_ = new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(_LT_event_GT_);
return do_update_19901.call(null,_LT_this_GT_,_LT_time_GT_,_LT_world_GT_);
});})(event_target__19855__auto___19903,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898))
);

var event_target__19855__auto___19904 = cljs.core.into.call(null,gamebase.systems.movement._LT__event_target_prefix_GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.ecs.common-events","stop","app.ecs.common-events/stop",-1144685785)], null));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,event_target__19855__auto___19904,((function (event_target__19855__auto___19904,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898){
return (function (_LT_world_GT_,_LT_event_GT_,_LT_this_GT_){
var _LT_time_GT_ = new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(_LT_event_GT_);
if(cljs.core.truth_(new cljs.core.Keyword(null,"driving?","driving?",-428410284).cljs$core$IFn$_invoke$arity$1(_LT_this_GT_))){
var temp__5457__auto__ = do_update_19901.call(null,_LT_this_GT_,_LT_time_GT_,_LT_world_GT_);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__19893 = temp__5457__auto__;
var maybe_event = cljs.core.nth.call(null,vec__19893,(0),null);
var this_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19893,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_event,cljs.core.assoc.call(null,this_SINGLEQUOTE_,new cljs.core.Keyword(null,"driving?","driving?",-428410284),false)], null);
} else {
return null;
}
} else {
return null;
}
});})(event_target__19855__auto___19904,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898))
);

var event_target__19855__auto___19905 = cljs.core.into.call(null,gamebase.systems.movement._LT__event_target_prefix_GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.ecs.common-events","drive","app.ecs.common-events/drive",-677702491)], null));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,event_target__19855__auto___19905,((function (event_target__19855__auto___19905,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898){
return (function (_LT_world_GT_,_LT_event_GT_,_LT_this_GT_){
var _LT_time_GT_ = new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(_LT_event_GT_);
if(cljs.core.truth_(new cljs.core.Keyword(null,"driving?","driving?",-428410284).cljs$core$IFn$_invoke$arity$1(_LT_this_GT_))){
return null;
} else {
return set_path_19900.call(null,cljs.core.assoc.call(null,_LT_this_GT_,new cljs.core.Keyword(null,"driving?","driving?",-428410284),true),_LT_time_GT_,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(_LT_this_GT_),new cljs.core.Keyword(null,"length-on-path","length-on-path",836446393).cljs$core$IFn$_invoke$arity$1(_LT_this_GT_));
}
});})(event_target__19855__auto___19905,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898))
);

var event_target__19855__auto___19906 = cljs.core.into.call(null,gamebase.systems.movement._LT__event_target_prefix_GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gamebase.systems.movement","set-path","gamebase.systems.movement/set-path",-1213286642)], null));
cljs.core._add_method.call(null,gamebase.ecs.handle_event,event_target__19855__auto___19906,((function (event_target__19855__auto___19906,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898){
return (function (_LT_world_GT_,_LT_event_GT_,_LT_this_GT_){
var _LT_time_GT_ = new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(_LT_event_GT_);
var map__19896 = _LT_event_GT_;
var map__19896__$1 = ((((!((map__19896 == null)))?(((((map__19896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19896):map__19896);
var path = cljs.core.get.call(null,map__19896__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return set_path_19900.call(null,_LT_this_GT_,_LT_time_GT_,path,(0));
});})(event_target__19855__auto___19906,calculate_path_end_time_19899,set_path_19900,do_update_19901,_LT__event_target_prefix_GT_19884_19898))
);
}finally {gamebase.systems.movement._LT__event_target_prefix_GT_ = _LT__event_target_prefix_GT_19884_19898;
}var _LT__event_target_prefix_GT_19907_19911 = gamebase.systems.movement._LT__event_target_prefix_GT_;
gamebase.systems.movement._LT__event_target_prefix_GT_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-component","to-component",-1612020326),new cljs.core.Keyword("gamebase.systems.movement","path-trailer","gamebase.systems.movement/path-trailer",-1535007830)], null);

try{gamebase.systems.movement.mk_path_trailer = ((function (_LT__event_target_prefix_GT_19907_19911){
return (function gamebase$systems$movement$mk_path_trailer(entity_or_id,key,p__19908){
var map__19909 = p__19908;
var map__19909__$1 = ((((!((map__19909 == null)))?(((((map__19909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19909):map__19909);
var path_history_size = cljs.core.get.call(null,map__19909__$1,new cljs.core.Keyword(null,"path-history-size","path-history-size",1798214863));
return cljs.core.assoc.call(null,gamebase.ecs.mk_component.call(null,new cljs.core.Keyword("gamebase.systems.movement","movement","gamebase.systems.movement/movement",-452520131),entity_or_id,key,new cljs.core.Keyword("gamebase.systems.movement","path-trailer","gamebase.systems.movement/path-trailer",-1535007830)),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470));
});})(_LT__event_target_prefix_GT_19907_19911))
;
}finally {gamebase.systems.movement._LT__event_target_prefix_GT_ = _LT__event_target_prefix_GT_19907_19911;
}
//# sourceMappingURL=movement.js.map
