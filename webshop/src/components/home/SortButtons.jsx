import React from 'react'
import { useTranslation } from 'react-i18next';


const SortButtons = (props) => {
    
    const { t } = useTranslation();

    const AtoZ = () => {
        props.products.sort( (a,b) => a.name.localeCompare(b.name));
        props.setProducts(props.products.slice());  
    };
  
    const ZtoA = () => {
        props.products.sort( (a,b) => b.name.localeCompare(a.name));
        props.setProducts(props.products.slice());  
    }; 
  
    const priceAsc = () => {
        props.products.sort((a,b) => a.price - b.price);
      //products.sort( (a,b) => a.price.localeCompare(b.price) );ˇei tööta siin
        props.setProducts(props.products.slice());
    };
  
    const priceDesc = () => {
        props.products.sort((a,b) => b.price - a.price);
        props.setProducts(props.products.slice());
    };


  return (

    <div>
        <button onClick={AtoZ}>{t('sortAZ')}</button>
        <button onClick={ZtoA}>{t('sortZA')}</button>
        <button onClick={priceAsc}>{t('priceascending')}</button>
        <button onClick={priceDesc}>{t('pricedescending')}</button>
    </div>
  )
}

export default SortButtons