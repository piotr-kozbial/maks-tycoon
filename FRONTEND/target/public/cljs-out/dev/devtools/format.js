// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._header[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._header["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._has_body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24598 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24598["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24599 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24599["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24600 = temp__5455__auto____$2;
return (o24600["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24601 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24601["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24602 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24602["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24603 = temp__5455__auto____$2;
return (o24603["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24604 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24604["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24605 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24605["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24606 = temp__5455__auto____$2;
return (o24606["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24607 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24607["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24608 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24608["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24609 = temp__5455__auto____$2;
return (o24609["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24610 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24610["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24611 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24611["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24612 = temp__5455__auto____$2;
return (o24612["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24613 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24613["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24614 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24614["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24615 = temp__5455__auto____$2;
return (o24615["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24616 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24616["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24617 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24617["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24618 = temp__5455__auto____$2;
return (o24618["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24620 = arguments.length;
var i__4532__auto___24621 = (0);
while(true){
if((i__4532__auto___24621 < len__4531__auto___24620)){
args__4534__auto__.push((arguments[i__4532__auto___24621]));

var G__24622 = (i__4532__auto___24621 + (1));
i__4532__auto___24621 = G__24622;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq24619){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24619));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24624 = arguments.length;
var i__4532__auto___24625 = (0);
while(true){
if((i__4532__auto___24625 < len__4531__auto___24624)){
args__4534__auto__.push((arguments[i__4532__auto___24625]));

var G__24626 = (i__4532__auto___24625 + (1));
i__4532__auto___24625 = G__24626;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq24623){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24623));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24628 = arguments.length;
var i__4532__auto___24629 = (0);
while(true){
if((i__4532__auto___24629 < len__4531__auto___24628)){
args__4534__auto__.push((arguments[i__4532__auto___24629]));

var G__24630 = (i__4532__auto___24629 + (1));
i__4532__auto___24629 = G__24630;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq24627){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24627));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24632 = arguments.length;
var i__4532__auto___24633 = (0);
while(true){
if((i__4532__auto___24633 < len__4531__auto___24632)){
args__4534__auto__.push((arguments[i__4532__auto___24633]));

var G__24634 = (i__4532__auto___24633 + (1));
i__4532__auto___24633 = G__24634;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24631){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24631));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24636 = arguments.length;
var i__4532__auto___24637 = (0);
while(true){
if((i__4532__auto___24637 < len__4531__auto___24636)){
args__4534__auto__.push((arguments[i__4532__auto___24637]));

var G__24638 = (i__4532__auto___24637 + (1));
i__4532__auto___24637 = G__24638;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq24635){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24635));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24640 = arguments.length;
var i__4532__auto___24641 = (0);
while(true){
if((i__4532__auto___24641 < len__4531__auto___24640)){
args__4534__auto__.push((arguments[i__4532__auto___24641]));

var G__24642 = (i__4532__auto___24641 + (1));
i__4532__auto___24641 = G__24642;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq24639){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24639));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24644 = arguments.length;
var i__4532__auto___24645 = (0);
while(true){
if((i__4532__auto___24645 < len__4531__auto___24644)){
args__4534__auto__.push((arguments[i__4532__auto___24645]));

var G__24646 = (i__4532__auto___24645 + (1));
i__4532__auto___24645 = G__24646;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq24643){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24643));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24654 = arguments.length;
var i__4532__auto___24655 = (0);
while(true){
if((i__4532__auto___24655 < len__4531__auto___24654)){
args__4534__auto__.push((arguments[i__4532__auto___24655]));

var G__24656 = (i__4532__auto___24655 + (1));
i__4532__auto___24655 = G__24656;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24650){
var vec__24651 = p__24650;
var state_override = cljs.core.nth.call(null,vec__24651,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__24651,state_override){
return (function (p1__24647_SHARP_){
return cljs.core.merge.call(null,p1__24647_SHARP_,state_override);
});})(vec__24651,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq24648){
var G__24649 = cljs.core.first.call(null,seq24648);
var seq24648__$1 = cljs.core.next.call(null,seq24648);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24649,seq24648__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24658 = arguments.length;
var i__4532__auto___24659 = (0);
while(true){
if((i__4532__auto___24659 < len__4531__auto___24658)){
args__4534__auto__.push((arguments[i__4532__auto___24659]));

var G__24660 = (i__4532__auto___24659 + (1));
i__4532__auto___24659 = G__24660;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq24657){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24657));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24663 = arguments.length;
var i__4532__auto___24664 = (0);
while(true){
if((i__4532__auto___24664 < len__4531__auto___24663)){
args__4534__auto__.push((arguments[i__4532__auto___24664]));

var G__24665 = (i__4532__auto___24664 + (1));
i__4532__auto___24664 = G__24665;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24661){
var G__24662 = cljs.core.first.call(null,seq24661);
var seq24661__$1 = cljs.core.next.call(null,seq24661);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24662,seq24661__$1);
});


//# sourceMappingURL=format.js.map
