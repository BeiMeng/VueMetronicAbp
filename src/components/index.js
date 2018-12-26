import Vue from 'vue'

import treeTable from './treeTable'
import contextMenu from './contextMenu'

let items=[
    treeTable,
    contextMenu
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