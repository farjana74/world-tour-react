import React from 'react';

const Country = ({country}) => {
    const {name,flags}= country;
    return (
        <div>
            <h4>{name?.common}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;