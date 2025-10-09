import Container from '../Container/Container'
import './Spinner.css'
const Spinner = () => {
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <div className="flex justify-center items-center">
                        <div className="container">
                            <div className="item item-1"></div>
                            <div className="item item-2"></div>
                            <div className="item item-3"></div>
                            <div className="item item-4"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Spinner;