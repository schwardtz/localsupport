import Vue from 'vue'
import Vuex from 'vuex'
import LocationsData from "../data/locations.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: {
      categories: [],
      search: ''
    },
    locations: LocationsData
  },
  mutations: {
    addCategoryFilter(state, category) {
      if (state.filter.categories.indexOf(category) == -1) {
        state.filter.categories.push(category)
      } else {
        state.filter.categories.splice(state.filter.categories.indexOf(category),1)
      }
    },
    searchFilter(state, searchText) {
      state.filter.search = searchText
    }
  },
  getters: {
    getFilteredLocations: state => {
      return state.locations.filter(function (location) {
        if (location.city.toLowerCase().indexOf(state.filter.search.toLowerCase()) != -1  && (state.filter.categories.length === 0 || location.categories.map((category=>state.filter.categories.indexOf(category)!=-1)).indexOf(true)!=-1)) {
          return location;
        }
      })
    },
    getSearchFilter: state => {
      return state.filter.search
    },
    getCategoryFilter: state => {
      return state.filter.categories;
    }
  },
  strict: true
})