import React, { useState, useCallback, useReducer } from 'react'
import { Card, Typography, TextField, Grid, Button, Box, LinearProgress } from '@material-ui/core'
import AddressComponent from '../components/wizard/address.component'
import WeightComponent from '../components/wizard/weight.component'
import ShippingOptionComponent from '../components/wizard/shiping-options.component'

const ShippingOptions = {
  ground: 1,
  priority: 2
}

const infoReducer = (state, action) => {
  switch (action.type) {
    case 'set-from':
      return ({ ...state, from: action.from })
    case 'set-to':
      return ({ ...state, to: action.to })
    case 'set-weight':
      return ({ ...state, weight: action.weight })
    case 'set-option':
      return ({ ...state, shippingOption: action.shippingOption })
    default:
      throw new Error()
  }
}

const ShippingLabelMaker = ({ addShippingInfo }) => {
  const [step, setStep] = useState(0)
  const initialState = {
    from: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    to: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    weight: 0,
    shippingOption: ShippingOptions.ground
  }

  const [info, dispatch] = useReducer(infoReducer, initialState)
  const setFrom = useCallback((payload) => {
    dispatch({ type: 'set-from', from: payload })
  })
  const setTo = useCallback((payload) => {
    dispatch({ type: 'set-to', to: payload })
  })

  const setWeight = useCallback((weight) => {
    dispatch({ type: 'set-weight', weight })
  })

  const setShippingOption = useCallback((shippingOption) => {
    dispatch({ type: 'set-option', shippingOption })
  })

  const onConfirm = useCallback(() => {
    addShippingInfo(info)
    console.log('INFO =>', info)
    alert('done!')
  })

  const onNext = useCallback(() => {
    setStep(step + 1)
  })
  return (
    <div>
      <h1>Wizard is here!</h1>
      <Card>
        <Box p={2}>
          <Typography>Shipping Label Maker</Typography>
          <Box mt={3} />
          <WizardComponent
            setWeight={setWeight}
            setShippingOption={setShippingOption}
            step={step}
            setFrom={setFrom}
            setTo={setTo}
            info={info}
            onConfirm={onConfirm}
          />
          <Box mt={3}>
            <div style={{ textAlign: 'center' }}>
              <Box m={1}>
                <Button variant='contained' color='secondary' disabled={step === 0} onClick={() => { setStep(step - 1) }}>Previous</Button>
              </Box>
              {step < 4 &&
                <Box m={1}>
                  <Button variant='contained' color='primary' onClick={onNext}>Next</Button>
                </Box>}
            </div>
          </Box>
        </Box>
      </Card>
    </div>
  )
}

const WizardComponent = ({ step, info, setFrom, setTo, setWeight, setShippingOption, onConfirm }) => {
  let Component = null
  if (step === 0) {
    Component = <AddressComponent values={info.from} set={setFrom} label={'Enter the sender\'s address'} />
  } else if (step === 1) {
    Component = <AddressComponent values={info.to} set={setTo} label={'Enter the receiver\'s address'} />
  } else if (step === 2) {
    Component = <WeightComponent weight={info.weight} set={setWeight} />
  } else if (step === 3) {
    Component = <ShippingOptionComponent shippingOption={info.shippingOption} set={setShippingOption} />
  } else if (step === 4) {
    Component = <ConfirmationComponent info={info} onConfirm={onConfirm} />
  }
  return (
    <div>
      <LinearProgress variant='determinate' value={(step + 1) * 20} />
      {Component}
    </div>
  )
}

const ConfirmationComponent = ({ info, onConfirm }) => {
  const shippingRate = 0.40
  const shippingCost = info.weight * shippingRate * (info.shippingOption === ShippingOptions.ground ? 1 : 1.5)
  return (
    <div>
      <h1>Confirmation</h1>
      <div>
        <h3>From:</h3>
        <p>{info.from.name} {info.from.street}</p>
      </div>
      <div>
        <h3>To:</h3>
        <p>{info.to.name} {info.to.street}</p>
      </div>
      <h4>Cost: {shippingCost}</h4>
      <Button variant='contained' color='primary' onClick={onConfirm}>Confirm</Button>
    </div>
  )
}

export default ShippingLabelMaker
