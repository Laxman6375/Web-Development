import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", 
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotification:""}
    );

  function changeHandler(e){
    const {name, value, checked, type} = e.target;
    setFormData((prev) =>({...prev, [name]:type === "checkbox" ? checked : value}));
  }

  function submitHandler(e){
    e.preventDefault();
    console.log("finally printing the value of form data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <div className=" w-full md:max-w-[50%] mx-auto shadow p-8">
      <form onSubmit={submitHandler}  className=" space-y-2">
        <label htmlFor="firstName" className=" text-gray-900 leading-6 text-sm font-medium " >First Name</label><br/>
        <input type="text"
        name="firstName"
        placeholder="Laxman"
        id="firstName"
        value={formData.firstName}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

        <label htmlFor="lastName" className=" text-gray-900 leading-6 text-sm font-medium ">Last Name</label><br/>
        <input type="text"
        name="lastName"
        placeholder="Suthar"
        id="lastName"
        value={formData.lastName}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

      <label htmlFor="email" className=" text-gray-900 leading-6 text-sm font-medium ">Email Address</label><br/>
        <input type="email"
        name="email"
        placeholder="Lx123@gmail.com"
        id="email"
        value={formData.email}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

        <label htmlFor="country" className=" text-gray-900 leading-6 text-sm font-medium ">Country</label><br/>
        <select 
         value={formData.country}
         id="country"
         name="country"
         onChange={changeHandler}
         className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"

         >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
        <br/>

        <label htmlFor="streetAddress" className=" text-gray-900 leading-6 text-sm font-medium ">Street Address</label><br/>
        <input type="text"
        name="streetAddress"
        placeholder="B-78"
        id="streetAddress"
        value={formData.streetAddress}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

        <label htmlFor="city" className=" text-gray-900 leading-6 text-sm font-medium ">City</label><br/>
        <input type="text"
        name="city"
        placeholder="Jodhpur"
        id="city"
        value={formData.city}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

        <label htmlFor="state" className=" text-gray-900 leading-6 text-sm font-medium ">State / Province</label><br/>
        <input type="text"
        name="state"
        placeholder="Rajasthan"
        id="state"
        value={formData.state}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

        <label htmlFor="postalCode" className=" text-gray-900 leading-6 text-sm font-medium ">Postal Code</label><br/>
        <input type="text"
        name="postalCode"
        placeholder="342001"
        id="postalCode"
        value={formData.postalCode}
        onChange={changeHandler}
        className=" w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br/>

        <br/>
        <fieldset className=" mb-10">
          <legend className=" text-sm font-semibold leading-6 text-gray-900 ">By Email</legend>
          <div className=" mt-4 space-y-2">
          
          <div className="flex">
          <input 
            type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
            className=" h-4 w-4 mt-1 rounded"
            />
          <div className="flex flex-col ml-3">
          <label htmlFor="comments" className=" text-gray-900 leading-6 text-sm font-semibold ">Comments</label>
          <p className=" text-gray-500">Get notifies when someones posts a comment on a posting</p>
          </div>
          </div>

          <div className="flex">
          <input 
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
            className=" h-4 w-4 mt-1 rounded"
          />
          <div className="flex flex-col ml-3">
          <label htmlFor="candidates" className=" text-gray-900 leading-6 text-sm font-medium ">Candidates</label>
          <p className=" text-gray-500">Get notifies when someones posts a comment on a posting</p>
          </div>
          </div>
         
          <div className="flex">
          <input 
            type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
            className=" h-4 w-4 mt-1 rounded"
          />
          <div  className="flex flex-col ml-3">
          <label htmlFor="comments" className=" text-gray-900 leading-6 text-sm font-medium ">Offers</label>
          <p className=" text-gray-500">Get notifies when someones posts a comment on a posting</p>
          </div>
          </div>
          </div>
          
        </fieldset>

        <br/>
        <fieldset className=" mt-10">
          <legend className=" text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p className=" text-gray-500">These are delivered via SMS to your mobile phone</p>

          <div className=" mt4 space-y-2">
          <div className=" flex gap-x-4">
          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything" className=" text-gray-900 leading-6 text-sm font-medium ">Everything</label>
          </div>

          <div className=" flex gap-x-4">
          <input
            type="radio"
            id="pushemail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushemail" className=" text-gray-900 leading-6 text-sm font-medium ">Same as Email</label>
          </div>

          <div className=" flex gap-x-4">
          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="NO Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing" className=" text-gray-900 leading-6 text-sm font-semibold ">NO Push Notifications</label>
          </div>
          </div>
          
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 hover:bg-blue-700 transition-all duration-200">Save</button>
      </form>
      </div>
    </div>
  );
}

export default App;
