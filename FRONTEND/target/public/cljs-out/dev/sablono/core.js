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
var G__26610__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26607 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26608 = cljs.core.seq.call(null,vec__26607);
var first__26609 = cljs.core.first.call(null,seq__26608);
var seq__26608__$1 = cljs.core.next.call(null,seq__26608);
var tag = first__26609;
var body = seq__26608__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26611__i = 0, G__26611__a = new Array(arguments.length -  0);
while (G__26611__i < G__26611__a.length) {G__26611__a[G__26611__i] = arguments[G__26611__i + 0]; ++G__26611__i;}
  args = new cljs.core.IndexedSeq(G__26611__a,0,null);
} 
return G__26610__delegate.call(this,args);};
G__26610.cljs$lang$maxFixedArity = 0;
G__26610.cljs$lang$applyTo = (function (arglist__26612){
var args = cljs.core.seq(arglist__26612);
return G__26610__delegate(args);
});
G__26610.cljs$core$IFn$_invoke$arity$variadic = G__26610__delegate;
return G__26610;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__26613(s__26614){
return (new cljs.core.LazySeq(null,(function (){
var s__26614__$1 = s__26614;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26614__$1);
if(temp__5457__auto__){
var s__26614__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26614__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26614__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26616 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26615 = (0);
while(true){
if((i__26615 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__26615);
cljs.core.chunk_append.call(null,b__26616,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26617 = (i__26615 + (1));
i__26615 = G__26617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26616),sablono$core$update_arglists_$_iter__26613.call(null,cljs.core.chunk_rest.call(null,s__26614__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26616),null);
}
} else {
var args = cljs.core.first.call(null,s__26614__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26613.call(null,cljs.core.rest.call(null,s__26614__$2)));
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
var len__4531__auto___26623 = arguments.length;
var i__4532__auto___26624 = (0);
while(true){
if((i__4532__auto___26624 < len__4531__auto___26623)){
args__4534__auto__.push((arguments[i__4532__auto___26624]));

var G__26625 = (i__4532__auto___26624 + (1));
i__4532__auto___26624 = G__26625;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__26619(s__26620){
return (new cljs.core.LazySeq(null,(function (){
var s__26620__$1 = s__26620;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26620__$1);
if(temp__5457__auto__){
var s__26620__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26620__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26620__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26622 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26621 = (0);
while(true){
if((i__26621 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__26621);
cljs.core.chunk_append.call(null,b__26622,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26626 = (i__26621 + (1));
i__26621 = G__26626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26622),sablono$core$iter__26619.call(null,cljs.core.chunk_rest.call(null,s__26620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26622),null);
}
} else {
var style = cljs.core.first.call(null,s__26620__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26619.call(null,cljs.core.rest.call(null,s__26620__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq26618){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26618));
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
sablono.core.link_to26627 = (function sablono$core$link_to26627(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26630 = arguments.length;
var i__4532__auto___26631 = (0);
while(true){
if((i__4532__auto___26631 < len__4531__auto___26630)){
args__4534__auto__.push((arguments[i__4532__auto___26631]));

var G__26632 = (i__4532__auto___26631 + (1));
i__4532__auto___26631 = G__26632;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26627.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to26627.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26627.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to26627.cljs$lang$applyTo = (function (seq26628){
var G__26629 = cljs.core.first.call(null,seq26628);
var seq26628__$1 = cljs.core.next.call(null,seq26628);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26629,seq26628__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26627);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26633 = (function sablono$core$mail_to26633(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26640 = arguments.length;
var i__4532__auto___26641 = (0);
while(true){
if((i__4532__auto___26641 < len__4531__auto___26640)){
args__4534__auto__.push((arguments[i__4532__auto___26641]));

var G__26642 = (i__4532__auto___26641 + (1));
i__4532__auto___26641 = G__26642;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26633.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to26633.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26636){
var vec__26637 = p__26636;
var content = cljs.core.nth.call(null,vec__26637,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26633.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to26633.cljs$lang$applyTo = (function (seq26634){
var G__26635 = cljs.core.first.call(null,seq26634);
var seq26634__$1 = cljs.core.next.call(null,seq26634);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26635,seq26634__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26633);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26643 = (function sablono$core$unordered_list26643(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list26643_$_iter__26644(s__26645){
return (new cljs.core.LazySeq(null,(function (){
var s__26645__$1 = s__26645;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26645__$1);
if(temp__5457__auto__){
var s__26645__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26645__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26645__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26647 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26646 = (0);
while(true){
if((i__26646 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__26646);
cljs.core.chunk_append.call(null,b__26647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26648 = (i__26646 + (1));
i__26646 = G__26648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26647),sablono$core$unordered_list26643_$_iter__26644.call(null,cljs.core.chunk_rest.call(null,s__26645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26647),null);
}
} else {
var x = cljs.core.first.call(null,s__26645__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26643_$_iter__26644.call(null,cljs.core.rest.call(null,s__26645__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26643);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26649 = (function sablono$core$ordered_list26649(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list26649_$_iter__26650(s__26651){
return (new cljs.core.LazySeq(null,(function (){
var s__26651__$1 = s__26651;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26651__$1);
if(temp__5457__auto__){
var s__26651__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26651__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26651__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26653 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26652 = (0);
while(true){
if((i__26652 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__26652);
cljs.core.chunk_append.call(null,b__26653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26654 = (i__26652 + (1));
i__26652 = G__26654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26653),sablono$core$ordered_list26649_$_iter__26650.call(null,cljs.core.chunk_rest.call(null,s__26651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26653),null);
}
} else {
var x = cljs.core.first.call(null,s__26651__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26649_$_iter__26650.call(null,cljs.core.rest.call(null,s__26651__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26649);
/**
 * Create an image element.
 */
sablono.core.image26655 = (function sablono$core$image26655(var_args){
var G__26657 = arguments.length;
switch (G__26657) {
case 1:
return sablono.core.image26655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image26655.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26655.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26655.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26655);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26659_SHARP_,p2__26660_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26659_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26660_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26661_SHARP_,p2__26662_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26661_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26662_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__26664 = arguments.length;
switch (G__26664) {
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
sablono.core.color_field26666 = (function sablono$core$color_field26666(var_args){
var G__26668 = arguments.length;
switch (G__26668) {
case 1:
return sablono.core.color_field26666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field26666.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26597__auto__);
});

sablono.core.color_field26666.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.color_field26666.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26666);

/**
 * Creates a date input field.
 */
sablono.core.date_field26669 = (function sablono$core$date_field26669(var_args){
var G__26671 = arguments.length;
switch (G__26671) {
case 1:
return sablono.core.date_field26669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field26669.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26597__auto__);
});

sablono.core.date_field26669.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.date_field26669.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26669);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26672 = (function sablono$core$datetime_field26672(var_args){
var G__26674 = arguments.length;
switch (G__26674) {
case 1:
return sablono.core.datetime_field26672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field26672.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26597__auto__);
});

sablono.core.datetime_field26672.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.datetime_field26672.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26672);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26675 = (function sablono$core$datetime_local_field26675(var_args){
var G__26677 = arguments.length;
switch (G__26677) {
case 1:
return sablono.core.datetime_local_field26675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field26675.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26597__auto__);
});

sablono.core.datetime_local_field26675.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.datetime_local_field26675.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26675);

/**
 * Creates a email input field.
 */
sablono.core.email_field26678 = (function sablono$core$email_field26678(var_args){
var G__26680 = arguments.length;
switch (G__26680) {
case 1:
return sablono.core.email_field26678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field26678.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26597__auto__);
});

sablono.core.email_field26678.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.email_field26678.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26678);

/**
 * Creates a file input field.
 */
sablono.core.file_field26681 = (function sablono$core$file_field26681(var_args){
var G__26683 = arguments.length;
switch (G__26683) {
case 1:
return sablono.core.file_field26681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field26681.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26597__auto__);
});

sablono.core.file_field26681.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.file_field26681.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26681);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26684 = (function sablono$core$hidden_field26684(var_args){
var G__26686 = arguments.length;
switch (G__26686) {
case 1:
return sablono.core.hidden_field26684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field26684.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26597__auto__);
});

sablono.core.hidden_field26684.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.hidden_field26684.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26684);

/**
 * Creates a month input field.
 */
sablono.core.month_field26687 = (function sablono$core$month_field26687(var_args){
var G__26689 = arguments.length;
switch (G__26689) {
case 1:
return sablono.core.month_field26687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field26687.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26597__auto__);
});

sablono.core.month_field26687.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.month_field26687.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26687);

/**
 * Creates a number input field.
 */
sablono.core.number_field26690 = (function sablono$core$number_field26690(var_args){
var G__26692 = arguments.length;
switch (G__26692) {
case 1:
return sablono.core.number_field26690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field26690.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26597__auto__);
});

sablono.core.number_field26690.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.number_field26690.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26690);

/**
 * Creates a password input field.
 */
sablono.core.password_field26693 = (function sablono$core$password_field26693(var_args){
var G__26695 = arguments.length;
switch (G__26695) {
case 1:
return sablono.core.password_field26693.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26693.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field26693.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26597__auto__);
});

sablono.core.password_field26693.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.password_field26693.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26693);

/**
 * Creates a range input field.
 */
sablono.core.range_field26696 = (function sablono$core$range_field26696(var_args){
var G__26698 = arguments.length;
switch (G__26698) {
case 1:
return sablono.core.range_field26696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field26696.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26597__auto__);
});

sablono.core.range_field26696.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.range_field26696.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26696);

/**
 * Creates a search input field.
 */
sablono.core.search_field26699 = (function sablono$core$search_field26699(var_args){
var G__26701 = arguments.length;
switch (G__26701) {
case 1:
return sablono.core.search_field26699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field26699.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26597__auto__);
});

sablono.core.search_field26699.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.search_field26699.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26699);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26702 = (function sablono$core$tel_field26702(var_args){
var G__26704 = arguments.length;
switch (G__26704) {
case 1:
return sablono.core.tel_field26702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field26702.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26597__auto__);
});

sablono.core.tel_field26702.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.tel_field26702.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26702);

/**
 * Creates a text input field.
 */
sablono.core.text_field26705 = (function sablono$core$text_field26705(var_args){
var G__26707 = arguments.length;
switch (G__26707) {
case 1:
return sablono.core.text_field26705.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field26705.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26597__auto__);
});

sablono.core.text_field26705.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.text_field26705.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26705);

/**
 * Creates a time input field.
 */
sablono.core.time_field26708 = (function sablono$core$time_field26708(var_args){
var G__26710 = arguments.length;
switch (G__26710) {
case 1:
return sablono.core.time_field26708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field26708.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26597__auto__);
});

sablono.core.time_field26708.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.time_field26708.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26708);

/**
 * Creates a url input field.
 */
sablono.core.url_field26711 = (function sablono$core$url_field26711(var_args){
var G__26713 = arguments.length;
switch (G__26713) {
case 1:
return sablono.core.url_field26711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field26711.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26597__auto__);
});

sablono.core.url_field26711.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.url_field26711.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26711);

/**
 * Creates a week input field.
 */
sablono.core.week_field26714 = (function sablono$core$week_field26714(var_args){
var G__26716 = arguments.length;
switch (G__26716) {
case 1:
return sablono.core.week_field26714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field26714.cljs$core$IFn$_invoke$arity$1 = (function (name__26597__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26597__auto__);
});

sablono.core.week_field26714.cljs$core$IFn$_invoke$arity$2 = (function (name__26597__auto__,value__26598__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26597__auto__,value__26598__auto__);
});

sablono.core.week_field26714.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26714);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26734 = (function sablono$core$check_box26734(var_args){
var G__26736 = arguments.length;
switch (G__26736) {
case 1:
return sablono.core.check_box26734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26734.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box26734.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box26734.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26734.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26734.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26734);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26738 = (function sablono$core$radio_button26738(var_args){
var G__26740 = arguments.length;
switch (G__26740) {
case 1:
return sablono.core.radio_button26738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26738.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button26738.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button26738.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26738.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26738.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26738);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26742 = (function sablono$core$select_options26742(coll){
var iter__4324__auto__ = (function sablono$core$select_options26742_$_iter__26743(s__26744){
return (new cljs.core.LazySeq(null,(function (){
var s__26744__$1 = s__26744;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26744__$1);
if(temp__5457__auto__){
var s__26744__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26744__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26744__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26746 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26745 = (0);
while(true){
if((i__26745 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__26745);
cljs.core.chunk_append.call(null,b__26746,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26747 = x;
var text = cljs.core.nth.call(null,vec__26747,(0),null);
var val = cljs.core.nth.call(null,vec__26747,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26747,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26742.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26753 = (i__26745 + (1));
i__26745 = G__26753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26746),sablono$core$select_options26742_$_iter__26743.call(null,cljs.core.chunk_rest.call(null,s__26744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26746),null);
}
} else {
var x = cljs.core.first.call(null,s__26744__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26750 = x;
var text = cljs.core.nth.call(null,vec__26750,(0),null);
var val = cljs.core.nth.call(null,vec__26750,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26750,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26742.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26742_$_iter__26743.call(null,cljs.core.rest.call(null,s__26744__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26742);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26754 = (function sablono$core$drop_down26754(var_args){
var G__26756 = arguments.length;
switch (G__26756) {
case 2:
return sablono.core.drop_down26754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26754.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down26754.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26754.call(null,name,options,null);
});

sablono.core.drop_down26754.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26754.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26754);
/**
 * Creates a text area element.
 */
sablono.core.text_area26758 = (function sablono$core$text_area26758(var_args){
var G__26760 = arguments.length;
switch (G__26760) {
case 1:
return sablono.core.text_area26758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area26758.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area26758.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26758.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26758);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26762 = (function sablono$core$label26762(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26762);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26763 = (function sablono$core$submit_button26763(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26763);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26764 = (function sablono$core$reset_button26764(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26764);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26765 = (function sablono$core$form_to26765(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26772 = arguments.length;
var i__4532__auto___26773 = (0);
while(true){
if((i__4532__auto___26773 < len__4531__auto___26772)){
args__4534__auto__.push((arguments[i__4532__auto___26773]));

var G__26774 = (i__4532__auto___26773 + (1));
i__4532__auto___26773 = G__26774;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26765.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to26765.cljs$core$IFn$_invoke$arity$variadic = (function (p__26768,body){
var vec__26769 = p__26768;
var method = cljs.core.nth.call(null,vec__26769,(0),null);
var action = cljs.core.nth.call(null,vec__26769,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26765.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to26765.cljs$lang$applyTo = (function (seq26766){
var G__26767 = cljs.core.first.call(null,seq26766);
var seq26766__$1 = cljs.core.next.call(null,seq26766);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26767,seq26766__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26765);

//# sourceMappingURL=core.js.map
