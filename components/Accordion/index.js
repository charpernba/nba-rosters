import { useState } from "react";

export default function Accordion({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-3 pt-0 pb-0">
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer w-full lg:w-1/3 border-b"
      >
        {title}
      </div>
      {expanded && <div className="w-full">{children}</div>}
    </div>
  );
}
