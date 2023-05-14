import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({title, subTitle, tags, index, bgColor}) => {
    console.log(index, tags)
    const notify = () => toast("Wow so easy!");

    return (
        <>
            
            <div className={`overflow-hidden shadow-lg ${bgColor}`}>
                <div className="px-6 py-4">
                    <button onClick={notify} className="font-bold text-3xl mb-2">{title}</button>
                    <p className="text-gray-700 text-base">
                       {subTitle}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag)=>{
                        return (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Card;
