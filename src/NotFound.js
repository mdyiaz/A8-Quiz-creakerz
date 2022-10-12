import { Link } from "react-router-dom";

const NotFound= () =>{

    return(
        <div className="">
            <h2 className="mb-5">That page cannot be found</h2>
            <Link className="bg-orange-400 p-2 rounded-md hover:bg-green-400	" to={'/'}>Back to the Homa Page</Link>
        </div>
    );
}

export default NotFound;