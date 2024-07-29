
import React,{useContext,useState} from 'react'
import {ToggleContext} from "../App.js"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Testquestions() {
  const navigate = useNavigate();
const [fact,testquestions] = useContext(ToggleContext)
const [appear ,setAppear] = useState(true);


console.log("Fact", fact)

const sendQuestions =async()=>{
      try{
      const response = await axios.post("http://172.17.15.186:3006/sendQuestions", {
       testquestions

      });
      if (response.status === 200) { 
        // console.log(fact)
         
         alert(response.data);

         console.log("okkkkk"); 
         setAppear(false)
     
        
       } else {
         alert("Error: Unable to register. Please try again.");
       }
     } catch (error) {
       alert("An error occurred while registering. Please try again.");
     }
     

    }  
    if(!appear){return null;}

    return(
  <div>
    <div className='items-center text-center text-2xl'>Test Questions</div>
      <hr/>

      <div>
        {testquestions.response.Questions.map((_, index) => (
          <div key={index}>
            <h3>Question {index+1}:</h3>
            <p>{testquestions.response.Questions[index]}</p>
            <ul>
              {/* {testquestions.response.Options[index].map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))} */}
              {testquestions.response.hasOwnProperty('Options') // Check if Options key exists
                  ? testquestions.response.Options[index].map((option, optionIndex) => (
                      <li key={optionIndex}>{option}</li>
                    ))
                  : testquestions.response.options[index].map((option, optionIndex) => (
                      <li key={optionIndex}>{option}</li>
                    ))}
            </ul>
            {testquestions.response.hasOwnProperty('CorrectAnswers') ?<p>Correct Answer: {testquestions.response.CorrectAnswers[index]}</p>:
            <p>Correct Answer: {testquestions.response.CorrectAnswer[index]}</p>}
            
            <hr  className="px-9"/>
          </div>
        ))}
    
      </div>
       
      <div className="flex justify-center">
    <button
      onClick={sendQuestions}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Save
    </button>
  </div>

  </div>  )
  
  

  

     

}

export default Testquestions