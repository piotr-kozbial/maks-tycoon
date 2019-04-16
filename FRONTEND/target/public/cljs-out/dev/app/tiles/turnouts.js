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
var map__36486_36492 = app.state.get_tile_extra.call(null,tx,ty);
var map__36486_36493__$1 = ((((!((map__36486_36492 == null)))?(((((map__36486_36492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36486_36492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36486_36492):map__36486_36492);
var state_36494 = cljs.core.get.call(null,map__36486_36493__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_36495 = ((32) * tx);
var y_36496 = ((32) * ty);
var vec__36487_36497 = (function (){var G__36491 = state_36494;
var G__36491__$1 = (((G__36491 instanceof cljs.core.Keyword))?G__36491.fqn:null);
switch (G__36491__$1) {
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
var src_x_36498 = cljs.core.nth.call(null,vec__36487_36497,(0),null);
var src_y_36499 = cljs.core.nth.call(null,vec__36487_36497,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_36498,src_y_36499,(8),(8),(x_36495 + (23)),(y_36496 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (tile_id,tx,ty,tile_info){
var map__36501_36507 = app.state.get_tile_extra.call(null,tx,ty);
var map__36501_36508__$1 = ((((!((map__36501_36507 == null)))?(((((map__36501_36507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36501_36507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36501_36507):map__36501_36507);
var state_36509 = cljs.core.get.call(null,map__36501_36508__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_36510 = ((32) * tx);
var y_36511 = ((32) * ty);
var vec__36502_36512 = (function (){var G__36506 = state_36509;
var G__36506__$1 = (((G__36506 instanceof cljs.core.Keyword))?G__36506.fqn:null);
switch (G__36506__$1) {
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
var src_x_36513 = cljs.core.nth.call(null,vec__36502_36512,(0),null);
var src_y_36514 = cljs.core.nth.call(null,vec__36502_36512,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_36513,src_y_36514,(8),(8),(x_36510 + (1)),(y_36511 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (tile_id,tx,ty,tile_info){
var map__36516_36522 = app.state.get_tile_extra.call(null,tx,ty);
var map__36516_36523__$1 = ((((!((map__36516_36522 == null)))?(((((map__36516_36522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36516_36522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36516_36522):map__36516_36522);
var state_36524 = cljs.core.get.call(null,map__36516_36523__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_36525 = ((32) * tx);
var y_36526 = ((32) * ty);
var vec__36517_36527 = (function (){var G__36521 = state_36524;
var G__36521__$1 = (((G__36521 instanceof cljs.core.Keyword))?G__36521.fqn:null);
switch (G__36521__$1) {
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
var src_x_36528 = cljs.core.nth.call(null,vec__36517_36527,(0),null);
var src_y_36529 = cljs.core.nth.call(null,vec__36517_36527,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_36528,src_y_36529,(8),(8),(x_36525 + (12)),(y_36526 + (1)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (tile_id,tx,ty,tile_info){
var map__36531_36537 = app.state.get_tile_extra.call(null,tx,ty);
var map__36531_36538__$1 = ((((!((map__36531_36537 == null)))?(((((map__36531_36537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36531_36537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36531_36537):map__36531_36537);
var state_36539 = cljs.core.get.call(null,map__36531_36538__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_36540 = ((32) * tx);
var y_36541 = ((32) * ty);
var vec__36532_36542 = (function (){var G__36536 = state_36539;
var G__36536__$1 = (((G__36536 instanceof cljs.core.Keyword))?G__36536.fqn:null);
switch (G__36536__$1) {
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
var src_x_36543 = cljs.core.nth.call(null,vec__36532_36542,(0),null);
var src_y_36544 = cljs.core.nth.call(null,vec__36532_36542,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_36543,src_y_36544,(8),(8),(x_36540 + (12)),(y_36541 + (23)));

return true;
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (_,start_direction,___$1,___$2,___$3,p__36546){
var map__36547 = p__36546;
var map__36547__$1 = ((((!((map__36547 == null)))?(((((map__36547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36547):map__36547);
var tile_extra = map__36547__$1;
var state = cljs.core.get.call(null,map__36547__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__36549 = start_direction;
var G__36549__$1 = (((G__36549 instanceof cljs.core.Keyword))?G__36549.fqn:null);
switch (G__36549__$1) {
case "w":
var G__36550 = state;
var G__36550__$1 = (((G__36550 instanceof cljs.core.Keyword))?G__36550.fqn:null);
switch (G__36550__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36550__$1)].join('')));

}

break;
case "s":
var G__36551 = state;
var G__36551__$1 = (((G__36551 instanceof cljs.core.Keyword))?G__36551.fqn:null);
switch (G__36551__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36551__$1)].join('')));

}

break;
case "n":
var G__36552 = state;
var G__36552__$1 = (((G__36552 instanceof cljs.core.Keyword))?G__36552.fqn:null);
switch (G__36552__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36552__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (_,start_direction,___$1,___$2,___$3,p__36557){
var map__36558 = p__36557;
var map__36558__$1 = ((((!((map__36558 == null)))?(((((map__36558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36558):map__36558);
var tile_extra = map__36558__$1;
var state = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__36560 = start_direction;
var G__36560__$1 = (((G__36560 instanceof cljs.core.Keyword))?G__36560.fqn:null);
switch (G__36560__$1) {
case "e":
var G__36561 = state;
var G__36561__$1 = (((G__36561 instanceof cljs.core.Keyword))?G__36561.fqn:null);
switch (G__36561__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36561__$1)].join('')));

}

break;
case "s":
var G__36562 = state;
var G__36562__$1 = (((G__36562 instanceof cljs.core.Keyword))?G__36562.fqn:null);
switch (G__36562__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36562__$1)].join('')));

}

break;
case "n":
var G__36563 = state;
var G__36563__$1 = (((G__36563 instanceof cljs.core.Keyword))?G__36563.fqn:null);
switch (G__36563__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36563__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (_,start_direction,___$1,___$2,___$3,p__36568){
var map__36569 = p__36568;
var map__36569__$1 = ((((!((map__36569 == null)))?(((((map__36569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36569):map__36569);
var tile_extra = map__36569__$1;
var state = cljs.core.get.call(null,map__36569__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__36571 = start_direction;
var G__36571__$1 = (((G__36571 instanceof cljs.core.Keyword))?G__36571.fqn:null);
switch (G__36571__$1) {
case "e":
var G__36572 = state;
var G__36572__$1 = (((G__36572 instanceof cljs.core.Keyword))?G__36572.fqn:null);
switch (G__36572__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36572__$1)].join('')));

}

break;
case "n":
var G__36573 = state;
var G__36573__$1 = (((G__36573 instanceof cljs.core.Keyword))?G__36573.fqn:null);
switch (G__36573__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36573__$1)].join('')));

}

break;
case "w":
var G__36574 = state;
var G__36574__$1 = (((G__36574 instanceof cljs.core.Keyword))?G__36574.fqn:null);
switch (G__36574__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36574__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (_,start_direction,___$1,___$2,___$3,p__36579){
var map__36580 = p__36579;
var map__36580__$1 = ((((!((map__36580 == null)))?(((((map__36580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36580):map__36580);
var tile_extra = map__36580__$1;
var state = cljs.core.get.call(null,map__36580__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__36582 = start_direction;
var G__36582__$1 = (((G__36582 instanceof cljs.core.Keyword))?G__36582.fqn:null);
switch (G__36582__$1) {
case "e":
var G__36583 = state;
var G__36583__$1 = (((G__36583 instanceof cljs.core.Keyword))?G__36583.fqn:null);
switch (G__36583__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36583__$1)].join('')));

}

break;
case "s":
var G__36584 = state;
var G__36584__$1 = (((G__36584 instanceof cljs.core.Keyword))?G__36584.fqn:null);
switch (G__36584__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36584__$1)].join('')));

}

break;
case "w":
var G__36585 = state;
var G__36585__$1 = (((G__36585 instanceof cljs.core.Keyword))?G__36585.fqn:null);
switch (G__36585__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36585__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
app.tiles.turnouts._get_layer = (function app$tiles$turnouts$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36590_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__36590_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.tiles.turnouts.is_turnout_QMARK_ = (function app$tiles$turnouts$is_turnout_QMARK_(tile_x,tile_y){
var map__36591 = cljs.core.deref.call(null,app.state.app_state);
var map__36591__$1 = ((((!((map__36591 == null)))?(((((map__36591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591):map__36591);
var world = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
return app.state.update_tile_extra.call(null,tile_x,tile_y,(function (p__36593){
var map__36594 = p__36593;
var map__36594__$1 = ((((!((map__36594 == null)))?(((((map__36594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36594):map__36594);
var extra = map__36594__$1;
var state = cljs.core.get.call(null,map__36594__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var new_state = (function (){var G__36596 = state;
var G__36596__$1 = (((G__36596 instanceof cljs.core.Keyword))?G__36596.fqn:null);
switch (G__36596__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36596__$1)].join('')));

}
})();
return cljs.core.assoc.call(null,extra,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
}));
});

//# sourceMappingURL=turnouts.js.map
