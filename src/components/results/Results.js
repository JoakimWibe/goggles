import { useSearchContext } from "../../context/SearchContextProvider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../common/Loader";

const Results = () => {
  const { results, loading, getResults, searchWord } = useSearchContext();
  const location = useLocation();

  useEffect(() => {
    if (searchWord !== "") {
      getResults(`${location.pathname}/q=${searchWord}&num=40`);
    }
  }, [searchWord, location.pathname]);

  if (loading) return <Loader />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="p-5 mx-auto md:w-5/6 grid gap-4 md:grid-cols-2 grid-cols-1">
          {results?.results?.map(({ link, title, description }, index) => (
            <a className="m-5" href={link} key={index}>
              <h2 className="font-bold text-xl mb-2">{title}</h2>
              <p className="mb-2">{description}</p>
              <a href="link" className="text-blue-500">
                {link.length > 30 ? link.substring(0, 30) : link}
              </a>
            </a>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="p-5 mx-auto md:w-5/6 grid gap-6 md:grid-cols-4 grid-cols-2">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a className="mb-2" href={href} key={index}>
              <img className="mb-2 w-full rounded" src={image?.src} alt={title} loading="lazy" />
              <p className="font-bold">{title.length > 30 ? title.substring(0, 30) : title}</p>
            </a>
          ))}
        </div>
      );
    default:
      return <div className="py-5 text-center">An error occured</div>;
  }
};

export default Results;
