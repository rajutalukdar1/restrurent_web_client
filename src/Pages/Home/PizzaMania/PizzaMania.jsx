import "./PizzaMania.css";
import background from "../../../assets/home/chef-service.jpg";
const PizzaMania = () => {
  return (
    <div
      className="text-center flex items-center justify-center w-full"
      style={{
        background: `url(${background})`,
        height: 500,
      }}
    >
      <div className="bg-white h-2/3 w-2/3 flex items-center justify-center">
        <div className="text-black">
          <h3 className="text-3xl ">Pizza Mania</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            facilis distinctio mollitia architecto aperiam ducimus odit
            reiciendis consequuntur quasi cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaMania;
