import { useMemo, useReducer, type ReactNode } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { appReducer, initialState } from '@/contexts/appReducer'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
