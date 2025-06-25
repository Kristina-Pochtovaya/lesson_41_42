import { Description } from '../description/description';
import { RegistrationForm } from '../registration_form/registration_form';
import styles from './registration_page.module.scss';

export function RegistrationPage() {
  return (
    <div className={styles.base}>
      <Description />
      <RegistrationForm />
    </div>
  );
}
