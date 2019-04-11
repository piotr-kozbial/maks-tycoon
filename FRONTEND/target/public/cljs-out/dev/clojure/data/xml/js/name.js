// Compiled by ClojureScript 1.10.339 {}
goog.provide('clojure.data.xml.js.name');
goog.require('cljs.core');
goog.require('clojure.data.xml.protocols');
goog.require('clojure.string');
clojure.data.xml.js.name.parse_qname = cljs.core.memoize.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/(?:\{([^}]+)\})?([^{]*)/));
clojure.data.xml.js.name.decode_uri = (function clojure$data$xml$js$name$decode_uri(ns){
return decodeURIComponent(ns);
});
clojure.data.xml.js.name.encode_uri = (function clojure$data$xml$js$name$encode_uri(uri){
return encodeURIComponent(uri);
});
goog.object.set(clojure.data.xml.protocols.AsQName,"string",true);

goog.object.set(clojure.data.xml.protocols.qname_local,"string",(function (s){
var vec__20063 = clojure.data.xml.js.name.parse_qname.call(null,s);
var _ = cljs.core.nth.call(null,vec__20063,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20063,(1),null);
var local = cljs.core.nth.call(null,vec__20063,(2),null);
return local;
}));

goog.object.set(clojure.data.xml.protocols.qname_uri,"string",(function (s){
var vec__20066 = clojure.data.xml.js.name.parse_qname.call(null,s);
var _ = cljs.core.nth.call(null,vec__20066,(0),null);
var uri = cljs.core.nth.call(null,vec__20066,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__20066,(2),null);
return uri;
}));

//# sourceMappingURL=name.js.map
