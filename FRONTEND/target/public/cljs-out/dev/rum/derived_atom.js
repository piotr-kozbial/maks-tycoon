// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__22752 = arguments.length;
switch (G__22752) {
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
var map__22753 = opts;
var map__22753__$1 = ((((!((map__22753 == null)))?(((((map__22753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22753):map__22753);
var ref = cljs.core.get.call(null,map__22753__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__22753__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__22755 = cljs.core.count.call(null,refs);
switch (G__22755) {
case (1):
var vec__22756 = refs;
var a = cljs.core.nth.call(null,vec__22756,(0),null);
return ((function (vec__22756,a,G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__22756,a,G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__22759 = refs;
var a = cljs.core.nth.call(null,vec__22759,(0),null);
var b = cljs.core.nth.call(null,vec__22759,(1),null);
return ((function (vec__22759,a,b,G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__22759,a,b,G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__22762 = refs;
var a = cljs.core.nth.call(null,vec__22762,(0),null);
var b = cljs.core.nth.call(null,vec__22762,(1),null);
var c = cljs.core.nth.call(null,vec__22762,(2),null);
return ((function (vec__22762,a,b,c,G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__22762,a,b,c,G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__22755,map__22753,map__22753__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__22765 = ref;
cljs.core.reset_BANG_.call(null,G__22765,recalc.call(null));

return G__22765;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__22753,map__22753__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__22753,map__22753__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__22753,map__22753__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__22753,map__22753__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__22766_22772 = cljs.core.seq.call(null,refs);
var chunk__22767_22773 = null;
var count__22768_22774 = (0);
var i__22769_22775 = (0);
while(true){
if((i__22769_22775 < count__22768_22774)){
var ref_22776__$1 = cljs.core._nth.call(null,chunk__22767_22773,i__22769_22775);
cljs.core.add_watch.call(null,ref_22776__$1,key,watch);


var G__22777 = seq__22766_22772;
var G__22778 = chunk__22767_22773;
var G__22779 = count__22768_22774;
var G__22780 = (i__22769_22775 + (1));
seq__22766_22772 = G__22777;
chunk__22767_22773 = G__22778;
count__22768_22774 = G__22779;
i__22769_22775 = G__22780;
continue;
} else {
var temp__5457__auto___22781 = cljs.core.seq.call(null,seq__22766_22772);
if(temp__5457__auto___22781){
var seq__22766_22782__$1 = temp__5457__auto___22781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22766_22782__$1)){
var c__4351__auto___22783 = cljs.core.chunk_first.call(null,seq__22766_22782__$1);
var G__22784 = cljs.core.chunk_rest.call(null,seq__22766_22782__$1);
var G__22785 = c__4351__auto___22783;
var G__22786 = cljs.core.count.call(null,c__4351__auto___22783);
var G__22787 = (0);
seq__22766_22772 = G__22784;
chunk__22767_22773 = G__22785;
count__22768_22774 = G__22786;
i__22769_22775 = G__22787;
continue;
} else {
var ref_22788__$1 = cljs.core.first.call(null,seq__22766_22782__$1);
cljs.core.add_watch.call(null,ref_22788__$1,key,watch);


var G__22789 = cljs.core.next.call(null,seq__22766_22782__$1);
var G__22790 = null;
var G__22791 = (0);
var G__22792 = (0);
seq__22766_22772 = G__22789;
chunk__22767_22773 = G__22790;
count__22768_22774 = G__22791;
i__22769_22775 = G__22792;
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
