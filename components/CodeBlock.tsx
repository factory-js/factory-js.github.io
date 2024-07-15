type Props = {
  code: string;
};

export const CodeBlock = ({ code }: Props) => {
  return (
    <div
      className="code-block [&>pre]:overflow-auto [&>pre]:h-full [&>pre:not([data-theme])]:p-0 [&>pre>code>.line]:p-0 [&>pre>code>.line]:px-6 [&>pre>code>.line]:min-h-5 h-full"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
