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
var len__4531__auto___45792 = arguments.length;
var i__4532__auto___45793 = (0);
while(true){
if((i__4532__auto___45793 < len__4531__auto___45792)){
args__4534__auto__.push((arguments[i__4532__auto___45793]));

var G__45794 = (i__4532__auto___45793 + (1));
i__4532__auto___45793 = G__45794;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic = (function (path,body,handler,p__45788){
var vec__45789 = p__45788;
var error_handler = cljs.core.nth.call(null,vec__45789,(0),null);
return ajax.core.POST.call(null,path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,body),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain; charset=UTF-8"], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__45789,error_handler){
return (function (ret){
return handler.call(null,ret);
});})(vec__45789,error_handler))
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
app.server_communication.post.cljs$lang$applyTo = (function (seq45784){
var G__45785 = cljs.core.first.call(null,seq45784);
var seq45784__$1 = cljs.core.next.call(null,seq45784);
var G__45786 = cljs.core.first.call(null,seq45784__$1);
var seq45784__$2 = cljs.core.next.call(null,seq45784__$1);
var G__45787 = cljs.core.first.call(null,seq45784__$2);
var seq45784__$3 = cljs.core.next.call(null,seq45784__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45785,G__45786,G__45787,seq45784__$3);
});

app.server_communication.save_game = (function app$server_communication$save_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___45803 = arguments.length;
var i__4532__auto___45804 = (0);
while(true){
if((i__4532__auto___45804 < len__4531__auto___45803)){
args__4534__auto__.push((arguments[i__4532__auto___45804]));

var G__45805 = (i__4532__auto___45804 + (1));
i__4532__auto___45804 = G__45805;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,name,handler,p__45799){
var vec__45800 = p__45799;
var error_handler = cljs.core.nth.call(null,vec__45800,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
app.server_communication.save_game.cljs$lang$applyTo = (function (seq45795){
var G__45796 = cljs.core.first.call(null,seq45795);
var seq45795__$1 = cljs.core.next.call(null,seq45795);
var G__45797 = cljs.core.first.call(null,seq45795__$1);
var seq45795__$2 = cljs.core.next.call(null,seq45795__$1);
var G__45798 = cljs.core.first.call(null,seq45795__$2);
var seq45795__$3 = cljs.core.next.call(null,seq45795__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45796,G__45797,G__45798,seq45795__$3);
});

app.server_communication.save_game_as = (function app$server_communication$save_game_as(var_args){
var args__4534__auto__ = [];
var len__4531__auto___45813 = arguments.length;
var i__4532__auto___45814 = (0);
while(true){
if((i__4532__auto___45814 < len__4531__auto___45813)){
args__4534__auto__.push((arguments[i__4532__auto___45814]));

var G__45815 = (i__4532__auto___45814 + (1));
i__4532__auto___45814 = G__45815;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic = (function (name,handler,p__45809){
var vec__45810 = p__45809;
var error_handler = cljs.core.nth.call(null,vec__45810,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game_as.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.save_game_as.cljs$lang$applyTo = (function (seq45806){
var G__45807 = cljs.core.first.call(null,seq45806);
var seq45806__$1 = cljs.core.next.call(null,seq45806);
var G__45808 = cljs.core.first.call(null,seq45806__$1);
var seq45806__$2 = cljs.core.next.call(null,seq45806__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45807,G__45808,seq45806__$2);
});

app.server_communication.list_games = (function app$server_communication$list_games(var_args){
var args__4534__auto__ = [];
var len__4531__auto___45822 = arguments.length;
var i__4532__auto___45823 = (0);
while(true){
if((i__4532__auto___45823 < len__4531__auto___45822)){
args__4534__auto__.push((arguments[i__4532__auto___45823]));

var G__45824 = (i__4532__auto___45823 + (1));
i__4532__auto___45823 = G__45824;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__45818){
var vec__45819 = p__45818;
var error_handler = cljs.core.nth.call(null,vec__45819,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"list-games","list-games",-1662727466)], null),((function (vec__45819,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__45819,error_handler))
,error_handler);
});

app.server_communication.list_games.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
app.server_communication.list_games.cljs$lang$applyTo = (function (seq45816){
var G__45817 = cljs.core.first.call(null,seq45816);
var seq45816__$1 = cljs.core.next.call(null,seq45816);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45817,seq45816__$1);
});

app.server_communication.load_game = (function app$server_communication$load_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___45832 = arguments.length;
var i__4532__auto___45833 = (0);
while(true){
if((i__4532__auto___45833 < len__4531__auto___45832)){
args__4534__auto__.push((arguments[i__4532__auto___45833]));

var G__45834 = (i__4532__auto___45833 + (1));
i__4532__auto___45833 = G__45834;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,handler,p__45828){
var vec__45829 = p__45828;
var error_handler = cljs.core.nth.call(null,vec__45829,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"load-game","load-game",-2115278353),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),((function (vec__45829,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__45829,error_handler))
,error_handler);
});

app.server_communication.load_game.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.load_game.cljs$lang$applyTo = (function (seq45825){
var G__45826 = cljs.core.first.call(null,seq45825);
var seq45825__$1 = cljs.core.next.call(null,seq45825);
var G__45827 = cljs.core.first.call(null,seq45825__$1);
var seq45825__$2 = cljs.core.next.call(null,seq45825__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45826,G__45827,seq45825__$2);
});


//# sourceMappingURL=server_communication.js.map
