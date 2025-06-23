import '../../../../../../css/App.css';

interface CategoriesLiProps {
    size: 'Small' | 'Average' | 'Big';
    count: number;
    isSelected: boolean;
    onClick: () => void;
}

function CategoriesLi({ size, count, isSelected, onClick }: CategoriesLiProps) {
    return (
        <li 
            className={`categories-li ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <a href="#" onClick={(e) => e.preventDefault()}>
                <span>{size}</span> <span>({count})</span>
            </a>
        </li>
    )
}

export default CategoriesLi;