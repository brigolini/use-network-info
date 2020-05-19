import React from 'react'

import { usePublicIp } from 'use-network-info'

const App = () => {
  const ip = usePublicIp(true,false)
  return (
    <div>
      My ip is: {ip}
    </div>
  )
}
export default App
