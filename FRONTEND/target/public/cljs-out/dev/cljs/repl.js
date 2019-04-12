// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35307){
var map__35308 = p__35307;
var map__35308__$1 = ((((!((map__35308 == null)))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var m = map__35308__$1;
var n = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35310_35332 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35311_35333 = null;
var count__35312_35334 = (0);
var i__35313_35335 = (0);
while(true){
if((i__35313_35335 < count__35312_35334)){
var f_35336 = cljs.core._nth.call(null,chunk__35311_35333,i__35313_35335);
cljs.core.println.call(null,"  ",f_35336);


var G__35337 = seq__35310_35332;
var G__35338 = chunk__35311_35333;
var G__35339 = count__35312_35334;
var G__35340 = (i__35313_35335 + (1));
seq__35310_35332 = G__35337;
chunk__35311_35333 = G__35338;
count__35312_35334 = G__35339;
i__35313_35335 = G__35340;
continue;
} else {
var temp__5457__auto___35341 = cljs.core.seq.call(null,seq__35310_35332);
if(temp__5457__auto___35341){
var seq__35310_35342__$1 = temp__5457__auto___35341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35310_35342__$1)){
var c__4351__auto___35343 = cljs.core.chunk_first.call(null,seq__35310_35342__$1);
var G__35344 = cljs.core.chunk_rest.call(null,seq__35310_35342__$1);
var G__35345 = c__4351__auto___35343;
var G__35346 = cljs.core.count.call(null,c__4351__auto___35343);
var G__35347 = (0);
seq__35310_35332 = G__35344;
chunk__35311_35333 = G__35345;
count__35312_35334 = G__35346;
i__35313_35335 = G__35347;
continue;
} else {
var f_35348 = cljs.core.first.call(null,seq__35310_35342__$1);
cljs.core.println.call(null,"  ",f_35348);


var G__35349 = cljs.core.next.call(null,seq__35310_35342__$1);
var G__35350 = null;
var G__35351 = (0);
var G__35352 = (0);
seq__35310_35332 = G__35349;
chunk__35311_35333 = G__35350;
count__35312_35334 = G__35351;
i__35313_35335 = G__35352;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35353 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35353);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35353)))?cljs.core.second.call(null,arglists_35353):arglists_35353));
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
var seq__35314_35354 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35315_35355 = null;
var count__35316_35356 = (0);
var i__35317_35357 = (0);
while(true){
if((i__35317_35357 < count__35316_35356)){
var vec__35318_35358 = cljs.core._nth.call(null,chunk__35315_35355,i__35317_35357);
var name_35359 = cljs.core.nth.call(null,vec__35318_35358,(0),null);
var map__35321_35360 = cljs.core.nth.call(null,vec__35318_35358,(1),null);
var map__35321_35361__$1 = ((((!((map__35321_35360 == null)))?(((((map__35321_35360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35321_35360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35321_35360):map__35321_35360);
var doc_35362 = cljs.core.get.call(null,map__35321_35361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35363 = cljs.core.get.call(null,map__35321_35361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35359);

cljs.core.println.call(null," ",arglists_35363);

if(cljs.core.truth_(doc_35362)){
cljs.core.println.call(null," ",doc_35362);
} else {
}


var G__35364 = seq__35314_35354;
var G__35365 = chunk__35315_35355;
var G__35366 = count__35316_35356;
var G__35367 = (i__35317_35357 + (1));
seq__35314_35354 = G__35364;
chunk__35315_35355 = G__35365;
count__35316_35356 = G__35366;
i__35317_35357 = G__35367;
continue;
} else {
var temp__5457__auto___35368 = cljs.core.seq.call(null,seq__35314_35354);
if(temp__5457__auto___35368){
var seq__35314_35369__$1 = temp__5457__auto___35368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35314_35369__$1)){
var c__4351__auto___35370 = cljs.core.chunk_first.call(null,seq__35314_35369__$1);
var G__35371 = cljs.core.chunk_rest.call(null,seq__35314_35369__$1);
var G__35372 = c__4351__auto___35370;
var G__35373 = cljs.core.count.call(null,c__4351__auto___35370);
var G__35374 = (0);
seq__35314_35354 = G__35371;
chunk__35315_35355 = G__35372;
count__35316_35356 = G__35373;
i__35317_35357 = G__35374;
continue;
} else {
var vec__35323_35375 = cljs.core.first.call(null,seq__35314_35369__$1);
var name_35376 = cljs.core.nth.call(null,vec__35323_35375,(0),null);
var map__35326_35377 = cljs.core.nth.call(null,vec__35323_35375,(1),null);
var map__35326_35378__$1 = ((((!((map__35326_35377 == null)))?(((((map__35326_35377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35326_35377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35326_35377):map__35326_35377);
var doc_35379 = cljs.core.get.call(null,map__35326_35378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35380 = cljs.core.get.call(null,map__35326_35378__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35376);

cljs.core.println.call(null," ",arglists_35380);

if(cljs.core.truth_(doc_35379)){
cljs.core.println.call(null," ",doc_35379);
} else {
}


var G__35381 = cljs.core.next.call(null,seq__35314_35369__$1);
var G__35382 = null;
var G__35383 = (0);
var G__35384 = (0);
seq__35314_35354 = G__35381;
chunk__35315_35355 = G__35382;
count__35316_35356 = G__35383;
i__35317_35357 = G__35384;
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

var seq__35328 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35329 = null;
var count__35330 = (0);
var i__35331 = (0);
while(true){
if((i__35331 < count__35330)){
var role = cljs.core._nth.call(null,chunk__35329,i__35331);
var temp__5457__auto___35385__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35385__$1)){
var spec_35386 = temp__5457__auto___35385__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35386));
} else {
}


var G__35387 = seq__35328;
var G__35388 = chunk__35329;
var G__35389 = count__35330;
var G__35390 = (i__35331 + (1));
seq__35328 = G__35387;
chunk__35329 = G__35388;
count__35330 = G__35389;
i__35331 = G__35390;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__35328);
if(temp__5457__auto____$1){
var seq__35328__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35328__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__35328__$1);
var G__35391 = cljs.core.chunk_rest.call(null,seq__35328__$1);
var G__35392 = c__4351__auto__;
var G__35393 = cljs.core.count.call(null,c__4351__auto__);
var G__35394 = (0);
seq__35328 = G__35391;
chunk__35329 = G__35392;
count__35330 = G__35393;
i__35331 = G__35394;
continue;
} else {
var role = cljs.core.first.call(null,seq__35328__$1);
var temp__5457__auto___35395__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35395__$2)){
var spec_35396 = temp__5457__auto___35395__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35396));
} else {
}


var G__35397 = cljs.core.next.call(null,seq__35328__$1);
var G__35398 = null;
var G__35399 = (0);
var G__35400 = (0);
seq__35328 = G__35397;
chunk__35329 = G__35398;
count__35330 = G__35399;
i__35331 = G__35400;
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
