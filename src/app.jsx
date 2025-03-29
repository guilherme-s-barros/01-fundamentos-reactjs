import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

import styles from './app.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal!' },
      {
        type: 'paragraph',
        content: 'Estou muito animado para compartilhar com vocês meu novo projeto. Espero que gostem!'
      },
      { type: 'link', content: 'diego.dev/novoprojeto'},
    ],
    publishedAt: new Date('2025-04-01 10:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Mayk Brito',
      avatarUrl: 'https://github.com/maykbrito.png',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'E aí pessoal!' },
      {
        type: 'paragraph',
        content: 'Queria compartilhar com vocês um artigo que escrevi recentemente. Confiram!'
      },
      { type: 'link', content: 'mayk.dev/artigo'},
    ],
    publishedAt: new Date('2025-04-02 15:30:00'),
  },
  {
    id: 3,
    author: {
      name: 'Clara Silva',
      avatarUrl: 'https://github.com/clarasilva.png',
      role: 'Developer @TechCorp',
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal!' },
      {
        type: 'paragraph',
        content: 'Acabei de finalizar um projeto incrível. Dêem uma olhada!'
      },
      { type: 'link', content: 'clara.dev/novoprojeto'},
    ],
    publishedAt: new Date('2025-04-03 12:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
