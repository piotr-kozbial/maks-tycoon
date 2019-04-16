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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29025,handler){
var map__29026 = p__29025;
var map__29026__$1 = ((((!((map__29026 == null)))?(((((map__29026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29026):map__29026);
var uri = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29026,map__29026__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29024_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__29024_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__29026,map__29026__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___29038 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___29038)){
var response_type_29039 = temp__5457__auto___29038;
this$__$1.responseType = cljs.core.name.call(null,response_type_29039);
} else {
}

var seq__29028_29040 = cljs.core.seq.call(null,headers);
var chunk__29029_29041 = null;
var count__29030_29042 = (0);
var i__29031_29043 = (0);
while(true){
if((i__29031_29043 < count__29030_29042)){
var vec__29032_29044 = cljs.core._nth.call(null,chunk__29029_29041,i__29031_29043);
var k_29045 = cljs.core.nth.call(null,vec__29032_29044,(0),null);
var v_29046 = cljs.core.nth.call(null,vec__29032_29044,(1),null);
this$__$1.setRequestHeader(k_29045,v_29046);


var G__29047 = seq__29028_29040;
var G__29048 = chunk__29029_29041;
var G__29049 = count__29030_29042;
var G__29050 = (i__29031_29043 + (1));
seq__29028_29040 = G__29047;
chunk__29029_29041 = G__29048;
count__29030_29042 = G__29049;
i__29031_29043 = G__29050;
continue;
} else {
var temp__5457__auto___29051 = cljs.core.seq.call(null,seq__29028_29040);
if(temp__5457__auto___29051){
var seq__29028_29052__$1 = temp__5457__auto___29051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29028_29052__$1)){
var c__4351__auto___29053 = cljs.core.chunk_first.call(null,seq__29028_29052__$1);
var G__29054 = cljs.core.chunk_rest.call(null,seq__29028_29052__$1);
var G__29055 = c__4351__auto___29053;
var G__29056 = cljs.core.count.call(null,c__4351__auto___29053);
var G__29057 = (0);
seq__29028_29040 = G__29054;
chunk__29029_29041 = G__29055;
count__29030_29042 = G__29056;
i__29031_29043 = G__29057;
continue;
} else {
var vec__29035_29058 = cljs.core.first.call(null,seq__29028_29052__$1);
var k_29059 = cljs.core.nth.call(null,vec__29035_29058,(0),null);
var v_29060 = cljs.core.nth.call(null,vec__29035_29058,(1),null);
this$__$1.setRequestHeader(k_29059,v_29060);


var G__29061 = cljs.core.next.call(null,seq__29028_29052__$1);
var G__29062 = null;
var G__29063 = (0);
var G__29064 = (0);
seq__29028_29040 = G__29061;
chunk__29029_29041 = G__29062;
count__29030_29042 = G__29063;
i__29031_29043 = G__29064;
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
