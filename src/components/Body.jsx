import React from 'react'

import "../styling/Body.css"

const Body = () => {
    const [allMemesData, setAllMemesData] = React.useState([])
    
    const [memeObject, setMemeObject] = React.useState(
        {
            img: "",
            toptxt: "",
            bottxt: ""
        }
    )  

    function GetMeme(){
        let i = Math.trunc(allMemesData.length*Math.random())
        let url = allMemesData[i].url
        setMemeObject( prevMeme => 
            (
                {
                    ...prevMeme ,
                    img: url
                }
            )
        )
    }

    function handleChange(event){
        setMemeObject(
            prevMeme => {
                return(
                    {
                        ...prevMeme,
                        [event.target.name] : event.target.value
                    }
                )
        }
        )
    }

    React.useEffect(
        () => {
            console.log("Effect ran")
            fetch("https://api.imgflip.com/get_memes")
                .then(result => result.json())
                .then(data => setAllMemesData(data.data.memes))
        }
        ,[]
    )

    return (
        <div className='body'>
            <div className='input'>
                <input 
                    type="text" 
                    placeholder='Top Text'
                    name='toptxt'
                    value={memeObject.toptxt}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder='Bottom Text'
                    name='bottxt'
                    value={memeObject.bottxt}
                    onChange={handleChange}
                />
            </div>
            <button onClick={GetMeme}>Get a new meme image 🖼</button>
            <div className='meme'>
                <img src={memeObject.img} alt="" />
                {memeObject.img && <h1 className='toptxt'>{memeObject.toptxt}</h1>}
                {memeObject.img && <h1 className='bottxt'>{memeObject.bottxt}</h1>}
            </div>
        </div>
    )
}

export default Body