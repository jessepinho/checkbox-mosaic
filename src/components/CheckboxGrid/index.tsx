import React, { useState } from 'react'

import './styles.css'

const DIMENSIONS = { width: 40, height: 40 }

interface Checked {
  [coordinates: string]: boolean
}

const getCoordinates = (xIndex: number, yIndex: number): string =>
  `${xIndex},${yIndex}`

const CheckboxGrid: React.FC<{}> = props => {
  const [checked, setChecked] = useState<Checked>({})

  const toggleCheckbox = (coordinates: string) => {
    setChecked(currentChecked => ({
      ...currentChecked,
      [coordinates]: !currentChecked[coordinates],
    }))
  }

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
