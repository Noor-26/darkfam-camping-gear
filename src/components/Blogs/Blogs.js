
const Blogs = () => {
    
    return (
        <div className="mt-5 pt-3"  data-aos="fade-up">
            <h1>Blogs</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-3">
                <articl className="card py-5">
                    <h4>Difference between javascript and nodejs</h4>
                    <p>Javascript is a programming language that is used for writing scripts on the websites.But NodeJS is a Javascript runtime environment.javascript is basically used on the client-side.But NodeJs is used on server side.Javascript  is usully used in frontend development.On the other hand Node is used in server side or backend development.Javascript can add HTML and play with the DOM.But nodejs can't.	</p>
                </articl>
                <article className="card py-5">
                    <h4>Difference between sql and nosql databases</h4>
                    <p></p>
                </article>
                <article className="card py-5">
                    <h4>what is the purpose of jwt and how does it work</h4>
                    <p></p>
                </article>

            </div>
        </div>
    );
};

export default Blogs;