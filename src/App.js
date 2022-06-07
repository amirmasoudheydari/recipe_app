import React, { useEffect, useState } from "react"
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBNavbar,
  MDBNavbarBrand,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit"
import { useGetRecipeMutation } from "./services/recepiApi"
import Spinner from "./components/Spinner"
import Card from "./components/Card"
import Modal from './components/Modal'

const App = () => {
  const [value, setValue] = useState("")
  const [query, setQuery] = useState("")
  const [health, setHealth] = useState("vegan")
  const [show, setShow] = useState(false)
  const [recipe, setRecipe] = useState({})

  const [getRecipe, { isLoading, data, isSuccess }] = useGetRecipeMutation()
  const options = [
    "alcohol-cocktail",
    "dairy-free",
    "fodmap-free",
    "low-sugar",
    "pork-free",
    "vegan",
  ]

  useEffect(() => {
    getFoodRecipe()
  }, [query, health])

  const getFoodRecipe = async () => {
    await getRecipe({ query, health })
  }

    const toggleShow = (recipe) => {
      setShow(!show)
      setRecipe(recipe)
    }

  return (
    <div
      className="App"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-center">
            <MDBTypography tag="h5" className="fw-bold mt-2">
              🍔 Food Recipe App
            </MDBTypography>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <div className="row g-2 align-items-center mt-2">
        <MDBInput
          wrapperClass="col-auto"
          label="search Recipe"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="col-auto">
          <MDBBtn onClick={() => setQuery(value)}>Search</MDBBtn>
        </div>
        <div className="col-auto">
          <select value={health} onChange={(e) => setHealth(e.target.value)}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {isLoading && <Spinner />}
        {isSuccess &&
          data.hits.map((item, index) => (
            <Card key={index} recipe={item.recipe} toggleShow={toggleShow} />
          ))}
          {
            show && <Modal setShow={setShow} recipe={recipe} toggleShow={toggleShow} show={show}  />
          }
      </MDBRow>
    </div>
  )
}

export default App
