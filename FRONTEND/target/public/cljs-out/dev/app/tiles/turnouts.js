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
var map__20396_20402 = app.state.get_tile_extra.call(null,tx,ty);
var map__20396_20403__$1 = ((((!((map__20396_20402 == null)))?(((((map__20396_20402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20396_20402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20396_20402):map__20396_20402);
var state_20404 = cljs.core.get.call(null,map__20396_20403__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_20405 = ((32) * tx);
var y_20406 = ((32) * ty);
var vec__20397_20407 = (function (){var G__20401 = state_20404;
var G__20401__$1 = (((G__20401 instanceof cljs.core.Keyword))?G__20401.fqn:null);
switch (G__20401__$1) {
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
var src_x_20408 = cljs.core.nth.call(null,vec__20397_20407,(0),null);
var src_y_20409 = cljs.core.nth.call(null,vec__20397_20407,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_20408,src_y_20409,(8),(8),(x_20405 + (23)),(y_20406 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (tile_id,tx,ty,tile_info){
var map__20411_20417 = app.state.get_tile_extra.call(null,tx,ty);
var map__20411_20418__$1 = ((((!((map__20411_20417 == null)))?(((((map__20411_20417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20411_20417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20411_20417):map__20411_20417);
var state_20419 = cljs.core.get.call(null,map__20411_20418__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_20420 = ((32) * tx);
var y_20421 = ((32) * ty);
var vec__20412_20422 = (function (){var G__20416 = state_20419;
var G__20416__$1 = (((G__20416 instanceof cljs.core.Keyword))?G__20416.fqn:null);
switch (G__20416__$1) {
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
var src_x_20423 = cljs.core.nth.call(null,vec__20412_20422,(0),null);
var src_y_20424 = cljs.core.nth.call(null,vec__20412_20422,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_20423,src_y_20424,(8),(8),(x_20420 + (1)),(y_20421 + (12)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (tile_id,tx,ty,tile_info){
var map__20426_20432 = app.state.get_tile_extra.call(null,tx,ty);
var map__20426_20433__$1 = ((((!((map__20426_20432 == null)))?(((((map__20426_20432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20426_20432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20426_20432):map__20426_20432);
var state_20434 = cljs.core.get.call(null,map__20426_20433__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_20435 = ((32) * tx);
var y_20436 = ((32) * ty);
var vec__20427_20437 = (function (){var G__20431 = state_20434;
var G__20431__$1 = (((G__20431 instanceof cljs.core.Keyword))?G__20431.fqn:null);
switch (G__20431__$1) {
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
var src_x_20438 = cljs.core.nth.call(null,vec__20427_20437,(0),null);
var src_y_20439 = cljs.core.nth.call(null,vec__20427_20437,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_20438,src_y_20439,(8),(8),(x_20435 + (12)),(y_20436 + (1)));

return true;
}));
cljs.core._add_method.call(null,gamebase.systems.drawing.draw_tile_extra,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (tile_id,tx,ty,tile_info){
var map__20441_20447 = app.state.get_tile_extra.call(null,tx,ty);
var map__20441_20448__$1 = ((((!((map__20441_20447 == null)))?(((((map__20441_20447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20441_20447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20441_20447):map__20441_20447);
var state_20449 = cljs.core.get.call(null,map__20441_20448__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var x_20450 = ((32) * tx);
var y_20451 = ((32) * ty);
var vec__20442_20452 = (function (){var G__20446 = state_20449;
var G__20446__$1 = (((G__20446 instanceof cljs.core.Keyword))?G__20446.fqn:null);
switch (G__20446__$1) {
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
var src_x_20453 = cljs.core.nth.call(null,vec__20442_20452,(0),null);
var src_y_20454 = cljs.core.nth.call(null,vec__20442_20452,(1),null);
gamebase.systems.drawing._put_image.call(null,gamebase.resources.get_resource.call(null,"tiles.png"),src_x_20453,src_y_20454,(8),(8),(x_20450 + (12)),(y_20451 + (23)));

return true;
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285),(function (_,start_direction,___$1,___$2,___$3,p__20456){
var map__20457 = p__20456;
var map__20457__$1 = ((((!((map__20457 == null)))?(((((map__20457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20457):map__20457);
var tile_extra = map__20457__$1;
var state = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__20459 = start_direction;
var G__20459__$1 = (((G__20459 instanceof cljs.core.Keyword))?G__20459.fqn:null);
switch (G__20459__$1) {
case "w":
var G__20460 = state;
var G__20460__$1 = (((G__20460 instanceof cljs.core.Keyword))?G__20460.fqn:null);
switch (G__20460__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20460__$1)].join('')));

}

break;
case "s":
var G__20461 = state;
var G__20461__$1 = (((G__20461 instanceof cljs.core.Keyword))?G__20461.fqn:null);
switch (G__20461__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20461__$1)].join('')));

}

break;
case "n":
var G__20462 = state;
var G__20462__$1 = (((G__20462 instanceof cljs.core.Keyword))?G__20462.fqn:null);
switch (G__20462__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20462__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-et","track-et",1115037128),(function (_,start_direction,___$1,___$2,___$3,p__20467){
var map__20468 = p__20467;
var map__20468__$1 = ((((!((map__20468 == null)))?(((((map__20468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20468):map__20468);
var tile_extra = map__20468__$1;
var state = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__20470 = start_direction;
var G__20470__$1 = (((G__20470 instanceof cljs.core.Keyword))?G__20470.fqn:null);
switch (G__20470__$1) {
case "e":
var G__20471 = state;
var G__20471__$1 = (((G__20471 instanceof cljs.core.Keyword))?G__20471.fqn:null);
switch (G__20471__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20471__$1)].join('')));

}

break;
case "s":
var G__20472 = state;
var G__20472__$1 = (((G__20472 instanceof cljs.core.Keyword))?G__20472.fqn:null);
switch (G__20472__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20472__$1)].join('')));

}

break;
case "n":
var G__20473 = state;
var G__20473__$1 = (((G__20473 instanceof cljs.core.Keyword))?G__20473.fqn:null);
switch (G__20473__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20473__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-nt","track-nt",581283090),(function (_,start_direction,___$1,___$2,___$3,p__20478){
var map__20479 = p__20478;
var map__20479__$1 = ((((!((map__20479 == null)))?(((((map__20479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20479):map__20479);
var tile_extra = map__20479__$1;
var state = cljs.core.get.call(null,map__20479__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__20481 = start_direction;
var G__20481__$1 = (((G__20481 instanceof cljs.core.Keyword))?G__20481.fqn:null);
switch (G__20481__$1) {
case "e":
var G__20482 = state;
var G__20482__$1 = (((G__20482 instanceof cljs.core.Keyword))?G__20482.fqn:null);
switch (G__20482__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20482__$1)].join('')));

}

break;
case "n":
var G__20483 = state;
var G__20483__$1 = (((G__20483 instanceof cljs.core.Keyword))?G__20483.fqn:null);
switch (G__20483__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20483__$1)].join('')));

}

break;
case "w":
var G__20484 = state;
var G__20484__$1 = (((G__20484 instanceof cljs.core.Keyword))?G__20484.fqn:null);
switch (G__20484__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20484__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
cljs.core._add_method.call(null,app.tiles.general._active_tracks_from,new cljs.core.Keyword(null,"track-st","track-st",-232758332),(function (_,start_direction,___$1,___$2,___$3,p__20489){
var map__20490 = p__20489;
var map__20490__$1 = ((((!((map__20490 == null)))?(((((map__20490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20490):map__20490);
var tile_extra = map__20490__$1;
var state = cljs.core.get.call(null,map__20490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__20492 = start_direction;
var G__20492__$1 = (((G__20492 instanceof cljs.core.Keyword))?G__20492.fqn:null);
switch (G__20492__$1) {
case "e":
var G__20493 = state;
var G__20493__$1 = (((G__20493 instanceof cljs.core.Keyword))?G__20493.fqn:null);
switch (G__20493__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20493__$1)].join('')));

}

break;
case "s":
var G__20494 = state;
var G__20494__$1 = (((G__20494 instanceof cljs.core.Keyword))?G__20494.fqn:null);
switch (G__20494__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20494__$1)].join('')));

}

break;
case "w":
var G__20495 = state;
var G__20495__$1 = (((G__20495 instanceof cljs.core.Keyword))?G__20495.fqn:null);
switch (G__20495__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20495__$1)].join('')));

}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}));
app.tiles.turnouts._get_layer = (function app$tiles$turnouts$_get_layer(world,layer_key){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20500_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__20500_SHARP_),layer_key);
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(world))));
});
app.tiles.turnouts.is_turnout_QMARK_ = (function app$tiles$turnouts$is_turnout_QMARK_(tile_x,tile_y){
var map__20501 = cljs.core.deref.call(null,app.state.app_state);
var map__20501__$1 = ((((!((map__20501 == null)))?(((((map__20501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20501):map__20501);
var world = cljs.core.get.call(null,map__20501__$1,new cljs.core.Keyword(null,"world","world",-418292623));
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
return app.state.update_tile_extra.call(null,tile_x,tile_y,(function (p__20503){
var map__20504 = p__20503;
var map__20504__$1 = ((((!((map__20504 == null)))?(((((map__20504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20504):map__20504);
var extra = map__20504__$1;
var state = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var new_state = (function (){var G__20506 = state;
var G__20506__$1 = (((G__20506 instanceof cljs.core.Keyword))?G__20506.fqn:null);
switch (G__20506__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20506__$1)].join('')));

}
})();
return cljs.core.assoc.call(null,extra,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
}));
});

//# sourceMappingURL=turnouts.js.map
