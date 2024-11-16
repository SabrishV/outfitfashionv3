import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
    // Product data for dynamic routing
    const products = [
        { id: "plain-white-shirt", name: "Plain White Shirt", price: 290.0, image: "/hero/unsplash_KjRkxQ2NNXA.svg" },
        { id: "denim-jacket", name: "Denim Jacket", price: 690.0, image: "/hero/Rectangle 1.svg" },
        { id: "black-polo-shirt", name: "Black Polo Shirt", price: 490.0, image: "/hero/Rectangle 1 (1).svg" },
        { id: "blue-sweatshirt", name: "Blue Sweatshirt", price: 790.0, image: "/hero/Rectangle 1 (2).svg" },
        { id: "gray-polo-shirt", name: "Gray Polo Shirt", price: 490.0, image: "/hero/Rectangle 1 (9).svg" },
        { id: "red-shirt", name: "Red Shirt", price: 690.0, image: "/hero/Rectangle 1 (10).svg" },
        { id: "polo-white-shirt", name: "Polo White Shirt", price: 290.0, image: "/hero/Rectangle 1 (11).svg" },
        { id: "pink-casual-shirt", name: "Pink Casual Shirt", price: 390.0, image: "/hero/Rectangle 1 (12).svg" },
    ];

    const weeklyPicks = [
        { id: "clothmen", image: "/hero/Rectangle 1 (8).svg" },
        { id: "clothkid", image: "/hero/Rectangle 3 (1).svg" },
        { id: "clothchild", image: "/hero/Rectangle 4 (1).svg" },
        { id: "clothlady", image: "/hero/Rectangle 2 (2).svg" },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="bg-[url('/hero/img_1.svg')] w-full bg-no-repeat bg-cover h-[90vh]">
                <div className="h-[65vh] flex flex-col justify-end w-[95%] items-end">
                    <div className="px-[20px] text-center">
                        <p className="text-[#ffff] text-[50px] font-[700]">STYLIST PICKS BEAT</p>
                        <p className="text-[#ffff] text-[50px] font-[700] mt-[-30px] mb-[50px]">THE HEAT</p>
                        <Link
                            className="text-[#ffff] text-[25px] font-[700] py-[10px] px-[20px] border-2 border-[#ffff] hover:bg-[#ffffff20] transition-colors"
                            href={"/"}
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Discover New Arrivals Section */}
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Discover NEW Arrivals</p>
                <p className="text-[25px] text-[#d3d3d3]">Recently added Shirts!</p>
            </div>
            <div className="flex flex-wrap gap-[20px] justify-center px-[5%]">
                {products.slice(0, 4).map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <Image src={product.image} height={400} width={400} alt={product.name} className="rounded-lg" />
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">{product.name}</p>
                                <p className="text-[#024E82]">₹{product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Weekly Picks Section */}
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Weekly Picks</p>
            </div>
            <div className="flex flex-wrap gap-[20px] justify-center px-[5%]">
                {weeklyPicks.map((item) => (
                    <Link key={item.id} href={`/product/${item.id}`}>
                        <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <Image src={item.image} height={400} width={400} alt={item.id} className="rounded-lg" />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Top Sellers Section */}
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Top Sellers</p>
                <p className="text-[25px] text-[#d3d3d3]">Browse our top-selling products</p>
            </div>
            <div className="flex flex-wrap gap-[20px] justify-center px-[5%]">
                {products.slice(4).map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <Image src={product.image} height={400} width={400} alt={product.name} className="rounded-lg" />
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">{product.name}</p>
                                <p className="text-[#024E82]">₹{product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bottom Button */}
            <div className="flex justify-center my-[50px] text-center">
                <Link
                    href={"/"}
                    className="text-[18px] bg-[#111113] font-[700] py-[15px] px-[25px] rounded-[7px] cursor-pointer text-[#C8BCF6] hover:bg-[#1a1a1a] transition-colors"
                >
                    SHOP NOW
                </Link>
            </div>
        </>
    );
}
