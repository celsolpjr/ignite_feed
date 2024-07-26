import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/celsolpjr.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Celso Junior</strong>
                            <time title="vinte e quatro de Julho de 2024" dateTime="2024-07-11 13:14:25">Cerca de 1h</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Dev, parabens</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}