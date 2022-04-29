import "./featuredInfo.css";
import {
   ArrowDownward,
   ArrowUpward,
   PlaylistRemove,
} from "@mui/icons-material";
import { List, PlaylistAddCheck } from "@mui/icons-material";

export default function FeaturedInfo() {
   return (
      <div className="featured">
         <div className="featuredItem">
            <div className="featuredListIcons">
               <List className="featuredListIconAsig" />
            </div>
            <span className="featuredTitle">Entregas Asignadas</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">30</span>
               <span className="featuredMoneyRate">
                  40 <ArrowDownward className="featuredIcon negative" />
               </span>
            </div>
            <span className="featuredSub">Comparacion con ayer</span>
         </div>
         <div className="featuredItem">
            <div className="featuredListIcons">
               <PlaylistRemove className="featuredListIconOff" />
            </div>
            <span className="featuredTitle">Sin Gestionar</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">8</span>
               <span className="featuredMoneyRate">
                  3 <ArrowDownward className="featuredIcon negative" />
               </span>
            </div>
            <span className="featuredSub">Comparacion con ayer</span>
         </div>
         <div className="featuredItem">
            <div className="featuredListIcons">
               <PlaylistAddCheck className="featuredListIconOn" />
            </div>
            <span className="featuredTitle">Gestionadas</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">25</span>
               <span className="featuredMoneyRate">
                  23 <ArrowUpward className="featuredIcon" />
               </span>
            </div>
            <span className="featuredSub">Comparacion con ayer</span>
         </div>
         <div className="featuredItem">
            <div className="featuredListIcons">
               <PlaylistRemove className="featuredListIconOff" />
            </div>
            <span className="featuredTitle">No entregadas</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">5</span>
               <span className="featuredMoneyRate">
                  6 <ArrowUpward className="featuredIcon" />
               </span>
            </div>
            <span className="featuredSub">Comparacion con ayer</span>
         </div>
         <div className="featuredItem">
            <div className="featuredListIcons">
               <PlaylistAddCheck className="featuredListIconOn" />
            </div>
            <span className="featuredTitle">Entregadas</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">26</span>
               <span className="featuredMoneyRate">
                  23 <ArrowUpward className="featuredIcon" />
               </span>
            </div>
            <span className="featuredSub">Comparacion con ayer</span>
         </div>
      </div>
   );
}
