import Notiflix from "notiflix";
import countryTpl from '../../templates/country-card_for_2.hbs'
import countryOneTpl from '../../templates/country-card.hbs'

const cardList = document.querySelector(".country-list");

export function fetchCountries(name) {
    const url = `/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    fetch(`https://restcountries.com${url}`)
        .then(responce => {
            if (responce.ok) {           
    return responce.json();
 } else {
    return Notiflix.Notify.failure('Oops, there is no country with that name');
            }
        })
        .then(country => {

            if (country.length === 1) {
               const oneCountry = countryOneTpl(...country)
               
                cardList.innerHTML = oneCountry;
            };

            if (country.length < 10 && country.length > 1) {
                const massive = country.map(oneCountry => { 
                    return countryTpl(oneCountry)
                })
                cardList.innerHTML = massive.join()
                    
            return country
            } 
            
            if (country.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            }

    }).catch(error => {
    console.log(error);
})
}

