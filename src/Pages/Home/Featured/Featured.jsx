import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <section>
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>

      <div className="md:flex">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 25, 2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            perspiciatis consequatur quia ipsa itaque at. Quas cum provident
            dicta ipsum inventore ab recusandae, harum necessitatibus
            reiciendis, distinctio nam illum temporibus praesentium ad. Dolore,
            animi! Unde hic a fuga, ab, natus rem error qui quia iure maiores
            temporibus officiis omnis animi!
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
