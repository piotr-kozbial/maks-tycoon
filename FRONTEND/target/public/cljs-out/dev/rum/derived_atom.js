// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__30393 = arguments.length;
switch (G__30393) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__30394 = opts;
var map__30394__$1 = ((((!((map__30394 == null)))?(((((map__30394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);
var ref = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__30396 = cljs.core.count.call(null,refs);
switch (G__30396) {
case (1):
var vec__30397 = refs;
var a = cljs.core.nth.call(null,vec__30397,(0),null);
return ((function (vec__30397,a,G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__30397,a,G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__30400 = refs;
var a = cljs.core.nth.call(null,vec__30400,(0),null);
var b = cljs.core.nth.call(null,vec__30400,(1),null);
return ((function (vec__30400,a,b,G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__30400,a,b,G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__30403 = refs;
var a = cljs.core.nth.call(null,vec__30403,(0),null);
var b = cljs.core.nth.call(null,vec__30403,(1),null);
var c = cljs.core.nth.call(null,vec__30403,(2),null);
return ((function (vec__30403,a,b,c,G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__30403,a,b,c,G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__30396,map__30394,map__30394__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__30406 = ref;
cljs.core.reset_BANG_.call(null,G__30406,recalc.call(null));

return G__30406;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__30394,map__30394__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__30394,map__30394__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__30394,map__30394__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__30394,map__30394__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__30407_30413 = cljs.core.seq.call(null,refs);
var chunk__30408_30414 = null;
var count__30409_30415 = (0);
var i__30410_30416 = (0);
while(true){
if((i__30410_30416 < count__30409_30415)){
var ref_30417__$1 = cljs.core._nth.call(null,chunk__30408_30414,i__30410_30416);
cljs.core.add_watch.call(null,ref_30417__$1,key,watch);


var G__30418 = seq__30407_30413;
var G__30419 = chunk__30408_30414;
var G__30420 = count__30409_30415;
var G__30421 = (i__30410_30416 + (1));
seq__30407_30413 = G__30418;
chunk__30408_30414 = G__30419;
count__30409_30415 = G__30420;
i__30410_30416 = G__30421;
continue;
} else {
var temp__5457__auto___30422 = cljs.core.seq.call(null,seq__30407_30413);
if(temp__5457__auto___30422){
var seq__30407_30423__$1 = temp__5457__auto___30422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30407_30423__$1)){
var c__4351__auto___30424 = cljs.core.chunk_first.call(null,seq__30407_30423__$1);
var G__30425 = cljs.core.chunk_rest.call(null,seq__30407_30423__$1);
var G__30426 = c__4351__auto___30424;
var G__30427 = cljs.core.count.call(null,c__4351__auto___30424);
var G__30428 = (0);
seq__30407_30413 = G__30425;
chunk__30408_30414 = G__30426;
count__30409_30415 = G__30427;
i__30410_30416 = G__30428;
continue;
} else {
var ref_30429__$1 = cljs.core.first.call(null,seq__30407_30423__$1);
cljs.core.add_watch.call(null,ref_30429__$1,key,watch);


var G__30430 = cljs.core.next.call(null,seq__30407_30423__$1);
var G__30431 = null;
var G__30432 = (0);
var G__30433 = (0);
seq__30407_30413 = G__30430;
chunk__30408_30414 = G__30431;
count__30409_30415 = G__30432;
i__30410_30416 = G__30433;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map
