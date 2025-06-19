import { type EvaluateOptions, evaluateSync } from "@mdx-js/mdx";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";

const Reader = ({ markdown }: { markdown: string }) => {
  const MDXContent = useMemo(() => {
    try {
      return markdown
        ? evaluateSync(markdown, {
            ...runtime,
            useMDXComponents,
          } as EvaluateOptions).default
        : null;
    } catch (e) {
      return () => (e as Error).message;
    }
  }, [markdown]);

  return <MDXProvider>{MDXContent ? <MDXContent /> : "error"}</MDXProvider>;
};

export default Reader;
