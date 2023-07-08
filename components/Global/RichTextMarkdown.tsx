import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";

const RichTextMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[breaks]}
      // eslint-disable-next-line
      children={children}
      className="transition-all max-w-xl "
      components={{
        //   bold
        strong: ({ node, ...props }) => (
          <strong className="font-semibold" {...props} />
        ),
        h1: ({ node, ...props }) => <h1 className="text-5xl" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-4xl" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-3xl" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-2xl" {...props} />,
        h5: ({ node, ...props }) => <h5 className="text-xl " {...props} />,
        h6: ({ node, ...props }) => <h6 className="text-lg" {...props} />,
        p: ({ node, ...props }) => (
          <p className="text-base text-gray-700" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside" {...props} />
        ),
        li: ({ node, ...props }) => <li className="text-base" {...props} />,
        br: ({ node, ...props }) => <br className="my-4" {...props} />,
      }}
    />
  );
};

export { RichTextMarkdown };
