import { FirebaseAppProvider } from 'reactfire/firebaseApp'
import { SuspenseWithPerf } from 'reactfire/performance'
import 'firebase/firestore'
import 'firebase/performance'

import React from 'react'

import CheckboxGridFirebaseContainer from '../CheckboxGrid/CheckboxGridFirebaseContainer'
import './styles.css'
import CheckboxGrid from '../CheckboxGrid'

const firebaseConfig = { projectId: 'checkbox-mosaic' }

const App: React.FC = () => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
    <SuspenseWithPerf
      fallback={<CheckboxGrid toggleCheckbox={() => {}} />}
      traceId="loadMosaic"
    >
      <CheckboxGridFirebaseContainer />
    </SuspenseWithPerf>
  </FirebaseAppProvider>
)

export default App
