import Vue from 'vue'
import Vuex from 'vuex'
import LocationsData from "../data/locations.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: {
      categories: [],
      name: ''
    },
    locations: LocationsData
  },
  mutations: {
    addCategoryFilter(state, category) {
      if (state.filter.categories.indexOf(category) == -1) {
        state.filter.categories.push(category)
      } else {
        console.log(state.filter.categories.indexOf(category)+1);
        state.filter.categories.splice(state.filter.categories.indexOf(category),1)
      }
    },
    searchNameFilter(state, searchText) {
      state.filter.name = searchText
    }
  },
  getters: {
    getFilteredLocations: state => {
      return state.locations.filter(function (location) {
        if (location.name.toLowerCase().indexOf(state.filter.name.toLowerCase()) != -1  && (state.filter.categories.length === 0 || location.categories.map((category=>state.filter.categories.indexOf(category)!=-1)).indexOf(true)!=-1)) {
          return location;
        }
      })
    },
    getNameFilter: state => {
      return state.filter.name
    },
    getCategoryFilter: state => {
      return state.filter.categories;
    }
  },
  strict: true
})