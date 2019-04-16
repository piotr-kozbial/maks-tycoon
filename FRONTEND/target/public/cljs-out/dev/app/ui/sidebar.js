// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.ui.sidebar');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('app.state');
goog.require('gamebase.ecs');
goog.require('app.ecs.entities.locomotive');
goog.require('app.ecs.common_events');
goog.require('gamebase.canvas_control');
goog.require('gamebase.projection');
goog.require('gamebase.virtual_timer');
goog.require('app.world_interop');
goog.require('gamebase.ui.dropdown');
goog.require('app.ui.save_load_game');
goog.require('app.ui.ui_state');
app.ui.sidebar.tab_open_QMARK_ = (function app$ui$sidebar$tab_open_QMARK_(ui_state,tab_key){
return cljs.core.get_in.call(null,ui_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_key,new cljs.core.Keyword(null,"open?","open?",1238443125)], null));
});
app.ui.sidebar.open_tab = (function app$ui$sidebar$open_tab(tab_key){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_key,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true);
});
app.ui.sidebar.close_tab = (function app$ui$sidebar$close_tab(tab_key){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_key,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),false);
});
app.ui.sidebar.register_tab = (function app$ui$sidebar$register_tab(tab_struct){
return cljs.core.swap_BANG_.call(null,app.ui.ui_state.ui_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(tab_struct)], null),tab_struct);
});
app.ui.sidebar.tabs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"games","games",1927565374),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"games","games",1927565374),new cljs.core.Keyword(null,"title","title",636505583),"Games",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Var(function(){return app.ui.save_load_game.save_load_game_component;},new cljs.core.Symbol("app.ui.save-load-game","save-load-game-component","app.ui.save-load-game/save-load-game-component",-963392981,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.ui.save-load-game","app.ui.save-load-game",1037398242,null),new cljs.core.Symbol(null,"save-load-game-component","save-load-game-component",1940685525,null),"src/app/ui/save_load_game.cljs",36,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.ui.save_load_game.save_load_game_component)?app.ui.save_load_game.save_load_game_component.cljs$lang$test:null)]))], null)], null);
app.ui.sidebar.tab_order = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.modules.construction","construction","app.modules.construction/construction",261316609),new cljs.core.Keyword(null,"games","games",1927565374)], null);
app.ui.sidebar.effective_tabs = (function app$ui$sidebar$effective_tabs(ui_state){
return cljs.core.merge_with.call(null,cljs.core.merge,app.ui.sidebar.tabs,cljs.core.get_in.call(null,ui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null)));
});
app.ui.sidebar.effective_tab_order = (function app$ui$sidebar$effective_tab_order(ui_state){
var numbered_tab_order = cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,app.ui.sidebar.tab_order),cljs.core.iterate.call(null,cljs.core.dec,(0)));
var tab_number_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.apply.call(null,cljs.core.concat,numbered_tab_order));
var tab_number_fn = ((function (numbered_tab_order,tab_number_map){
return (function (tab_key){
return cljs.core.get.call(null,tab_number_map,tab_key,(1));
});})(numbered_tab_order,tab_number_map))
;
return cljs.core.sort_by.call(null,tab_number_fn,cljs.core.keys.call(null,app.ui.sidebar.effective_tabs.call(null,ui_state)));
});
app.ui.sidebar.get_tab = (function app$ui$sidebar$get_tab(ui_state,tab_key){
return app.ui.sidebar.effective_tabs.call(null,ui_state).call(null,tab_key);
});
app.ui.sidebar.sidebar_component = rum.core.build_defc.call(null,(function (){
rum.core.react.call(null,app.state.ui_refresh_tick);

var ui_state = rum.core.react.call(null,app.ui.ui_state.ui_state);
var game_id = app.ui.ui_state.get_game_id.call(null,ui_state);
var game_name = app.ui.ui_state.get_game_name.call(null,ui_state);
var map__40497 = new cljs.core.Keyword(null,"loc-selector","loc-selector",-222053855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app.ui.ui_state.ui_state)));
var map__40497__$1 = ((((!((map__40497 == null)))?(((((map__40497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40497):map__40497);
var open_QMARK_ = cljs.core.get.call(null,map__40497__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var selected_id = cljs.core.get.call(null,map__40497__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
var map__40498 = cljs.core.deref.call(null,app.state.app_state);
var map__40498__$1 = ((((!((map__40498 == null)))?(((((map__40498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40498):map__40498);
var frame_rate = cljs.core.get.call(null,map__40498__$1,new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942));
var world = cljs.core.get.call(null,map__40498__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var loc = gamebase.ecs.get_entity_by_key.call(null,world,selected_id);
var driving_QMARK_ = new cljs.core.Keyword(null,"driving?","driving?",-428410284).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("gamebase.ecs","components","gamebase.ecs/components",-523279412).cljs$core$IFn$_invoke$arity$1(loc)));
return React.createElement("div",null,React.createElement("div",({"style": ({"fontSize": "larger", "fontWeight": "bold"})}),(cljs.core.truth_(game_id)?sablono.interpreter.interpret.call(null,(function (){var or__3949__auto__ = game_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})()):React.createElement("i",null,"(unsaved game)",sablono.interpreter.interpret.call(null,game_id),sablono.interpreter.interpret.call(null,game_name)))),React.createElement("br",null),(function (){var attrs40503 = ["FRAME RATE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_rate)].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40503))?sablono.interpreter.attributes.call(null,attrs40503):null),((cljs.core.map_QMARK_.call(null,attrs40503))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40503)], null)));
})(),React.createElement("div",null,"scale: ",sablono.interpreter.interpret.call(null,gamebase.canvas_control.get_scale.call(null))," ",React.createElement("a",({"href": "#", "onClick": ((function (ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return gamebase.canvas_control.set_scale.call(null,0.5);
});})(ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),"50%")," ",React.createElement("a",({"href": "#", "onClick": ((function (ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return gamebase.canvas_control.set_scale.call(null,1.0);
});})(ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),"100%")," ",React.createElement("a",({"href": "#", "onClick": ((function (ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return gamebase.canvas_control.set_scale.call(null,2.0);
});})(ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),"200%")),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function app$ui$sidebar$iter__40518(s__40519){
return (new cljs.core.LazySeq(null,((function (ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (){
var s__40519__$1 = s__40519;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40519__$1);
if(temp__5457__auto__){
var s__40519__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40519__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__40519__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__40521 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__40520 = (0);
while(true){
if((i__40520 < size__4323__auto__)){
var tab_key = cljs.core._nth.call(null,c__4322__auto__,i__40520);
cljs.core.chunk_append.call(null,b__40521,(function (){var map__40522 = app.ui.sidebar.get_tab.call(null,ui_state,tab_key);
var map__40522__$1 = ((((!((map__40522 == null)))?(((((map__40522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40522):map__40522);
var component = cljs.core.get.call(null,map__40522__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var title = cljs.core.get.call(null,map__40522__$1,new cljs.core.Keyword(null,"title","title",636505583));
return React.createElement("div",null,React.createElement("hr",({"style": ({"border": "1px solid #BB4400"})})),(cljs.core.truth_(app.ui.sidebar.tab_open_QMARK_.call(null,ui_state,tab_key))?React.createElement("div",null,React.createElement("div",({"style": ({"marginBottom": "10px"})}),React.createElement("span",({"style": ({"color": "#993300", "cursor": "pointer"}), "onClick": ((function (i__40520,map__40522,map__40522__$1,component,title,tab_key,c__4322__auto__,size__4323__auto__,b__40521,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return app.ui.sidebar.close_tab.call(null,tab_key);
});})(i__40520,map__40522,map__40522__$1,component,title,tab_key,c__4322__auto__,size__4323__auto__,b__40521,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),sablono.interpreter.interpret.call(null,["[-] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')))),(cljs.core.truth_(component)?sablono.interpreter.interpret.call(null,component.call(null)):null)):React.createElement("div",({"style": ({"marginBottom": "10px"})}),React.createElement("span",({"style": ({"color": "#993300", "cursor": "pointer"}), "onClick": ((function (i__40520,map__40522,map__40522__$1,component,title,tab_key,c__4322__auto__,size__4323__auto__,b__40521,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return app.ui.sidebar.open_tab.call(null,tab_key);
});})(i__40520,map__40522,map__40522__$1,component,title,tab_key,c__4322__auto__,size__4323__auto__,b__40521,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),sablono.interpreter.interpret.call(null,["[+] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''))))));
})());

var G__40528 = (i__40520 + (1));
i__40520 = G__40528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40521),app$ui$sidebar$iter__40518.call(null,cljs.core.chunk_rest.call(null,s__40519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40521),null);
}
} else {
var tab_key = cljs.core.first.call(null,s__40519__$2);
return cljs.core.cons.call(null,(function (){var map__40526 = app.ui.sidebar.get_tab.call(null,ui_state,tab_key);
var map__40526__$1 = ((((!((map__40526 == null)))?(((((map__40526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40526):map__40526);
var component = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var title = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"title","title",636505583));
return React.createElement("div",null,React.createElement("hr",({"style": ({"border": "1px solid #BB4400"})})),(cljs.core.truth_(app.ui.sidebar.tab_open_QMARK_.call(null,ui_state,tab_key))?React.createElement("div",null,React.createElement("div",({"style": ({"marginBottom": "10px"})}),React.createElement("span",({"style": ({"color": "#993300", "cursor": "pointer"}), "onClick": ((function (map__40526,map__40526__$1,component,title,tab_key,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return app.ui.sidebar.close_tab.call(null,tab_key);
});})(map__40526,map__40526__$1,component,title,tab_key,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),sablono.interpreter.interpret.call(null,["[-] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')))),(cljs.core.truth_(component)?sablono.interpreter.interpret.call(null,component.call(null)):null)):React.createElement("div",({"style": ({"marginBottom": "10px"})}),React.createElement("span",({"style": ({"color": "#993300", "cursor": "pointer"}), "onClick": ((function (map__40526,map__40526__$1,component,title,tab_key,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_){
return (function (_){
return app.ui.sidebar.open_tab.call(null,tab_key);
});})(map__40526,map__40526__$1,component,title,tab_key,s__40519__$2,temp__5457__auto__,ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
}),sablono.interpreter.interpret.call(null,["[+] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''))))));
})(),app$ui$sidebar$iter__40518.call(null,cljs.core.rest.call(null,s__40519__$2)));
}
} else {
return null;
}
break;
}
});})(ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
,null,null));
});})(ui_state,game_id,game_name,map__40497,map__40497__$1,open_QMARK_,selected_id,map__40498,map__40498__$1,frame_rate,world,loc,driving_QMARK_))
;
return iter__4324__auto__.call(null,app.ui.sidebar.effective_tab_order.call(null,ui_state));
})()),React.createElement("hr",({"style": ({"border": "1px solid #BB4400"})})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"sidebar-component");

//# sourceMappingURL=sidebar.js.map
