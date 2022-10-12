import React from 'react';
// import { BeakerIcon } from '@heroicons/react/24/solid';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const notify = () => toast('Here is your toast.');


const ShowQuiz = ({qz}) => {

    



    
    const {question,correctAnswer,options,id} = qz;

    const ques =  question.replace( /(<([^>]+)>)/ig, '');


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
                <p className='text-xl font-bold	'>{ques}</p> 
                <span onClick={() => {toast(`${correctAnswer}`);}}><FontAwesomeIcon icon={faEye} /></span>
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