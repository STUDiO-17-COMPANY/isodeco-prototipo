import { useCallback, useEffect, useRef, useState } from 'react'

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
  refetch: () => void
}

export function useAsync<T>(fn: () => Promise<T>, deps: ReadonlyArray<unknown> = []): AsyncState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableFn = useCallback(fn, deps)

  const run = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await stableFn()
      if (mountedRef.current) setData(result)
    } catch (err) {
      if (mountedRef.current) setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, [stableFn])

  useEffect(() => {
    void run()
  }, [run])

  return { data, loading, error, refetch: run }
}
