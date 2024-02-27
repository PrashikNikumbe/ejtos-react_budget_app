import React, { useContext, useState } from 'react';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from "./components/CurrencyDropdown"
const App = () => {






    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                    <div className="input-group" >

                        {/* <select style={{backgroundColor:"#73e69f"}}  id="myselect" className="custom-select" onChange={currencyHandler} >
                            <option value="$" name="$ Dollar">Currency ($ Dollar)</option>
                            <option defaultValue value="£" name="£ Pound">Currency (£ Pound)</option>
                            <option value="€" name="€ Euro">Currency (€ Euro)</option>
                            <option value="₹" name="₹ Ruppee">Currency (₹ Ruppee)</option>

                        </select> */}
                        <CurrencyDropdown/>

                        </div>

                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;