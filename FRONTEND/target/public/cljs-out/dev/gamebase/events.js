// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.events');
goog.require('cljs.core');
gamebase.events.all_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
gamebase.events.add_handler = (function gamebase$events$add_handler(event_key,handler){
return cljs.core.swap_BANG_.call(null,gamebase.events.all_handlers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key], null),(function (p1__28622_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3949__auto__ = p1__28622_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),handler);
}));
});
gamebase.events.canvas_events_on_QMARK_ = cljs.core.atom.call(null,true);
gamebase.events.stop_canvas_events = (function gamebase$events$stop_canvas_events(){
return cljs.core.reset_BANG_.call(null,gamebase.events.canvas_events_on_QMARK_,false);
});
gamebase.events.resume_canvas_events = (function gamebase$events$resume_canvas_events(){
return cljs.core.reset_BANG_.call(null,gamebase.events.canvas_events_on_QMARK_,true);
});
if((typeof gamebase !== 'undefined') && (typeof gamebase.events !== 'undefined') && (typeof gamebase.events.data_for_event !== 'undefined')){
} else {
gamebase.events.data_for_event = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.events","data-for-event"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (event_key){
return event_key;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof gamebase !== 'undefined') && (typeof gamebase.events !== 'undefined') && (typeof gamebase.events.precondition_for_event !== 'undefined')){
} else {
gamebase.events.precondition_for_event = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.events","precondition-for-event"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (event_key){
return event_key;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
gamebase.events.callback = (function gamebase$events$callback(event_name){
var event_key_28627 = cljs.core.keyword.call(null,event_name);
var handlers_28628 = event_key_28627.call(null,cljs.core.deref.call(null,gamebase.events.all_handlers));
if(cljs.core.truth_(gamebase.events.precondition_for_event.call(null,event_key_28627))){
var seq__28623_28629 = cljs.core.seq.call(null,handlers_28628);
var chunk__28624_28630 = null;
var count__28625_28631 = (0);
var i__28626_28632 = (0);
while(true){
if((i__28626_28632 < count__28625_28631)){
var h_28633 = cljs.core._nth.call(null,chunk__28624_28630,i__28626_28632);
h_28633.call(null,gamebase.events.data_for_event.call(null,event_key_28627));


var G__28634 = seq__28623_28629;
var G__28635 = chunk__28624_28630;
var G__28636 = count__28625_28631;
var G__28637 = (i__28626_28632 + (1));
seq__28623_28629 = G__28634;
chunk__28624_28630 = G__28635;
count__28625_28631 = G__28636;
i__28626_28632 = G__28637;
continue;
} else {
var temp__5457__auto___28638 = cljs.core.seq.call(null,seq__28623_28629);
if(temp__5457__auto___28638){
var seq__28623_28639__$1 = temp__5457__auto___28638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28623_28639__$1)){
var c__4351__auto___28640 = cljs.core.chunk_first.call(null,seq__28623_28639__$1);
var G__28641 = cljs.core.chunk_rest.call(null,seq__28623_28639__$1);
var G__28642 = c__4351__auto___28640;
var G__28643 = cljs.core.count.call(null,c__4351__auto___28640);
var G__28644 = (0);
seq__28623_28629 = G__28641;
chunk__28624_28630 = G__28642;
count__28625_28631 = G__28643;
i__28626_28632 = G__28644;
continue;
} else {
var h_28645 = cljs.core.first.call(null,seq__28623_28639__$1);
h_28645.call(null,gamebase.events.data_for_event.call(null,event_key_28627));


var G__28646 = cljs.core.next.call(null,seq__28623_28639__$1);
var G__28647 = null;
var G__28648 = (0);
var G__28649 = (0);
seq__28623_28629 = G__28646;
chunk__28624_28630 = G__28647;
count__28625_28631 = G__28648;
i__28626_28632 = G__28649;
continue;
}
} else {
}
}
break;
}
} else {
}

return null;
});
goog.exportSymbol('gamebase.events.callback', gamebase.events.callback);
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-key-typed","canvas-key-typed",258203546),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-mouse-pressed","canvas-mouse-pressed",198562286),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-mouse-moved","canvas-mouse-moved",1259052484),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),(function (_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY,new cljs.core.Keyword(null,"prev-x","prev-x",253040489),pmouseX,new cljs.core.Keyword(null,"prev-y","prev-y",1338732167),pmouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-mouse-dragged","canvas-mouse-dragged",-1573026060),(function (_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY,new cljs.core.Keyword(null,"prev-x","prev-x",253040489),pmouseX,new cljs.core.Keyword(null,"prev-y","prev-y",1338732167),pmouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-mouse-released","canvas-mouse-released",-671949103),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-mouse-clicked","canvas-mouse-clicked",-2064464393),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"canvas-mouse-scrolled","canvas-mouse-scrolled",-44557647),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),mouseButton,new cljs.core.Keyword(null,"x","x",2099068185),mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),mouseY], null);
}));
cljs.core._add_method.call(null,gamebase.events.data_for_event,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
gamebase.events.mouseInCanvas = (function gamebase$events$mouseInCanvas(){
return ((((0) <= mouseX)) && ((mouseX < width)) && (((0) <= mouseY)) && ((mouseY < height)));
});
gamebase.events.pmouseInCanvas = (function gamebase$events$pmouseInCanvas(){
return ((((0) <= pmouseX)) && ((pmouseX < width)) && (((0) <= pmouseY)) && ((pmouseY < height)));
});
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (_){
return true;
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-key-typed","canvas-key-typed",258203546),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return gamebase.events.mouseInCanvas.call(null);
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-mouse-pressed","canvas-mouse-pressed",198562286),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return gamebase.events.mouseInCanvas.call(null);
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-mouse-moved","canvas-mouse-moved",1259052484),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return gamebase.events.mouseInCanvas.call(null);
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),(function (_){
return true;
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-mouse-dragged","canvas-mouse-dragged",-1573026060),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = gamebase.events.mouseInCanvas.call(null);
if(cljs.core.truth_(and__3938__auto____$1)){
return gamebase.events.pmouseInCanvas.call(null);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-mouse-released","canvas-mouse-released",-671949103),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return gamebase.events.mouseInCanvas.call(null);
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-mouse-clicked","canvas-mouse-clicked",-2064464393),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return gamebase.events.mouseInCanvas.call(null);
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"canvas-mouse-scrolled","canvas-mouse-scrolled",-44557647),(function (_){
var and__3938__auto__ = cljs.core.deref.call(null,gamebase.events.canvas_events_on_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return gamebase.events.mouseInCanvas.call(null);
} else {
return and__3938__auto__;
}
}));
cljs.core._add_method.call(null,gamebase.events.precondition_for_event,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (_){
return true;
}));

//# sourceMappingURL=events.js.map
