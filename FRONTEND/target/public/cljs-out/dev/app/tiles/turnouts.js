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
var map__45518_45524 = app.state.get_tile_extra.call(null,tx,ty);
var map__45518_45525__$1 = ((((!((map__45518_45524 == null)))?(((((map__45518_45524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45518_45524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45518_45524):map__45518_45524);
var state_45526 = cljs.core.get.call(null,map__45518_45525__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_45527 = ((32) * tx);
var y_45528 = ((32) * ty);
var vec__45519_45529 = (function (){var G__45523 = state_45526;
var G__45523__$1 = (((G__45523 instanceof cljs.core.Keyword))?G__45523.fqn:null);
switch (G__45523__$1) {
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
var src_x_45530 = cljs.core.nth.call(null,vec__45519_45529,(0),null);
var src_y_45531 = cljs.core.nth.call(null,vec__45519_45529,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_45530,src_y_45531,(8),(8),(x_45527 + (23)),(y_45528 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (tile_id,tx,ty,tile_info){
var map__45533_45539 = app.state.get_tile_extra.call(null,tx,ty);
var map__45533_45540__$1 = ((((!((map__45533_45539 == null)))?(((((map__45533_45539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45533_45539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45533_45539):map__45533_45539);
var state_45541 = cljs.core.get.call(null,map__45533_45540__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_45542 = ((32) * tx);
var y_45543 = ((32) * ty);
var vec__45534_45544 = (function (){var G__45538 = state_45541;
var G__45538__$1 = (((G__45538 instanceof cljs.core.Keyword))?G__45538.fqn:null);
switch (G__45538__$1) {
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
var src_x_45545 = cljs.core.nth.call(null,vec__45534_45544,(0),null);
var src_y_45546 = cljs.core.nth.call(null,vec__45534_45544,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_45545,src_y_45546,(8),(8),(x_45542 + (1)),(y_45543 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (tile_id,tx,ty,tile_info){
var map__45548_45554 = app.state.get_tile_extra.call(null,tx,ty);
var map__45548_45555__$1 = ((((!((map__45548_45554 == null)))?(((((map__45548_45554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45548_45554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45548_45554):map__45548_45554);
var state_45556 = cljs.core.get.call(null,map__45548_45555__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_45557 = ((32) * tx);
var y_45558 = ((32) * ty);
var vec__45549_45559 = (function (){var G__45553 = state_45556;
var G__45553__$1 = (((G__45553 instanceof cljs.core.Keyword))?G__45553.fqn:null);
switch (G__45553__$1) {
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
var src_x_45560 = cljs.core.nth.call(null,vec__45549_45559,(0),null);
var src_y_45561 = cljs.core.nth.call(null,vec__45549_45559,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_45560,src_y_45561,(8),(8),(x_45557 + (12)),(y_45558 + (1)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (tile_id,tx,ty,tile_info){
var map__45563_45569 = app.state.get_tile_extra.call(null,tx,ty);
var map__45563_45570__$1 = ((((!((map__45563_45569 == null)))?(((((map__45563_45569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45563_45569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45563_45569):map__45563_45569);
var state_45571 = cljs.core.get.call(null,map__45563_45570__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_45572 = ((32) * tx);
var y_45573 = ((32) * ty);
var vec__45564_45574 = (function (){var G__45568 = state_45571;
var G__45568__$1 = (((G__45568 instanceof cljs.core.Keyword))?G__45568.fqn:null);
switch (G__45568__$1) {
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
var src_x_45575 = cljs.core.nth.call(null,vec__45564_45574,(0),null);
var src_y_45576 = cljs.core.nth.call(null,vec__45564_45574,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_45575,src_y_45576,(8),(8),(x_45572 + (12)),(y_45573 + (23)));

return true;
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (_,start_direction,___$1,___$2,___$3,p__45578){
var map__45579 = p__45578;
var map__45579__$1 = ((((!((map__45579 == null)))?(((((map__45579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45579):map__45579);
var tile_extra = map__45579__$1;
var state = cljs.core.get.call(null,map__45579__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__45581 = start_direction;
var G__45581__$1 = (((G__45581 instanceof cljs.core.Keyword))?G__45581.fqn:null);
switch (G__45581__$1) {
case "w":
var G__45582 = state;
var G__45582__$1 = (((G__45582 instanceof cljs.core.Keyword))?G__45582.fqn:null);
switch (G__45582__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45582__$1)].join('')));

}

break;
case "s":
var G__45583 = state;
var G__45583__$1 = (((G__45583 instanceof cljs.core.Keyword))?G__45583.fqn:null);
switch (G__45583__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45583__$1)].join('')));

}

break;
case "n":
var G__45584 = state;
var G__45584__$1 = (((G__45584 instanceof cljs.core.Keyword))?G__45584.fqn:null);
switch (G__45584__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45584__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (_,start_direction,___$1,___$2,___$3,p__45589){
var map__45590 = p__45589;
var map__45590__$1 = ((((!((map__45590 == null)))?(((((map__45590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45590):map__45590);
var tile_extra = map__45590__$1;
var state = cljs.core.get.call(null,map__45590__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__45592 = start_direction;
var G__45592__$1 = (((G__45592 instanceof cljs.core.Keyword))?G__45592.fqn:null);
switch (G__45592__$1) {
case "e":
var G__45593 = state;
var G__45593__$1 = (((G__45593 instanceof cljs.core.Keyword))?G__45593.fqn:null);
switch (G__45593__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45593__$1)].join('')));

}

break;
case "s":
var G__45594 = state;
var G__45594__$1 = (((G__45594 instanceof cljs.core.Keyword))?G__45594.fqn:null);
switch (G__45594__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45594__$1)].join('')));

}

break;
case "n":
var G__45595 = state;
var G__45595__$1 = (((G__45595 instanceof cljs.core.Keyword))?G__45595.fqn:null);
switch (G__45595__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45595__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (_,start_direction,___$1,___$2,___$3,p__45600){
var map__45601 = p__45600;
var map__45601__$1 = ((((!((map__45601 == null)))?(((((map__45601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45601):map__45601);
var tile_extra = map__45601__$1;
var state = cljs.core.get.call(null,map__45601__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__45603 = start_direction;
var G__45603__$1 = (((G__45603 instanceof cljs.core.Keyword))?G__45603.fqn:null);
switch (G__45603__$1) {
case "e":
var G__45604 = state;
var G__45604__$1 = (((G__45604 instanceof cljs.core.Keyword))?G__45604.fqn:null);
switch (G__45604__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45604__$1)].join('')));

}

break;
case "n":
var G__45605 = state;
var G__45605__$1 = (((G__45605 instanceof cljs.core.Keyword))?G__45605.fqn:null);
switch (G__45605__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45605__$1)].join('')));

}

break;
case "w":
var G__45606 = state;
var G__45606__$1 = (((G__45606 instanceof cljs.core.Keyword))?G__45606.fqn:null);
switch (G__45606__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45606__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (_,start_direction,___$1,___$2,___$3,p__45611){
var map__45612 = p__45611;
var map__45612__$1 = ((((!((map__45612 == null)))?(((((map__45612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45612):map__45612);
var tile_extra = map__45612__$1;
var state = cljs.core.get.call(null,map__45612__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__45614 = start_direction;
var G__45614__$1 = (((G__45614 instanceof cljs.core.Keyword))?G__45614.fqn:null);
switch (G__45614__$1) {
case "e":
var G__45615 = state;
var G__45615__$1 = (((G__45615 instanceof cljs.core.Keyword))?G__45615.fqn:null);
switch (G__45615__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45615__$1)].join('')));

}

break;
case "s":
var G__45616 = state;
var G__45616__$1 = (((G__45616 instanceof cljs.core.Keyword))?G__45616.fqn:null);
switch (G__45616__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45616__$1)].join('')));

}

break;
case "w":
var G__45617 = state;
var G__45617__$1 = (((G__45617 instanceof cljs.core.Keyword))?G__45617.fqn:null);
switch (G__45617__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45617__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
app.tiles.turnouts._get_layer = (function app$tiles$turnouts$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__45622_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__45622_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.tiles.turnouts.is_turnout_QMARK_ = (function app$tiles$turnouts$is_turnout_QMARK_(tile_x,tile_y){
var map__45623 = cljs.core.deref.call(null,app.state.app_state);
var map__45623__$1 = ((((!((map__45623 == null)))?(((((map__45623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45623):map__45623);
var world = cljs.core.get.call(null,map__45623__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
return app.state.update_tile_extra.call(null,tile_x,tile_y,(function (p__45625){
var map__45626 = p__45625;
var map__45626__$1 = ((((!((map__45626 == null)))?(((((map__45626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45626):map__45626);
var extra = map__45626__$1;
var state = cljs.core.get.call(null,map__45626__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var new_state = (function (){var G__45628 = state;
var G__45628__$1 = (((G__45628 instanceof cljs.core.Keyword))?G__45628.fqn:null);
switch (G__45628__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45628__$1)].join('')));

}
})();
return cljs.core.assoc.call(null,extra,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
}));
});

//# sourceMappingURL=turnouts.js.map
