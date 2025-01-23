const data = [
    {
        id: 1,
        title: "Dell",
        detail: "this is computer device",
        price: "55000",
        image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
    }, {
        id: 2,
        title: "Haier",
        detail: "this is computer device",
        price: "35000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0f0qzqHRsiigVA9sTKDib-b9FU36fwYIQvg&s"
    }, {
        id: 3,
        title: "Hp",
        detail: "this is computer device",
        price: "45000",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/desktop-computer/x/y/y/0-hs16-win-11-hasons-original-imagv2v7u7zf5fyn.jpeg?q=90&crop=false"
    }, {
        id: 4,
        title: "Lenovo",
        detail: "this is computer device",
        price: "60000",
        image: "https://cdn.britannica.com/97/155497-050-4C5BFFFC/laptop-computer.jpg"
    }, {
        id: 5,
        title: "Dell",
        detail: "this is computer device",
        price: "50000",
        image: "https://www.freecodecamp.org/news/content/images/2021/11/monitor-silver-with-keyboard-pc.png"
    }, {
        id: 6,
        title: "hp",
        detail: "this is computer device",
        price: "33000",
        image: "https://www.zdnet.com/a/img/resize/9a221deb62a8a0a3221183553d6843da15969fbb/2024/04/05/98bfe86a-37dc-4418-aaa5-4229ced29d87/hp-eliteone-870-g9.jpg?auto=webp&fit=crop&height=360&width=640"
    }
]

const categoryData = [
    {
        id: 1,
        image: require('../assets/images/image1.jpeg'),
        category: "Fertilizer",
        subCategories: ["DAP", "Urea"]
    },
    {
        id: 2,
        image: require('../assets/images/image2.jpeg'),
        category: "Pesticides",
        subCategories: ["Fungicides", "Insecticides"]
    },
    {
        id: 3,
        image: require('../assets/images/image3.jpeg'),
        category: "Seeds",
    },
    {
        id: 4,
        image: require('../assets/images/image4.jpeg'),
        category: "Hybrid Seeds",
    },
    {
        id: 5,
        image: require('../assets/images/image1.jpeg'),
        category: "Spray Machines",
    },
    {
        id: 6,
        image: require('../assets/images/image2.jpeg'),
        category: "Agriculture tools",
    },
    {
        id: 7,
        image: require('../assets/images/image3.jpeg'),
        category: "Livestock",
    },
    {
        id: 8,
        image: require('../assets/images/image4.jpeg'),
        category: "Farming",
    },
    {
        id: 9,
        image: require('../assets/images/image3.jpeg'),
        category: "Livestock",
    },
    {
        id: 10,
        image: require('../assets/images/image4.jpeg'),
        category: "Farming",
    }
]

const colors = {
    blue: '#00308F',
    white: 'white',
    blueGrey: '#4B9CD3',
}

// const BaseUrl = "http://localhost:3000";
const BaseUrl = "https://seed-api.vercel.app";

export { data, colors, BaseUrl, categoryData };