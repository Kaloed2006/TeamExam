import React from 'react'
import './Select.css'
4
export default function Select({val0, val1, val2, val3, val4}) {
    return (
        <select>
            <option selected disabled value="0">{val0}</option>
            <option value="1">{val1}</option>
            <option value="2">{val2}</option>
            <option value="3">{val3}</option>
            <option value="4">{val4}</option>
        </select>
    )
}