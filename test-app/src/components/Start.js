import React from "react";

class Start extends React.Component{
render(){
    return(
        <div>
          <h2>Выберите набор данных:</h2>
          <div>
              <button onClick={this.props.dataMethod} className="small">Маленький</button>
              <button onClick={this.props.dataMethod} className="big">Большой</button>
          </div>
        </div>
    );
}

}

export default Start;