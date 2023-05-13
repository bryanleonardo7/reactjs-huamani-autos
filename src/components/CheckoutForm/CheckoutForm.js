import { useState } from 'react'

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
    <div>
    <form onSubmit={handleConfirm}> 
        <label>Nombre:
        <input 
            placeholder='Ingrese su nombre...'
            type='text'
            value={name}
            onChange={({target}) => setName(target.value)}
        />
        </label>
        <label>Telefono:
            <input 
            placeholder='Ingrese numero telefonico...'
            type='text'
            value={phone}
            onChange={({target}) => setPhone(target.value)}
        />
        </label>
        <label>Email:
        <input 
            placeholder='Ingrese su email...'
            type='email'
            value={email}
            onChange={({target}) => setEmail(target.value)}
        />
        </label>
        <div className='Label'>
        <button type='submit'>Crear Orden</button>
        </div>
    </form>
    </div>
)
}

export default CheckoutForm;