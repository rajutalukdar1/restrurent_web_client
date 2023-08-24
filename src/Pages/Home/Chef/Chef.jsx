import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cardImg from "../../../assets/home/slide1.jpg";

const Chef = () => {
  return (
    <section>
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try "}
      ></SectionTitle>

      <div>
        <div className="grid md:grid-cols-3">
          <div className="card w-96 bg-base-100">
            <img className="h-80 w-full" src={cardImg} alt="Shoes" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-end">
                <button className="btn glass">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100">
            <img className="h-80 w-full" src={cardImg} alt="Shoes" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-end">
                <button className="btn glass">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100">
            <img className="h-80 w-full" src={cardImg} alt="Shoes" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-end">
                <button className="btn glass">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
