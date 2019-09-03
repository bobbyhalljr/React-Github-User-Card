import React from 'react';

const Card = props => {
    return (
        <div>
            {props.users.map(user => {
                return (
                <div className='card-container'>
                    <div className='card'>
                        <div className='img-container'>
                            <img src={user.avatar_url} alt='' />
                        </div>
                        <div className='info'>
                            <h2>{user.login}</h2>
                            <h4><a className='link' href={user.html_url}>profile</a></h4>
                            {/* <h4><a className='link' href={user.repos_url}>repositories</a></h4> */}
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Card;