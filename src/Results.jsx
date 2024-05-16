import React from "react";
import { useLocation } from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid"
import Store from './Store'

function Results() {
    // Results is navigated to using router so useLocation for passed state
    const passedState = useLocation();
    //console.log(passedState)

    // Label is name of the food item
    function getLabel() {
        return passedState.state.value.label
    }

    // Columns of Data Grid in Results page
    const columns = [
        { field: 'id', headerName: "ID", width: 70},
        { field: "store", headerName: "Store", width: 150},
        { field: "price", headerName: "Price", width: 75},
        { field: "date", headerName: "Date", width: 100},
    ];

    // Each row is an item from thed passed state mapped to teh columns
    const rows = passedState.state.value.results.map((item) => {
        return {id: item.resid, store: item.store, price: item.price, date: item.date}
    })

    // build an array of objects that hold: store name, max, min, total, and count of data points
    function buildStats() {
        const item = passedState.state.value

        let stores = []
        item.results.map((i) => {
            
            // if store doesn't exist add a new store to the array
            if (!stores.some(e => e.store === i.store)) {
                const newStore = new Object()
                newStore.store= i.store
                newStore.max = ""
                newStore.min = ""
                newStore.total = 0
                newStore.data = 0

                stores.push(newStore)
            }

            // find the store we are looking for
            var result = stores.find(obj => {
                return obj.store === i.store
              })

            // update max and min if needed
            if (result.max < i.price || result.max == "" ) {
                result.max = parseFloat(i.price)
            }
            if (result.min < i.price || result.min == "" ) {
                result.min = parseFloat(i.price)
            }
            
            //update total and data count
            result.total += parseFloat(i.price)
            result.data += 1

        })

        console.log(stores)

        return stores
    }

    function getResults() {
        const stores = buildStats()


        return (
            <div>
                <h2>{getLabel()}</h2>
                {/* <ul>
                    {results}
                </ul> */}
                <div>
                    <Store stores={buildStats()}/>
                </div>
                <h3>History</h3>
                <DataGrid 
                    columns={columns}   
                    rows={rows} 
                    //getRowId={(row) => row.resid}
                    autopageSize={true}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 }
                        },
                        rowGrouping: {
                            model: "store"
                        }
                    }}
                    pageSizeOptions={[5,10]}
                />
            </div>
        )
        
    }

    if (passedState.state == null) {
        return <h1>Results</h1>
    } else {
        //return <h1>FOUND {getLabel()}</h1>
        return (
            <div>
                <ul>{getResults()}</ul>
            </div>
        )
    }
        
}

export default Results;