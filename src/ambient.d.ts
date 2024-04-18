/// <reference types="vite/client" />

declare module "*.mdx" {
  const Component: React.ComponentType<{ children?: never }>;
  export default Component;
}
