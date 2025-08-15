import React, { FC } from 'react';
import { cn } from "~/lib/utils";

interface MonospaceProps {
  as?: React.ElementType;
  className?: string;
}

export const Monospace: FC<React.PropsWithChildren<MonospaceProps>> = ({
  as,
  className,
  children,
}) => {
  const Component = as || 'span';
  return (
    <Component className={cn(className, 'font-mono text-base')}>{children}</Component>
  );
};

export const Answerize: FC<{ children: string }> = ({ children }) =>
  children.indexOf('\n') > -1 ? (
    // If there is a newline, render as a <pre> block.
    <pre className="answer max-w-fit mx-auto font-mono">{children}</pre>
  ) : (
    <strong className="answer font-mono">{children}</strong>
  );
