import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import EnquiryList from "./EnquiryList";

export const useGetAllData = () => {
  const [data, setData] = useState([]);
  const getAllEnquiries = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/website/enquiry/view"
      );
      setData(res.data.enquiryList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getAllEnquiries();
  }, []); // Runs once on mount

  const refresh = () => getAllEnquiries();

  return { data, refresh }; // Returns fetched data
};

export const useEditeuserData = () => {
  const updateUser = async (id, data) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/website/enquiry/enquiryUpdate/${id}`,
        data
      );
    } catch (error) {
      console.error("Error update a data:", error);
    }
  };
  return updateUser;
};

const form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: "",
  });


  const saveEnquiry = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/website/enquiry/insert", formData)
      .then((res) => {
        if (res.status === 200) {
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          console.log("else");
          alert("request failed with status", res.status);
        }
      });
  };


  // useEffect(() => {
  //   getAllEnquires();
  // }, []);

  // insert api
  // http://localhost:8000/api/website/enquiry/insert

  // update api
  //http://localhost:8000/api/website/enquiry/enquiryUpdate

  return (
    <div className="grid grid-cols-[30%_auto] gap-10">
      <div className="px-10">
        <ToastContainer />
        <h1 className="text-[40px] font-bold text-center py-6">
          Enquiry Registration form
        </h1>
        {/* user form */}
        <form onSubmit={saveEnquiry}>
          <div className="">
            <div className="bg-gray-200 p-4">
              <h2 className="font-bold">Enquiry form</h2>
              <div className="py-3">
                <Label htmlFor="name" name="name" value="Name" />
                <TextInput
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="py-3">
                <Label htmlFor="email" name="email" value="Email" />
                <TextInput
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter Your Email"
                  required
                  value={formData.email}
                />
              </div>
              <div className="py-3">
                <Label htmlFor="phone" value="Phone" />
                <TextInput
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter Your Phone Number "
                  required
                  value={formData.phone}
                />
              </div>
              <div className="py-3">
                <Label htmlFor="messag" name="message" value="Message" />
                <Textarea
                  placeholder="Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  value={formData.message}
                />
              </div>
              <div className="py-3">
                <Button className="w-full" type="submit">
                  {/* {formData._id? 'Save' : 'Update'} */}
                  Save
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <EnquiryList />
    </div>
  );
};

export default form;
