const page = () => {
  return (
    <div className="font-roboto">
      <div className="events_header h-48 flex text-yellow-400 text-5xl font-bold items-center">
        <p className="px-10 translate-x-10">CHECKOUT</p>
      </div>

      <div className="bg-white min-h-screen text-black">
        <div className="custom_divide p-4">
          {/* Left side */}
          <div className="flex flex-col gap-3">
            <small className="m-2 mb-0 px-4">
              <a className="text-blue-400" href="#">
                Have a coupon? Click here to enter your code
              </a>
            </small>
            <div className="m-2 mt-0 p-4 pt-1">
              <p className="text-3xl font-semibold">BILLING DETAILS</p>
            </div>

            <div className="mx-2 px-4">
              <div className="flex gap-2 my-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First name"
                  className="w-1/2 border border-gray-300 rounded-md p-1"
                />
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last name"
                  className="w-1/2 border border-gray-300 rounded-md p-1"
                />
              </div>

              <input
                type="text"
                name="company_name"
                id="company_name"
                placeholder="Company name(Optional)"
                className="w-full border border-gray-300 rounded-md p-1"
              />
            </div>

            <div className="m-2 my-3 px-4">
              <label className="text-lg font-bold" htmlFor="arm_region">
                ARMRegion Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="India"
                className="w-full border border-gray-300 rounded-md p-1"
              />
            </div>

            <div className="m-2 my-3 px-4">
              <label className="text-xl font-bold" htmlFor="address">
                Street address
              </label>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full border border-gray-300 rounded-md p-1"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="House number and street name"
                />
                <input
                  className="w-full border border-gray-300 rounded-md p-1"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Apartment, suite, unit etc (Optional)"
                />
                <input
                  className="w-full border border-gray-300 rounded-md p-1"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Town/City"
                />
              </div>
            </div>

            <div className="m-2 my-3 px-4">
              <label className="text-xl font-bold" for="state">
                State
              </label>

              <select
                className="w-full border my-2 border-gray-300 rounded-xl p-1"
                name="state"
                id="state"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>

              <div className="flex flex-col gap-2 my-2">
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="PIN Code"
                  className="w-full border-b border-gray-300 p-1"
                />
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Phone"
                  className="w-full border-b border-gray-300 p-1"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full border-b border-gray-300 p-1"
                />
              </div>
            </div>

            <div className="flex flex-col m-2 my-3 px-4">
              <label
                className="text-xl font-bold"
                htmlFor="additional_information"
              >
                ADDITIONAL INFORMATION
              </label>

              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery"
                name="info"
                id="info"
                cols="30"
                rows="5"
                className="border border-gray-300 rounded-lg p-1"
              ></textarea>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <div className="m-2 p-4">
              <p className="text-3xl font-extrabold">YOUR ORDER</p>
            </div>

            <div className="flex justify-between m-2 p-4 pt-0 font-bold">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            <div className="flex justify-between m-2 px-4 text-sm text-gray-500">
              <p>Product Name</p>
              <p>$18.00 </p>
            </div>

            <div className="flex justify-between m-2 px-4 text-sm">
              <p className="font-bold">Subtotal</p>
              <p className="text-gray-500">$1900</p>
            </div>

            <div className="flex justify-between m-2 px-4 font-bold ">
              <p>Total</p>
              <p>$1918</p>
            </div>

            <div className="bg-gray-100 text-gray-500 flex text-center m-4 p-6">
              <p>
                Sorry, it seems that there are no available payment methods for
                your state. Please contact us if you require assistance or wish
                to make alternate arrangements.
              </p>
            </div>

            <div className="font-bold flex text-sm text-center m-4 p-6">
              <p>
                Your personal data will be used to process your order, support 
                your experience throughout this website, and for other purposes
                described in our privacy policy. I have read and agree to the website
                terms and conditions.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
