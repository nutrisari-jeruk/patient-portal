import { FlatCompat } from "@eslint/eslintrc";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import pluginImport from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore generated and vendor directories
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/.vercel/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/public/**",
    ],
  },
  // Base Next.js + TypeScript + a11y rules
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ),

  // Project rules and plugins
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      import: pluginImport,
      "react-hooks": reactHooks,
      "@typescript-eslint": tsEslintPlugin,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      // Enable TS path alias resolution (e.g., @/*)
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Type hygiene
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" }
      ],

      // Import hygiene
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index", "object"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          warnOnUnassignedImports: true,
        },
      ],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
