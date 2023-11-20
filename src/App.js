import './App.css';
import User from './components/User';
import Card from './components/Card';

const data=[{
  title:"A changing World Order",
  description:" The world is chnaging at a feverish pace.Freinds, colleagues and everyone engaged in knowledge work are beggining to sense this ,including...",
  date:"August 2",
  timeInMin:2,
  views:102,
  type:'musing'
},
{
  title:"Indian vs Australin",
  description:" Think about it-this cricket series was a kin to therapy. Laying our childhood trauma up top,working with it slowly and surely over two m...",
  date:"January 21",
  timeInMin:5,
  views:156,
  type:'thought'
},
{
  title:"Write to build",
  description: [
    "Writing is the first step to create",
   "-stories",
   "-products",
   "-companies",

  ],
 
 
  date:"June 27",
  timeInMin:6,
  views:500,
  type:'thought'
}]

function App() {
  return (
    <>
    <div className='coverPhoto'></div>
    <User />
    <button className='button'>134 Post</button>
    {data.map((item)=><Card item={item}/>)}
    
    </>
  );
}

export default App;
