import '../../../../css/App.css';
import BlogPosts from './BlogPosts'

function BlogSection() {
    return (
        <>
            <div className="blog-section">
                <h2 className="blog-section-title">Our Blog Posts</h2>
                <p className="blog-section-intro">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                <BlogPosts />
            </div>
        </>
    )
}

export default BlogSection;