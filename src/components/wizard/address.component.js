import React from 'react'
import { TextField, Grid, Typography } from '@material-ui/core'

const AddressComponent = ({ set, values, label }) => {
  const handleChange = name => event => {
    set({ ...values, [name]: event.target.value })
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Name'
          value={values.name}
          onChange={handleChange('name')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Street'
          value={values.street}
          onChange={handleChange('street')}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label='City'
          value={values.city}
          onChange={handleChange('city')}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label='State'
          value={values.state}
          onChange={handleChange('state')}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label='Zip'
          value={values.zip}
          onChange={handleChange('zip')}
        />
      </Grid>
    </Grid>
  )
}

export default AddressComponent
