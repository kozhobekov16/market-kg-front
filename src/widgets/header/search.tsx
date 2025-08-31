"use client"

import {Button, Input, Modal} from "antd";
import {useState} from "react";
import {FiSearch} from "react-icons/fi";

const {Search} = Input;

export const SearchGlobal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="text" shape="circle" size={'large'} onClick={showModal}><FiSearch size={20}/></Button>
      <Modal
        styles={modalStyles} title="Что мы можем помочь вам найти?" open={isModalOpen} onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        centered
      >
        <Search placeholder="Введите продукт" enterButton/>
      </Modal>
    </>
  )
}

const modalStyles = {
  header: {
    borderRadius: 0,
    paddingInlineStart: 5,
  },
  mask: {
    backdropFilter: 'blur(2px)',
  },
  content: {
    boxShadow: '0 0 30px #999',
  },
};