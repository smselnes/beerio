import loaderImage from "../../assets/loader.png";

export default function Loader() {
  return (
    <div className="loader">
      <img src={loaderImage} alt="illustration of a bottle" />
      <p>Loading...</p>
    </div>
  );
}
