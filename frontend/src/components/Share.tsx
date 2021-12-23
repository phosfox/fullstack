import { Component } from "solid-js";
import styles from "./Share.module.css"

export const Share: Component<{url?: string}> = (props) => {
    return (
        <>
        <p class={styles.url}>{props.url}</p>
        </>
    )
}