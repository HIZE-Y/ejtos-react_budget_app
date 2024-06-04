import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = Number(event.target.value);
        setNewBudget(value);
        dispatch({ type: 'SET_BUDGET', payload: value });
    }

    return (
<div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">{currency}</span>
                </div>
                <input 
                    type="number" 
                    step="10" 
                    value={newBudget} 
                    onChange={handleBudgetChange}
                    className='form-control'
                />
            </div>
        </div>
    );
};
export default Budget;
