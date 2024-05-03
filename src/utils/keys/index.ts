const COOKIES = { THEME: "THEME" };

type RouteArgs = {
  params?: URLSearchParams;
};

const ROUTES = {
  HOME: ({ params }: RouteArgs) => `/${params ? `?${params.toString()}` : ""}`,
  BLOG: ({ params }: RouteArgs) => `/blog${params ? `?${params.toString()}` : ""}`,
  custom: ({ pathname, params }: RouteArgs & { pathname: string }) => `${pathname}?${params ? params.toString() : ""}`,
};
export const APP_KEYS = { COOKIES, ROUTES };

const COOKIES_VALUES = {
  THEME: {
    DARK: "dark",
    LIGHT: "light",
  },
} as const;

export const APP_KEYS_VALUES = { COOKIES: COOKIES_VALUES };
