import React from 'react'

import { Checked } from './types'
import './styles.css'

const DIMENSIONS = { width: 40, height: 40 }

const getCoordinates = (xIndex: number, yIndex: number): string =>
  `${xIndex},${yIndex}`

const CheckboxGrid: React.FC<{
  checked?: Checked
  toggleCheckbox: (coordinates: string) => void
}> = ({ checked = {}, toggleCheckbox }) => {
  return (
    <div className="CheckboxGrid">
      {Array(DIMENSIONS.width)
        .fill(null)
        .map((_, yIndex) => {
          return Array(DIMENSIONS.height)
            .fill(null)
            .map((_, xIndex) => {
              const coordinates = getCoordinates(xIndex, yIndex)
              return (
                <input
                  type="checkbox"
                  key={coordinates}
                  className="CheckboxGrid__checkbox"
                  checked={!!checked[coordinates]}
                  onChange={() => toggleCheckbox(coordinates)}
                />
              )
            })
        })}
    </div>
  )
}

export default CheckboxGrid
