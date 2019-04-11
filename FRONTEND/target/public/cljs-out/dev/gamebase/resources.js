// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.resources');
goog.require('cljs.core');
goog.require('gamebase.tmx');
goog.require('clojure.string');
goog.require('clojure.data.xml');
gamebase.resources.PREFIX = "";
gamebase.resources.on_all_loaded = cljs.core.atom.call(null,(function (){
return null;
}));
gamebase.resources.set_on_all_loaded = (function gamebase$resources$set_on_all_loaded(f){
cljs.core.reset_BANG_.call(null,gamebase.resources.on_all_loaded,f);

if(cljs.core.truth_(gamebase.resources.all_resources_loaded_QMARK_.call(null))){
return f.call(null);
} else {
return null;
}
});
if((typeof gamebase !== 'undefined') && (typeof gamebase.resources !== 'undefined') && (typeof gamebase.resources.resources !== 'undefined')){
} else {
gamebase.resources.resources = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
gamebase.resources.on_change = cljs.core.atom.call(null,(function (){
return null;
}));
gamebase.resources.file_type = (function gamebase$resources$file_type(fname){
if(cljs.core.truth_(fname.endsWith(".png"))){
return new cljs.core.Keyword(null,"img","img",1442687358);
} else {
if(cljs.core.truth_(fname.endsWith(".tmx"))){
return new cljs.core.Keyword(null,"tmx","tmx",-940243959);
} else {
return null;

}
}
});
if((typeof gamebase !== 'undefined') && (typeof gamebase.resources !== 'undefined') && (typeof gamebase.resources.start_loading !== 'undefined')){
} else {
gamebase.resources.start_loading = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.resources","start-loading"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (fname,callback){
return gamebase.resources.file_type.call(null,fname);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,gamebase.resources.start_loading,new cljs.core.Keyword(null,"img","img",1442687358),(function (fname,callback){
return loadImage([cljs.core.str.cljs$core$IFn$_invoke$arity$1(gamebase.resources.PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),callback);
}));
cljs.core._add_method.call(null,gamebase.resources.start_loading,new cljs.core.Keyword(null,"tmx","tmx",-940243959),(function (fname,callback){
return loadStrings([cljs.core.str.cljs$core$IFn$_invoke$arity$1(gamebase.resources.PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),callback);
}));
if((typeof gamebase !== 'undefined') && (typeof gamebase.resources !== 'undefined') && (typeof gamebase.resources.parse_and_store !== 'undefined')){
} else {
gamebase.resources.parse_and_store = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamebase.resources","parse-and-store"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function() { 
var G__20221__delegate = function (fname,args){
return gamebase.resources.file_type.call(null,fname);
};
var G__20221 = function (fname,var_args){
var args = null;
if (arguments.length > 1) {
var G__20222__i = 0, G__20222__a = new Array(arguments.length -  1);
while (G__20222__i < G__20222__a.length) {G__20222__a[G__20222__i] = arguments[G__20222__i + 1]; ++G__20222__i;}
  args = new cljs.core.IndexedSeq(G__20222__a,0,null);
} 
return G__20221__delegate.call(this,fname,args);};
G__20221.cljs$lang$maxFixedArity = 1;
G__20221.cljs$lang$applyTo = (function (arglist__20223){
var fname = cljs.core.first(arglist__20223);
var args = cljs.core.rest(arglist__20223);
return G__20221__delegate(fname,args);
});
G__20221.cljs$core$IFn$_invoke$arity$variadic = G__20221__delegate;
return G__20221;
})()
;})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,gamebase.resources.parse_and_store,new cljs.core.Keyword(null,"img","img",1442687358),(function (fname,img){
cljs.core.swap_BANG_.call(null,gamebase.resources.resources,cljs.core.assoc,fname,img);

if(cljs.core.truth_((function (){var and__3938__auto__ = gamebase.resources.all_resources_loaded_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref.call(null,gamebase.resources.on_all_loaded);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.deref.call(null,gamebase.resources.on_all_loaded).call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,gamebase.resources.parse_and_store,new cljs.core.Keyword(null,"tmx","tmx",-940243959),(function (fname,lines){
var text_20224 = clojure.string.join.call(null,"\n",lines);
cljs.core.swap_BANG_.call(null,gamebase.resources.resources,cljs.core.assoc,fname,gamebase.tmx.parse_tmx.call(null,clojure.data.xml.parse_str.call(null,text_20224)));

if(cljs.core.truth_(gamebase.resources.all_resources_loaded_QMARK_.call(null))){
return cljs.core.deref.call(null,gamebase.resources.on_all_loaded).call(null);
} else {
return null;
}
}));
gamebase.resources.add_resource = (function gamebase$resources$add_resource(fname){
return gamebase.resources.start_loading.call(null,fname,(function() { 
var G__20225__delegate = function (args){
return cljs.core.apply.call(null,gamebase.resources.parse_and_store,fname,args);
};
var G__20225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20226__i = 0, G__20226__a = new Array(arguments.length -  0);
while (G__20226__i < G__20226__a.length) {G__20226__a[G__20226__i] = arguments[G__20226__i + 0]; ++G__20226__i;}
  args = new cljs.core.IndexedSeq(G__20226__a,0,null);
} 
return G__20225__delegate.call(this,args);};
G__20225.cljs$lang$maxFixedArity = 0;
G__20225.cljs$lang$applyTo = (function (arglist__20227){
var args = cljs.core.seq(arglist__20227);
return G__20225__delegate(args);
});
G__20225.cljs$core$IFn$_invoke$arity$variadic = G__20225__delegate;
return G__20225;
})()
);
});
gamebase.resources.remove_resource = (function gamebase$resources$remove_resource(fname){
return cljs.core.swap_BANG_.call(null,gamebase.resources.resources,cljs.core.dissoc,fname);
});
gamebase.resources.all_resource_names = (function gamebase$resources$all_resource_names(){
return cljs.core.keys.call(null,cljs.core.deref.call(null,gamebase.resources.resources));
});
gamebase.resources.resource_loaded_QMARK_ = (function gamebase$resources$resource_loaded_QMARK_(fname){
return !((cljs.core.deref.call(null,gamebase.resources.resources).call(null,fname) == null));
});
gamebase.resources.all_resources_loaded_QMARK_ = (function gamebase$resources$all_resources_loaded_QMARK_(){
return cljs.core.every_QMARK_.call(null,gamebase.resources.resource_loaded_QMARK_,gamebase.resources.all_resource_names.call(null));
});
gamebase.resources.get_resource = (function gamebase$resources$get_resource(fname){
return cljs.core.deref.call(null,gamebase.resources.resources).call(null,fname);
});

//# sourceMappingURL=resources.js.map
