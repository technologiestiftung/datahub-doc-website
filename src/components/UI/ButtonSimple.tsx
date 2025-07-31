import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import '../../css/tailwind.css';

interface ButtonType {
  label: string;
  slug: string;
  color?: string;
}

export const ButtonSimple: FC<ButtonType> = ({
  label,
  slug,
  color = 'bg-white',
}) => {
  return (
    <div
      className={`inline-block ${color} border border-berlin-black border-solid`}
    >
      <Link
        to={slug}
        className="flex items-stretch text-berlin-black font-semibold"
      >
        <div className={`px-4 py-3 flex items-center text-base md:text-lg`}>
          {label}
        </div>
      </Link>
    </div>
  );
};
