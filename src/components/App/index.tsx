import { FirebaseAppProvider } from 'reactfire/firebaseApp'
import { SuspenseWithPerf } from 'reactfire/performance'
import 'firebase/firestore'
import 'firebase/performance'

import React from 'react'

import CheckboxGrid from '../CheckboxGrid'
import './styles.css'

const firebaseConfig = { projectId: 'checkbox-mosaic' }

const App: React.FC = () => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
    <SuspenseWithPerf fallback="Loading..." traceId="loadMosaic">
      <CheckboxGrid />
    </SuspenseWithPerf>
  </FirebaseAppProvider>
)

export default App
