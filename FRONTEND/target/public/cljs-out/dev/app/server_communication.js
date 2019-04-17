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
var len__4531__auto___65673 = arguments.length;
var i__4532__auto___65674 = (0);
while(true){
if((i__4532__auto___65674 < len__4531__auto___65673)){
args__4534__auto__.push((arguments[i__4532__auto___65674]));

var G__65675 = (i__4532__auto___65674 + (1));
i__4532__auto___65674 = G__65675;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic = (function (path,body,handler,p__65669){
var vec__65670 = p__65669;
var error_handler = cljs.core.nth.call(null,vec__65670,(0),null);
return ajax.core.POST.call(null,path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,body),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain; charset=UTF-8"], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__65670,error_handler){
return (function (ret){
return handler.call(null,ret);
});})(vec__65670,error_handler))
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
app.server_communication.post.cljs$lang$applyTo = (function (seq65665){
var G__65666 = cljs.core.first.call(null,seq65665);
var seq65665__$1 = cljs.core.next.call(null,seq65665);
var G__65667 = cljs.core.first.call(null,seq65665__$1);
var seq65665__$2 = cljs.core.next.call(null,seq65665__$1);
var G__65668 = cljs.core.first.call(null,seq65665__$2);
var seq65665__$3 = cljs.core.next.call(null,seq65665__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65666,G__65667,G__65668,seq65665__$3);
});

app.server_communication.save_game = (function app$server_communication$save_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___65684 = arguments.length;
var i__4532__auto___65685 = (0);
while(true){
if((i__4532__auto___65685 < len__4531__auto___65684)){
args__4534__auto__.push((arguments[i__4532__auto___65685]));

var G__65686 = (i__4532__auto___65685 + (1));
i__4532__auto___65685 = G__65686;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,name,handler,p__65680){
var vec__65681 = p__65680;
var error_handler = cljs.core.nth.call(null,vec__65681,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
app.server_communication.save_game.cljs$lang$applyTo = (function (seq65676){
var G__65677 = cljs.core.first.call(null,seq65676);
var seq65676__$1 = cljs.core.next.call(null,seq65676);
var G__65678 = cljs.core.first.call(null,seq65676__$1);
var seq65676__$2 = cljs.core.next.call(null,seq65676__$1);
var G__65679 = cljs.core.first.call(null,seq65676__$2);
var seq65676__$3 = cljs.core.next.call(null,seq65676__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65677,G__65678,G__65679,seq65676__$3);
});

app.server_communication.save_game_as = (function app$server_communication$save_game_as(var_args){
var args__4534__auto__ = [];
var len__4531__auto___65694 = arguments.length;
var i__4532__auto___65695 = (0);
while(true){
if((i__4532__auto___65695 < len__4531__auto___65694)){
args__4534__auto__.push((arguments[i__4532__auto___65695]));

var G__65696 = (i__4532__auto___65695 + (1));
i__4532__auto___65695 = G__65696;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic = (function (name,handler,p__65690){
var vec__65691 = p__65690;
var error_handler = cljs.core.nth.call(null,vec__65691,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game_as.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.save_game_as.cljs$lang$applyTo = (function (seq65687){
var G__65688 = cljs.core.first.call(null,seq65687);
var seq65687__$1 = cljs.core.next.call(null,seq65687);
var G__65689 = cljs.core.first.call(null,seq65687__$1);
var seq65687__$2 = cljs.core.next.call(null,seq65687__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65688,G__65689,seq65687__$2);
});

app.server_communication.list_games = (function app$server_communication$list_games(var_args){
var args__4534__auto__ = [];
var len__4531__auto___65703 = arguments.length;
var i__4532__auto___65704 = (0);
while(true){
if((i__4532__auto___65704 < len__4531__auto___65703)){
args__4534__auto__.push((arguments[i__4532__auto___65704]));

var G__65705 = (i__4532__auto___65704 + (1));
i__4532__auto___65704 = G__65705;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__65699){
var vec__65700 = p__65699;
var error_handler = cljs.core.nth.call(null,vec__65700,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"list-games","list-games",-1662727466)], null),((function (vec__65700,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__65700,error_handler))
,error_handler);
});

app.server_communication.list_games.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
app.server_communication.list_games.cljs$lang$applyTo = (function (seq65697){
var G__65698 = cljs.core.first.call(null,seq65697);
var seq65697__$1 = cljs.core.next.call(null,seq65697);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65698,seq65697__$1);
});

app.server_communication.load_game = (function app$server_communication$load_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___65713 = arguments.length;
var i__4532__auto___65714 = (0);
while(true){
if((i__4532__auto___65714 < len__4531__auto___65713)){
args__4534__auto__.push((arguments[i__4532__auto___65714]));

var G__65715 = (i__4532__auto___65714 + (1));
i__4532__auto___65714 = G__65715;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,handler,p__65709){
var vec__65710 = p__65709;
var error_handler = cljs.core.nth.call(null,vec__65710,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"load-game","load-game",-2115278353),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),((function (vec__65710,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__65710,error_handler))
,error_handler);
});

app.server_communication.load_game.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.load_game.cljs$lang$applyTo = (function (seq65706){
var G__65707 = cljs.core.first.call(null,seq65706);
var seq65706__$1 = cljs.core.next.call(null,seq65706);
var G__65708 = cljs.core.first.call(null,seq65706__$1);
var seq65706__$2 = cljs.core.next.call(null,seq65706__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65707,G__65708,seq65706__$2);
});


//# sourceMappingURL=server_communication.js.map
