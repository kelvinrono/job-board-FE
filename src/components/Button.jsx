import React from 'react'
import './Button.css'

function Button({children, onClick, type='button', className=''}) {
    
  return (
    <button onClick={onClick} type={type} className={`button ${className}`}>
        {children}
    </button>
  );
};

export default Button