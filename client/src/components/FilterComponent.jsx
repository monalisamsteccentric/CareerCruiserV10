import React from 'react'
import JobCategory from './Filters/JobCategorySelector'
import Location from './Filters/LocationSelector'
import WorkMode from './Filters/WorkModeSelector'
import SearchComponent from './SearchComponent'

const FilterComponent = () => {
  return (
    <div className='p-4'>
      <div>
        <div className='px-1' >
          <h4> Set your role</h4>
          <JobCategory />
        </div>
        <div className='px-1'>
        <h4>Set your prefered location</h4>
          <Location />
        </div>
        <div className='px-1'>
          <h4>Set your prefered Work Mode</h4>
          <WorkMode />
        </div>
      </div>
      <SearchComponent />
      </div>
  )
}

export default FilterComponent;