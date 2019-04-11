// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.virtual_timer');
goog.require('cljs.core');
gamebase.virtual_timer.mk_timer = (function gamebase$virtual_timer$mk_timer(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running?","running?",-257884763),false], null);
});
gamebase.virtual_timer.run = (function gamebase$virtual_timer$run(timer,virtual_time){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running?","running?",-257884763),true,new cljs.core.Keyword(null,"offset","offset",296498311),(virtual_time - (millis() | (0)))], null);
});
gamebase.virtual_timer.stop = (function gamebase$virtual_timer$stop(timer){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running?","running?",-257884763),false], null);
});
gamebase.virtual_timer.running_QMARK_ = (function gamebase$virtual_timer$running_QMARK_(timer){
return new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(timer);
});
gamebase.virtual_timer.get_time = (function gamebase$virtual_timer$get_time(p__19997){
var map__19998 = p__19997;
var map__19998__$1 = ((((!((map__19998 == null)))?(((((map__19998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19998):map__19998);
var running_QMARK_ = cljs.core.get.call(null,map__19998__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var offset = cljs.core.get.call(null,map__19998__$1,new cljs.core.Keyword(null,"offset","offset",296498311));

if(cljs.core.truth_(running_QMARK_)){
} else {
throw (new Error("Assert failed: running?"));
}

return ((millis() | (0)) + offset);
});

//# sourceMappingURL=virtual_timer.js.map
