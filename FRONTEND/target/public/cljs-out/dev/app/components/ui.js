// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.components.ui');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('app.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
app.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

app.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k28593,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__28597 = k28593;
switch (G__28597) {
default:
return cljs.core.get.call(null,self__.__extmap,k28593,else__4206__auto__);

}
});

app.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#app.components.ui.UIComponent{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

app.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28592){
var self__ = this;
var G__28592__$1 = this;
return (new cljs.core.RecordIter((0),G__28592__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

app.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

app.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new app.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});

app.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

app.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1265344642 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

app.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28594,other28595){
var self__ = this;
var this28594__$1 = this;
return ((!((other28595 == null))) && ((this28594__$1.constructor === other28595.constructor)) && (cljs.core._EQ_.call(null,this28594__$1.__extmap,other28595.__extmap)));
});

app.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new app.components.ui.UIComponent(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

app.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__28592){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__28598 = cljs.core.keyword_identical_QMARK_;
var expr__28599 = k__4211__auto__;
return (new app.components.ui.UIComponent(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__28592),null));
});

app.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

app.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__28592){
var self__ = this;
var this__4202__auto____$1 = this;
return (new app.components.ui.UIComponent(G__28592,self__.__extmap,self__.__hash));
});

app.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

app.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

app.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
app.core.render.call(null);

return component__$1;
});

app.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

app.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

app.components.ui.UIComponent.cljs$lang$type = true;

app.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"app.components.ui/UIComponent",null,(1),null));
});

app.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"app.components.ui/UIComponent");
});

/**
 * Positional factory function for app.components.ui/UIComponent.
 */
app.components.ui.__GT_UIComponent = (function app$components$ui$__GT_UIComponent(){
return (new app.components.ui.UIComponent(null,null,null));
});

/**
 * Factory function for app.components.ui/UIComponent, taking a map of keywords to field values.
 */
app.components.ui.map__GT_UIComponent = (function app$components$ui$map__GT_UIComponent(G__28596){
var extmap__4236__auto__ = (function (){var G__28601 = cljs.core.dissoc.call(null,G__28596);
if(cljs.core.record_QMARK_.call(null,G__28596)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28601);
} else {
return G__28601;
}
})();
return (new app.components.ui.UIComponent(null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

app.components.ui.new_ui_component = (function app$components$ui$new_ui_component(){
return app.components.ui.map__GT_UIComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=ui.js.map
