// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.server_communication');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('ajax.core');
goog.require('app.state');
goog.require('app.utils.jscript');
goog.require('cljs.pprint');
app.server_communication.generic_error_handler = (function app$server_communication$generic_error_handler(x){
return console.log(["ERROR in ajax to server: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
});
app.server_communication.post = (function app$server_communication$post(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29762 = arguments.length;
var i__4532__auto___29763 = (0);
while(true){
if((i__4532__auto___29763 < len__4531__auto___29762)){
args__4534__auto__.push((arguments[i__4532__auto___29763]));

var G__29764 = (i__4532__auto___29763 + (1));
i__4532__auto___29763 = G__29764;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic = (function (path,body,handler,p__29758){
var vec__29759 = p__29758;
var error_handler = cljs.core.nth.call(null,vec__29759,(0),null);
return ajax.core.POST.call(null,path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,body),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain; charset=UTF-8"], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__29759,error_handler){
return (function (ret){
return handler.call(null,ret);
});})(vec__29759,error_handler))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){var or__3949__auto__ = error_handler;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return app.server_communication.generic_error_handler;
}
})()], null));
});

app.server_communication.post.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
app.server_communication.post.cljs$lang$applyTo = (function (seq29754){
var G__29755 = cljs.core.first.call(null,seq29754);
var seq29754__$1 = cljs.core.next.call(null,seq29754);
var G__29756 = cljs.core.first.call(null,seq29754__$1);
var seq29754__$2 = cljs.core.next.call(null,seq29754__$1);
var G__29757 = cljs.core.first.call(null,seq29754__$2);
var seq29754__$3 = cljs.core.next.call(null,seq29754__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29755,G__29756,G__29757,seq29754__$3);
});

app.server_communication.save_game = (function app$server_communication$save_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29773 = arguments.length;
var i__4532__auto___29774 = (0);
while(true){
if((i__4532__auto___29774 < len__4531__auto___29773)){
args__4534__auto__.push((arguments[i__4532__auto___29774]));

var G__29775 = (i__4532__auto___29774 + (1));
i__4532__auto___29774 = G__29775;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,name,handler,p__29769){
var vec__29770 = p__29769;
var error_handler = cljs.core.nth.call(null,vec__29770,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
app.server_communication.save_game.cljs$lang$applyTo = (function (seq29765){
var G__29766 = cljs.core.first.call(null,seq29765);
var seq29765__$1 = cljs.core.next.call(null,seq29765);
var G__29767 = cljs.core.first.call(null,seq29765__$1);
var seq29765__$2 = cljs.core.next.call(null,seq29765__$1);
var G__29768 = cljs.core.first.call(null,seq29765__$2);
var seq29765__$3 = cljs.core.next.call(null,seq29765__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29766,G__29767,G__29768,seq29765__$3);
});

app.server_communication.save_game_as = (function app$server_communication$save_game_as(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29783 = arguments.length;
var i__4532__auto___29784 = (0);
while(true){
if((i__4532__auto___29784 < len__4531__auto___29783)){
args__4534__auto__.push((arguments[i__4532__auto___29784]));

var G__29785 = (i__4532__auto___29784 + (1));
i__4532__auto___29784 = G__29785;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic = (function (name,handler,p__29779){
var vec__29780 = p__29779;
var error_handler = cljs.core.nth.call(null,vec__29780,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game_as.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.save_game_as.cljs$lang$applyTo = (function (seq29776){
var G__29777 = cljs.core.first.call(null,seq29776);
var seq29776__$1 = cljs.core.next.call(null,seq29776);
var G__29778 = cljs.core.first.call(null,seq29776__$1);
var seq29776__$2 = cljs.core.next.call(null,seq29776__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29777,G__29778,seq29776__$2);
});

app.server_communication.list_games = (function app$server_communication$list_games(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29792 = arguments.length;
var i__4532__auto___29793 = (0);
while(true){
if((i__4532__auto___29793 < len__4531__auto___29792)){
args__4534__auto__.push((arguments[i__4532__auto___29793]));

var G__29794 = (i__4532__auto___29793 + (1));
i__4532__auto___29793 = G__29794;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__29788){
var vec__29789 = p__29788;
var error_handler = cljs.core.nth.call(null,vec__29789,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"list-games","list-games",-1662727466)], null),((function (vec__29789,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__29789,error_handler))
,error_handler);
});

app.server_communication.list_games.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
app.server_communication.list_games.cljs$lang$applyTo = (function (seq29786){
var G__29787 = cljs.core.first.call(null,seq29786);
var seq29786__$1 = cljs.core.next.call(null,seq29786);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29787,seq29786__$1);
});

app.server_communication.load_game = (function app$server_communication$load_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29802 = arguments.length;
var i__4532__auto___29803 = (0);
while(true){
if((i__4532__auto___29803 < len__4531__auto___29802)){
args__4534__auto__.push((arguments[i__4532__auto___29803]));

var G__29804 = (i__4532__auto___29803 + (1));
i__4532__auto___29803 = G__29804;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,handler,p__29798){
var vec__29799 = p__29798;
var error_handler = cljs.core.nth.call(null,vec__29799,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"load-game","load-game",-2115278353),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),((function (vec__29799,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__29799,error_handler))
,error_handler);
});

app.server_communication.load_game.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.load_game.cljs$lang$applyTo = (function (seq29795){
var G__29796 = cljs.core.first.call(null,seq29795);
var seq29795__$1 = cljs.core.next.call(null,seq29795);
var G__29797 = cljs.core.first.call(null,seq29795__$1);
var seq29795__$2 = cljs.core.next.call(null,seq29795__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29796,G__29797,seq29795__$2);
});


//# sourceMappingURL=server_communication.js.map
