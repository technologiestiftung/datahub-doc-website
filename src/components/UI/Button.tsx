import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import '../../css/tailwind.css';

interface ButtonType {
  label: string;
  slug: string;
  accented?: boolean;
}

export const Button: FC<ButtonType> = ({ label, slug, accented = true }) => {
  return (
    <div className="inline-block border border-dhub-black border-solid">
      <Link
        to={slug}
        className="flex items-stretch text-dhub-black font-semibold"
      >
        <div className="px-6 py-3 bg-white flex items-center text-sm">
          {label}
        </div>
        <div
          className={`${
            accented && 'bg-dhub-black'
          } px-4 py-3 flex items-center justify-center`}
        >
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${
              accented ? 'stroke-white' : 'stroke-dhub-black'
            }`}
          >
            <path
              d="M0.292969 9.5536H17.4596M9.33826 17.9277L17.743 9.55326L9.33826 1.17969"
              stroke-width="3"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};
