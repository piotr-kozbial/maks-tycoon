// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__20267,handler){
var map__20268 = p__20267;
var map__20268__$1 = ((((!((map__20268 == null)))?(((((map__20268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20268):map__20268);
var uri = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__20268,map__20268__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__20266_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__20266_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__20268,map__20268__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___20280 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___20280)){
var response_type_20281 = temp__5457__auto___20280;
this$__$1.responseType = cljs.core.name.call(null,response_type_20281);
} else {
}

var seq__20270_20282 = cljs.core.seq.call(null,headers);
var chunk__20271_20283 = null;
var count__20272_20284 = (0);
var i__20273_20285 = (0);
while(true){
if((i__20273_20285 < count__20272_20284)){
var vec__20274_20286 = cljs.core._nth.call(null,chunk__20271_20283,i__20273_20285);
var k_20287 = cljs.core.nth.call(null,vec__20274_20286,(0),null);
var v_20288 = cljs.core.nth.call(null,vec__20274_20286,(1),null);
this$__$1.setRequestHeader(k_20287,v_20288);


var G__20289 = seq__20270_20282;
var G__20290 = chunk__20271_20283;
var G__20291 = count__20272_20284;
var G__20292 = (i__20273_20285 + (1));
seq__20270_20282 = G__20289;
chunk__20271_20283 = G__20290;
count__20272_20284 = G__20291;
i__20273_20285 = G__20292;
continue;
} else {
var temp__5457__auto___20293 = cljs.core.seq.call(null,seq__20270_20282);
if(temp__5457__auto___20293){
var seq__20270_20294__$1 = temp__5457__auto___20293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20270_20294__$1)){
var c__4351__auto___20295 = cljs.core.chunk_first.call(null,seq__20270_20294__$1);
var G__20296 = cljs.core.chunk_rest.call(null,seq__20270_20294__$1);
var G__20297 = c__4351__auto___20295;
var G__20298 = cljs.core.count.call(null,c__4351__auto___20295);
var G__20299 = (0);
seq__20270_20282 = G__20296;
chunk__20271_20283 = G__20297;
count__20272_20284 = G__20298;
i__20273_20285 = G__20299;
continue;
} else {
var vec__20277_20300 = cljs.core.first.call(null,seq__20270_20294__$1);
var k_20301 = cljs.core.nth.call(null,vec__20277_20300,(0),null);
var v_20302 = cljs.core.nth.call(null,vec__20277_20300,(1),null);
this$__$1.setRequestHeader(k_20301,v_20302);


var G__20303 = cljs.core.next.call(null,seq__20270_20294__$1);
var G__20304 = null;
var G__20305 = (0);
var G__20306 = (0);
seq__20270_20282 = G__20303;
chunk__20271_20283 = G__20304;
count__20272_20284 = G__20305;
i__20273_20285 = G__20306;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map
