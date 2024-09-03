import React from 'react'
import './InputField.css'

function InputField({label, type, name, value, onChange, onBlur, error}){
  return (
    <div className='input-field'>
        <label>{label}</label>
        <input 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
          onBlur={onBlur}
          className={error? 'input-error' : ''}
        />
      {error && <div className="error-text">{error}</div>}

    </div>
  )
}

export default InputField