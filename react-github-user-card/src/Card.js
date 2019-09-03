import React from 'react';

const Card = props => {
    return (
        <div>
            {props.users.map(user => {
                return (
                <div className='card-container'>
                    <div className='card'>
                        <div className='img-container'>
                            <img src={user.avatar_url} />
                        </div>
                        <div className='info'>
                            <h3>{user.login}</h3>
                            <h4>{user.url}</h4>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Card;