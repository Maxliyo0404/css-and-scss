import React, { useState } from 'react';

function Main() { // Komponent nomi katta harf bilan boshlandi
    const [name, setName] = useState(""); // Boshlang'ich qiymat bo'sh qator berildi

    function handchange(e) {
        setName(e.target.value); // Inputdagi qiymat state'ga saqlanyapti
    }

    function handleSubmit(e) {
        e.preventDefault(); // Sahifa yangilanishining oldini oladi
        console.log("Kiritilganism:", name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name is {name}</label>
                <input 
                    type="text" 
                    placeholder="name...." 
                    value={name}         // State bilan bog'landi
                    onChange={handchange} 
                />
                <button id="btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Main;