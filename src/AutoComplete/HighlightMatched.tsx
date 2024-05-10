import React, { HTMLAttributes } from 'react';

export function HighlightMatched({
  content,
  query,
  className,
  highlightClassName = 'paragraph-sm-heavier'
}: HTMLAttributes<HTMLSpanElement> & {
  query?: string;
  content: string;
  highlightClassName?: string;
}) {
  if (!query) return <span className={className}>{content}</span>;
  const parts = splitByQuery(content, query);
  return (
    <span>
      {parts.map((part, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`${part}-${index}`} className={`${part.toLowerCase() === query.toLowerCase() && highlightClassName} ${className}`}>
          {part}
        </span>
      ))}
    </span>
  );
}

function splitByQuery(content: string, query: string) {
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return content.split(new RegExp(`(${escapedQuery})`, 'gi'));
}
