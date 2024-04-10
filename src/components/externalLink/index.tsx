import { ComponentProps, ReactNode } from "react";
import { FiEdit } from "react-icons/fi";

type ExternalLinkProps = ComponentProps<"a"> & {
  text: string;
  icon?: ReactNode;
};

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <a
      {...rest}
      className="text-brandblue text-base uppercase flex items-center justify-center line-clamp-1
                  gap-2 font-semibold transition-all "
    >
      {text}
      {icon ?? <FiEdit size={20} />}
    </a>
  );
}
