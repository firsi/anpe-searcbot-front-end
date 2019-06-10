import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

const override = {
    display: 'block',
    margin: '15vh auto'
   
};

const Loader = (props) => {
    return <div  min-height="100vh" className=" container text-center">
            <DotLoader loading={props.loading} color={"#11B5E4"} css={override}/>
            <h2>Patientez quelques instants, Notre robot collecte les informations</h2>
    </div>
}

export default Loader;