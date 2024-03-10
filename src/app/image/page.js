"use client";
import { useEffect, useState } from "react";
import "./imageSearch.css";
export default function imageSearch() {
  const [query, setQuery] = useState();
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    let accessKey = "VG4HY3iiinchcwaxgyEpZ7A7ogG81UOWZkdV0GomubM";
    let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
    const fetchData = async () => {
      const response = await fetch(url);
      let data = await response.json();
      console.log(data);
    };
  });
  return (
    <div className="container_img">
      <div className="box_img">
        <h2>AI Image Generator</h2>
        <div className="search-input">
          <input type="text" className="input" />
          <button className="btn">Search</button>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1501908734255-16579c18c25f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYmVhdXR5fGVufDB8fDB8fHww"
              alt="nature Beauty"
            />
            <a href="#" className="download-btn">
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
      <button className="showMore">Show more</button>
    </div>
  );
}
