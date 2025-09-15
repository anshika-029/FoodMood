import React from 'react'

const Filter = () => {
  return (
    <div>
      <h2>Filters</h2>

      <div>
        <strong>Taste:</strong>
        <label><input type='checkbox'/> Sweet </label>
        <label><input type='checkbox'/> Salty </label>
        <label><input type='checkbox'/> Spich </label>
        <label><input type='checkbox'/> Sour </label>
      </div>

      <div>
        <strong>Time Taken:</strong>
        <label><input type='checkbox'/>10mins</label>
        <label><input type='checkbox'/>30mins</label>
        <label><input type='checkbox'/>40mins</label>
        <label><input type='checkbox'/>60mins</label>
      </div>

      <div>
        <strong>Cuisine:</strong>
        <label><input type='checkbox'/>Indian</label>
        <label><input type='checkbox'/>Mexican</label>
        <label><input type='checkbox'/>Italian</label>
        <label><input type='checkbox'/>Chinese</label>
      </div>
    </div>
  )
}

export default Filter
