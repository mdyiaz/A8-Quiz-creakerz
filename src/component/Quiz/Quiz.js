import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            
            {
                quiz.data.questions.map(qz => <ShowQuiz key={qz.id} qz={qz}></ShowQuiz>)
            }


            
            
        </div>
    );
};

export default Quiz;