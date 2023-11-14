import {
    Row,
    Col

} from 'reactstrap';

import { bookGenres } from '../app/shared/BOOKGENRE';

const HomePage = () => {
    return (
        <div className='container d-flex align-items-center justify-content-center'>
        <Row >
            {bookGenres.map((genre, idx) => {
                return <Col md='2' sm='6' xs='6'>
                            <p key={idx}>{genre}</p>
                    </Col>
            })}
            
        </Row>
        </div>
        
    )
}

export default HomePage;