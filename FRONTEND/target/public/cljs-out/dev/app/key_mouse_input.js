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
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-key-typed","canvas-key-typed",258203546),(function (p__22711){
var map__22712 = p__22711;
var map__22712__$1 = ((((!((map__22712 == null)))?(((((map__22712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22712):map__22712);
var key = cljs.core.get.call(null,map__22712__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var x = cljs.core.get.call(null,map__22712__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22712__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__5457__auto__ = gamebase.canvas_control.get_canvas_to_world_converters.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__22714 = temp__5457__auto__;
var conv_x = cljs.core.nth.call(null,vec__22714,(0),null);
var conv_y = cljs.core.nth.call(null,vec__22714,(1),null);
var world_x = conv_x.call(null,x);
var world_y = conv_y.call(null,y);
var tile_x = cljs.core.quot.call(null,world_x,(32));
var tile_y = cljs.core.quot.call(null,world_y,(32));
var G__22717 = key;
switch (G__22717) {
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
var seq__22718_22723 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,car,car2,car3], null));
var chunk__22719_22724 = null;
var count__22720_22725 = (0);
var i__22721_22726 = (0);
while(true){
if((i__22721_22726 < count__22720_22725)){
var e_22727 = cljs.core._nth.call(null,chunk__22719_22724,i__22721_22726);
app.world_interop.inject_entity.call(null,e_22727);

app.world_interop.send_to_entity.call(null,e_22727,new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660));


var G__22728 = seq__22718_22723;
var G__22729 = chunk__22719_22724;
var G__22730 = count__22720_22725;
var G__22731 = (i__22721_22726 + (1));
seq__22718_22723 = G__22728;
chunk__22719_22724 = G__22729;
count__22720_22725 = G__22730;
i__22721_22726 = G__22731;
continue;
} else {
var temp__5457__auto___22732__$1 = cljs.core.seq.call(null,seq__22718_22723);
if(temp__5457__auto___22732__$1){
var seq__22718_22733__$1 = temp__5457__auto___22732__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718_22733__$1)){
var c__4351__auto___22734 = cljs.core.chunk_first.call(null,seq__22718_22733__$1);
var G__22735 = cljs.core.chunk_rest.call(null,seq__22718_22733__$1);
var G__22736 = c__4351__auto___22734;
var G__22737 = cljs.core.count.call(null,c__4351__auto___22734);
var G__22738 = (0);
seq__22718_22723 = G__22735;
chunk__22719_22724 = G__22736;
count__22720_22725 = G__22737;
i__22721_22726 = G__22738;
continue;
} else {
var e_22739 = cljs.core.first.call(null,seq__22718_22733__$1);
app.world_interop.inject_entity.call(null,e_22739);

app.world_interop.send_to_entity.call(null,e_22739,new cljs.core.Keyword("gamebase.ecs","init","gamebase.ecs/init",-1371715660));


var G__22740 = cljs.core.next.call(null,seq__22718_22733__$1);
var G__22741 = null;
var G__22742 = (0);
var G__22743 = (0);
seq__22718_22723 = G__22740;
chunk__22719_22724 = G__22741;
count__22720_22725 = G__22742;
i__22721_22726 = G__22743;
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
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22717)].join('')));

}
} else {
return null;
}
}));
});
app.key_mouse_input.setup_mouse_handler = (function app$key_mouse_input$setup_mouse_handler(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"canvas-mouse-clicked","canvas-mouse-clicked",-2064464393),(function (p__22744){
var map__22745 = p__22744;
var map__22745__$1 = ((((!((map__22745 == null)))?(((((map__22745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745):map__22745);
var button = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var x = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
