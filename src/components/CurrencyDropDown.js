import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="currency" style={{ marginRight: '10px' }}>Currency: </label>
            <select
                id="currency"
                value={currency}
                onChange={handleCurrencyChange}
                className='custom-select'
                style={{ width: '150px' }}
            >
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
