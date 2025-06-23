import '../../../../css/App.css';
// img content 
import Our01 from '../../../../images/jpg_images/Our01.jpg';
import Our02 from '../../../../images/jpg_images/Our02.jpg';
import Our03 from '../../../../images/jpg_images/Our03.jpg';
import Our04 from '../../../../images/jpg_images/Our04.jpg';
import Arrows from '../../../../images/svg_elements/Arrows/Arrow4.svg';

function BlogPosts() {
    return (
        <>
            <div className="blog-posts-container">
                <div className="blog-post">
                    <img src={Our01} alt="Cactus & Succulent Care Tips" className="blog-post__image" />
                    <div className="blog-post-content">
                        <p className="post-content-p-title">September 12 | Read in 6 minutes</p>
                        <h3 className="post-content-title">Cactus & Succulent Care Tips</h3>
                        <p className="post-content-p">Cacti are succulents are easy care plants for any home or patio.</p>
                        <a href="#" className="post-content-read-more">Read More <img src={Arrows} alt="arrow" /></a>
                    </div>
                </div>
                <div className="blog-post">
                    <img src={Our02} alt="Top 10 Succulents for Your Home" className="blog-post__image" />
                    <div className="blog-post-content">
                        <p className="post-content-p-title">September 13 | Read in 2 minutes</p>
                        <h3 className="post-content-title">Top 10 Succulents for Your Home</h3>
                        <p className="post-content-p">Best in hanging baskets. Prefers medium to high light.</p>
                        <a href="#" className="post-content-read-more">Read More <img src={Arrows} alt="arrow" /></a>
                    </div>
                </div>
                <div className="blog-post">
                    <img src={Our03} alt="Cacti & Succulent Care Tips" className="blog-post__image" />
                    <div className="blog-post-content">
                        <p className="post-content-p-title">September 15 | Read in 3 minutes</p>
                        <h3 className="post-content-title">Cacti & Succulent Care Tips</h3>
                        <p className="post-content-p">Cacti and succulents thrive in containers and because most are...</p>
                        <a href="#" className="post-content-read-more">Read More <img src={Arrows} alt="arrow" /></a>
                    </div>
                </div>
                <div className="blog-post">
                    <img src={Our04} alt="Best Houseplants Room By Room" className="blog-post__image" />
                    <div className="blog-post-content">
                        <p className="post-content-p-title">September 15 | Read in 2 minutes</p>
                        <h3 className="post-content-title">Best Houseplants Room By Room</h3>
                        <p className="post-content-p">The benefits of houseplants are endless. In addition to...</p>
                        <a href="#" className="post-content-read-more">Read More <img src={Arrows} alt="arrow" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPosts;