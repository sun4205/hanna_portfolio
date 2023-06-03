import Card from "@/Components/Card";
import CatCard from "@/Components/CatCard";



const Portfolio = () => {

    const data = [
        { src: "https://www.petsworld.in/blog/wp-content/uploads/2015/04/Cute-Kitten.jpg", title: "Mountain", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.", tags: ["#photography", "#travel", "#summer"] },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Th2dE1GWkhKAcV5bW7apEcZGDwndlHA5FcSImXl&s=0", title: "River", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.", tags: ["#photography", "#travel", "#summer"] },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b88jEujtVuU3tbEmj384AhWL6ehiQKO3hnZEGvlK4A&s", title: "Forest", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.", tags: ["#photography", "#travel", "#summer"] },
    ]
    return (
        <>

            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {data.map((item) => {
                    return <CatCard src={item.src} title={item.title} subTitle={item.subTitle} tags={item.tags} />
                })}
            </div>

        </>
    )
}

export default Portfolio;

