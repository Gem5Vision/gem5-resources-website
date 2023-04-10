import { Form, Button, ListGroup } from "react-bootstrap";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import searchImage from "public/search.png";
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
      console.log(res);
      setSearchPredictions(res);
      setShowPredictions(true);
    } else {
      setShowPredictions(false);
    }
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
          onChange={(e) => onChange(e)}
          onBlur={() => setTimeout(() => setShowPredictions(false), 200)}
          onFocus={(e) => {
            setShowPredictions(true);
          }}
        />
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
        <Button type="submit" style={{ display: "none" }} id="submit" />
        <Image
          src={searchImage}
          alt="Search Icon"
          height="20"
          id="search-icon"
          type="submit"
          onClick={() => document.getElementById("submit").click()}
        />
      </Form>
    </>
  );
});

SearchBox.displayName = "SearchBox";

export default SearchBox;
