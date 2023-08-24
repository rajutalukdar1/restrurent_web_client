import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import FoodCategory from "../FoodCategory/FoodCategory";
import PizzaMania from "../PizzaMania/PizzaMania";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodCategory></FoodCategory>
      <PizzaMania></PizzaMania>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Chef></Chef>
      <Featured></Featured>
    </div>
  );
};

export default Home;
