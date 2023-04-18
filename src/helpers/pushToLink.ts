import router from "next/router";

export const pushToLink = (pathname: string): void => {
  router.push(
    {
      pathname,
    },
    undefined,
    { scroll: false }
  );
};
