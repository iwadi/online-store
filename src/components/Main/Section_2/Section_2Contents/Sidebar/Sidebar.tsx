import '../../../../../css/App.css';
import { Product } from '../../../../types/types';
import Categories from './Categories/Categories';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter/SizeFilter';
import SuperSale from './SuperSale';

interface SidebarProps {
    onPriceChange: (min: number, max: number) => void;
    onCategoryChange: (category: string | null) => void;
    onSizeChange: (size: string | null) => void;
    products: Product[];
}

function Sidebar({ onPriceChange, onCategoryChange, onSizeChange, products }: SidebarProps) {
    return (
        <aside className="sidebar">
            <div className="div-sidebar">
                <Categories onCategoryChange={onCategoryChange} />
                <PriceFilter onPriceChange={onPriceChange} />
                <SizeFilter onSizeChange={onSizeChange} products={products} />
            </div>
            <div className="content-SuperSale">
                <SuperSale />
            </div>
        </aside>
    );
}

export default Sidebar;