import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Wrapper from "@/components/layout/Wrapper";
import Search from "@/components/ui/Search";
import PlaceholderImg from "@/public/images/body1.jpg"
import ArrowIcon from "@/public/icons/right-arrow.svg"
import RightButton from "@/components/ui/RightButton";
import LeftButton from "@/components/ui/LeftButton";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";

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

          {/* New Collection Hero */}
          <div className="grid grid-cols-3 gap-10 my-20">
            <div className="w-full h-85 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold uppercase">New Collection</h1>
                <p className="font-light">Summer</p>
                <p className="font-light">2024</p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <Link href={"/shop"}>
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
            <div className="w-full h-85 border border-black/10 overflow-hidden">
              <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Placeholder Image" />
            </div>
            <div className="w-full h-85 border border-black/10 overflow-hidden">
              <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Placeholder Image" />
            </div>
          </div>
        </div>

        {/* New Collection Section */}
        <div className="flex flex-col w-full my-20">
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-row justify-start items-center">
              <div className="flex flex-col">
                <h3 className="text-5xl font-bold uppercase">New</h3>
                <h3 className="text-5xl font-bold uppercase">This week</h3>
              </div>
              <div>
                <p className="font-bold uppercase">(50)</p>
              </div>
            </div>

            <Link href={'/shop/new'}>See All</Link>
          </div>

          <div className="flex flex-row gap-5 mt-10">
            <ProductCard
              productImage={PlaceholderImg}
              productType={"V-Neck T-Shirt"}
              productName={"Embroidered Seersucker Shirt"}
              productPrice={"$99"}
            />

            <ProductCard
              productImage={PlaceholderImg}
              productType={"V-Neck T-Shirt"}
              productName={"Embroidered Seersucker Shirt"}
              productPrice={"$99"}
            />

            <ProductCard
              productImage={PlaceholderImg}
              productType={"V-Neck T-Shirt"}
              productName={"Embroidered Seersucker Shirt"}
              productPrice={"$99"}
            />

            <ProductCard
              productImage={PlaceholderImg}
              productType={"V-Neck T-Shirt"}
              productName={"Embroidered Seersucker Shirt"}
              productPrice={"$99"}
            />

          </div>
        </div>

        {/* Our Approach Section */}
        <div className="flex flex-col w-full my-50">
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-5xl uppercase">Our Approach to fashion design</h3>
            <div className="w-full max-w-150 mt-3">
              <p className="text-pretty text-sm font-light text-center">at men gallery , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quality exquisite finish</p>
            </div>

            <div className="flex flex-row gap-5 justify-between items-center mt-20 relative">
              <div className="w-70 h-90 border border-black/10 overflow-hidden">
                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Marketing Image" />
              </div>
              <div className="w-70 h-90 border border-black/10 overflow-hidden relative top-20">
                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Marketing Image" />
              </div>
              <div className="w-70 h-90 border border-black/10 overflow-hidden">
                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Marketing Image" />
              </div>
              <div className="w-70 h-90 border border-black/10 overflow-hidden relative top-20">
                <Image className="w-full h-full object-cover" src={PlaceholderImg} alt="Marketing Image" />
              </div>
            </div>
          </div>
        </div>

      </Wrapper>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
