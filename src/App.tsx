import { AppProvider } from '@/contexts/AppProvider'
import { AppRoutes } from '@/routes'

const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
)

export default App
