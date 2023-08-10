import ArrowDown from '@/Icons/ArrowDown';
import Grid from '@/components/Grid'
import React, { useState } from 'react';
import Search from '@/Icons/Search'
import Image from 'next/image'


interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
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
  );
};

export default SearchBar;