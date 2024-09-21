const URL_BASE = "http://10.0.2.2:3000";
const data = [
    {
        "id": "1",
        "title": "Tea",
        "theme" : "#69FF00",
        "description": `Tea is a timeless beverage cherished across cultures for its soothing properties and rich flavors. Originating from the Camellia sinensis plant, tea comes in various types, including black, green, white, oolong, and herbal, each offering a unique taste and health benefits. \n
Health Benefits: Known for its high antioxidant content, tea can aid in reducing inflammation, improving heart health, and enhancing mental clarity. Various studies suggest that regular tea consumption may lower the risk of chronic diseases, making it a staple in many wellness routines.`,
        "icon": "https://loctancuong.com/wp-content/uploads/2024/01/165707-tra-xanh-la-gi-11-1-e1706775348729.jpg",
        "productBackground": `${URL_BASE}/videos/teaBg.mp4`,
        "ingredients": [
            { "Tea Leaves": `${URL_BASE}/videos/green-tea.mp4` },
            { "Water": `${URL_BASE}/videos/green-tea.mp4` }
        ],
        "technology": [
            { "Technology": `${URL_BASE}/videos/techTea.mp4` }
        ],
        "uses_highlights": [
            { "Health Benefits": `${URL_BASE}/videos/techTea.mp4` }
        ],
        "achievement": [
            { "Best Tea Brand 2023": `${URL_BASE}/videos/green-tea.mp4` }
        ]
    },
    {
        "id": "2",
        "title": "Coffee",
        "theme" : "#523C3C",
        "description": `Coffee is one of the most beloved beverages worldwide, known for its rich flavors and energizing effects. Made from roasted coffee beans, it is a staple in many cultures and has a long history that dates back centuries.\n
        Health Benefits: Coffee is rich in antioxidants and has been linked to numerous health benefits. Research suggests that moderate coffee consumption may reduce the risk of certain diseases, including Parkinson’s disease, Type 2 diabetes, and some forms of cancer. Additionally, caffeine, a natural stimulant, can enhance alertness, improve mood, and boost cognitive performance.`,
        "icon": "https://i0.wp.com/coffeeculture.asia/wp-content/uploads/2021/06/Dry-Processed-Espresso-Coffee-Coffee-Culture-Thailand.jpg",
        "productBackground": `${URL_BASE}/videos/bgCoffe.mp4`,
        "ingredients": [
            { "Coffee Beans": `${URL_BASE}/videos/coffee.mp4` },
            { "Water": `${URL_BASE}/videos/coffee.mp4` }
        ],
        "technology": [
            { "Technology": `${URL_BASE}/videos/techCf.mp4` } // updated link
        ],
        "uses_highlights": [
            { "Energy Booster": `${URL_BASE}/videos/coffee.mp4` } // updated link
        ],
        "achievement": [
            { "Best Coffee Brand 2023": `${URL_BASE}/videos/coffee.mp4` } // updated link
        ]
    },
    {
        "id": "3",
        "title": "Milk",
        "theme" : "#FFFFFFFF",
        "description": `Milk is a nutritious liquid produced by mammals, primarily cows, goats, and sheep, and serves as a fundamental food source for humans around the world. It is rich in essential nutrients, making it a key component of many diets.\n
        Nutritional Benefits: Milk is an excellent source of calcium, protein, vitamins (such as B12 and D), and minerals. These nutrients are vital for building strong bones, supporting muscle growth, and maintaining overall health. The calcium and vitamin D in milk are particularly important for bone health, helping to prevent conditions like osteoporosis.`,
        "icon": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/soy-milk-bottle-1296-728-header.jpg",
        "productBackground": `${URL_BASE}/videos/milkBg.mp4`, // updated link
        "ingredients": [
            { "Cow's Milk": `${URL_BASE}/videos/TechMilk.mp4` }, // updated link
            { "Water": `${URL_BASE}/videos/TechMilk.mp4` } // updated link
        ],
        "technology": [
            { "Pasteurization": `${URL_BASE}/videos/milk.mp4` } // updated link
        ],
        "uses_highlights": [
            { "Rich in Calcium": `${URL_BASE}/videos/milk.mp4` } // updated link
        ],
        "achievement": [
            { "Best Dairy Product 2023": `${URL_BASE}/videos/milk.mp4` } // updated link
        ]
    }
];

module.exports = data;
