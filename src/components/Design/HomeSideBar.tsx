import React from 'react';
import Grid from '@/components/Grid'
const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
