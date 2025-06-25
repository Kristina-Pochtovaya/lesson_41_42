import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

export const inputTypes = {
  text: 'text',
  email: 'email',
  password: 'password',
} as const;

export type InputProps = {
  id: string;
  title: string;
  initilaValue?: string;
  type?: keyof typeof inputTypes;
  className?: string;
};

export function Input({
  id,
  title,
  type = inputTypes.text,
  initilaValue = '',
  className,
}: InputProps) {
  const [value, setValue] = useState(initilaValue);

  return (
    <div className={clsx(styles.base, className)}>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
}
