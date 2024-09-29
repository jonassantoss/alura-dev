import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full bg-slate-700 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
    />
  );
}
