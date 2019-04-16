// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__22049 = cljs.core.seq.call(null,props);
var chunk__22051 = null;
var count__22052 = (0);
var i__22053 = (0);
while(true){
if((i__22053 < count__22052)){
var vec__22055 = cljs.core._nth.call(null,chunk__22051,i__22053);
var k = cljs.core.nth.call(null,vec__22055,(0),null);
var v = cljs.core.nth.call(null,vec__22055,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__22061 = seq__22049;
var G__22062 = chunk__22051;
var G__22063 = count__22052;
var G__22064 = (i__22053 + (1));
seq__22049 = G__22061;
chunk__22051 = G__22062;
count__22052 = G__22063;
i__22053 = G__22064;
continue;
} else {
var G__22065 = seq__22049;
var G__22066 = chunk__22051;
var G__22067 = count__22052;
var G__22068 = (i__22053 + (1));
seq__22049 = G__22065;
chunk__22051 = G__22066;
count__22052 = G__22067;
i__22053 = G__22068;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22049);
if(temp__5457__auto__){
var seq__22049__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22049__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22049__$1);
var G__22069 = cljs.core.chunk_rest.call(null,seq__22049__$1);
var G__22070 = c__4351__auto__;
var G__22071 = cljs.core.count.call(null,c__4351__auto__);
var G__22072 = (0);
seq__22049 = G__22069;
chunk__22051 = G__22070;
count__22052 = G__22071;
i__22053 = G__22072;
continue;
} else {
var vec__22058 = cljs.core.first.call(null,seq__22049__$1);
var k = cljs.core.nth.call(null,vec__22058,(0),null);
var v = cljs.core.nth.call(null,vec__22058,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__22073 = cljs.core.next.call(null,seq__22049__$1);
var G__22074 = null;
var G__22075 = (0);
var G__22076 = (0);
seq__22049 = G__22073;
chunk__22051 = G__22074;
count__22052 = G__22075;
i__22053 = G__22076;
continue;
} else {
var G__22077 = cljs.core.next.call(null,seq__22049__$1);
var G__22078 = null;
var G__22079 = (0);
var G__22080 = (0);
seq__22049 = G__22077;
chunk__22051 = G__22078;
count__22052 = G__22079;
i__22053 = G__22080;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__22082_SHARP_,p2__22081_SHARP_){
return p2__22081_SHARP_.call(null,p1__22082_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__22084_SHARP_,p2__22083_SHARP_){
return p2__22083_SHARP_.call(null,old_state,p1__22084_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__22085_SHARP_){
return p1__22085_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__22087 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__22087,(0),null);
var next_state = cljs.core.nth.call(null,vec__22087,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__22086_SHARP_){
return p1__22086_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__22090__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__22090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22091__i = 0, G__22091__a = new Array(arguments.length -  0);
while (G__22091__i < G__22091__a.length) {G__22091__a[G__22091__i] = arguments[G__22091__i + 0]; ++G__22091__i;}
  args = new cljs.core.IndexedSeq(G__22091__a,0,null);
} 
return G__22090__delegate.call(this,args);};
G__22090.cljs$lang$maxFixedArity = 0;
G__22090.cljs$lang$applyTo = (function (arglist__22092){
var args = cljs.core.seq(arglist__22092);
return G__22090__delegate(args);
});
G__22090.cljs$core$IFn$_invoke$arity$variadic = G__22090__delegate;
return G__22090;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__22093__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__22093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22094__i = 0, G__22094__a = new Array(arguments.length -  0);
while (G__22094__i < G__22094__a.length) {G__22094__a[G__22094__i] = arguments[G__22094__i + 0]; ++G__22094__i;}
  args = new cljs.core.IndexedSeq(G__22094__a,0,null);
} 
return G__22093__delegate.call(this,args);};
G__22093.cljs$lang$maxFixedArity = 0;
G__22093.cljs$lang$applyTo = (function (arglist__22095){
var args = cljs.core.seq(arglist__22095);
return G__22093__delegate(args);
});
G__22093.cljs$core$IFn$_invoke$arity$variadic = G__22093__delegate;
return G__22093;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__22096__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__22096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22097__i = 0, G__22097__a = new Array(arguments.length -  0);
while (G__22097__i < G__22097__a.length) {G__22097__a[G__22097__i] = arguments[G__22097__i + 0]; ++G__22097__i;}
  args = new cljs.core.IndexedSeq(G__22097__a,0,null);
} 
return G__22096__delegate.call(this,args);};
G__22096.cljs$lang$maxFixedArity = 0;
G__22096.cljs$lang$applyTo = (function (arglist__22098){
var args = cljs.core.seq(arglist__22098);
return G__22096__delegate(args);
});
G__22096.cljs$core$IFn$_invoke$arity$variadic = G__22096__delegate;
return G__22096;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__22099_SHARP_){
return setTimeout(p1__22099_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__22100 = cljs.core.seq.call(null,queue);
var chunk__22102 = null;
var count__22103 = (0);
var i__22104 = (0);
while(true){
if((i__22104 < count__22103)){
var comp = cljs.core._nth.call(null,chunk__22102,i__22104);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__22106 = seq__22100;
var G__22107 = chunk__22102;
var G__22108 = count__22103;
var G__22109 = (i__22104 + (1));
seq__22100 = G__22106;
chunk__22102 = G__22107;
count__22103 = G__22108;
i__22104 = G__22109;
continue;
} else {
var G__22110 = seq__22100;
var G__22111 = chunk__22102;
var G__22112 = count__22103;
var G__22113 = (i__22104 + (1));
seq__22100 = G__22110;
chunk__22102 = G__22111;
count__22103 = G__22112;
i__22104 = G__22113;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22100);
if(temp__5457__auto__){
var seq__22100__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22100__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22100__$1);
var G__22114 = cljs.core.chunk_rest.call(null,seq__22100__$1);
var G__22115 = c__4351__auto__;
var G__22116 = cljs.core.count.call(null,c__4351__auto__);
var G__22117 = (0);
seq__22100 = G__22114;
chunk__22102 = G__22115;
count__22103 = G__22116;
i__22104 = G__22117;
continue;
} else {
var comp = cljs.core.first.call(null,seq__22100__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__22118 = cljs.core.next.call(null,seq__22100__$1);
var G__22119 = null;
var G__22120 = (0);
var G__22121 = (0);
seq__22100 = G__22118;
chunk__22102 = G__22119;
count__22103 = G__22120;
i__22104 = G__22121;
continue;
} else {
var G__22122 = cljs.core.next.call(null,seq__22100__$1);
var G__22123 = null;
var G__22124 = (0);
var G__22125 = (0);
seq__22100 = G__22122;
chunk__22102 = G__22123;
count__22103 = G__22124;
i__22104 = G__22125;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__22127 = arguments.length;
switch (G__22127) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_22129 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__22130 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__22130,(0),null);
var next_state = cljs.core.nth.call(null,vec__22130,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22133_22145 = cljs.core.seq.call(null,old_reactions);
var chunk__22134_22146 = null;
var count__22135_22147 = (0);
var i__22136_22148 = (0);
while(true){
if((i__22136_22148 < count__22135_22147)){
var ref_22149 = cljs.core._nth.call(null,chunk__22134_22146,i__22136_22148);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22149)){
} else {
cljs.core.remove_watch.call(null,ref_22149,key);
}


var G__22150 = seq__22133_22145;
var G__22151 = chunk__22134_22146;
var G__22152 = count__22135_22147;
var G__22153 = (i__22136_22148 + (1));
seq__22133_22145 = G__22150;
chunk__22134_22146 = G__22151;
count__22135_22147 = G__22152;
i__22136_22148 = G__22153;
continue;
} else {
var temp__5457__auto___22154 = cljs.core.seq.call(null,seq__22133_22145);
if(temp__5457__auto___22154){
var seq__22133_22155__$1 = temp__5457__auto___22154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22133_22155__$1)){
var c__4351__auto___22156 = cljs.core.chunk_first.call(null,seq__22133_22155__$1);
var G__22157 = cljs.core.chunk_rest.call(null,seq__22133_22155__$1);
var G__22158 = c__4351__auto___22156;
var G__22159 = cljs.core.count.call(null,c__4351__auto___22156);
var G__22160 = (0);
seq__22133_22145 = G__22157;
chunk__22134_22146 = G__22158;
count__22135_22147 = G__22159;
i__22136_22148 = G__22160;
continue;
} else {
var ref_22161 = cljs.core.first.call(null,seq__22133_22155__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22161)){
} else {
cljs.core.remove_watch.call(null,ref_22161,key);
}


var G__22162 = cljs.core.next.call(null,seq__22133_22155__$1);
var G__22163 = null;
var G__22164 = (0);
var G__22165 = (0);
seq__22133_22145 = G__22162;
chunk__22134_22146 = G__22163;
count__22135_22147 = G__22164;
i__22136_22148 = G__22165;
continue;
}
} else {
}
}
break;
}

var seq__22137_22166 = cljs.core.seq.call(null,new_reactions);
var chunk__22138_22167 = null;
var count__22139_22168 = (0);
var i__22140_22169 = (0);
while(true){
if((i__22140_22169 < count__22139_22168)){
var ref_22170 = cljs.core._nth.call(null,chunk__22138_22167,i__22140_22169);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22170)){
} else {
cljs.core.add_watch.call(null,ref_22170,key,((function (seq__22137_22166,chunk__22138_22167,count__22139_22168,i__22140_22169,ref_22170,comp,old_reactions,vec__22130,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22129){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__22137_22166,chunk__22138_22167,count__22139_22168,i__22140_22169,ref_22170,comp,old_reactions,vec__22130,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22129))
);
}


var G__22171 = seq__22137_22166;
var G__22172 = chunk__22138_22167;
var G__22173 = count__22139_22168;
var G__22174 = (i__22140_22169 + (1));
seq__22137_22166 = G__22171;
chunk__22138_22167 = G__22172;
count__22139_22168 = G__22173;
i__22140_22169 = G__22174;
continue;
} else {
var temp__5457__auto___22175 = cljs.core.seq.call(null,seq__22137_22166);
if(temp__5457__auto___22175){
var seq__22137_22176__$1 = temp__5457__auto___22175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22137_22176__$1)){
var c__4351__auto___22177 = cljs.core.chunk_first.call(null,seq__22137_22176__$1);
var G__22178 = cljs.core.chunk_rest.call(null,seq__22137_22176__$1);
var G__22179 = c__4351__auto___22177;
var G__22180 = cljs.core.count.call(null,c__4351__auto___22177);
var G__22181 = (0);
seq__22137_22166 = G__22178;
chunk__22138_22167 = G__22179;
count__22139_22168 = G__22180;
i__22140_22169 = G__22181;
continue;
} else {
var ref_22182 = cljs.core.first.call(null,seq__22137_22176__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22182)){
} else {
cljs.core.add_watch.call(null,ref_22182,key,((function (seq__22137_22166,chunk__22138_22167,count__22139_22168,i__22140_22169,ref_22182,seq__22137_22176__$1,temp__5457__auto___22175,comp,old_reactions,vec__22130,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22129){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__22137_22166,chunk__22138_22167,count__22139_22168,i__22140_22169,ref_22182,seq__22137_22176__$1,temp__5457__auto___22175,comp,old_reactions,vec__22130,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22129))
);
}


var G__22183 = cljs.core.next.call(null,seq__22137_22176__$1);
var G__22184 = null;
var G__22185 = (0);
var G__22186 = (0);
seq__22137_22166 = G__22183;
chunk__22138_22167 = G__22184;
count__22139_22168 = G__22185;
i__22140_22169 = G__22186;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_22129;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_22187 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22141_22188 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__22142_22189 = null;
var count__22143_22190 = (0);
var i__22144_22191 = (0);
while(true){
if((i__22144_22191 < count__22143_22190)){
var ref_22192 = cljs.core._nth.call(null,chunk__22142_22189,i__22144_22191);
cljs.core.remove_watch.call(null,ref_22192,key_22187);


var G__22193 = seq__22141_22188;
var G__22194 = chunk__22142_22189;
var G__22195 = count__22143_22190;
var G__22196 = (i__22144_22191 + (1));
seq__22141_22188 = G__22193;
chunk__22142_22189 = G__22194;
count__22143_22190 = G__22195;
i__22144_22191 = G__22196;
continue;
} else {
var temp__5457__auto___22197 = cljs.core.seq.call(null,seq__22141_22188);
if(temp__5457__auto___22197){
var seq__22141_22198__$1 = temp__5457__auto___22197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22141_22198__$1)){
var c__4351__auto___22199 = cljs.core.chunk_first.call(null,seq__22141_22198__$1);
var G__22200 = cljs.core.chunk_rest.call(null,seq__22141_22198__$1);
var G__22201 = c__4351__auto___22199;
var G__22202 = cljs.core.count.call(null,c__4351__auto___22199);
var G__22203 = (0);
seq__22141_22188 = G__22200;
chunk__22142_22189 = G__22201;
count__22143_22190 = G__22202;
i__22144_22191 = G__22203;
continue;
} else {
var ref_22204 = cljs.core.first.call(null,seq__22141_22198__$1);
cljs.core.remove_watch.call(null,ref_22204,key_22187);


var G__22205 = cljs.core.next.call(null,seq__22141_22198__$1);
var G__22206 = null;
var G__22207 = (0);
var G__22208 = (0);
seq__22141_22188 = G__22205;
chunk__22142_22189 = G__22206;
count__22143_22190 = G__22207;
i__22144_22191 = G__22208;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22215 = arguments.length;
var i__4532__auto___22216 = (0);
while(true){
if((i__4532__auto___22216 < len__4531__auto___22215)){
args__4534__auto__.push((arguments[i__4532__auto___22216]));

var G__22217 = (i__4532__auto___22216 + (1));
i__4532__auto___22216 = G__22217;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__22212){
var map__22213 = p__22212;
var map__22213__$1 = ((((!((map__22213 == null)))?(((((map__22213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22213):map__22213);
var options = map__22213__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq22209){
var G__22210 = cljs.core.first.call(null,seq22209);
var seq22209__$1 = cljs.core.next.call(null,seq22209);
var G__22211 = cljs.core.first.call(null,seq22209__$1);
var seq22209__$2 = cljs.core.next.call(null,seq22209__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22210,G__22211,seq22209__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22221 = arguments.length;
var i__4532__auto___22222 = (0);
while(true){
if((i__4532__auto___22222 < len__4531__auto___22221)){
args__4534__auto__.push((arguments[i__4532__auto___22222]));

var G__22223 = (i__4532__auto___22222 + (1));
i__4532__auto___22222 = G__22223;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq22218){
var G__22219 = cljs.core.first.call(null,seq22218);
var seq22218__$1 = cljs.core.next.call(null,seq22218);
var G__22220 = cljs.core.first.call(null,seq22218__$1);
var seq22218__$2 = cljs.core.next.call(null,seq22218__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22219,G__22220,seq22218__$2);
});


//# sourceMappingURL=core.js.map
