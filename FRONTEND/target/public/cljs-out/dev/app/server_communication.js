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
var len__4531__auto___22115 = arguments.length;
var i__4532__auto___22116 = (0);
while(true){
if((i__4532__auto___22116 < len__4531__auto___22115)){
args__4534__auto__.push((arguments[i__4532__auto___22116]));

var G__22117 = (i__4532__auto___22116 + (1));
i__4532__auto___22116 = G__22117;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.post.cljs$core$IFn$_invoke$arity$variadic = (function (path,body,handler,p__22111){
var vec__22112 = p__22111;
var error_handler = cljs.core.nth.call(null,vec__22112,(0),null);
return ajax.core.POST.call(null,path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,body),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain; charset=UTF-8"], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__22112,error_handler){
return (function (ret){
return handler.call(null,ret);
});})(vec__22112,error_handler))
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
app.server_communication.post.cljs$lang$applyTo = (function (seq22107){
var G__22108 = cljs.core.first.call(null,seq22107);
var seq22107__$1 = cljs.core.next.call(null,seq22107);
var G__22109 = cljs.core.first.call(null,seq22107__$1);
var seq22107__$2 = cljs.core.next.call(null,seq22107__$1);
var G__22110 = cljs.core.first.call(null,seq22107__$2);
var seq22107__$3 = cljs.core.next.call(null,seq22107__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22108,G__22109,G__22110,seq22107__$3);
});

app.server_communication.save_game = (function app$server_communication$save_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22126 = arguments.length;
var i__4532__auto___22127 = (0);
while(true){
if((i__4532__auto___22127 < len__4531__auto___22126)){
args__4534__auto__.push((arguments[i__4532__auto___22127]));

var G__22128 = (i__4532__auto___22127 + (1));
i__4532__auto___22127 = G__22128;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

app.server_communication.save_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,name,handler,p__22122){
var vec__22123 = p__22122;
var error_handler = cljs.core.nth.call(null,vec__22123,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
app.server_communication.save_game.cljs$lang$applyTo = (function (seq22118){
var G__22119 = cljs.core.first.call(null,seq22118);
var seq22118__$1 = cljs.core.next.call(null,seq22118);
var G__22120 = cljs.core.first.call(null,seq22118__$1);
var seq22118__$2 = cljs.core.next.call(null,seq22118__$1);
var G__22121 = cljs.core.first.call(null,seq22118__$2);
var seq22118__$3 = cljs.core.next.call(null,seq22118__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22119,G__22120,G__22121,seq22118__$3);
});

app.server_communication.save_game_as = (function app$server_communication$save_game_as(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22136 = arguments.length;
var i__4532__auto___22137 = (0);
while(true){
if((i__4532__auto___22137 < len__4531__auto___22136)){
args__4534__auto__.push((arguments[i__4532__auto___22137]));

var G__22138 = (i__4532__auto___22137 + (1));
i__4532__auto___22137 = G__22138;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.save_game_as.cljs$core$IFn$_invoke$arity$variadic = (function (name,handler,p__22132){
var vec__22133 = p__22132;
var error_handler = cljs.core.nth.call(null,vec__22133,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"save-game","save-game",-537196828),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,app.state.app_state)], null),handler,error_handler);
});

app.server_communication.save_game_as.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.save_game_as.cljs$lang$applyTo = (function (seq22129){
var G__22130 = cljs.core.first.call(null,seq22129);
var seq22129__$1 = cljs.core.next.call(null,seq22129);
var G__22131 = cljs.core.first.call(null,seq22129__$1);
var seq22129__$2 = cljs.core.next.call(null,seq22129__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22130,G__22131,seq22129__$2);
});

app.server_communication.list_games = (function app$server_communication$list_games(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22145 = arguments.length;
var i__4532__auto___22146 = (0);
while(true){
if((i__4532__auto___22146 < len__4531__auto___22145)){
args__4534__auto__.push((arguments[i__4532__auto___22146]));

var G__22147 = (i__4532__auto___22146 + (1));
i__4532__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

app.server_communication.list_games.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__22141){
var vec__22142 = p__22141;
var error_handler = cljs.core.nth.call(null,vec__22142,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"list-games","list-games",-1662727466)], null),((function (vec__22142,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__22142,error_handler))
,error_handler);
});

app.server_communication.list_games.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
app.server_communication.list_games.cljs$lang$applyTo = (function (seq22139){
var G__22140 = cljs.core.first.call(null,seq22139);
var seq22139__$1 = cljs.core.next.call(null,seq22139);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22140,seq22139__$1);
});

app.server_communication.load_game = (function app$server_communication$load_game(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22155 = arguments.length;
var i__4532__auto___22156 = (0);
while(true){
if((i__4532__auto___22156 < len__4531__auto___22155)){
args__4534__auto__.push((arguments[i__4532__auto___22156]));

var G__22157 = (i__4532__auto___22156 + (1));
i__4532__auto___22156 = G__22157;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

app.server_communication.load_game.cljs$core$IFn$_invoke$arity$variadic = (function (id,handler,p__22151){
var vec__22152 = p__22151;
var error_handler = cljs.core.nth.call(null,vec__22152,(0),null);
return app.server_communication.post.call(null,"/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"load-game","load-game",-2115278353),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),((function (vec__22152,error_handler){
return (function (ret){
return handler.call(null,cljs.reader.read_string.call(null,ret));
});})(vec__22152,error_handler))
,error_handler);
});

app.server_communication.load_game.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.server_communication.load_game.cljs$lang$applyTo = (function (seq22148){
var G__22149 = cljs.core.first.call(null,seq22148);
var seq22148__$1 = cljs.core.next.call(null,seq22148);
var G__22150 = cljs.core.first.call(null,seq22148__$1);
var seq22148__$2 = cljs.core.next.call(null,seq22148__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22149,G__22150,seq22148__$2);
});


//# sourceMappingURL=server_communication.js.map
