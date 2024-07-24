import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = "Celso Lopes" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint eos, quas magni possimus necessitatibus? Nihil rerum ad exercitationem, esse saepe ipsum soluta ducimus deleniti quaerat totam ratione recusandae culpa." 
          />
        </main>
      </div>
    </div>
  )
}
