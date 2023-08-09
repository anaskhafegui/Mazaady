import React from 'react'
import { Tajawal } from 'next/font/google'
import ArrowDown from '@/icons/ArrowDown'
import Search from '@/icons/Search'
import Image from 'next/image'
import Grid from '@/components/Grid'
import Favorite from '@/Icons/Favorite'
import ChanegPrice from '@/Icons/ChanegPrice'
import Notifications from '@/Icons/Notifications'
import NavIcon from '@/components/NavIcon'
import Views from '@/Icons/Views'
import Flag from '@/Icons/Flag'
import Like from '@/Icons/Like'
import Send from '@/Icons/Send'

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  weight: ['300', '400', '500', '700'],
})

export default function Page() {
  return (
    <div className={` flex flex-col w-full ltr bg-white ${tajawal.variable} font-sans`} dir="rtl">
      <Grid className="py-3">
        <Grid.Right>
          <div className="flex flex-row w-full flex-1 ">
            <div className="bg-pink bg-opacity-10 py-3 pr-3 pl-8 rounded-r-md cursor-pointer ml-[2px] flex items-center text-pink">
              <p className="text-pink font-medium text-sm ml-2">مزاد مباشر متعدد</p>
              <ArrowDown />
            </div>
            <div className="flex flex-1">
              <input
                className="bg-pink w-full bg-opacity-10 h-full px-5 py-2 text-sm text-zink focus:outline-none focus:ring-pink focus:ring-opacity-30 focus:ring-2 "
                placeholder="ابحث هنا"
              />
              <button className="bg-pink text-white px-5 py-2 rounded-l-md text-sm">
                <Search />
              </button>
            </div>
          </div>
        </Grid.Right>
        <Grid.Left>
          <div className="flex justify-end">
            <Image
              src={'/logo.png'}
              width={100}
              height={34}
              alt="mazaady logo"
              className="shrink-0 flex self-center"
            />
          </div>
        </Grid.Left>
      </Grid>

      <div className="bg-gradient-to-r from-pink to-dark-pink w-full mb-12">
        <Grid className="h-[73px]">
          <Grid.Right>
            <div className="flex h-full items-center">
              <ul className="flex gap-12">
                <li className="text-white hover:text-zink transition-colors cursor-pointer">
                  الرئيسية
                </li>
                <li className="text-white hover:text-zink transition-colors cursor-pointer">
                  التصنيفات
                </li>
                <li className="text-white hover:text-zink transition-colors cursor-pointer">
                  مشترياتى
                </li>
                <li className="text-white hover:text-zink transition-colors cursor-pointer">
                  حسابى
                </li>
              </ul>
            </div>
          </Grid.Right>
          <Grid.Left>
            <div className="flex h-full items-center justify-end">
              <ul className="flex items-center relative">
                <li className="cursor-pointer flex w-full h-full  ">
                  <NavIcon
                    hoverIcon={<img src="/price_change_hover.png" />}
                    normalIcon={<ChanegPrice />}
                  />
                </li>
                <li className="cursor-pointer flex w-full h-full">
                  <NavIcon
                    hoverIcon={<img src="/notifications_black_hover.png" />}
                    normalIcon={<Notifications />}
                  />
                </li>
                <li className="cursor-pointer flex w-full h-full">
                  <NavIcon
                    hoverIcon={<img src="/favorite_black_hover.png" />}
                    normalIcon={<Favorite />}
                  />
                </li>
                <li
                  className="h-8 flex items-center justify-center cursor-pointer rounded-2xl px-4 gap-2 text-white mr-3"
                  style={{
                    background:
                      'transparent radial-gradient(closest-side at 50% 50%, #FDBC01 0%, #FDBA03 31%, #FF951D 100%) 0% 0% no-repeat padding-box',
                    boxShadow: '0px 3px 6px #00000029',
                  }}
                >
                  <span className="text-white font-medium ">عربية</span>
                  <ArrowDown />
                </li>
              </ul>
            </div>
          </Grid.Left>
        </Grid>
      </div>

      <Grid className="mb-16">
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
        <Grid.Left>
          <div className="bg-white rounded shadow-main p-3 mb-6">
            <div className="flex justify-between items-center bg-neutral-700 p-3 rounded mb-2">
              <p className="text-xs text-white">تاريخ البث</p>
              <p className="text-base text-white font-bold">22-1-2022</p>
            </div>
            <div className="flex gap-2 ">
              <div className="flex-1 bg-purple flex-col rounded py-2 ">
                <p className="font-medium text-xs text-white text-center">القيمة الحالية للمزاد</p>
                <div className="text-2xl flex items-center justify-center gap-1 text-white text-center mb-3 font-bold relative">
                  <span>5000</span>
                  <span className="text-base">$</span>
                  <div className="absolute bottom-[-27px] bg-white rounded-lg z-10 shadow-[0px_3px_6px_#00000029]">
                    <p className="text-purple text-xs font-bold px-2">أحمد الرائد</p>
                  </div>
                </div>
              </div>
              <div className="flex-1  bg-purple bg-opacity-10 flex-col rounded py-2 ">
                <p className="font-medium text-xs text-purple text-center">
                  القيمة الحالية بعد الضريبة
                </p>
                <p className="text-2xl flex items-center justify-center gap-1 text-purple text-center mb-3 font-bold">
                  5050
                  <span className="text-base">$</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-main p-3 mb-6">
            <p className="text-neutral-700 font-bold text-xl mb-3">المتنافسون</p>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-700 text-sm font-bold">اسم المزايد</p>
                    <p className="text-xs text-gray ">13:59:00</p>
                  </div>
                </div>
                <p className="bg-yellow bg-opacity-10 text-yellow text-xl px-2 py-1 font-bold self-center">
                  20+
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-700 text-sm font-bold">اسم المزايد</p>
                    <p className="text-xs text-gray ">13:59:00</p>
                  </div>
                </div>
                <p className="bg-yellow bg-opacity-10 text-yellow text-xl px-2 py-1 font-bold self-center">
                  20+
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-700 text-sm font-bold">اسم المزايد</p>
                    <p className="text-xs text-gray ">13:59:00</p>
                  </div>
                </div>
                <p className="bg-yellow bg-opacity-10 text-yellow text-xl px-2 py-1 font-bold self-center">
                  20+
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-700 text-sm font-bold">اسم المزايد</p>
                    <p className="text-xs text-gray ">13:59:00</p>
                  </div>
                </div>
                <p className="bg-yellow bg-opacity-10 text-yellow text-xl px-2 py-1 font-bold self-center">
                  20+
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-700 text-sm font-bold">اسم المزايد</p>
                    <p className="text-xs text-gray ">13:59:00</p>
                  </div>
                </div>
                <p className="bg-yellow bg-opacity-10 text-yellow text-xl px-2 py-1 font-bold self-center">
                  20+
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-main p-3 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-neutral-500 bg-opacity-10 rounded px-3 py-2">
              <p className="text-xs text-neutral-500 font-bold">القيمة الابتدائية</p>
              <p className="text-2xl font-bold text-neutral-500">5000</p>
            </div>
            <div className="flex justify-between items-center bg-neutral-500 bg-opacity-10 rounded px-3 py-2">
              <p className="text-xs text-neutral-500 font-bold">القيمة التقريبية</p>
              <p className="text-2xl font-bold text-neutral-500">5000</p>
            </div>
            <div className="flex justify-between items-center bg-neutral-500 bg-opacity-10 rounded px-3 py-2">
              <p className="text-xs text-neutral-500 font-bold">العربون</p>
              <p className="text-2xl font-bold text-neutral-500">5000</p>
            </div>
            <div className="flex justify-between items-center bg-neutral-500 bg-opacity-10 rounded px-3 py-2">
              <p className="text-xs text-neutral-500 font-bold">سعر الشراء الفورى</p>
              <p className="text-2xl font-bold text-neutral-500">5000</p>
            </div>
            <div className="flex justify-between items-center bg-neutral-500 bg-opacity-10 rounded px-3 py-2">
              <p className="text-xs text-neutral-500 font-bold">قيمة ذيادة المزاد</p>
              <p className="text-2xl font-bold text-neutral-500">5000</p>
            </div>
          </div>
        </Grid.Left>
      </Grid>
    </div>
  )
}
