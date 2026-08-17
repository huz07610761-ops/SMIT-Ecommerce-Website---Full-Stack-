import firstImage from '../assets/images/Frame 32.png'
import secondImage from '../assets/images/Frame 33.png'
import thirdImage from '../assets/images/Frame 34.png'
import fourthImage from '../assets/images/Frame 38.png'
import fifthImage from '../assets/images/Frame 37.png'
import sixthImage from '../assets/images/Frame 39.png'
import seventhImage from '../assets/images/Frame 40.png'
import eightImage from '../assets/images/Frame 36.png'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

export const Product = [
    {
        id: 'pro_01',
        name: "T Shirt with Tape Details",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$240',
        delPrice: '$260',
        Off_Price: '-20%',
        rating_Count: '4.5/',
        img: firstImage,
        // Added Missing Properties
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        colors: ["#4F533E", "#2B4341", "#31344F"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [firstImage, secondImage, thirdImage]
    },
    {
        id: 'pro_02',
        name: "Skinny Fit Jeans",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$180',
        delPrice: '$220',
        Off_Price: '-18%',
        rating_Count: '4.5/',
        img: secondImage,
        // Added Missing Properties
        description: "Classic skinny fit jeans tailored with durable denim, giving you maximum flexibility and modern urban styling.",
        colors: ["#1D242B", "#3A4B5C", "#808080"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [secondImage, thirdImage, fourthImage]
    },
    {
        id: 'pro_03',
        name: "Checkered Shirt",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$150',
        delPrice: '$180',
        Off_Price: '-17%',
        rating_Count: '4.5/',
        img: thirdImage,
        description: "Versatile checkered button-up shirt crafted from 100% cotton, ideal for layering or wearing standalone.",
        colors: ["#800000", "#000080", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [thirdImage, fourthImage, fifthImage]
    },
    {
        id: 'pro_04',
        name: "Sleeve Striped T-Shirt",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$130',
        delPrice: '$160',
        Off_Price: '-19%',
        rating_Count: '4.5/',
        img: fourthImage,
        description: "Trendy sleeve striped tee providing a sporty athletic feel combined with everyday streetwear comfort.",
        colors: ["#D2691E", "#000000", "#FFFFFF"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [fourthImage, fifthImage, sixthImage]
    },
    {
        id: 'pro_05',
        name: "Vertical Striped Shirt",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$212',
        delPrice: '$250',
        Off_Price: '-15%',
        rating_Count: '4.5/',
        img: fifthImage,
        description: "Elegant vertical striped casual shirt that offers a slim profile and lightweight breathability.",
        colors: ["#4682B4", "#708090", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [fifthImage, sixthImage, seventhImage]
    },
    {
        id: 'pro_06',
        name: "Courage Graphic T-Shirt",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$145',
        delPrice: '$180',
        Off_Price: '-20%',
        rating_Count: '4.5/',
        img: sixthImage,
        description: "Bold statement graphic tee designed with vibrant colors and ultra-soft combed cotton.",
        colors: ["#FF4500", "#000000", "#2F4F4F"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [sixthImage, seventhImage, eightImage]
    },
    {
        id: 'pro_07',
        name: "Loose Fit Bermuda Shorts",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$120',
        delPrice: '$150',
        Off_Price: '-20%',
        rating_Count: '4.5/',
        img: seventhImage,
        description: "Comfortable loose-fit Bermuda shorts engineered for summer casual wear and beach outings.",
        colors: ["#556B2F", "#C0C0C0", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [seventhImage, eightImage, firstImage]
    },
    {
        id: 'pro_08',
        name: "Faded Skinny Jeans",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$210',
        delPrice: '$240',
        Off_Price: '-13%',
        rating_Count: '4.5/',
        img: eightImage,
        description: "Premium washed faded jeans offering high-stretch fabric for maximum durability and effortless movement.",
        colors: ["#4169E1", "#1E90FF", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [eightImage, firstImage, secondImage]
    },
    {
        id: 'pro_09',
        name: "Gradient Graphic T-Shirt",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$140',
        delPrice: '$170',
        Off_Price: '-18%',
        rating_Count: '4.5/',
        img: sixthImage,
        description: "Aesthetic gradient artwork printed on premium cotton, designed for youth culture and streetwear fashion.",
        colors: ["#8A2BE2", "#FF1493", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [sixthImage, firstImage, secondImage]
    },
    {
        id: 'pro_10',
        name: "Polo with Tipping Details",
        rating: [FaStar, FaStar, FaStar, FaStar, FaStarHalf],
        price: '$175',
        delPrice: '$200',
        Off_Price: '-13%',
        rating_Count: '4.5/',
        img: firstImage,
        description: "Smart-casual polo shirt featuring contrasting collar tipping and a tailored slim fit.",
        colors: ["#800020", "#000080", "#FFFFFF"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [firstImage, thirdImage, fifthImage]
    }
];

export const categories = [
    {
      title: "Casual",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      className: "col-span-1 md:col-span-4",
    },
    {
      title: "Formal",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      className: "col-span-1 md:col-span-8",
    },
    {
      title: "Party",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
      className: "col-span-1 md:col-span-8",
    },
    {
      title: "Gym",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
      className: "col-span-1 md:col-span-4",
    },
];