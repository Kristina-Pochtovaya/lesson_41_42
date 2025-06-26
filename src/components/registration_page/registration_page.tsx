import { useState, useCallback } from 'react';
import { themes } from '../../common';
import { ChangeThemeButton } from '../change_theme_button/change_theme_button';
import { Description } from '../description/description';
import { RegistrationForm } from '../registration_form/registration_form';
import styles from './registration_page.module.scss';
import clsx from 'clsx';

export function RegistrationPage() {
  const [theme, setTheme] = useState(themes.dark);

  const handleClick = useCallback(
    () =>
      setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark)),
    [setTheme]
  );

  return (
    <div className={clsx(styles.base, styles[`base__${theme}`])}>
      <Description />
      <RegistrationForm theme={theme} />
      <ChangeThemeButton
        handleClick={handleClick}
        className={styles.changeThemeButton}
        theme={theme}
      />
    </div>
  );
}
