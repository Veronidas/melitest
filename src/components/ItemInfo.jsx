import React from 'react';

export default function ItemInfo( { title, id, url, price, address}) {
    {
    return (
        <a href={`#${id}`} className='ItemCard'>
            <img alt={url} src={url} width={260} height={160} />
            <h4>{title}</h4>
            <small>{price}</small>
        </a>
    )
    }
}
