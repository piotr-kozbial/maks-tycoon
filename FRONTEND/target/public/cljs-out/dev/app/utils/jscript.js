// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.utils.jscript');
goog.require('cljs.core');
goog.require('cljs.pprint');
app.utils.jscript.timestamp_str__GT_local_date_str = (function app$utils$jscript$timestamp_str__GT_local_date_str(s){
if(cljs.core.truth_((function (){var and__3938__auto__ = s;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,s,"");
} else {
return and__3938__auto__;
}
})())){
return (new Date(s)).toLocaleDateString();
} else {
return null;
}
});
app.utils.jscript.pr_json = (function app$utils$jscript$pr_json(v){
return JSON.stringify(cljs.core.clj__GT_js.call(null,v));
});
app.utils.jscript.pp = (function app$utils$jscript$pp(v){
var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29329_29331 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29330_29332 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29329_29331,_STAR_print_fn_STAR_29330_29332,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_29329_29331,_STAR_print_fn_STAR_29330_29332,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,v);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29330_29332;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29329_29331;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
});

//# sourceMappingURL=jscript.js.map
