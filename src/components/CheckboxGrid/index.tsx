import React from 'react'

import './styles.css'

const DIMENSIONS = { width: 40, height: 40 }

const CheckboxGrid: React.FC<{}> = props => (
  <div className="CheckboxGrid">
    {Array(DIMENSIONS.width)
      .fill(null)
      .map((_, yIndex) => {
        return Array(DIMENSIONS.height)
          .fill(null)
          .map((_, xIndex) => {
            return (
              <input
                type="checkbox"
                key={`${xIndex},${yIndex}`}
                className="CheckboxGrid__checkbox"
              />
            )
          })
      })}
  </div>
)

export default CheckboxGrid
