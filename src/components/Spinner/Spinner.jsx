import React from 'react'
import Container from '../Container/Container'
import logo from '../../assets/logo.png'

const Spinner = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <div className="flex justify-center items-center">
                        <div className="w-50 animate-bounce">
                            <img className='w-full' src={logo} alt="Logo" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Spinner