import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'

const WeightComponent = ({ set, weight }) => {
  const setWeight = (event) => {
    set(event.target.value)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Set Shipping Weight</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Weight'
          value={weight}
          onChange={setWeight}
        />
      </Grid>
    </Grid>

  )
}

export default WeightComponent
