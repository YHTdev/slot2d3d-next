import React from "react";
import SelectTable, { TableCell, TableRow } from "../SelectTable";

function LimitationList({ data }) {
  const getColor = (limit, Purchase) => {
    const percentage = (Purchase / limit) * 100;
    if (percentage < 30) {
      return "<30%";
    } else if (percentage > 30 && percentage < 50) {
      return "30%> နှင့် <50% ";
    } else if (percentage > 50 && percentage < 90) {
      return "50%> နှင့် <90%";
    } else if (percentage > 90) {
      return "90%>";
    } else {
      return "<30%";
    }
  };
  return (
    <div className="w-full">
      <SelectTable>
        <TableRow className="bg-slate-100">
          <TableCell isHeader={true}>ဂဏန်း</TableCell>
          <TableCell isHeader={true}>ဝယ်ယူထားသောပမာဏ</TableCell>
          <TableCell isHeader={true}>သတ်မှတ်ချက်</TableCell>
          <TableCell isHeader={true}>အခြေအနေ</TableCell>
        </TableRow>
        {data &&
          data.map((d, i) => (
            <TableRow key={i}>
              <TableCell > {d.num} </TableCell>
              <TableCell className='text-left'>{d.purchased} ကျပ် </TableCell>
              <TableCell className='text-left'>{d.limit} ကျပ်</TableCell>
              <TableCell> {getColor(d.limit,d.purchased)} </TableCell>
            </TableRow>
          ))}
      </SelectTable>
    </div>
  );
}

export default LimitationList;
