import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit'
import React from 'react'

const Modal = ({ toggleShow, recipe, show, setShow }) => {
  return (
    <MDBModal show={show} setShow={setShow} >
      <MDBModalDialog>
        <MDBModalContent>

          <MDBModalHeader>
            <h5 className='fw-bold'>{recipe.label}</h5>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow} />
          </MDBModalHeader>

          <MDBModalBody>
            <img src={recipe.image} alt={recipe.label} />
            <div className="m-2">
              <h5 className="text-start fw-bold text-muted" style={{ float: 'left' }}>
                Calories:
              </h5>
              <h5 className="text-start">{recipe.calories}Kcal</h5>
              <h5 className="text-start fw-bold text-muted" >
                Ingredients:
              </h5>
              {
                recipe.ingredientLines.map(item => (
                  <li key={item} className="text-start">{item}</li>
                ))
              }
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  )
}

export default Modal