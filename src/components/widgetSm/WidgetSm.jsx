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
         <span className="widgetSmTitle">Usuario con mas entregas</span>
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
