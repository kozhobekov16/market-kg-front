import {Button} from "antd";
import {RightOutlined} from "@ant-design/icons";
import Link from "next/link";

export const LinkViewMore = ({text, link}: { text: string, link: string }) => {
  return (
    <div className="flex justify-between items-center px-6 sm:px-0">
      <p className="text-xl sm:text-3xl font-semibold">
        {text}
      </p>
      <Button
        type="link"
        className=""
        iconPosition={'end'}
        icon={<RightOutlined/>}
      >
        <Link href={link}>
          Посмотреть все
        </Link>
      </Button>
    </div>
  )
}