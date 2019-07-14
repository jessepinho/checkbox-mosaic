import React from 'react'
import { useFirebaseApp, useFirestoreDoc } from 'reactfire'

import CheckboxGrid from '.'
import { Checked } from './types'

const CheckboxGridFirebaseContainer: React.FC<{}> = () => {
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

  return <CheckboxGrid checked={checked} toggleCheckbox={toggleCheckbox} />
}

export default CheckboxGridFirebaseContainer
