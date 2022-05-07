import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 m-1 animate-spin" />
    </div>
  );
}