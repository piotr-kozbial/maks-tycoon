// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.layouts.fullscreen');
goog.require('cljs.core');
goog.require('gamebase.events');
gamebase.layouts.fullscreen.mk_html = (function gamebase$layouts$fullscreen$mk_html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gamebase/canvas-holder",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#888888"], null)], null)], null)], null);
});


if((typeof gamebase !== 'undefined') && (typeof gamebase.layouts !== 'undefined') && (typeof gamebase.layouts.fullscreen !== 'undefined') && (typeof gamebase.layouts.fullscreen.state !== 'undefined')){
} else {
gamebase.layouts.fullscreen.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
gamebase.layouts.fullscreen.initialize = (function gamebase$layouts$fullscreen$initialize(base_atom,kvs,opts){
cljs.core.reset_BANG_.call(null,gamebase.layouts.fullscreen.state,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289),base_atom,new cljs.core.Keyword(null,"kvs","kvs",958455492),kvs));

gamebase.layouts.fullscreen._setup_events.call(null);

cljs.core.swap_BANG_.call(null,base_atom,cljs.core.update_in,kvs,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));

var cnv = createCanvas((600),(400));
cnv.parent("gamebase/canvas-holder");

gamebase.layouts.fullscreen.update_canvas_size.call(null);

gamebase.layouts.fullscreen.show_canvas.call(null);

return gamebase.layouts.fullscreen.update_canvas_size.call(null);
});
gamebase.layouts.fullscreen.get_canvas_holder_element = (function gamebase$layouts$fullscreen$get_canvas_holder_element(){
return document.getElementById("gamebase/canvas-holder");
});
gamebase.layouts.fullscreen.show_canvas = (function gamebase$layouts$fullscreen$show_canvas(){
var canvas_holder = gamebase.layouts.fullscreen.get_canvas_holder_element.call(null);
return canvas_holder.style.display = "block";
});
gamebase.layouts.fullscreen.hide_canvas = (function gamebase$layouts$fullscreen$hide_canvas(){
var canvas_holder = gamebase.layouts.fullscreen.get_canvas_holder_element.call(null);
return canvas_holder.style.display = "none";
});
gamebase.layouts.fullscreen.get_canvas_rectangle = (function gamebase$layouts$fullscreen$get_canvas_rectangle(){
var map__31510 = cljs.core.deref.call(null,gamebase.layouts.fullscreen.state);
var map__31510__$1 = ((((!((map__31510 == null)))?(((((map__31510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31510):map__31510);
var base_atom = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var temp__5455__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,base_atom),kvs);
if(cljs.core.truth_(temp__5455__auto__)){
var map__31512 = temp__5455__auto__;
var map__31512__$1 = ((((!((map__31512 == null)))?(((((map__31512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31512):map__31512);
var canvas_x = cljs.core.get.call(null,map__31512__$1,new cljs.core.Keyword(null,"canvas-x","canvas-x",-773330711));
var canvas_y = cljs.core.get.call(null,map__31512__$1,new cljs.core.Keyword(null,"canvas-y","canvas-y",-1092734438));
var canvas_width = cljs.core.get.call(null,map__31512__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__31512__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_x,canvas_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(canvas_x + canvas_width),(canvas_y + canvas_height)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}
});
gamebase.layouts.fullscreen.get_canvas_size = (function gamebase$layouts$fullscreen$get_canvas_size(){
var map__31514 = cljs.core.deref.call(null,gamebase.layouts.fullscreen.state);
var map__31514__$1 = ((((!((map__31514 == null)))?(((((map__31514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31514):map__31514);
var base_atom = cljs.core.get.call(null,map__31514__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__31514__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var map__31515 = cljs.core.get_in.call(null,cljs.core.deref.call(null,base_atom),kvs);
var map__31515__$1 = ((((!((map__31515 == null)))?(((((map__31515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31515):map__31515);
var canvas_width = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_width,canvas_height], null);
});
gamebase.layouts.fullscreen.position_element = (function gamebase$layouts$fullscreen$position_element(element,x,y,width,height){
element.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join('');

element.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('');

element.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('');

return element.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join('');
});
gamebase.layouts.fullscreen.update_canvas_size = (function gamebase$layouts$fullscreen$update_canvas_size(){
var map__31518 = cljs.core.deref.call(null,gamebase.layouts.fullscreen.state);
var map__31518__$1 = ((((!((map__31518 == null)))?(((((map__31518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31518):map__31518);
var base_atom = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var bottom_bar_height = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"bottom-bar-height","bottom-bar-height",757803900));
var side_bar_width = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"side-bar-width","side-bar-width",130602106));
var after_canvas_resize = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"after-canvas-resize","after-canvas-resize",546295223));
var width = window.innerWidth;
var height = window.innerHeight;
gamebase.layouts.fullscreen.position_element.call(null,gamebase.layouts.fullscreen.get_canvas_holder_element.call(null),(0),(0),width,height);

resizeCanvas(width,height);

cljs.core.swap_BANG_.call(null,gamebase.layouts.fullscreen.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),width,new cljs.core.Keyword(null,"screen-height","screen-height",141363033),height,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),width,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),height);

cljs.core.swap_BANG_.call(null,base_atom,cljs.core.update_in,kvs,((function (map__31518,map__31518__$1,base_atom,kvs,bottom_bar_height,side_bar_width,after_canvas_resize,width,height){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"canvas-x","canvas-x",-773330711),(0),new cljs.core.Keyword(null,"canvas-y","canvas-y",-1092734438),(0),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),width,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),height);
});})(map__31518,map__31518__$1,base_atom,kvs,bottom_bar_height,side_bar_width,after_canvas_resize,width,height))
);

return after_canvas_resize.call(null);
});
gamebase.layouts.fullscreen._setup_events = (function gamebase$layouts$fullscreen$_setup_events(){
return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (_){
return gamebase.layouts.fullscreen.update_canvas_size.call(null);
}));
});

//# sourceMappingURL=fullscreen.js.map
