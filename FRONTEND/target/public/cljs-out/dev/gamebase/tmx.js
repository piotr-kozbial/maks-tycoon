// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.tmx');
goog.require('cljs.core');
goog.require('clojure.string');
gamebase.tmx.parse_int = (function gamebase$tmx$parse_int(s){
return parseInt(s);
});
gamebase.tmx.example_doc_text = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n   <map version=\"1.0\" orientation=\"orthogonal\" renderorder=\"right-down\"\n        width=\"5\" height=\"3\" tilewidth=\"32\" tileheight=\"32\" nextobjectid=\"1\">\n\n     <tileset firstgid=\"1\" name=\"kafelki\" tilewidth=\"32\" tileheight=\"32\"\n              tilecount=\"400\" columns=\"20\">\n       <image source=\"tiles.png\" width=\"640\" height=\"640\"/>\n     </tileset>\n\n     <tileset firstgid=\"401\" name=\"background\" tilewidth=\"32\" tileheight=\"32\"\n              tilecount=\"40\" columns=\"10\">\n       <image source=\"background.png\" width=\"320\" height=\"128\"/>\n     </tileset>\n\n     <layer name=\"background\" width=\"5\" height=\"3\">\n       <data encoding=\"csv\">\n         401,401,401,401,401,\n         401,401,401,401,401,\n         401,401,401,401,401\n       </data>\n     </layer>\n\n     <layer name=\"foreground\" width=\"5\" height=\"3\">\n       <data encoding=\"csv\">\n         1,4,4,62,63,\n         24,0,0,0,0,\n         24,0,0,0,0\n       </data>\n     </layer>\n\n     <layer name=\"above\" width=\"5\" height=\"3\">\n       <data encoding=\"csv\">\n         0,0,0,0,0,\n         0,0,0,0,0,\n         0,0,0,0,0\n       </data>\n     </layer>\n\n   </map>";
gamebase.tmx.verify_header = (function gamebase$tmx$verify_header(doc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(doc),new cljs.core.Keyword(null,"map","map",1371690461))){
} else {
throw (new Error("Assert failed: (= (:tag doc) :map)"));
}

var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(doc);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(attrs),"orthogonal")){
} else {
throw (new Error(["Assert failed: ","Can only handle tile maps in orthogonal mode (expected: orientation=\"orthogonal\")","\n","(= (:orientation attrs) \"orthogonal\")"].join('')));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"renderorder","renderorder",-776794033).cljs$core$IFn$_invoke$arity$1(attrs),"right-down")){
return null;
} else {
throw (new Error(["Assert failed: ","Can only handle tile maps in right-down mode (expected: renderorder=\"right-down\")","\n","(= (:renderorder attrs) \"right-down\")"].join('')));
}
});
gamebase.tmx.parse_dimensions = (function gamebase$tmx$parse_dimensions(doc){
var map__28096 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(doc);
var map__28096__$1 = ((((!((map__28096 == null)))?(((((map__28096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28096):map__28096);
var width = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tilewidth = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610));
var tileheight = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),gamebase.tmx.parse_int.call(null,width),new cljs.core.Keyword(null,"height","height",1025178622),gamebase.tmx.parse_int.call(null,height),new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),gamebase.tmx.parse_int.call(null,tilewidth),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651),gamebase.tmx.parse_int.call(null,tileheight)], null);
});
gamebase.tmx.get_tileset_subdocs = (function gamebase$tmx$get_tileset_subdocs(doc){
return cljs.core.filter.call(null,(function (p1__28098_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__28098_SHARP_),new cljs.core.Keyword(null,"tileset","tileset",-1285577730));
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(doc));
});
gamebase.tmx.parse_tileset = (function gamebase$tmx$parse_tileset(tileset_subdoc){
var map__28100 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(tileset_subdoc);
var map__28100__$1 = ((((!((map__28100 == null)))?(((((map__28100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28100):map__28100);
var firstgid = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"firstgid","firstgid",1659571107));
var name = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tilewidth = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610));
var tileheight = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var tilecount = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"tilecount","tilecount",-1061649439));
var columns = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var image_subdoc = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28100,map__28100__$1,firstgid,name,tilewidth,tileheight,tilecount,columns){
return (function (p1__28099_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__28099_SHARP_),new cljs.core.Keyword(null,"image","image",-58725096));
});})(map__28100,map__28100__$1,firstgid,name,tilewidth,tileheight,tilecount,columns))
,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(tileset_subdoc)));
var map__28101 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(image_subdoc);
var map__28101__$1 = ((((!((map__28101 == null)))?(((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var source = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var width = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tile-count","tile-count",1064697506),new cljs.core.Keyword(null,"image-file-width","image-file-width",765578118),new cljs.core.Keyword(null,"id-offset","id-offset",239665095),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),new cljs.core.Keyword(null,"image-file-height","image-file-height",-1746618003),new cljs.core.Keyword(null,"image-file-name","image-file-name",-1714111603),new cljs.core.Keyword(null,"tile-columns","tile-columns",1204661405),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651)],[gamebase.tmx.parse_int.call(null,tilecount),gamebase.tmx.parse_int.call(null,width),gamebase.tmx.parse_int.call(null,firstgid),name,gamebase.tmx.parse_int.call(null,tilewidth),gamebase.tmx.parse_int.call(null,height),source,gamebase.tmx.parse_int.call(null,columns),gamebase.tmx.parse_int.call(null,tileheight)]);
});
gamebase.tmx.parse_tilesets = (function gamebase$tmx$parse_tilesets(doc){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__28104){
var map__28105 = p__28104;
var map__28105__$1 = ((((!((map__28105 == null)))?(((((map__28105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28105):map__28105);
var tileset = map__28105__$1;
var name = cljs.core.get.call(null,map__28105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,tileset], null);
}),cljs.core.map.call(null,gamebase.tmx.parse_tileset,gamebase.tmx.get_tileset_subdocs.call(null,doc))));
});
gamebase.tmx.get_layer_subdocs = (function gamebase$tmx$get_layer_subdocs(doc){
return cljs.core.filter.call(null,(function (p1__28107_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__28107_SHARP_),new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(doc));
});
gamebase.tmx.parse_layer = (function gamebase$tmx$parse_layer(layer_subdoc){
var map__28110 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(layer_subdoc);
var map__28110__$1 = ((((!((map__28110 == null)))?(((((map__28110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28110):map__28110);
var name = cljs.core.get.call(null,map__28110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.call(null,map__28110__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28110__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var layer_width = gamebase.tmx.parse_int.call(null,width);
var layer_height = gamebase.tmx.parse_int.call(null,height);
var data = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28110,map__28110__$1,name,width,height,layer_width,layer_height){
return (function (p1__28108_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__28108_SHARP_),new cljs.core.Keyword(null,"data","data",-232669377));
});})(map__28110,map__28110__$1,name,width,height,layer_width,layer_height))
,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(layer_subdoc)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(data)),"csv")){
} else {
throw (new Error("Assert failed: (= (:encoding (:attrs data)) \"csv\")"));
}

var id_list = cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"width","width",-384071477),layer_width,new cljs.core.Keyword(null,"height","height",1025178622),layer_height,new cljs.core.Keyword(null,"id-list","id-list",-408015824),cljs.core.map.call(null,gamebase.tmx.parse_int,((function (id_list,map__28110,map__28110__$1,name,width,height,layer_width,layer_height,data){
return (function (p1__28109_SHARP_){
return clojure.string.split.call(null,p1__28109_SHARP_,/,/);
});})(id_list,map__28110,map__28110__$1,name,width,height,layer_width,layer_height,data))
.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"\n",null,"t",null], null), null),id_list))))], null);
});
gamebase.tmx.parse_layers = (function gamebase$tmx$parse_layers(doc){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__28112){
var map__28113 = p__28112;
var map__28113__$1 = ((((!((map__28113 == null)))?(((((map__28113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28113):map__28113);
var tileset = map__28113__$1;
var name = cljs.core.get.call(null,map__28113__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,tileset], null);
}),cljs.core.map.call(null,gamebase.tmx.parse_layer,gamebase.tmx.get_layer_subdocs.call(null,doc))));
});
gamebase.tmx.parse_tmx = (function gamebase$tmx$parse_tmx(doc){
gamebase.tmx.verify_header.call(null,doc);

return cljs.core.assoc.call(null,gamebase.tmx.parse_dimensions.call(null,doc),new cljs.core.Keyword(null,"tilesets","tilesets",2106493894),gamebase.tmx.parse_tilesets.call(null,doc),new cljs.core.Keyword(null,"layers","layers",1944875032),gamebase.tmx.parse_layers.call(null,doc));
});

//# sourceMappingURL=tmx.js.map
