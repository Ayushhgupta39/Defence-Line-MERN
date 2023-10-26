import React from 'react'

const Textbox = ({ name, type, id, label, rows }) => {
  return (
    <div className="flex flex-col w-2/5 my-4">
      <label className="font-anton text-3xl" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="bg-transparent outline-none border-b border-b-slate-500 my-2"
        type={type}
        name={name}
        rows={rows}
        required
      />
    </div>
  )
}

export default Textbox