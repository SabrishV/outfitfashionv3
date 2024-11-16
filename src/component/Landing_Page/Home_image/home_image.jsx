import { useRouter } from "next/router";
import Image from "next/image";

const productDetails = {
    "plain-white-shirt": {
        name: "Plain White Shirt",
        price: 290.0,
        description: "Classic t-shirt made of pure cotton, perfect for daily wear.",
        image: "/hero/unsplash_KjRkxQ2NNXA.svg",
    },
    "denim-jacket": {
        name: "Denim Jacket",
        price: 690.0,
        description: "Stylish denim jacket with a modern cut, ideal for casual outings.",
        image: "/hero/Rectangle 1.svg",
    },
    "black-polo-shirt": {
        name: "Black Polo Shirt",
        price: 490.0,
        description: "Elegant and versatile black polo shirt for every occasion.",
        image: "/hero/Rectangle 1 (1).svg",
    },
    "blue-sweatshirt": {
        name: "Blue Sweatshirt",
        price: 790.0,
        description: "Cozy blue sweatshirt made from soft fabric, great for cooler days.",
        image: "/hero/Rectangle 1 (2).svg",
    },
    "gray-polo-shirt": {
        name: "Gray Polo Shirt",
        price: 490.0,
        description: "Sophisticated gray polo shirt, a staple for any wardrobe.",
        image: "/hero/Rectangle 1 (9).svg",
    },
    "red-shirt": {
        name: "Red Shirt",
        price: 690.0,
        description: "Bold red shirt made with high-quality fabric.",
        image: "/hero/Rectangle 1 (10).svg",
    },
    "polo-white-shirt": {
        name: "Polo White Shirt",
        price: 290.0,
        description: "Classic white polo shirt with a clean design.",
        image: "/hero/Rectangle 1 (11).svg",
    },
    "pink-casual-shirt": {
        name: "Pink Casual Shirt",
        price: 390.0,
        description: "Trendy pink casual shirt for a laid-back look.",
        image: "/hero/Rectangle 1 (12).svg",
    },
    "clothmen": {
        name: "Men's Wear",
        price: 1200.0,
        description: "Premium men's clothing for any occasion.",
        image: "/hero/Rectangle 1 (8).svg",
    },
    "clothkid": {
        name: "Kid's Wear",
        price: 800.0,
        description: "Comfortable and stylish clothing for kids.",
        image: "/hero/Rectangle 3 (1).svg",
    },
    "clothchild": {
        name: "Child's Wear",
        price: 600.0,
        description: "Perfect outfit for your child's playful day.",
        image: "/hero/Rectangle 4 (1).svg",
    },
    "clothlady": {
        name: "Women's Wear",
        price: 1000.0,
        description: "Elegant and modern women's fashion.",
        image: "/hero/Rectangle 2 (2).svg",
    },
};

export default function Home_img({ productId }) {
    const product = productDetails[productId];

    if (!product) return <p>Loading...</p>;

    return (
        <div className="px-8 py-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={1200}
                        height={1200}
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-2xl font-semibold text-blue-600">₹{product.price}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
