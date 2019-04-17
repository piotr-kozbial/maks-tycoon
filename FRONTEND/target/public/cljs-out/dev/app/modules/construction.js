// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.modules.construction');
goog.require('cljs.core');
goog.require('app.state');
goog.require('app.modules.api');
goog.require('rum.core');
goog.require('app.world_interop');
goog.require('app.ui.ui_state');
goog.require('app.tiles.general');
app.modules.construction.build = (function app$modules$construction$build(_,x,y){
var temp__5457__auto__ = app.world_interop.get_tile_xy.call(null,x,y);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__48317 = temp__5457__auto__;
var tile_x = cljs.core.nth.call(null,vec__48317,(0),null);
var tile_y = cljs.core.nth.call(null,vec__48317,(1),null);
var map__48320 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app.ui.ui_state.ui_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modules","modules",-248193976),new cljs.core.Keyword(null,"construction","construction",730831494)], null));
var map__48320__$1 = ((((!((map__48320 == null)))?(((((map__48320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48320):map__48320);
var selected_tile_id = cljs.core.get.call(null,map__48320__$1,new cljs.core.Keyword(null,"selected-tile-id","selected-tile-id",-1365994807));
var tile = app.tiles.general.tiles_by_id.call(null,selected_tile_id);
app.world_interop.set_tile.call(null,tile_x,tile_y,((cljs.core.not_EQ_.call(null,selected_tile_id,new cljs.core.Keyword(null,"destroy","destroy",-843660405)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(tile)], null):null));

return app.state.init_tile_extra.call(null,tile_x,tile_y);
} else {
return null;
}
});
app.modules.construction.component = rum.core.build_defc.call(null,(function (){
var map__48322 = cljs.core.get_in.call(null,rum.core.react.call(null,app.ui.ui_state.ui_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modules","modules",-248193976),new cljs.core.Keyword(null,"construction","construction",730831494)], null));
var map__48322__$1 = ((((!((map__48322 == null)))?(((((map__48322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48322):map__48322);
var selected_tile_id = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"selected-tile-id","selected-tile-id",-1365994807));
var el = ((function (map__48322,map__48322__$1,selected_tile_id){
return (function (id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__48322,map__48322__$1,selected_tile_id){
return (function (_){
cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modules","modules",-248193976),new cljs.core.Keyword(null,"construction","construction",730831494),new cljs.core.Keyword(null,"selected-tile-id","selected-tile-id",-1365994807)], null),id);

return app.modules.api.takeover_mouse_click.call(null,new cljs.core.Keyword("app.modules.construction","construction","app.modules.construction/construction",261316609),((function (map__48322,map__48322__$1,selected_tile_id){
return (function() { 
var G__48328__delegate = function (args){
return cljs.core.apply.call(null,app.modules.construction.build,args);
};
var G__48328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48329__i = 0, G__48329__a = new Array(arguments.length -  0);
while (G__48329__i < G__48329__a.length) {G__48329__a[G__48329__i] = arguments[G__48329__i + 0]; ++G__48329__i;}
  args = new cljs.core.IndexedSeq(G__48329__a,0,null);
} 
return G__48328__delegate.call(this,args);};
G__48328.cljs$lang$maxFixedArity = 0;
G__48328.cljs$lang$applyTo = (function (arglist__48330){
var args = cljs.core.seq(arglist__48330);
return G__48328__delegate(args);
});
G__48328.cljs$core$IFn$_invoke$arity$variadic = G__48328__delegate;
return G__48328;
})()
;})(map__48322,map__48322__$1,selected_tile_id))
);
});})(map__48322,map__48322__$1,selected_tile_id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,id,selected_tile_id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid"], null):null),new cljs.core.Keyword(null,"src","src",-1651076051),["track-palette/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id)),".png"].join('')], null)], null)], null);
});})(map__48322,map__48322__$1,selected_tile_id))
;
return React.createElement("div",null,React.createElement("table",null,(function (){var attrs48324 = el.call(null,new cljs.core.Keyword(null,"destroy","destroy",-843660405));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs48324))?sablono.interpreter.attributes.call(null,attrs48324):null),((cljs.core.map_QMARK_.call(null,attrs48324))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48324)], null)));
})(),(function (){var attrs48325 = el.call(null,new cljs.core.Keyword(null,"track-se","track-se",1774550657));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs48325))?sablono.interpreter.attributes.call(null,attrs48325):null),((cljs.core.map_QMARK_.call(null,attrs48325))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-st","track-st",-232758332))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-sw","track-sw",304088878))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-we","track-we",-989956370))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-ns","track-ns",1918680372)))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48325),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-st","track-st",-232758332))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-sw","track-sw",304088878))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-we","track-we",-989956370))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-ns","track-ns",1918680372)))], null)));
})(),(function (){var attrs48326 = el.call(null,new cljs.core.Keyword(null,"track-et","track-et",1115037128));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs48326))?sablono.interpreter.attributes.call(null,attrs48326):null),((cljs.core.map_QMARK_.call(null,attrs48326))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-cross","track-cross",-472197001))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48326),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-cross","track-cross",-472197001))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-wt","track-wt",1610890285)))], null)));
})(),(function (){var attrs48327 = el.call(null,new cljs.core.Keyword(null,"track-ne","track-ne",298136141));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs48327))?sablono.interpreter.attributes.call(null,attrs48327):null),((cljs.core.map_QMARK_.call(null,attrs48327))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-nt","track-nt",581283090))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-nw","track-nw",-1783255069)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48327),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-nt","track-nt",581283090))),sablono.interpreter.interpret.call(null,el.call(null,new cljs.core.Keyword(null,"track-nw","track-nw",-1783255069)))], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"component");
app.modules.construction.initialize = (function app$modules$construction$initialize(){
return app.modules.api.register_sidebar_tab.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("app.modules.construction","construction","app.modules.construction/construction",261316609),new cljs.core.Keyword(null,"title","title",636505583),"Construction",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Var(function(){return app.modules.construction.component;},new cljs.core.Symbol("app.modules.construction","component","app.modules.construction/component",-1568179504,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.modules.construction","app.modules.construction",-1260389689,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),"src/app/modules/construction.cljs",20,1,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.modules.construction.component)?app.modules.construction.component.cljs$lang$test:null)]))], null));
});

//# sourceMappingURL=construction.js.map
