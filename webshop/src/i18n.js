import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "To admin view",
      "shops": "Our shops",
      "cart": "Cart",
      'add-product': 'Add-product',
      'maintain-products':'Maintain-products',
      'maintain-categories':'Maintain-categories',
      'maintain-shops':'Maintain-shops',
      'successfully-deleted':'Product successfully deleted',
      'product-not-found':'Product was not found',
      'name':'Name',
      'price':'Price',
      'immg':'Image',
      'category':'Category',
      'description':'Description',
      'active':'Active',
      'change':'Change',
      'sortAZ':'Sort A-Z',
      'sortZA':'Sort Z-A',
      'priceascending':'Sort price ascending',
      'pricedescending':'Sort price descending',
      'addtocart':'Add to cart',
      'add':'Add',
      'fillall':'Fill all the gaps!',


    }
  },
  ee: {
    translation: {
      "admin": "Admini vaatesse",
      "shops": "Meie poed",
      "cart": "Ostukorvi",
      'add-product': 'Lisa tooteid',
      'maintain-products':'Halda tooteid',
      'maintain-categories':'Halda kategooriaid',
      'maintain-shops':'Halda poode',
      'successfully-deleted':'Toode edukalt eemaldatud',
      'product-not-found':'Toodet ei leitud',
      'name':'Nimi',
      'price':'Hind',
      'immg':'Pilt',
      'category':'Kategooria',
      'description':'Kirjeldus',
      'active':'Aktiivsus',
      'change':'Muuda',
      'sortAZ':'Sorteeri A-Z',
      'sortZA':'Sorteeri Z-A',
      'priceascending':'Sorteeri hinna järgi kasvavalt',
      'pricedescending':'Sorteeri hinna järgi kahanevalt',
      'addtocart':'Lisa ostukorvi',
      'add':'Lisa',
      'fillall':'Täida kõik lüngad!',

    }
  },
  fi:{
    translation: {
      "admin": "Hallonnon kannalta",
      "shops": "Myymälämme",
      "cart": "Ostoskärry",
      'add-product': 'Lisää tuotteet',
      'maintain-products':'Hallitse tuotteita:',
      'maintain-categories':'Hallita luokkaa',
      'maintain-shops':'Hallita kauppoja',
      'successfully-deleted':'Tuote on poistettu onnistuneesti',
      'product-not-found':'Tuotetta ei löytynyt',
      'name':'Nimi',
      'price':'Hinta',
      'immg':'Kuva',
      'category':'Kategoria',
      'description':'Kuvaus',
      'active':'Toiminta',
      'change':'Muuttaa',
      'sortAZ':'Järjestellä A-Z',
      'sortZA':'Järjestellä Z-A',
      'priceascending':'Halvempi ennen',
      'pricedescending':'Kalliimpi ennen',
      'addtocart':'Lisää ostoskoriin',
      'add':'Lisaa',
      'fillall':'Täytä kaikki aukot!',

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ee', // Võtame siit väärtuse refreshides, || taga on default seade
    
    //language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;