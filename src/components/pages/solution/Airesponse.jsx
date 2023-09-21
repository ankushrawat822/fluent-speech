import React, { useState } from 'react'
import axios from 'axios'
const Airesponse = ({userInputText}) => {

    //  const apiKey =(import.meta.env.VITE_REACT_APP_OPENAI_API_KEY)
    //  console.log(apiKey)
  

    const [input, setInput] = useState("hey , how are you?")

   // ai response answer
    const [aiResonseAns , setAiResponseAns] = useState("")

    //  const handleSend = async () =>{
    //     const res = await sendMsgToOpenAi(input)
    //     console.log(res)
    //  }
    
    const handleSend = async () => {
        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
                prompt: `read the text : "${userInputText}" . NOW analyze it and answer few question ONLY IN  paragraph and NOT IN bullet points and try to keep the answer in ONLY ONE paragraph and SHORT . is the text fluent , if no then why not and how can the same thing be said in better way. NOTE that the text I will provide you won't have any context and background and IT'S okay to be that. You just paraphrae the text in better way and DON'T answer that I should start by hello , how are you.`,

                model: 'text-davinci-003',
                temperature: 0,
                max_tokens: 356,
                // top_p: 1,
                // frequency_penalty: 0,
                // presense_penalty: 0
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + (import.meta.env.VITE_REACT_APP_OPENAI_API_KEY),
                },
            }
        );

        setAiResponseAns(response.data.choices[0].text)
       // console.log("the user input text is : " + userInputText)

       // return response.data.choices[0].text;
    };



    return (
        <>
            <div className='speech-to-text-drop-shadow mt-32 lg:w-[30vw] px-5 py-2 '>

                {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}

                <div className='flex items-center justify-between'>
                     
                    <button onClick={handleSend}>Generate AI Response</button>
                    <button onClick={()=>setAiResponseAns("")}>Reset</button>

                </div>


                <p className='text-[#00ba13] font-bold pt-4 px-2 text-justify' >{aiResonseAns}</p>
            </div>

        </>
    )
}

export default Airesponse