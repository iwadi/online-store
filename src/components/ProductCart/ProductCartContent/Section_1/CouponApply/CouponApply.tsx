function CouponApply() {
    return (
        <>
            <div className="coupon-apply">
                <h3 className="couponCode">Coupon Apply</h3>
                <div className="coupon-input">
                    <input
                        type="text"
                        id="couponCode"
                        placeholder="Enter coupon code here..."
                    />
                    <button className="coupon-button"> Apply </button>
                </div>
            </div>
        </>
    )
}

export default CouponApply;