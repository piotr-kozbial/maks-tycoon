// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__26389_SHARP_){
var k = f.call(null,p1__26389_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26390){
var vec__26391 = p__26390;
var k = cljs.core.nth.call(null,vec__26391,(0),null);
var v = cljs.core.nth.call(null,vec__26391,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26395 = arguments.length;
var i__4532__auto___26396 = (0);
while(true){
if((i__4532__auto___26396 < len__4531__auto___26395)){
args__4534__auto__.push((arguments[i__4532__auto___26396]));

var G__26397 = (i__4532__auto___26396 + (1));
i__4532__auto___26396 = G__26397;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq26394){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26394));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__26400){
var map__26401 = p__26400;
var map__26401__$1 = ((((!((map__26401 == null)))?(((((map__26401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26401):map__26401);
var message = cljs.core.get.call(null,map__26401__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__26401__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__26401,map__26401__$1,message,column){
return (function (p1__26399_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26399_SHARP_], null)));
});})(map__26401,map__26401__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__26401,map__26401__$1,message,column){
return (function (p1__26398_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__26398_SHARP_);
});})(map__26401,map__26401__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__26404){
var map__26405 = p__26404;
var map__26405__$1 = ((((!((map__26405 == null)))?(((((map__26405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26405):map__26405);
var message_data = map__26405__$1;
var message = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__26407 = file_excerpt;
var map__26407__$1 = ((((!((map__26407 == null)))?(((((map__26407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26407):map__26407);
var start_line = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__26407,map__26407__$1,start_line,path,excerpt,map__26405,map__26405__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__26407,map__26407__$1,start_line,path,excerpt,map__26405,map__26405__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__26408 = cljs.core.split_with.call(null,((function (map__26407,map__26407__$1,start_line,path,excerpt,lines,map__26405,map__26405__$1,message_data,message,line,column,file_excerpt){
return (function (p1__26403_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__26403_SHARP_));
});})(map__26407,map__26407__$1,start_line,path,excerpt,lines,map__26405,map__26405__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__26408,(0),null);
var end = cljs.core.nth.call(null,vec__26408,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__26412){
var map__26413 = p__26412;
var map__26413__$1 = ((((!((map__26413 == null)))?(((((map__26413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26413):map__26413);
var file = cljs.core.get.call(null,map__26413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__26413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26413__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__26415 = "";
var G__26415__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26415),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__26415);
var G__26415__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26415__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__26415__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26415__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__26415__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_26461 = (new goog.debug.Console());
var G__26422_26462 = c_26461.getFormatter();
goog.object.set(G__26422_26462,"showAbsoluteTime",false);

goog.object.set(G__26422_26462,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_26461);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((((typeof document !== 'undefined')) && ((typeof document !== 'undefined') && (typeof document.body !== 'undefined'))))?document.body:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__26423 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__26423,"data",(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__26423;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_26463 = cljs.core.atom.call(null,(0));
var promise_chain_26464 = (new goog.Promise(((function (last_reload_timestamp_26463){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_26463))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_26463,promise_chain_26464){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3938__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_26463) < ts);
if(and__3938__auto__){
return ts;
} else {
return and__3938__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_26463,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_26464.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_26424 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_26424,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464){
return (function (){
var seq__26425 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__26426 = null;
var count__26427 = (0);
var i__26428 = (0);
while(true){
if((i__26428 < count__26427)){
var w = cljs.core._nth.call(null,chunk__26426,i__26428);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__26465 = seq__26425;
var G__26466 = chunk__26426;
var G__26467 = count__26427;
var G__26468 = (i__26428 + (1));
seq__26425 = G__26465;
chunk__26426 = G__26466;
count__26427 = G__26467;
i__26428 = G__26468;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26425);
if(temp__5457__auto__){
var seq__26425__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26425__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26425__$1);
var G__26469 = cljs.core.chunk_rest.call(null,seq__26425__$1);
var G__26470 = c__4351__auto__;
var G__26471 = cljs.core.count.call(null,c__4351__auto__);
var G__26472 = (0);
seq__26425 = G__26469;
chunk__26426 = G__26470;
count__26427 = G__26471;
i__26428 = G__26472;
continue;
} else {
var w = cljs.core.first.call(null,seq__26425__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__26473 = cljs.core.next.call(null,seq__26425__$1);
var G__26474 = null;
var G__26475 = (0);
var G__26476 = (0);
seq__26425 = G__26473;
chunk__26426 = G__26474;
count__26427 = G__26475;
i__26428 = G__26476;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_26424,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_26424;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_26464.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464){
return (function (){
var _STAR_inline_code_message_max_column_STAR_26429 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_26429;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464))
);
} else {
return promise_chain_26464.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26463,promise_chain_26464))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_26463,promise_chain_26464))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3938__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3938__auto____$1){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26477 = arguments.length;
var i__4532__auto___26478 = (0);
while(true){
if((i__4532__auto___26478 < len__4531__auto___26477)){
args__4534__auto__.push((arguments[i__4532__auto___26478]));

var G__26479 = (i__4532__auto___26478 + (1));
i__4532__auto___26478 = G__26479;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__26432){
var vec__26433 = p__26432;
var n = cljs.core.nth.call(null,vec__26433,(0),null);
var mdata = cljs.core.nth.call(null,vec__26433,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__26436 = cljs.core.seq.call(null,hooks);
var chunk__26437 = null;
var count__26438 = (0);
var i__26439 = (0);
while(true){
if((i__26439 < count__26438)){
var vec__26440 = cljs.core._nth.call(null,chunk__26437,i__26439);
var n = cljs.core.nth.call(null,vec__26440,(0),null);
var f = cljs.core.nth.call(null,vec__26440,(1),null);
var temp__5455__auto___26480 = cljs.core.reduce.call(null,((function (seq__26436,chunk__26437,count__26438,i__26439,vec__26440,n,f,hooks){
return (function (p1__26416_SHARP_,p2__26417_SHARP_){
if(cljs.core.truth_(p1__26416_SHARP_)){
return goog.object.get(p1__26416_SHARP_,p2__26417_SHARP_);
} else {
return null;
}
});})(seq__26436,chunk__26437,count__26438,i__26439,vec__26440,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___26480)){
var hook_26481 = temp__5455__auto___26480;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_26481,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__26482 = seq__26436;
var G__26483 = chunk__26437;
var G__26484 = count__26438;
var G__26485 = (i__26439 + (1));
seq__26436 = G__26482;
chunk__26437 = G__26483;
count__26438 = G__26484;
i__26439 = G__26485;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26436);
if(temp__5457__auto__){
var seq__26436__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26436__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26436__$1);
var G__26486 = cljs.core.chunk_rest.call(null,seq__26436__$1);
var G__26487 = c__4351__auto__;
var G__26488 = cljs.core.count.call(null,c__4351__auto__);
var G__26489 = (0);
seq__26436 = G__26486;
chunk__26437 = G__26487;
count__26438 = G__26488;
i__26439 = G__26489;
continue;
} else {
var vec__26443 = cljs.core.first.call(null,seq__26436__$1);
var n = cljs.core.nth.call(null,vec__26443,(0),null);
var f = cljs.core.nth.call(null,vec__26443,(1),null);
var temp__5455__auto___26490 = cljs.core.reduce.call(null,((function (seq__26436,chunk__26437,count__26438,i__26439,vec__26443,n,f,seq__26436__$1,temp__5457__auto__,hooks){
return (function (p1__26416_SHARP_,p2__26417_SHARP_){
if(cljs.core.truth_(p1__26416_SHARP_)){
return goog.object.get(p1__26416_SHARP_,p2__26417_SHARP_);
} else {
return null;
}
});})(seq__26436,chunk__26437,count__26438,i__26439,vec__26443,n,f,seq__26436__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___26490)){
var hook_26491 = temp__5455__auto___26490;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_26491,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__26492 = cljs.core.next.call(null,seq__26436__$1);
var G__26493 = null;
var G__26494 = (0);
var G__26495 = (0);
seq__26436 = G__26492;
chunk__26437 = G__26493;
count__26438 = G__26494;
i__26439 = G__26495;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq26430){
var G__26431 = cljs.core.first.call(null,seq26430);
var seq26430__$1 = cljs.core.next.call(null,seq26430);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26431,seq26430__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26446){
var vec__26447 = p__26446;
var k = cljs.core.nth.call(null,vec__26447,(0),null);
var v = cljs.core.nth.call(null,vec__26447,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__26418_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__26418_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__26418_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__26419_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__26419_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3938__auto__ = !(figwheel.core.load_warninged_code);
if(and__3938__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3938__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__26420_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__26420_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__26450_26496 = cljs.core.seq.call(null,to_reload);
var chunk__26451_26497 = null;
var count__26452_26498 = (0);
var i__26453_26499 = (0);
while(true){
if((i__26453_26499 < count__26452_26498)){
var ns_26500 = cljs.core._nth.call(null,chunk__26451_26497,i__26453_26499);
goog.require(cljs.core.name.call(null,ns_26500),true);


var G__26501 = seq__26450_26496;
var G__26502 = chunk__26451_26497;
var G__26503 = count__26452_26498;
var G__26504 = (i__26453_26499 + (1));
seq__26450_26496 = G__26501;
chunk__26451_26497 = G__26502;
count__26452_26498 = G__26503;
i__26453_26499 = G__26504;
continue;
} else {
var temp__5457__auto___26505 = cljs.core.seq.call(null,seq__26450_26496);
if(temp__5457__auto___26505){
var seq__26450_26506__$1 = temp__5457__auto___26505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26450_26506__$1)){
var c__4351__auto___26507 = cljs.core.chunk_first.call(null,seq__26450_26506__$1);
var G__26508 = cljs.core.chunk_rest.call(null,seq__26450_26506__$1);
var G__26509 = c__4351__auto___26507;
var G__26510 = cljs.core.count.call(null,c__4351__auto___26507);
var G__26511 = (0);
seq__26450_26496 = G__26508;
chunk__26451_26497 = G__26509;
count__26452_26498 = G__26510;
i__26453_26499 = G__26511;
continue;
} else {
var ns_26512 = cljs.core.first.call(null,seq__26450_26506__$1);
goog.require(cljs.core.name.call(null,ns_26512),true);


var G__26513 = cljs.core.next.call(null,seq__26450_26506__$1);
var G__26514 = null;
var G__26515 = (0);
var G__26516 = (0);
seq__26450_26496 = G__26513;
chunk__26451_26497 = G__26514;
count__26452_26498 = G__26515;
i__26453_26499 = G__26516;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_26517 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_26517);
} else {
setTimeout(after_reload_fn_26517,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__26454 = cljs.core.seq.call(null,warnings);
var chunk__26455 = null;
var count__26456 = (0);
var i__26457 = (0);
while(true){
if((i__26457 < count__26456)){
var warning = cljs.core._nth.call(null,chunk__26455,i__26457);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__26518 = seq__26454;
var G__26519 = chunk__26455;
var G__26520 = count__26456;
var G__26521 = (i__26457 + (1));
seq__26454 = G__26518;
chunk__26455 = G__26519;
count__26456 = G__26520;
i__26457 = G__26521;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26454);
if(temp__5457__auto__){
var seq__26454__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26454__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26454__$1);
var G__26522 = cljs.core.chunk_rest.call(null,seq__26454__$1);
var G__26523 = c__4351__auto__;
var G__26524 = cljs.core.count.call(null,c__4351__auto__);
var G__26525 = (0);
seq__26454 = G__26522;
chunk__26455 = G__26523;
count__26456 = G__26524;
i__26457 = G__26525;
continue;
} else {
var warning = cljs.core.first.call(null,seq__26454__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__26526 = cljs.core.next.call(null,seq__26454__$1);
var G__26527 = null;
var G__26528 = (0);
var G__26529 = (0);
seq__26454 = G__26526;
chunk__26455 = G__26527;
count__26456 = G__26528;
i__26457 = G__26529;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__26458){
var map__26459 = p__26458;
var map__26459__$1 = ((((!((map__26459 == null)))?(((((map__26459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26459):map__26459);
var exception_data = map__26459__$1;
var file = cljs.core.get.call(null,map__26459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__26459__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26459__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__26459,map__26459__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__26459,map__26459__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__26459,map__26459__$1,exception_data,file,type,message){
return (function (p1__26421_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__26421_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__26459,map__26459__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return message;
}
})())){
goog.log.info(figwheel.core.logger,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))));
} else {
}

if(cljs.core.truth_(file)){
return goog.log.info(figwheel.core.logger,["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
