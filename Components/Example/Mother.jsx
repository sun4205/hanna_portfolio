import Son from "./Son";

const Mother = (props) => {
    console.log(props.kahun);
    return (
        <div>

            <h1 className=" font-bold text-xl bg-blue-200 text-red-500 text-base">
                I am Mother. My money is {props.money}
                <Son money2={props.money}/>
                <Son kahun2={props.kahun}/>
            </h1>

        </div>
    )
}
export default Mother;