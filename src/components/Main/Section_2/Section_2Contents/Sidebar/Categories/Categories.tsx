import '../../../../../../css/App.css';
import CategoriesUL from './CategoriesUL/CategoriesUL';

interface CategoriesProps {
    onCategoryChange: (category: string | null) => void;
}

function Categories({ onCategoryChange }: CategoriesProps) {
    return (
        <div className="categories">
            <h2 className="categories-title">Categories</h2>
            <CategoriesUL onCategoryChange={onCategoryChange} />
        </div>
    );
}

export default Categories;