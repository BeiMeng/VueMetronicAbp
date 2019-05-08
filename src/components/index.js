//import Vue from 'vue'

import contextMenu from './contextMenu'

import portletBoxed from './ui/portletBoxed'

import crud from './crud'

import metroTabs from './ui/metroTabs/metroTabs'
import metroTabItem from './ui/metroTabs/metroTabItem'

import iconList from './iconList'

let items=[
    contextMenu,
    portletBoxed,
    crud,
    metroTabs,
    metroTabItem,
    iconList
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