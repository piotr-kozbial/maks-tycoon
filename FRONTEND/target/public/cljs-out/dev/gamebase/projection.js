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
var G__29808 = arguments.length;
switch (G__29808) {
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

gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$1 = (function (p__29809){
var vec__29810 = p__29809;
var x = cljs.core.nth.call(null,vec__29810,(0),null);
var y = cljs.core.nth.call(null,vec__29810,(1),null);
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

gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$2 = (function (p__29813,p__29814){
var map__29815 = p__29813;
var map__29815__$1 = ((((!((map__29815 == null)))?(((((map__29815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29815):map__29815);
var conf = map__29815__$1;
var k = cljs.core.get.call(null,map__29815__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__29815__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__29815__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__29816 = p__29814;
var coord_sys = cljs.core.nth.call(null,vec__29816,(0),null);
var x = cljs.core.nth.call(null,vec__29816,(1),null);
var y = cljs.core.nth.call(null,vec__29816,(2),null);
var p = vec__29816;
var G__29820 = coord_sys;
var G__29820__$1 = (((G__29820 instanceof cljs.core.Keyword))?G__29820.fqn:null);
switch (G__29820__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29820__$1)].join('')));

}
});

gamebase.projection.world_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.scaled_point = (function gamebase$projection$scaled_point(var_args){
var G__29824 = arguments.length;
switch (G__29824) {
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

gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$1 = (function (p__29825){
var vec__29826 = p__29825;
var x = cljs.core.nth.call(null,vec__29826,(0),null);
var y = cljs.core.nth.call(null,vec__29826,(1),null);
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

gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$2 = (function (p__29829,p__29830){
var map__29831 = p__29829;
var map__29831__$1 = ((((!((map__29831 == null)))?(((((map__29831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);
var k = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__29832 = p__29830;
var coord_sys = cljs.core.nth.call(null,vec__29832,(0),null);
var x = cljs.core.nth.call(null,vec__29832,(1),null);
var y = cljs.core.nth.call(null,vec__29832,(2),null);
var p = vec__29832;
var G__29836 = coord_sys;
var G__29836__$1 = (((G__29836 instanceof cljs.core.Keyword))?G__29836.fqn:null);
switch (G__29836__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29836__$1)].join('')));

}
});

gamebase.projection.scaled_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.view_point = (function gamebase$projection$view_point(var_args){
var G__29840 = arguments.length;
switch (G__29840) {
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

gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$1 = (function (p__29841){
var vec__29842 = p__29841;
var x = cljs.core.nth.call(null,vec__29842,(0),null);
var y = cljs.core.nth.call(null,vec__29842,(1),null);
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

gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$2 = (function (p__29845,p__29846){
var map__29847 = p__29845;
var map__29847__$1 = ((((!((map__29847 == null)))?(((((map__29847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29847):map__29847);
var conf = map__29847__$1;
var k = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__29848 = p__29846;
var coord_sys = cljs.core.nth.call(null,vec__29848,(0),null);
var x = cljs.core.nth.call(null,vec__29848,(1),null);
var y = cljs.core.nth.call(null,vec__29848,(2),null);
var p = vec__29848;
var G__29852 = coord_sys;
var G__29852__$1 = (((G__29852 instanceof cljs.core.Keyword))?G__29852.fqn:null);
switch (G__29852__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29852__$1)].join('')));

}
});

gamebase.projection.view_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.world_x = (function gamebase$projection$world_x(conf,p){
var vec__29855 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29855,(0),null);
var x = cljs.core.nth.call(null,vec__29855,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29855,(2),null);
return x;
});
gamebase.projection.world_y = (function gamebase$projection$world_y(conf,p){
var vec__29858 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29858,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29858,(1),null);
var y = cljs.core.nth.call(null,vec__29858,(2),null);
return y;
});
gamebase.projection.world_coords = (function gamebase$projection$world_coords(conf,p){
var vec__29861 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29861,(0),null);
var x = cljs.core.nth.call(null,vec__29861,(1),null);
var y = cljs.core.nth.call(null,vec__29861,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gamebase.projection.scaled_x = (function gamebase$projection$scaled_x(conf,p){
var vec__29864 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29864,(0),null);
var x = cljs.core.nth.call(null,vec__29864,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29864,(2),null);
return x;
});
gamebase.projection.scaled_y = (function gamebase$projection$scaled_y(conf,p){
var vec__29867 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29867,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29867,(1),null);
var y = cljs.core.nth.call(null,vec__29867,(2),null);
return y;
});
gamebase.projection.scaled_coords = (function gamebase$projection$scaled_coords(conf,p){
var vec__29870 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29870,(0),null);
var x = cljs.core.nth.call(null,vec__29870,(1),null);
var y = cljs.core.nth.call(null,vec__29870,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gamebase.projection.view_x = (function gamebase$projection$view_x(conf,p){
var vec__29873 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29873,(0),null);
var x = cljs.core.nth.call(null,vec__29873,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29873,(2),null);
return x;
});
gamebase.projection.view_y = (function gamebase$projection$view_y(conf,p){
var vec__29876 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29876,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29876,(1),null);
var y = cljs.core.nth.call(null,vec__29876,(2),null);
return y;
});
gamebase.projection.view_coords = (function gamebase$projection$view_coords(conf,p){
var vec__29879 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__29879,(0),null);
var x = cljs.core.nth.call(null,vec__29879,(1),null);
var y = cljs.core.nth.call(null,vec__29879,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});


gamebase.projection.world_length = (function gamebase$projection$world_length(var_args){
var G__29883 = arguments.length;
switch (G__29883) {
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

gamebase.projection.world_length.cljs$core$IFn$_invoke$arity$2 = (function (p__29884,p__29885){
var map__29886 = p__29884;
var map__29886__$1 = ((((!((map__29886 == null)))?(((((map__29886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29886):map__29886);
var conf = map__29886__$1;
var k = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__29887 = p__29885;
var coord_sys = cljs.core.nth.call(null,vec__29887,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29887,(1),null);
var l = vec__29887;
var G__29891 = coord_sys;
var G__29891__$1 = (((G__29891 instanceof cljs.core.Keyword))?G__29891.fqn:null);
switch (G__29891__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29891__$1)].join('')));

}
});

gamebase.projection.world_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.scaled_length = (function gamebase$projection$scaled_length(var_args){
var G__29895 = arguments.length;
switch (G__29895) {
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

gamebase.projection.scaled_length.cljs$core$IFn$_invoke$arity$2 = (function (p__29896,p__29897){
var map__29898 = p__29896;
var map__29898__$1 = ((((!((map__29898 == null)))?(((((map__29898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);
var k = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__29899 = p__29897;
var coord_sys = cljs.core.nth.call(null,vec__29899,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29899,(1),null);
var l = vec__29899;
var G__29903 = coord_sys;
var G__29903__$1 = (((G__29903 instanceof cljs.core.Keyword))?G__29903.fqn:null);
switch (G__29903__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29903__$1)].join('')));

}
});

gamebase.projection.scaled_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.view_length = (function gamebase$projection$view_length(var_args){
var G__29907 = arguments.length;
switch (G__29907) {
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

gamebase.projection.view_length.cljs$core$IFn$_invoke$arity$2 = (function (p__29908,p__29909){
var map__29910 = p__29908;
var map__29910__$1 = ((((!((map__29910 == null)))?(((((map__29910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29910):map__29910);
var conf = map__29910__$1;
var k = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__29911 = p__29909;
var coord_sys = cljs.core.nth.call(null,vec__29911,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29911,(1),null);
var l = vec__29911;
var G__29915 = coord_sys;
var G__29915__$1 = (((G__29915 instanceof cljs.core.Keyword))?G__29915.fqn:null);
switch (G__29915__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29915__$1)].join('')));

}
});

gamebase.projection.view_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.world_span_x = (function gamebase$projection$world_span_x(p1,p2){
var vec__29918 = gamebase.projection.world_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29918,(0),null);
var x1 = cljs.core.nth.call(null,vec__29918,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29918,(2),null);
var vec__29921 = gamebase.projection.world_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29921,(0),null);
var x2 = cljs.core.nth.call(null,vec__29921,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__29921,(2),null);
return gamebase.projection.world_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.world_span_y = (function gamebase$projection$world_span_y(p1,p2){
var vec__29924 = gamebase.projection.world_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29924,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29924,(1),null);
var y1 = cljs.core.nth.call(null,vec__29924,(2),null);
var vec__29927 = gamebase.projection.world_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29927,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__29927,(1),null);
var y2 = cljs.core.nth.call(null,vec__29927,(2),null);
return gamebase.projection.world_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.scaled_span_x = (function gamebase$projection$scaled_span_x(p1,p2){
var vec__29930 = gamebase.projection.scaled_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29930,(0),null);
var x1 = cljs.core.nth.call(null,vec__29930,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29930,(2),null);
var vec__29933 = gamebase.projection.scaled_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29933,(0),null);
var x2 = cljs.core.nth.call(null,vec__29933,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__29933,(2),null);
return gamebase.projection.scaled_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.scaled_span_y = (function gamebase$projection$scaled_span_y(p1,p2){
var vec__29936 = gamebase.projection.scaled_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29936,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29936,(1),null);
var y1 = cljs.core.nth.call(null,vec__29936,(2),null);
var vec__29939 = gamebase.projection.scaled_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29939,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__29939,(1),null);
var y2 = cljs.core.nth.call(null,vec__29939,(2),null);
return gamebase.projection.scaled_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.view_span_x = (function gamebase$projection$view_span_x(p1,p2){
var vec__29942 = gamebase.projection.view_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29942,(0),null);
var x1 = cljs.core.nth.call(null,vec__29942,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29942,(2),null);
var vec__29945 = gamebase.projection.view_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29945,(0),null);
var x2 = cljs.core.nth.call(null,vec__29945,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__29945,(2),null);
return gamebase.projection.view_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.view_span_y = (function gamebase$projection$view_span_y(p1,p2){
var vec__29948 = gamebase.projection.view_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__29948,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29948,(1),null);
var y1 = cljs.core.nth.call(null,vec__29948,(2),null);
var vec__29951 = gamebase.projection.view_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__29951,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__29951,(1),null);
var y2 = cljs.core.nth.call(null,vec__29951,(2),null);
return gamebase.projection.view_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.W0 = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
gamebase.projection.V0 = gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
gamebase.projection.V_ = (function gamebase$projection$V_(p__29954){
var map__29955 = p__29954;
var map__29955__$1 = ((((!((map__29955 == null)))?(((((map__29955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29955):map__29955);
var wc = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"wc","wc",19942463));
var hc = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"hc","hc",-32184781));
return gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wc,hc], null));
});
gamebase.projection.Vc = (function gamebase$projection$Vc(conf){
var vec__29957 = gamebase.projection.view_coords.call(null,conf,gamebase.projection.V0);
var x0 = cljs.core.nth.call(null,vec__29957,(0),null);
var y0 = cljs.core.nth.call(null,vec__29957,(1),null);
var vec__29960 = gamebase.projection.view_coords.call(null,conf,gamebase.projection.V_.call(null,conf));
var x1 = cljs.core.nth.call(null,vec__29960,(0),null);
var y1 = cljs.core.nth.call(null,vec__29960,(1),null);
return gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x0 + x1) / (2)),((y0 + y1) / (2))], null));
});

//# sourceMappingURL=projection.js.map
