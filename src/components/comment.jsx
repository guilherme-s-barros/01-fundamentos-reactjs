import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './avatar'

import styles from './comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [applauseCount, setApplauseCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleApplaudComment() {
    setApplauseCount(applauseCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://i.pravatar.cc/500" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>

              <time
                dateTime="2025-03-28 21:46:23"
                title="28 de março às 21:46h"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário.">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplaudComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
