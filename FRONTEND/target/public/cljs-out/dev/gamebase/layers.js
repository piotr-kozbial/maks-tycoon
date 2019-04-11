// Compiled by ClojureScript 1.10.339 {}
goog.provide('gamebase.layers');
goog.require('cljs.core');
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null);

gamebase.layers.clean_layer = (function gamebase$layers$clean_layer(width,height,fill_tile){
var row = cljs.core.apply.call(null,cljs.core.vector,cljs.core.repeat.call(null,width,fill_tile));
var r = cljs.core.atom.call(null,(0));
var data = cljs.core.apply.call(null,cljs.core.vector,cljs.core.repeat.call(null,height,row));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
});

if(cljs.core._EQ_.call(null,gamebase.layers.clean_layer.call(null,(5),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null)], null)], null)], null))){
} else {
throw (new Error("Assert failed: (= (clean-layer 5 3 [:kafelki 3]) {:layer-type :tiled, :data [[[:kafelki 3] [:kafelki 3] [:kafelki 3] [:kafelki 3] [:kafelki 3]] [[:kafelki 3] [:kafelki 3] [:kafelki 3] [:kafelki 3] [:kafelki 3]] [[:kafelki 3] [:kafelki 3] [:kafelki 3] [:kafelki 3] [:kafelki 3]]]})"));
}

gamebase.layers.clean_layer_with_frame = (function gamebase$layers$clean_layer_with_frame(width,height,fill_tile,frame_tile){
var row = cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_tile,frame_tile], null),cljs.core.repeat.call(null,(width - (4)),fill_tile),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_tile,frame_tile], null)));
var frame_row = cljs.core.apply.call(null,cljs.core.vector,cljs.core.repeat.call(null,width,frame_tile));
var r = cljs.core.atom.call(null,(0));
var data = cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_row,frame_row], null),cljs.core.repeat.call(null,(height - (4)),row),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_row,frame_row], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
});

gamebase.layers.set_tile_in_layer = (function gamebase$layers$set_tile_in_layer(layer,x,y,new_tile){
return cljs.core.update_in.call(null,layer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),y], null),(function (p1__19841_SHARP_){
return cljs.core.assoc.call(null,p1__19841_SHARP_,x,new_tile);
}));
});

if(cljs.core._EQ_.call(null,gamebase.layers.set_tile_in_layer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null)], null)], null),(1),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ten-zmieniony","ten-zmieniony",148795750),(10)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ten-zmieniony","ten-zmieniony",148795750),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null)], null)], null))){
} else {
throw (new Error("Assert failed: (= (set-tile-in-layer {:layer-type :tiled, :data [[[:kafelki 0] [:kafelki 1] [:inny-set 5]] [[:kafelki 1] [:kafelki 1] [:inny-set 5]] [[:kafelki 2] [:kafelki 1] [:inny-set 5]] [[:kafelki 3] [:kafelki 1] [:inny-set 5]]]} 1 3 [:ten-zmieniony 10]) {:layer-type :tiled, :data [[[:kafelki 0] [:kafelki 1] [:inny-set 5]] [[:kafelki 1] [:kafelki 1] [:inny-set 5]] [[:kafelki 2] [:kafelki 1] [:inny-set 5]] [[:kafelki 3] [:ten-zmieniony 10] [:inny-set 5]]]})"));
}

gamebase.layers.get_tile_from_layer = (function gamebase$layers$get_tile_from_layer(layer,x,y){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer).call(null,y).call(null,x);
});

if(cljs.core._EQ_.call(null,gamebase.layers.get_tile_from_layer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(55)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null)], null)], null),(2),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(55)], null))){
} else {
throw (new Error("Assert failed: (= (get-tile-from-layer {:layer-type :tiled, :data [[[:kafelki 0] [:kafelki 1] [:inny-set 5]] [[:kafelki 1] [:kafelki 1] [:inny-set 55]] [[:kafelki 2] [:kafelki 1] [:inny-set 5]] [[:kafelki 3] [:kafelki 1] [:inny-set 5]]]} 2 1) [:inny-set 55])"));
}

gamebase.layers.get_layer_width = (function gamebase$layers$get_layer_width(layer){
return cljs.core.count.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer)));
});

gamebase.layers.get_layer_height = (function gamebase$layers$get_layer_height(layer){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer));
});

gamebase.layers.example_tmx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),(32),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651),(32),new cljs.core.Keyword(null,"tilesets","tilesets",2106493894),new cljs.core.PersistentArrayMap(null, 2, ["background",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tile-count","tile-count",1064697506),new cljs.core.Keyword(null,"image-file-width","image-file-width",765578118),new cljs.core.Keyword(null,"id-offset","id-offset",239665095),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),new cljs.core.Keyword(null,"image-file-height","image-file-height",-1746618003),new cljs.core.Keyword(null,"image-file-name","image-file-name",-1714111603),new cljs.core.Keyword(null,"tile-columns","tile-columns",1204661405),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651)],[(40),(320),(401),"background",(32),(128),"background.png",(10),(32)]),"kafelki",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tile-count","tile-count",1064697506),new cljs.core.Keyword(null,"image-file-width","image-file-width",765578118),new cljs.core.Keyword(null,"id-offset","id-offset",239665095),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),new cljs.core.Keyword(null,"image-file-height","image-file-height",-1746618003),new cljs.core.Keyword(null,"image-file-name","image-file-name",-1714111603),new cljs.core.Keyword(null,"tile-columns","tile-columns",1204661405),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651)],[(400),(640),(1),"kafelki",(32),(640),"tiles.png",(20),(32)])], null),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentArrayMap(null, 3, ["foreground",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"foreground",new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"id-list","id-list",-408015824),cljs.core.list((1),(4),(4),(62),(63),(24),(0),(0),(0),(0),(24),(0),(0),(0),(0))], null),"above",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"above",new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"id-list","id-list",-408015824),cljs.core.list((0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))], null),"background",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"background",new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"id-list","id-list",-408015824),cljs.core.list((401),(401),(401),(401),(401),(401),(401),(401),(401),(401),(401),(401),(401),(401),(401))], null)], null)], null);

gamebase.layers.create_tmx_tileset_offset_list = (function gamebase$layers$create_tmx_tileset_offset_list(tmx_data){
var base_list = cljs.core.sort_by.call(null,cljs.core.second,cljs.core.map.call(null,(function (p__19843){
var vec__19844 = p__19843;
var name = cljs.core.nth.call(null,vec__19844,(0),null);
var map__19847 = cljs.core.nth.call(null,vec__19844,(1),null);
var map__19847__$1 = ((((!((map__19847 == null)))?(((((map__19847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19847):map__19847);
var id_offset = cljs.core.get.call(null,map__19847__$1,new cljs.core.Keyword(null,"id-offset","id-offset",239665095));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),id_offset], null);
}),new cljs.core.Keyword(null,"tilesets","tilesets",2106493894).cljs$core$IFn$_invoke$arity$1(tmx_data)));
return cljs.core.map.call(null,((function (base_list){
return (function (p__19849){
var vec__19850 = p__19849;
var vec__19853 = cljs.core.nth.call(null,vec__19850,(0),null);
var id = cljs.core.nth.call(null,vec__19853,(0),null);
var offset = cljs.core.nth.call(null,vec__19853,(1),null);
var vec__19856 = cljs.core.nth.call(null,vec__19850,(1),null);
var _ = cljs.core.nth.call(null,vec__19856,(0),null);
var offset_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19856,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,offset,offset_SINGLEQUOTE_], null);
});})(base_list))
,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,base_list,cljs.core.concat.call(null,cljs.core.rest.call(null,base_list),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))));
});

if(cljs.core._EQ_.call(null,gamebase.layers.create_tmx_tileset_offset_list.call(null,gamebase.layers.example_tmx),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1),(401)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),(401),null], null)))){
} else {
throw (new Error("Assert failed: (= (create-tmx-tileset-offset-list example-tmx) (quote ([:kafelki 1 401] [:background 401 nil])))"));
}

gamebase.layers.tmx_tile_id_to_our_id = (function gamebase$layers$tmx_tile_id_to_our_id(tmx_tileset_offset_list,tmx_id){
if(cljs.core._EQ_.call(null,(0),tmx_id)){
return null;
} else {
var vec__19859 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__19862){
var vec__19863 = p__19862;
var _ = cljs.core.nth.call(null,vec__19863,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19863,(1),null);
var id_offset_next = cljs.core.nth.call(null,vec__19863,(2),null);
return (((id_offset_next == null)) || ((tmx_id < id_offset_next)));
}),tmx_tileset_offset_list));
var tileset_id = cljs.core.nth.call(null,vec__19859,(0),null);
var id_offset = cljs.core.nth.call(null,vec__19859,(1),null);
var _ = cljs.core.nth.call(null,vec__19859,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tileset_id,(tmx_id - id_offset)], null);
}
});

if(cljs.core._EQ_.call(null,gamebase.layers.tmx_tile_id_to_our_id.call(null,gamebase.layers.create_tmx_tileset_offset_list.call(null,gamebase.layers.example_tmx),(0)),null)){
} else {
throw (new Error("Assert failed: (= (tmx-tile-id-to-our-id (create-tmx-tileset-offset-list example-tmx) 0) nil)"));
}

if(cljs.core._EQ_.call(null,gamebase.layers.tmx_tile_id_to_our_id.call(null,gamebase.layers.create_tmx_tileset_offset_list.call(null,gamebase.layers.example_tmx),(2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null))){
} else {
throw (new Error("Assert failed: (= (tmx-tile-id-to-our-id (create-tmx-tileset-offset-list example-tmx) 2) [:kafelki 1])"));
}

if(cljs.core._EQ_.call(null,gamebase.layers.tmx_tile_id_to_our_id.call(null,gamebase.layers.create_tmx_tileset_offset_list.call(null,gamebase.layers.example_tmx),(410)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),(9)], null))){
} else {
throw (new Error("Assert failed: (= (tmx-tile-id-to-our-id (create-tmx-tileset-offset-list example-tmx) 410) [:background 9])"));
}

gamebase.layers.id_list_to_tile_matrix = (function gamebase$layers$id_list_to_tile_matrix(id_list,width,tmx_tileset_offset_list){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p1__19842_SHARP_){
return cljs.core.apply.call(null,cljs.core.vector,p1__19842_SHARP_);
}),cljs.core.partition.call(null,width,cljs.core.map.call(null,cljs.core.partial.call(null,gamebase.layers.tmx_tile_id_to_our_id,tmx_tileset_offset_list),id_list)))));
});

gamebase.layers.id_list_to_tiled_layer = (function gamebase$layers$id_list_to_tiled_layer(id_list,width,tmx_tileset_offset_list){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),gamebase.layers.id_list_to_tile_matrix.call(null,id_list,width,tmx_tileset_offset_list)], null);
});

gamebase.layers.get_all_layers_from_tmx = (function gamebase$layers$get_all_layers_from_tmx(tmx_data){
var map__19866 = tmx_data;
var map__19866__$1 = ((((!((map__19866 == null)))?(((((map__19866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19866):map__19866);
var width = cljs.core.get.call(null,map__19866__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var layers = cljs.core.get.call(null,map__19866__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var offset_list = gamebase.layers.create_tmx_tileset_offset_list.call(null,tmx_data);
return cljs.core.map.call(null,((function (map__19866,map__19866__$1,width,layers,offset_list){
return (function (p__19868){
var map__19869 = p__19868;
var map__19869__$1 = ((((!((map__19869 == null)))?(((((map__19869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19869):map__19869);
var name = cljs.core.get.call(null,map__19869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id_list = cljs.core.get.call(null,map__19869__$1,new cljs.core.Keyword(null,"id-list","id-list",-408015824));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),gamebase.layers.id_list_to_tiled_layer.call(null,id_list,width,offset_list)], null);
});})(map__19866,map__19866__$1,width,layers,offset_list))
,cljs.core.vals.call(null,layers));
});

gamebase.layers.example_context_with_tileset_map = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tileset-map","tileset-map",-1097486347),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"a"], null)], null),new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"b"], null),(3),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"c"], null),(23),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"dd"], null),(61),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"eee"], null),(62),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"ffff"], null)], null)], null)], null);

gamebase.layers.get_tile_info_from_layer = (function gamebase$layers$get_tile_info_from_layer(context,layer,x,y){
var map__19871 = context;
var map__19871__$1 = ((((!((map__19871 == null)))?(((((map__19871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19871):map__19871);
var tileset_map = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"tileset-map","tileset-map",-1097486347));
var vec__19872 = gamebase.layers.get_tile_from_layer.call(null,layer,x,y);
var tileset_id = cljs.core.nth.call(null,vec__19872,(0),null);
var tile_id = cljs.core.nth.call(null,vec__19872,(1),null);
var temp__5457__auto__ = tileset_map.call(null,tileset_id);
if(cljs.core.truth_(temp__5457__auto__)){
var ts_map = temp__5457__auto__;
return ts_map.call(null,tile_id);
} else {
return null;
}
});

if(cljs.core._EQ_.call(null,gamebase.layers.get_tile_info_from_layer.call(null,gamebase.layers.example_context_with_tileset_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-type","layer-type",816560917),new cljs.core.Keyword(null,"tiled","tiled",249698823),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(55)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inny-set","inny-set",-35539952),(5)], null)], null)], null)], null),(0),(3)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-data","example-data",-367966796),"c"], null))){
} else {
throw (new Error("Assert failed: (= (get-tile-info-from-layer example-context-with-tileset-map {:layer-type :tiled, :data [[[:kafelki 0] [:kafelki 1] [:inny-set 5]] [[:kafelki 1] [:kafelki 1] [:inny-set 55]] [[:kafelki 2] [:kafelki 1] [:inny-set 5]] [[:kafelki 3] [:kafelki 1] [:inny-set 5]]]} 0 3) {:example-data \"c\"})"));
}

gamebase.layers.example_context_with_rendering_info = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343),(32),new cljs.core.Keyword(null,"tile-height","tile-height",-905667651),(32),new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212),(0),new cljs.core.Keyword(null,"word-height-in-tiles","word-height-in-tiles",1530386529),(0),new cljs.core.Keyword(null,"tileset-rendering-map","tileset-rendering-map",-972444005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),"background.png",new cljs.core.Keyword(null,"width-in-tiles","width-in-tiles",-528680927),(5)], null),new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),"tiles.png",new cljs.core.Keyword(null,"width-in-tiles","width-in-tiles",-528680927),(3)], null)], null)], null);

gamebase.layers.get_tileset_rendering_map_from_tmx = (function gamebase$layers$get_tileset_rendering_map_from_tmx(tmx_data){
var map__19876 = tmx_data;
var map__19876__$1 = ((((!((map__19876 == null)))?(((((map__19876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19876):map__19876);
var tilesets = cljs.core.get.call(null,map__19876__$1,new cljs.core.Keyword(null,"tilesets","tilesets",2106493894));
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (map__19876,map__19876__$1,tilesets){
return (function (p__19878){
var map__19879 = p__19878;
var map__19879__$1 = ((((!((map__19879 == null)))?(((((map__19879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19879):map__19879);
var name = cljs.core.get.call(null,map__19879__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var image_file_name = cljs.core.get.call(null,map__19879__$1,new cljs.core.Keyword(null,"image-file-name","image-file-name",-1714111603));
var tile_columns = cljs.core.get.call(null,map__19879__$1,new cljs.core.Keyword(null,"tile-columns","tile-columns",1204661405));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),image_file_name,new cljs.core.Keyword(null,"width-in-tiles","width-in-tiles",-528680927),tile_columns], null)], null);
});})(map__19876,map__19876__$1,tilesets))
,cljs.core.vals.call(null,tilesets)));
});

if(cljs.core._EQ_.call(null,gamebase.layers.get_tileset_rendering_map_from_tmx.call(null,gamebase.layers.example_tmx),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),"background.png",new cljs.core.Keyword(null,"width-in-tiles","width-in-tiles",-528680927),(10)], null),new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),"tiles.png",new cljs.core.Keyword(null,"width-in-tiles","width-in-tiles",-528680927),(20)], null)], null))){
} else {
throw (new Error("Assert failed: (= (get-tileset-rendering-map-from-tmx example-tmx) {:background {:img \"background.png\", :width-in-tiles 10}, :kafelki {:img \"tiles.png\", :width-in-tiles 20}})"));
}

gamebase.layers.get_rendering_information_for_tile = (function gamebase$layers$get_rendering_information_for_tile(var_args){
var G__19882 = arguments.length;
switch (G__19882) {
case 2:
return gamebase.layers.get_rendering_information_for_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return gamebase.layers.get_rendering_information_for_tile.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gamebase.layers.get_rendering_information_for_tile.cljs$core$IFn$_invoke$arity$2 = (function (context,id){
var map__19883 = context;
var map__19883__$1 = ((((!((map__19883 == null)))?(((((map__19883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19883):map__19883);
var tileset_rendering_map = cljs.core.get.call(null,map__19883__$1,new cljs.core.Keyword(null,"tileset-rendering-map","tileset-rendering-map",-972444005));
var world_width_in_tiles = cljs.core.get.call(null,map__19883__$1,new cljs.core.Keyword(null,"world-width-in-tiles","world-width-in-tiles",1320292212));
var tile_width = cljs.core.get.call(null,map__19883__$1,new cljs.core.Keyword(null,"tile-width","tile-width",-1131996343));
var tile_height = cljs.core.get.call(null,map__19883__$1,new cljs.core.Keyword(null,"tile-height","tile-height",-905667651));
var vec__19884 = id;
var tileset_id = cljs.core.nth.call(null,vec__19884,(0),null);
var tile_id = cljs.core.nth.call(null,vec__19884,(1),null);
var map__19887 = tileset_rendering_map.call(null,tileset_id);
var map__19887__$1 = ((((!((map__19887 == null)))?(((((map__19887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19887):map__19887);
var img = cljs.core.get.call(null,map__19887__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var width_in_tiles = cljs.core.get.call(null,map__19887__$1,new cljs.core.Keyword(null,"width-in-tiles","width-in-tiles",-528680927));
var row = cljs.core.quot.call(null,tile_id,width_in_tiles);
var col = cljs.core.mod.call(null,tile_id,width_in_tiles);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),img,new cljs.core.Keyword(null,"x","x",2099068185),(tile_width * col),new cljs.core.Keyword(null,"y","y",-1757859776),(tile_height * row),new cljs.core.Keyword(null,"w","w",354169001),tile_width,new cljs.core.Keyword(null,"h","h",1109658740),tile_height], null);
});

gamebase.layers.get_rendering_information_for_tile.cljs$core$IFn$_invoke$arity$4 = (function (context,tiled_layer,x,y){
return gamebase.layers.get_rendering_information_for_tile.call(null,context,gamebase.layers.get_tile_from_layer.call(null,tiled_layer,x,y));
});

gamebase.layers.get_rendering_information_for_tile.cljs$lang$maxFixedArity = 4;


if(cljs.core._EQ_.call(null,gamebase.layers.get_rendering_information_for_tile.call(null,gamebase.layers.example_context_with_rendering_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kafelki","kafelki",-1077797541),(5)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"img","img",1442687358),"tiles.png",new cljs.core.Keyword(null,"x","x",2099068185),(64),new cljs.core.Keyword(null,"y","y",-1757859776),(32),new cljs.core.Keyword(null,"w","w",354169001),(32),new cljs.core.Keyword(null,"h","h",1109658740),(32)], null))){
} else {
throw (new Error("Assert failed: (= (get-rendering-information-for-tile example-context-with-rendering-info [:kafelki 5]) {:img \"tiles.png\", :x 64, :y 32, :w 32, :h 32})"));
}

//# sourceMappingURL=layers.js.map
