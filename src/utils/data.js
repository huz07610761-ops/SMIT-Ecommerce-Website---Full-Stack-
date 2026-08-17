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
        name: "T-Shirt with Tape Details",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$240',
        delPrice: '$260',
        Off_Price: '-20%',
        rating_Count: '4.5/5',
        img: firstImage
    },
    {
        id: 'pro_02',
        name: "Skinny Fit Jeans",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$180',
        delPrice: '$220',
        Off_Price: '-18%',
        rating_Count: '4.5/5',
        img: secondImage
    },
    {
        id: 'pro_03',
        name: "Checkered Shirt",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$150',
        delPrice: '$180',
        Off_Price: '-17%',
        rating_Count: '4.5/5',
        img: thirdImage
    },
    {
        id: 'pro_04',
        name: "Sleeve Striped T-Shirt",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$130',
        delPrice: '$160',
        Off_Price: '-19%',
        rating_Count: '4.5/5',
        img: fourthImage
    },
    {
        id: 'pro_05',
        name: "Vertical Striped Shirt",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$212',
        delPrice: '$250',
        Off_Price: '-15%',
        rating_Count: '4.5/5',
        img: firstImage
    },
    {
        id: 'pro_06',
        name: "Courage Graphic T-Shirt",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$145',
        delPrice: '$180',
        Off_Price: '-20%',
        rating_Count: '4.5/5',
        img: sixthImage
    },
    {
        id: 'pro_07',
        name: "Loose Fit Bermuda Shorts",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$120',
        delPrice: '$150',
        Off_Price: '-20%',
        rating_Count: '4.5/5',
        img: seventhImage
    },
    {
        id: 'pro_08',
        name: "Faded Skinny Jeans",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$210',
        delPrice: '$240',
        Off_Price: '-13%',
        rating_Count: '4.5/5',
        img: secondImage
    },
    {
        id: 'pro_09',
        name: "Gradient Graphic T-Shirt",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$140',
        delPrice: '$170',
        Off_Price: '-18%',
        rating_Count: '4.5/5',
        img: sixthImage
    },
    {
        id: 'pro_10',
        name: "Polo with Tipping Details",
        rating: [FaStar,FaStar,FaStar,FaStar,FaStarHalf],
        price: '$175',
        delPrice: '$200',
        Off_Price: '-13%',
        rating_Count: '4.5/5',
        img: firstImage
    }
];

export const categories = [
    {
      title: "Casual",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop", // Replace with your image URL
      className: "col-span-1 md:col-span-4",
    },
    {
      title: "Formal",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop", // Replace with your image URL
      className: "col-span-1 md:col-span-8",
    },
    {
      title: "Party",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop", // Replace with your image URL
      className: "col-span-1 md:col-span-8",
    },
    {
      title: "Gym",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop", // Replace with your image URL
      className: "col-span-1 md:col-span-4",
    },
  ]