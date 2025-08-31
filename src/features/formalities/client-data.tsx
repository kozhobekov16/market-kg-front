"use client"

import {Card, Mentions, Radio, RadioChangeEvent} from "antd";
import {useState} from "react";
// import {MapField} from "@/shared/fields/map-field";

interface ClientData {
  address: string;
}

export const ClientData = () => {
  const [valueName, setValueName] = useState("Esentur Ch");
  // const {control} = useForm<ClientData>();
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Card
      title="Клиент"
      className="my-6 rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex flex-col gap-6">
        <Mentions
          value={valueName}
          onChange={setValueName}
          allowClear
        />
        MapField
        {/*<MapField control={control} name="address"/>*/}
        <div>
          <p className="text-lg font-medium mb-2">Способ доставки</p>
          <Radio.Group
            className="flex flex-col gap-4"
            onChange={onChange}
            value={value}
          >
            {[
              {value: 1, label: "Бесплатная доставка", details: "5-10 рабочих дней"},
              {value: 2, label: "Самовывоз", details: "5-10 рабочих дней"},
              {value: 3, label: "Экспресс-доставка", details: "1-3 рабочих дня"},
            ].map(({value, label, details}) => (
              <Radio key={value} value={value}>
                <div className="p-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all">
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-gray-500">{details}</p>
                </div>
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
    </Card>
  );
};
