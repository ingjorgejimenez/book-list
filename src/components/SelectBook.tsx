import React, { useState } from 'react'
interface SelectProps {
  label: string
  options: string[]

  stateChange?: (option: string) => void
}

export const SelectBook = ({ label, options, stateChange }: SelectProps) => {
  const [isSelected, setIsSelected] = useState(false)
  const [select, setSelect] = useState<string>()

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(true)
    setSelect(event.target.value)
    stateChange && stateChange?.(event.target.value)
  }
  return (
    <div className='flex flex-col w-full md:w-min'>
      <label
        htmlFor={label}
        className='mb-3 font-light font-outfit text-12 text-principal-680 sm:text-16 sm:mb-2'
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        onChange={handleOnChange}
        className={`bg-white px-5 border-b-2 border-gray-200 rounded h-9 border-none pr-9 bg-arrow-icon dark:text-gray-600 text-base ${
          isSelected ? '' : 'text-opacity-50'
        } form-select appearance-none`}
        value={select}
      >
        <option key={'Seleccionar'} value='' className='bg-opacity-50'>
          Seleccionar
        </option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
