
export default function getItems ( {keyword = 'sillas'} = {}) {
    
    const apiURL = `https://api.mercadolibre.com/sites/MLA/search?q=${keyword}`
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {results = []} = response
            if(Array.isArray(results)){
            const items = results.map(item => {
                const {thumbnail, title, id, price} = item
                const {url} = item.thumbnail
                const {address} = item.address.state_name
                return {title, id, url, price, address}
            })
            return items
            }
    })
}