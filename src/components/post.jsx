import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './avatar'
import { Comment } from './comment'

import styles from './post.module.css'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Parabéns pelo post!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      comment => comment !== commentToDelete
    )

    setComments(commentsWithoutDeletedOne)
  }

  const Content = () => {
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

  const isCommentTextEmpty = newCommentText.length === 0

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
        <Content />
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.feedbackForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Escreva aqui seu feedback."
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <footer className={styles.commentList}>
        {comments.length === 0 && (
          <span>
            Ninguém comentou ainda 😢. <strong>Que tal ser o primeiro?</strong>
          </span>
        )}

        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </footer>
    </article>
  )
}
