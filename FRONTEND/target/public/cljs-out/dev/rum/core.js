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
var seq__30837 = cljs.core.seq.call(null,props);
var chunk__30839 = null;
var count__30840 = (0);
var i__30841 = (0);
while(true){
if((i__30841 < count__30840)){
var vec__30843 = cljs.core._nth.call(null,chunk__30839,i__30841);
var k = cljs.core.nth.call(null,vec__30843,(0),null);
var v = cljs.core.nth.call(null,vec__30843,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__30849 = seq__30837;
var G__30850 = chunk__30839;
var G__30851 = count__30840;
var G__30852 = (i__30841 + (1));
seq__30837 = G__30849;
chunk__30839 = G__30850;
count__30840 = G__30851;
i__30841 = G__30852;
continue;
} else {
var G__30853 = seq__30837;
var G__30854 = chunk__30839;
var G__30855 = count__30840;
var G__30856 = (i__30841 + (1));
seq__30837 = G__30853;
chunk__30839 = G__30854;
count__30840 = G__30855;
i__30841 = G__30856;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30837);
if(temp__5457__auto__){
var seq__30837__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30837__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30837__$1);
var G__30857 = cljs.core.chunk_rest.call(null,seq__30837__$1);
var G__30858 = c__4351__auto__;
var G__30859 = cljs.core.count.call(null,c__4351__auto__);
var G__30860 = (0);
seq__30837 = G__30857;
chunk__30839 = G__30858;
count__30840 = G__30859;
i__30841 = G__30860;
continue;
} else {
var vec__30846 = cljs.core.first.call(null,seq__30837__$1);
var k = cljs.core.nth.call(null,vec__30846,(0),null);
var v = cljs.core.nth.call(null,vec__30846,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__30861 = cljs.core.next.call(null,seq__30837__$1);
var G__30862 = null;
var G__30863 = (0);
var G__30864 = (0);
seq__30837 = G__30861;
chunk__30839 = G__30862;
count__30840 = G__30863;
i__30841 = G__30864;
continue;
} else {
var G__30865 = cljs.core.next.call(null,seq__30837__$1);
var G__30866 = null;
var G__30867 = (0);
var G__30868 = (0);
seq__30837 = G__30865;
chunk__30839 = G__30866;
count__30840 = G__30867;
i__30841 = G__30868;
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
return (function (p1__30870_SHARP_,p2__30869_SHARP_){
return p2__30869_SHARP_.call(null,p1__30870_SHARP_);
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
return (function (p1__30872_SHARP_,p2__30871_SHARP_){
return p2__30871_SHARP_.call(null,old_state,p1__30872_SHARP_);
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
return (function (p1__30873_SHARP_){
return p1__30873_SHARP_.call(null,old_state,new_state);
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
var vec__30875 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__30875,(0),null);
var next_state = cljs.core.nth.call(null,vec__30875,(1),null);
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
return (function (p1__30874_SHARP_){
return p1__30874_SHARP_.call(null,state);
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
var G__30878__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__30878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30879__i = 0, G__30879__a = new Array(arguments.length -  0);
while (G__30879__i < G__30879__a.length) {G__30879__a[G__30879__i] = arguments[G__30879__i + 0]; ++G__30879__i;}
  args = new cljs.core.IndexedSeq(G__30879__a,0,null);
} 
return G__30878__delegate.call(this,args);};
G__30878.cljs$lang$maxFixedArity = 0;
G__30878.cljs$lang$applyTo = (function (arglist__30880){
var args = cljs.core.seq(arglist__30880);
return G__30878__delegate(args);
});
G__30878.cljs$core$IFn$_invoke$arity$variadic = G__30878__delegate;
return G__30878;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__30881__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__30881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30882__i = 0, G__30882__a = new Array(arguments.length -  0);
while (G__30882__i < G__30882__a.length) {G__30882__a[G__30882__i] = arguments[G__30882__i + 0]; ++G__30882__i;}
  args = new cljs.core.IndexedSeq(G__30882__a,0,null);
} 
return G__30881__delegate.call(this,args);};
G__30881.cljs$lang$maxFixedArity = 0;
G__30881.cljs$lang$applyTo = (function (arglist__30883){
var args = cljs.core.seq(arglist__30883);
return G__30881__delegate(args);
});
G__30881.cljs$core$IFn$_invoke$arity$variadic = G__30881__delegate;
return G__30881;
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
var G__30884__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__30884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30885__i = 0, G__30885__a = new Array(arguments.length -  0);
while (G__30885__i < G__30885__a.length) {G__30885__a[G__30885__i] = arguments[G__30885__i + 0]; ++G__30885__i;}
  args = new cljs.core.IndexedSeq(G__30885__a,0,null);
} 
return G__30884__delegate.call(this,args);};
G__30884.cljs$lang$maxFixedArity = 0;
G__30884.cljs$lang$applyTo = (function (arglist__30886){
var args = cljs.core.seq(arglist__30886);
return G__30884__delegate(args);
});
G__30884.cljs$core$IFn$_invoke$arity$variadic = G__30884__delegate;
return G__30884;
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
return (function (p1__30887_SHARP_){
return setTimeout(p1__30887_SHARP_,(16));
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
var seq__30888 = cljs.core.seq.call(null,queue);
var chunk__30890 = null;
var count__30891 = (0);
var i__30892 = (0);
while(true){
if((i__30892 < count__30891)){
var comp = cljs.core._nth.call(null,chunk__30890,i__30892);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__30894 = seq__30888;
var G__30895 = chunk__30890;
var G__30896 = count__30891;
var G__30897 = (i__30892 + (1));
seq__30888 = G__30894;
chunk__30890 = G__30895;
count__30891 = G__30896;
i__30892 = G__30897;
continue;
} else {
var G__30898 = seq__30888;
var G__30899 = chunk__30890;
var G__30900 = count__30891;
var G__30901 = (i__30892 + (1));
seq__30888 = G__30898;
chunk__30890 = G__30899;
count__30891 = G__30900;
i__30892 = G__30901;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30888);
if(temp__5457__auto__){
var seq__30888__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30888__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30888__$1);
var G__30902 = cljs.core.chunk_rest.call(null,seq__30888__$1);
var G__30903 = c__4351__auto__;
var G__30904 = cljs.core.count.call(null,c__4351__auto__);
var G__30905 = (0);
seq__30888 = G__30902;
chunk__30890 = G__30903;
count__30891 = G__30904;
i__30892 = G__30905;
continue;
} else {
var comp = cljs.core.first.call(null,seq__30888__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__30906 = cljs.core.next.call(null,seq__30888__$1);
var G__30907 = null;
var G__30908 = (0);
var G__30909 = (0);
seq__30888 = G__30906;
chunk__30890 = G__30907;
count__30891 = G__30908;
i__30892 = G__30909;
continue;
} else {
var G__30910 = cljs.core.next.call(null,seq__30888__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30888 = G__30910;
chunk__30890 = G__30911;
count__30891 = G__30912;
i__30892 = G__30913;
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
var G__30915 = arguments.length;
switch (G__30915) {
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
var _STAR_reactions_STAR_30917 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__30918 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__30918,(0),null);
var next_state = cljs.core.nth.call(null,vec__30918,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__30921_30933 = cljs.core.seq.call(null,old_reactions);
var chunk__30922_30934 = null;
var count__30923_30935 = (0);
var i__30924_30936 = (0);
while(true){
if((i__30924_30936 < count__30923_30935)){
var ref_30937 = cljs.core._nth.call(null,chunk__30922_30934,i__30924_30936);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_30937)){
} else {
cljs.core.remove_watch.call(null,ref_30937,key);
}


var G__30938 = seq__30921_30933;
var G__30939 = chunk__30922_30934;
var G__30940 = count__30923_30935;
var G__30941 = (i__30924_30936 + (1));
seq__30921_30933 = G__30938;
chunk__30922_30934 = G__30939;
count__30923_30935 = G__30940;
i__30924_30936 = G__30941;
continue;
} else {
var temp__5457__auto___30942 = cljs.core.seq.call(null,seq__30921_30933);
if(temp__5457__auto___30942){
var seq__30921_30943__$1 = temp__5457__auto___30942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30921_30943__$1)){
var c__4351__auto___30944 = cljs.core.chunk_first.call(null,seq__30921_30943__$1);
var G__30945 = cljs.core.chunk_rest.call(null,seq__30921_30943__$1);
var G__30946 = c__4351__auto___30944;
var G__30947 = cljs.core.count.call(null,c__4351__auto___30944);
var G__30948 = (0);
seq__30921_30933 = G__30945;
chunk__30922_30934 = G__30946;
count__30923_30935 = G__30947;
i__30924_30936 = G__30948;
continue;
} else {
var ref_30949 = cljs.core.first.call(null,seq__30921_30943__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_30949)){
} else {
cljs.core.remove_watch.call(null,ref_30949,key);
}


var G__30950 = cljs.core.next.call(null,seq__30921_30943__$1);
var G__30951 = null;
var G__30952 = (0);
var G__30953 = (0);
seq__30921_30933 = G__30950;
chunk__30922_30934 = G__30951;
count__30923_30935 = G__30952;
i__30924_30936 = G__30953;
continue;
}
} else {
}
}
break;
}

var seq__30925_30954 = cljs.core.seq.call(null,new_reactions);
var chunk__30926_30955 = null;
var count__30927_30956 = (0);
var i__30928_30957 = (0);
while(true){
if((i__30928_30957 < count__30927_30956)){
var ref_30958 = cljs.core._nth.call(null,chunk__30926_30955,i__30928_30957);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_30958)){
} else {
cljs.core.add_watch.call(null,ref_30958,key,((function (seq__30925_30954,chunk__30926_30955,count__30927_30956,i__30928_30957,ref_30958,comp,old_reactions,vec__30918,dom,next_state,new_reactions,key,_STAR_reactions_STAR_30917){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__30925_30954,chunk__30926_30955,count__30927_30956,i__30928_30957,ref_30958,comp,old_reactions,vec__30918,dom,next_state,new_reactions,key,_STAR_reactions_STAR_30917))
);
}


var G__30959 = seq__30925_30954;
var G__30960 = chunk__30926_30955;
var G__30961 = count__30927_30956;
var G__30962 = (i__30928_30957 + (1));
seq__30925_30954 = G__30959;
chunk__30926_30955 = G__30960;
count__30927_30956 = G__30961;
i__30928_30957 = G__30962;
continue;
} else {
var temp__5457__auto___30963 = cljs.core.seq.call(null,seq__30925_30954);
if(temp__5457__auto___30963){
var seq__30925_30964__$1 = temp__5457__auto___30963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30925_30964__$1)){
var c__4351__auto___30965 = cljs.core.chunk_first.call(null,seq__30925_30964__$1);
var G__30966 = cljs.core.chunk_rest.call(null,seq__30925_30964__$1);
var G__30967 = c__4351__auto___30965;
var G__30968 = cljs.core.count.call(null,c__4351__auto___30965);
var G__30969 = (0);
seq__30925_30954 = G__30966;
chunk__30926_30955 = G__30967;
count__30927_30956 = G__30968;
i__30928_30957 = G__30969;
continue;
} else {
var ref_30970 = cljs.core.first.call(null,seq__30925_30964__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_30970)){
} else {
cljs.core.add_watch.call(null,ref_30970,key,((function (seq__30925_30954,chunk__30926_30955,count__30927_30956,i__30928_30957,ref_30970,seq__30925_30964__$1,temp__5457__auto___30963,comp,old_reactions,vec__30918,dom,next_state,new_reactions,key,_STAR_reactions_STAR_30917){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__30925_30954,chunk__30926_30955,count__30927_30956,i__30928_30957,ref_30970,seq__30925_30964__$1,temp__5457__auto___30963,comp,old_reactions,vec__30918,dom,next_state,new_reactions,key,_STAR_reactions_STAR_30917))
);
}


var G__30971 = cljs.core.next.call(null,seq__30925_30964__$1);
var G__30972 = null;
var G__30973 = (0);
var G__30974 = (0);
seq__30925_30954 = G__30971;
chunk__30926_30955 = G__30972;
count__30927_30956 = G__30973;
i__30928_30957 = G__30974;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_30917;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_30975 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__30929_30976 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__30930_30977 = null;
var count__30931_30978 = (0);
var i__30932_30979 = (0);
while(true){
if((i__30932_30979 < count__30931_30978)){
var ref_30980 = cljs.core._nth.call(null,chunk__30930_30977,i__30932_30979);
cljs.core.remove_watch.call(null,ref_30980,key_30975);


var G__30981 = seq__30929_30976;
var G__30982 = chunk__30930_30977;
var G__30983 = count__30931_30978;
var G__30984 = (i__30932_30979 + (1));
seq__30929_30976 = G__30981;
chunk__30930_30977 = G__30982;
count__30931_30978 = G__30983;
i__30932_30979 = G__30984;
continue;
} else {
var temp__5457__auto___30985 = cljs.core.seq.call(null,seq__30929_30976);
if(temp__5457__auto___30985){
var seq__30929_30986__$1 = temp__5457__auto___30985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30929_30986__$1)){
var c__4351__auto___30987 = cljs.core.chunk_first.call(null,seq__30929_30986__$1);
var G__30988 = cljs.core.chunk_rest.call(null,seq__30929_30986__$1);
var G__30989 = c__4351__auto___30987;
var G__30990 = cljs.core.count.call(null,c__4351__auto___30987);
var G__30991 = (0);
seq__30929_30976 = G__30988;
chunk__30930_30977 = G__30989;
count__30931_30978 = G__30990;
i__30932_30979 = G__30991;
continue;
} else {
var ref_30992 = cljs.core.first.call(null,seq__30929_30986__$1);
cljs.core.remove_watch.call(null,ref_30992,key_30975);


var G__30993 = cljs.core.next.call(null,seq__30929_30986__$1);
var G__30994 = null;
var G__30995 = (0);
var G__30996 = (0);
seq__30929_30976 = G__30993;
chunk__30930_30977 = G__30994;
count__30931_30978 = G__30995;
i__30932_30979 = G__30996;
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
var len__4531__auto___31003 = arguments.length;
var i__4532__auto___31004 = (0);
while(true){
if((i__4532__auto___31004 < len__4531__auto___31003)){
args__4534__auto__.push((arguments[i__4532__auto___31004]));

var G__31005 = (i__4532__auto___31004 + (1));
i__4532__auto___31004 = G__31005;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__31000){
var map__31001 = p__31000;
var map__31001__$1 = ((((!((map__31001 == null)))?(((((map__31001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var options = map__31001__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq30997){
var G__30998 = cljs.core.first.call(null,seq30997);
var seq30997__$1 = cljs.core.next.call(null,seq30997);
var G__30999 = cljs.core.first.call(null,seq30997__$1);
var seq30997__$2 = cljs.core.next.call(null,seq30997__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30998,G__30999,seq30997__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31009 = arguments.length;
var i__4532__auto___31010 = (0);
while(true){
if((i__4532__auto___31010 < len__4531__auto___31009)){
args__4534__auto__.push((arguments[i__4532__auto___31010]));

var G__31011 = (i__4532__auto___31010 + (1));
i__4532__auto___31010 = G__31011;
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
rum.core.cursor.cljs$lang$applyTo = (function (seq31006){
var G__31007 = cljs.core.first.call(null,seq31006);
var seq31006__$1 = cljs.core.next.call(null,seq31006);
var G__31008 = cljs.core.first.call(null,seq31006__$1);
var seq31006__$2 = cljs.core.next.call(null,seq31006__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31007,G__31008,seq31006__$2);
});


//# sourceMappingURL=core.js.map
