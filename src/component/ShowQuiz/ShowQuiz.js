import React from 'react';

const ShowQuiz = ({qz}) => {



    
    const {question,correctAnswer,options,id} = qz;

    const handlerOption = (id) =>{
        if (correctAnswer === id) {
            alert('answer is write')
        }
        else{
            alert('Wrong')
        }
    }


    console.log(qz);
    return (
        <div className='bg-amber-200'>
            
            <p className='text-xl font-bold	'>{question}</p>
            {
                options.map(option => <p onClick={() => handlerOption(option)} className='p-1 m-5'>{option}</p>)
                // <p className='p-1 m-5'>{option}</p>
            }
        </div>
    );
};

export default ShowQuiz;