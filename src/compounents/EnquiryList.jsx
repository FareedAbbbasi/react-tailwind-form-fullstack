import React, { useState } from "react";
import { Table } from "flowbite-react";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const EnquiryList = () => {
  let deleteRow = (delId) => {
    Swal.fire({
      title: "Do you want to delete this?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/website/enquiry/delete/${delId}`)
          .then((res) => {
            //write the logic to view all the userdata.
            getAllEnquiries()
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

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
            {data.length >= 1 ? (
              data.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.phone}</Table.Cell>
                    <Table.Cell>{item.message}</Table.Cell>
                    <Table.Cell>
                      <button
                        // onClick={() => deleteRow(item._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md"
                        onClick={() => deleteRow(item._id)}
                      >
                        Delete
                      </button>
                    </Table.Cell>
                    <Table.Cell>
                      <button
                        // onClick={()=> editeRow(item._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md"
                      >
                        Edite
                      </button>
                    </Table.Cell>
                  </tr>
                );
              })
            ) : (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell colSpan={7} className="text-center">
                  No Data Found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EnquiryList;
