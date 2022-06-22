import { UnocssNuxtOptions } from "@unocss/nuxt";
import {
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export const unocss: UnocssNuxtOptions = {
  preflight: false,
  preflights: [
    {
      getCSS: () => `
        html{font-family:'Inter',sans-serif;font-size:16px;line-height:1.15;color:#333333}
        body{margin:0;font-size:14px}
        h1,h2,h3,h4,h5,h6,strong,b{margin:0;font-weight:600;}
        h1{font-size:48px;line-height:68px}
        h2{font-size:32px;line-height:46px}
        h3{font-size:24px;line-height:34px}
        h4{font-size:18px;line-height:24px}
        h5{font-size:14px;line-height:18px}
        h6{font-size:12px;line-height:16px}
        p{margin:0;font-size:14px;line-height:18px}
        button,
        input,optgroup,select,textarea{font-family: inherit}
      `,
    },
  ],
  webFonts: {
    fonts: {
      sans: [
        { name: "Inter", weights: [400, 600] },
        { name: "sans-serif", provider: "none" },
      ],
    },
  },
  theme: {
    breakpoints: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    colors: {
      neutral: {
        DEFAULT: "#eaeaea",
        1: "#fafafa",
        2: "#f5f5f5",
        3: "#eaeaea",
        4: "#d4d4d4",
        5: "#adadad",
        6: "#808080",
        7: "#646464",
        8: "#484848",
        9: "#333333",
      },
      primary: {
        DEFAULT: "#0076ff",
        1: "#cce4ff",
        2: "#a3ceff",
        3: "#0076ff",
        4: "#064c93",
        5: "#0b467a",
      },
      blue: {
        DEFAULT: "#2256ff",
        1: "#eef2ff",
        2: "#c5d3ff",
        3: "#2256ff",
        4: "#0736b4",
        5: "#0d3899",
      },
      teal: {
        DEFAULT: "#3ac5de",
        1: "#e5fbff",
        2: "#bff3fc",
        3: "#3ac5de",
        4: "#218491",
        5: "#23737a",
      },
      green: {
        DEFAULT: "#2ce23c",
        1: "#dbffde",
        2: "#b4fdba",
        3: "#2ce23c",
        4: "#1b8d21",
        5: "#1e7620",
      },
      yellow: {
        DEFAULT: "#ffc60d",
        1: "#fff6d9",
        2: "#ffecb0",
        3: "#ffc60d",
        4: "#9f7607",
        5: "#86610c",
      },
      orange: {
        DEFAULT: "#ff8419",
        1: "#fff1e5",
        2: "#ffdbbc",
        3: "#ff8419",
        4: "#ab4e07",
        5: "#91410d",
      },
      red: {
        DEFAULT: "#ff1919",
        1: "#ffe5e5",
        2: "#ffbcbc",
        3: "#ff1919",
        4: "#ab070d",
        5: "#910d15",
      },
    },
    boxShadow: {
      lv1: "0px 4px 12px rgba(0, 0, 0, 0.04)",
      lv2: "1px 4px 16px rgba(0, 0, 0, 0.08)",
      lv3: "2px 4px 16px rgba(0, 0, 0, 0.12)",
    },
    borderRadius: {
      "0": "0",
      max: "87rem",
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
    },
  },
  shortcuts: [
    [/^row$/, () => "-mx3 flex flex-row flex-wrap", { layer: "components" }],
    [
      /^col(-)?(auto|\d+)?$/,
      ([, , t]) =>
        `min-w-0 px3 ${
          (Number.isInteger(+t) && `basis-${t}/12`) ||
          (t === "auto" && "basis-auto") ||
          "flex-1"
        }`,
      { layer: "components" },
    ],
    [
      /^gutter-(\d+)$/,
      ([, d]) => `-mx-${+d / 2} child:px${+d / 2}`,
      { layer: "utilities" },
    ],
    [/^sd-(\d+)$/, ([, d]) => `shadow-lv${d}`],
    [/^rd-(.*)/, ([, r]) => `rounded${r ? `-${r}` : ""}`],
    [/^lh-(.*)/, ([, r]) => `leading-${r}`],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith("child:")) return matcher;

      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}>*`,
      };
    },
  ],
  safelist: [
    ...["row"],
    ...["", "sm", "md", "lg", "xl"].reduce((breakpoints, b) => {
      breakpoints = [
        // Colors
        ...Array.from(
          { length: 9 },
          (_, i) => `${b ? `${b}:` : b}bg-neutral-${i + 1}`
        ),
        ...[
          "primary",
          "blue",
          "teal",
          "green",
          "yellow",
          "orange",
          "red",
        ].reduce((colors, c) => {
          colors = [
            `${b ? `${b}:` : b}bg-${c}`,
            ...Array.from(
              { length: 5 },
              (_, i) => `${b ? `${b}:` : b}bg-${c}-${i + 1}`
            ),
            ...colors,
          ];
          return colors;
        }, [] as string[]),
        // Grid System
        `${b ? `${b}:` : b}col`,
        `${b ? `${b}:` : b}col-auto`,
        ...["gutter", "col"].reduce((a, c) => {
          a = [
            ...Array.from(
              { length: 12 },
              (_, i) => `${b ? `${b}:` : b}${c}-${i + 1}`
            ),
            ...a,
          ];
          return a;
        }, [] as string[]),
        ...breakpoints,
      ];
      return breakpoints;
    }, [] as string[]),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
};
