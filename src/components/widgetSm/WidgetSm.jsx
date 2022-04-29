import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";



export default function WidgetSm() {
   const [newUser] = useState([]);

//    useEffect(() => {
//       try {
//          const getNewUser = async () => {
//             const { data } = await fetch(
//                "http://localhost:8080/api/users?new=true",
//                {
//                   headers: {
//                      "x-token":localStorage.getItem("x-token")
//                   },
//                }
//             );
//             console.log(data);
//             setNewUser(data.newUsers);
//          };
//          getNewUser();
//       } catch (error) {}
   
//    }, []);

   return (


      <div className="widgetSm">
         <span className="widgetSmTitle">Conductores con mas entregas</span>
         <table className="widgetLgTable" >
            <tbody>
               <tr className="widgetLgTr">
                  <th className="widgetLgTh">Conductor</th>
                  <th className="widgetLgTh">Vehiculo</th>
                  <th className="widgetLgTh">Entregados</th>
                  <th className="widgetLgTh">No Entregados</th>
               </tr>
               <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                     <img
                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="widgetLgImg"
                     />
                     <span className="widgetLgName">Susan Carol</span>
                  </td>
                  <td className="widgetLgDate">bgr - 555</td>
                  <td className="widgetLgAmount">5</td>
                  <td className="widgetLgAmount">1</td>
                  
          
               </tr>
               <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                     <img
                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="widgetLgImg"
                     />
                     <span className="widgetLgName">Juan Carmelo</span>
                  </td>
                  <td className="widgetLgDate">gfr - 557</td>
                  <td className="widgetLgAmount">4</td>
                  <td className="widgetLgAmount">2</td>
               </tr>
               <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                     <img
                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="widgetLgImg"
                     />
                     <span className="widgetLgName">Juan Carmelo</span>
                  </td>
                  <td className="widgetLgDate">hht - 777</td>
                  <td className="widgetLgAmount">3</td>
                  <td className="widgetLgAmount">2</td>
               </tr>
               <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                     <img
                        src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="widgetLgImg"
                     />
                     <span className="widgetLgName">Juan Carmelo</span>
                  </td>
                  <td className="widgetLgDate">Carlos en gordo</td>
                  <td className="widgetLgAmount">2</td>
                  <td className="widgetLgAmount">2</td>
               </tr>
 

            </tbody>
         </table>
         
         
         <ul className="widgetSmList">
            {newUser ? (
               newUser.map((item) => {
                  return (
                     <li className="widgetSmListItem" key={item._id}>
                        <img
                           src= {item.profilePic || "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"}
                           alt=""
                           className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                           <span className="widgetSmUsername">
                              {item.username}
                           </span>
                           <span className="widgetSmUserTitle">
                              Software Engineer
                           </span>
                        </div>
                        <button className="widgetSmButton">
                           <Visibility className="widgetSmIcon" />
                           Display
                        </button>
                     </li>
                  );
               })
            ) : (
               <>No hay usuarios registrados</>
            )}
         </ul>
      </div>
   );
}
