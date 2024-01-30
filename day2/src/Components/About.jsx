
import React from 'react'

const user = {
    name: "thirupathi",
    imageUrl: "https://img.freepik.com/free-photo/group-colorful-birds-are-flying-formation-with-one-being-flown-by-another_188544-8130.jpg?w=740&t=st=1706338553~exp=1706339153~hmac=905f783bc53e776ff664522af1f4318f9d12e98964b75249e4e16957decc4926",
    imageSize: 90,
  };


function About() {
    return (
        <div>
            <h1>{user.name} </h1>
            <img className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    )
}

export default About;


