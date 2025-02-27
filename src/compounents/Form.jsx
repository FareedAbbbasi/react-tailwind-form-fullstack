import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const form = () => {
  let [enquiryData, setEnquiryData] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: "",
  });
  console.log(formData);

  // const getValue = ()=>{}

  let saveEnquiry = (e) => {
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

  let getAllEnquires = () => {
    axios
      .get("http://localhost:8000/api/website/enquiry/view", formData)
      .then((res) => {
        res.data;
      })
      .then((finaldata) => {
        if (finaldata.status) setEnquiryData(finaldata.enquiryData);
      });
  };

  useEffect(() => {
    getAllEnquires();
  }, []);

  // insert api
  // http://localhost:8000/api/website/enquiry/insert

  // update api
  //http://localhost:8000/api/website/enquiry/enquiryUpdate

  return (
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
                autoComplete="on"
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
                autoComplete="on"
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
                autoComplete="on"
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
                autoComplete="on"
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
  );
};

export default form;
