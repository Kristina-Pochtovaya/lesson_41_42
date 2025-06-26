import clsx from 'clsx';
import JSX from 'react';
import styles from './button.module.scss';
import { themes } from '../../common';

type CommonProps = {
  title: string;
  handleClick: () => void;
  theme: keyof typeof themes;
  classNames?: {
    button?: string;
    title?: string;
  };
};

type PropsWithIcon = {
  hasIcon: true;
  icon: JSX.Element;
} & CommonProps;

type PropsWithoutIcon = {
  hasIcon?: false;
  icon?: never;
} & CommonProps;

type ButtonProps = PropsWithIcon | PropsWithoutIcon;

export function Button({
  title,
  handleClick,
  hasIcon = false,
  theme = themes.dark,
  icon,
  classNames,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        styles.base,
        styles[`base__${theme}`],
        classNames?.button
      )}
    >
      {hasIcon && icon}
      <p
        className={clsx(
          styles.title,
          styles[`title__${theme}`],
          classNames?.title
        )}
      >
        {title}
      </p>
    </button>
  );
}
