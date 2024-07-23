import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author = "Celso Lopes" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sint eos, quas magni possimus necessitatibus? Nihil rerum ad exercitationem, esse saepe ipsum soluta ducimus deleniti quaerat totam ratione recusandae culpa." 
      />
      <Post 
        author="Junior"
        content="Novo post"
      />
    </div>
  )
}
