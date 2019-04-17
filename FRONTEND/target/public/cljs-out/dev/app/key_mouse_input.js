// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.key_mouse_input');
goog.require('cljs.core');
goog.require('app.ecs.entities.locomotive');
goog.require('app.ecs.entities.carriage');
goog.require('gamebase.ecs');
goog.require('gamebase.events');
goog.require('gamebase.event_queue');
goog.require('gamebase.canvas_control');
goog.require('app.state');
goog.require('app.world_interop');
goog.require('app.tiles.turnouts');
goog.require('app.ui.ui_state');
goog.require('app.scratch.scratch');
app.key_mouse_input.takeover_mouse_click = (function app$key_mouse_input$takeover_mouse_click(owner_id,handler){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-mouse","key-mouse",-747855985),new cljs.core.Keyword(null,"click-owner","click-owner",195213269)], null),owner_id);

return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-mouse","key-mouse",-747855985),new cljs.core.Keyword(null,"click-handler","click-handler",1157178954)], null),handler);
});
app.key_mouse_input.mouse_click_owner = (function app$key_mouse_input$mouse_click_owner(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-mouse","key-mouse",-747855985),new cljs.core.Keyword(null,"click-owner","click-owner",195213269)], null));
});
app.key_mouse_input.giveup_mouse_click = (function app$key_mouse_input$giveup_mouse_click(owner_id){
if(cljs.core._EQ_.call(null,owner_id,app.key_mouse_input.mouse_click_owner.call(null))){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-mouse","key-mouse",-747855985),new cljs.core.Keyword(null,"click-owner","click-owner",195213269)], null),null);

return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-mouse","key-mouse",-747855985),new cljs.core.Keyword(null,"click-handler","click-handler",1157178954)], null),null);
} else {
return null;
}
});
app.key_mouse_input.setup_key_handler = (function app$key_mouse_input$setup_key_handler(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-key-typed","canvas-key-typed",258203546),(function (p__67248){
var map__67249 = p__67248;
var map__67249__$1 = ((((!((map__67249 == null)))?(((((map__67249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67249):map__67249);
var key = cljs.core.get.call(null,map__67249__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var x = cljs.core.get.call(null,map__67249__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__67249__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__5457__auto__ = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__67251 = temp__5457__auto__;
var conv_x = cljs.core.nth.call(null,vec__67251,(0),null);
var conv_y = cljs.core.nth.call(null,vec__67251,(1),null);
var world_x = conv_x.call(null,x);
var world_y = conv_y.call(null,y);
var tile_x = cljs.core.quot.call(null,world_x,(32));
var tile_y = cljs.core.quot.call(null,world_y,(32));
var G__67254 = key;
switch (G__67254) {
case "a":
var id = cljs.core.keyword.call(null,["loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.state.get_fresh_entity_id.call(null))].join(''));
var loc = app.ecs.entities.locomotive.mk_entity.call(null,id,(1),(1));
app.world_interop.inject_entity.call(null,loc);

return app.world_interop.send_to_entity.call(null,loc,new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660));

break;
case "q":
var id = cljs.core.keyword.call(null,["car-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.state.get_fresh_entity_id.call(null))].join(''));
var car = app.ecs.entities.carriage.mk_entity.call(null,id,tile_x,tile_y);
app.world_interop.inject_entity.call(null,car);

return app.world_interop.send_to_entity.call(null,car,new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660));

break;
case "w":
var tile_x__$1 = (4);
var tile_y__$1 = (1);
var loc_id = cljs.core.keyword.call(null,["loc-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.state.get_fresh_entity_id.call(null))].join(''));
var loc = app.ecs.entities.locomotive.mk_entity.call(null,loc_id,tile_x__$1,tile_y__$1);
var car_id = cljs.core.keyword.call(null,["car-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.state.get_fresh_entity_id.call(null))].join(''));
var car = app.ecs.entities.carriage.mk_entity.call(null,car_id,(tile_x__$1 - (1)),tile_y__$1);
var car2_id = cljs.core.keyword.call(null,["car-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.state.get_fresh_entity_id.call(null))].join(''));
var car2 = app.ecs.entities.carriage.mk_entity.call(null,car2_id,(tile_x__$1 - (2)),tile_y__$1);
var car3_id = cljs.core.keyword.call(null,["car-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.state.get_fresh_entity_id.call(null))].join(''));
var car3 = app.ecs.entities.carriage.mk_entity.call(null,car3_id,(tile_x__$1 - (3)),tile_y__$1);
var seq__67255_67260 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,car,car2,car3], null));
var chunk__67256_67261 = null;
var count__67257_67262 = (0);
var i__67258_67263 = (0);
while(true){
if((i__67258_67263 < count__67257_67262)){
var e_67264 = cljs.core._nth.call(null,chunk__67256_67261,i__67258_67263);
app.world_interop.inject_entity.call(null,e_67264);

app.world_interop.send_to_entity.call(null,e_67264,new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660));


var G__67265 = seq__67255_67260;
var G__67266 = chunk__67256_67261;
var G__67267 = count__67257_67262;
var G__67268 = (i__67258_67263 + (1));
seq__67255_67260 = G__67265;
chunk__67256_67261 = G__67266;
count__67257_67262 = G__67267;
i__67258_67263 = G__67268;
continue;
} else {
var temp__5457__auto___67269__$1 = cljs.core.seq.call(null,seq__67255_67260);
if(temp__5457__auto___67269__$1){
var seq__67255_67270__$1 = temp__5457__auto___67269__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67255_67270__$1)){
var c__4351__auto___67271 = cljs.core.chunk_first.call(null,seq__67255_67270__$1);
var G__67272 = cljs.core.chunk_rest.call(null,seq__67255_67270__$1);
var G__67273 = c__4351__auto___67271;
var G__67274 = cljs.core.count.call(null,c__4351__auto___67271);
var G__67275 = (0);
seq__67255_67260 = G__67272;
chunk__67256_67261 = G__67273;
count__67257_67262 = G__67274;
i__67258_67263 = G__67275;
continue;
} else {
var e_67276 = cljs.core.first.call(null,seq__67255_67270__$1);
app.world_interop.inject_entity.call(null,e_67276);

app.world_interop.send_to_entity.call(null,e_67276,new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660));


var G__67277 = cljs.core.next.call(null,seq__67255_67270__$1);
var G__67278 = null;
var G__67279 = (0);
var G__67280 = (0);
seq__67255_67260 = G__67277;
chunk__67256_67261 = G__67278;
count__67257_67262 = G__67279;
i__67258_67263 = G__67280;
continue;
}
} else {
}
}
break;
}

app.world_interop.send_to_entity.call(null,loc,new cljs.core.Keyword("app.ecs.entities.locomotive","couple-rear","app.ecs.entities.locomotive/couple-rear",884965625),new cljs.core.Keyword(null,"the-other-id","the-other-id",-1798540769),car_id);

app.world_interop.send_to_entity.call(null,car,new cljs.core.Keyword("app.ecs.entities.carriage","couple-rear","app.ecs.entities.carriage/couple-rear",548779996),new cljs.core.Keyword(null,"the-other-id","the-other-id",-1798540769),car2_id);

return app.world_interop.send_to_entity.call(null,car2,new cljs.core.Keyword("app.ecs.entities.carriage","couple-rear","app.ecs.entities.carriage/couple-rear",548779996),new cljs.core.Keyword(null,"the-other-id","the-other-id",-1798540769),car3_id);

break;
case " ":
if(cljs.core.truth_(app.tiles.turnouts.is_turnout_QMARK_.call(null,tile_x,tile_y))){
console.log(["SWICH TURNOUT!!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tile_x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tile_y)].join(''));

return app.tiles.turnouts.cycle_turnout_state.call(null,tile_x,tile_y);
} else {
return null;
}

break;
case "=":
gamebase.events.suspend_event_handling.call(null);

return app.scratch.scratch.toggle.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67254)].join('')));

}
} else {
return null;
}
}));
});
app.key_mouse_input.setup_mouse_handler = (function app$key_mouse_input$setup_mouse_handler(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-mouse-clicked","canvas-mouse-clicked",-2064464393),(function (p__67281){
var map__67282 = p__67281;
var map__67282__$1 = ((((!((map__67282 == null)))?(((((map__67282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67282):map__67282);
var button = cljs.core.get.call(null,map__67282__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var x = cljs.core.get.call(null,map__67282__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__67282__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__5455__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-mouse","key-mouse",-747855985),new cljs.core.Keyword(null,"click-handler","click-handler",1157178954)], null));
if(cljs.core.truth_(temp__5455__auto__)){
var handler = temp__5455__auto__;
return handler.call(null,button,x,y);
} else {
return console.log("Mouse clicked - no owner.");
}
}));
});

//# sourceMappingURL=key_mouse_input.js.map
