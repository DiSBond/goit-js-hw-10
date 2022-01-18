import './css/styles.css';
import { fetchCountries } from './Js/function_fetch.js';
import countryTpl from '../templates/country-card_for_2.hbs'
var debounce = require('lodash.debounce');


const DEBOUNCE_DELAY = 300;

let input = document.querySelector('input#search-box');

input.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));



function onSearch(params) {
    // clearInterface()     
if (input.value === " " || input.value === "") {
   return
}
   fetchCountries(input.value.trim())
    
}

function clearInterface(params) {
    
}