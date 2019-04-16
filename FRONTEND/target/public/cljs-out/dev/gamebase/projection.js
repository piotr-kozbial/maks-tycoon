// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.projection');
goog.require('cljs.core');
gamebase.projection.absolute = (function gamebase$projection$absolute(a){
if((a >= (0))){
return a;
} else {
return (- a);
}
});
gamebase.projection.projection_config = (function gamebase$projection$projection_config(k,tx,ty,wc,hc){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ty","ty",158290825),ty,new cljs.core.Keyword(null,"wc","wc",19942463),wc,new cljs.core.Keyword(null,"hc","hc",-32184781),hc], null);
});


gamebase.projection.world_point = (function gamebase$projection$world_point(var_args){
var G__29806 = arguments.length;
switch (G__29806) {
case 1:
return gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$1 = (function (p__29807){
var vec__29808 = p__29807;
var x = cljs.core.nth.call(null,vec__29808,(0),null);
var y = cljs.core.nth.call(null,vec__29808,(1),null);
if(typeof x === 'number'){
} else {
throw (new Error("Assert failed: (number? x)"));
}

if(typeof y === 'number'){
} else {
throw (new Error("Assert failed: (number? y)"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),x,y], null);
});

gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$2 = (function (p__29811,p__29812){
var map__29813 = p__29811;
var map__29813__$1 = ((((!((map__29813 == null)))?(((((map__29813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29813):map__29813);
var conf = map__29813__$1;
var k = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__29814 = p__29812;
var coord_sys = cljs.core.nth.call(null,vec__29814,(0),null);
var x = cljs.core.nth.call(null,vec__29814,(1),null);
var y = cljs.core.nth.call(null,vec__29814,(2),null);
var p = vec__29814;
var G__29818 = coord_sys;
var G__29818__$1 = (((G__29818 instanceof cljs.core.Keyword))?G__29818.fqn:null);
switch (G__29818__$1) {
case "world":
return p;

break;
case "scaled":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),(x / k),(y / k)], null);

break;
case "view":
return gamebase.projection.world_point.call(null,conf,gamebase.projection.scaled_point.call(null,conf,p));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29818__$1)].join('')));

}
});

gamebase.projection.world_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.scaled_point = (function gamebase$projection$scaled_point(var_args){
var G__29822 = arguments.length;
switch (G__29822) {
case 1:
return gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$1 = (function (p__29823){
var vec__29824 = p__29823;
var x = cljs.core.nth.call(null,vec__29824,(0),null);
var y = cljs.core.nth.call(null,vec__29824,(1),null);
if(typeof x === 'number'){
} else {
throw (new Error("Assert failed: (number? x)"));
}

if(typeof y === 'number'){
} else {
throw (new Error("Assert failed: (number? y)"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaled","scaled",-1947949285),x,y], null);
});

gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$2 = (function (p__29827,p__29828){
var map__29829 = p__29827;
var map__29829__$1 = ((((!((map__29829 == null)))?(((((map__29829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);
var k = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__29830 = p__29828;
var coord_sys = cljs.core.nth.call(null,vec__29830,(0),null);
var x = cljs.core.nth.call(null,vec__29830,(1),null);
var y = cljs.core.nth.call(null,vec__29830,(2),null);
var p = vec__29830;
var G__29834 = coord_sys;
var G__29834__$1 = (((G__29834 instanceof cljs.core.Keyword))?G__29834.fqn:null);
switch (G__29834__$1) {
case "world":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaled","scaled",-1947949285),(k * x),(k * y)], null);

break;
case "scaled":
return p;

break;
case "view":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaled","scaled",-1947949285),(x - tx),(y - ty)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29834__$1)].join('')));

}
});

gamebase.projection.scaled_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.view_point = (function gamebase$projection$view_point(var_args){
var G__29838 = arguments.length;
switch (G__29838) {
case 1:
return gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$1 = (function (p__29839){
var vec__29840 = p__29839;
var x = cljs.core.nth.call(null,vec__29840,(0),null);
var y = cljs.core.nth.call(null,vec__29840,(1),null);
if(typeof x === 'number'){
} else {
throw (new Error("Assert failed: (number? x)"));
}

if(typeof y === 'number'){
} else {
throw (new Error("Assert failed: (number? y)"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),x,y], null);
});

gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$2 = (function (p__29843,p__29844){
var map__29845 = p__29843;
var map__29845__$1 = ((((!((map__29845 == null)))?(((((map__29845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29845):map__29845);
var conf = map__29845__$1;
var k = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__29846 = p__29844;
var coord_sys = cljs.core.nth.call(null,vec__29846,(0),null);
var x = cljs.core.nth.call(null,vec__29846,(1),null);
var y = cljs.core.nth.call(null,vec__29846,(2),null);
var p = vec__29846;
var G__29850 = coord_sys;
var G__29850__$1 = (((G__29850 instanceof cljs.core.Keyword))?G__29850.fqn:null);
switch (G__29850__$1) {
case "world":
return gamebase.projection.view_point.call(null,conf,gamebase.projection.scaled_point.call(null,conf,p));

break;
case "scaled":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),(x + tx),(y + ty)], null);

break;
case "view":
return p;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29850__$1)].join('')));

}
});

gamebase.projection.view_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.world_x = (function gamebase$projection$world_x(conf,p){
var vec__29853 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29853,(0),null);
var x = cljs.core.nth.call(null,vec__29853,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29853,(2),null);
return x;
});
gamebase.projection.world_y = (function gamebase$projection$world_y(conf,p){
var vec__29856 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29856,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29856,(1),null);
var y = cljs.core.nth.call(null,vec__29856,(2),null);
return y;
});
gamebase.projection.world_coords = (function gamebase$projection$world_coords(conf,p){
var vec__29859 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29859,(0),null);
var x = cljs.core.nth.call(null,vec__29859,(1),null);
var y = cljs.core.nth.call(null,vec__29859,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gamebase.projection.scaled_x = (function gamebase$projection$scaled_x(conf,p){
var vec__29862 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29862,(0),null);
var x = cljs.core.nth.call(null,vec__29862,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29862,(2),null);
return x;
});
gamebase.projection.scaled_y = (function gamebase$projection$scaled_y(conf,p){
var vec__29865 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29865,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29865,(1),null);
var y = cljs.core.nth.call(null,vec__29865,(2),null);
return y;
});
gamebase.projection.scaled_coords = (function gamebase$projection$scaled_coords(conf,p){
var vec__29868 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29868,(0),null);
var x = cljs.core.nth.call(null,vec__29868,(1),null);
var y = cljs.core.nth.call(null,vec__29868,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gamebase.projection.view_x = (function gamebase$projection$view_x(conf,p){
var vec__29871 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29871,(0),null);
var x = cljs.core.nth.call(null,vec__29871,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29871,(2),null);
return x;
});
gamebase.projection.view_y = (function gamebase$projection$view_y(conf,p){
var vec__29874 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29874,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29874,(1),null);
var y = cljs.core.nth.call(null,vec__29874,(2),null);
return y;
});
gamebase.projection.view_coords = (function gamebase$projection$view_coords(conf,p){
var vec__29877 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29877,(0),null);
var x = cljs.core.nth.call(null,vec__29877,(1),null);
var y = cljs.core.nth.call(null,vec__29877,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});


gamebase.projection.world_length = (function gamebase$projection$world_length(var_args){
var G__29881 = arguments.length;
switch (G__29881) {
case 1:
return gamebase.projection.world_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamebase.projection.world_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.projection.world_length.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(typeof l === 'number'){
} else {
throw (new Error("Assert failed: (number? l)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),l], null);
});

gamebase.projection.world_length.cljs$core$IFn$_invoke$arity$2 = (function (p__29882,p__29883){
var map__29884 = p__29882;
var map__29884__$1 = ((((!((map__29884 == null)))?(((((map__29884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29884):map__29884);
var conf = map__29884__$1;
var k = cljs.core.get.call(null,map__29884__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__29885 = p__29883;
var coord_sys = cljs.core.nth.call(null,vec__29885,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29885,(1),null);
var l = vec__29885;
var G__29889 = coord_sys;
var G__29889__$1 = (((G__29889 instanceof cljs.core.Keyword))?G__29889.fqn:null);
switch (G__29889__$1) {
case "world":
return l;

break;
case "scaled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),(l_SINGLEQUOTE_ / k)], null);

break;
case "view":
return gamebase.projection.world_length.call(null,conf,gamebase.projection.scaled_length.call(null,conf,l));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29889__$1)].join('')));

}
});

gamebase.projection.world_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.scaled_length = (function gamebase$projection$scaled_length(var_args){
var G__29893 = arguments.length;
switch (G__29893) {
case 1:
return gamebase.projection.scaled_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamebase.projection.scaled_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.projection.scaled_length.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(typeof l === 'number'){
} else {
throw (new Error("Assert failed: (number? l)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaled","scaled",-1947949285),l], null);
});

gamebase.projection.scaled_length.cljs$core$IFn$_invoke$arity$2 = (function (p__29894,p__29895){
var map__29896 = p__29894;
var map__29896__$1 = ((((!((map__29896 == null)))?(((((map__29896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29896):map__29896);
var k = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__29897 = p__29895;
var coord_sys = cljs.core.nth.call(null,vec__29897,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29897,(1),null);
var l = vec__29897;
var G__29901 = coord_sys;
var G__29901__$1 = (((G__29901 instanceof cljs.core.Keyword))?G__29901.fqn:null);
switch (G__29901__$1) {
case "world":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaled","scaled",-1947949285),(k * l_SINGLEQUOTE_)], null);

break;
case "scaled":
return l;

break;
case "view":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaled","scaled",-1947949285),l_SINGLEQUOTE_], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29901__$1)].join('')));

}
});

gamebase.projection.scaled_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.view_length = (function gamebase$projection$view_length(var_args){
var G__29905 = arguments.length;
switch (G__29905) {
case 1:
return gamebase.projection.view_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamebase.projection.view_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.projection.view_length.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(typeof l === 'number'){
} else {
throw (new Error("Assert failed: (number? l)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),l], null);
});

gamebase.projection.view_length.cljs$core$IFn$_invoke$arity$2 = (function (p__29906,p__29907){
var map__29908 = p__29906;
var map__29908__$1 = ((((!((map__29908 == null)))?(((((map__29908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29908):map__29908);
var conf = map__29908__$1;
var k = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__29909 = p__29907;
var coord_sys = cljs.core.nth.call(null,vec__29909,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29909,(1),null);
var l = vec__29909;
var G__29913 = coord_sys;
var G__29913__$1 = (((G__29913 instanceof cljs.core.Keyword))?G__29913.fqn:null);
switch (G__29913__$1) {
case "world":
return gamebase.projection.view_length.call(null,conf,gamebase.projection.scaled_length.call(null,conf,l));

break;
case "scaled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),l_SINGLEQUOTE_], null);

break;
case "view":
return l;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29913__$1)].join('')));

}
});

gamebase.projection.view_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.world_span_x = (function gamebase$projection$world_span_x(p1,p2){
var vec__29916 = gamebase.projection.world_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29916,(0),null);
var x1 = cljs.core.nth.call(null,vec__29916,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29916,(2),null);
var vec__29919 = gamebase.projection.world_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29919,(0),null);
var x2 = cljs.core.nth.call(null,vec__29919,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__29919,(2),null);
return gamebase.projection.world_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.world_span_y = (function gamebase$projection$world_span_y(p1,p2){
var vec__29922 = gamebase.projection.world_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29922,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29922,(1),null);
var y1 = cljs.core.nth.call(null,vec__29922,(2),null);
var vec__29925 = gamebase.projection.world_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29925,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__29925,(1),null);
var y2 = cljs.core.nth.call(null,vec__29925,(2),null);
return gamebase.projection.world_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.scaled_span_x = (function gamebase$projection$scaled_span_x(p1,p2){
var vec__29928 = gamebase.projection.scaled_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29928,(0),null);
var x1 = cljs.core.nth.call(null,vec__29928,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29928,(2),null);
var vec__29931 = gamebase.projection.scaled_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29931,(0),null);
var x2 = cljs.core.nth.call(null,vec__29931,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__29931,(2),null);
return gamebase.projection.scaled_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.scaled_span_y = (function gamebase$projection$scaled_span_y(p1,p2){
var vec__29934 = gamebase.projection.scaled_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29934,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29934,(1),null);
var y1 = cljs.core.nth.call(null,vec__29934,(2),null);
var vec__29937 = gamebase.projection.scaled_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29937,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__29937,(1),null);
var y2 = cljs.core.nth.call(null,vec__29937,(2),null);
return gamebase.projection.scaled_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.view_span_x = (function gamebase$projection$view_span_x(p1,p2){
var vec__29940 = gamebase.projection.view_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29940,(0),null);
var x1 = cljs.core.nth.call(null,vec__29940,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29940,(2),null);
var vec__29943 = gamebase.projection.view_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29943,(0),null);
var x2 = cljs.core.nth.call(null,vec__29943,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__29943,(2),null);
return gamebase.projection.view_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.view_span_y = (function gamebase$projection$view_span_y(p1,p2){
var vec__29946 = gamebase.projection.view_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29946,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29946,(1),null);
var y1 = cljs.core.nth.call(null,vec__29946,(2),null);
var vec__29949 = gamebase.projection.view_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29949,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__29949,(1),null);
var y2 = cljs.core.nth.call(null,vec__29949,(2),null);
return gamebase.projection.view_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.W0 = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
gamebase.projection.V0 = gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
gamebase.projection.V_ = (function gamebase$projection$V_(p__29952){
var map__29953 = p__29952;
var map__29953__$1 = ((((!((map__29953 == null)))?(((((map__29953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29953):map__29953);
var wc = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"wc","wc",19942463));
var hc = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"hc","hc",-32184781));
return gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wc,hc], null));
});
gamebase.projection.Vc = (function gamebase$projection$Vc(conf){
var vec__29955 = gamebase.projection.view_coords.call(null,conf,gamebase.projection.V0);
var x0 = cljs.core.nth.call(null,vec__29955,(0),null);
var y0 = cljs.core.nth.call(null,vec__29955,(1),null);
var vec__29958 = gamebase.projection.view_coords.call(null,conf,gamebase.projection.V_.call(null,conf));
var x1 = cljs.core.nth.call(null,vec__29958,(0),null);
var y1 = cljs.core.nth.call(null,vec__29958,(1),null);
return gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x0 + x1) / (2)),((y0 + y1) / (2))], null));
});

//# sourceMappingURL=projection.js.map
