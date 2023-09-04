import { Card } from '../components/Card'
import { Carousel } from '../components/Carousel'
import { InputSearch } from '../components/InputSearch'
import { Context } from '../context'

function AppUI() {
    const {
        // Logical items
    } = React.useContext(Context);

    return (
        <>
            <div className='App'>
                <InputSearch></InputSearch>
                <section className='CardContainer'>
                    <Card></Card>
                </section>
                <Carousel></Carousel>
            </div>
        </>
    )
}

export { AppUI }
