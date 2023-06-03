import Mother from "./Mother";

const GrandMother = (props) => {
    
    return (
            <h1 className=" font-bold text-xl bg-blue-200 text-red-500 text-base">
                I am grandmother
                <Mother kahun={props.kahun}/>
                
            </h1>
    )
}

// const GrandMother = ({money}) => {
//     const kahun ="be healthy"
//     return (
//             <h1 className=" font-bold text-xl bg-blue-200 text-red-500 text-base">
//                 I am grandmother
//                 <Mother money={money}/>
//                 <Mother money={money}/>                
//             </h1>
//     )
// }
export default GrandMother;