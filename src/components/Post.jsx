import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/celsolpjr.png" />
                    <div className={styles.autothorInfo}>
                        <strong>Celso Lopes Junior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="vinte e quatro de Julho de 2024" dateTime="2024-07-11 13:14:25">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}