import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
// import { useMemo } from "react";
// import { useEffect } from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useState } from "react";


export default function Home() {





    const [userStats] = useState([])

    // useEffect(() => {

    //     const getStats = async () => {

    //         try {
    //             const {data} = await fetch("http://localhost:8080/api/users/stats")

    //             data.meses.sort(function(a,b){
    //                 return a._id -b._id;
    //             })
           
    //             const newData = data.meses.map(item => {
    //                 return {
    //                     name:MONTHS[item._id - 1],
    //                     "New User":item.total
    //                 }
    //             })
    //             setUserStats(newData)
    //             // console.log(newData);

    

    //         } catch (error) {
    //             console.log("Error");
    //             console.error(error);
               
    //         }
    //     }

    //     getStats()

    // }, [MONTHS])


  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="Grafica de datos semanal" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
