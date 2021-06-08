import React,{Component} from "react";
import CardList from "./cardList";
import Scroll from "./Scroll"
import Searchbox from "./components/searchbox";
import './App.css';


/*the event fuctionn in onSearchChange is not happning in the app because it is refering to the 
input in the searchbox.js, to solve this we have to change the event function into arrow function
as the rule of thumb.*/
class App extends Component{ 
constructor(){
 super()
 this.state={
     Robots: [],
     searchfield:'',
 }
 
}
onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
     
}
componentDidMount(){

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(
     response=> {
     return  response.json();})  
 .then(users=>{
     this.setState({Robots:users})
 })  
}
   // this can be written in one line statement
   /*
   fetch('https://jsonplaceholder.typicode.com/users')
 .then(response=> response.json(); )  
 .then(users=>this.setState({Robots:users}))  
   
   */

render(){
    const filteredRobots= this.state.Robots.filter(Robots =>{
        return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); }
    )
    if(this.state.Robots.length===0){
      return  <h2 className= 'tc'> loading</h2>
    }
    else{
    return(
<div className="tc">
    <h1 className='tc f2'>Robo Friends</h1>
    <Searchbox searchChange={this.onSearchChange}/>
    <Scroll>
<CardList Robots={filteredRobots}/>
    </Scroll>
</div>
  );
}
 }
}
export default App;