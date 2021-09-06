import {ReactElement} from 'react';

export const PlusSvg = ({
  status,
}: Record<string, string | boolean | ReactElement | ReactElement[]>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"
        fill={status === 'rotate' ? '#f00' : '#fff'}
      />
    </svg>
  );
};
