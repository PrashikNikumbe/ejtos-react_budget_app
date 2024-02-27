import React, { useState,useContext } from 'react';
import {AppContext} from "../context/AppContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const CurrencyDropdown = () => {
    const [currency, setCurrency] = useState("£ Pound")
    const { dispatch,remaining  } = useContext(AppContext);

    function changeHandler(e) {
        setCurrency(e)
        let sign = e.split(" ")[0]
        dispatch({
            type: 'CHG_CURRENCY',
            payload: sign,
        });
    }

  return (
    <DropdownButton
      variant="success"
      id="dropdown-item-button"
      title={"Currency" + " (" + currency + ")"}
      style={{ backgroundColor: "#73e69f !important" , marginTop:10}}
      onSelect={changeHandler}
    >
      <Dropdown.Item as="button" eventKey="$ Dollar">$ Dollar</Dropdown.Item>
      <Dropdown.Item as="button" eventKey="£ Pound">£ Pound</Dropdown.Item>
      <Dropdown.Item as="button" eventKey="€ Euro">€ Euro</Dropdown.Item>
      <Dropdown.Item as="button" eventKey="₹ Ruppee">₹ Ruppee</Dropdown.Item>
    </DropdownButton>
  );
};

export default CurrencyDropdown;
