import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './avatar'
import { Comment } from './comment'

import styles from './post.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const Posts = () => {
    return content.map((line) => {
      if (line.type === 'paragraph') {
        return <p key={line.content}>{line.content}</p>
      } else if (line.type === 'link') {
        return (
          <p key={line.content}>
            <a href="#">{line.content}</a>
          </p>
        )
      }
    })
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedAtRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <Posts />
      </div>

      <form className={styles.feedbackForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva aqui seu feedback." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <footer className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </footer>
    </article>
  )
}
