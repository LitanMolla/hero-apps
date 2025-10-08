import React from 'react'
import Container from '../Container/Container'
import logo from '../../assets/logo.png'

const Spinner = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-purple-600 animate-bounce" />
      <div className="w-4 h-4 rounded-full bg-pink-500 animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce [animation-delay:-.5s]" />
    </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Spinner