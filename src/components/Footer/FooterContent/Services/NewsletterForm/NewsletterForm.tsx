import '../../../../../css/App.css';

function NewsletterForm() {
    return (
        <>
            <form>
                <div className="newsletter-input">
                    <input 
                        className="newsletter-email"
                        id="emailInput"
                        type="email" 
                        placeholder="enter your email..." 
                        required 
                    />
                    <button className="newsletter-button" type="submit">Join</button>
                </div>
            </form>
        </> 
    )
}

export default NewsletterForm;