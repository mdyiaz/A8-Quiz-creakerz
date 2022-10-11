import React from 'react';

const Blog = () => {
    return (
        <div>
           
            <h1 className='text-2xl'>Question_1: what is the purpose of react router?</h1>
            <p>Answer_: ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>

            <h2 className='text-2xl'>Question_: How does context api works?</h2>
            <p>Answer_:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

            <h1 className='text-2xl'>What is useref?</h1>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    );
};

export default Blog;