import { ReactNode } from "react";

export function ContainerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-6xl flex flex-col items-center justify-center mx-auto mb-16">
      {children}
    </div>
  );
}
