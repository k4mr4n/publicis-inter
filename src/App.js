import React, { useState, useCallback } from 'react'

import Routes from './routes/index.route'

function App () {
  const [shippingInfo, setShippingInfo] = useState([])
  const addShippingInfo = useCallback((info) => {
    setShippingInfo([...shippingInfo, info])
  })
  return (
    <Routes shippingInfo={shippingInfo} addShippingInfo={addShippingInfo} />
  )
}

export default App
