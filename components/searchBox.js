import { Form, Button, ListGroup } from "react-bootstrap";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import searchImage from "@/public/search.png"
import { useRouter } from "next/router";
import { getResources } from "@/pages/api/findresources";
import Autocomplete from "@/pages/api/mongodb/autocomplete";
/**
 * @component
 * @description This component is a search box which allows users to input a search query and submit it to a callback function.
 * @param {object} props - The props object.
 * @param {string} props.query - The search query.
 * @param {function} props.callback - The callback function to be executed upon submitting the search query.
 * @returns {JSX.Element} The JSX element representing the search box.
 */
const SearchBox = forwardRef((props, ref) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const SavedSearchHistoryLimit = 5;
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const historySvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" height="1.25rem" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#ffffff" strokeWidth="0.00024">
    <g strokeWidth="0" />
    <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.288" />
    <g>
      <path fillRule="evenodd" clipRule="evenodd" fill="#0095AF" d="M5.01112 11.5747L6.29288 10.2929C6.68341 9.90236 7.31657 9.90236 7.7071 10.2929C8.09762 10.6834 8.09762 11.3166 7.7071 
                            11.7071L4.7071 14.7071C4.51956 14.8946 4.26521 15 3.99999 15C3.73477 15 3.48042 14.8946 3.29288 14.7071L0.292884 11.7071C-0.0976406 11.3166 -0.0976406 10.6834 0.292884 
                            10.2929C0.683408 9.90236 1.31657 9.90236 1.7071 10.2929L3.0081 11.5939C3.22117 6.25933 7.61317 2 13 2C18.5229 2 23 6.47715 23 12C23 17.5228 18.5229 22 13 22C9.85817 22 7.05429 
                            20.5499 5.22263 18.2864C4.87522 17.8571 4.94163 17.2274 5.37096 16.88C5.80028 16.5326 6.42996 16.599 6.77737 17.0283C8.24562 18.8427 10.4873 20 13 20C17.4183 20 21 16.4183 21 
                            12C21 7.58172 17.4183 4 13 4C8.72441 4 5.23221 7.35412 5.01112 11.5747ZM13 5C13.5523 5 14 5.44772 14 6V11.5858L16.7071 14.2929C17.0976 14.6834 17.0976 15.3166 16.7071 15.7071C16.3166 
                            16.0976 15.6834 16.0976 15.2929 15.7071L12.2929 12.7071C12.1054 12.5196 12 12.2652 12 12V6C12 5.44772 12.4477 5 13 5Z" />
    </g>
  </svg>

  useEffect(() => {
    if (props.query) {
      setSearch(props.query);
    } else {
      setSearch("");
    }
  }, [props.query]);

  useImperativeHandle(ref, () => ({
    getSearchQuery,
  }));

  function getSearchQuery() {
    return search;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPredictions(false);
    console.log(e.target[0].value);
    saveSearch(e.target[0].value);
    if (props.callback) {
      props.callback(e.target[0].value);
    } else {
      router.push({
        pathname: "/resources",
        query: { q: e.target[0].value },
      });
    }
  }

  const [searchPredictions, setSearchPredictions] = useState([]);
  const [showPredictions, setShowPredictions] = useState(false);

  async function onChange(e) {
    setSearch(e.target.value);
    if (e.target.value.length > 2) {
      // const res = await getResources({ query: e.target.value }, 1, 5);
      const res = await Autocomplete(e.target.value, 5);
      setSearchPredictions([]);
      setSearchPredictions(res);
      setShowPredictions(true);
    } else {
      setShowPredictions(false);
    }
  }

  function saveSearch(query) {
    //TODO: Remove on merge with main
    localStorage.setItem("CookieConsent", JSON.stringify({ 'userPreference': 'all' }));

    let userPreference = JSON.parse(localStorage.getItem("CookieConsent")).userPreference;

    if (userPreference !== "all" && userPreference !== "preference") {
      return;
    }

    let searchHistory = localStorage.getItem("SearchHistory");
    let savedSearches = JSON.parse(searchHistory);

    if (searchHistory == null || savedSearches.length === 0) {
      localStorage.setItem("SearchHistory", JSON.stringify([query]));
      return;
    }

    if (savedSearches.length === SavedSearchHistoryLimit) {
      savedSearches.pop();
    }

    savedSearches.unshift(query);
    localStorage.setItem("SearchHistory", JSON.stringify(savedSearches));
  }

  function SearchHistory() {
    //TODO: Remove on merge with main
    localStorage.setItem("CookieConsent", JSON.stringify({ 'userPreference': 'all' }));

    const userPreference = JSON.parse(localStorage.getItem("CookieConsent")).userPreference;
    const savedSearches = JSON.parse(localStorage.getItem("SearchHistory"));

    if ((userPreference !== "all" && userPreference !== "preference") || (savedSearches === null)) {
      return;
    }

    return (
      <ListGroup style={{ position: "absolute", zIndex: 1, width: "100%" }}>
        {savedSearches.map((query, index) => (
          <ListGroup.Item
            className="d-flex align-items-center"
            key={index}
            action
            href="#"
            onClick={(e) => {
              saveSearch(query);
              if (props.callback) {
                props.callback(query);
              } else {
                router.push({
                  pathname: "/resources",
                  query: { q: query },
                });
              }
              setShowSearchHistory(false);
            }}
          >
            <span className="pe-2">{historySvg}</span>
            <span>{query}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }

  return (
    <>
      <Form
        className={"search-form w-100 " + props.className}
        onSubmit={handleSubmit}
      >
        <Form.Control
          type="text"
          placeholder="Search Resources"
          value={search}
          onChange={(e) => {
            onChange(e);
            setShowSearchHistory(false);
          }}
          onBlur={() => setTimeout(() => {
            setShowPredictions(false);
            setShowSearchHistory(false)
          }, 200
          )}
          onFocus={(e) => {
            setShowSearchHistory(true);
            // setShowPredictions(true);
          }}
        />

        {showSearchHistory && (
          <SearchHistory />
        )}

        {showPredictions && (
          <ListGroup style={{ position: "absolute", zIndex: 1, width: "100%" }}>
            {searchPredictions.map((prediction) => (
              <ListGroup.Item
                action
                href="#"
                key={prediction.id}
                onClick={(e) => {
                  if (!showPredictions) return;
                  console.log(prediction.id);
                  let filters = [];
                  /*  let filters = search.split(" ");
                  filters = filters.filter((filter) => {
                    return filter.includes(":");
                  });
                  console.log(filters); */
                  // setSearch(filters.join(" ") + " " + prediction.id);
                  saveSearch(prediction.id);
                  if (props.callback) {
                    props.callback(prediction.id);
                  } else {
                    router.push({
                      pathname: "/resources",
                      query: { q: prediction.id },
                    });
                  }
                  setShowPredictions(false);
                }}
              >
                {prediction.id}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <div id="search-icon" className="d-flex align-items-center justify-content-center" onClick={() => document.getElementById("submit").click()}>
          <Image
            src={searchImage}
            alt="Search Icon"
            height="20"
            type="submit"
          />
        </div>
        <Button type="submit" style={{ display: "none" }} id="submit" role="button" >
          Search
        </Button>
      </Form>
    </>
  );
});

SearchBox.displayName = "SearchBox";

export default SearchBox;
