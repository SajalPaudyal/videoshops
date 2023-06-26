import card from "../assets/card.png";

export default function SocialCommerce() {
  return (
    <>
      <div className="flex px-10 h-screen justify-between  relative z-10">
        <div className="flex flex-col justify-center w-2/5 gap-8">
          <h2 className="text-5xl ">You are Social Commerce</h2>
          <p>
            Videoshops is a personal commerce platform enabling
            <strong> People & Brands </strong>to ignite marketplaces across all
            social platforms and messaging apps.
          </p>
          <button className="w-fit px-5 py-2 rounded-full bg-primary text-white">
            How It Works
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 relative">
          <div className="flex flex-col gap-5">
            <img src={card} alt="" className="" />
            <img src={card} alt="" className="h-20" />
            <img src={card} alt="" className="" />
          </div>
          <div className="flex flex-col gap-5">
            <img src={card} alt="" className="" />
            <img src={card} alt="" className="" />
            <img src={card} alt="" className="h-20" />
          </div>
        </div>
      </div>



      <div className="h-screen bg-slate-200">

      </div>
    </>
  );
}
