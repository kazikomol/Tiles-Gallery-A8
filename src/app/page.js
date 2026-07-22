import Banner from "@/components/Banner";
import BrandsLogo from "@/components/shared/BrandsLogo";
import TopFour from "@/components/TopFour";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner/>
      <BrandsLogo/>
      <TopFour/>
      
    </div>
  );
}
