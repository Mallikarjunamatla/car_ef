import React ,{useState} from 'react';


//Car component 
const Car=(props) => {

    //Attaching a Hook to  keep track of status of click functionality on a button

    const [isClicked,setClicked] = useState(false);
    const [itemArray,setItemArray] =useState([]);

    
   //Handles click event and set state which is opposite to previous state
  const handleClick = () => {
                      setClicked(prevState => {
                        //console.log(prevState);
                        return { isClicked: !prevState.isClicked };
                      });
                    };

// IIFE
   const res =( () => {
        // These values are constants,
       
        const arr=[];
        const initialPetrol       = 30,
              refillAmount        = 20,
              startLocation       = 0,
              endLocation         = 100,
              petrolPumpLocations = utils.petrolPumpLocations;
        console.log(petrolPumpLocations);
            
              
                                    
        // These are initial parameters
        let position = startLocation,
            petrol = initialPetrol;

        let i=1,
            j=0;
            ///position+=j;
          //position+=j;
            //petrol-=j;     
        if (utils.isAtPump(position,petrolPumpLocations)) {
          //console.log(petrolPumpLocations);

            //j=utils.random(0,6);
           // position+=j;
           console.log(j)
          petrol += refillAmount;
         
          arr.push({
              "move" : i,
              "position" : position,
              "petrol" : petrol,
          })
          petrolPumpLocations.shift();
          console.log(petrolPumpLocations);
          i++;
        }
            
       
            
        // Still travelling while we have petrol.

        while(position < endLocation && petrol > 0) {

              j=utils.random(0,6);
              position+=j;
           //position+=j;
              petrol-=j;
           
            
            if (utils.isAtPump(position,petrolPumpLocations)) {
                //j=utils.random(0,6);
                //position+=j;
              console.log(j)
              petrol += refillAmount;
              
              arr.push({
                  "move" : i,
                  "position" : position,
                  "petrol" : petrol,
              });
              petrolPumpLocations.shift();
              console.log(petrolPumpLocations);
              i++;

            }
            else {
              
              arr.push({
                "move" : i,     
                "position" : position,
                "petrol" : petrol,
            })
            
            i++;
            }
            
            
           
         
        }
        
       return arr;
      })();

 console.log(res);
//Iterate and strore results
 const looped = res.map((result, i) => (
                //<div className="start">Game Started
                  <div key={i}>
                     {result.move===1  ? (
                      <div>
                        <div> Game Started </div>
                        <div>Petrol pumps generated at 
                          <div>
                            { utils.petrolPumpLocations.map((ele, index) =>
                                <p key={index}>{ele} {index < utils.petrolPumpLocations.length - 1 ? ',\u00A0' : ''}</p>)
                            }
                          </div>
                        </div>
                      </div>
                        
                    ) : (
                      <pre></pre>
            
                    ) }
                   
                    <div className="results">Move {result.move} - Car at {result.position}, petrol remaining {result.petrol}</div>
                    {result.move===res.length && result.position >=100  ? (
                      <div> reached </div>
                    ) :  result.move===res.length ? (
                      
                      <div> Game Over </div>
                    ) : ""}
                  </div>
                 //</div>
              ));
   //setItemArray(looped);

          const    _refreshPage=()=> {
                  console.log("Clicked");
                  window.location.reload();
                }
              

              return (
                <div>
                  <div>
                  <button onClick={handleClick}>Start New Game</button>
                  {isClicked && looped}
                  </div>
                 
                
                  <div>
                    <button onClick = {_refreshPage} >Refresh </button>
                  </div>
                </div>
              );
};




//utility block
const utils = {

    petrolPumpLocations : (Array.from({ length: 5 - 1+1  }, 
        (_, i) =>  Math.floor(Math.random() * (100 - 0)) + i)
        .sort((a, b) => a - b)),

    isAtPump : (position,petrolPumpLocations) => petrolPumpLocations.includes(position),

    
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),


  };

//Parent component
  const Game = () => {
	const [gameId, setGameId] = useState(1);
	return <Car key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default Game;