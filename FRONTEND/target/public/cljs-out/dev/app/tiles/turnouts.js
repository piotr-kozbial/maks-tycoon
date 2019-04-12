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
var map__28484_28490 = app.state.get_tile_extra.call(null,tx,ty);
var map__28484_28491__$1 = ((((!((map__28484_28490 == null)))?(((((map__28484_28490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28484_28490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28484_28490):map__28484_28490);
var state_28492 = cljs.core.get.call(null,map__28484_28491__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_28493 = ((32) * tx);
var y_28494 = ((32) * ty);
var vec__28485_28495 = (function (){var G__28489 = state_28492;
var G__28489__$1 = (((G__28489 instanceof cljs.core.Keyword))?G__28489.fqn:null);
switch (G__28489__$1) {
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
var src_x_28496 = cljs.core.nth.call(null,vec__28485_28495,(0),null);
var src_y_28497 = cljs.core.nth.call(null,vec__28485_28495,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_28496,src_y_28497,(8),(8),(x_28493 + (23)),(y_28494 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (tile_id,tx,ty,tile_info){
var map__28499_28505 = app.state.get_tile_extra.call(null,tx,ty);
var map__28499_28506__$1 = ((((!((map__28499_28505 == null)))?(((((map__28499_28505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28499_28505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28499_28505):map__28499_28505);
var state_28507 = cljs.core.get.call(null,map__28499_28506__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_28508 = ((32) * tx);
var y_28509 = ((32) * ty);
var vec__28500_28510 = (function (){var G__28504 = state_28507;
var G__28504__$1 = (((G__28504 instanceof cljs.core.Keyword))?G__28504.fqn:null);
switch (G__28504__$1) {
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
var src_x_28511 = cljs.core.nth.call(null,vec__28500_28510,(0),null);
var src_y_28512 = cljs.core.nth.call(null,vec__28500_28510,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_28511,src_y_28512,(8),(8),(x_28508 + (1)),(y_28509 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (tile_id,tx,ty,tile_info){
var map__28514_28520 = app.state.get_tile_extra.call(null,tx,ty);
var map__28514_28521__$1 = ((((!((map__28514_28520 == null)))?(((((map__28514_28520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28514_28520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28514_28520):map__28514_28520);
var state_28522 = cljs.core.get.call(null,map__28514_28521__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_28523 = ((32) * tx);
var y_28524 = ((32) * ty);
var vec__28515_28525 = (function (){var G__28519 = state_28522;
var G__28519__$1 = (((G__28519 instanceof cljs.core.Keyword))?G__28519.fqn:null);
switch (G__28519__$1) {
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
var src_x_28526 = cljs.core.nth.call(null,vec__28515_28525,(0),null);
var src_y_28527 = cljs.core.nth.call(null,vec__28515_28525,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_28526,src_y_28527,(8),(8),(x_28523 + (12)),(y_28524 + (1)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (tile_id,tx,ty,tile_info){
var map__28529_28535 = app.state.get_tile_extra.call(null,tx,ty);
var map__28529_28536__$1 = ((((!((map__28529_28535 == null)))?(((((map__28529_28535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28529_28535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28529_28535):map__28529_28535);
var state_28537 = cljs.core.get.call(null,map__28529_28536__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_28538 = ((32) * tx);
var y_28539 = ((32) * ty);
var vec__28530_28540 = (function (){var G__28534 = state_28537;
var G__28534__$1 = (((G__28534 instanceof cljs.core.Keyword))?G__28534.fqn:null);
switch (G__28534__$1) {
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
var src_x_28541 = cljs.core.nth.call(null,vec__28530_28540,(0),null);
var src_y_28542 = cljs.core.nth.call(null,vec__28530_28540,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_28541,src_y_28542,(8),(8),(x_28538 + (12)),(y_28539 + (23)));

return true;
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (_,start_direction,___$1,___$2,___$3,p__28544){
var map__28545 = p__28544;
var map__28545__$1 = ((((!((map__28545 == null)))?(((((map__28545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28545):map__28545);
var tile_extra = map__28545__$1;
var state = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__28547 = start_direction;
var G__28547__$1 = (((G__28547 instanceof cljs.core.Keyword))?G__28547.fqn:null);
switch (G__28547__$1) {
case "w":
var G__28548 = state;
var G__28548__$1 = (((G__28548 instanceof cljs.core.Keyword))?G__28548.fqn:null);
switch (G__28548__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28548__$1)].join('')));

}

break;
case "s":
var G__28549 = state;
var G__28549__$1 = (((G__28549 instanceof cljs.core.Keyword))?G__28549.fqn:null);
switch (G__28549__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28549__$1)].join('')));

}

break;
case "n":
var G__28550 = state;
var G__28550__$1 = (((G__28550 instanceof cljs.core.Keyword))?G__28550.fqn:null);
switch (G__28550__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28550__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (_,start_direction,___$1,___$2,___$3,p__28555){
var map__28556 = p__28555;
var map__28556__$1 = ((((!((map__28556 == null)))?(((((map__28556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28556):map__28556);
var tile_extra = map__28556__$1;
var state = cljs.core.get.call(null,map__28556__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__28558 = start_direction;
var G__28558__$1 = (((G__28558 instanceof cljs.core.Keyword))?G__28558.fqn:null);
switch (G__28558__$1) {
case "e":
var G__28559 = state;
var G__28559__$1 = (((G__28559 instanceof cljs.core.Keyword))?G__28559.fqn:null);
switch (G__28559__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28559__$1)].join('')));

}

break;
case "s":
var G__28560 = state;
var G__28560__$1 = (((G__28560 instanceof cljs.core.Keyword))?G__28560.fqn:null);
switch (G__28560__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28560__$1)].join('')));

}

break;
case "n":
var G__28561 = state;
var G__28561__$1 = (((G__28561 instanceof cljs.core.Keyword))?G__28561.fqn:null);
switch (G__28561__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28561__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (_,start_direction,___$1,___$2,___$3,p__28566){
var map__28567 = p__28566;
var map__28567__$1 = ((((!((map__28567 == null)))?(((((map__28567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28567):map__28567);
var tile_extra = map__28567__$1;
var state = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__28569 = start_direction;
var G__28569__$1 = (((G__28569 instanceof cljs.core.Keyword))?G__28569.fqn:null);
switch (G__28569__$1) {
case "e":
var G__28570 = state;
var G__28570__$1 = (((G__28570 instanceof cljs.core.Keyword))?G__28570.fqn:null);
switch (G__28570__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28570__$1)].join('')));

}

break;
case "n":
var G__28571 = state;
var G__28571__$1 = (((G__28571 instanceof cljs.core.Keyword))?G__28571.fqn:null);
switch (G__28571__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28571__$1)].join('')));

}

break;
case "w":
var G__28572 = state;
var G__28572__$1 = (((G__28572 instanceof cljs.core.Keyword))?G__28572.fqn:null);
switch (G__28572__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28572__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (_,start_direction,___$1,___$2,___$3,p__28577){
var map__28578 = p__28577;
var map__28578__$1 = ((((!((map__28578 == null)))?(((((map__28578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28578):map__28578);
var tile_extra = map__28578__$1;
var state = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__28580 = start_direction;
var G__28580__$1 = (((G__28580 instanceof cljs.core.Keyword))?G__28580.fqn:null);
switch (G__28580__$1) {
case "e":
var G__28581 = state;
var G__28581__$1 = (((G__28581 instanceof cljs.core.Keyword))?G__28581.fqn:null);
switch (G__28581__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28581__$1)].join('')));

}

break;
case "s":
var G__28582 = state;
var G__28582__$1 = (((G__28582 instanceof cljs.core.Keyword))?G__28582.fqn:null);
switch (G__28582__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28582__$1)].join('')));

}

break;
case "w":
var G__28583 = state;
var G__28583__$1 = (((G__28583 instanceof cljs.core.Keyword))?G__28583.fqn:null);
switch (G__28583__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28583__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
app.tiles.turnouts._get_layer = (function app$tiles$turnouts$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28588_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__28588_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.tiles.turnouts.is_turnout_QMARK_ = (function app$tiles$turnouts$is_turnout_QMARK_(tile_x,tile_y){
var map__28589 = cljs.core.deref.call(null,app.state.app_state);
var map__28589__$1 = ((((!((map__28589 == null)))?(((((map__28589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28589):map__28589);
var world = cljs.core.get.call(null,map__28589__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
return app.state.update_tile_extra.call(null,tile_x,tile_y,(function (p__28591){
var map__28592 = p__28591;
var map__28592__$1 = ((((!((map__28592 == null)))?(((((map__28592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);
var extra = map__28592__$1;
var state = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var new_state = (function (){var G__28594 = state;
var G__28594__$1 = (((G__28594 instanceof cljs.core.Keyword))?G__28594.fqn:null);
switch (G__28594__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28594__$1)].join('')));

}
})();
return cljs.core.assoc.call(null,extra,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
}));
});

//# sourceMappingURL=turnouts.js.map
