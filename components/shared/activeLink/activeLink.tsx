import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }): JSX.Element => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          margin: "0",
          padding: "0",
          color: isCurrentPath ? "hsl(22, 65%, 57%)" : "hsl(0, 0%, 95%)",
        }}
      >
        {children}
      </a>
    </>
  );
};

export default withRouter(ActiveLink);
