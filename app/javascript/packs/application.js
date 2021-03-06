// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "packs/navbar"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";


// Internal imports, e.g:
import { playNavbar } from './navbar';
import { initMapbox } from '../plugins/init_mapbox';
import { homeMapbox } from '../plugins/home_mapbox';
import { homeSearch } from './home_search';
import "controllers";

document.addEventListener('turbolinks:load', () => {
  playNavbar();
  initMapbox();
  homeMapbox();
  homeSearch();

  // Call your functions here, e.g:
  // initSelect2();
});
