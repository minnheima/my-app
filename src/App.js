// import { info } from 'node-sass';
import React, { Component } from 'react';
import './App.css';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  //id는 렌더링 될 필요가 없기 때문에 state 넣어주지 않아도 된다
  id = 3;
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-1234-5678',
      },
      {
        id: 1,
        name: 'Colin',
        phone: '010-5555-0000',
      },
      {
        id: 2,
        name: 'Amy Kim',
        phone: '010-7777-8888',
      },
    ],
    keyword: '',
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  };
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++ 
      }))
    });
  };
  handleRemove = (id)=> {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  };

  render(){
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input 
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default App;