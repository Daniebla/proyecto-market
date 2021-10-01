// CSS
import './staticMenuPersonalRow.scss'

export const StaticMenuPersonalRow = ( ) =>{

    const clickeame = ( ) =>{
        console.log("me esta clickeando");
    }
    return(
            <button className = "staticMenuPersonalRow" onClick={clickeame}>
                <div className="staticMenuPersonalRow_icon">
                </div>
                <div className="staticMenuPersonalRow_text">
                    jfkslajlkfjdsljlkjds lksdjlfjlks
                </div>
            </button>
    )
}