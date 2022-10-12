import React from 'react';
// import { BeakerIcon } from '@heroicons/react/24/solid';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');


const ShowQuiz = ({qz}) => {

    



    
    const {question,correctAnswer,options,id} = qz;

    const handlerOption = (id) =>{
        if (correctAnswer === id) {
            toast('answer is write')
        }
        else{
            toast('Wrong')
        }
    }



    return (
        <div className='bg-amber-200'>
            
           <div>
                <p className='text-xl font-bold	'>{question}</p>
                <div>
                



                </div>
           </div>

      <Toaster />
            {
                options.map(option => <p onClick={() => handlerOption(option)} className='p-1 m-5'>{option}</p>)
            }

           



        </div>
    );
};

export default ShowQuiz;