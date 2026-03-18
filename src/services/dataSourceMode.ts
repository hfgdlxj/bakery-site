export type DataSourceMode = 'static' | 'api'

const VALID_MODES: DataSourceMode[] = ['static', 'api']

export function getDataSourceMode(): DataSourceMode {
  const mode = import.meta.env.VITE_DATA_SOURCE_MODE
  if (typeof mode === 'string' && VALID_MODES.includes(mode as DataSourceMode)) {
    return mode as DataSourceMode
  }
  return 'static'
}

export function shouldFallbackToStatic(): boolean {
  const value = import.meta.env.VITE_API_FALLBACK_TO_STATIC
  if (typeof value !== 'string') {
    return true
  }
  return value.toLowerCase() !== 'false'
}
