import React from 'react'
import ShopItem from './ShopItem'

function SearchList({ filteredItems }) {
    //const filtered = filteredItems.map(item => <ShopItem key={item?.id} name={item?.label}/>);
    
    const filtered = filteredItems?.map((item) => <li key={item.id}>{item.label}</li>);
    return filtered ? filtered : "";
    // return (
    //     <ul>{filtered}</ul>
    // )
};

export default SearchList;