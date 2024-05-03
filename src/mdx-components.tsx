import type { MDXComponents } from "mdx/types";
import Heading from "@/components/common/heading";
import CodeHeader from "@/components/mdx/code-header";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, className, ...props }) => (
      <Heading.H1 className={`tw-mx-6 ${className}`} {...props}>
        {children}
      </Heading.H1>
    ),
    h2: ({ children, className, ...props }) => (
      <Heading.H2 className={`tw-mt-4 tw-mb-2 ${className}`} {...props}>
        {children}
      </Heading.H2>
    ),
    h3: ({ children, className, ...props }) => (
      <Heading.H3 className={`tw-mt-4 tw-mb-2 ${className}`} {...props}>
        {children}
      </Heading.H3>
    ),
    h4: ({ children, className, ...props }) => (
      <Heading.H4 className={`tw-mt-4 tw-mb-2 ${className}`} {...props}>
        {children}
      </Heading.H4>
    ),
    h5: ({ children, className, ...props }) => (
      <Heading.H5 className={`tw-mt-4 tw-mb-2 ${className}`} {...props}>
        {children}
      </Heading.H5>
    ),
    h6: ({ children, className, ...props }) => (
      <Heading.H6 className={`tw-mt-4 tw-mb-2 ${className}`} {...props}>
        {children}
      </Heading.H6>
    ),
    p: ({ children, className, ...props }) => (
      <p className={`tw-mb-6 ${className}`} {...props}>
        {" "}
        {children}
      </p>
    ),
    a: ({ children, className, ...props }) => (
      <a
        className={`tw-text-blue-700 active:tw-text-blue-700 visited:tw-text-blue-700 hover:tw-text-blue-700 dark:tw-text-blue-500 dark:hover:tw-text-blue-500 dark:active:tw-text-blue-500 dark:visited:tw-text-blue-500 ${className}`}
        {...props}>
        {children}
      </a>
    ),

    CodeHeader,
    ...components,
  };
}
