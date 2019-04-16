// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28323){
var map__28324 = p__28323;
var map__28324__$1 = ((((!((map__28324 == null)))?(((((map__28324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);
var m = map__28324__$1;
var n = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28326_28348 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28327_28349 = null;
var count__28328_28350 = (0);
var i__28329_28351 = (0);
while(true){
if((i__28329_28351 < count__28328_28350)){
var f_28352 = cljs.core._nth.call(null,chunk__28327_28349,i__28329_28351);
cljs.core.println.call(null,"  ",f_28352);


var G__28353 = seq__28326_28348;
var G__28354 = chunk__28327_28349;
var G__28355 = count__28328_28350;
var G__28356 = (i__28329_28351 + (1));
seq__28326_28348 = G__28353;
chunk__28327_28349 = G__28354;
count__28328_28350 = G__28355;
i__28329_28351 = G__28356;
continue;
} else {
var temp__5457__auto___28357 = cljs.core.seq.call(null,seq__28326_28348);
if(temp__5457__auto___28357){
var seq__28326_28358__$1 = temp__5457__auto___28357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28326_28358__$1)){
var c__4351__auto___28359 = cljs.core.chunk_first.call(null,seq__28326_28358__$1);
var G__28360 = cljs.core.chunk_rest.call(null,seq__28326_28358__$1);
var G__28361 = c__4351__auto___28359;
var G__28362 = cljs.core.count.call(null,c__4351__auto___28359);
var G__28363 = (0);
seq__28326_28348 = G__28360;
chunk__28327_28349 = G__28361;
count__28328_28350 = G__28362;
i__28329_28351 = G__28363;
continue;
} else {
var f_28364 = cljs.core.first.call(null,seq__28326_28358__$1);
cljs.core.println.call(null,"  ",f_28364);


var G__28365 = cljs.core.next.call(null,seq__28326_28358__$1);
var G__28366 = null;
var G__28367 = (0);
var G__28368 = (0);
seq__28326_28348 = G__28365;
chunk__28327_28349 = G__28366;
count__28328_28350 = G__28367;
i__28329_28351 = G__28368;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28369 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28369);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28369)))?cljs.core.second.call(null,arglists_28369):arglists_28369));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28330_28370 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28331_28371 = null;
var count__28332_28372 = (0);
var i__28333_28373 = (0);
while(true){
if((i__28333_28373 < count__28332_28372)){
var vec__28334_28374 = cljs.core._nth.call(null,chunk__28331_28371,i__28333_28373);
var name_28375 = cljs.core.nth.call(null,vec__28334_28374,(0),null);
var map__28337_28376 = cljs.core.nth.call(null,vec__28334_28374,(1),null);
var map__28337_28377__$1 = ((((!((map__28337_28376 == null)))?(((((map__28337_28376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28337_28376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337_28376):map__28337_28376);
var doc_28378 = cljs.core.get.call(null,map__28337_28377__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28379 = cljs.core.get.call(null,map__28337_28377__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28375);

cljs.core.println.call(null," ",arglists_28379);

if(cljs.core.truth_(doc_28378)){
cljs.core.println.call(null," ",doc_28378);
} else {
}


var G__28380 = seq__28330_28370;
var G__28381 = chunk__28331_28371;
var G__28382 = count__28332_28372;
var G__28383 = (i__28333_28373 + (1));
seq__28330_28370 = G__28380;
chunk__28331_28371 = G__28381;
count__28332_28372 = G__28382;
i__28333_28373 = G__28383;
continue;
} else {
var temp__5457__auto___28384 = cljs.core.seq.call(null,seq__28330_28370);
if(temp__5457__auto___28384){
var seq__28330_28385__$1 = temp__5457__auto___28384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28330_28385__$1)){
var c__4351__auto___28386 = cljs.core.chunk_first.call(null,seq__28330_28385__$1);
var G__28387 = cljs.core.chunk_rest.call(null,seq__28330_28385__$1);
var G__28388 = c__4351__auto___28386;
var G__28389 = cljs.core.count.call(null,c__4351__auto___28386);
var G__28390 = (0);
seq__28330_28370 = G__28387;
chunk__28331_28371 = G__28388;
count__28332_28372 = G__28389;
i__28333_28373 = G__28390;
continue;
} else {
var vec__28339_28391 = cljs.core.first.call(null,seq__28330_28385__$1);
var name_28392 = cljs.core.nth.call(null,vec__28339_28391,(0),null);
var map__28342_28393 = cljs.core.nth.call(null,vec__28339_28391,(1),null);
var map__28342_28394__$1 = ((((!((map__28342_28393 == null)))?(((((map__28342_28393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28342_28393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28342_28393):map__28342_28393);
var doc_28395 = cljs.core.get.call(null,map__28342_28394__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28396 = cljs.core.get.call(null,map__28342_28394__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28392);

cljs.core.println.call(null," ",arglists_28396);

if(cljs.core.truth_(doc_28395)){
cljs.core.println.call(null," ",doc_28395);
} else {
}


var G__28397 = cljs.core.next.call(null,seq__28330_28385__$1);
var G__28398 = null;
var G__28399 = (0);
var G__28400 = (0);
seq__28330_28370 = G__28397;
chunk__28331_28371 = G__28398;
count__28332_28372 = G__28399;
i__28333_28373 = G__28400;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28344 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28345 = null;
var count__28346 = (0);
var i__28347 = (0);
while(true){
if((i__28347 < count__28346)){
var role = cljs.core._nth.call(null,chunk__28345,i__28347);
var temp__5457__auto___28401__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28401__$1)){
var spec_28402 = temp__5457__auto___28401__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28402));
} else {
}


var G__28403 = seq__28344;
var G__28404 = chunk__28345;
var G__28405 = count__28346;
var G__28406 = (i__28347 + (1));
seq__28344 = G__28403;
chunk__28345 = G__28404;
count__28346 = G__28405;
i__28347 = G__28406;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28344);
if(temp__5457__auto____$1){
var seq__28344__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28344__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28344__$1);
var G__28407 = cljs.core.chunk_rest.call(null,seq__28344__$1);
var G__28408 = c__4351__auto__;
var G__28409 = cljs.core.count.call(null,c__4351__auto__);
var G__28410 = (0);
seq__28344 = G__28407;
chunk__28345 = G__28408;
count__28346 = G__28409;
i__28347 = G__28410;
continue;
} else {
var role = cljs.core.first.call(null,seq__28344__$1);
var temp__5457__auto___28411__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28411__$2)){
var spec_28412 = temp__5457__auto___28411__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28412));
} else {
}


var G__28413 = cljs.core.next.call(null,seq__28344__$1);
var G__28414 = null;
var G__28415 = (0);
var G__28416 = (0);
seq__28344 = G__28413;
chunk__28345 = G__28414;
count__28346 = G__28415;
i__28347 = G__28416;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
