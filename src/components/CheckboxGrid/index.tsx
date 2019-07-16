import React from 'react'

import { Checked } from './types'
import { getCoordinatesAsString } from './helpers'
import './styles.css'

const DIMENSIONS = { width: 40, height: 40 }
const CheckboxGrid: React.FC<{
  checked?: Checked
  toggleCheckbox: (x: number, y: number) => void
}> = ({ checked = {}, toggleCheckbox }) => {
  return (
    <div className="CheckboxGrid">
      {Array(DIMENSIONS.width)
        .fill(null)
        .map((_, y) => {
          return Array(DIMENSIONS.height)
            .fill(null)
            .map((_, x) => {
              const coordinates = getCoordinatesAsString(x, y)
              return (
                <input
                  type="checkbox"
                  key={coordinates}
                  className="CheckboxGrid__checkbox"
                  checked={!!checked[coordinates]}
                  onChange={() => toggleCheckbox(x, y)}
                />
              )
            })
        })}
    </div>
  )
}

export default CheckboxGrid
