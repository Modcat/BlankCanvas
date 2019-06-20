/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import fs from './modules/file-system'
import document from './modules/document'
import connections from './modules/connections'
import artboards from './modules/artboards'
import artflow from './modules/artflow'
import director from './modules/director'
import attachedFiles from './modules/attached-files'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

// import modules from './modules'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    // State
    state: {
      // Contains user selection of elements on active art board
      focus: [],
      
      // A document to the program is a zip file
      // Our program should work in the unzipped or even compressed space to help keep the user optimised
      
      //////// Document's consist of artboards, artflow, attached files and director mode ////////
    },
    // Mutations
    mutations: {},
    // modules,
    plugins: [
      createPersistedState(),
      createSharedMutations()
    ],
    modules: {fileSystem: fs, document, connections, artboards, artflow, director, attachedFiles},
    strict: process.env.NODE_ENV !== 'production'
  })
}
export default createStore
