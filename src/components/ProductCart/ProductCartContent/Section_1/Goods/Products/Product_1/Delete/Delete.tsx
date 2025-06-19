import { useCart } from "../../../../../../../context/CartContext";
import DeleteImg from '../../../../../../../../images/svg_elements/Elements/Delete.svg';

function Delete({ productId }: { productId: number }) {
    const { removeFromCart } = useCart();

    return (
        <button 
            className="Delete" 
            onClick={() => removeFromCart(productId)}
        >
            <img src={DeleteImg} alt="Удалить" />
        </button>
    );
}

export default Delete;