import './App.css';
import FilteredList from './FilteredList.js'

function App() {

  // total list of food item to display
  const foodList = [
    {
      name: "Turkey",
      difficulty: "Hard",
      category: "Meat",
      cooktime: 300,
      image: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Cranberry-Orange-Roasted-Turkey_exps41231_CW132792B07_09_1b_RMS.jpg"
    },
    {
      name: "Stuffing",
      difficulty: "Medium",
      category: "Starch",
      cooktime: 75,
      image: "https://foxeslovelemons.com/wp-content/uploads/2014/11/Old-Fashioned-Bread-Stuffing-720x720.jpg"
    },
    {
      name: "Green Beans",
      difficulty: "Easy",
      category: "Veggies",
      cooktime: 30,
      image: "https://www.jessicagavin.com/wp-content/uploads/2019/11/sauteed-green-beans-5-1200.jpg"
    },
    {
      name: "Rolls",
      difficulty: "Medium",
      category: "Starch",
      cooktime: 210,
      image: "https://bakingamoment.com/wp-content/uploads/2019/11/IMG_6787-dinner-rolls.jpg"
    },
    {
      name: "Mashed Potatos",
      difficulty: "Easy",
      category: "Starch",
      cooktime: 45,
      image: "https://www.thespruceeats.com/thmb/aV3a6phN-0r_0hsFnrMb5ezHG1g=/3000x3000/smart/filters:no_upscale()/easy-microwave-mashed-potatoes-3059678_hero-01-520a91abceb44719ae5a24a179af8645.jpg"
    },
    {
      name: "Salad",
      difficulty: "Easy",
      category: "Veggies",
      cooktime: 20,
      image: "https://foxeslovelemons.com/wp-content/uploads/2017/11/Really-Good-Thanksgiving-Salad-2-720x720.jpg"
    },
    {
      name: "Roasted Vegetables",
      difficulty: "Easy",
      category: "Veggies",
      cooktime: 40,
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-vegetable-medley-0039-landscape-pf-1567108247.jpg?crop=0.536xw:0.804xh;0.216xw,0.0893xh&resize=480:*"
    },
    {
      name: "Sweet Potato Casserole",
      difficulty: "Medium",
      category: "Dessert",
      cooktime: 90,
      image: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/25022_sfs-sweet-potato-casserole-4"
    },
    {
      name: "Apple Pie",
      difficulty: "Medium",
      category: "Dessert",
      cooktime: 120,
      image: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_df_retail_blue-ribbon-apple-pie_16800_600x600.jpg?ext=.jpg"
    },
    {
      name: "Cheesecake",
      difficulty: "Hard",
      category: "Dessert",
      cooktime: 80,
      image: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Triple-Berry-No-Bake-Cheesecake_EXPS_TOHcom19_138951_B01_30_6b.jpg"
    },
    {
      name: "Mac n' Cheese",
      difficulty: "Medium",
      category: "Starch",
      cooktime: 70,
      image: "https://www.africanbites.com/wp-content/uploads/2018/03/IMG_9302-650x650.jpg"
    },
    {
      name: "Glazed Ham",
      difficulty: "Medium",
      category: "Meat",
      cooktime: 240,
      image: "https://s23209.pcdn.co/wp-content/uploads/2019/12/Maple-Glazed-HamIMG_1018-360x360.jpg"
    }
  ]

  return (
    <div class="wrapper">
      <hr />
      {/* title  */}
      <h1>Thanksgiving Food Planner</h1>
      {/* subtitle */}
      <h5>Add the items you want to make to your planned menu!</h5>
      <hr />
      {/* passes total list of food items to FilteredList */}
      <FilteredList list={foodList} />
    </div>
  );
}

export default App;
