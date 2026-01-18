import { type FC } from 'react';
// css
import styles from './WarningMessage.module.css';

const WarningMessage: FC = () => {
  return (
    <div className={styles.warningMessageWrapper}>
      <div className={styles.container}>
        <div className={styles.loader}>
          <span className={styles.box}></span>
          <span className={styles.box}></span>
          <span className={styles.box}></span>
          <span className={styles.box}></span>
          <span className={styles.box}></span>
        </div>
        <p className={styles.content}>
          Pay Crewは、サービスを終了しました。そのため、予告なくデータを消滅させる可能性があります。 これらを含む「Pay
          Crew」の利用について、一切の責任を負いかねますのでご了承ください
        </p>
      </div>
    </div>
  );
};

export default WarningMessage;
