import React from "react"



function Card(props) {
    return (
      
            <div className="card">
                    <img src={props.img} alt=""></img>
                    <div className="card-body">
                        <div className="form-entry">
                            <h2 className="card-title">{props.title}</h2>
                            <p className="card-content">{props.content}</p>
                            <h3 className="card-price">{props.price}</h3>
                            <button className="card-btn">Enviar</button>
                        
                        </div>
                    </div> 
            </div>
       
    )
}

export default Card