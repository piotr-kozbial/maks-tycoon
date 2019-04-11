// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.event_queue');
goog.require('cljs.core');
gamebase.event_queue.create = (function gamebase$event_queue$create(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"set_","set_",-1108210561),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"sq","sq",-1529305122),(0),new cljs.core.Keyword(null,"n","n",562130025),(0)], null);
});
gamebase.event_queue.put_event = (function gamebase$event_queue$put_event(q,event){
if(cljs.core.truth_(event)){
} else {
cljs.core.println.call(null,"ALARM! event is nil!!!");

throw (new Error("Assert failed: false"));

}

if(cljs.core._EQ_.call(null,event,cljs.core.List.EMPTY)){
cljs.core.println.call(null,"ALARM! event is ()!!!");

throw (new Error("Assert failed: false"));

} else {
}

var map__19804 = q;
var map__19804__$1 = ((((!((map__19804 == null)))?(((((map__19804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19804):map__19804);
var set_ = cljs.core.get.call(null,map__19804__$1,new cljs.core.Keyword(null,"set_","set_",-1108210561));
var sq = cljs.core.get.call(null,map__19804__$1,new cljs.core.Keyword(null,"sq","sq",-1529305122));
var n = cljs.core.get.call(null,map__19804__$1,new cljs.core.Keyword(null,"n","n",562130025));
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"set_","set_",-1108210561),cljs.core.conj.call(null,set_,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"sq","sq",-1529305122),sq)),new cljs.core.Keyword(null,"sq","sq",-1529305122),(sq + (1)),new cljs.core.Keyword(null,"n","n",562130025),(n + (1)));
});
gamebase.event_queue.put_all_events = (function gamebase$event_queue$put_all_events(q,events){
return cljs.core.reduce.call(null,gamebase.event_queue.put_event,q,events);
});
gamebase.event_queue.take_event = (function gamebase$event_queue$take_event(q){
var all = new cljs.core.Keyword(null,"set_","set_",-1108210561).cljs$core$IFn$_invoke$arity$1(q);
var all_sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787),all);
var soonest_event = cljs.core.first.call(null,all_sorted);
var rest_of_events = cljs.core.rest.call(null,all_sorted);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soonest_event,cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"set_","set_",-1108210561),rest_of_events,new cljs.core.Keyword(null,"n","n",562130025),(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(q) - (1)))], null);
});
gamebase.event_queue.soonest_event_time = (function gamebase$event_queue$soonest_event_time(q){
var all = new cljs.core.Keyword(null,"set_","set_",-1108210561).cljs$core$IFn$_invoke$arity$1(q);
return cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787),all)));
});
gamebase.event_queue.take_events_until = (function gamebase$event_queue$take_events_until(q,time){
var all = new cljs.core.Keyword(null,"set_","set_",-1108210561).cljs$core$IFn$_invoke$arity$1(q);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sort_by.call(null,((function (all){
return (function (p1__19807_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(p1__19807_SHARP_),new cljs.core.Keyword(null,"sq","sq",-1529305122).cljs$core$IFn$_invoke$arity$1(p1__19807_SHARP_)],null));
});})(all))
,cljs.core.filter.call(null,((function (all){
return (function (p1__19806_SHARP_){
return (new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(p1__19806_SHARP_) <= time);
});})(all))
,all)),cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"set_","set_",-1108210561),cljs.core.remove.call(null,((function (all){
return (function (p1__19808_SHARP_){
return (new cljs.core.Keyword("gamebase.event-queue","time","gamebase.event-queue/time",-1714294787).cljs$core$IFn$_invoke$arity$1(p1__19808_SHARP_) <= time);
});})(all))
,all))], null);
});

//# sourceMappingURL=event_queue.js.map
