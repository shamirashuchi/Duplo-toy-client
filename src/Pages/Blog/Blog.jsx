import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <Header></Header>
            <h2 className='text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p>Access token:</p>
            <p>An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a user's device.</p>
            <p>Refresh token:</p>
            <p>A refresh token is a special token that is used to obtain additional access tokens. </p>
            <p>How do access token work?</p>
            <p>The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p>
            <p>How do  refresh  token work?</p>
            <p>Refresh token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.</p>
            <p>We can store the access token and refresh token in the server-side session.</p>
            <h2  className='text-2xl'>Compare SQL and NoSQL databases?</h2>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h2 className='text-2xl'>What is express js? What is Nest JS?</h2>
            <p>Express js:</p>
            <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
            <p>Nest JS:</p>
            <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.</p>
            <h2  className='text-2xl'>What is MongoDB aggregate and how does it work?</h2>
            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
            <p>The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            <Footer></Footer>
        </div>
    );
};

export default Blog;