import React from "react";

const DetailSong = () => {
    return(
        <>
           <div className="col-span-1 bg-blue-800">
                <p className="m-3 text-orange-400 font-semibold">Now Playing</p>
                <h2 className="mx-3 text-orange-500 text-xl">Name Song</h2>
                <div className="w-[240px] m-auto mt-10">
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png" alt="avatar"></img>
                </div>
                <div className="flex justify-evenly mt-10 items-center">
                    <img className="w-[80px] rounded-full" src="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png" alt="avatar"></img>
                    <span className="text-xl text-white">Spider Man</span>
                </div>
           </div>
        </>
    );
};

export default DetailSong;