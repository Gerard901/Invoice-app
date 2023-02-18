import React from 'react';

const Input = (props) => {
  const { type, label, onChange, css, labelCss, name } = props;

  return (
    <div className={`flex flex-col ${css}`}>
      <label htmlFor='' className={`font-bold text-gray-600 mt-2 ${labelCss}`}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        className='ring-1 ring-gray-300 mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
