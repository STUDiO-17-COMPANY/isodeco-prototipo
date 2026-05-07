interface PendingApplication {
  id: string
  name: string
  submittedAt: string
}

const mockApplications: PendingApplication[] = [
  { id: 'app-1', name: 'Construções Silva & Filhos', submittedAt: 'Submetido há 2 horas' },
  { id: 'app-2', name: 'Construções Silva & Filhos', submittedAt: 'Submetido há 2 horas' },
  { id: 'app-3', name: 'Construções Silva & Filhos', submittedAt: 'Submetido há 2 horas' },
]

export const PendingApplications = () => (
  <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
    <h3 className="font-bold text-stone-900 mb-6">Aplicações B2B Pendentes</h3>
    <div className="space-y-4">
      {mockApplications.map((app) => (
        <div
          key={app.id}
          className="flex items-center justify-between p-4 bg-stone-50 border border-stone-100 rounded-md"
        >
          <div>
            <p className="font-bold text-sm text-stone-900">{app.name}</p>
            <p className="text-xs text-stone-500">{app.submittedAt}</p>
          </div>
          <button
            type="button"
            className="px-3 py-1 text-xs bg-stone-900 text-white hover:bg-stone-800 rounded-sm transition-colors"
          >
            Rever
          </button>
        </div>
      ))}
    </div>
  </div>
)
