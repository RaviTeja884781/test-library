import React from 'react'
import { Button } from 'test-library'
// import 'test-library/dist/index.css'

const App = () => {
  return (
    <div>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ].map((item) => {
        return (
          <Button key={item} variant={item}>
            Test Button
          </Button>
        )
      })}
    </div>
  )
}

export default App
