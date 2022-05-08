import React from 'react';
const Blogs = () => {
    
    return (
        <div className="mt-5 pt-3"  data-aos="fade-up"
        data-aos-duration="3500">
            <h1 className="text-center pt-3">Blogs</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto mt-3 text-center">
                <article className="card py-5 ">
                    <h4>Difference between javascript and nodejs</h4>
                    <p>Javascript is a programming language that is used for writing scripts on the websites.But NodeJS is a Javascript runtime environment.javascript is basically used on the client-side.But NodeJs is used on server side.Javascript  is usully used in frontend development.On the other hand Node is used in server side or backend development.Javascript can add HTML and play with the DOM.But nodejs can't.	</p>
                </article>
                <article className="card py-5">
                    <h4>Difference between sql and nosql databases</h4>
                    <p>SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                </article>
                <article className="card py-5">
                    <h4>what is the purpose of jwt and how does it work</h4>
                    <p>JWT is an open standard used to share security information between two parties.one for client site and other is server site.the full form of jwt is json web token. Each JWT contains encoded JSON objects, including a set of claims.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </article>
                <article className="card py-5">
                    <h4>what is the purpose of jwt and how does it work</h4>
                    <p>Node.js is the greatest tool for building real-time web applications. It provides cross-platform applications which run easily on any web. Mongodb or nosql database are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you are rapidly prototyping, and a few other use cases.</p>
                </article>

            </div>
        </div>
    );
};

export default Blogs;