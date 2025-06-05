import '../../../../../../../css/App.css';

interface CategoriesLiProps {
    category: string;
    count: number;
    onClick: (category: string) => void;
    isActive: boolean;
}

function CategoriesLi({ category, count, onClick, isActive }: CategoriesLiProps) {
    return (
        <li className={`categories-li ${isActive ? 'active' : ''}`}>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                onClick(category);
            }}>
                <span>{category}</span> <span>({count})</span>
            </a>
        </li>
    )
}

export default CategoriesLi;