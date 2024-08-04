import React from 'react';

const Country = ({country}) => {
    const {name}= country;
    return (
        <div>
            <h4>{name.common}</h4>
        </div>
    );
};

export default Country;