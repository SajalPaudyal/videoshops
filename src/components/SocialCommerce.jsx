import visit from "../assets/visits.png";
import kendel from "../assets/kendell.png";
import sales from "../assets/sales.png";
import sirjohn from "../assets/sirjohn.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

export default function SocialCommerce() {
  return (
    <container className="flex flex-col justify-center items-center">
      <section className="max-w-screen-2xl	">
        <div className="flex px-10 h-screen justify-between  relative z-0 -mt-11">
          <div className="flex flex-col justify-center w-2/5 gap-8">
            <h2 className=" text-6xl font-syne ">You are Social Commerce</h2>
            <p className="font-montserrat text-lg">
              Videoshops is a personal commerce platform enabling
              <strong> People & Brands </strong>to ignite marketplaces across
              all social platforms and messaging apps.
            </p>
            <button className="w-fit px-5 py-2 rounded-full bg-primary text-white">
              How It Works
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 relative">
            <div className="flex flex-col gap-5">
              <img src={left} alt="" className="" />
              <img src={sales} alt="" className="" />
              <img src={sirjohn} alt="" className="" />
            </div>
            <div className="flex flex-col gap-5">
              <img src={right} alt="" className="" />
              <img src={kendel} alt="" className="" />
              <img src={visit} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </container>
  );
}
