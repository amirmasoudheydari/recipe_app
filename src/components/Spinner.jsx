import React from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5 w-100">
      <MDBSpinner grow style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">loading...</span>
      </MDBSpinner>
    </div>
  )
}

export default Spinner