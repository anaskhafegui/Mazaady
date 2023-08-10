import React from 'react'
import Search from '@/Icons/Search'
import Image from 'next/image'
import Grid from '@/components/Grid'
import Views from '@/Icons/Views'
import Flag from '@/Icons/Flag'
import Like from '@/Icons/Like'
import Send from '@/Icons/Send'

const HomePageContent: React.FC = () => {
  return (
    <Grid.Right>
    <div className="flex">
      <div className="w-[78px]"></div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col flex-1 bg-white rounded shadow-main mb-9">
          <div className="w-full h-[380px] relative">
            <Image
              src="/banner.jpg"
              alt="banner"
              className="rounded object-cover w-full h-full absolute inset-0"
              width={400}
              height={400}
            />
            <div className="relative flex justify-between px-2 py-4">
              <div className="backdrop-blur-sm bg-stone-900 bg-opacity-30 rounded text-white h-9 flex items-center">
                <div className="bg-white w-full h-full rounded-r px-3">
                  <img
                    src={'/animation.gif'}
                    className="w-full h-full rounded-r aspect-square"
                  />
                </div>
                <div className="px-3 border-l border-l-white border-opacity-30">
                  <span>02:00</span>
                </div>
                <div className="flex gap-1 items-center px-3">
                  <Views />
                  <span className="text-xs">3000</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="rounded-full w-12 h-12 backdrop-blur-sm bg-stone-900 bg-opacity-30 text-white flex items-center justify-center cursor-pointer">
                  <Flag />
                </div>
                <div className="rounded-full w-12 h-12 backdrop-blur-sm bg-stone-900 bg-opacity-30 text-white flex items-center justify-center cursor-pointer">
                  <Like />
                </div>
                <div className="rounded-full w-12 h-12 backdrop-blur-sm bg-stone-900 bg-opacity-30 text-white flex items-center justify-center cursor-pointer">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-3 py-2">
            <div className="mb-3">
              <p className="text-xl text-neutral-700 font-bold">
                شراء مجموعة من السيارات من موديلات1990
              </p>
              <p className="text-gray text-xs">code 1234</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <button className="bg-pink bg-opacity-10 text-pink px-3 py-2 rounded outline-0  ">
                  10000+
                </button>
                <button className="bg-pink bg-opacity-10 text-pink px-3 py-2 rounded hover:">
                  10010+
                </button>
                <button className="bg-pink bg-opacity-10 text-pink px-3 py-2 rounded hover:">
                  10020+
                </button>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="rounded px-3 py-2 outline-none text-sm text-neutral-700 border border-slate-300 min-w-[200px]"
                  placeholder="اكتب المبلغ"
                />
                <button className="bg-pink text-white px-8 py-2 rounded text-sm font-bold bg-gradient-to-l from-pink to-dark-pink">
                  تأكيد
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-white rounded shadow-main px-8 py-4">
          <p className="text-xl text-neutral-700 font-bold mb-2">ارسال رسالة الى البائع</p>
          <p className="text-sm text-neutral-700 mb-3">
            يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار
          </p>
          <div className="flex gap-1">
            <input
              type="text"
              className="flex flex-1 rounded-2xl px-3 py-2 outline-none text-sm text-neutral-700 border border-slate-300  bg-zinc-100"
              placeholder="اكتب سؤالك"
            />
            <button className=" text-white rounded-full font-bold bg-gradient-to-l from-pink to-dark-pink">
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Grid.Right>
  );
};

export default HomePageContent;
