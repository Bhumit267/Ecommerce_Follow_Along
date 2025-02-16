import Product from  "../components/products"

const ProductDetails =[
    {
    name:"Product 1",
    image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
    description: "This is a limites-time product offering.",
    price:100,
    },
    {
        name:"Product 2",
        image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
        description: "This is a limites-time product offering.",
        price:100,
        },
        {
            name:"Product 3",
            image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
            description: "This is a limites-time product offering.",
            price:100,
            }, {
                name:"Product 4",
                image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                description: "This is a limites-time product offering.",
                price:100,
                }, {
                    name:"Product 5",
                    image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                    description: "This is a limites-time product offering.",
                    price:100,
                    }, {
                        name:"Product 6",
                        image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                        description: "This is a limites-time product offering.",
                        price:100,
                        }, {
                            name:"Product 7",
                            image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                            description: "This is a limites-time product offering.",
                            price:100,
                            }, {
                                name:"Product 8",
                                image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                                description: "This is a limites-time product offering.",
                                price:100,
                                }, {
                                    name:"Product 9",
                                    image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                                    description: "This is a limites-time product offering.",
                                    price:100,
                                    }, {
                                        name:"Product 10",
                                        image:"https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
                                        description: "This is a limites-time product offering.",
                                        price:100,
                                        },



];
export default function Home(){
    return (
        <div className="w-full min-h-screen bg-neutral-800">
            <div className="grid grid-cols-5 gap-4 p-4">
                {
                    ProductDetails.map((product,index)=><Product key={index} {...product}/>)
                }
            </div>
        </div>
    )
}
