import React from 'react'
import { Box, Card, CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
  

function Store(props) {
    
    // newStore.store= i.store
    // newStore.max = ""
    // newStore.min = ""
    // newStore.total = 0
    // newStore.data = 0
    console.log(props.stores)
    
    function getCurrent() {
        return 3.99
    }

    const storeList = props.stores.map((item) => {

        return (     
            <Grid item> 
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5">
                        {item.store}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Current: {getCurrent()}
                    </Typography>
                    <Typography variant="body2">
                        max: ${item.max} min: ${item.min} avg: ${(item.total / item.data).toFixed(2)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        )
    })

    return (
        <Box sx={{ flexGrow:1 }}>
            <Grid container spacing={2}>
                {storeList}
            </Grid>
        </Box>
        //<>{storeList}</>
    )
}

export default Store;