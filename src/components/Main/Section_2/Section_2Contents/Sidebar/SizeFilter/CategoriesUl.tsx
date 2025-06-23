import '../../../../../../css/App.css';
import CategoriesLi from './CategoriesLi';

interface CategoriesUlProps {
    size: 'Small' | 'Average' | 'Big';
    count: number;
    isSelected: boolean;
    onClick: () => void;
}

function CategoriesUl({ size, count, isSelected, onClick }: CategoriesUlProps) {
    return (
        <>
            <ul className="categories-ul">
                <CategoriesLi 
                    size={size}
                    count={count}
                    isSelected={isSelected}
                    onClick={onClick}
                />
            </ul>
        </>
    )
}

export default CategoriesUl;