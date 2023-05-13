import { useState } from 'react'
import './checkoutform.css'

const CheckoutForm = ({ onConfirm }) => {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')

const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
    name, phone, email
    }

    onConfirm(userData)
}

return (
    <div className='form-container'>
    <form onSubmit={handleConfirm}> 
        <label className='label-form'>Nombre:
        <input 
            placeholder='Ingrese su nombre...'
            type='text'
            value={name}
            required=""
            className='input-form'
            onChange={({target}) => setName(target.value)}
        />
        </label >
        <label className='label-form'>Telefono:
            <input 
            placeholder='Ingrese numero telefonico...'
            type='text'
            value={phone}
            required=""
            className='input-form'
            onChange={({target}) => setPhone(target.value)}
        />
        </label>
        <label className='label-form'>Email:
        <input 
            placeholder='Ingrese su email...'
            type='email'
            value={email}
            required=""
            className='input-form'
            onChange={({target}) => setEmail(target.value)}
        />
        </label>
        <div className='Label'>
        <button type='submit' className='button-orden'>Crear Orden</button>
        </div>
    </form>
    </div>
)
}

export default CheckoutForm;