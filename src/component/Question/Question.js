import React from 'react';

const Question = () => {
    return (
        <div >
        <div>
                <h3>How does react work</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
        </div>
        <div>
                <h3>Props vs State</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
        </div>
        <div>
                <h3>Uses of Useeffect</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
        </div>
    );
};

export default Question;