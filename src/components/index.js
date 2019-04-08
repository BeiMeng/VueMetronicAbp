import Vue from 'vue'

import treeTable from './treeTable'
import contextMenu from './contextMenu'

import portletBoxed from './ui/portletBoxed'

let items=[
    treeTable,
    contextMenu,
    portletBoxed
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