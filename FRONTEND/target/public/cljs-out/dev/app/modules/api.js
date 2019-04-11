// Compiled by ClojureScript 1.10.339 {}
goog.provide('app.modules.api');
goog.require('cljs.core');
goog.require('app.ui.sidebar');
goog.require('app.key_mouse_input');
app.modules.api.register_sidebar_tab = (function app$modules$api$register_sidebar_tab(tab_struct){
return app.ui.sidebar.register_tab.call(null,tab_struct);
});
app.modules.api.takeover_mouse_click = (function app$modules$api$takeover_mouse_click(owner_id,handler){
return app.key_mouse_input.takeover_mouse_click.call(null,owner_id,handler);
});
app.modules.api.giveup_mouse_click = (function app$modules$api$giveup_mouse_click(owner_id){
return app.key_mouse_input.giveup_mouse_click.call(null,owner_id);
});
app.modules.api.mouse_click_owner = (function app$modules$api$mouse_click_owner(){
return app.key_mouse_input.mouse_click_owner.call(null);
});

//# sourceMappingURL=api.js.map
