import { Counter, toCounter } from "../types/index.js"

const base = "http://localhost:4000/counter"

export async function createCounter(): Promise<Counter> {
  const resp = await fetch(base, { method: "POST" })
  const json = await resp.json()
  return toCounter(json)
}

export async function getCounter(slug: string): Promise<Counter> {
  const resp = await fetch(base + "/" + slug, { method: "GET" })
  const json = await resp.json()
  return toCounter(json)
}

export async function putCounter(counter: Counter): Promise<Counter> {
  const resp = await fetch(base + "/" + counter.slug, {
    method: "PUT",
    body: JSON.stringify({ ...counter, count: counter.count.toString() }),
    headers: { "Content-Type": "application/json" },
  })
  const json = await resp.json()
  return toCounter(json)
}
