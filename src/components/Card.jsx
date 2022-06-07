import {
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit"
import React from "react"

const Card = ({ recipe ,toggleShow }) => {
  return (
    <>
      <MDBCol>
        <MDBCardGroup>
          <MDBCard className="h-100 mt-2 d-sm-flex">
            <MDBCardImage
              src={recipe.image}
              alt={recipe.label}
              onClick={() => toggleShow(recipe)}
              position="top"
              style={{
                cursor: "pointer",
              }}
            />
            <MDBCardBody>
              <MDBTypography tag="h5">{recipe.label}</MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBCol>
    </>
  )
}

export default Card
