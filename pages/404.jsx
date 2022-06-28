import Link from "next/link";

const NotExisting = () => {
  return (
    <div className="no_existingo">
      <h1>Ooooops......</h1>
      <h1>Something went wrong</h1>
      <h2>This page does not exist!!</h2>
      <h3>
        Lets get you back to the
        <span style={{ color: "red" }}>
          <Link href="/">
            <a> HOME </a>
          </Link>
        </span>
        page!
      </h3>
    </div>
  );
};

export default NotExisting;