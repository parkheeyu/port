import React from 'react'
import { Link, Route, Switch, withRouter } from 'react-router-dom';

const SW3 = () => {
    return (
        <div>
            <div className='my-3 mx-3'>
                <Link to="/sw1">sw융합프로젝트</Link>
                <Link to="/sw2">다학년연구프로젝트</Link>
                <Link to="/sw3">펌웨어개발프로젝트</Link>
            </div>

            <h1>펌웨어개발프로젝트</h1>
        </div>
    )
}

export default SW3