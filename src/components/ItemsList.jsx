import React, {useEffect, useState} from 'react';
import ItemInfo from './ItemInfo';
import getItems from '../services/getItems'

export function ItemsList({ params }) {

  const { keyword } = params

  const [items, setItems] = useState([]);

  useEffect(function (){
      getItems({ keyword }).then(items => setItems(items))
  }, [keyword])

  return <div> 
  {
    items.map(({id, title, url, price, address})=> 
      <ItemInfo
        key={id}
        id={id}
        title={title}
        url={url}
        price={price}
        address={address}

    />)
  } 
  </div>
}
