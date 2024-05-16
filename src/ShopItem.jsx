import React from 'react'

function ShopItem({item}) {
    

    // return (
    //     <div className={item.id}>
    //         <h2>{ item.name }</h2>
    //         <p>{ item.max }</p>
    //         <p>{ item.min }</p>
    //     </div>
    // )
    return (
        <div>
            <h3>{item.label}</h3>
        </div>
    )
}

export default ShopItem;