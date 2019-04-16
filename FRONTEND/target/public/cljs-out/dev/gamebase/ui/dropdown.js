// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.ui.dropdown');
goog.require('cljs.core');
gamebase.ui.dropdown.mk_dropdown = (function gamebase$ui$dropdown$mk_dropdown(p__24585){
var map__24586 = p__24585;
var map__24586__$1 = ((((!((map__24586 == null)))?(((((map__24586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24586):map__24586);
var data = map__24586__$1;
var label = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var open_QMARK_ = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var items = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var selected_id = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044));
var callbacks = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
var selected_name = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (p1__24584_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__24584_SHARP_),selected_id);
});})(map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
,items)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"1.7em"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),label," "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"gamebase_dropdown",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (_){
if(cljs.core.truth_(open_QMARK_)){
return (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(callbacks);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (){
return cljs.core.List.EMPTY;
});
;})(or__3949__auto__,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
}
})().call(null);
} else {
return (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(callbacks);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (){
return cljs.core.List.EMPTY;
});
;})(or__3949__auto__,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
}
})().call(null);
}
});})(selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
], null),(cljs.core.truth_(selected_name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gamebase_dropdown_selected"], null),selected_name], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gamebase_dropdown_placeholder"], null),"(select)"], null))], null),(cljs.core.truth_(open_QMARK_)?cljs.core.map.call(null,((function (selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (p__24588){
var vec__24589 = p__24588;
var id = cljs.core.nth.call(null,vec__24589,(0),null);
var text = cljs.core.nth.call(null,vec__24589,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"gamebase_dropdown_item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__24589,id,text,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (_){
(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(callbacks);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,vec__24589,id,text,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (___$1){
return null;
});
;})(or__3949__auto__,vec__24589,id,text,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
}
})().call(null,id);

return (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(callbacks);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__,vec__24589,id,text,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks){
return (function (){
return cljs.core.List.EMPTY;
});
;})(or__3949__auto__,vec__24589,id,text,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
}
})().call(null);
});})(vec__24589,id,text,selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
], null),text], null)], null);
});})(selected_name,map__24586,map__24586__$1,data,label,open_QMARK_,items,selected_id,callbacks))
,items):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null)," \u2193 "], null)], null);
});

//# sourceMappingURL=dropdown.js.map
