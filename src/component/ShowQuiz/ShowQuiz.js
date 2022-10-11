import React from 'react';

const ShowQuiz = ({qz}) => {
    const {question,correctAnswer,options} = qz;

    console.log(qz);
    return (
        <div className='bg-amber-200'>
            
            <p className='text-xl font-bold	'>{question}</p>
            {
                options.map(option => <p className='p-1 m-5'>{option}</p>)
                // <p className='p-1 m-5'>{option}</p>
            }
        </div>
    );
};

export default ShowQuiz;