// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26271){
var map__26272 = p__26271;
var map__26272__$1 = ((((!((map__26272 == null)))?(((((map__26272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26272):map__26272);
var m = map__26272__$1;
var n = cljs.core.get.call(null,map__26272__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__26274_26296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26275_26297 = null;
var count__26276_26298 = (0);
var i__26277_26299 = (0);
while(true){
if((i__26277_26299 < count__26276_26298)){
var f_26300 = cljs.core._nth.call(null,chunk__26275_26297,i__26277_26299);
cljs.core.println.call(null,"  ",f_26300);


var G__26301 = seq__26274_26296;
var G__26302 = chunk__26275_26297;
var G__26303 = count__26276_26298;
var G__26304 = (i__26277_26299 + (1));
seq__26274_26296 = G__26301;
chunk__26275_26297 = G__26302;
count__26276_26298 = G__26303;
i__26277_26299 = G__26304;
continue;
} else {
var temp__5457__auto___26305 = cljs.core.seq.call(null,seq__26274_26296);
if(temp__5457__auto___26305){
var seq__26274_26306__$1 = temp__5457__auto___26305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26274_26306__$1)){
var c__4351__auto___26307 = cljs.core.chunk_first.call(null,seq__26274_26306__$1);
var G__26308 = cljs.core.chunk_rest.call(null,seq__26274_26306__$1);
var G__26309 = c__4351__auto___26307;
var G__26310 = cljs.core.count.call(null,c__4351__auto___26307);
var G__26311 = (0);
seq__26274_26296 = G__26308;
chunk__26275_26297 = G__26309;
count__26276_26298 = G__26310;
i__26277_26299 = G__26311;
continue;
} else {
var f_26312 = cljs.core.first.call(null,seq__26274_26306__$1);
cljs.core.println.call(null,"  ",f_26312);


var G__26313 = cljs.core.next.call(null,seq__26274_26306__$1);
var G__26314 = null;
var G__26315 = (0);
var G__26316 = (0);
seq__26274_26296 = G__26313;
chunk__26275_26297 = G__26314;
count__26276_26298 = G__26315;
i__26277_26299 = G__26316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26317);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26317)))?cljs.core.second.call(null,arglists_26317):arglists_26317));
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
var seq__26278_26318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26279_26319 = null;
var count__26280_26320 = (0);
var i__26281_26321 = (0);
while(true){
if((i__26281_26321 < count__26280_26320)){
var vec__26282_26322 = cljs.core._nth.call(null,chunk__26279_26319,i__26281_26321);
var name_26323 = cljs.core.nth.call(null,vec__26282_26322,(0),null);
var map__26285_26324 = cljs.core.nth.call(null,vec__26282_26322,(1),null);
var map__26285_26325__$1 = ((((!((map__26285_26324 == null)))?(((((map__26285_26324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26285_26324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26285_26324):map__26285_26324);
var doc_26326 = cljs.core.get.call(null,map__26285_26325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26327 = cljs.core.get.call(null,map__26285_26325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26323);

cljs.core.println.call(null," ",arglists_26327);

if(cljs.core.truth_(doc_26326)){
cljs.core.println.call(null," ",doc_26326);
} else {
}


var G__26328 = seq__26278_26318;
var G__26329 = chunk__26279_26319;
var G__26330 = count__26280_26320;
var G__26331 = (i__26281_26321 + (1));
seq__26278_26318 = G__26328;
chunk__26279_26319 = G__26329;
count__26280_26320 = G__26330;
i__26281_26321 = G__26331;
continue;
} else {
var temp__5457__auto___26332 = cljs.core.seq.call(null,seq__26278_26318);
if(temp__5457__auto___26332){
var seq__26278_26333__$1 = temp__5457__auto___26332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26278_26333__$1)){
var c__4351__auto___26334 = cljs.core.chunk_first.call(null,seq__26278_26333__$1);
var G__26335 = cljs.core.chunk_rest.call(null,seq__26278_26333__$1);
var G__26336 = c__4351__auto___26334;
var G__26337 = cljs.core.count.call(null,c__4351__auto___26334);
var G__26338 = (0);
seq__26278_26318 = G__26335;
chunk__26279_26319 = G__26336;
count__26280_26320 = G__26337;
i__26281_26321 = G__26338;
continue;
} else {
var vec__26287_26339 = cljs.core.first.call(null,seq__26278_26333__$1);
var name_26340 = cljs.core.nth.call(null,vec__26287_26339,(0),null);
var map__26290_26341 = cljs.core.nth.call(null,vec__26287_26339,(1),null);
var map__26290_26342__$1 = ((((!((map__26290_26341 == null)))?(((((map__26290_26341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26290_26341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26290_26341):map__26290_26341);
var doc_26343 = cljs.core.get.call(null,map__26290_26342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26344 = cljs.core.get.call(null,map__26290_26342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26340);

cljs.core.println.call(null," ",arglists_26344);

if(cljs.core.truth_(doc_26343)){
cljs.core.println.call(null," ",doc_26343);
} else {
}


var G__26345 = cljs.core.next.call(null,seq__26278_26333__$1);
var G__26346 = null;
var G__26347 = (0);
var G__26348 = (0);
seq__26278_26318 = G__26345;
chunk__26279_26319 = G__26346;
count__26280_26320 = G__26347;
i__26281_26321 = G__26348;
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

var seq__26292 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26293 = null;
var count__26294 = (0);
var i__26295 = (0);
while(true){
if((i__26295 < count__26294)){
var role = cljs.core._nth.call(null,chunk__26293,i__26295);
var temp__5457__auto___26349__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26349__$1)){
var spec_26350 = temp__5457__auto___26349__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26350));
} else {
}


var G__26351 = seq__26292;
var G__26352 = chunk__26293;
var G__26353 = count__26294;
var G__26354 = (i__26295 + (1));
seq__26292 = G__26351;
chunk__26293 = G__26352;
count__26294 = G__26353;
i__26295 = G__26354;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__26292);
if(temp__5457__auto____$1){
var seq__26292__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26292__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26292__$1);
var G__26355 = cljs.core.chunk_rest.call(null,seq__26292__$1);
var G__26356 = c__4351__auto__;
var G__26357 = cljs.core.count.call(null,c__4351__auto__);
var G__26358 = (0);
seq__26292 = G__26355;
chunk__26293 = G__26356;
count__26294 = G__26357;
i__26295 = G__26358;
continue;
} else {
var role = cljs.core.first.call(null,seq__26292__$1);
var temp__5457__auto___26359__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26359__$2)){
var spec_26360 = temp__5457__auto___26359__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26360));
} else {
}


var G__26361 = cljs.core.next.call(null,seq__26292__$1);
var G__26362 = null;
var G__26363 = (0);
var G__26364 = (0);
seq__26292 = G__26361;
chunk__26293 = G__26362;
count__26294 = G__26363;
i__26295 = G__26364;
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
