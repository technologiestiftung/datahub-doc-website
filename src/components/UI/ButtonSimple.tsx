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
  const arrowUrl = '/img/arrow_right_sw25_white.svg'; 

  return (
    <div className={`inline-block ${color} border border-berlin-black border-solid group min-w-[270px]`}>
      <Link
        to={slug}
        className="flex w-full items-stretch text-berlin-black font-semibold custom-no-underline"
      >
        <span className="px-4 py-3 flex items-center text-base md:text-lg group-hover:bg-berlin-gray flex-1">
          {label}
        </span>

        <span className="bg-berlin-black flex items-center justify-center w-12 shrink-0">
          <span
            className="w-5 h-5"
            aria-hidden="true"
            style={{
              backgroundColor: 'white',
              WebkitMask: `url(${arrowUrl}) no-repeat center / contain`,
              mask: `url(${arrowUrl}) no-repeat center / contain`,
            }}
          />
        </span>
      </Link>
    </div>
  );
};
