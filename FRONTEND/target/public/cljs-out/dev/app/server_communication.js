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
var len__4531__auto___36713 = arguments.length;
var i__4532__auto___36714 = (0);
while(true){
if((i__4532__auto___36714 < len__4531__auto___36713)){
args__4534__auto__.push((arguments[i__4532__auto___36714]));

var G__36715 = (i__4532__auto___36714 + (1));
i__4532__auto___36714 = G__36715;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic = (function (path,body,handler,p__36709){
var vec__36710 = p__36709;
var error_handler = cljs.core.nth.call(null,vec__36710,(0),null);
return ajax.core.POST.call(null,path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,body),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain; charset=UTF-8"], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__36710,error_handler){
return (function (ret){
return handler.call(null,ret);
});})(vec__36710,error_handler))
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
app.server_communication.post.cljs$lang$applyTo = (function (seq36705){
var G__36706 = cljs.core.first.call(null,seq36705);
var seq36705__$1 = cljs.core.next.call(null,seq36705);
var G__36707 = cljs.core.first.call(null,seq36705__$1);
var seq36705__$2 = cljs.core.next.call(null,seq36705__$1);
var G__36708 = cljs.core.first.call(null,seq36705__$2);
var seq36705__$3 = cljs.core.next.call(null,seq36705__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36706,G__36707,G__36708,seq36705__$3);
});

app.server_communication.save_game = (function app$server_communication$save_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36724 = arguments.length;
var i__4532__auto___36725 = (0);
while(true){
if((i__4532__auto___36725 < len__4531__auto___36724)){
args__4534__auto__.push((arguments[i__4532__auto___36725]));

var G__36726 = (i__4532__auto___36725 + (1));
i__4532__auto___36725 = G__36726;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,name,handler,p__36720){
var vec__36721 = p__36720;
var error_handler = cljs.core.nth.call(null,vec__36721,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
app.server_communication.save_game.cljs$lang$applyTo = (function (seq36716){
var G__36717 = cljs.core.first.call(null,seq36716);
var seq36716__$1 = cljs.core.next.call(null,seq36716);
var G__36718 = cljs.core.first.call(null,seq36716__$1);
var seq36716__$2 = cljs.core.next.call(null,seq36716__$1);
var G__36719 = cljs.core.first.call(null,seq36716__$2);
var seq36716__$3 = cljs.core.next.call(null,seq36716__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36717,G__36718,G__36719,seq36716__$3);
});

app.server_communication.save_game_as = (function app$server_communication$save_game_as(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36734 = arguments.length;
var i__4532__auto___36735 = (0);
while(true){
if((i__4532__auto___36735 < len__4531__auto___36734)){
args__4534__auto__.push((arguments[i__4532__auto___36735]));

var G__36736 = (i__4532__auto___36735 + (1));
i__4532__auto___36735 = G__36736;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic = (function (name,handler,p__36730){
var vec__36731 = p__36730;
var error_handler = cljs.core.nth.call(null,vec__36731,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game_as.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.save_game_as.cljs$lang$applyTo = (function (seq36727){
var G__36728 = cljs.core.first.call(null,seq36727);
var seq36727__$1 = cljs.core.next.call(null,seq36727);
var G__36729 = cljs.core.first.call(null,seq36727__$1);
var seq36727__$2 = cljs.core.next.call(null,seq36727__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36728,G__36729,seq36727__$2);
});

app.server_communication.list_games = (function app$server_communication$list_games(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36743 = arguments.length;
var i__4532__auto___36744 = (0);
while(true){
if((i__4532__auto___36744 < len__4531__auto___36743)){
args__4534__auto__.push((arguments[i__4532__auto___36744]));

var G__36745 = (i__4532__auto___36744 + (1));
i__4532__auto___36744 = G__36745;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__36739){
var vec__36740 = p__36739;
var error_handler = cljs.core.nth.call(null,vec__36740,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"list-games","list-games",-1662727466)], null),((function (vec__36740,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__36740,error_handler))
,error_handler);
});

app.server_communication.list_games.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
app.server_communication.list_games.cljs$lang$applyTo = (function (seq36737){
var G__36738 = cljs.core.first.call(null,seq36737);
var seq36737__$1 = cljs.core.next.call(null,seq36737);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36738,seq36737__$1);
});

app.server_communication.load_game = (function app$server_communication$load_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36753 = arguments.length;
var i__4532__auto___36754 = (0);
while(true){
if((i__4532__auto___36754 < len__4531__auto___36753)){
args__4534__auto__.push((arguments[i__4532__auto___36754]));

var G__36755 = (i__4532__auto___36754 + (1));
i__4532__auto___36754 = G__36755;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,handler,p__36749){
var vec__36750 = p__36749;
var error_handler = cljs.core.nth.call(null,vec__36750,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"load-game","load-game",-2115278353),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),((function (vec__36750,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__36750,error_handler))
,error_handler);
});

app.server_communication.load_game.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.load_game.cljs$lang$applyTo = (function (seq36746){
var G__36747 = cljs.core.first.call(null,seq36746);
var seq36746__$1 = cljs.core.next.call(null,seq36746);
var G__36748 = cljs.core.first.call(null,seq36746__$1);
var seq36746__$2 = cljs.core.next.call(null,seq36746__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36747,G__36748,seq36746__$2);
});


//# sourceMappingURL=server_communication.js.map
