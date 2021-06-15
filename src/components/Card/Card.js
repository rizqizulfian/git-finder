import styles from './Card.module.css'

function Card(props) {
    const { user } = props

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <div className={styles.card__image}>
                        <img src={user.avatar_url} alt="" />
                    </div>
                </div>
                <div className={styles.card__info}>
                    <span className={styles.card__infoFullname}>{user.name}</span>
                    <a href={user.html_url}>@{user.login}</a>
                    <div className={styles.card__infoLine}>
                        <span>Following | {user.following}</span>
                        <span>Followers | {user.followers}</span>
                        <span>Repo | {user.public_repos}</span>
                    </div>
                    <span className={styles.card__infoLocation}>{user.location ? user.location : 'Bandung'}</span>
                    <span className={styles.card__infoBio}>{user.bio ? user.bio : `All our dreams can come true, if we have the courage to pursue them.`}</span>
                    <span className={styles.card__footer}>{user.company ? user.company : 'Creative at Superblaise'}</span>
                </div>
            </div>
        </>
    )
}

export default Card