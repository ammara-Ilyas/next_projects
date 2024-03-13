"use client";
import { useEffect, useState } from "react";
import "./imageSearch.css";
import { FaDownload } from "react-icons/fa6";

export default function imageSearch() {
  const [query, setQuery] = useState("");
  const [imgData, setImgData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const searchImage = async (e) => {
    e.preventDefault();
    let accessKey = "t-1PAyfarxTFtxPEUVK62P8ED4rZkE5FFkOou4UhJns";
    // let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=10`;
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=10`
      );
      console.log(response);
      const data = response.json();
      console.log(data.results);
      console.log("clicked");

      setImgData(data.results);
      console.log(imgData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="img-con">
      <div className="box_img">
        <h2>AI Image Generator</h2>
        <form className="search-input" onSubmit={searchImage}>
          <input
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <div className="img-con">
          <div className="grid-container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              imgData.map((item, i) => (
                <div className="grid-item" key={i}>
                  <img src={item.urls.full} alt="Nature Beauty" />
                  <a href={item.urls.full} className="download-btn">
                    <FaDownload />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        <button className="showMore">Show more</button>
      </div>
    </div>
  );
}
