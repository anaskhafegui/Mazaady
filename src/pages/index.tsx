import React from 'react'
import { Tajawal } from 'next/font/google'
import Grid from '@/components/Grid'
import SearchBar from '@/components/Design/SearchBar'
import Header from '@/components/Design/Header'
import HomePageContent from '@/components/Design/HomePageContent'
import HomeSideBar from '@/components/Design/HomeSideBar'

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  weight: ['300', '400', '500', '700'],
})

export default function Page() {
  const handleSearch = (query: string) => {
    // Perform search logic here using the query
    console.log('Searching for:', query)
  }
  return (
    <div className={`flex flex-col w-full ltr bg-white ${tajawal.variable} font-sans`} dir="rtl">
      {/* SearchBar Component */}
      <SearchBar onSearch={handleSearch} />

      {/* Header Component */}
      <Header />

      <Grid className="mb-16">
        {/* content Component */}
        <HomePageContent />
        {/* Sidebar Component */}
        <HomeSideBar />
      </Grid>
    </div>
  )
}
