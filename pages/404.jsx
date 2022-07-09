import Link from "next/link";

import useTranslation from "next-translate/useTranslation";

const NotExisting = () => {
  let { t, lang } = useTranslation();
  return (
    <div className="no_existingo">
      <div>
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
    </div>
  );
};

export default NotExisting;
