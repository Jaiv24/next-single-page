import Link from 'next/link';
import styles from './Item.module.css';

export default function Item({ id, text, datetime, author }) {
  return (
    <div className={styles.item}>
      <p className={styles.text}>{text}</p>
      <p className={styles.meta}>
        Posted by {author} on {datetime}
      </p>
      <Link href={`/feed/${id}`} className={styles.link}>
        Item
      </Link>
    </div>
  );
}