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
      className={`inline-block ${color} border border-berlin-black border-solid group`}
    >
      <Link
        to={slug}
        className="block items-stretch text-berlin-black font-semibold custom-no-underline"
      >
        <div
          className={`px-4 py-3 flex items-center text-base md:text-lg group-hover:bg-berlin-gray`}
        >
          {label}
        </div>
      </Link>
    </div>
  );
};
