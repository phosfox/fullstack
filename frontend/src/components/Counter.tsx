import { Component, createSignal, splitProps } from "solid-js"
import { Counter as ICounter } from "../types/index.js"
import { putCounter } from "../api/index.js"
import styles from "./Counter.module.css"

export const Counter: Component<{ counter: ICounter }> = (props) => {
  const [count, setCount] = createSignal(props.counter.count ?? 0n)
  const handleClick = () => {
    setCount(count() + 1n)
    putCounter({
        slug: props.counter.slug,
        created_at: props.counter.created_at,
        updated_at: props.counter.updated_at,
        id: props.counter.id,
      count: count(),
    })
  }
  return (
    <>
      <div class={styles.count}>{count().toString()}</div>
      <button class={styles.button} onClick={handleClick}>
        +1
      </button>
    </>
  )
}
