import React from "react";
import { Table } from "flowbite-react";
import axios from "axios";

const EnquiryList = (data) => {
    console.log(data)
  return (
    <div className="bg-gray-200 p-10 mt-[70px] mr-[50px]">
      <h2 className="text-[20px] font-bold p-4">Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table className="bg-gray-200">
          <Table.Head>
            <Table.HeadCell>SR No</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Message</Table.HeadCell>
            <Table.HeadCell>Delte</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"01"}
              </Table.Cell>
              <Table.Cell>Abbas</Table.Cell>
              <Table.Cell>abc@gmail.com</Table.Cell>
              <Table.Cell>03555555555</Table.Cell>
              <Table.Cell>Hey</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Delete
                </a>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EnquiryList;
