// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <div className='card'>
            {/*
                - Buat container yang isinya 2 bagian, gambar dan text
                - Buat gambar, border radius bikin bulet
                - Buat text, bikin 3 sub bagian : nama, telpon, email            
            */}
            <figure>
                <img src={data.photo} alt={data.name} className='foto' />
            </figure>
            <section className='biodata'>
                <h2>{data.name}</h2>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </section>
        </div>
    )
}

export default Contact;