import { createSignal } from "solid-js"

export const Counter = () => {
  const [count, setCount] = createSignal(0)
  return (
    <>
      <div>{count()}</div>
      <button onClick={() => setCount(count() + 1)}>+1</button>
    </>
  )
}
