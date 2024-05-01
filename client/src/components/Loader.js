import React, {useState}from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    let [loading, setLoading] = useState(true);
   

    return (
        <div className="loader-container">
            <div className="sweet-loading justify-content-center myloader">

                <HashLoader
                    color='green'
                    loading={loading}
                
                    size={80}
                 
                    data-testid="loader"
                />
            </div>
        </div>
    );
}

export default Loader;