import Vue from 'vue'

import contextMenu from './contextMenu'

import portletBoxed from './ui/portletBoxed'

import crud from './crud'

let items=[
    contextMenu,
    portletBoxed,
    crud
]

let alias="";

let components = {
    install: function(instance) {
      Object.keys(items).forEach(key => {
        let name = `${alias}${items[key].name}`;
        instance.component(name, items[key]);
      });
    }
  };
Vue.use(components);