import { useState } from 'react' 
import { Autocomplete,createFilterOptions, TextField } from '@mui/material'
import { Button } from "@mui/material"
import json from './Components/listofitems.json'
//import SearchList from './SearchList'
import { useNavigate } from "react-router-dom"

const filter = createFilterOptions()

function SearchBar() {
  const [value, setValue] = useState('')
  const [searchShow,setSearchShow] = useState(false)
  const navigate = useNavigate();

  // for testing only
  // const dataListOps = [
  //   {label:"Eggs", id:1, results: [{resid: 0, store: "Wegmans",price: "1.99",date: "01312024"}]},
  //   {label:"Milk", id:2, results: [{resid: 0, store: "Wegmans",price: "7.99",date: "01312024"}]},
  //   {label:"Cheddar Cheese", id:3, results: [{resid: 0, store: "Wegmans",price: "4.99",date: "01312024"}]},
  //   {label:"Sourdough Bread", id:4, results: [{resid:0, store: "Wegmans",price: "6.99",date: "01312024"}]},
  //   {label:"Yogurt", id:5, results: [{resid: 0, store: "Wegmans",price: "3.99",date: "01312024"}]}];


  //const [storage, setStorage] = useState(dataListOps)  

  // storage of options for Autocomplete to use
  const [storage, setStorage] = useState(json.data)  

  // handles the ADD button onclick functionality
  let handleAddClick = () => {
    setStorage(oldArray => [...oldArray,value])
  }
  
  // handles changes to Autocomplete input, if there is no value, don't show search
  // if the new value is a string, set the new value
  let handleOnChange = (event, newValue) => {
    // if there is a new value show the search button otherwise hide
    if (newValue) {
      setSearchShow(true);
    } else {
      setSearchShow(false)
    }

    if (typeof newValue === 'string') {
      setValue({label: newValue})
    } else if (newValue && newValue.inputValue) {
      setValue({
        label: newValue.inputValue
      });
    } else {
      setValue(newValue)
    }
  }

  // custom filter for Auto complete. Adds an "Add object" option if it doesn't exist
  let handleFilterOptions = (options, params) => {
    const filtered = filter(options, params);
    const { inputValue } = params

    const isExisting = options.some((option) => inputValue === option.label.toString().toLowerCase())
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        label: `Search "${inputValue}"`
      })
    }

    return filtered;
  }

  // handles on click of SEARCH button to send to results page
  function handleSearchOnClick() {
    navigate("/results", {state:{value}})
  }

  return (
    <div>
      <div>
      <Autocomplete 
        onChange={handleOnChange}
        filterOptions={handleFilterOptions}
        disablePortal
        clearOnBlur
        handleHomeEndKeys
        selectOnFocus
        id="combo-box"
        options={storage}
        sx={{ width: 300}}
        renderInput={(params) => 
          <TextField 
            {...params} 
            label="Item to search"
            />}/>
      <Button 
        variant="text"
        onClick={handleAddClick}>Add</Button>
      <Button 
        variant="text"
        onClick={handleSearchOnClick}>Search</Button>
      </div>
    </div>
  )
}

export default SearchBar;