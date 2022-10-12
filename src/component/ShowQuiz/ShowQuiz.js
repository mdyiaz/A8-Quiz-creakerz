import React from 'react';
// import { BeakerIcon } from '@heroicons/react/24/solid';
// import { ToastContainer, toast } from 'react-toastify';



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

    // const notify = () => toast('Here is your toast.');


    return (
        <div className='bg-amber-200'>
            
           <div>
                <p className='text-xl font-bold	'>{question}</p>
                <div>
                
                {/* <BeakerIcon className="h-6 w-6 text-blue-500"/> */}



                </div>
           </div>
            {
                options.map(option => <p onClick={() => handlerOption(option)} className='p-1 m-5'>{option}</p>)
                // <p className='p-1 m-5'>{option}</p>
            }

           

{/* <ToastContainer></ToastContainer> */}


        </div>
    );
};

export default ShowQuiz;