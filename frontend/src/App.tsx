import { Component, createSignal, onMount , Show} from "solid-js"
import { createCounter, getCounter } from "./api/index.js"

import styles from "./App.module.css"

import { Counter as ICounter } from "./types/index.js"

import { Counter } from "./components/Counter.jsx"
import { Share } from "./components/Share.jsx"

const notOnRoot = () => {
  return location.pathname !== "/"
}

const App: Component = () => {
  const [counter, setCounter] = createSignal<ICounter>()
  onMount(async () => {
    if (notOnRoot()) {
      const res = await getCounter(location.pathname.substring(1))
      setCounter(res)
    } else {
      const res = await createCounter()
      setCounter(res)
    }
  })

  return (
    <div class={styles.App}>
      <main class={styles.main}>
        <Show when={counter()}>
        <Counter counter={counter()!!}/>
        <Share url={location.origin + "/" + counter()?.slug} />
        </Show>
      </main>
    </div>
  )
}

export default App
