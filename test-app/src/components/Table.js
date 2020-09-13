import React from "react";

class Table extends React.Component{
render(){
    return(
        <div>
          <table>
              <thead>
                  <tr>
                  <th>id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  <td>001</td>
                  <td>Anna</td>
                  <td>Malorodova</td>
                  <td>jkdesfneksdv@yandex.ru</td>
                  <td>+666666666</td>
                  </tr>
              </tbody>
          </table>
        </div>
    );
}

}

export default Table;