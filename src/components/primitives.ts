import { tv } from "tailwind-variants";

export const title = tv({
  base: "inline font-bold selection:bg-[#dad7cd]/25",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      primary: "text-[#081c15] dark:text-[#dad7cd]",
    },
    size: {
      sm: "text-3xl leading-relaxed lg:text-4xl",
      md: "text-3xl lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "lg",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const button = tv({
  base: "text-white py-1 px-8 rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-primary hover:bg-primary/90",
      secondary:
        "text-primary font-medium hover:bg-zinc-200 border-primary border-1 bg-white",
      success: "bg-green-500 hover:bg-green-700",
    },
    size: {
      sm: "py-1 px-3 text-sm",
      md: "py-1.5 px-4 text-md",
      lg: "py-2 px-6 text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});
