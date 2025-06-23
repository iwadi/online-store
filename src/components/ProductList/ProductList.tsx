import { Product } from '../types/types';
// img content
import BarbertonDaisy from '../../images/png_images/BarbertonDaisy.png';
import AngelWingBegonia from '../../images/png_images/AngelWingBegonia.png';
import AfricanViolet from '../../images/png_images/AfricanViolet.png';
import BeachSpiderLily from '../../images/png_images/BeachSpiderLily.png';
import BlushingBromeliad from '../../images/png_images/BlushingBromeliad.png';
import AluminumPlant from '../../images/png_images/AluminumPlant.png';
import BirdsNestFern from '../../images/png_images/BirdsNestFern.png';
import BroadleafLadyPalm from '../../images/png_images/BroadleafLadyPalm.png';

export const Products: Product[] = [
    { 
        id: 1,
        img: BarbertonDaisy,
        name: "Barberton Daisy",
        price: 119.00,
        categories: ["Houseplants"], 
        size: "Average",
    },
    { 
        id: 2, 
        img: AngelWingBegonia,
        name: "Angel Wing Begonia",
        price: 169, 
        categories: ["Houseplants"], 
        size: "Small",
    },
    { 
        id: 3, 
        img: AfricanViolet,
        name: "African Violet", 
        price: 199, 
        categories: ["Popular Plants"], 
        size: "Big",
    },
    { 
        id: 4, 
        img: BeachSpiderLily,
        name: "Beach Spider Lily", 
        price: 129.00, 
        categories: ["Succulents"], 
        size: "Big",
    },
    { 
        id: 5, 
        img: BlushingBromeliad,
        name: "Blushing Bromeliad", 
        price: 139, 
        categories: ["Succulents"], 
        size: "Big", 
    },
    { 
        id: 6, 
        img: AluminumPlant,
        name: "Aluminum Plant", 
        price: 179, 
        categories: ["Small plants"], 
        size: "Average", 
    },
    {
        id: 7, 
        img: BirdsNestFern,
        name: "Bird's Nest Fern",
        price: 99.00, 
        categories: ["Large plants"], 
        size: "Big",
    },
    {
        id: 8, 
        img: BroadleafLadyPalm,
        name: "Broadleaf Lady Palm", 
        price: 59, 
        categories: ["Gardening"], 
        size: "Average",
    },
];