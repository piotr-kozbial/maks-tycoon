// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.tiles.turnouts');
goog.require('cljs.core');
goog.require('app.tiles.general');
goog.require('app.state');
goog.require('gamebase.layers');
goog.require('gamebase.resources');
goog.require('gamebase.systems.drawing');
goog.require('clojure.set');
cljs.core._add_method.call(null,app.tiles.general.initialize_tile_extra,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (tile_id,tile_x,tile_y,tile_info){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"straight-left","straight-left",-1759089169)], null);
}));
cljs.core._add_method.call(null,app.tiles.general.initialize_tile_extra,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (tile_id,tile_x,tile_y,tile_info){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"straight-left","straight-left",-1759089169)], null);
}));
cljs.core._add_method.call(null,app.tiles.general.initialize_tile_extra,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (tile_id,tile_x,tile_y,tile_info){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"straight-left","straight-left",-1759089169)], null);
}));
cljs.core._add_method.call(null,app.tiles.general.initialize_tile_extra,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (tile_id,tile_x,tile_y,tile_info){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"straight-left","straight-left",-1759089169)], null);
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (tile_id,tx,ty,tile_info){
var map__65386_65392 = app.state.get_tile_extra.call(null,tx,ty);
var map__65386_65393__$1 = ((((!((map__65386_65392 == null)))?(((((map__65386_65392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65386_65392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65386_65392):map__65386_65392);
var state_65394 = cljs.core.get.call(null,map__65386_65393__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_65395 = ((32) * tx);
var y_65396 = ((32) * ty);
var vec__65387_65397 = (function (){var G__65391 = state_65394;
var G__65391__$1 = (((G__65391 instanceof cljs.core.Keyword))?G__65391.fqn:null);
switch (G__65391__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(384),(0)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(393),(0)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(384),(9)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(393),(9)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(402),(0)], null);

}
})();
var src_x_65398 = cljs.core.nth.call(null,vec__65387_65397,(0),null);
var src_y_65399 = cljs.core.nth.call(null,vec__65387_65397,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_65398,src_y_65399,(8),(8),(x_65395 + (23)),(y_65396 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (tile_id,tx,ty,tile_info){
var map__65401_65407 = app.state.get_tile_extra.call(null,tx,ty);
var map__65401_65408__$1 = ((((!((map__65401_65407 == null)))?(((((map__65401_65407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65401_65407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65401_65407):map__65401_65407);
var state_65409 = cljs.core.get.call(null,map__65401_65408__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_65410 = ((32) * tx);
var y_65411 = ((32) * ty);
var vec__65402_65412 = (function (){var G__65406 = state_65409;
var G__65406__$1 = (((G__65406 instanceof cljs.core.Keyword))?G__65406.fqn:null);
switch (G__65406__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(404),(0)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(413),(0)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(404),(9)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(413),(9)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(402),(0)], null);

}
})();
var src_x_65413 = cljs.core.nth.call(null,vec__65402_65412,(0),null);
var src_y_65414 = cljs.core.nth.call(null,vec__65402_65412,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_65413,src_y_65414,(8),(8),(x_65410 + (1)),(y_65411 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (tile_id,tx,ty,tile_info){
var map__65416_65422 = app.state.get_tile_extra.call(null,tx,ty);
var map__65416_65423__$1 = ((((!((map__65416_65422 == null)))?(((((map__65416_65422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65416_65422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65416_65422):map__65416_65422);
var state_65424 = cljs.core.get.call(null,map__65416_65423__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_65425 = ((32) * tx);
var y_65426 = ((32) * ty);
var vec__65417_65427 = (function (){var G__65421 = state_65424;
var G__65421__$1 = (((G__65421 instanceof cljs.core.Keyword))?G__65421.fqn:null);
switch (G__65421__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(404),(20)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(413),(20)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(404),(29)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(413),(29)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(402),(20)], null);

}
})();
var src_x_65428 = cljs.core.nth.call(null,vec__65417_65427,(0),null);
var src_y_65429 = cljs.core.nth.call(null,vec__65417_65427,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_65428,src_y_65429,(8),(8),(x_65425 + (12)),(y_65426 + (1)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (tile_id,tx,ty,tile_info){
var map__65431_65437 = app.state.get_tile_extra.call(null,tx,ty);
var map__65431_65438__$1 = ((((!((map__65431_65437 == null)))?(((((map__65431_65437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65431_65437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65431_65437):map__65431_65437);
var state_65439 = cljs.core.get.call(null,map__65431_65438__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_65440 = ((32) * tx);
var y_65441 = ((32) * ty);
var vec__65432_65442 = (function (){var G__65436 = state_65439;
var G__65436__$1 = (((G__65436 instanceof cljs.core.Keyword))?G__65436.fqn:null);
switch (G__65436__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(384),(20)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(393),(20)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(384),(29)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(393),(29)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(402),(20)], null);

}
})();
var src_x_65443 = cljs.core.nth.call(null,vec__65432_65442,(0),null);
var src_y_65444 = cljs.core.nth.call(null,vec__65432_65442,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_65443,src_y_65444,(8),(8),(x_65440 + (12)),(y_65441 + (23)));

return true;
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (_,start_direction,___$1,___$2,___$3,p__65446){
var map__65447 = p__65446;
var map__65447__$1 = ((((!((map__65447 == null)))?(((((map__65447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65447):map__65447);
var tile_extra = map__65447__$1;
var state = cljs.core.get.call(null,map__65447__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__65449 = start_direction;
var G__65449__$1 = (((G__65449 instanceof cljs.core.Keyword))?G__65449.fqn:null);
switch (G__65449__$1) {
case "w":
var G__65450 = state;
var G__65450__$1 = (((G__65450 instanceof cljs.core.Keyword))?G__65450.fqn:null);
switch (G__65450__$1) {
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65450__$1)].join('')));

}

break;
case "s":
var G__65451 = state;
var G__65451__$1 = (((G__65451 instanceof cljs.core.Keyword))?G__65451.fqn:null);
switch (G__65451__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65451__$1)].join('')));

}

break;
case "n":
var G__65452 = state;
var G__65452__$1 = (((G__65452 instanceof cljs.core.Keyword))?G__65452.fqn:null);
switch (G__65452__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65452__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (_,start_direction,___$1,___$2,___$3,p__65457){
var map__65458 = p__65457;
var map__65458__$1 = ((((!((map__65458 == null)))?(((((map__65458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65458):map__65458);
var tile_extra = map__65458__$1;
var state = cljs.core.get.call(null,map__65458__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__65460 = start_direction;
var G__65460__$1 = (((G__65460 instanceof cljs.core.Keyword))?G__65460.fqn:null);
switch (G__65460__$1) {
case "e":
var G__65461 = state;
var G__65461__$1 = (((G__65461 instanceof cljs.core.Keyword))?G__65461.fqn:null);
switch (G__65461__$1) {
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65461__$1)].join('')));

}

break;
case "s":
var G__65462 = state;
var G__65462__$1 = (((G__65462 instanceof cljs.core.Keyword))?G__65462.fqn:null);
switch (G__65462__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65462__$1)].join('')));

}

break;
case "n":
var G__65463 = state;
var G__65463__$1 = (((G__65463 instanceof cljs.core.Keyword))?G__65463.fqn:null);
switch (G__65463__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65463__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (_,start_direction,___$1,___$2,___$3,p__65468){
var map__65469 = p__65468;
var map__65469__$1 = ((((!((map__65469 == null)))?(((((map__65469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65469):map__65469);
var tile_extra = map__65469__$1;
var state = cljs.core.get.call(null,map__65469__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__65471 = start_direction;
var G__65471__$1 = (((G__65471 instanceof cljs.core.Keyword))?G__65471.fqn:null);
switch (G__65471__$1) {
case "e":
var G__65472 = state;
var G__65472__$1 = (((G__65472 instanceof cljs.core.Keyword))?G__65472.fqn:null);
switch (G__65472__$1) {
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65472__$1)].join('')));

}

break;
case "n":
var G__65473 = state;
var G__65473__$1 = (((G__65473 instanceof cljs.core.Keyword))?G__65473.fqn:null);
switch (G__65473__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65473__$1)].join('')));

}

break;
case "w":
var G__65474 = state;
var G__65474__$1 = (((G__65474 instanceof cljs.core.Keyword))?G__65474.fqn:null);
switch (G__65474__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"n","n",562130025)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65474__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (_,start_direction,___$1,___$2,___$3,p__65479){
var map__65480 = p__65479;
var map__65480__$1 = ((((!((map__65480 == null)))?(((((map__65480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65480):map__65480);
var tile_extra = map__65480__$1;
var state = cljs.core.get.call(null,map__65480__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__65482 = start_direction;
var G__65482__$1 = (((G__65482 instanceof cljs.core.Keyword))?G__65482.fqn:null);
switch (G__65482__$1) {
case "e":
var G__65483 = state;
var G__65483__$1 = (((G__65483 instanceof cljs.core.Keyword))?G__65483.fqn:null);
switch (G__65483__$1) {
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65483__$1)].join('')));

}

break;
case "s":
var G__65484 = state;
var G__65484__$1 = (((G__65484 instanceof cljs.core.Keyword))?G__65484.fqn:null);
switch (G__65484__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65484__$1)].join('')));

}

break;
case "w":
var G__65485 = state;
var G__65485__$1 = (((G__65485 instanceof cljs.core.Keyword))?G__65485.fqn:null);
switch (G__65485__$1) {
case "straight-right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "straight-left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65485__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
app.tiles.turnouts._get_layer = (function app$tiles$turnouts$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__65490_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__65490_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.tiles.turnouts.is_turnout_QMARK_ = (function app$tiles$turnouts$is_turnout_QMARK_(tile_x,tile_y){
var map__65491 = cljs.core.deref.call(null,app.state.app_state);
var map__65491__$1 = ((((!((map__65491 == null)))?(((((map__65491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65491):map__65491);
var world = cljs.core.get.call(null,map__65491__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var layer = app.tiles.turnouts._get_layer.call(null,world,new cljs.core.Keyword(null,"foreground","foreground",499022036));
var info = gamebase.layers.get_tile_info_from_layer.call(null,new cljs.core.Keyword(null,"tile-context","tile-context",32165727).cljs$core$IFn$_invoke$arity$1(world),layer,tile_x,tile_y);
return cljs.core.not_empty.call(null,clojure.set.intersection.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"track-st","track-st",-232758332),null,new cljs.core.Keyword(null,"track-et","track-et",1115037128),null,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),null,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),null], null), null),cljs.core.apply.call(null,cljs.core.hash_set,(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
});
app.tiles.turnouts.cycle_turnout_state = (function app$tiles$turnouts$cycle_turnout_state(tile_x,tile_y){
return app.state.update_tile_extra.call(null,tile_x,tile_y,(function (p__65493){
var map__65494 = p__65493;
var map__65494__$1 = ((((!((map__65494 == null)))?(((((map__65494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65494):map__65494);
var extra = map__65494__$1;
var state = cljs.core.get.call(null,map__65494__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var new_state = (function (){var G__65496 = state;
var G__65496__$1 = (((G__65496 instanceof cljs.core.Keyword))?G__65496.fqn:null);
switch (G__65496__$1) {
case "straight-right":
return new cljs.core.Keyword(null,"straight-left","straight-left",-1759089169);

break;
case "straight-left":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "right":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "left":
return new cljs.core.Keyword(null,"straight-right","straight-right",-423127994);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65496__$1)].join('')));

}
})();
return cljs.core.assoc.call(null,extra,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
}));
});

//# sourceMappingURL=turnouts.js.map
