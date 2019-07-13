import React from 'react'
import { useFirebaseApp, useFirestoreDoc } from 'reactfire'

import './styles.css'

const DIMENSIONS = { width: 40, height: 40 }

interface Checked {
  [coordinates: string]: boolean
}

const getCoordinates = (xIndex: number, yIndex: number): string =>
  `${xIndex},${yIndex}`

const CheckboxGrid: React.FC<{}> = props => {
  const firebaseApp = useFirebaseApp()
  const sandboxRef = firebaseApp
    .firestore()
    .collection('mosaics')
    .doc('sandbox')

  const sandbox = useFirestoreDoc<any>(sandboxRef)
  const checked: Checked = sandbox.data()

  const toggleCheckbox = (coordinates: string) => {
    sandboxRef.set({
      ...checked,
      [coordinates]: !checked[coordinates],
    })
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
