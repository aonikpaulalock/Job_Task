import React from 'react';
import Result from "../../components/Result";
import { results } from "../../data/results";


const Results = () => {
  return (
    <section className="container px-sm-0 px-5" id="result">
      <div className="results-contain">
        <h4 className="banner-title">RESULTS</h4>
        <h1 className="banner-heading">What can you expect?</h1>
      </div>
      <div className="result-grid">
        {
          results.map(result =><Result
            key={result.id}
            data={result}
          ></Result>)
        }
      </div>
    </section>
  );
};

export default Results;