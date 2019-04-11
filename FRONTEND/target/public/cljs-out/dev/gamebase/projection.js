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
var G__22161 = arguments.length;
switch (G__22161) {
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

gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$1 = (function (p__22162){
var vec__22163 = p__22162;
var x = cljs.core.nth.call(null,vec__22163,(0),null);
var y = cljs.core.nth.call(null,vec__22163,(1),null);
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

gamebase.projection.world_point.cljs$core$IFn$_invoke$arity$2 = (function (p__22166,p__22167){
var map__22168 = p__22166;
var map__22168__$1 = ((((!((map__22168 == null)))?(((((map__22168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22168):map__22168);
var conf = map__22168__$1;
var k = cljs.core.get.call(null,map__22168__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__22168__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__22168__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__22169 = p__22167;
var coord_sys = cljs.core.nth.call(null,vec__22169,(0),null);
var x = cljs.core.nth.call(null,vec__22169,(1),null);
var y = cljs.core.nth.call(null,vec__22169,(2),null);
var p = vec__22169;
var G__22173 = coord_sys;
var G__22173__$1 = (((G__22173 instanceof cljs.core.Keyword))?G__22173.fqn:null);
switch (G__22173__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22173__$1)].join('')));

}
});

gamebase.projection.world_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.scaled_point = (function gamebase$projection$scaled_point(var_args){
var G__22177 = arguments.length;
switch (G__22177) {
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

gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$1 = (function (p__22178){
var vec__22179 = p__22178;
var x = cljs.core.nth.call(null,vec__22179,(0),null);
var y = cljs.core.nth.call(null,vec__22179,(1),null);
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

gamebase.projection.scaled_point.cljs$core$IFn$_invoke$arity$2 = (function (p__22182,p__22183){
var map__22184 = p__22182;
var map__22184__$1 = ((((!((map__22184 == null)))?(((((map__22184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22184):map__22184);
var k = cljs.core.get.call(null,map__22184__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__22184__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__22184__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__22185 = p__22183;
var coord_sys = cljs.core.nth.call(null,vec__22185,(0),null);
var x = cljs.core.nth.call(null,vec__22185,(1),null);
var y = cljs.core.nth.call(null,vec__22185,(2),null);
var p = vec__22185;
var G__22189 = coord_sys;
var G__22189__$1 = (((G__22189 instanceof cljs.core.Keyword))?G__22189.fqn:null);
switch (G__22189__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22189__$1)].join('')));

}
});

gamebase.projection.scaled_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.view_point = (function gamebase$projection$view_point(var_args){
var G__22193 = arguments.length;
switch (G__22193) {
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

gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$1 = (function (p__22194){
var vec__22195 = p__22194;
var x = cljs.core.nth.call(null,vec__22195,(0),null);
var y = cljs.core.nth.call(null,vec__22195,(1),null);
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

gamebase.projection.view_point.cljs$core$IFn$_invoke$arity$2 = (function (p__22198,p__22199){
var map__22200 = p__22198;
var map__22200__$1 = ((((!((map__22200 == null)))?(((((map__22200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22200):map__22200);
var conf = map__22200__$1;
var k = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var tx = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var vec__22201 = p__22199;
var coord_sys = cljs.core.nth.call(null,vec__22201,(0),null);
var x = cljs.core.nth.call(null,vec__22201,(1),null);
var y = cljs.core.nth.call(null,vec__22201,(2),null);
var p = vec__22201;
var G__22205 = coord_sys;
var G__22205__$1 = (((G__22205 instanceof cljs.core.Keyword))?G__22205.fqn:null);
switch (G__22205__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22205__$1)].join('')));

}
});

gamebase.projection.view_point.cljs$lang$maxFixedArity = 2;

gamebase.projection.world_x = (function gamebase$projection$world_x(conf,p){
var vec__22208 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22208,(0),null);
var x = cljs.core.nth.call(null,vec__22208,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22208,(2),null);
return x;
});
gamebase.projection.world_y = (function gamebase$projection$world_y(conf,p){
var vec__22211 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22211,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22211,(1),null);
var y = cljs.core.nth.call(null,vec__22211,(2),null);
return y;
});
gamebase.projection.world_coords = (function gamebase$projection$world_coords(conf,p){
var vec__22214 = gamebase.projection.world_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22214,(0),null);
var x = cljs.core.nth.call(null,vec__22214,(1),null);
var y = cljs.core.nth.call(null,vec__22214,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gamebase.projection.scaled_x = (function gamebase$projection$scaled_x(conf,p){
var vec__22217 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22217,(0),null);
var x = cljs.core.nth.call(null,vec__22217,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22217,(2),null);
return x;
});
gamebase.projection.scaled_y = (function gamebase$projection$scaled_y(conf,p){
var vec__22220 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22220,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22220,(1),null);
var y = cljs.core.nth.call(null,vec__22220,(2),null);
return y;
});
gamebase.projection.scaled_coords = (function gamebase$projection$scaled_coords(conf,p){
var vec__22223 = gamebase.projection.scaled_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22223,(0),null);
var x = cljs.core.nth.call(null,vec__22223,(1),null);
var y = cljs.core.nth.call(null,vec__22223,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gamebase.projection.view_x = (function gamebase$projection$view_x(conf,p){
var vec__22226 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22226,(0),null);
var x = cljs.core.nth.call(null,vec__22226,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22226,(2),null);
return x;
});
gamebase.projection.view_y = (function gamebase$projection$view_y(conf,p){
var vec__22229 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22229,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22229,(1),null);
var y = cljs.core.nth.call(null,vec__22229,(2),null);
return y;
});
gamebase.projection.view_coords = (function gamebase$projection$view_coords(conf,p){
var vec__22232 = gamebase.projection.view_point.call(null,conf,p);
var _ = cljs.core.nth.call(null,vec__22232,(0),null);
var x = cljs.core.nth.call(null,vec__22232,(1),null);
var y = cljs.core.nth.call(null,vec__22232,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});


gamebase.projection.world_length = (function gamebase$projection$world_length(var_args){
var G__22236 = arguments.length;
switch (G__22236) {
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

gamebase.projection.world_length.cljs$core$IFn$_invoke$arity$2 = (function (p__22237,p__22238){
var map__22239 = p__22237;
var map__22239__$1 = ((((!((map__22239 == null)))?(((((map__22239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22239):map__22239);
var conf = map__22239__$1;
var k = cljs.core.get.call(null,map__22239__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__22240 = p__22238;
var coord_sys = cljs.core.nth.call(null,vec__22240,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22240,(1),null);
var l = vec__22240;
var G__22244 = coord_sys;
var G__22244__$1 = (((G__22244 instanceof cljs.core.Keyword))?G__22244.fqn:null);
switch (G__22244__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22244__$1)].join('')));

}
});

gamebase.projection.world_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.scaled_length = (function gamebase$projection$scaled_length(var_args){
var G__22248 = arguments.length;
switch (G__22248) {
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

gamebase.projection.scaled_length.cljs$core$IFn$_invoke$arity$2 = (function (p__22249,p__22250){
var map__22251 = p__22249;
var map__22251__$1 = ((((!((map__22251 == null)))?(((((map__22251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22251):map__22251);
var k = cljs.core.get.call(null,map__22251__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__22252 = p__22250;
var coord_sys = cljs.core.nth.call(null,vec__22252,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22252,(1),null);
var l = vec__22252;
var G__22256 = coord_sys;
var G__22256__$1 = (((G__22256 instanceof cljs.core.Keyword))?G__22256.fqn:null);
switch (G__22256__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22256__$1)].join('')));

}
});

gamebase.projection.scaled_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.view_length = (function gamebase$projection$view_length(var_args){
var G__22260 = arguments.length;
switch (G__22260) {
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

gamebase.projection.view_length.cljs$core$IFn$_invoke$arity$2 = (function (p__22261,p__22262){
var map__22263 = p__22261;
var map__22263__$1 = ((((!((map__22263 == null)))?(((((map__22263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22263):map__22263);
var conf = map__22263__$1;
var k = cljs.core.get.call(null,map__22263__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var vec__22264 = p__22262;
var coord_sys = cljs.core.nth.call(null,vec__22264,(0),null);
var l_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22264,(1),null);
var l = vec__22264;
var G__22268 = coord_sys;
var G__22268__$1 = (((G__22268 instanceof cljs.core.Keyword))?G__22268.fqn:null);
switch (G__22268__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22268__$1)].join('')));

}
});

gamebase.projection.view_length.cljs$lang$maxFixedArity = 2;

gamebase.projection.world_span_x = (function gamebase$projection$world_span_x(p1,p2){
var vec__22271 = gamebase.projection.world_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__22271,(0),null);
var x1 = cljs.core.nth.call(null,vec__22271,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22271,(2),null);
var vec__22274 = gamebase.projection.world_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__22274,(0),null);
var x2 = cljs.core.nth.call(null,vec__22274,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__22274,(2),null);
return gamebase.projection.world_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.world_span_y = (function gamebase$projection$world_span_y(p1,p2){
var vec__22277 = gamebase.projection.world_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__22277,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22277,(1),null);
var y1 = cljs.core.nth.call(null,vec__22277,(2),null);
var vec__22280 = gamebase.projection.world_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__22280,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__22280,(1),null);
var y2 = cljs.core.nth.call(null,vec__22280,(2),null);
return gamebase.projection.world_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.scaled_span_x = (function gamebase$projection$scaled_span_x(p1,p2){
var vec__22283 = gamebase.projection.scaled_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__22283,(0),null);
var x1 = cljs.core.nth.call(null,vec__22283,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22283,(2),null);
var vec__22286 = gamebase.projection.scaled_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__22286,(0),null);
var x2 = cljs.core.nth.call(null,vec__22286,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__22286,(2),null);
return gamebase.projection.scaled_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.scaled_span_y = (function gamebase$projection$scaled_span_y(p1,p2){
var vec__22289 = gamebase.projection.scaled_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__22289,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22289,(1),null);
var y1 = cljs.core.nth.call(null,vec__22289,(2),null);
var vec__22292 = gamebase.projection.scaled_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__22292,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__22292,(1),null);
var y2 = cljs.core.nth.call(null,vec__22292,(2),null);
return gamebase.projection.scaled_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.view_span_x = (function gamebase$projection$view_span_x(p1,p2){
var vec__22295 = gamebase.projection.view_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__22295,(0),null);
var x1 = cljs.core.nth.call(null,vec__22295,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22295,(2),null);
var vec__22298 = gamebase.projection.view_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__22298,(0),null);
var x2 = cljs.core.nth.call(null,vec__22298,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__22298,(2),null);
return gamebase.projection.view_length.call(null,gamebase.projection.absolute.call(null,(x2 - x1)));
});
gamebase.projection.view_span_y = (function gamebase$projection$view_span_y(p1,p2){
var vec__22301 = gamebase.projection.view_point.call(null,p1);
var _ = cljs.core.nth.call(null,vec__22301,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22301,(1),null);
var y1 = cljs.core.nth.call(null,vec__22301,(2),null);
var vec__22304 = gamebase.projection.view_point.call(null,p2);
var ___$2 = cljs.core.nth.call(null,vec__22304,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__22304,(1),null);
var y2 = cljs.core.nth.call(null,vec__22304,(2),null);
return gamebase.projection.view_length.call(null,gamebase.projection.absolute.call(null,(y2 - y1)));
});
gamebase.projection.W0 = gamebase.projection.world_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
gamebase.projection.V0 = gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
gamebase.projection.V_ = (function gamebase$projection$V_(p__22307){
var map__22308 = p__22307;
var map__22308__$1 = ((((!((map__22308 == null)))?(((((map__22308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22308):map__22308);
var wc = cljs.core.get.call(null,map__22308__$1,new cljs.core.Keyword(null,"wc","wc",19942463));
var hc = cljs.core.get.call(null,map__22308__$1,new cljs.core.Keyword(null,"hc","hc",-32184781));
return gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wc,hc], null));
});
gamebase.projection.Vc = (function gamebase$projection$Vc(conf){
var vec__22310 = gamebase.projection.view_coords.call(null,conf,gamebase.projection.V0);
var x0 = cljs.core.nth.call(null,vec__22310,(0),null);
var y0 = cljs.core.nth.call(null,vec__22310,(1),null);
var vec__22313 = gamebase.projection.view_coords.call(null,conf,gamebase.projection.V_.call(null,conf));
var x1 = cljs.core.nth.call(null,vec__22313,(0),null);
var y1 = cljs.core.nth.call(null,vec__22313,(1),null);
return gamebase.projection.view_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x0 + x1) / (2)),((y0 + y1) / (2))], null));
});

//# sourceMappingURL=projection.js.map
