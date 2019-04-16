// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.layouts.sidebar_and_bottombar');
goog.require('cljs.core');
goog.require('gamebase.events');
gamebase.layouts.sidebar_and_bottombar.mk_html = (function gamebase$layouts$sidebar_and_bottombar$mk_html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24880 = arguments.length;
var i__4532__auto___24881 = (0);
while(true){
if((i__4532__auto___24881 < len__4531__auto___24880)){
args__4534__auto__.push((arguments[i__4532__auto___24881]));

var G__24882 = (i__4532__auto___24881 + (1));
i__4532__auto___24881 = G__24882;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return gamebase.layouts.sidebar_and_bottombar.mk_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

gamebase.layouts.sidebar_and_bottombar.mk_html.cljs$core$IFn$_invoke$arity$variadic = (function (sidebar_content,bottombar_content,p__24876){
var vec__24877 = p__24876;
var splash_image = cljs.core.nth.call(null,vec__24877,(0),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gamebase/canvas-holder",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#888888"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gamebase/bottom-bar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#BBA415",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),bottombar_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gamebase/bottom-bar-border",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#BB4400",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ns-resize"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gamebase/side-bar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#C6AF20",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),sidebar_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gamebase/side-bar-border",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#BB4400",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize"], null)], null)], null)], null);
});

gamebase.layouts.sidebar_and_bottombar.mk_html.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
gamebase.layouts.sidebar_and_bottombar.mk_html.cljs$lang$applyTo = (function (seq24873){
var G__24874 = cljs.core.first.call(null,seq24873);
var seq24873__$1 = cljs.core.next.call(null,seq24873);
var G__24875 = cljs.core.first.call(null,seq24873__$1);
var seq24873__$2 = cljs.core.next.call(null,seq24873__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24874,G__24875,seq24873__$2);
});



if((typeof gamebase !== 'undefined') && (typeof gamebase.layouts !== 'undefined') && (typeof gamebase.layouts.sidebar_and_bottombar !== 'undefined') && (typeof gamebase.layouts.sidebar_and_bottombar.state !== 'undefined')){
} else {
gamebase.layouts.sidebar_and_bottombar.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
gamebase.layouts.sidebar_and_bottombar.initialize = (function gamebase$layouts$sidebar_and_bottombar$initialize(base_atom,kvs,opts){
cljs.core.reset_BANG_.call(null,gamebase.layouts.sidebar_and_bottombar.state,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289),base_atom,new cljs.core.Keyword(null,"kvs","kvs",958455492),kvs));

gamebase.layouts.sidebar_and_bottombar._setup_events.call(null);

cljs.core.swap_BANG_.call(null,base_atom,cljs.core.update_in,kvs,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));

var cnv = createCanvas((600),(400));
cnv.parent("gamebase/canvas-holder");

gamebase.layouts.sidebar_and_bottombar.update_canvas_size.call(null);

gamebase.layouts.sidebar_and_bottombar.show_canvas.call(null);

return gamebase.layouts.sidebar_and_bottombar.update_canvas_size.call(null);
});
gamebase.layouts.sidebar_and_bottombar.get_canvas_holder_element = (function gamebase$layouts$sidebar_and_bottombar$get_canvas_holder_element(){
return document.getElementById("gamebase/canvas-holder");
});
gamebase.layouts.sidebar_and_bottombar.get_bottom_bar_element = (function gamebase$layouts$sidebar_and_bottombar$get_bottom_bar_element(){
return document.getElementById("gamebase/bottom-bar");
});
gamebase.layouts.sidebar_and_bottombar.get_bottom_bar_border_element = (function gamebase$layouts$sidebar_and_bottombar$get_bottom_bar_border_element(){
return document.getElementById("gamebase/bottom-bar-border");
});
gamebase.layouts.sidebar_and_bottombar.get_side_bar_element = (function gamebase$layouts$sidebar_and_bottombar$get_side_bar_element(){
return document.getElementById("gamebase/side-bar");
});
gamebase.layouts.sidebar_and_bottombar.get_side_bar_border_element = (function gamebase$layouts$sidebar_and_bottombar$get_side_bar_border_element(){
return document.getElementById("gamebase/side-bar-border");
});
gamebase.layouts.sidebar_and_bottombar.get_fullpage_element = (function gamebase$layouts$sidebar_and_bottombar$get_fullpage_element(){
return document.getElementById("gamebase/fullpage");
});
gamebase.layouts.sidebar_and_bottombar.get_splash_element = (function gamebase$layouts$sidebar_and_bottombar$get_splash_element(){
return document.getElementById("gamebase/splash");
});
gamebase.layouts.sidebar_and_bottombar.hide_splash = (function gamebase$layouts$sidebar_and_bottombar$hide_splash(){
gamebase.layouts.sidebar_and_bottombar.get_splash_element.call(null).style = "position:absolute; z-index:100; width:100%; height:100%; opacity:0; transition: opacity 2s";

return window.setTimeout((function (){
return gamebase.layouts.sidebar_and_bottombar.get_splash_element.call(null).style = "display:none";
}),(2000));
});
gamebase.layouts.sidebar_and_bottombar.show_canvas = (function gamebase$layouts$sidebar_and_bottombar$show_canvas(){
var canvas_holder = gamebase.layouts.sidebar_and_bottombar.get_canvas_holder_element.call(null);
return canvas_holder.style.display = "block";
});
gamebase.layouts.sidebar_and_bottombar.hide_canvas = (function gamebase$layouts$sidebar_and_bottombar$hide_canvas(){
var canvas_holder = gamebase.layouts.sidebar_and_bottombar.get_canvas_holder_element.call(null);
return canvas_holder.style.display = "none";
});
gamebase.layouts.sidebar_and_bottombar.get_canvas_rectangle = (function gamebase$layouts$sidebar_and_bottombar$get_canvas_rectangle(){
var map__24883 = cljs.core.deref.call(null,gamebase.layouts.sidebar_and_bottombar.state);
var map__24883__$1 = ((((!((map__24883 == null)))?(((((map__24883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24883):map__24883);
var base_atom = cljs.core.get.call(null,map__24883__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__24883__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var temp__5455__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,base_atom),kvs);
if(cljs.core.truth_(temp__5455__auto__)){
var map__24885 = temp__5455__auto__;
var map__24885__$1 = ((((!((map__24885 == null)))?(((((map__24885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24885):map__24885);
var canvas_x = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"canvas-x","canvas-x",-773330711));
var canvas_y = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"canvas-y","canvas-y",-1092734438));
var canvas_width = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_x,canvas_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(canvas_x + canvas_width),(canvas_y + canvas_height)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}
});
gamebase.layouts.sidebar_and_bottombar.get_canvas_size = (function gamebase$layouts$sidebar_and_bottombar$get_canvas_size(){
var map__24887 = cljs.core.deref.call(null,gamebase.layouts.sidebar_and_bottombar.state);
var map__24887__$1 = ((((!((map__24887 == null)))?(((((map__24887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24887):map__24887);
var base_atom = cljs.core.get.call(null,map__24887__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__24887__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var map__24888 = cljs.core.get_in.call(null,cljs.core.deref.call(null,base_atom),kvs);
var map__24888__$1 = ((((!((map__24888 == null)))?(((((map__24888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24888):map__24888);
var canvas_width = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_width,canvas_height], null);
});
gamebase.layouts.sidebar_and_bottombar.position_element = (function gamebase$layouts$sidebar_and_bottombar$position_element(element,x,y,width,height){
element.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join('');

element.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('');

element.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('');

return element.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join('');
});
gamebase.layouts.sidebar_and_bottombar.update_canvas_size = (function gamebase$layouts$sidebar_and_bottombar$update_canvas_size(){
var map__24891 = cljs.core.deref.call(null,gamebase.layouts.sidebar_and_bottombar.state);
var map__24891__$1 = ((((!((map__24891 == null)))?(((((map__24891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24891):map__24891);
var base_atom = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var bottom_bar_height = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"bottom-bar-height","bottom-bar-height",757803900));
var side_bar_width = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"side-bar-width","side-bar-width",130602106));
var after_canvas_resize = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"after-canvas-resize","after-canvas-resize",546295223));
var width = window.innerWidth;
var height = window.innerHeight;
var canvas_width = (width - side_bar_width);
var canvas_height = (height - bottom_bar_height);
var bottom_bar_border_left = side_bar_width;
var bottom_bar_border_width = (width - side_bar_width);
gamebase.layouts.sidebar_and_bottombar.position_element.call(null,gamebase.layouts.sidebar_and_bottombar.get_canvas_holder_element.call(null),side_bar_width,(0),canvas_width,canvas_height);

gamebase.layouts.sidebar_and_bottombar.position_element.call(null,gamebase.layouts.sidebar_and_bottombar.get_side_bar_element.call(null),(0),(0),(side_bar_width - (5)),height);

gamebase.layouts.sidebar_and_bottombar.position_element.call(null,gamebase.layouts.sidebar_and_bottombar.get_side_bar_border_element.call(null),(side_bar_width - (5)),(0),(5),height);

gamebase.layouts.sidebar_and_bottombar.position_element.call(null,gamebase.layouts.sidebar_and_bottombar.get_bottom_bar_element.call(null),side_bar_width,((height + (- bottom_bar_height)) + (5)),(width - side_bar_width),(bottom_bar_height - (5)));

gamebase.layouts.sidebar_and_bottombar.position_element.call(null,gamebase.layouts.sidebar_and_bottombar.get_bottom_bar_border_element.call(null),bottom_bar_border_left,(height + (- bottom_bar_height)),bottom_bar_border_width,(5));

resizeCanvas(canvas_width,canvas_height);

cljs.core.swap_BANG_.call(null,gamebase.layouts.sidebar_and_bottombar.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),width,new cljs.core.Keyword(null,"screen-height","screen-height",141363033),height,new cljs.core.Keyword(null,"bottom-bar-border-left","bottom-bar-border-left",337202346),bottom_bar_border_left,new cljs.core.Keyword(null,"bottom-bar-border-width","bottom-bar-border-width",986522068),bottom_bar_border_width,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),canvas_width,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),canvas_height);

cljs.core.swap_BANG_.call(null,base_atom,cljs.core.update_in,kvs,((function (map__24891,map__24891__$1,base_atom,kvs,bottom_bar_height,side_bar_width,after_canvas_resize,width,height,canvas_width,canvas_height,bottom_bar_border_left,bottom_bar_border_width){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"canvas-x","canvas-x",-773330711),side_bar_width,new cljs.core.Keyword(null,"canvas-y","canvas-y",-1092734438),(1),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),canvas_width,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),canvas_height);
});})(map__24891,map__24891__$1,base_atom,kvs,bottom_bar_height,side_bar_width,after_canvas_resize,width,height,canvas_width,canvas_height,bottom_bar_border_left,bottom_bar_border_width))
);

return after_canvas_resize.call(null);
});
gamebase.layouts.sidebar_and_bottombar._setup_events = (function gamebase$layouts$sidebar_and_bottombar$_setup_events(){
gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (_){
return gamebase.layouts.sidebar_and_bottombar.update_canvas_size.call(null);
}));

return gamebase.events.add_handler.call(null,new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),(function (p__24895){
var map__24896 = p__24895;
var map__24896__$1 = ((((!((map__24896 == null)))?(((((map__24896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24896):map__24896);
var event = map__24896__$1;
var prev_x = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"prev-x","prev-x",253040489));
var prev_y = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"prev-y","prev-y",1338732167));
var x = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24896__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__24898 = cljs.core.deref.call(null,gamebase.layouts.sidebar_and_bottombar.state);
var map__24898__$1 = ((((!((map__24898 == null)))?(((((map__24898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24898):map__24898);
var base_atom = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"base-atom","base-atom",1557951289));
var kvs = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var bottom_bar_height = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"bottom-bar-height","bottom-bar-height",757803900));
var bottom_bar_border_left = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"bottom-bar-border-left","bottom-bar-border-left",337202346));
var bottom_bar_border_width = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"bottom-bar-border-width","bottom-bar-border-width",986522068));
var canvas_height = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
if(((((((0) < prev_x)) && ((prev_x < bottom_bar_border_width)))) && ((((canvas_height < prev_y)) && ((prev_y < ((5) + canvas_height))))))){
cljs.core.swap_BANG_.call(null,gamebase.layouts.sidebar_and_bottombar.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-bar-height","bottom-bar-height",757803900)], null),((function (map__24898,map__24898__$1,base_atom,kvs,bottom_bar_height,bottom_bar_border_left,bottom_bar_border_width,canvas_height,map__24896,map__24896__$1,event,prev_x,prev_y,x,y){
return (function (p1__24893_SHARP_){
return (p1__24893_SHARP_ + (prev_y - y));
});})(map__24898,map__24898__$1,base_atom,kvs,bottom_bar_height,bottom_bar_border_left,bottom_bar_border_width,canvas_height,map__24896,map__24896__$1,event,prev_x,prev_y,x,y))
);

gamebase.layouts.sidebar_and_bottombar.update_canvas_size.call(null);
} else {
}

if(((((((-35) < prev_x)) && ((prev_x < (30))))) && (((((0) < prev_y)) && ((prev_y < canvas_height)))))){
cljs.core.swap_BANG_.call(null,gamebase.layouts.sidebar_and_bottombar.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"side-bar-width","side-bar-width",130602106)], null),((function (map__24898,map__24898__$1,base_atom,kvs,bottom_bar_height,bottom_bar_border_left,bottom_bar_border_width,canvas_height,map__24896,map__24896__$1,event,prev_x,prev_y,x,y){
return (function (p1__24894_SHARP_){
return (p1__24894_SHARP_ + (x - prev_x));
});})(map__24898,map__24898__$1,base_atom,kvs,bottom_bar_height,bottom_bar_border_left,bottom_bar_border_width,canvas_height,map__24896,map__24896__$1,event,prev_x,prev_y,x,y))
);

return gamebase.layouts.sidebar_and_bottombar.update_canvas_size.call(null);
} else {
return null;
}
}));
});

//# sourceMappingURL=sidebar_and_bottombar.js.map
