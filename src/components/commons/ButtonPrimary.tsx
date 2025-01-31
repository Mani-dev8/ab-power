import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentPropsWithoutRef<"button"> & {
  title: string;
};

function ButtonPrimary({ title, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={twMerge(
        `capitalize relative text-primary-700 hover:text-white transition-colors px-8 py-2  isolation-auto z-10 border-2 border-primary-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary-700 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`,
        rest.className
      )}
    >
      {title}
    </button>
  );
}

export default ButtonPrimary;
