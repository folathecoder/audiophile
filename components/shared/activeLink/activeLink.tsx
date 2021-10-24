import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }): JSX.Element => {
  //TODO: One-Time function that triggers prefetching of pages
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  //TODO: Prevent page from reloading and correctly redirect to the desired page
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  //TODO: Check if the current path is the same as the router path
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
