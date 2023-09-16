import "../assets/styles/home/result.css"
const Result = ({ data }) => {
  const { img, heading, title } = data;
  return (
    <div className="result-card">
      <div className="">
        <div className="image-top">
          <img src={img} alt="image" className="img-fluid" />
        </div>
        <h5 className="result-card-heading">{heading}</h5>
        <p className="result-card-title">{title}</p>
      </div>
      {/* <div>
        <img src={img} alt="image" />
        <h3>{heading}</h3>
        <p>{title}</p>
      </div> */}
    </div>
  );
};

export default Result;