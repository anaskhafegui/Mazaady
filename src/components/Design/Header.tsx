import React from 'react';
import Grid from '@/components/Grid'
import NavIcon from '@/components/NavIcon'
import ChanegPrice from '@/Icons/ChanegPrice'
import Notifications from '@/Icons/Notifications'
import ArrowDown from '@/Icons/ArrowDown'
import Favorite from '@/Icons/Favorite'
const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
