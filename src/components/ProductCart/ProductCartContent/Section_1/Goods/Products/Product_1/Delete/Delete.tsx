import { useCart } from "../../../../../../../context/CartContext";

function Delete({ productId }: { productId: number }) {
    const { removeFromCart } = useCart();

    return (
        <button 
            className="Delete" 
            onClick={() => removeFromCart(productId)}
        >
            <img src="images/svg_elements/Elements/Delete.svg" alt="Удалить" />
        </button>
    );
}

export default Delete;