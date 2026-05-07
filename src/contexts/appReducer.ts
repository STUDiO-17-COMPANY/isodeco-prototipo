import type { Notification, User } from '@/types/domain'

export interface AppState {
  user: User | null
  sidebarCollapsed: boolean
  notifications: {
    unreadCount: number
    items: Notification[]
  }
}

export type AppAction =
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_USER'; user: User }
  | { type: 'ADD_NOTIFICATION'; notification: Notification }
  | { type: 'CLEAR_NOTIFICATIONS' }

export const initialState: AppState = {
  user: { name: 'Miguel Alves', role: 'Administrador', initials: 'MA' },
  sidebarCollapsed: false,
  notifications: { unreadCount: 1, items: [] },
}

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: {
          unreadCount: state.notifications.unreadCount + (action.notification.read ? 0 : 1),
          items: [action.notification, ...state.notifications.items],
        },
      }
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: { unreadCount: 0, items: [] } }
    default:
      return state
  }
}
