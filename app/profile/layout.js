import SubNavBar from '@/components/SubNavBar';
import styles from './layout.module.css';

export default function ProfileLayout({ children }) {
  return (
    <div className={styles.container}>
      <SubNavBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}