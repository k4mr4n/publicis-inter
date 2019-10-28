import React from 'react'
import { Grid, Typography, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'

const ShippingOptionComponent = ({ set, shippingOption }) => {
  const handleChange = (event) => {
    set(event.target.value)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Set Shipping Option</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <InputLabel>Shipping Options</InputLabel>
          <Select
            value={shippingOption}
            onChange={handleChange}
          >
            <MenuItem value={1}>Ground</MenuItem>
            <MenuItem value={2}>Priority</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

  )
}

export default ShippingOptionComponent
