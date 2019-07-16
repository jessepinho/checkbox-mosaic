import React from 'react'
import { useFirebaseApp, useFirestoreDoc } from 'reactfire'

import CheckboxGrid from '.'
import { Checked } from './types'
import { getCoordinatesAsString } from './helpers'
import { GoogleAnalyticsDimensions } from '../../constants'

const CheckboxGridFirebaseContainer: React.FC<{}> = () => {
  const firebaseApp = useFirebaseApp()
  const sandboxRef = firebaseApp
    .firestore()
    .collection('mosaics')
    .doc('sandbox')

  const sandbox = useFirestoreDoc<any>(sandboxRef)
  const checked: Checked = sandbox.data()

  const toggleCheckbox = (x: number, y: number) => {
    const coordinates = getCoordinatesAsString(x, y)
    const value = !checked[coordinates]

    sandboxRef.set({
      ...checked,
      [coordinates]: value,
    })

    window.gtag('event', 'Toggle checkbox', {
      event_category: 'Drawing',
      event_label: coordinates,
      value: value ? 1 : 0,
      [GoogleAnalyticsDimensions.XCoordinate]: x,
      [GoogleAnalyticsDimensions.YCoordinate]: y,
    })
  }

  return <CheckboxGrid checked={checked} toggleCheckbox={toggleCheckbox} />
}

export default CheckboxGridFirebaseContainer
