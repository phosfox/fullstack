export interface Counter {
  count: bigint
  created_at: string
  id: number
  slug: string
  updated_at: string
}

export function toCounter(raw: any): Counter {
    const count = BigInt(raw.count)
    const counter:Counter = {...raw, count}
    return counter
}