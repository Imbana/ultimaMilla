
import "./widgetLg.css";

const valueBoton ={
    Approved:"Entregado",
    Pending:"Retrasado",
    Declined:"No recibido",
}

export default function WidgetLg() {
   const Button = ({ type }) => {
      return <button className={"widgetLgButton " + type}>{valueBoton[type]}</button>;
   };
   console.log(valueBoton.Approved);
   return (
      <div className="widgetLg" >
         <h3 className="widgetLgTitle">Ultimas entregas</h3>
         <table className="widgetLgTable" >
            <tbody>
               <tr className="widgetLgTr">
                  <th className="widgetLgTh">Conductor</th>
                  <th className="widgetLgTh">Cliente</th>
                  <th className="widgetLgTh">Tipo de entrega</th>
                  <th className="widgetLgTh">Estado</th>
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
                  <td className="widgetLgDate">Julian Andres</td>
                  <td className="widgetLgAmount">Refrigerador</td>
                  <td className="widgetLgStatus">
                     <Button type="Approved" />
                  </td>
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
                  <td className="widgetLgAmount">Nevera</td>
                  <td className="widgetLgStatus">
                     <Button type="Declined" />
                  </td>
               </tr>
               <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                     <img
                        src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ2NDgsIDIwMjEvMDEvMTItMTU6NTI6MjkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NkI0RTE1NkM2OTI5MTFFNjk5MDBEODU4OTFFRTc1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENFOTMxMDU3QTUxMTFFQjg5RDNFQUQxRUIyQTRDOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFOTMxMDQ3QTUxMTFFQjg5RDNFQUQxRUIyQTRDOTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGQzYzE3ZGUtNjgxMy0zYzQ0LThlY2UtOTA1ZDYwOWMyMmIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyMzQzRDdFMjM3NjExRTg5MEIwQTdEMUUxOUVCODJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS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"
                        alt=""
                        className="widgetLgImg"
                     />
                     <span className="widgetLgName">Susan Carol</span>
                  </td>
                  <td className="widgetLgDate">Julian Andres</td>
                  <td className="widgetLgAmount">Televisor</td>
                  <td className="widgetLgStatus">
                     <Button type="Pending" />
                  </td>
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
                  <td className="widgetLgDate">El Brayan</td>
                  <td className="widgetLgAmount">Celular</td>
                  <td className="widgetLgStatus">
                     <Button type="Declined" />
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
