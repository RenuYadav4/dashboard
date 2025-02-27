import React from 'react'
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';
import { Category, Inject, Legend, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import { Tooltip } from '@syncfusion/ej2-react-popups';
const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full" />

        <Inject services={[ Legend, Tooltip, Category]} />
        <SeriesCollectionDirective >
          {pieChartData.map((item, index) =>
            <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </div>
  </div >
  )
}

export default Pie;