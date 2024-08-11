import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.container}>
      <GlobalStyle/>
      <Header/>
    </div>
  )
}
