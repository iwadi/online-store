import Header from '../Header/Header';
import Sidebar from "./Sidebar/Sidebar";

function Address() {
    return (
        <>
            <div className="body-wraper">
                <Header />
                <main>
                    <div className="Section_1">
                        <div className="container">
                            <div className="content-flex">
                                <Sidebar />
                                <div className="form">
                                    <div className="billing-address">
                                        <div className="titles-form">
                                            <h2 className="title-Form">Billing Address</h2>
                                            <h3 className="text-delivery">The following addresses will be used on the checkout page by default.</h3>
                                        </div>
                                        <form action="/billingAddress" method="POST">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="firstName" className="title-form">First Name <span className="required">*</span></label>
                                                    <input type="text" id="firstName" name="firstName" className="form-group-input" placeholder="" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastName" className="title-form">Last Name <span className="required">*</span></label>
                                                    <input type="text" id="lastName" name="lastName" className="form-group-input" placeholder="" required />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="country" className="title-form" >Country / Region <span className="required">*</span></label>
                                                    <select id="country" name="country" className="select-content" required>
                                                        <option value="">Select a country / region</option >
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="city" className="title-form">Town / City <span className="required">*</span></label>
                                                    <input type="text" id="city" name="city" className="form-group-input" placeholder="" required/>
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="streetAddress" className="title-form">Street Address <span className="required">*</span></label>
                                                    <input type="text" id="streetAddress" name="streetAddress" className="form-group-input" placeholder="House number and street name" required />
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
                                                    <input type="email" id="email" name="email" className="form-group-input" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="phone" className="title-form">Phone Number <span className="required">*</span></label>
                                                    <div className="phone-input">
                                                        <div className="country-code">
                                                            <select className="select-phone">
                                                                <option>+966</option>
                                                            </select>
                                                            <input type="phone" id="phone" name="phone" className="form-group-input phone" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* ======================== */}
                                    <button className="Change save">Save Address</button>
                                    {/* ======================== */}
                                    <div className="delivery">
                                        <div className="delivery-left">
                                            <h2 className="title-Form">Shipping Address</h2>
                                            <h3 className="text-delivery">You have not set up this type of address yet.</h3>
                                        </div>
                                        <div className="delivery-rigth">
                                            <div className="ship-different-address">
                                                <label className="ship-to-different-address">
                                                    <input type="checkbox" name="shipping_address" value="different" className="input-ship" />
                                                    <span className="fake"></span>
                                                    <span className="ship-text">Same as billing address</span>
                                                </label>
                                            </div>
                                            <button className="add-button">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Address;