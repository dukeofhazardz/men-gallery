import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Wrapper from "@/components/layout/Wrapper";
import Search from "@/components/ui/Search";
import PlaceholderImg from "@/public/images/body1.jpg"
import ArrowIcon from "@/public/icons/arrow-icon.svg"
import RightButton from "@/components/ui/RightButton";
import LeftButton from "@/components/ui/LeftButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <Wrapper>
        <div className="flex flex-col">
          <div className="flex flex-col gap-1 font-light uppercase mb-5">
            <Link href={"#men"}>
              Men
            </Link>
            <Link href={"#women"}>
              Women
            </Link>
            <Link href={"#kids"}>
              Kids
            </Link>
          </div>

          <Search />

          <div className="grid grid-cols-3 gap-10 my-20">
            <div className="w-full h-80 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold uppercase">New Collection</h1>
                <p className="font-light">Summer</p>
                <p className="font-light">2024</p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <Link href={"#shop"}>
                  <div className="flex flex-row justify-between bg-black/10 px-6 py-3 w-55 max-h-12">
                    <p>Go to Shop</p>
                    <Image src={ArrowIcon} alt="Arrow Icon" />
                  </div>
                </Link>
                <div className="flex flex-row gap-3">
                  <LeftButton />
                  <RightButton />
                </div>
              </div>
            </div>
            <div className="w-full h-80 border border-black/10 overflow-hidden">
              <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Placeholder Image" />
            </div>
            <div className="w-full h-80 border border-black/10 overflow-hidden">
              <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Placeholder Image" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
