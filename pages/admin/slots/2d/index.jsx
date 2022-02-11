import React, { useState } from "react";
import Layout from "../../../../components/layout";
import ReactSelect from "react-select";
import Slot2dLimitations from "../../../../data/2dnumber.json";
import Timer from "../../../../components/CountDown";
import { each, find } from "lodash";
import Card, { CardBody, CardHeader } from "../../../../components/Card";
import UiSelect from "../../../../components/forms/UiSelect";
import UiInput from "../../../../components/forms/UiInput";
import UiButton from "../../../../components/forms/UiButton";
import SelectTable, {
  TableCell,
  TableRow,
} from "../../../../components/SelectTable";
import ManagementLayout from "../../../../components/layout/ManagementLayout";
function Slot2D() {
  const [formData, setFormData] = useState({
    selectedFormData: [],
    amount: "",
    sessionId: "",
    firstNum: "",
    secondNum: "",
    totalAmount: 0,
    name: "",
  });
  const [showLimit, setShowLimit] = useState(false);
  const Sessions = [
    {
      label: "မနက်ပိုင်း",
      value: "1",
    },
    {
      label: "နေ့လည်ပိုင်း",
      value: "2",
    },
    {
      label: "ညနေပိုင်း",
      value: "3",
    },
  ];
  const SlotOptions = [
    {
      label: "0",
      value: "0",
    },
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
  ];

  const filterFormData = (obj) => {
    const filteredFormData = formData.selectedFormData.filter(
      (value) => value.num !== obj.num
    );

    let totalAmount = 0;
    each(filteredFormData, (e) => {
      totalAmount += parseInt(e.amount);
    });
    setFormData({
      ...formData,
      selectedFormData: filteredFormData,
      totalAmount: totalAmount,
    });
  };

  const onSumEvent = () => {
    if (
      formData.amount &&
      formData.firstNum &&
      formData.secondNum &&
      formData.sessionId
    ) {
      let selectedFormData = formData.selectedFormData;
      const inValidData = find(selectedFormData, {
        num: formData.firstNum + formData.secondNum,
      });

      const params = {
        amount: formData.amount,
        num: formData.firstNum + formData.secondNum,
      };

      if (inValidData) {
        alert("ထည့်ပီးသားဂဏန်းဖြစ်သည်");
      } else {
        selectedFormData.push(params);
        setFormData({ ...formData, selectedFormData: selectedFormData });
      }
      let totalAmount = 0;
      formData.selectedFormData.forEach((element) => {
        totalAmount += parseInt(element.amount);
      });
      setFormData({ ...formData, totalAmount: totalAmount });
    } else {
      alert("သေချာစွာဖြည့်ပါ");
    }
  };
  return (
    
      <ManagementLayout>
        ok
      </ManagementLayout>
   
  );
}

export default Slot2D;
