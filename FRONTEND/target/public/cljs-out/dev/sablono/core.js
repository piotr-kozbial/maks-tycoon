// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__24516__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24513 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__24514 = cljs.core.seq.call(null,vec__24513);
var first__24515 = cljs.core.first.call(null,seq__24514);
var seq__24514__$1 = cljs.core.next.call(null,seq__24514);
var tag = first__24515;
var body = seq__24514__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24517__i = 0, G__24517__a = new Array(arguments.length -  0);
while (G__24517__i < G__24517__a.length) {G__24517__a[G__24517__i] = arguments[G__24517__i + 0]; ++G__24517__i;}
  args = new cljs.core.IndexedSeq(G__24517__a,0,null);
} 
return G__24516__delegate.call(this,args);};
G__24516.cljs$lang$maxFixedArity = 0;
G__24516.cljs$lang$applyTo = (function (arglist__24518){
var args = cljs.core.seq(arglist__24518);
return G__24516__delegate(args);
});
G__24516.cljs$core$IFn$_invoke$arity$variadic = G__24516__delegate;
return G__24516;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__24519(s__24520){
return (new cljs.core.LazySeq(null,(function (){
var s__24520__$1 = s__24520;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24520__$1);
if(temp__5457__auto__){
var s__24520__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24520__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24520__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24522 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24521 = (0);
while(true){
if((i__24521 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__24521);
cljs.core.chunk_append.call(null,b__24522,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24523 = (i__24521 + (1));
i__24521 = G__24523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24522),sablono$core$update_arglists_$_iter__24519.call(null,cljs.core.chunk_rest.call(null,s__24520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24522),null);
}
} else {
var args = cljs.core.first.call(null,s__24520__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24519.call(null,cljs.core.rest.call(null,s__24520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24529 = arguments.length;
var i__4532__auto___24530 = (0);
while(true){
if((i__4532__auto___24530 < len__4531__auto___24529)){
args__4534__auto__.push((arguments[i__4532__auto___24530]));

var G__24531 = (i__4532__auto___24530 + (1));
i__4532__auto___24530 = G__24531;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__24525(s__24526){
return (new cljs.core.LazySeq(null,(function (){
var s__24526__$1 = s__24526;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24526__$1);
if(temp__5457__auto__){
var s__24526__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24526__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24526__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24528 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24527 = (0);
while(true){
if((i__24527 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__24527);
cljs.core.chunk_append.call(null,b__24528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24532 = (i__24527 + (1));
i__24527 = G__24532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24528),sablono$core$iter__24525.call(null,cljs.core.chunk_rest.call(null,s__24526__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24528),null);
}
} else {
var style = cljs.core.first.call(null,s__24526__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24525.call(null,cljs.core.rest.call(null,s__24526__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq24524){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24524));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to24533 = (function sablono$core$link_to24533(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24536 = arguments.length;
var i__4532__auto___24537 = (0);
while(true){
if((i__4532__auto___24537 < len__4531__auto___24536)){
args__4534__auto__.push((arguments[i__4532__auto___24537]));

var G__24538 = (i__4532__auto___24537 + (1));
i__4532__auto___24537 = G__24538;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to24533.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to24533.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24533.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to24533.cljs$lang$applyTo = (function (seq24534){
var G__24535 = cljs.core.first.call(null,seq24534);
var seq24534__$1 = cljs.core.next.call(null,seq24534);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24535,seq24534__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24533);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24539 = (function sablono$core$mail_to24539(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24546 = arguments.length;
var i__4532__auto___24547 = (0);
while(true){
if((i__4532__auto___24547 < len__4531__auto___24546)){
args__4534__auto__.push((arguments[i__4532__auto___24547]));

var G__24548 = (i__4532__auto___24547 + (1));
i__4532__auto___24547 = G__24548;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to24539.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to24539.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24542){
var vec__24543 = p__24542;
var content = cljs.core.nth.call(null,vec__24543,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24539.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to24539.cljs$lang$applyTo = (function (seq24540){
var G__24541 = cljs.core.first.call(null,seq24540);
var seq24540__$1 = cljs.core.next.call(null,seq24540);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24541,seq24540__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24539);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24549 = (function sablono$core$unordered_list24549(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list24549_$_iter__24550(s__24551){
return (new cljs.core.LazySeq(null,(function (){
var s__24551__$1 = s__24551;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24551__$1);
if(temp__5457__auto__){
var s__24551__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24551__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24551__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24553 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24552 = (0);
while(true){
if((i__24552 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__24552);
cljs.core.chunk_append.call(null,b__24553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24554 = (i__24552 + (1));
i__24552 = G__24554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24553),sablono$core$unordered_list24549_$_iter__24550.call(null,cljs.core.chunk_rest.call(null,s__24551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24553),null);
}
} else {
var x = cljs.core.first.call(null,s__24551__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24549_$_iter__24550.call(null,cljs.core.rest.call(null,s__24551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24549);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24555 = (function sablono$core$ordered_list24555(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list24555_$_iter__24556(s__24557){
return (new cljs.core.LazySeq(null,(function (){
var s__24557__$1 = s__24557;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24557__$1);
if(temp__5457__auto__){
var s__24557__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24557__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24557__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24559 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24558 = (0);
while(true){
if((i__24558 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__24558);
cljs.core.chunk_append.call(null,b__24559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24560 = (i__24558 + (1));
i__24558 = G__24560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24559),sablono$core$ordered_list24555_$_iter__24556.call(null,cljs.core.chunk_rest.call(null,s__24557__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24559),null);
}
} else {
var x = cljs.core.first.call(null,s__24557__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24555_$_iter__24556.call(null,cljs.core.rest.call(null,s__24557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24555);
/**
 * Create an image element.
 */
sablono.core.image24561 = (function sablono$core$image24561(var_args){
var G__24563 = arguments.length;
switch (G__24563) {
case 1:
return sablono.core.image24561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image24561.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24561.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24561.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24561);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24565_SHARP_,p2__24566_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24565_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__24566_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24567_SHARP_,p2__24568_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24567_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__24568_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__24570 = arguments.length;
switch (G__24570) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field24572 = (function sablono$core$color_field24572(var_args){
var G__24574 = arguments.length;
switch (G__24574) {
case 1:
return sablono.core.color_field24572.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field24572.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24503__auto__);
});

sablono.core.color_field24572.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.color_field24572.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24572);

/**
 * Creates a date input field.
 */
sablono.core.date_field24575 = (function sablono$core$date_field24575(var_args){
var G__24577 = arguments.length;
switch (G__24577) {
case 1:
return sablono.core.date_field24575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field24575.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24503__auto__);
});

sablono.core.date_field24575.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.date_field24575.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24575);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24578 = (function sablono$core$datetime_field24578(var_args){
var G__24580 = arguments.length;
switch (G__24580) {
case 1:
return sablono.core.datetime_field24578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field24578.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24503__auto__);
});

sablono.core.datetime_field24578.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.datetime_field24578.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24578);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24581 = (function sablono$core$datetime_local_field24581(var_args){
var G__24583 = arguments.length;
switch (G__24583) {
case 1:
return sablono.core.datetime_local_field24581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field24581.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24503__auto__);
});

sablono.core.datetime_local_field24581.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.datetime_local_field24581.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24581);

/**
 * Creates a email input field.
 */
sablono.core.email_field24584 = (function sablono$core$email_field24584(var_args){
var G__24586 = arguments.length;
switch (G__24586) {
case 1:
return sablono.core.email_field24584.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24584.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field24584.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24503__auto__);
});

sablono.core.email_field24584.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.email_field24584.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24584);

/**
 * Creates a file input field.
 */
sablono.core.file_field24587 = (function sablono$core$file_field24587(var_args){
var G__24589 = arguments.length;
switch (G__24589) {
case 1:
return sablono.core.file_field24587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field24587.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24503__auto__);
});

sablono.core.file_field24587.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.file_field24587.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24587);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24590 = (function sablono$core$hidden_field24590(var_args){
var G__24592 = arguments.length;
switch (G__24592) {
case 1:
return sablono.core.hidden_field24590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field24590.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24503__auto__);
});

sablono.core.hidden_field24590.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.hidden_field24590.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24590);

/**
 * Creates a month input field.
 */
sablono.core.month_field24593 = (function sablono$core$month_field24593(var_args){
var G__24595 = arguments.length;
switch (G__24595) {
case 1:
return sablono.core.month_field24593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field24593.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24503__auto__);
});

sablono.core.month_field24593.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.month_field24593.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24593);

/**
 * Creates a number input field.
 */
sablono.core.number_field24596 = (function sablono$core$number_field24596(var_args){
var G__24598 = arguments.length;
switch (G__24598) {
case 1:
return sablono.core.number_field24596.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24596.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field24596.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24503__auto__);
});

sablono.core.number_field24596.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.number_field24596.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24596);

/**
 * Creates a password input field.
 */
sablono.core.password_field24599 = (function sablono$core$password_field24599(var_args){
var G__24601 = arguments.length;
switch (G__24601) {
case 1:
return sablono.core.password_field24599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field24599.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24503__auto__);
});

sablono.core.password_field24599.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.password_field24599.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24599);

/**
 * Creates a range input field.
 */
sablono.core.range_field24602 = (function sablono$core$range_field24602(var_args){
var G__24604 = arguments.length;
switch (G__24604) {
case 1:
return sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24503__auto__);
});

sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.range_field24602.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24602);

/**
 * Creates a search input field.
 */
sablono.core.search_field24605 = (function sablono$core$search_field24605(var_args){
var G__24607 = arguments.length;
switch (G__24607) {
case 1:
return sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24503__auto__);
});

sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.search_field24605.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24605);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24608 = (function sablono$core$tel_field24608(var_args){
var G__24610 = arguments.length;
switch (G__24610) {
case 1:
return sablono.core.tel_field24608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field24608.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24503__auto__);
});

sablono.core.tel_field24608.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.tel_field24608.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24608);

/**
 * Creates a text input field.
 */
sablono.core.text_field24611 = (function sablono$core$text_field24611(var_args){
var G__24613 = arguments.length;
switch (G__24613) {
case 1:
return sablono.core.text_field24611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field24611.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24503__auto__);
});

sablono.core.text_field24611.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.text_field24611.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24611);

/**
 * Creates a time input field.
 */
sablono.core.time_field24614 = (function sablono$core$time_field24614(var_args){
var G__24616 = arguments.length;
switch (G__24616) {
case 1:
return sablono.core.time_field24614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field24614.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24503__auto__);
});

sablono.core.time_field24614.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.time_field24614.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24614);

/**
 * Creates a url input field.
 */
sablono.core.url_field24617 = (function sablono$core$url_field24617(var_args){
var G__24619 = arguments.length;
switch (G__24619) {
case 1:
return sablono.core.url_field24617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field24617.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24503__auto__);
});

sablono.core.url_field24617.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.url_field24617.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24617);

/**
 * Creates a week input field.
 */
sablono.core.week_field24620 = (function sablono$core$week_field24620(var_args){
var G__24622 = arguments.length;
switch (G__24622) {
case 1:
return sablono.core.week_field24620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field24620.cljs$core$IFn$_invoke$arity$1 = (function (name__24503__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24503__auto__);
});

sablono.core.week_field24620.cljs$core$IFn$_invoke$arity$2 = (function (name__24503__auto__,value__24504__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24503__auto__,value__24504__auto__);
});

sablono.core.week_field24620.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24620);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24640 = (function sablono$core$check_box24640(var_args){
var G__24642 = arguments.length;
switch (G__24642) {
case 1:
return sablono.core.check_box24640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24640.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box24640.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box24640.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24640.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24640.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24640);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24644 = (function sablono$core$radio_button24644(var_args){
var G__24646 = arguments.length;
switch (G__24646) {
case 1:
return sablono.core.radio_button24644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24644.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button24644.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button24644.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24644.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24644.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24644);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24648 = (function sablono$core$select_options24648(coll){
var iter__4324__auto__ = (function sablono$core$select_options24648_$_iter__24649(s__24650){
return (new cljs.core.LazySeq(null,(function (){
var s__24650__$1 = s__24650;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24650__$1);
if(temp__5457__auto__){
var s__24650__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24650__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24650__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24652 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24651 = (0);
while(true){
if((i__24651 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__24651);
cljs.core.chunk_append.call(null,b__24652,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24653 = x;
var text = cljs.core.nth.call(null,vec__24653,(0),null);
var val = cljs.core.nth.call(null,vec__24653,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24653,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24648.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24659 = (i__24651 + (1));
i__24651 = G__24659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24652),sablono$core$select_options24648_$_iter__24649.call(null,cljs.core.chunk_rest.call(null,s__24650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24652),null);
}
} else {
var x = cljs.core.first.call(null,s__24650__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24656 = x;
var text = cljs.core.nth.call(null,vec__24656,(0),null);
var val = cljs.core.nth.call(null,vec__24656,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24656,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24648.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24648_$_iter__24649.call(null,cljs.core.rest.call(null,s__24650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24648);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24660 = (function sablono$core$drop_down24660(var_args){
var G__24662 = arguments.length;
switch (G__24662) {
case 2:
return sablono.core.drop_down24660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24660.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down24660.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24660.call(null,name,options,null);
});

sablono.core.drop_down24660.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24660.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24660);
/**
 * Creates a text area element.
 */
sablono.core.text_area24664 = (function sablono$core$text_area24664(var_args){
var G__24666 = arguments.length;
switch (G__24666) {
case 1:
return sablono.core.text_area24664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area24664.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area24664.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area24664.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24664);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24668 = (function sablono$core$label24668(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24668);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24669 = (function sablono$core$submit_button24669(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24669);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24670 = (function sablono$core$reset_button24670(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24670);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24671 = (function sablono$core$form_to24671(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24678 = arguments.length;
var i__4532__auto___24679 = (0);
while(true){
if((i__4532__auto___24679 < len__4531__auto___24678)){
args__4534__auto__.push((arguments[i__4532__auto___24679]));

var G__24680 = (i__4532__auto___24679 + (1));
i__4532__auto___24679 = G__24680;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24671.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to24671.cljs$core$IFn$_invoke$arity$variadic = (function (p__24674,body){
var vec__24675 = p__24674;
var method = cljs.core.nth.call(null,vec__24675,(0),null);
var action = cljs.core.nth.call(null,vec__24675,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24671.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to24671.cljs$lang$applyTo = (function (seq24672){
var G__24673 = cljs.core.first.call(null,seq24672);
var seq24672__$1 = cljs.core.next.call(null,seq24672);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24673,seq24672__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24671);

//# sourceMappingURL=core.js.map
