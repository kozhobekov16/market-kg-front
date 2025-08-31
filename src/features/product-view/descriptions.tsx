import {Descriptions, DescriptionsProps} from "antd";

export const Description = () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Бренд',
      children: <p>Zhou Maomao</p>,
    },
    {
      key: '2',
      label: 'Модель',
      children: <p>1810000000</p>,
    },
    {
      key: '3',
      label: 'Размер экрана',
      children: <p>Hangzhou, Zhejiang</p>,
    },
    {
      key: '4',
      label: 'Hard Disk',
      children: <p>256 GB</p>,
    },
    {
      key: '5',
      label: 'CPU модель',
      children: <p>core i5</p>,
    },
  ];

  return (
    <div className="space-y-4">
      <Descriptions title="О продукте" items={items} bordered={true} column={1}/>
    </div>
  );
};
