import React, {useState} from 'react'
import {Button, Form, Row, Col} from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'

function SearchBox() {
    const location = useLocation()
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            navigate(`/?keyword=${keyword}`)
        }else{
            navigate(`${location.pathname}`)
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <Form.Control type='text' name='q'
                        onChange={
                            (e) => setKeyword(e.target.value)
                        }
                        className='mr-sm-4 ml-sm-3'></Form.Control>
                </Col>
                <Col>
                    <Button type='submit' variant='outline-success' className='p-2'>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
