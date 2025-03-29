import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './avatar'

import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://i.pravatar.cc/500" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>

              <time
                datetime="2025-03-28 21:46:23"
                title="28 de março às 21:46h"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário.">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
