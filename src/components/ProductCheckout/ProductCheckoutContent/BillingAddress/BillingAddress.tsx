function BillingAddress() {
    return (
        <>
            <div className="billing-address">
                <h2 className="title-Form">Billing Address</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName" className="title-form">First Name <span className="required">*</span></label>
                        <input type="text" id="firstName" name="firstName" className="form-group-input" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="title-form">Last Name <span className="required">*</span></label>
                        <input type="text" id="lastName" name="lastName" className="form-group-input" placeholder=""/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="country" className="title-form">Country / Region <span className="required">*</span></label>
                        <select id="country" name="country" className="select-content">
                            <option value="">Select a country / region</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="title-form">Town / City <span className="required">*</span></label>
                        <input type="text" id="city" name="city" className="form-group-input" placeholder="" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="streetAddress" className="title-form">Street Address <span className="required">*</span></label>
                        <input type="text" id="streetAddress" name="streetAddress" className="form-group-input" placeholder="House number and street name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetAddress" className="title-form transparent">ffff</label>
                        <input type="text" id="apartment" name="apartment" className="form-group-input" placeholder="Appartment, suite, unit, etc. (optional)" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="state" className="title-form">State <span className="required">*</span></label>
                        <select id="state" name="state" className="select-content">
                            <option value="">Select a state</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip" className="title-form">Zip <span className="required">*</span></label>
                        <input type="text" id="zip" name="zip" className="form-group-input" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email" className="title-form">Email address <span className="required">*</span></label>
                        <input type="email" id="email" name="email" className="form-group-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="title-form">Phone Number <span className="required">*</span></label>
                        <div className="phone-input">
                            <div className="country-code">
                                <select className="select-phone">
                                    <option>+966</option>
                                </select>
                            </div>
                            {/* <input type="tel" id="phone" name="phone" className="form-group-input" /> */}
                        </div>
                    </div>
                </div>

                <div className="ship-different-address">
                    <label className="ship-to-different-address">
                        <input type="checkbox" name="shipping_address" value="different" className="input-ship" />
                        <span className="fake"></span>
                        <span className="ship-text">Ship to a different address?</span>
                    </label>
                </div>

                <div className="order-notes">
                    <label htmlFor="orderNotes" className="title-order">Order notes (optional)</label>
                    <textarea id="orderNotes" name="orderNotes" className="textarea-order"></textarea>
                </div>
            </div>
        </>
    )
}

export default BillingAddress;