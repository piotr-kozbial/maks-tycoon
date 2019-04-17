// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.geometry');
goog.require('cljs.core');
gamebase.geometry._STAR_with_xprint_STAR_ = false;
gamebase.geometry.sqrt = (function gamebase$geometry$sqrt(x){
return Math.sqrt(x);
});

gamebase.geometry.sin = (function gamebase$geometry$sin(x){
return Math.sin(x);
});

gamebase.geometry.cos = (function gamebase$geometry$cos(x){
return Math.cos(x);
});


gamebase.geometry.pi = Math.PI;

gamebase.geometry.radian_to_degree_coeff = (gamebase.geometry.pi / (180));

gamebase.geometry.degree_to_radian_coeff = ((180) / gamebase.geometry.pi);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null);

cljs.core.list((2),(5));
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),3.14], null);

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(30)], null);

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null);

new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(45),new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);

gamebase.geometry.atan = (function gamebase$geometry$atan(dy_to_dx){
return Math.atan(dy_to_dx);
});

gamebase.geometry.acotan = (function gamebase$geometry$acotan(dx_to_dy){
return ((gamebase.geometry.pi / (2)) - Math.atan(dx_to_dy));
});

gamebase.geometry._normalize_radians = (function gamebase$geometry$_normalize_radians(radians){
var out = radians;
while(true){
if((out >= gamebase.geometry.pi)){
var G__65115 = (out - ((2) * gamebase.geometry.pi));
out = G__65115;
continue;
} else {
return out;
}
break;
}
});

gamebase.geometry._slope_to_radians = (function gamebase$geometry$_slope_to_radians(dx,dy){
if((Math.abs(dy) <= Math.abs(dx))){
if((dx > (0))){
return gamebase.geometry.atan.call(null,(dy / dx));
} else {
return gamebase.geometry._normalize_radians.call(null,(gamebase.geometry.atan.call(null,(dy / dx)) + gamebase.geometry.pi));
}
} else {
if((dy > (0))){
return gamebase.geometry.acotan.call(null,(dx / dy));
} else {
return gamebase.geometry._normalize_radians.call(null,(gamebase.geometry.acotan.call(null,(dx / dy)) + gamebase.geometry.pi));
}
}
});

gamebase.geometry.radians = (function gamebase$geometry$radians(num){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),num], null);
});

gamebase.geometry.in_radians = (function gamebase$geometry$in_radians(angle){
if(typeof angle === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),angle], null);
} else {
var map__65091 = angle;
var map__65091__$1 = ((((!((map__65091 == null)))?(((((map__65091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65091):map__65091);
var radians = cljs.core.get.call(null,map__65091__$1,new cljs.core.Keyword(null,"radians","radians",1835725084));
var degrees = cljs.core.get.call(null,map__65091__$1,new cljs.core.Keyword(null,"degrees","degrees",2015169884));
var slope = cljs.core.get.call(null,map__65091__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
if(cljs.core.truth_(radians)){
return angle;
} else {
if(cljs.core.truth_(degrees)){
return cljs.core.assoc.call(null,angle,new cljs.core.Keyword(null,"radians","radians",1835725084),(gamebase.geometry.radian_to_degree_coeff * degrees));
} else {
if(cljs.core.truth_(slope)){
var vec__65093 = slope;
var dx = cljs.core.nth.call(null,vec__65093,(0),null);
var dy = cljs.core.nth.call(null,vec__65093,(1),null);
return cljs.core.assoc.call(null,angle,new cljs.core.Keyword(null,"radians","radians",1835725084),gamebase.geometry._slope_to_radians.call(null,dx,dy));
} else {
return null;
}
}
}
}
});

gamebase.geometry.get_radians = (function gamebase$geometry$get_radians(angle){
if(typeof angle === 'number'){
return angle;
} else {
var map__65096 = angle;
var map__65096__$1 = ((((!((map__65096 == null)))?(((((map__65096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65096):map__65096);
var radians = cljs.core.get.call(null,map__65096__$1,new cljs.core.Keyword(null,"radians","radians",1835725084));
var degrees = cljs.core.get.call(null,map__65096__$1,new cljs.core.Keyword(null,"degrees","degrees",2015169884));
var slope = cljs.core.get.call(null,map__65096__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
if(cljs.core.truth_(radians)){
return radians;
} else {
if(cljs.core.truth_(degrees)){
return (gamebase.geometry.radian_to_degree_coeff * degrees);
} else {
if(cljs.core.truth_(slope)){
var vec__65098 = slope;
var dx = cljs.core.nth.call(null,vec__65098,(0),null);
var dy = cljs.core.nth.call(null,vec__65098,(1),null);
return gamebase.geometry._slope_to_radians.call(null,dx,dy);
} else {
return null;
}
}
}
}
});

if(cljs.core._EQ_.call(null,gamebase.geometry.radians.call(null,3.14),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),3.14], null))){
} else {
throw (new Error("Assert failed: (= (radians 3.14) {:radians 3.14})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_radians.call(null,3.14),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),3.14], null))){
} else {
throw (new Error("Assert failed: (= (in-radians 3.14) {:radians 3.14})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_radians.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),3.14], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),3.14], null))){
} else {
throw (new Error("Assert failed: (= (in-radians {:radians 3.14}) {:radians 3.14})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_radians.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(90)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(90),new cljs.core.Keyword(null,"radians","radians",1835725084),(gamebase.geometry.pi / (2))], null))){
} else {
throw (new Error("Assert failed: (= (in-radians {:degrees 90}) {:degrees 90, :radians (/ pi 2)})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_radians.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"radians","radians",1835725084),(- gamebase.geometry.pi)], null))){
} else {
throw (new Error("Assert failed: (= (in-radians {:slope [-1 0]}) {:slope [-1 0], :radians (- pi)})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_radians.call(null,3.14),3.14)){
} else {
throw (new Error("Assert failed: (= (get-radians 3.14) 3.14)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_radians.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),3.14], null)),3.14)){
} else {
throw (new Error("Assert failed: (= (get-radians {:radians 3.14}) 3.14)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_radians.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(180)], null)),gamebase.geometry.pi)){
} else {
throw (new Error("Assert failed: (= (get-radians {:degrees 180}) pi)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_radians.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(180),new cljs.core.Keyword(null,"radians","radians",1835725084),3.146], null)),3.146)){
} else {
throw (new Error("Assert failed: (= (get-radians {:degrees 180, :radians 3.146}) 3.146)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_radians.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)),(- gamebase.geometry.pi))){
} else {
throw (new Error("Assert failed: (= (get-radians {:slope [-1 0]}) (- pi))"));
}

gamebase.geometry.degrees = (function gamebase$geometry$degrees(num){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),num], null);
});

gamebase.geometry.in_degrees = (function gamebase$geometry$in_degrees(angle){
if(typeof angle === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(gamebase.geometry.degree_to_radian_coeff * angle)], null);
} else {
var map__65101 = angle;
var map__65101__$1 = ((((!((map__65101 == null)))?(((((map__65101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65101):map__65101);
var radians = cljs.core.get.call(null,map__65101__$1,new cljs.core.Keyword(null,"radians","radians",1835725084));
var degrees = cljs.core.get.call(null,map__65101__$1,new cljs.core.Keyword(null,"degrees","degrees",2015169884));
var slope = cljs.core.get.call(null,map__65101__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
if(cljs.core.truth_(degrees)){
return angle;
} else {
if(cljs.core.truth_(radians)){
return cljs.core.assoc.call(null,angle,new cljs.core.Keyword(null,"degrees","degrees",2015169884),(gamebase.geometry.degree_to_radian_coeff * radians));
} else {
if(cljs.core.truth_(slope)){
var vec__65103 = slope;
var dx = cljs.core.nth.call(null,vec__65103,(0),null);
var dy = cljs.core.nth.call(null,vec__65103,(1),null);
return cljs.core.assoc.call(null,angle,new cljs.core.Keyword(null,"degrees","degrees",2015169884),(gamebase.geometry.degree_to_radian_coeff * gamebase.geometry._slope_to_radians.call(null,dx,dy)));
} else {
return null;
}
}
}
}
});

gamebase.geometry.get_degrees = (function gamebase$geometry$get_degrees(angle){
if(typeof angle === 'number'){
return (gamebase.geometry.degree_to_radian_coeff * angle);
} else {
var map__65106 = angle;
var map__65106__$1 = ((((!((map__65106 == null)))?(((((map__65106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65106):map__65106);
var radians = cljs.core.get.call(null,map__65106__$1,new cljs.core.Keyword(null,"radians","radians",1835725084));
var degrees = cljs.core.get.call(null,map__65106__$1,new cljs.core.Keyword(null,"degrees","degrees",2015169884));
var slope = cljs.core.get.call(null,map__65106__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
if(cljs.core.truth_(degrees)){
return degrees;
} else {
if(cljs.core.truth_(radians)){
return (gamebase.geometry.degree_to_radian_coeff * radians);
} else {
if(cljs.core.truth_(slope)){
var vec__65108 = slope;
var dx = cljs.core.nth.call(null,vec__65108,(0),null);
var dy = cljs.core.nth.call(null,vec__65108,(1),null);
return (gamebase.geometry.degree_to_radian_coeff * gamebase.geometry._slope_to_radians.call(null,dx,dy));
} else {
return null;
}
}
}
}
});

if(cljs.core._EQ_.call(null,gamebase.geometry.in_degrees.call(null,gamebase.geometry.pi),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),180.0], null))){
} else {
throw (new Error("Assert failed: (= (in-degrees pi) {:degrees 180.0})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_degrees.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(180)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(180)], null))){
} else {
throw (new Error("Assert failed: (= (in-degrees {:degrees 180}) {:degrees 180})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_degrees.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),gamebase.geometry.pi], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radians","radians",1835725084),gamebase.geometry.pi,new cljs.core.Keyword(null,"degrees","degrees",2015169884),180.0], null))){
} else {
throw (new Error("Assert failed: (= (in-degrees {:radians pi}) {:radians pi, :degrees 180.0})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_degrees.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.Keyword(null,"degrees","degrees",2015169884),-180.0], null))){
} else {
throw (new Error("Assert failed: (= (in-degrees {:slope [-2 0]}) {:slope [-2 0], :degrees -180.0})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_degrees.call(null,gamebase.geometry.pi),180.0)){
} else {
throw (new Error("Assert failed: (= (get-degrees pi) 180.0)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_degrees.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(180)], null)),(180))){
} else {
throw (new Error("Assert failed: (= (get-degrees {:degrees 180}) 180)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_degrees.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),gamebase.geometry.pi], null)),180.0)){
} else {
throw (new Error("Assert failed: (= (get-degrees {:radians pi}) 180.0)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_degrees.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radians","radians",1835725084),(3),new cljs.core.Keyword(null,"degrees","degrees",2015169884),(180)], null)),(180))){
} else {
throw (new Error("Assert failed: (= (get-degrees {:radians 3, :degrees 180}) 180)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_degrees.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null)], null)),-180.0)){
} else {
throw (new Error("Assert failed: (= (get-degrees {:slope [-2 0]}) -180.0)"));
}

gamebase.geometry.slope = (function gamebase$geometry$slope(dx,dy){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null)], null);
});

gamebase.geometry.in_slope = (function gamebase$geometry$in_slope(angle){
if(typeof angle === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(angle),Math.sin(angle)], null)], null);
} else {
var map__65111 = angle;
var map__65111__$1 = ((((!((map__65111 == null)))?(((((map__65111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65111):map__65111);
var radians = cljs.core.get.call(null,map__65111__$1,new cljs.core.Keyword(null,"radians","radians",1835725084));
var degrees = cljs.core.get.call(null,map__65111__$1,new cljs.core.Keyword(null,"degrees","degrees",2015169884));
var slope = cljs.core.get.call(null,map__65111__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
if(cljs.core.truth_(slope)){
return angle;
} else {
if(cljs.core.truth_(radians)){
return cljs.core.assoc.call(null,angle,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(radians),Math.sin(radians)], null));
} else {
if(cljs.core.truth_(degrees)){
var radians__$1 = (gamebase.geometry.radian_to_degree_coeff * degrees);
return cljs.core.assoc.call(null,angle,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(radians__$1),Math.sin(radians__$1)], null));
} else {
return null;
}
}
}
}
});

gamebase.geometry.get_slope = (function gamebase$geometry$get_slope(angle){
if(typeof angle === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(angle),Math.sin(angle)], null);
} else {
var map__65113 = angle;
var map__65113__$1 = ((((!((map__65113 == null)))?(((((map__65113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65113):map__65113);
var radians = cljs.core.get.call(null,map__65113__$1,new cljs.core.Keyword(null,"radians","radians",1835725084));
var degrees = cljs.core.get.call(null,map__65113__$1,new cljs.core.Keyword(null,"degrees","degrees",2015169884));
var slope = cljs.core.get.call(null,map__65113__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
if(cljs.core.truth_(slope)){
return slope;
} else {
if(cljs.core.truth_(radians)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(radians),Math.sin(radians)], null);
} else {
if(cljs.core.truth_(degrees)){
var radians__$1 = (gamebase.geometry.radian_to_degree_coeff * degrees);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(radians__$1),Math.sin(radians__$1)], null);
} else {
return null;
}
}
}
}
});

if(cljs.core._EQ_.call(null,gamebase.geometry.in_slope.call(null,(0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0], null)], null))){
} else {
throw (new Error("Assert failed: (= (in-slope 0) {:slope [1.0 0.0]})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_slope.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(0),new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0], null)], null))){
} else {
throw (new Error("Assert failed: (= (in-slope {:degrees 0}) {:degrees 0, :slope [1.0 0.0]})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_slope.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radians","radians",1835725084),(0),new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0], null)], null))){
} else {
throw (new Error("Assert failed: (= (in-slope {:radians 0}) {:radians 0, :slope [1.0 0.0]})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.in_slope.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null)], null))){
} else {
throw (new Error("Assert failed: (= (in-slope {:slope [-2 0]}) {:slope [-2 0]})"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_slope.call(null,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0], null))){
} else {
throw (new Error("Assert failed: (= (get-slope 0) [1.0 0.0])"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_slope.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0], null))){
} else {
throw (new Error("Assert failed: (= (get-slope {:degrees 0}) [1.0 0.0])"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_slope.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radians","radians",1835725084),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0], null))){
} else {
throw (new Error("Assert failed: (= (get-slope {:radians 0}) [1.0 0.0])"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_slope.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radians","radians",1835725084),(0),new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.1,0.1], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.1,0.1], null))){
} else {
throw (new Error("Assert failed: (= (get-slope {:radians 0, :slope [2.1 0.1]}) [2.1 0.1])"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.get_slope.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null))){
} else {
throw (new Error("Assert failed: (= (get-slope {:slope [-2 0]}) [-2 0])"));
}
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-type","path-type",128945249),new cljs.core.Keyword(null,"example-type","example-type",-1460875184)], null);

if((typeof gamebase !== 'undefined') && (typeof gamebase.geometry !== 'undefined') && (typeof gamebase.geometry.path_length !== 'undefined')){
} else {
gamebase.geometry.path_length = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.geometry","path-length"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (path){
return new cljs.core.Keyword(null,"path-type","path-type",128945249).cljs$core$IFn$_invoke$arity$1(path);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

if((typeof gamebase !== 'undefined') && (typeof gamebase.geometry !== 'undefined') && (typeof gamebase.geometry.path_point_at_length !== 'undefined')){
} else {
gamebase.geometry.path_point_at_length = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.geometry","path-point-at-length"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (path,length){
return new cljs.core.Keyword(null,"path-type","path-type",128945249).cljs$core$IFn$_invoke$arity$1(path);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

if((typeof gamebase !== 'undefined') && (typeof gamebase.geometry !== 'undefined') && (typeof gamebase.geometry.path_point_at_length !== 'undefined')){
} else {
gamebase.geometry.path_point_at_length = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.geometry","path-point-at-length"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (path,length){
return new cljs.core.Keyword(null,"path-type","path-type",128945249).cljs$core$IFn$_invoke$arity$1(path);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

if((typeof gamebase !== 'undefined') && (typeof gamebase.geometry !== 'undefined') && (typeof gamebase.geometry.angle_at_length !== 'undefined')){
} else {
gamebase.geometry.angle_at_length = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.geometry","angle-at-length"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (path,length){
return new cljs.core.Keyword(null,"path-type","path-type",128945249).cljs$core$IFn$_invoke$arity$1(path);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

if((typeof gamebase !== 'undefined') && (typeof gamebase.geometry !== 'undefined') && (typeof gamebase.geometry.translate_path !== 'undefined')){
} else {
gamebase.geometry.translate_path = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.geometry","translate-path"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (path,dx,dy){
return new cljs.core.Keyword(null,"path-type","path-type",128945249).cljs$core$IFn$_invoke$arity$1(path);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

if((typeof gamebase !== 'undefined') && (typeof gamebase.geometry !== 'undefined') && (typeof gamebase.geometry.precompute !== 'undefined')){
} else {
gamebase.geometry.precompute = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.geometry","precompute"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (path){
return new cljs.core.Keyword(null,"path-type","path-type",128945249).cljs$core$IFn$_invoke$arity$1(path);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

gamebase.geometry.precomputed = (function gamebase$geometry$precomputed(path){
if(cljs.core.truth_(new cljs.core.Keyword(null,"precomputed?","precomputed?",-249141839).cljs$core$IFn$_invoke$arity$1(path))){
return path;
} else {
return cljs.core.assoc.call(null,gamebase.geometry.precompute.call(null,path),new cljs.core.Keyword(null,"precomputed?","precomputed?",-249141839),true);
}
});
gamebase.geometry.line_segment = (function gamebase$geometry$line_segment(p1,p2){
var v = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-type","path-type",128945249),new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"p2","p2",905500641),p2], null);
if(gamebase.geometry._STAR_with_xprint_STAR_){
return cljs.core.with_meta.call(null,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.xprint.core","key-order","app.xprint.core/key-order",2050044103),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-type","path-type",128945249),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p2","p2",905500641)], null)], null));
} else {
return v;
}
});

cljs.core._add_method.call(null,gamebase.geometry.precompute,new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),(function (path){
return path;
}));

if(cljs.core._EQ_.call(null,gamebase.geometry.line_segment.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(-1)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-type","path-type",128945249),new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(-1)], null)], null))){
} else {
throw (new Error("Assert failed: (= (line-segment [2 3] [4 -1]) {:path-type :line-segment, :p1 [2 3], :p2 [4 -1]})"));
}

cljs.core._add_method.call(null,gamebase.geometry.path_length,new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),(function (p__65116){
var map__65117 = p__65116;
var map__65117__$1 = ((((!((map__65117 == null)))?(((((map__65117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65117):map__65117);
var vec__65118 = cljs.core.get.call(null,map__65117__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var x1 = cljs.core.nth.call(null,vec__65118,(0),null);
var y1 = cljs.core.nth.call(null,vec__65118,(1),null);
var vec__65121 = cljs.core.get.call(null,map__65117__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var x2 = cljs.core.nth.call(null,vec__65121,(0),null);
var y2 = cljs.core.nth.call(null,vec__65121,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
return gamebase.geometry.sqrt.call(null,((dx * dx) + (dy * dy)));
}));

if(cljs.core._EQ_.call(null,gamebase.geometry.path_length.call(null,gamebase.geometry.line_segment.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null))),5.0)){
} else {
throw (new Error("Assert failed: (= (path-length (line-segment [0 0] [3 4])) 5.0)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.path_length.call(null,gamebase.geometry.line_segment.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(9)], null))),5.0)){
} else {
throw (new Error("Assert failed: (= (path-length (line-segment [-2 5] [1 9])) 5.0)"));
}

cljs.core._add_method.call(null,gamebase.geometry.path_point_at_length,new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),(function (p__65125,length){
var map__65126 = p__65125;
var map__65126__$1 = ((((!((map__65126 == null)))?(((((map__65126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65126):map__65126);
var segment = map__65126__$1;
var vec__65127 = cljs.core.get.call(null,map__65126__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var x1 = cljs.core.nth.call(null,vec__65127,(0),null);
var y1 = cljs.core.nth.call(null,vec__65127,(1),null);
var vec__65130 = cljs.core.get.call(null,map__65126__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var x2 = cljs.core.nth.call(null,vec__65130,(0),null);
var y2 = cljs.core.nth.call(null,vec__65130,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
var full_length = gamebase.geometry.path_length.call(null,segment);
var x_factor = (dx / full_length);
var y_factor = (dy / full_length);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (length * x_factor)),(y1 + (length * y_factor))], null);
}));

cljs.core._add_method.call(null,gamebase.geometry.angle_at_length,new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),(function (p__65134,length){
var map__65135 = p__65134;
var map__65135__$1 = ((((!((map__65135 == null)))?(((((map__65135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65135):map__65135);
var segment = map__65135__$1;
var vec__65136 = cljs.core.get.call(null,map__65135__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var x1 = cljs.core.nth.call(null,vec__65136,(0),null);
var y1 = cljs.core.nth.call(null,vec__65136,(1),null);
var vec__65139 = cljs.core.get.call(null,map__65135__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var x2 = cljs.core.nth.call(null,vec__65139,(0),null);
var y2 = cljs.core.nth.call(null,vec__65139,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
return gamebase.geometry.get_radians.call(null,gamebase.geometry.slope.call(null,dx,dy));
}));

if(cljs.core._EQ_.call(null,(function (){var my_path = gamebase.geometry.line_segment.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(9)], null));
return gamebase.geometry.path_point_at_length.call(null,my_path,(gamebase.geometry.path_length.call(null,my_path) / (2)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,7.0], null))){
} else {
throw (new Error("Assert failed: (= (let [my-path (line-segment [-2 5] [1 9])] (path-point-at-length my-path (/ (path-length my-path) 2))) [-0.5 7.0])"));
}

cljs.core._add_method.call(null,gamebase.geometry.translate_path,new cljs.core.Keyword(null,"line-segment","line-segment",-798085781),(function (p__65143,dx,dy){
var map__65144 = p__65143;
var map__65144__$1 = ((((!((map__65144 == null)))?(((((map__65144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65144):map__65144);
var segment = map__65144__$1;
var vec__65145 = cljs.core.get.call(null,map__65144__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var x1 = cljs.core.nth.call(null,vec__65145,(0),null);
var y1 = cljs.core.nth.call(null,vec__65145,(1),null);
var vec__65148 = cljs.core.get.call(null,map__65144__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var x2 = cljs.core.nth.call(null,vec__65148,(0),null);
var y2 = cljs.core.nth.call(null,vec__65148,(1),null);
return cljs.core.assoc.call(null,segment,new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + dx),(y1 + dy)], null),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + dx),(y2 + dy)], null));
}));
gamebase.geometry.circle_arc = (function gamebase$geometry$circle_arc(center,radius,angle_start,angle_end,direction){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"positive","positive",1112941866),null,new cljs.core.Keyword(null,"negative","negative",-1562068438),null], null), null).call(null,direction))){
} else {
throw (new Error("Assert failed: (#{:positive :negative} direction)"));
}

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path-type","path-type",128945249),new cljs.core.Keyword(null,"circle-arc","circle-arc",-1275950224),new cljs.core.Keyword(null,"center","center",-748944368),center,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"angle-start","angle-start",1883445974),angle_start,new cljs.core.Keyword(null,"angle-end","angle-end",1226780972),angle_end,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
});

gamebase.geometry.normalize_to_2pi = (function gamebase$geometry$normalize_to_2pi(radians){
var radians_SINGLEQUOTE_ = (function (){var r = radians;
while(true){
if((r >= ((2) * gamebase.geometry.pi))){
var G__65177 = (r - ((2) * gamebase.geometry.pi));
r = G__65177;
continue;
} else {
return r;
}
break;
}
})();
var radians_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var r = radians_SINGLEQUOTE_;
while(true){
if((r < (0))){
var G__65178 = (r + ((2) * gamebase.geometry.pi));
r = G__65178;
continue;
} else {
return r;
}
break;
}
})();
return radians_SINGLEQUOTE__SINGLEQUOTE_;
});

cljs.core._add_method.call(null,gamebase.geometry.precompute,new cljs.core.Keyword(null,"circle-arc","circle-arc",-1275950224),(function (p__65152){
var map__65153 = p__65152;
var map__65153__$1 = ((((!((map__65153 == null)))?(((((map__65153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65153):map__65153);
var path = map__65153__$1;
var vec__65154 = cljs.core.get.call(null,map__65153__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var xc = cljs.core.nth.call(null,vec__65154,(0),null);
var yc = cljs.core.nth.call(null,vec__65154,(1),null);
var radius = cljs.core.get.call(null,map__65153__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var angle_start = cljs.core.get.call(null,map__65153__$1,new cljs.core.Keyword(null,"angle-start","angle-start",1883445974));
var angle_end = cljs.core.get.call(null,map__65153__$1,new cljs.core.Keyword(null,"angle-end","angle-end",1226780972));
var direction = cljs.core.get.call(null,map__65153__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var G__65158 = direction;
var G__65158__$1 = (((G__65158 instanceof cljs.core.Keyword))?G__65158.fqn:null);
switch (G__65158__$1) {
case "positive":
var st = gamebase.geometry.normalize_to_2pi.call(null,gamebase.geometry.get_radians.call(null,angle_start));
var en0 = gamebase.geometry.normalize_to_2pi.call(null,gamebase.geometry.get_radians.call(null,angle_end));
var en = (((en0 > st))?en0:(((2) * gamebase.geometry.pi) + en0));
return cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"st","st",1455255828),st,new cljs.core.Keyword(null,"en","en",88457073),en,new cljs.core.Keyword(null,"length","length",588987862),(radius * (en - st)));

break;
case "negative":
var en = gamebase.geometry.normalize_to_2pi.call(null,gamebase.geometry.get_radians.call(null,angle_end));
var st0 = gamebase.geometry.normalize_to_2pi.call(null,gamebase.geometry.get_radians.call(null,angle_start));
var st = (((st0 > en))?st0:(((2) * gamebase.geometry.pi) + st0));
return cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"st","st",1455255828),st,new cljs.core.Keyword(null,"en","en",88457073),en,new cljs.core.Keyword(null,"length","length",588987862),(radius * (st - en)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65158__$1)].join('')));

}
}));

cljs.core._add_method.call(null,gamebase.geometry.path_length,new cljs.core.Keyword(null,"circle-arc","circle-arc",-1275950224),(function (path){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(gamebase.geometry.precomputed.call(null,path));
}));

if(cljs.core._EQ_.call(null,gamebase.geometry.path_length.call(null,gamebase.geometry.circle_arc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),gamebase.geometry.degrees.call(null,(90)),gamebase.geometry.degrees.call(null,(180)),new cljs.core.Keyword(null,"positive","positive",1112941866))),(gamebase.geometry.pi / (2)))){
} else {
throw (new Error("Assert failed: (= (path-length (circle-arc [0 0] 1 (degrees 90) (degrees 180) :positive)) (/ pi 2))"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.path_length.call(null,gamebase.geometry.circle_arc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),gamebase.geometry.degrees.call(null,(270)),gamebase.geometry.degrees.call(null,(90)),new cljs.core.Keyword(null,"positive","positive",1112941866))),gamebase.geometry.pi)){
} else {
throw (new Error("Assert failed: (= (path-length (circle-arc [0 0] 1 (degrees 270) (degrees 90) :positive)) pi)"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.path_length.call(null,gamebase.geometry.circle_arc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1),gamebase.geometry.degrees.call(null,((360) - (35))),gamebase.geometry.degrees.call(null,(10)),new cljs.core.Keyword(null,"positive","positive",1112941866))),(gamebase.geometry.pi / (4)))){
} else {
throw (new Error("Assert failed: (= (path-length (circle-arc [0 0] 1 (degrees (- 360 35)) (degrees 10) :positive)) (/ pi 4))"));
}

if(cljs.core._EQ_.call(null,gamebase.geometry.path_length.call(null,gamebase.geometry.circle_arc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(2),gamebase.geometry.degrees.call(null,((360) - (35))),gamebase.geometry.degrees.call(null,(10)),new cljs.core.Keyword(null,"positive","positive",1112941866))),(gamebase.geometry.pi / (2)))){
} else {
throw (new Error("Assert failed: (= (path-length (circle-arc [0 0] 2 (degrees (- 360 35)) (degrees 10) :positive)) (/ pi 2))"));
}

cljs.core._add_method.call(null,gamebase.geometry.path_point_at_length,new cljs.core.Keyword(null,"circle-arc","circle-arc",-1275950224),(function (path,length){
var map__65159 = gamebase.geometry.precomputed.call(null,path);
var map__65159__$1 = ((((!((map__65159 == null)))?(((((map__65159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65159):map__65159);
var vec__65160 = cljs.core.get.call(null,map__65159__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var xc = cljs.core.nth.call(null,vec__65160,(0),null);
var yc = cljs.core.nth.call(null,vec__65160,(1),null);
var radius = cljs.core.get.call(null,map__65159__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var st = cljs.core.get.call(null,map__65159__$1,new cljs.core.Keyword(null,"st","st",1455255828));
var en = cljs.core.get.call(null,map__65159__$1,new cljs.core.Keyword(null,"en","en",88457073));
var direction = cljs.core.get.call(null,map__65159__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var angle = (function (){var G__65164 = direction;
var G__65164__$1 = (((G__65164 instanceof cljs.core.Keyword))?G__65164.fqn:null);
switch (G__65164__$1) {
case "positive":
return (st + (length / radius));

break;
case "negative":
return (st - (length / radius));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65164__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xc + (radius * gamebase.geometry.cos.call(null,angle))),(yc + (radius * gamebase.geometry.sin.call(null,angle)))], null);
}));

cljs.core._add_method.call(null,gamebase.geometry.angle_at_length,new cljs.core.Keyword(null,"circle-arc","circle-arc",-1275950224),(function (path,length){
var map__65165 = gamebase.geometry.precomputed.call(null,path);
var map__65165__$1 = ((((!((map__65165 == null)))?(((((map__65165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65165):map__65165);
var vec__65166 = cljs.core.get.call(null,map__65165__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var xc = cljs.core.nth.call(null,vec__65166,(0),null);
var yc = cljs.core.nth.call(null,vec__65166,(1),null);
var radius = cljs.core.get.call(null,map__65165__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var st = cljs.core.get.call(null,map__65165__$1,new cljs.core.Keyword(null,"st","st",1455255828));
var direction = cljs.core.get.call(null,map__65165__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return gamebase.geometry.normalize_to_2pi.call(null,(function (){var G__65170 = direction;
var G__65170__$1 = (((G__65170 instanceof cljs.core.Keyword))?G__65170.fqn:null);
switch (G__65170__$1) {
case "positive":
return ((st + (length / radius)) + (gamebase.geometry.pi / (2)));

break;
case "negative":
return ((st - (length / radius)) - (gamebase.geometry.pi / (2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65170__$1)].join('')));

}
})());
}));

cljs.core._add_method.call(null,gamebase.geometry.translate_path,new cljs.core.Keyword(null,"circle-arc","circle-arc",-1275950224),(function (p__65171,dx,dy){
var map__65172 = p__65171;
var map__65172__$1 = ((((!((map__65172 == null)))?(((((map__65172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65172):map__65172);
var arc = map__65172__$1;
var vec__65173 = cljs.core.get.call(null,map__65172__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var xc = cljs.core.nth.call(null,vec__65173,(0),null);
var yc = cljs.core.nth.call(null,vec__65173,(1),null);
return cljs.core.assoc.call(null,arc,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xc + dx),(yc + dy)], null));
}));
gamebase.geometry.path_chain = (function gamebase$geometry$path_chain(paths){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-type","path-type",128945249),new cljs.core.Keyword(null,"path-chain","path-chain",-276161151),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.apply.call(null,cljs.core.vector,paths)], null);
});

cljs.core._add_method.call(null,gamebase.geometry.precompute,new cljs.core.Keyword(null,"path-chain","path-chain",-276161151),(function (p__65182){
var map__65183 = p__65182;
var map__65183__$1 = ((((!((map__65183 == null)))?(((((map__65183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65183):map__65183);
var path = map__65183__$1;
var paths = cljs.core.get.call(null,map__65183__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var lengths = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,gamebase.geometry.path_length,paths));
var length = cljs.core.apply.call(null,cljs.core._PLUS_,lengths);
return cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"lengths","lengths",-851104122),lengths,new cljs.core.Keyword(null,"length","length",588987862),length);
}));

cljs.core._add_method.call(null,gamebase.geometry.path_length,new cljs.core.Keyword(null,"path-chain","path-chain",-276161151),(function (path){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(gamebase.geometry.precomputed.call(null,path));
}));

cljs.core._add_method.call(null,gamebase.geometry.path_point_at_length,new cljs.core.Keyword(null,"path-chain","path-chain",-276161151),(function (path,length){
var map__65185 = gamebase.geometry.precomputed.call(null,path);
var map__65185__$1 = ((((!((map__65185 == null)))?(((((map__65185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65185):map__65185);
var paths = cljs.core.get.call(null,map__65185__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var lengths = cljs.core.get.call(null,map__65185__$1,new cljs.core.Keyword(null,"lengths","lengths",-851104122));
var cnt = cljs.core.count.call(null,paths);
var n = (0);
var length_remaining = length;
while(true){
if((((length_remaining <= cljs.core.nth.call(null,lengths,n))) || (((n + (1)) === cnt)))){
return gamebase.geometry.path_point_at_length.call(null,cljs.core.nth.call(null,paths,n),length_remaining);
} else {
var G__65189 = (n + (1));
var G__65190 = (length_remaining - cljs.core.nth.call(null,lengths,n));
n = G__65189;
length_remaining = G__65190;
continue;
}
break;
}
}));

cljs.core._add_method.call(null,gamebase.geometry.angle_at_length,new cljs.core.Keyword(null,"path-chain","path-chain",-276161151),(function (path,length){
var map__65187 = gamebase.geometry.precomputed.call(null,path);
var map__65187__$1 = ((((!((map__65187 == null)))?(((((map__65187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65187):map__65187);
var paths = cljs.core.get.call(null,map__65187__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var lengths = cljs.core.get.call(null,map__65187__$1,new cljs.core.Keyword(null,"lengths","lengths",-851104122));
var cnt = cljs.core.count.call(null,paths);
var n = (0);
var length_remaining = length;
while(true){
if((((length_remaining <= cljs.core.nth.call(null,lengths,n))) || (((n + (1)) === cnt)))){
return gamebase.geometry.angle_at_length.call(null,cljs.core.nth.call(null,paths,n),length_remaining);
} else {
var G__65191 = (n + (1));
var G__65192 = (length_remaining - cljs.core.nth.call(null,lengths,n));
n = G__65191;
length_remaining = G__65192;
continue;
}
break;
}
}));


//# sourceMappingURL=geometry.js.map
