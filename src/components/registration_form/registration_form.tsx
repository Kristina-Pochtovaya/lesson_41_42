import { themes } from '../../common';
import { GoogleIcon } from '../../icons/google_icon';
import { Button } from '../button/button';
import { Input, inputTypes } from '../input/input';
import styles from './registration_form.module.scss';

export function RegistrationForm() {
  return (
    <div className={styles.base}>
      <div className={styles.title}>
        <h3> Create an account</h3>
        <p>Let’s get started with your 30 days free trial</p>
      </div>

      <div className={styles.userData}>
        <Input id="name" title="Name" />
        <Input id="email" title="Email" type={inputTypes.email} />
        <Input id="password" title="Password" type={inputTypes.password} />
      </div>

      <div className={styles.buttons}>
        <Button title="Create Account" />
        <Button
          theme={themes.light}
          title="Sign up with Google"
          hasIcon={true}
          icon={<GoogleIcon className={styles.google} />}
        />
      </div>

      <div className={styles.footer}>
        <p>Already have an account?</p>
        <a href="#">Sign in</a>
      </div>
    </div>
  );
}
