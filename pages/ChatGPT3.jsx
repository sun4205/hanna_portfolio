import axios from "axios";
import { useState } from "react";

const ChatGPT = () => {
    const [ques, setQues] = useState('what is best conuntry?');
    const [response, setResposne] = useState("");
    
    const questioHnHandler = async () => {

        const result = await axios.post("https://api.openai.com/v1/chat/completions",null,null)
    }
    

    return (
        <>
            <input type="text" value={ques} onChange={(e) => setQues(e.target.value)} />
            <button type="button" onClick={() => questioHnHandler()}>Send</button>
            <div>response</div>
            <div>{response}</div>
        </>
    )
}

export default ChatGPT;