"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const items = [
  {
    id: 1,
    name: "EGG",
    img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg.webp",
    price: 13,
    amount: 0,
  },
  {
    id: 2,
    name: "Fuchka",
    img: "https://banglawok.com/wp-content/uploads/2023/06/Fuchka.jpg",
    price: 50,
    amount: 0,
  },
  {
    id: 3,
    name: "Book",
    img: "https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.38",
    price: 100,
    amount: 0,
  },
  {
    id: 4,
    name: "Kacchi",
    img: "https://images.deliveryhero.io/image/fd-bd/LH/o52l-hero.jpg?width=512&height=384&quality=45",
    price: 250,
    amount: 0,
  },
  {
    id: 5,
    name: "Crimson Coffee",
    img: "https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/06/14/14051781_1654965764818796_4654093720709338508_n.jpg",
    price: 500,
    amount: 0,
  },
  {
    id: 6,
    name: "Bata Shoe",
    img: "https://www.batabd.com/cdn/shop/products/DSC00608_grande.jpg?v=1650047546",
    price: 1000,
    amount: 0,
  },
  {
    id: 7,
    name: "Restaurant Dinner",
    img: "https://lh3.googleusercontent.com/p/AF1QipOl6SoNw-RLRex4G4E2-FXhyNrjAUHsroCBG4MA=s680-w680-h510",
    price: 5000,
    amount: 0,
  },
  {
    id: 8,
    name: "Illiyeen Panjabi",
    img: "https://d3j1z37yk0dbyk.cloudfront.net/media/images/242534__4_5__20240922130028605_width_1024.jpg",
    price: 7000,
    amount: 0,
  },
  {
    id: 9,
    name: "Concert Ticket",
    img: "https://i.tribune.com.pk/media/images/Atif-Aslam---Coke-Studio-Live-2021-[F]-(2)1639908911-0/Atif-Aslam---Coke-Studio-Live-2021-[F]-(2)1639908911-0.jpg",
    price: 10000,
    amount: 0,
  },
  {
    id: 10,
    name: "Puppy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oEkxOUYgRxGEUJIYE4du308H7UeuDQD3tg&s",
    price: 15000,
    amount: 0,
  },
  {
    id: 12,
    name: "Kitten",
    img: "https://media.istockphoto.com/id/172762572/photo/little-cat-and-iguana.jpg?s=612x612&w=0&k=20&c=y6U2_Fow3gk_TgUe6X64PsIyXbsw27TeeqGVRNU8XwE=",
    price: 20000,
    amount: 0,
  },

  {
    id: 13,
    name: "One night in 5 Star Hotel",
    img: "https://pix10.agoda.net/hotelImages/5502207/0/9118b486f9ffd30d0a49b1860822fdfc.jpg?ca=23&ce=0&s=1024x768",
    price: 25000,
    amount: 0,
  },
  {
    id: 14,
    name: "Ricksahw",
    img: "https://st.depositphotos.com/2933051/3767/i/950/depositphotos_37670837-stock-photo-thailand-auto-rickshaw-three-wheeler.jpg",
    price: 30000,
    amount: 0,
  },
  {
    id: 15,
    name: "Cycle",
    img: "https://m.media-amazon.com/images/I/81+5XvZllBL.jpg",
    price: 50000,
    amount: 0,
  },

  {
    id: 16,
    name: "Play Station 5",
    img: "https://www.salextra.com.bd/images/thumbs/004/0040317_sony-ps5-playstation-5-slim-edition-4k-120hz-gaming-console-with-dualsense-wireless-controller.jpeg",
    price: 75000,
    amount: 0,
  },
  {
    id: 17,
    name: "Gaming Computer",
    img: "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com//Images/en-US/Lobby/ezb_main_nocut.png?v=5f4bf10d9a3861376f8cc058230139b4f93996fe",
    price: 100000,
    amount: 0,
  },
  {
    id: 18,
    name: "IPhone",
    img: "https://www.custommacbd.com/cdn/shop/products/iPhone-silicone-case-Blue-Jay-Custom-Mac-BD.jpg?v=1637061221",
    price: 150000,
    amount: 0,
  },

  {
    id: 19,
    name: "Gold Necklace",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCm-IjsQSah_-tzgJRgS9AQr_U0Mfw-aG9UQ&s",
    price: 200000,
    amount: 0,
  },
  {
    id: 20,
    name: "Rolex",
    img: "https://rolexboutique-stthomas.com/images/watch-assets/m124300-0002.webp",
    price: 300000,
    amount: 0,
  },
  {
    id: 21,
    name: "Yamaha R15",
    img: "https://imgd.aeplcdn.com/642x336/n/cw/ec/108277/yamaha-yzf-r15-right-side-view1.jpeg?isig=0&q=80",
    price: 600000,
    amount: 0,
  },
  {
    id: 22,
    name: "Diamond Ring",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lk4EmIYUCBFSBeKKH13WfLDHK6_mGD_6Yw&s",
    price: 1000000,
    amount: 0,
  },
  {
    id: 23,
    name: "Toyota Premio",
    img: "https://garibaree.com/gari/wp-content/uploads/2023/09/premio-front2-1024x539.webp",
    price: 3000000,
    amount: 0,
  },
  {
    id: 24,
    name: "GOAT",
    img: "https://ecdn.dhakatribune.net/contents/cache/images/800x450x1/uploads/media/2024/07/01/Goat-a49d57ee6db5c593391e16aaf426092b.jpg?jadewits_media_id=23543",
    price: 1500000,
    amount: 0,
  },
  {
    id: 25,
    name: "1 Acre Land",
    img: "https://homebay.com/wp-content/uploads/2023/03/b153c0f0-d77e-11ec-bb19-d9085ce408df-acre.jpg",
    price: 5000000,
    amount: 0,
  },
  {
    id: 26,
    name: "Flat",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390231947.jpg?k=a8061a3464ed8c99c9071b178c13a18bd83d25ba640518742dcd3b57a00ec777&o=&hp=1",
    price: 8000000,
    amount: 0,
  },
  {
    id: 27,
    name: "Gulshan Apartment",
    img: "https://www.bdhousing.com/api/list/listings/100X100/235826/8121fa617a6ac893c3b22b9b64b7fcd5.jpg",
    price: 50000000,
    amount: 0,
  },
  {
    id: 28,
    name: "Ship",
    img: "https://www.shutterstock.com/image-photo/dhaka-bangladesh-20th-july-2021-600nw-2031556238.jpg",
    price: 100000000,
    amount: 0,
  },
  {
    id: 29,
    name: "Mansion",
    img: "https://www.maramani.com/cdn/shop/files/Modernclassical6-bedroommansionhouseplan-ID2670802.jpg?v=1688375715&width=2048",
    price: 1000000000,
    amount: 0,
  },

  {
    id: 30,
    name: "Yatch",
    img: "https://img.freepik.com/premium-photo/white-yacht-with-large-number-windows-is-white-background_934475-162.jpg",
    price: 2500000000,
    amount: 0,
  },
  {
    id: 31,
    name: "Lamborghini Huracan",
    img: "https://img.freepik.com/premium-photo/white-lamborghini-huracan-super-car-sports-car-isolated-white-background-minimalism_660230-11240.jpg",
    price: 25000000,
    amount: 0,
  },
  {
    id: 32,
    name: "Bughatti Chiron",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWLwBblxm1ewAhK8p-w1aw2qLaEqZVoBjNg&s",
    price: 550000000,
    amount: 0,
  },
  {
    id: 33,
    name: "Bangladesh Cricket Team",
    img: "https://www.bssnews.net/assets/news_photos/2023/12/29/image-165490-1703831846.jpg",
    price: 4250000000,
    amount: 0,
  },

  {
    id: 34,
    name: "Boeing-777",
    img: "https://p.turbosquid.com/ts-thumb/9e/zmjz4F/nW/boeing_777_300_0000/jpg/1687087228/600x600/fit_q87/89c8125ec1e2810857636889aa5c483e353f1ec7/boeing_777_300_0000.jpg",
    price: 20000000000,
    amount: 0,
  },
  {
    id: 35,
    name: "Cruise Ship",
    img: "https://www.shutterstock.com/image-illustration/cruise-ship-isolated-on-white-260nw-135712343.jpg",
    price: 100000000000,
    amount: 0,
  },
  {
    id: 36,
    name: "Helicopter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkckt_8RLZLH3LDIKkroxONGX24DaOOAXWwQ&s",
    price: 330000000,
    amount: 0,
  },
  {
    id: 37,
    name: "Tank",
    img: "https://www.shutterstock.com/image-illustration/military-tank-isolated-3d-rendering-600nw-1666052209.jpg",
    price: 600000000,
    amount: 0,
  },

  {
    id: 44,
    name: "Sony Camera",
    img: "https://www.dpreview.com/files/p/E~products/sony_a7r/shots/9cfc010c00c74393b05a4f65fbb24ba7.png",
    price: 250000,
    amount: 0,
  },
  {
    id: 45,
    name: "Private Resort",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499214451.jpg?k=c0dcf12f98995d164602bb18fa3744716d9de9a614446c6758babeaa2f5bcbc7&o=&hp=1",
    price: 40000,
    amount: 0,
  },
  {
    id: 46,
    name: "Purbachal Plot",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFzZDWBJHWSJPrEHaZzPULFxIRJeeJBAsEw&s",
    price: 200000000,
    amount: 0,
  },

  {
    id: 47,
    name: "Audi A4",
    img: "https://dublincitymotors.ie/wp-content/uploads/2024/01/01-1-scaled.jpg",
    price: 30000000,
    amount: 0,
  },
  {
    id: 48,
    name: "RollsRoyce Ghost",
    img: "https://www.ccarprice.com/products/Rolls_Royce_Ghost_Series_II_2025.jpg",
    price: 60000000,
    amount: 0,
  },
  {
    id: 49,
    name: "Louis Vuitton Bag",
    img: "https://static.wixstatic.com/media/443fd6_764ad5e8eafb4e1e99bb72df1472b905~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/443fd6_764ad5e8eafb4e1e99bb72df1472b905~mv2.jpg",
    price: 8000,
    amount: 0,
  },
  {
    id: 38,
    name: "Gulshan Plot",
    img: "https://www.swadeshproperties.com/images/7.5-katha-plot-for-sale-near-gulshan.jpg",
    price: 500000000,
    amount: 0,
  },
  {
    id: 39,
    name: "RTX 4090",
    img: "https://m.media-amazon.com/images/I/51H6ZUVPmxL._AC_SL1004_.jpg",
    price: 350000,
    amount: 0,
  },
  {
    id: 40,
    name: "Private Jet",
    img: "https://images.aircharterservice.com/blog/a-private-jet-parked-on-the-tarmac-with-its-stairs-down-header.jpg",
    price: 800000000,
    amount: 0,
  },
  {
    id: 41,
    name: "Theme Park",
    img: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/amusement-parks-in-the-world-870x570.jpg",
    price: 6000000000,
    amount: 0,
  },
  {
    id: 42,
    name: "Piano",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEKR1yaOAtCX4u23Vsvnr3-XTTKH9nZ7l8bjxmeHS6Ve8VYWORNXY-NKsmxEa5RHQ8GY&usqp=CAU",
    price: 2000000,
    amount: 0,
  },
  {
    id: 43,
    name: "Ferrari",
    img: "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.526xw:0.701xh;0.137xw,0.299xh&resize=768:*",
    price: 70000000,
    amount: 0,
  },
  {
    id: 50,
    name: "Jamdani Sharee",
    img: "https://www.aarong.com/media/catalog/product/0/5/0550000138108.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    price: 35000,
    amount: 0,
  },
  {
    id: 51,
    name: "Fighting Jet",
    img: "https://media-s3-us-east-1.ceros.com/lockheed-martin/images/2020/10/15/f64347cce853ef38c65d6998c3409dc7/plane.png",
    price: 9500000000,
    amount: 0,
  },
  {
    id: 52,
    name: "Padma Bridge",
    img: "https://d2u0ktu8omkpf6.cloudfront.net/e04ca4d1d0672e7536ca41fff738775b12eef7833c5358b1.jpg",
    price: 300000000000,
    amount: 0,
  },
  {
    id: 53,
    name: "Metro Rail",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-KyZ-NtzmrYP5VN3zNADf7NHKb8PIJpR8g&s",
    price: 150000000000,
    amount: 0,
  },
  {
    id: 54,
    name: "Rail",
    img: "https://d2u0ktu8omkpf6.cloudfront.net/a2235b4997c3d46c14fe81af0230c3632c5b16a506a18958.jpg",
    price: 280000000,
    amount: 0,
  },
  {
    id: 55,
    name: "Tiger Cub",
    img: "https://media.istockphoto.com/id/93214073/photo/tiger-cub.jpg?s=612x612&w=0&k=20&c=7zPGWSTLVQGY_6V89fDlIAR1yzx3wUF-drOKxbpO60c=",
    price: 900000,
    amount: 0,
  },
  {
    id: 56,
    name: "Penthouse",
    img: "https://cms.rupayancity.com/storage/app/uploads/product/-rupayan-penthouse/16734337411039799818.jpg",
    price: 230000000,
    amount: 0,
  },
  {
    id: 57,
    name: "College Education",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-EI2c4RW0vdJ3jWZTAJUrvsZFwhVR8hXYA&s",
    price: 6000000,
    amount: 0,
  },
];

export default function Home() {
  //2_396_744_940_000
  const [amount, setAmount] = useState(2_396_744_940_000);
  const [values, setValues] = useState({});

  const handleAmount = (price, id, action) => {
    let totalPrice = price * 1;

    if (action === "buy") {
      if (amount < totalPrice) return;
      setAmount((amt) => amt - totalPrice);

      setValues((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    } else if (action === "sell") {
      if (amount === 2396744940000) return;
      setAmount((amt) => amt + totalPrice);

      setValues((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) - 1,
      }));
    }
  };
  // Handle change for specific item
  const handleChange = (id, price, value) => {
    // if (/^\d*$/.test(value)) {
    //   const prevValue = values[id] || 0;
    //   const validAmount = Number(value);
    //   let totalPrice = price * validAmount;
    //   if (validAmount == prevValue) return;
    //   if (totalPrice > amount) {
    //     const maxQuantity = Math.floor(amount / price);
    //     setValues((prev) => ({
    //       ...prev,
    //       [id]: maxQuantity,
    //     }));
    //     const maxTotalPrice = maxQuantity * price;
    //     setAmount((amt) => amt - (maxTotalPrice - prevValue * price));
    //     return;
    //   } else if (validAmount > prevValue) {
    //     const addedItems = validAmount - prevValue;
    //     const totalAddedPrice = price * addedItems;
    //     setAmount((amt) => amt - totalAddedPrice);
    //   } else if (validAmount < prevValue) {
    //     const removedItems = prevValue - validAmount;
    //     const totalRemovedPrice = price * removedItems;
    //     setAmount((amt) => amt + totalRemovedPrice);
    //   }
    //   setValues((prev) => ({
    //     ...prev,
    //     [id]: validAmount,
    //   }));
    // }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (kept at the top) */}
      <div className="sticky top-0 w-full bg-green-400 z-50">
        <div className="h-20 flex items-center justify-center ">
          <h1 className="text-white font-bold text-2xl">
            ৳ {amount.toLocaleString()}
          </h1>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="flex-1 w-full overflow-y-auto p-5">
        <div className="flex flex-col justify-center items-center pb-5">
          <Avatar className="h-52 w-52">
            <AvatarImage src="./nahidwin.png" />
          </Avatar>
          <h1 className="pt-4 font-bold text-4xl text-center">
            Spend Yusuf Shorkers Money
          </h1>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 h-auto gap-5 mx-auto">
          {items
            .sort((a, b) => a.price - b.price)
            .map((item, index) => (
              <li key={index}>
                <Card>
                  <CardHeader>
                    <img
                      src={item.img}
                      alt="Card Image"
                      className="w-full h-52 object-contain rounded-t-md"
                    />
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>৳ {item.price.toLocaleString()}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="grid grid-cols-3 gap-5">
                      <Button
                        className="bg-green-500 select-none hover:bg-green-600 focus:bg-green-600"
                        disabled={amount < item.price}
                        onClick={() => handleAmount(item.price, item.id, "buy")}
                      >
                        BUY
                      </Button>
                      <Input
                        id={`number-input-${item.id}`}
                        type="text"
                        value={values[item.id] || ""}
                        disabled={true}
                        onChange={(e) =>
                          handleChange(item.id, item.price, e.target.value)
                        }
                        className="border border-gray-300 rounded-md"
                        placeholder="0"
                      />
                      <Button
                        className="bg-red-600 select-none hover:bg-red-700 focus:bg-redn-700"
                        disabled={values[item.id] <= 0 || !values[item.id]}
                        onClick={() =>
                          handleAmount(item.price, item.id, "sell")
                        }
                      >
                        SELL
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="font-bold text-2xl">Your Receipt</h1>

        {Object.entries(values).map(([key, value]) => {
          const item = items.find((item) => item.id === Number(key));

          return item ? (
            <div
              key={key}
              className="grid grid-cols-4 md:grid-cols-3 h-auto gap-5 mx-auto md:w-[40rem] items-center "
            >
              <div className="flex justify-start font-semibold text-xl">
                {item.name}
              </div>
              <div className="flex justify-center font-semibold text-xl ">
                x{value}
              </div>
              <div className="flex col-span-2 md:col-span-1 justify-start text-green-500 font-semibold text-xl ">
                ৳ {(item.price * value).toLocaleString()}
              </div>
            </div>
          ) : (
            "None"
          );
        })}
        <Separator className="bg-black lg:w-[40rem] mt-2" />
        <div className="flex justify-end text-green-500 font-semibold text-xl mt-2">
          <div className="grid grid-cols-2 md:grid-cols-3 h-auto gap-5 mx-auto md:w-[40rem] items-center">
            <div className="md:col-span-2">Total</div>
            <div>
              ৳{" "}
              {Object.entries(values)
                .reduce((total, [key, value]) => {
                  const item = items.find((item) => item.id === Number(key));
                  return item ? total + item.price * value : total;
                }, 0)
                .toLocaleString()}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 h-auto gap-5 mx-auto w-full lg:w-[40rem] items-center">
          <button
            className="mt-5 px-4 py-2 bg-red-600 hover:bg-red-700 focus:bg-red-700 text-white font-bold rounded-md disabled:bg-gray-300 select-none"
            onClick={() => {
              setAmount(2_396_744_940_000);
              setValues({});
            }}
          >
            Reset
          </button>
          <button
            className="mt-5 h-10 hover:bg-green-600 focus:bg-green-600 bg-green-500 text-white font-bold rounded-md disabled:bg-gray-300 select-none"
            disabled={Object.keys(values).length === 0}
            onClick={() => {
              setAmount(2_396_744_940_000);
              setValues({});
            }}
          >
            <AlertDialog className="flex items-center justify-center min-h-screen">
              <AlertDialogTrigger className="w-full h-full">Checkout</AlertDialogTrigger>
              <AlertDialogContent className="flex flex-col items-center justify-center">
                <AlertDialogHeader className="flex flex-col items-center justify-center text-center space-y-4">
                  <AlertDialogTitle>
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="./pookie.jpeg" />
                    </Avatar>
                    Congratulations
                  </AlertDialogTitle>
                  <AlertDialogDescription className='font-semibold'>
                    Yusuf Shorkar just paid in chorom mullo :D
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex justify-center w-full mt-4">
                  <AlertDialogCancel className="bg-green-500 text-white font-bold rounded-md w-full select-none disabled:bg-gray-300">
                    Yay
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </button>
        </div>
      </div>
    </div>
  );
}
